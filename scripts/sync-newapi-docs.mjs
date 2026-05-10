/**
 * Syncs public pages from docs.newapi.pro into docs-site/ (markdown via Readability + Turndown).
 * 默认抓取 **中文** 文档（/zh/docs/...）；英文：`DOCS_LOCALE=en npm run docs:sync`
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import TurndownService from "turndown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_ADMIN = path.join(ROOT, "docs-site", "settings");
const OUT_API = path.join(ROOT, "docs-site", "api");

const ORIGIN = "https://docs.newapi.pro";
const DELAY_MS = 450;
const MAX_API_PAGES = Number(process.env.MAX_API_PAGES || 200);
const SKIP_API_SYNC = process.env.SKIP_API_SYNC === "1";
/** `zh`（默认）或 `en` */
const DOCS_LOCALE = (process.env.DOCS_LOCALE || "zh").toLowerCase() === "en" ? "en" : "zh";
const GUIDE_BASE = `/${DOCS_LOCALE}/docs/guide/feature-guide`;
const API_BASE = `/${DOCS_LOCALE}/docs/api`;

/** 更接近浏览器的请求头，减少部分路径返回 403 */
const FETCH_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language":
    DOCS_LOCALE === "zh" ? "zh-CN,zh;q=0.9,en;q=0.8" : "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
  referer: `${ORIGIN}/`,
};

/**
 * 「用户指南」内容目录：下列官方页面写入 `docs-site/settings/`（顺序与侧栏一致）。
 * feature-guide 根页 -> `settings/index.md`（总览，侧栏可不挂此项）。
 */
const PLATFORM_SETTINGS_PATHS = [
  GUIDE_BASE,
  `${GUIDE_BASE}/user/auth`,
  `${GUIDE_BASE}/user/personal-setting`,
  `${GUIDE_BASE}/user/token`,
  `${GUIDE_BASE}/user/chat-apps`,
  `${GUIDE_BASE}/user/pricing`,
  `${GUIDE_BASE}/user/log`,
  `${GUIDE_BASE}/user/topup`,
  `${GUIDE_BASE}/user/task`,
];

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeDocPath(href) {
  if (!href || href.startsWith("#")) return null;
  try {
    const u = href.startsWith("http") ? new URL(href) : new URL(href, ORIGIN);
    if (u.origin !== new URL(ORIGIN).origin) return null;
    let p = u.pathname.replace(/\/$/, "");
    return p || null;
  } catch {
    return null;
  }
}

function extractApiLinks(html) {
  const out = new Set();
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const p = normalizeDocPath(m[1]);
    if (p && p.startsWith(`${API_BASE}`)) out.add(p);
  }
  return [...out];
}

async function crawlAndWriteApiSection() {
  const visited = new Set();
  const queued = new Set();
  const queue = [];
  const add = (p) => {
    if (queued.has(p) || visited.has(p)) return;
    queued.add(p);
    queue.push(p);
  };

  add(API_BASE);

  while (queue.length && visited.size < MAX_API_PAGES) {
    const docPath = queue.shift();
    queued.delete(docPath);
    if (visited.has(docPath)) continue;

    const url = ORIGIN + docPath;
    const res = await fetch(url, { headers: FETCH_HEADERS });
    if (!res.ok) {
      console.warn(`Skip ${url} status ${res.status}`);
      continue;
    }
    const html = await res.text();
    visited.add(docPath);

    try {
      const dom = new JSDOM(html, { url });
      const article = new Readability(dom.window.document).parse();
      if (!article) throw new Error("no article");
      const md = turndown.turndown(article.content || "");
      await writeMarkdown(apiOutPath(docPath), url, article.title || docPath, md);
      console.log("OK", docPath);
    } catch (e) {
      console.error("FAIL parse", docPath, e.message);
    }

    for (const next of extractApiLinks(html)) {
      add(next);
    }
    await sleep(DELAY_MS);
  }
  return visited.size;
}

/** 站点侧栏中可能出现、但从首页 BFS 不一定在页数上限内覆盖到的接口页 */
const API_EXTRA_PATHS = [
  `${API_BASE}/ai-model/videos/kling/getklingtext2video`,
  `${API_BASE}/ai-model/chat/gemini/geminirelayv1beta`,
  `${API_BASE}/ai-model/images/qwen/editimage`,
  `${API_BASE}/ai-model/images/qwen/createimage`,
];

async function syncApiExtraPaths() {
  for (const p of API_EXTRA_PATHS) {
    try {
      await syncUrl(p, apiOutPath(p));
    } catch (e) {
      console.warn("EXTRA skip", p, e.message);
    }
    await sleep(DELAY_MS);
  }
}

function adminOutPath(docPath) {
  const rest = docPath === GUIDE_BASE ? "" : docPath.slice(GUIDE_BASE.length).replace(/^\//, "");
  if (!rest) return path.join(OUT_ADMIN, "index.md");
  return path.join(OUT_ADMIN, ...rest.split("/")) + ".md";
}

function apiOutPath(docPath) {
  const rest = docPath === API_BASE ? "" : docPath.slice(API_BASE.length).replace(/^\//, "");
  if (!rest) return path.join(OUT_API, "index.md");
  return path.join(OUT_API, ...rest.split("/")) + ".md";
}

/** 侧栏已去掉「使用 API」页，总览里同步删块，避免指向已移除的本地路径 */
function stripSettingsIndexUserApiSection(md) {
  return md.replace(/\r?\n### \[使用 API\][\s\S]*?(?=\r?\n### )/, "");
}

function cleanTitle(title) {
  if (!title) return "Untitled";
  return title
    .replace(/\s*\|\s*New API\s*$/i, "")
    .replace(/\s*\|\s*New API 文档\s*$/i, "")
    .trim();
}

/** Collapse `/`seg`/`seg`` fragments from Readability into a single inline code span (valid in VitePress). */
function normalizeBrokenPathBackticks(md) {
  return md.replace(/(?:\/`[^`\n]+`)+/g, (block) => {
    const segs = [...block.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]);
    if (!segs.length) return block;
    return "`/" + segs.join("/") + "`";
  });
}

function escapeAngleBracketPlaceholders(md) {
  const blocks = md.split(/(```[\s\S]*?```)/g);
  return blocks
    .map((block) => {
      if (block.startsWith("```")) return block;
      const inlines = block.split(/(`[^`\n]*`)/g);
      return inlines
        .map((piece) => {
          if (piece.startsWith("`") && piece.endsWith("`")) return piece;
          return piece.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)>/g, "`<$1>`");
        })
        .join("");
    })
    .join("");
}

async function writeMarkdown(outFile, sourceUrl, title, bodyMd) {
  const syncedAt = new Date().toISOString();
  const fm = `---
title: ${JSON.stringify(cleanTitle(title))}
source: ${JSON.stringify(sourceUrl)}
syncedAt: ${JSON.stringify(syncedAt)}
---

`;
  const footer = `\n\n---\n\n> **来源**：[官方文档](${sourceUrl})（New API）。本站为离线整理副本，如有出入以官方为准。\n`;
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  const body = escapeAngleBracketPlaceholders(normalizeBrokenPathBackticks(bodyMd.trim()));
  await fs.writeFile(outFile, fm + body + footer, "utf8");
}

async function syncUrl(docPath, outPath) {
  const url = ORIGIN + docPath;
  let res = await fetch(url, { headers: FETCH_HEADERS });
  if (res.status === 403) {
    await sleep(DELAY_MS * 2);
    res = await fetch(url, { headers: { ...FETCH_HEADERS, referer: url } });
  }
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  const html = await res.text();
  const dom = new JSDOM(html, { url });
  const article = new Readability(dom.window.document).parse();
  if (!article) throw new Error(`Readability found no article: ${url}`);
  const md = turndown.turndown(article.content || "");
  let bodyMd = md;
  if (outPath === path.join(OUT_ADMIN, "index.md")) {
    bodyMd = stripSettingsIndexUserApiSection(md);
  }
  await writeMarkdown(outPath, url, article.title || cleanTitle(docPath), bodyMd);
  console.log("OK", docPath);
}

async function main() {
  await fs.mkdir(OUT_ADMIN, { recursive: true });
  await fs.mkdir(OUT_API, { recursive: true });

  console.log(`Syncing platform settings (${DOCS_LOCALE}) -> docs-site/settings …`);
  for (const p of PLATFORM_SETTINGS_PATHS) {
    try {
      await syncUrl(p, adminOutPath(p));
    } catch (e) {
      console.error("FAIL", p, e.message);
    }
    await sleep(DELAY_MS);
  }

  if (SKIP_API_SYNC) {
    console.log("SKIP_API_SYNC=1 — 跳过 API 区爬取。");
  } else {
    console.log(`Crawling API docs (${DOCS_LOCALE}, max ${MAX_API_PAGES} pages) …`);
    const n = await crawlAndWriteApiSection();
    console.log(`API section: wrote ${n} pages (BFS).`);
    await syncApiExtraPaths();
    console.log("API extras: done.");
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * 在 public 下 quickstart / settings 截图左上角叠一块纯色，盖住角标 Logo（直接改像素）。
 *
 * 用法（仓库根目录）：
 *   node scripts/mask-screenshot-logo.mjs              # 仅列出将处理的文件
 *   node scripts/mask-screenshot-logo.mjs --write       # 覆盖写入 PNG
 *
 * 可调（环境变量或命令行）：
 *   TD_MASK_W=80 TD_MASK_H=25 TD_MASK_COLOR='#16161a' node scripts/mask-screenshot-logo.mjs --write
 *   node scripts/mask-screenshot-logo.mjs --write --w=80 --h=25 --color=#16161a
 *
 * 深色顶栏截图请把 --color 调成接近顶栏底色；可多跑几次不同参数分别处理（可先备份再写）。
 */

import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, "..");
const TARGET_DIRS = [
  join(REPO, "docs-site/public/quickstart"),
  join(REPO, "docs-site/public/settings"),
];

function parseArgs(argv) {
  const out = { write: false, w: null, h: null, color: null };
  for (const a of argv) {
    if (a === "--write") out.write = true;
    const m = a.match(/^--w=(\d+)$/);
    if (m) out.w = Number(m[1]);
    const m2 = a.match(/^--h=(\d+)$/);
    if (m2) out.h = Number(m2[1]);
    const m3 = a.match(/^--color=(.+)$/);
    if (m3) out.color = m3[1];
  }
  return out;
}

async function collectPngs(dir) {
  const files = [];
  async function walk(d) {
    let ents;
    try {
      ents = await readdir(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of ents) {
      const p = join(d, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name.toLowerCase().endsWith(".png")) files.push(p);
    }
  }
  await walk(dir);
  return files;
}

function maskSvg(width, height, color) {
  const safe = color.replace(/"/g, "&quot;");
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${safe}"/></svg>`,
  );
}

async function applyMask(file, maskW, maskH, color, write) {
  const meta = await sharp(file).metadata();
  const w = Math.min(maskW, meta.width ?? maskW);
  const h = Math.min(maskH, meta.height ?? maskH);
  const overlay = await sharp(maskSvg(w, h, color), { density: 72 }).png().toBuffer();

  const pipeline = sharp(file).composite([{ input: overlay, left: 0, top: 0 }]);

  if (!write) {
    return { file, w, h, color, skipped: false };
  }
  const buf = await pipeline.png().toBuffer();
  await sharp(buf).toFile(file);
  return { file, w, h, color, skipped: false };
}

async function main() {
  const argv = process.argv.slice(2);
  const args = parseArgs(argv);
  const write = args.write || process.env.TD_MASK_WRITE === "1";

  const maskW = args.w ?? Number(process.env.TD_MASK_W || 80);
  const maskH = args.h ?? Number(process.env.TD_MASK_H || 25);
  const color = args.color ?? process.env.TD_MASK_COLOR ?? "#16161a";

  if (!Number.isFinite(maskW) || !Number.isFinite(maskH) || maskW < 1 || maskH < 1) {
    console.error("无效宽高，请使用 --w= / --h= 或 TD_MASK_W / TD_MASK_H");
    process.exit(1);
  }

  const all = [];
  for (const d of TARGET_DIRS) {
    all.push(...(await collectPngs(d)));
  }
  all.sort();

  if (all.length === 0) {
    console.log("未找到 PNG：", TARGET_DIRS.join(", "));
    process.exit(0);
  }

  console.log(
    write
      ? `写入模式：在每张图 (0,0) 叠 ${maskW}×${maskH}，颜色 ${color}`
      : `预览（加 --write 才写入）：${maskW}×${maskH}，颜色 ${color}`,
  );
  for (const f of all) {
    console.log(" ·", f.replace(REPO + "/", ""));
  }

  if (!write) {
    console.log("\n共", all.length, "个文件。确认后执行： node scripts/mask-screenshot-logo.mjs --write");
    return;
  }

  for (const f of all) {
    await applyMask(f, maskW, maskH, color, true);
  }
  console.log("\n已写入", all.length, "个 PNG。");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

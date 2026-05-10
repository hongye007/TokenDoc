import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "docs-site");

function normalizeBrokenPathBackticks(md) {
  return md.replace(/(?:\/`[^`\n]+`)+/g, (block) => {
    const segs = [...block.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]);
    if (!segs.length) return block;
    return "`/" + segs.join("/") + "`";
  });
}

/** Vue/VitePress treats `<foo>` in prose as components; wrap simple placeholders as inline code. */
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

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

async function main() {
  const files = await walk(ROOT);
  let n = 0;
  for (const f of files) {
    const raw = await fs.readFile(f, "utf8");
    const next = escapeAngleBracketPlaceholders(normalizeBrokenPathBackticks(raw));
    if (next !== raw) {
      await fs.writeFile(f, next, "utf8");
      n++;
    }
  }
  console.log("Patched", n, "files");
}

main().catch(console.error);

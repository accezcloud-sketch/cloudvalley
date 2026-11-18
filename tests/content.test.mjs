// Content rules for src/content/blog that have broken before. Runs without
// a build: `node --test tests/content.test.mjs` (also part of npm test).
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "src", "content", "blog");
const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));

function parse(file) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  assert.ok(m, `${file}: missing or malformed frontmatter`);
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z][a-zA-Z0-9_]*):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim().replace(/^"(.*)"$/, "$1");
  }
  return { meta, body: m[2] };
}

const posts = files.map((f) => ({ file: f, ...parse(f) }));

test("there are articles to check", () => {
  assert.ok(posts.length > 0);
});

test("every article has both languages", () => {
  const missing = posts.filter((p) => !p.body.includes("<!-- AR -->")).map((p) => p.file);
  assert.deepEqual(missing, []);
});

test("titles and descriptions exist in both languages", () => {
  const bad = [];
  for (const p of posts)
    for (const k of ["title", "titleAr", "description", "descriptionAr"])
      if (!p.meta[k]) bad.push(`${p.file}: ${k}`);
  assert.deepEqual(bad, []);
});

test("search descriptions are 160 characters or fewer", () => {
  const bad = [];
  for (const p of posts)
    for (const k of ["description", "descriptionAr"])
      if ([...(p.meta[k] ?? "")].length > 160) bad.push(`${p.file}: ${k} (${[...p.meta[k]].length})`);
  assert.deepEqual(bad, []);
});

test("no markdown the renderer cannot show (it would appear as literal characters)", () => {
  // The renderer supports ## headings, "- " bullets, "> " quotes and plain
  // paragraphs only. Bold/italic asterisks, links, tables, images, code and
  // deeper headings would be printed as-is.
  const rules = [
    [/\*\*[^*\n]+\*\*/, "bold **text**"],
    [/(^|[^*])\*[^*\s][^*\n]*\*(?!\*)/m, "italic *text*"],
    [/\[[^\]\n]+\]\([^)\n]+\)/, "markdown link"],
    [/^#{3,}\s/m, "### heading"],
    [/^\|.*\|\s*$/m, "table"],
    [/!\[[^\]]*\]\(/, "image"],
    [/```/, "code fence"],
  ];
  const bad = [];
  for (const p of posts)
    for (const [re, label] of rules) if (re.test(p.body)) bad.push(`${p.file}: ${label}`);
  assert.deepEqual(bad, []);
});

test("every article names one of the 8 services", () => {
  const bad = posts
    .filter((p) => !/^0[1-8]$/.test(p.meta.serviceNum ?? ""))
    .map((p) => `${p.file}: serviceNum=${p.meta.serviceNum}`);
  assert.deepEqual(bad, []);
});

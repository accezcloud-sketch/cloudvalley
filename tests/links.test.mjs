// Checks every internal link in the prerendered site resolves to a real page.
// Run after `next build` (npm test does both via `npm run check`).
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const APP = path.join(process.cwd(), ".next", "server", "app");
const PUBLIC = path.join(process.cwd(), "public");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

test("build output exists and is complete", () => {
  assert.ok(fs.existsSync(APP), "run `next build` first");
  // A failed or partial build leaves a few files behind; make sure the real
  // pages are there so the link check below cannot pass on an empty build.
  for (const page of ["ar.html", "en.html", "ar/blog.html", "en/blog.html"]) {
    assert.ok(fs.existsSync(path.join(APP, page)), `missing ${page}: build incomplete`);
  }
});

test("every internal link points to a real page", () => {
  const htmlFiles = walk(APP).filter((f) => f.endsWith(".html"));
  const routes = new Set(
    htmlFiles.map((f) =>
      "/" + path.relative(APP, f).replace(/\.html$/, "").replace(/\/index$/, ""),
    ),
  );
  // Addresses that exist without a prerendered .html file.
  for (const r of ["/", "/robots.txt", "/sitemap.xml", "/icon.png", "/favicon.ico", "/ar/feed.xml", "/en/feed.xml"]) routes.add(r);
  for (const f of fs.existsSync(PUBLIC) ? walk(PUBLIC) : []) routes.add("/" + path.relative(PUBLIC, f));

  const broken = new Map();
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
      if (href.startsWith("/_next/")) continue;
      const clean = href.length > 1 ? href.replace(/\/$/, "") : href;
      if (!routes.has(clean)) {
        const from = "/" + path.relative(APP, file).replace(/\.html$/, "");
        broken.set(clean, from);
      }
    }
  }
  assert.deepEqual(
    [...broken.entries()].map(([to, from]) => `${to} (linked from ${from})`),
    [],
  );
});

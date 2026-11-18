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
  for (const page of [
    "ar.html", "en.html", "ar/blog.html", "en/blog.html",
    "ar/faq.html", "en/faq.html",
    "ar/blog/topic/website-design.html", "en/blog/topic/website-design.html",
  ]) {
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

test("every article has a built cover image in both languages", () => {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const slugs = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
  const missing = [];
  for (const locale of ["ar", "en"])
    for (const slug of slugs) {
      const body = path.join(APP, locale, "blog", slug, "cover.body");
      // A real PNG starts with the 8-byte PNG signature.
      if (!fs.existsSync(body) || fs.readFileSync(body).subarray(1, 4).toString() !== "PNG")
        missing.push(`/${locale}/blog/${slug}/cover`);
    }
  assert.deepEqual(missing, []);
});

test("links and images in article text are rendered, and no link markdown reaches pages or feeds", () => {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const LINK_RE = /(?<!!)\[([^[\]\n]+)\]\(([^()\s]+)\)/g;
  const IMAGE_LINE_RE = /^!\[([^[\]\n]+)\]\((\/[^()\s]+)\)$/gm;
  // Raw markdown that slipped through would show as "](/" or "](https:".
  const RAW = /\]\((\/|https:)/;
  const bad = [];
  let checked = 0;
  for (const file of fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"))) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const [en, ar = ""] = raw.split("<!-- AR -->");
    for (const [locale, part] of [["en", en], ["ar", ar]]) {
      const htmlFile = path.join(APP, locale, "blog", `${slug}.html`);
      if (!fs.existsSync(htmlFile)) {
        bad.push(`/${locale}/blog/${slug}: not built`);
        continue;
      }
      const html = fs.readFileSync(htmlFile, "utf8");
      // Only the visible page; the RSC payload in <script> tags repeats the text.
      const visible = html.replace(/<script[\s\S]*?<\/script>/g, "");
      if (RAW.test(visible)) bad.push(`/${locale}/blog/${slug}: raw link markdown in the page`);
      for (const [, alt, src] of part.matchAll(IMAGE_LINE_RE)) {
        checked++;
        const esc = alt.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
        const img = visible.match(new RegExp(`<img[^>]*alt="${esc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`))?.[0] ?? "";
        if (!img.includes(encodeURIComponent(src)) || !/loading="lazy"/.test(img) || !/width="\d+"/.test(img))
          bad.push(`/${locale}/blog/${slug}: image ${src} not rendered as a lazy, sized <img>`);
      }
      for (const [, , href] of part.matchAll(LINK_RE)) {
        checked++;
        if (!visible.includes(`href="${href}"`)) bad.push(`/${locale}/blog/${slug}: link to ${href} not rendered`);
        if (href.startsWith("https://")) {
          const tag = visible.match(new RegExp(`<a[^>]*href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`))?.[0] ?? "";
          if (!/target="_blank"/.test(tag) || !/rel="noopener noreferrer"/.test(tag))
            bad.push(`/${locale}/blog/${slug}: external link ${href} must open in a new tab with rel="noopener noreferrer"`);
        }
      }
    }
  }
  for (const locale of ["ar", "en"]) {
    const feed = [`${locale}/feed.xml.body`, `${locale}/feed.xml`]
      .map((f) => path.join(APP, f))
      .find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
    if (!feed) bad.push(`/${locale}/feed.xml: not built`);
    else if (RAW.test(fs.readFileSync(feed, "utf8"))) bad.push(`/${locale}/feed.xml: raw link markdown`);
  }
  assert.deepEqual(bad, []);
  assert.ok(checked > 0, "no article links or images found to check");
});

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
  // The renderer supports ## headings, "- " bullets, "> " quotes, plain
  // paragraphs, [text](href) links and ![alt](/file.png) images on their own
  // line (both checked below). Bold/italic asterisks, tables, code and deeper
  // headings would be printed as-is.
  const rules = [
    [/\*\*[^*\n]+\*\*/, "bold **text**"],
    [/(^|[^*])\*[^*\s][^*\n]*\*(?!\*)/m, "italic *text*"],
    [/^#{3,}\s/m, "### heading"],
    [/^\|.*\|\s*$/m, "table"],
    [/```/, "code fence"],
  ];
  const bad = [];
  for (const p of posts)
    for (const [re, label] of rules) if (re.test(p.body)) bad.push(`${p.file}: ${label}`);
  assert.deepEqual(bad, []);
});

// ---------------------------------------------------------------------------
// Links and images in article text. Same patterns as src/lib/article-markdown.ts.
const LINK_RE = /\[([^[\]\n]+)\]\(([^()\s]+)\)/g;
const IMAGE_LINE_RE = /^!\[([^[\]\n]+)\]\((\/[^()\s]+)\)$/;
const INTERNAL_HREF = /^\/(ar|en)(\/[a-z0-9-]+)*$/;
const EXTERNAL_HREF = /^https:\/\/[^\s/]+\.[^\s]+$/;
const PUBLIC = path.join(process.cwd(), "public");

// Every page an article may link to, without the /ar or /en in front.
// When the site gets a new page, add it here (one line).
const LINK_TARGETS = [
  "/services",
  "/services/website-design",
  "/services/search-engine-optimization",
  "/services/content-production",
  "/services/social-media-management",
  "/services/mobile-app-design",
  "/services/brand-identity",
  "/services/ecommerce-design",
  "/services/digital-marketing",
  "/pricing",
  "/contact",
  "/blog",
  "/about",
  ...posts.map((p) => `/blog/${p.file.replace(/\.md$/, "")}`),
];

/** Each language part split into the blocks the renderer sees. */
function blocks(p) {
  const [en, ar = ""] = p.body.split("<!-- AR -->");
  return [
    ["en", en],
    ["ar", ar],
  ].flatMap(([lang, text]) => {
    let inFaq = false;
    return text
      .split(/\r?\n\r?\n+/)
      .map((b) => b.trim())
      .filter(Boolean)
      .map((b) => {
        if (b.startsWith("## ")) inFaq = /^## (Frequently Asked Questions|الأسئلة الشائعة)\s*$/.test(b);
        return { lang, block: b, inFaq };
      });
  });
}

/** The part of a block where a link is not allowed (headings, FAQ questions). */
function noLinkZone(block, inFaq) {
  if (block.startsWith("## ")) return { where: "heading", text: block };
  if (block.startsWith(">")) {
    const lines = block.split(/\r?\n/);
    const qEnd = lines.findIndex((l) => !l.trimStart().startsWith(">"));
    if (qEnd > 0) return { where: "FAQ question", text: lines.slice(0, qEnd).join("\n") };
    // Older FAQ items quote the answer too ("> question", ">", "> answer");
    // under the FAQ heading the first line is still the question.
    if (inFaq) return { where: "FAQ question", text: lines[0] };
  }
  return null;
}

/** Problems with the links and images in one article, as readable strings. */
function linkProblems(p) {
  const slug = p.file.replace(/\.md$/, "");
  const bad = [];
  for (const { lang, block, inFaq } of blocks(p)) {
    const image = block.match(IMAGE_LINE_RE);
    if (image) {
      const [, alt, src] = image;
      if (!alt.trim()) bad.push(`${p.file}: image without alt text: ${src}`);
      if (!/^\/[A-Za-z0-9_\-/]+\.(png|jpe?g|webp)$/i.test(src) || src.includes(".."))
        bad.push(`${p.file}: image must be a .png, .jpg or .webp in public/: ${src}`);
      else if (!fs.existsSync(path.join(PUBLIC, src)))
        bad.push(`${p.file}: image file not found in public/: ${src}`);
      continue;
    }
    if (block.includes("![")) bad.push(`${p.file}: image must be on a line of its own (and look like ![alt](/file.png))`);

    const zone = noLinkZone(block, inFaq);
    if (zone && /\[[^\]\n]*\]\(/.test(zone.text)) bad.push(`${p.file}: link in a ${zone.where}: ${zone.text.slice(0, 60)}`);

    // Whatever is left after taking out the well-formed links must not look
    // like a link: it would be shown as raw brackets.
    const rest = block.replace(LINK_RE, "");
    if (/\]\(|\]\s+\((\/|https?:)/.test(rest)) bad.push(`${p.file}: malformed link near: ${rest.match(/.{0,30}\]\s*\(.{0,30}/)?.[0]}`);

    for (const [, anchor, href] of block.matchAll(LINK_RE)) {
      if (!anchor.trim()) bad.push(`${p.file}: link without text: ${href}`);
      if (EXTERNAL_HREF.test(href)) continue;
      if (!INTERNAL_HREF.test(href)) {
        bad.push(`${p.file}: link must start with /${lang}/ or https:// : ${href}`);
        continue;
      }
      if (!href.startsWith(`/${lang}/`)) bad.push(`${p.file}: ${lang === "en" ? "English" : "Arabic"} part links to the other language: ${href}`);
      const target = href.replace(/^\/(ar|en)/, "");
      if (!LINK_TARGETS.includes(target)) bad.push(`${p.file}: link to a page that does not exist: ${href}`);
      if (target === `/blog/${slug}`) bad.push(`${p.file}: article links to itself: ${href}`);
    }
  }
  return bad;
}

test("links and images in articles are well formed and point to real pages", () => {
  assert.deepEqual(posts.flatMap(linkProblems), []);
});

test("the link check catches broken links and images", () => {
  // Sample bodies that must fail, so the check above cannot quietly pass.
  const fake = (body) => ({ file: "sample.md", body: `${body}\n\n<!-- AR -->\n\nنص.` });
  const cases = [
    ["See [our pricing](/en/pricing.", "malformed link"],
    ["See [our pricing] (/en/pricing).", "malformed link"],
    ["See [](/en/pricing).", "malformed link"],
    ["See [our page](/en/no-such-page).", "does not exist"],
    ["See [our page](/en/services/seo).", "does not exist"],
    ["See [our page](/ar/pricing).", "other language"],
    ["See [our page](http://example.com).", "must start with"],
    ["See [our page](pricing).", "must start with"],
    ["See [this article](/en/blog/sample).", "itself"],
    ["## Read [our pricing](/en/pricing)", "link in a heading"],
    ["> Is [pricing](/en/pricing) fixed?\nIt depends on scope.", "link in a FAQ question"],
    ["## Frequently Asked Questions\n\n> Is [pricing](/en/pricing) fixed?\n>\n> It depends on scope.", "link in a FAQ question"],
    ["Look: ![a chart](/chart.png) here.", "line of its own"],
    ["![a chart](/no-such-file.png)", "not found"],
    ["![a chart](/../secret.png)", "in public/"],
    ["![](/wady-logo.png)", "line of its own"],
  ];
  // Pretend the sample articles exist, so only the self-link is wrong.
  const extra = ["/blog/sample", "/blog/sample-other"];
  LINK_TARGETS.push(...extra);
  try {
    for (const [body, expected] of cases) {
      const found = linkProblems(fake(body));
      assert.ok(found.some((m) => m.includes(expected)), `expected "${expected}" for: ${body}\n got: ${JSON.stringify(found)}`);
    }
    // And well-formed ones pass.
    const good = fake(
      "Read [our pricing](/en/pricing), [a guide](/en/blog/sample-other) and [Google](https://developers.google.com/search).\n\n- A [list item](/en/contact)\n\n> Is it fixed?\nNo, [ask us](/en/contact).\n\n![The Wady Cloud logo](/wady-logo.png)",
    );
    assert.deepEqual(linkProblems(good), []);
  } finally {
    LINK_TARGETS.splice(-extra.length);
  }
});

test("no links or images in the frontmatter (titles and descriptions are shown as plain text)", () => {
  const bad = [];
  for (const p of posts)
    for (const [k, v] of Object.entries(p.meta))
      if (/\]\(|!\[/.test(v)) bad.push(`${p.file}: ${k}`);
  assert.deepEqual(bad, []);
});

test("every article names one of the 8 services", () => {
  const bad = posts
    .filter((p) => !/^0[1-8]$/.test(p.meta.serviceNum ?? ""))
    .map((p) => `${p.file}: serviceNum=${p.meta.serviceNum}`);
  assert.deepEqual(bad, []);
});

test("an 'updated' date, when present, is a real date on or after publishing", () => {
  const bad = [];
  for (const p of posts) {
    if (!p.meta.updated) continue;
    const u = new Date(p.meta.updated), d = new Date(p.meta.isoDate);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.meta.updated) || Number.isNaN(u.getTime()) || u < d)
      bad.push(`${p.file}: updated=${p.meta.updated} isoDate=${p.meta.isoDate}`);
  }
  assert.deepEqual(bad, []);
});

test("no broken automation output: '>>' lines, '===' separators, duplicate FAQ headings", () => {
  const bad = [];
  for (const p of posts) {
    if (/^>>/m.test(p.body)) bad.push(`${p.file}: line starting with >>`);
    if (/^={3,}\s*$/m.test(p.body)) bad.push(`${p.file}: === separator (article pasted twice?)`);
    const [en, ar = ""] = p.body.split("<!-- AR -->");
    if ((en.match(/^## Frequently Asked Questions\s*$/gm) ?? []).length > 1) bad.push(`${p.file}: two English FAQ headings`);
    if ((ar.match(/^## الأسئلة الشائعة\s*$/gm) ?? []).length > 1) bad.push(`${p.file}: two Arabic FAQ headings`);
  }
  assert.deepEqual(bad, []);
});

// ---------------------------------------------------------------------------
// Cover pictures (src/lib/cover-art.ts). Node runs the TypeScript file
// directly (type stripping, Node 22.18 or later). The site's cover route
// picks the picture with the same coverSubject() from the English title.
const art = await import(path.join(process.cwd(), "src", "lib", "cover-art.ts"));

test("every article gets a cover picture that has a drawing and alt text", () => {
  const bad = [];
  for (const p of posts) {
    const s = art.coverSubject(p.meta.serviceNum, p.meta.title, p.meta.excerpt);
    if (!(s in art.SUBJECTS) || !art.ALT[s]) bad.push(`${p.file}: ${s}`);
  }
  assert.deepEqual(bad, []);
});

test("the cover keyword table only names pictures that exist, and every picture has alt text in both languages", () => {
  const bad = [];
  for (const [s, keys] of art.COVER_KEYWORDS) {
    if (!(s in art.SUBJECTS)) bad.push(`keyword row for missing drawing: ${s}`);
    if (!keys.length) bad.push(`no keywords: ${s}`);
  }
  for (const s of Object.values(art.SERVICE_SUBJECTS))
    if (!(s in art.SUBJECTS)) bad.push(`service picture missing: ${s}`);
  for (const s of Object.keys(art.SUBJECTS)) {
    const a = art.ALT[s];
    if (!a?.en || !a?.ar) bad.push(`alt text missing: ${s}`);
    else if (/[\u2013\u2014]/.test(a.en + a.ar)) bad.push(`long dash in alt text: ${s}`);
    else if (!/[؀-ۿ]/.test(a.ar)) bad.push(`Arabic alt text is not Arabic: ${s}`);
  }
  for (const s of Object.keys(art.ALT)) if (!(s in art.SUBJECTS)) bad.push(`alt text for missing drawing: ${s}`);
  assert.deepEqual(bad, []);
});

test("cover pictures are matched from the title, then the excerpt, then the service", () => {
  const cases = [
    ["08", "Build a newsletter that converts", "", "email"],
    ["08", "Win Back Lost Sales with Retargeting Ads", "", "target"],
    ["02", "Local SEO: Be Found By Nearby Customers", "", "local"],
    ["04", "Grow Social Media Without Ads", "", "social"],
    ["03", "E-COMMERCE checkout tips", "", "checkout"],
    ["04", "Turning Frowns Upside Down Online", "Respond to negative feedback.", "reviews"],
    // whole words only: "adds" and "loads" are not "ads" or "load"
    ["01", "Something that adds nothing and loads of it", "", "browser"],
    ["07", "An unknown title", "Nothing to match here either.", "shop"],
    ["08", "An unknown title", "", "growth"],
    ["99", "An unknown title", "", "valley"],
  ];
  for (const [num, title, excerpt, want] of cases)
    assert.equal(art.coverSubject(num, title, excerpt), want, `${num} "${title}"`);
});

test("every cover picture draws a well-formed SVG", () => {
  const bad = [];
  for (const s of Object.keys(art.SUBJECTS))
    for (const seed of ["a", "b", "c", "d", "e", "f"]) {
      const svg = art.coverSvg(s, seed);
      if (/NaN|undefined|Infinity/.test(svg)) bad.push(`${s}/${seed}: bad number`);
      if (!svg.startsWith("<svg") || !svg.endsWith("</svg>")) bad.push(`${s}/${seed}: not an svg`);
      if (/<(text|image|filter|mask|clipPath|linearGradient|radialGradient|style)\b/.test(svg)) bad.push(`${s}/${seed}: element resvg may not draw`);
    }
  assert.deepEqual(bad, []);
});

test("articles that share a cover picture get different layouts (variant 0 and 1 differ)", () => {
  const same = Object.keys(art.SUBJECTS).filter(
    (s) => s !== "valley" && art.coverSvg(s, "x", 0) === art.coverSvg(s, "x", 1),
  );
  assert.deepEqual(same, []);
});

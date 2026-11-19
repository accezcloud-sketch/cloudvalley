import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./i18n";
import { IMAGE_LINE_RE, plainText } from "./article-markdown";
import { coverSubject, type CoverSubject } from "./cover-art";

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  /** FAQ item: a "> question" line followed by plain answer lines. */
  | { type: "qa"; question: string; answer: string }
  /** A picture on its own line: ![alt](/file-in-public.png). */
  | { type: "image"; src: string; alt: string; width: number; height: number };

// Paragraph, list item, quote and FAQ answer text may contain inline links
// ([text](/en/...)); see article-markdown.ts. Headings and FAQ questions are
// stored as plain text.

export type BlogListing = {
  num: string;
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  /** Service "01".."08". */
  serviceNum: string;
  /**
   * Cover picture, matched from the English title and excerpt (falling back
   * to the service picture), so both languages share one cover.
   */
  cover: CoverSubject;
};

export type BlogPostData = BlogListing & {
  description: string;
  body: BlogSection[];
  serviceNum: string;
  isoDate: string;
  /**
   * Optional `updated: YYYY-MM-DD` in the frontmatter. Set it only when an
   * article's substance really changes (not for typo fixes); it is shown as
   * "Updated …" and sent to Google as dateModified and sitemap lastmod.
   */
  isoUpdated: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "blog");
const PUBLIC_ROOT = path.join(process.cwd(), "public");

/**
 * Width and height of a PNG, JPEG or WebP in public/, read from the file
 * header, so next/image can reserve the space and the page does not jump.
 * Returns null for a missing file or another format (the image is then left
 * out; tests/content.test.mjs fails on both).
 */
function imageSize(src: string): { width: number; height: number } | null {
  const file = path.join(PUBLIC_ROOT, src);
  if (!file.startsWith(PUBLIC_ROOT + path.sep) || !fs.existsSync(file)) {
    return null;
  }
  const b = fs.readFileSync(file);
  // PNG: IHDR width and height right after the signature.
  if (b.length > 24 && b.toString("latin1", 1, 4) === "PNG") {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  // WebP: lossy (VP8), lossless (VP8L) or extended (VP8X).
  if (b.length > 30 && b.toString("latin1", 0, 4) === "RIFF" && b.toString("latin1", 8, 12) === "WEBP") {
    const kind = b.toString("latin1", 12, 16);
    if (kind === "VP8 ") {
      return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    }
    if (kind === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (kind === "VP8X") {
      return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
    }
    return null;
  }
  // JPEG: walk the segments to the first start-of-frame marker.
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  return null;
}

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Missing or malformed frontmatter");
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z][a-zA-Z0-9_]*):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[kv[1]] = value;
  }
  return { meta, body: match[2].trim() };
}

function parseBody(md: string): BlogSection[] {
  const sections: BlogSection[] = [];
  const blocks = md
    // A heading is always its own block, even when the automation puts the
    // next paragraph straight under it with no blank line.
    .replace(/^(## [^\r\n]*)\r?\n(?=\S)/gm, "$1\n\n")
    .replace(/(\S[^\r\n]*)\r?\n(?=## )/g, "$1\n\n")
    .split(/\r?\n\r?\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  for (const block of blocks) {
    if (block.startsWith("## ")) {
      sections.push({
        type: "heading",
        text: plainText(block.slice(3).trim()),
      });
      continue;
    }

    const image = block.match(IMAGE_LINE_RE);
    if (image) {
      const size = imageSize(image[2]);
      if (size) {
        sections.push({ type: "image", src: image[2], alt: image[1].trim(), ...size });
      }
      continue;
    }

    if (block.startsWith(">")) {
      // FAQ items are written as "> question" with the answer on the next
      // line(s) without ">". Rendered as one quote, the question and answer
      // ran together in italics; split them instead.
      const raw = block.split(/\r?\n/);
      const qEnd = raw.findIndex((l) => !l.trimStart().startsWith(">"));
      if (qEnd > 0) {
        sections.push({
          type: "qa",
          question: plainText(
            raw
              .slice(0, qEnd)
              .map((l) => l.replace(/^\s*>\s?/, "").trim())
              .join(" "),
          ),
          answer: raw.slice(qEnd).join(" ").replace(/\s+/g, " ").trim(),
        });
        continue;
      }
      const lines = raw.map((l) => l.replace(/^>\s?/, "").trim());
      const last = lines[lines.length - 1] ?? "";
      const isCite = lines.length > 1 && /^[\u2014\u2013\-]\s*/.test(last);
      if (isCite) {
        sections.push({
          type: "quote",
          text: lines.slice(0, -1).join(" "),
          cite: plainText(last.replace(/^[\u2014\u2013\-]\s*/, "")),
        });
      } else {
        sections.push({ type: "quote", text: lines.join(" ") });
      }
      continue;
    }

    if (/^[-*]\s/.test(block)) {
      const items = block
        .split(/\r?\n/)
        .map((l) => l.replace(/^[-*]\s+/, "").trim())
        .filter(Boolean);
      sections.push({ type: "list", items });
      continue;
    }

    sections.push({
      type: "paragraph",
      text: block.replace(/\r?\n/g, " ").trim(),
    });
  }

  return sections;
}

// Reading time is calculated from the words actually shown in that language.
// It used to be typed by hand in the frontmatter ("7 min" on almost every
// article whatever its length). About 200 words a minute, rounded up.
const WORDS_PER_MINUTE = 200;

// Links count as their anchor text only, never the address; images add no
// words.
function countWords(sections: BlogSection[]): number {
  const text = sections
    .map((s) =>
      s.type === "list"
        ? s.items.join(" ")
        : s.type === "quote"
          ? `${s.text} ${s.cite ?? ""}`
          : s.type === "qa"
            ? `${s.question} ${s.answer}`
            : s.type === "image"
              ? ""
              : s.text,
    )
    .map(plainText)
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
function toArabicDigits(n: number): string {
  return String(n).replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

export function readingTime(sections: BlogSection[], locale: Locale): string {
  const minutes = Math.max(
    1,
    Math.ceil(countWords(sections) / WORDS_PER_MINUTE),
  );
  if (locale === "en") return `${minutes} min`;
  // Arabic counting: 1 دقيقة واحدة, 2 دقيقتان, 3-10 دقائق, 11+ دقيقة.
  if (minutes === 1) return "دقيقة واحدة";
  if (minutes === 2) return "دقيقتان";
  const n = toArabicDigits(minutes);
  return minutes <= 10 ? `${n} دقائق` : `${n} دقيقة`;
}

// Display dates are worked out from isoDate, so they are always consistent
// and Arabic uses the month names Saudi readers expect (يوليو, not تموز). The
// hand-typed date/dateAr frontmatter fields are only a fallback.
export function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  if (!iso || Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(
    locale === "ar" ? "ar-SA-u-ca-gregory-nu-arab" : "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
  ).format(d);
}

// Splits a bilingual file body on the <!-- AR --> marker.
// Returns [englishBody, arabicBody]. Falls back to full content for both if no marker.
function splitBilingualBody(body: string): [string, string] {
  const marker = "<!-- AR -->";
  const idx = body.indexOf(marker);
  if (idx === -1) return [body.trim(), body.trim()];
  return [body.slice(0, idx).trim(), body.slice(idx + marker.length).trim()];
}

function loadAll(): Record<Locale, Record<string, BlogPostData>> {
  const result: Record<Locale, Record<string, BlogPostData>> = {
    en: {},
    ar: {},
  };

  if (!fs.existsSync(CONTENT_ROOT)) return result;

  for (const file of fs.readdirSync(CONTENT_ROOT)) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_ROOT, file), "utf-8");
    const { meta, body } = parseFrontmatter(raw);
    const [enBody, arBody] = splitBilingualBody(body);
    const cover = coverSubject(
      meta.serviceNum ?? "",
      plainText(meta.title ?? ""),
      plainText(meta.excerpt ?? ""),
    );

    result.en[slug] = {
      slug,
      num: meta.num ?? "",
      kicker: plainText(meta.kicker ?? ""),
      title: plainText(meta.title ?? ""),
      excerpt: plainText(meta.excerpt ?? ""),
      date: formatDate(meta.isoDate ?? "", "en") || (meta.date ?? ""),
      isoDate: meta.isoDate ?? "",
      isoUpdated: meta.updated ?? "",
      readTime: "",
      description: plainText(meta.description ?? ""),
      serviceNum: meta.serviceNum ?? "",
      cover,
      body: parseBody(enBody),
    };
    result.en[slug].readTime = readingTime(result.en[slug].body, "en");

    result.ar[slug] = {
      slug,
      num: meta.numAr ?? meta.num ?? "",
      kicker: plainText(meta.kickerAr ?? meta.kicker ?? ""),
      title: plainText(meta.titleAr ?? meta.title ?? ""),
      excerpt: plainText(meta.excerptAr ?? meta.excerpt ?? ""),
      date:
        formatDate(meta.isoDate ?? "", "ar") ||
        (meta.dateAr ?? meta.date ?? ""),
      isoDate: meta.isoDate ?? "",
      isoUpdated: meta.updated ?? "",
      readTime: "",
      description: plainText(meta.descriptionAr ?? meta.description ?? ""),
      serviceNum: meta.serviceNum ?? "",
      cover,
      body: parseBody(arBody),
    };
    result.ar[slug].readTime = readingTime(result.ar[slug].body, "ar");
  }

  return result;
}

const data = loadAll();

const slugs = Array.from(
  new Set([...Object.keys(data.en), ...Object.keys(data.ar)]),
);

export function getBlogPost(
  locale: Locale,
  slug: string,
): BlogPostData | undefined {
  return data[locale]?.[slug];
}

export function getAllBlogPosts(locale: Locale): BlogPostData[] {
  return Object.values(data[locale] ?? {}).sort(
    (a, b) =>
      b.isoDate.localeCompare(a.isoDate) ||
      a.num.localeCompare(b.num) ||
      a.slug.localeCompare(b.slug),
  );
}

export function getAllSlugs(): string[] {
  return slugs;
}

export function getBlogListing(locale: Locale): BlogListing[] {
  return getAllBlogPosts(locale).map((p) => ({
    num: p.num,
    slug: p.slug,
    kicker: p.kicker,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    readTime: p.readTime,
    serviceNum: p.serviceNum,
    cover: p.cover,
  }));
}

/**
 * Articles about the same service, newest first, excluding the current one.
 * Picked by topic only: never random and never "latest from anywhere".
 */
export function getRelatedPosts(
  locale: Locale,
  slug: string,
  limit = 3,
): BlogListing[] {
  const current = getBlogPost(locale, slug);
  if (!current) return [];
  return getBlogListing(locale)
    .filter(
      (p) =>
        p.slug !== slug &&
        getBlogPost(locale, p.slug)?.serviceNum === current.serviceNum,
    )
    .slice(0, limit);
}

/** Newest articles for one service number ("01".."08"). */
export function getPostsForService(
  locale: Locale,
  serviceNum: string,
  limit = 3,
): BlogListing[] {
  return getBlogListing(locale)
    .filter((p) => getBlogPost(locale, p.slug)?.serviceNum === serviceNum)
    .slice(0, limit);
}

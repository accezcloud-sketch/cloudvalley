import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./i18n";

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export type BlogListing = {
  num: string;
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export type BlogPostData = BlogListing & {
  description: string;
  body: BlogSection[];
  serviceNum: string;
  isoDate: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "blog");

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
    .split(/\r?\n\r?\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  for (const block of blocks) {
    if (block.startsWith("## ")) {
      sections.push({
        type: "heading",
        text: block.slice(3).trim(),
      });
      continue;
    }

    if (block.startsWith(">")) {
      const lines = block
        .split(/\r?\n/)
        .map((l) => l.replace(/^>\s?/, "").trim());
      const last = lines[lines.length - 1] ?? "";
      const isCite = lines.length > 1 && /^[—–\-]\s*/.test(last);
      if (isCite) {
        sections.push({
          type: "quote",
          text: lines.slice(0, -1).join(" "),
          cite: last.replace(/^[—–\-]\s*/, ""),
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

function countWords(sections: BlogSection[]): number {
  const text = sections
    .map((s) =>
      s.type === "list"
        ? s.items.join(" ")
        : s.type === "quote"
          ? `${s.text} ${s.cite ?? ""}`
          : s.text,
    )
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
function toArabicDigits(n: number): string {
  return String(n).replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

export function readingTime(sections: BlogSection[], locale: Locale): string {
  const minutes = Math.max(1, Math.ceil(countWords(sections) / WORDS_PER_MINUTE));
  if (locale === "en") return `${minutes} min`;
  // Arabic counting: 1 دقيقة واحدة, 2 دقيقتان, 3-10 دقائق, 11+ دقيقة.
  if (minutes === 1) return "دقيقة واحدة";
  if (minutes === 2) return "دقيقتان";
  const n = toArabicDigits(minutes);
  return minutes <= 10 ? `${n} دقائق` : `${n} دقيقة`;
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

    result.en[slug] = {
      slug,
      num: meta.num ?? "",
      kicker: meta.kicker ?? "",
      title: meta.title ?? "",
      excerpt: meta.excerpt ?? "",
      date: meta.date ?? "",
      isoDate: meta.isoDate ?? "",
      readTime: "",
      description: meta.description ?? "",
      serviceNum: meta.serviceNum ?? "",
      body: parseBody(enBody),
    };
    result.en[slug].readTime = readingTime(result.en[slug].body, "en");

    result.ar[slug] = {
      slug,
      num: meta.numAr ?? meta.num ?? "",
      kicker: meta.kickerAr ?? meta.kicker ?? "",
      title: meta.titleAr ?? meta.title ?? "",
      excerpt: meta.excerptAr ?? meta.excerpt ?? "",
      date: meta.dateAr ?? meta.date ?? "",
      isoDate: meta.isoDate ?? "",
      readTime: "",
      description: meta.descriptionAr ?? meta.description ?? "",
      serviceNum: meta.serviceNum ?? "",
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
  }));
}


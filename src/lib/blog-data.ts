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

function loadLocale(locale: Locale): Record<string, BlogPostData> {
  const dir = path.join(CONTENT_ROOT, locale);
  if (!fs.existsSync(dir)) return {};
  const out: Record<string, BlogPostData> = {};
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { meta, body } = parseFrontmatter(raw);
    out[slug] = {
      slug,
      num: meta.num ?? "",
      kicker: meta.kicker ?? "",
      title: meta.title ?? "",
      excerpt: meta.excerpt ?? "",
      date: meta.date ?? "",
      isoDate: meta.isoDate ?? "",
      readTime: meta.readTime ?? "",
      description: meta.description ?? "",
      serviceNum: meta.serviceNum ?? "",
      body: parseBody(body),
    };
  }
  return out;
}

const data: Record<Locale, Record<string, BlogPostData>> = {
  en: loadLocale("en"),
  ar: loadLocale("ar"),
};

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
  return Object.values(data[locale] ?? {}).sort((a, b) =>
    a.num.localeCompare(b.num),
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

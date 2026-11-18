import { locales, isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getAllBlogPosts } from "@/lib/blog-data";
import { urlFor } from "@/lib/seo";

// One RSS 2.0 feed per language: /ar/feed.xml and /en/feed.xml.
// Both are prerendered at build time; any other "locale" is a 404.
// src/proxy.ts skips paths containing a dot, so these are served as-is.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Characters XML 1.0 forbids outright (C0 controls other than tab/LF/CR). */
const INVALID_XML_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g;

function esc(value: string): string {
  return value
    .replace(INVALID_XML_CHARS, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/[locale]/feed.xml">,
) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not found", { status: 404 });

  const dict = getDict(locale);
  const feedUrl = urlFor(locale, "/feed.xml");
  const blogUrl = urlFor(locale, "/blog");

  // getAllBlogPosts is already newest first; drop anything without a real date
  // rather than emitting "Invalid Date" into pubDate.
  const posts = getAllBlogPosts(locale)
    .map((post) => ({ post, date: new Date(post.isoDate) }))
    .filter(({ date }) => !Number.isNaN(date.getTime()));

  const lastBuildDate = posts[0]?.date.toUTCString();

  const items = posts
    .map(({ post, date }) => {
      const link = urlFor(locale, `/blog/${post.slug}`);
      return [
        "    <item>",
        `      <title>${esc(post.title)}</title>`,
        `      <link>${esc(link)}</link>`,
        `      <guid isPermaLink="true">${esc(link)}</guid>`,
        `      <pubDate>${date.toUTCString()}</pubDate>`,
        `      <description>${esc(post.description)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    // Same "<page title> — <brand>" shape the layout's title template gives
    // the blog index page.
    `    <title>${esc(`${dict.blog.title} — ${dict.brand.name}`)}</title>`,
    `    <link>${esc(blogUrl)}</link>`,
    `    <description>${esc(dict.blog.lede)}</description>`,
    `    <language>${locale}</language>`,
    ...(lastBuildDate ? [`    <lastBuildDate>${lastBuildDate}</lastBuildDate>`] : []),
    `    <atom:link href="${esc(feedUrl)}" rel="self" type="application/rss+xml" />`,
    ...(items ? [items] : []),
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

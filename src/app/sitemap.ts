import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getAllBlogPosts } from "@/lib/blog-data";
import { getAllServiceSlugs } from "@/lib/service-data";
import { urlFor, sitemapLanguagesFor } from "@/lib/seo";

// /thank-you is deliberately absent: it is noindex and only reachable after a
// form POST. /privacy and /terms were missing even though the footer links to
// them from every page.
const staticPages = [
  "",
  "/services",
  "/blog",
  "/about",
  "/trust",
  "/contact",
  "/privacy",
  "/terms",
];

// changefreq and priority are omitted throughout: Google ignores both.
// lastModified is only set where a real date exists — a build timestamp on
// pages that did not change teaches Google that this site's lastmod is noise.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const posts = getAllBlogPosts(locale);
    const newestPost = posts
      .map((p) => p.isoDate)
      .filter((d) => !Number.isNaN(new Date(d).getTime()))
      .sort()
      .at(-1);

    for (const page of staticPages) {
      entries.push({
        url: urlFor(locale, page),
        // The blog index genuinely changes when a post lands.
        ...(page === "/blog" && newestPost
          ? { lastModified: new Date(newestPost) }
          : {}),
        alternates: { languages: sitemapLanguagesFor(page) },
      });
    }

    for (const slug of getAllServiceSlugs()) {
      entries.push({
        url: urlFor(locale, `/services/${slug}`),
        alternates: { languages: sitemapLanguagesFor(`/services/${slug}`) },
      });
    }

    for (const post of posts) {
      const published = new Date(post.isoDate);
      entries.push({
        url: urlFor(locale, `/blog/${post.slug}`),
        ...(Number.isNaN(published.getTime())
          ? {}
          : { lastModified: published }),
        alternates: {
          languages: sitemapLanguagesFor(`/blog/${post.slug}`),
        },
      });
    }
  }

  return entries;
}

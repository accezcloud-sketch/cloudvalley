import type { MetadataRoute } from "next";
import { locales, SITE_URL } from "@/lib/i18n";
import { getAllBlogPosts } from "@/lib/blog-data";
import { getAllServiceSlugs } from "@/lib/service-data";

const BASE_URL = SITE_URL;

const staticPages = ["", "/services", "/blog", "/about", "/trust", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }

    for (const slug of getAllServiceSlugs()) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const post of getAllBlogPosts(locale)) {
      const published = new Date(post.isoDate);
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: Number.isNaN(published.getTime()) ? new Date() : published,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

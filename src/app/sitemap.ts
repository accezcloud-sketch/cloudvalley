import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getAllSlugs } from "@/lib/blog-data";

const BASE_URL = "https://cloudvalley.co";

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

    for (const slug of getAllSlugs()) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

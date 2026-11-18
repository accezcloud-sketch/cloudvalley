import { getDict } from "./dictionaries";

/**
 * Article frontmatter stores its service as "01".."08" in Western digits.
 * The Arabic dictionary numbers services with Arabic-Indic digits (٠١…),
 * and JavaScript's \d only matches 0-9, so matching against the displayed
 * number silently failed for every Arabic article and linked to
 * /ar/services/02 (a 404). Match on the English list, which uses Western
 * digits, and work with the slug from then on.
 */
export function serviceSlugForNum(num: string): string | undefined {
  const n = num.trim().padStart(2, "0");
  return getDict("en").services.list.find((s) => s.num === n)?.slug;
}

/** The reverse: "website-design" -> "01". */
export function serviceNumForSlug(slug: string): string | undefined {
  return getDict("en").services.list.find((s) => s.slug === slug)?.num;
}

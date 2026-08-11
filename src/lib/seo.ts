import type { Metadata } from "next";
import {
  locales,
  defaultLocale,
  SITE_URL,
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  type Locale,
} from "./i18n";
import { getDict } from "./dictionaries";

type Alternates = NonNullable<Metadata["alternates"]>;

/** Absolute URL for a locale + locale-independent path ("" | "/blog" | "/blog/x"). */
export function urlFor(locale: Locale, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}

/**
 * Canonical + full hreflang cluster for one page.
 *
 * Google throws away an hreflang set unless every URL in it is reciprocal AND
 * self-referencing, so the current locale is listed alongside the others.
 * `x-default` points at the default locale (ar) because that is a real 200 URL
 * that is also in the sitemap — the bare "/" only 307-redirects.
 */
export function alternatesFor(locale: Locale, path = ""): Alternates {
  const languages: NonNullable<Alternates["languages"]> = {};
  for (const l of locales) languages[l] = urlFor(l, path);
  languages["x-default"] = urlFor(defaultLocale, path);
  return { canonical: urlFor(locale, path), languages };
}

/** Same cluster, in the shape `sitemap.ts` wants. */
export function sitemapLanguagesFor(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = urlFor(l, path);
  languages["x-default"] = urlFor(defaultLocale, path);
  return languages;
}

/** og:locale needs language_TERRITORY; the company is registered in Saudi Arabia. */
export const OG_LOCALE: Record<Locale, string> = {
  ar: "ar_SA",
  en: "en_US",
};

/** Brand lockup (2600x1139 raster) — kept as PNG because social scrapers do not render WebP. */
export const BRAND_IMAGE = `${SITE_URL}/wady-logo1.png`;
export const BRAND_IMAGE_WIDTH = 2600;
export const BRAND_IMAGE_HEIGHT = 1139;

/** Stable @id values so Article/Service can point at one Organization node. */
export const ORG_ID = `${SITE_URL}/#organization`;
/** One WebSite node per locale — they have different URLs and inLanguage. */
export const websiteId = (locale: Locale) => `${urlFor(locale)}#website`;

/**
 * Organization node. Every value here is taken from this site's own content:
 * brand names from the dictionaries, email + WhatsApp from lib/i18n, the
 * commercial-registration number and Saudi jurisdiction from the terms page.
 * `sameAs` is deliberately absent — this project publishes no social profiles.
 */
export function organizationSchema(locale: Locale) {
  const dict = getDict(locale);
  const isAr = locale === "ar";
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: dict.brand.name,
    alternateName: isAr ? "Cloud Valley" : "وادي السحاب",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: BRAND_IMAGE,
      width: BRAND_IMAGE_WIDTH,
      height: BRAND_IMAGE_HEIGHT,
    },
    image: BRAND_IMAGE,
    description: dict.meta.description,
    email: CONTACT_EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "Place",
      name: isAr ? "الوطن العربي" : "Arab World",
    },
    identifier: {
      "@type": "PropertyValue",
      name: isAr ? "السجل التجاري" : "Commercial Registration",
      value: "1010637845",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: isAr ? "خدمة العملاء" : "customer support",
      email: CONTACT_EMAIL,
      telephone: `+${WHATSAPP_NUMBER}`,
      availableLanguage: ["ar", "en"],
    },
  };
}

/** WebSite node. No SearchAction: this site has no internal search to point at. */
export function webSiteSchema(locale: Locale) {
  const dict = getDict(locale);
  return {
    "@type": "WebSite",
    "@id": websiteId(locale),
    url: urlFor(locale),
    name: dict.brand.name,
    description: dict.meta.description,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

type PageMetaInput = {
  locale: Locale;
  /** Locale-independent path: "" | "/about" | "/blog/slug". */
  path?: string;
  title?: string;
  description?: string;
  /** Blog posts pass "article" plus the publish date. */
  article?: { publishedTime: string };
};

/**
 * One metadata builder for every page, so canonical + hreflang can never be
 * forgotten again.
 *
 * `openGraph.title`/`description` and `twitter.title`/`description` are left
 * out deliberately: Next replaces the whole `openGraph` object per segment
 * rather than deep-merging it, so omitting them makes them resolve from this
 * page's own title/description instead of freezing the site-wide ones onto
 * every page.
 */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  article,
}: PageMetaInput): Metadata {
  const dict = getDict(locale);
  const other: Locale = locale === "ar" ? "en" : "ar";
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: alternatesFor(locale, path),
    openGraph: {
      ...(article
        ? { type: "article" as const, publishedTime: article.publishedTime }
        : { type: "website" as const }),
      siteName: dict.brand.name,
      url: urlFor(locale, path),
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[other],
      images: [
        {
          url: BRAND_IMAGE,
          width: BRAND_IMAGE_WIDTH,
          height: BRAND_IMAGE_HEIGHT,
          alt: dict.brand.wordmark,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [BRAND_IMAGE],
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Wraps one or more schema nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

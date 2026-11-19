import type { Metadata, Viewport } from "next";
import {
  Amiri,
  Fraunces,
  JetBrains_Mono,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, dirOf, SITE_URL, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import {
  OG_LOCALE,
  SHARE_IMAGE,
  SHARE_IMAGE_WIDTH,
  SHARE_IMAGE_HEIGHT,
  urlFor,
} from "@/lib/seo";
import { THEME_SCRIPT } from "@/lib/theme";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppDock } from "@/components/whatsapp-dock";
import { Analytics } from "@/components/analytics";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const ibmAr = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-ibm-ar",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Browser bar colour for each scheme (dark mode follows the device unless
// the visitor chose a theme with the header button).
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ede3" },
    { media: "(prefers-color-scheme: dark)", color: "#161513" },
  ],
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  const other: Locale = locale === "ar" ? "en" : "ar";
  return {
    // Lets every page below use relative URLs in metadata and stops Next
    // resolving og:image against localhost at build time.
    metadataBase: new URL(SITE_URL),
    // Google Search Console ownership tag (owner decision D3). Set
    // NEXT_PUBLIC_GSC_VERIFICATION in the hosting environment to the code
    // Search Console gives for the "HTML tag" method; nothing is output
    // without it.
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
      : {}),
    title: { default: dict.meta.title, template: `%s | ${dict.brand.name}` },
    description: dict.meta.description,
    // NOTE: no `alternates` here on purpose. Next inherits layout metadata into
    // every child page, so a canonical set here would tell Google that all
    // ~70 pages are duplicates of one URL. Canonicals live on the pages.
    openGraph: {
      type: "website",
      siteName: dict.brand.name,
      title: dict.meta.title,
      description: dict.meta.description,
      url: urlFor(locale),
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[other],
      images: [
        {
          url: SHARE_IMAGE,
          width: SHARE_IMAGE_WIDTH,
          height: SHARE_IMAGE_HEIGHT,
          alt: dict.brand.wordmark,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [SHARE_IMAGE],
    },
    // src/app/favicon.ico and src/app/icon.png are picked up by convention;
    // declaring them again here only produced a duplicate <link rel="icon">.
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const dir = dirOf(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${fraunces.variable} ${amiri.variable} ${jetbrains.variable} ${ibmAr.variable}`}
      // The theme script below may add data-theme before React hydrates.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-paper text-ink paper-grain">
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader
            locale={locale}
            dict={{ nav: dict.nav, brand: { name: dict.brand.name } }}
          />
          <main className="flex-1">{props.children}</main>
          <SiteFooter locale={locale} dict={dict} />
        </div>
        <WhatsAppDock locale={locale} dict={{ nav: { cta: dict.nav.cta } }} />
        <Analytics locale={locale} />
      </body>
    </html>
  );
}

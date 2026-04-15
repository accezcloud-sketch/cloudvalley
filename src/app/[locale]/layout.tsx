import type { Metadata } from "next";
import { Amiri, Fraunces, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, dirOf } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppDock } from "@/components/whatsapp-dock";

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

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  return {
    title: { default: dict.meta.title, template: `%s — ${dict.brand.name}` },
    description: dict.meta.description,
    icons: { icon: "/favicon.ico" },
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
    >
      <body className="min-h-screen bg-paper text-ink paper-grain">
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader locale={locale} dict={dict} />
          <main className="flex-1">{props.children}</main>
          <SiteFooter locale={locale} dict={dict} />
        </div>
        <WhatsAppDock locale={locale} dict={dict} />
      </body>
    </html>
  );
}

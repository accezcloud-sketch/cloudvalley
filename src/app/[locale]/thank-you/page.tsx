import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";

export async function generateMetadata(
  props: PageProps<"/[locale]/thank-you">,
) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return {
    title: getDict(locale).thankYou.title,
    // Post-submit confirmation page: thin, duplicated across locales and
    // reachable only after a form POST. Keep it out of the index but let
    // crawlers follow the link back into the site. It is also absent from
    // the sitemap. Not robots.txt-disallowed on purpose — a blocked URL can
    // never be read, so the noindex would never be seen.
    robots: { index: false, follow: true },
  };
}

export default async function ThankYouPage(
  props: PageProps<"/[locale]/thank-you">,
) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-6 py-32 text-center md:px-10 md:py-48">
      <Rise
        eager
        as="h1"
        className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.02]"
        style={{
          fontFamily: serifDisplay,
          letterSpacing: isAr ? "0" : "-0.025em",
        }}
      >
        {dict.thankYou.heading}
      </Rise>
      <Rise eager delay={100}>
        <p
          className="mt-6 max-w-lg text-[1.15rem] leading-[1.6] text-ink-soft"
          style={{
            fontFamily: isAr
              ? "var(--font-sans-ar)"
              : "var(--font-serif-latin)",
          }}
        >
          {dict.thankYou.body}
        </p>
      </Rise>
      <Rise eager delay={200}>
        <Link
          href={`/${locale}`}
          className="mt-10 inline-flex items-center gap-4 border border-ink px-6 py-4 text-base transition-colors hover:bg-ink hover:text-paper"
        >
          <span aria-hidden className={isAr ? "" : "rotate-180"}>
            →
          </span>
          <span>{dict.thankYou.cta}</span>
        </Link>
      </Rise>
    </section>
  );
}

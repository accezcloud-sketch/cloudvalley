import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, waLink, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getServicePage } from "@/lib/service-data";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, urlFor, graph, breadcrumbSchema } from "@/lib/seo";

const text = {
  en: {
    eyebrow: "Questions and answers",
    title: "Frequently asked questions",
    lede: "Answers to the questions clients ask us about each of our services: timelines, ownership, what is included and how we work.",
    onPage: "On this page",
    cta: "Didn't find your answer? Ask us directly.",
    ctaButton: "Start on WhatsApp",
    waMessage: "Hi, I have a question about your services.",
  },
  ar: {
    eyebrow: "أسئلة وأجوبة",
    title: "الأسئلة الشائعة",
    lede: "إجابات عن الأسئلة التي يطرحها علينا العملاء عن كل خدمة من خدماتنا: المدة، والملكية، وما يشمله العمل، وطريقة عملنا.",
    onPage: "في هذه الصفحة",
    cta: "لم تجد إجابتك؟ اسألنا مباشرة.",
    ctaButton: "تواصل على واتساب",
    waMessage: "أهلًا، لديّ سؤال عن خدماتكم.",
  },
} satisfies Record<Locale, Record<string, string>>;

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return pageMetadata({
    locale,
    path: "/faq",
    title: text[locale].title,
    description: text[locale].lede,
  });
}

/**
 * Every FAQ from the 8 service pages, grouped by service (owner decision
 * D21). Same <dl> markup as the service pages. No FAQPage JSON-LD: the
 * service pages carry none either, since Google retired FAQ rich results on
 * 7 May 2026, and the same questions on two URLs would add nothing.
 */
export default async function FaqPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const t = text[locale];
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const groups = dict.services.list.flatMap((s) => {
    const faq = getServicePage(locale, s.slug)?.faq ?? [];
    return faq.length > 0 ? [{ ...s, faq }] : [];
  });

  const jsonLd = graph(
    breadcrumbSchema([
      { name: dict.nav.home, url: urlFor(locale) },
      { name: t.title, url: urlFor(locale, "/faq") },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-24">
        <SectionRule label={t.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            eager
            as="h1"
            className="md:col-span-8 text-[clamp(2.5rem,7vw,6rem)] leading-[1.02]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {t.title}
          </Rise>
          <Rise eager delay={100} className="md:col-span-4 flex items-end">
            <p
              className="text-[1.05rem] leading-[1.6] text-ink-soft"
              style={{ fontFamily: bodyFont }}
            >
              {t.lede}
            </p>
          </Rise>
        </div>

        {/* Jump links to each service's questions. */}
        <nav aria-label={t.onPage} className="mt-12 md:mt-16">
          <div
            className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.onPage}
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.slug}>
                <a
                  href={`#${g.slug}`}
                  className="inline-flex border border-rule px-3 py-2 text-[0.9rem] text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  style={{ fontFamily: bodyFont }}
                >
                  {g.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* One block per service */}
      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          {groups.map((g) => (
            <div
              key={g.slug}
              id={g.slug}
              className="grid scroll-mt-28 grid-cols-1 gap-6 border-b border-rule py-12 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <div className="md:col-span-4 flex items-start gap-5">
                <span
                  className="text-[1.8rem] leading-none text-accent"
                  style={{ fontFamily: serifDisplay }}
                >
                  {g.num}
                </span>
                <h2
                  className="min-w-0 text-[clamp(1.4rem,3vw,2rem)] leading-[1.12]"
                  style={{
                    fontFamily: serifDisplay,
                    letterSpacing: isAr ? "0" : "-0.015em",
                  }}
                >
                  <Link
                    href={`/${locale}/services/${g.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {g.name}{" "}
                    <span
                      aria-hidden
                      className={`inline-block text-[0.7em] ${isAr ? "rotate-180" : ""}`}
                    >
                      →
                    </span>
                  </Link>
                </h2>
              </div>
              <dl className="md:col-span-8 flex max-w-2xl flex-col gap-8">
                {g.faq.map((item, j) => (
                  <div key={j}>
                    <dt
                      className="text-[1.05rem] font-semibold leading-[1.3] text-ink"
                      style={{ fontFamily: bodyFont }}
                    >
                      {item.question}
                    </dt>
                    <dd
                      className="mt-2 text-[1.02rem] leading-[1.7] text-ink-soft"
                      style={{ fontFamily: bodyFont }}
                    >
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-rule">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <h2
            className="md:col-span-8 text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {t.cta}
          </h2>
          <a
            href={waLink(t.waMessage)}
            target="_blank"
            rel="noreferrer"
            className="md:col-span-4 inline-flex items-center justify-between gap-4 self-end border border-ink px-5 py-4 text-base transition-colors hover:bg-ink hover:text-paper"
          >
            <span>{t.ctaButton}</span>
            <span aria-hidden className={`inline-block ${isAr ? "rotate-180" : ""}`}>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

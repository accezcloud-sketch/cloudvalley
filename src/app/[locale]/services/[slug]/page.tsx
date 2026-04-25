import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getServicePage, getAllServiceSlugs } from "@/lib/service-data";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllServiceSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata(
  props: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) return {};
  const service = getServicePage(locale, slug);
  if (!service) return {};
  const dict = getDict(locale);
  const listing = dict.services.list.find((s) => s.slug === slug);
  return {
    title: listing?.name,
    description: service.tagline,
    openGraph: { type: "website" },
    alternates: {
      canonical: `https://cloudvalley.co/${locale}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage(
  props: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const service = getServicePage(locale, slug);
  if (!service) notFound();

  const dict = getDict(locale);
  const listing = dict.services.list.find((s) => s.slug === slug);
  if (!listing) notFound();

  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: listing.name,
    description: service.tagline,
    provider: {
      "@type": "Organization",
      name: isAr ? "وادي السحاب" : "Cloud Valley",
      url: "https://cloudvalley.co",
    },
    serviceType: listing.name,
    areaServed: {
      "@type": "Place",
      name: isAr ? "الوطن العربي" : "Arab World",
    },
    url: `https://cloudvalley.co/${locale}/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        {/* Back link */}
        <nav className="pt-10 md:pt-16">
          <Rise>
            <Link
              href={`/${locale}/services`}
              className="link-sweep inline-block text-[0.8rem] uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {dict.services.backLabel}
            </Link>
          </Rise>
        </nav>

        {/* Section 1 — Hero */}
        <header className="pt-10 pb-10 md:pt-14 md:pb-14">
          <SectionRule
            label={`${listing.num} — ${isAr ? "الخدمة" : "Service"}`}
          />

          <Rise
            as="h1"
            className="mt-10 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {listing.name}
          </Rise>

          <Rise delay={80}>
            <p
              className="mt-6 max-w-3xl text-[1.15rem] leading-[1.55] text-ink-soft"
              style={{ fontFamily: bodyFont }}
            >
              {service.tagline}
            </p>
          </Rise>

        </header>

        <div className="max-w-3xl">
          {/* Section 2 — The problem */}
          <Rise>
            <section className="border-t border-rule pt-10 pb-12">
              <h2
                className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.015em",
                }}
              >
                {isAr ? "المشكلة" : "The problem"}
              </h2>
              <p
                className="mt-5 text-[1.02rem] leading-[1.7] text-ink-soft"
                style={{ fontFamily: bodyFont }}
              >
                {service.problem}
              </p>
            </section>
          </Rise>

          {/* Section 3 — What we do */}
          <Rise>
            <section className="border-t border-rule pt-10 pb-12">
              <h2
                className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.015em",
                }}
              >
                {isAr ? "ما نفعله" : "What we do"}
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {service.deliverables.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[1.02rem] leading-[1.6] text-ink-soft"
                    style={{ fontFamily: bodyFont }}
                  >
                    <span
                      className="mt-[0.35em] shrink-0 text-[0.7rem] text-accent"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      &mdash;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Rise>

          {/* Section 4 — Why us */}
          <Rise>
            <section className="border-t border-rule pt-10 pb-12">
              <h2
                className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.015em",
                }}
              >
                {isAr ? "لماذا وادي السحاب" : "Why Cloud Valley"}
              </h2>
              <div className="mt-8 flex flex-col gap-8">
                {service.differentiators.map((d, j) => (
                  <div key={j}>
                    <h3
                      className="text-[1.05rem] font-semibold leading-[1.3] text-ink"
                      style={{ fontFamily: bodyFont }}
                    >
                      {d.label}
                    </h3>
                    <p
                      className="mt-2 text-[1.02rem] leading-[1.7] text-ink-soft"
                      style={{ fontFamily: bodyFont }}
                    >
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Rise>

          {/* Section 5 — Outcome */}
          <Rise>
            <section className="border-t border-rule pt-10 pb-12">
              <div
                className={`border-accent py-2 ${isAr ? "border-r-2 pr-6" : "border-l-2 pl-6"}`}
              >
                <div
                  className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {isAr ? "النتيجة" : "Outcome"}
                </div>
                <p
                  className="mt-3 text-[clamp(1.2rem,2.5vw,1.6rem)] leading-[1.35] text-accent"
                  style={{
                    fontFamily: serifDisplay,
                    letterSpacing: isAr ? "0" : "-0.01em",
                  }}
                >
                  {service.outcome}
                </p>
              </div>
            </section>
          </Rise>

          {/* Section 6 — FAQ */}
          <Rise>
            <section className="border-t border-rule pt-10 pb-12">
              <h2
                className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.015em",
                }}
              >
                {isAr ? "أسئلة شائعة" : "Frequently asked questions"}
              </h2>
              <dl className="mt-8 flex flex-col gap-8">
                {service.faq.map((item, j) => (
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
            </section>
          </Rise>
        </div>

        {/* Section 7 — CTA */}
        <section className="max-w-3xl border-t border-rule pb-20 pt-12 md:pb-28">
          <Rise>
            <h3
              className="text-[clamp(1.4rem,3vw,2rem)] leading-[1.1]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.015em",
              }}
            >
              {isAr ? "مستعد للبدء؟" : "Ready to start?"}
            </h3>
          </Rise>
          <Rise delay={60}>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={waLink(
                  isAr
                    ? `أود الاستفسار عن خدمة «${listing.name}».`
                    : `I'd like to ask about your "${listing.name}" service.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-[0.82rem] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent hover:border-accent"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-whatsapp)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-whatsapp)]" />
                </span>
                {isAr ? "واتساب" : "WhatsApp"}
              </a>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-[0.82rem] uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {dict.services.backLabel}
              </Link>
            </div>
          </Rise>
        </section>
      </article>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import {
  getIndustry,
  getAllIndustrySlugs,
  industryNav,
} from "@/lib/industry-data";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { JsonLd } from "@/components/json-ld";
import { ArticleList } from "@/components/article-list";
import { getPostsForService, type BlogListing } from "@/lib/blog-data";
import { serviceNumForSlug } from "@/lib/service-map";
import {
  pageMetadata,
  urlFor,
  graph,
  breadcrumbSchema,
  ORG_ID,
} from "@/lib/seo";

// Only the three sectors exist; anything else is a 404, not a render.
export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllIndustrySlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) return {};
  const industry = getIndustry(locale, slug);
  if (!industry) return {};
  return pageMetadata({
    locale,
    path: `/industries/${slug}`,
    title: industry.metaTitle,
    description: industry.description,
  });
}

export default async function IndustryPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const industry = getIndustry(locale, slug);
  if (!industry) notFound();

  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const url = urlFor(locale, `/industries/${slug}`);

  // The services this sector page points to, with their names as listed.
  const helped = industry.help.flatMap((h) => {
    const listing = dict.services.list.find((s) => s.slug === h.service);
    return listing ? [{ ...h, name: listing.name }] : [];
  });

  // Articles on those services, newest first per service, no duplicates.
  const seen = new Set<string>();
  const posts: BlogListing[] = [];
  for (const h of helped) {
    for (const p of getPostsForService(
      locale,
      serviceNumForSlug(h.service) ?? "",
      1,
    )) {
      if (!seen.has(p.slug)) {
        seen.add(p.slug);
        posts.push(p);
      }
    }
  }

  // Same shape as the service pages: one Service node that points at the
  // home page's Organization, plus breadcrumbs. There is no /industries
  // index page, so the middle crumb is the services index.
  const jsonLd = graph(
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: industry.h1,
      description: industry.description,
      provider: { "@id": ORG_ID },
      serviceType: helped.map((h) => h.name),
      audience: {
        "@type": "BusinessAudience",
        audienceType: industry.name,
      },
      areaServed: {
        "@type": "Country",
        name: isAr ? "السعودية" : "Saudi Arabia",
      },
      inLanguage: locale,
      url,
    },
    breadcrumbSchema([
      { name: dict.nav.home, url: urlFor(locale) },
      { name: dict.nav.services, url: urlFor(locale, "/services") },
      { name: industry.name, url },
    ]),
  );

  const h2Style = {
    fontFamily: serifDisplay,
    letterSpacing: isAr ? "0" : "-0.015em",
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <article className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        {/* Back link */}
        <nav className="pt-10 md:pt-16">
          <Rise eager>
            <Link
              href={`/${locale}/services`}
              className="link-sweep inline-block text-[0.9rem] text-ink-mute transition-colors hover:text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {dict.services.backLabel}
            </Link>
          </Rise>
        </nav>

        {/* Section 1: hero */}
        <header className="pt-10 pb-10 md:pt-14 md:pb-14">
          <SectionRule
            label={`${isAr ? "القطاع" : "Sector"} · ${industry.name}`}
          />

          <Rise
            eager
            as="h1"
            className="mt-10 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {industry.h1}
          </Rise>

          <Rise eager delay={80}>
            <p
              className="mt-6 max-w-3xl text-[1.15rem] leading-[1.55] text-ink-soft"
              style={{ fontFamily: bodyFont }}
            >
              {industry.intro}
            </p>
          </Rise>
        </header>

        {/* From laptop width the reading column sits beside a side panel;
            phones and tablets keep one column. */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="max-w-3xl">
              {/* Section 2: the problems */}
              <Rise>
                <section className="border-t border-rule pt-10 pb-12">
                  <h2
                    className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                    style={h2Style}
                  >
                    {isAr ? "المشكلات التي نراها" : "The problems we see"}
                  </h2>
                  <div className="mt-8 flex flex-col gap-8">
                    {industry.problems.map((p, j) => (
                      <div key={j}>
                        <h3
                          className="text-[1.05rem] font-semibold leading-[1.3] text-ink"
                          style={{ fontFamily: bodyFont }}
                        >
                          {p.label}
                        </h3>
                        <p
                          className="mt-2 text-[1.02rem] leading-[1.7] text-ink-soft"
                          style={{ fontFamily: bodyFont }}
                        >
                          {p.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </Rise>

              {/* Section 3: how we help, one existing service per item */}
              <Rise>
                <section className="border-t border-rule pt-10 pb-12">
                  <h2
                    className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                    style={h2Style}
                  >
                    {isAr ? "كيف نساعد" : "How we help"}
                  </h2>
                  <ul className="mt-8 flex flex-col gap-8">
                    {helped.map((h) => (
                      <li key={h.service} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.75em] h-px w-3 shrink-0 bg-accent"
                        />
                        <div className="min-w-0">
                          <h3
                            className="text-[1.05rem] font-semibold leading-[1.3] text-ink"
                            style={{ fontFamily: bodyFont }}
                          >
                            <Link
                              href={`/${locale}/services/${h.service}`}
                              className="transition-colors hover:text-accent"
                            >
                              {h.name}
                            </Link>
                          </h3>
                          <p
                            className="mt-2 text-[1.02rem] leading-[1.7] text-ink-soft"
                            style={{ fontFamily: bodyFont }}
                          >
                            {h.body}
                          </p>
                          <Link
                            href={`/${locale}/services/${h.service}`}
                            className="link-sweep mt-3 inline-block text-[0.85rem] text-ink-mute transition-colors hover:text-accent"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {dict.services.detailLabel}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </Rise>

              {/* Section 4: FAQ. No FAQPage markup, as on the service pages:
                  Google retired FAQ rich results. */}
              <Rise>
                <section className="border-t border-rule pt-10 pb-12">
                  <h2
                    className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
                    style={h2Style}
                  >
                    {isAr ? "أسئلة شائعة" : "Frequently asked questions"}
                  </h2>
                  <dl className="mt-8 flex flex-col gap-8">
                    {industry.faq.map((item, j) => (
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

            {/* Articles on the services above. */}
            <div className="max-w-3xl pb-12">
              <ArticleList
                locale={locale}
                heading={
                  isAr ? "مقالات عن هذه الخدمات" : "Articles on these services"
                }
                posts={posts.slice(0, 3)}
                more={{
                  label: isAr ? "كل المقالات" : "All articles",
                  href: `/${locale}/blog`,
                }}
              />
            </div>

            {/* Section 5: CTA */}
            <section className="max-w-3xl border-t border-rule pb-20 pt-12 md:pb-28">
              <Rise>
                <h2
                  className="text-[clamp(1.4rem,3vw,2rem)] leading-[1.1]"
                  style={h2Style}
                >
                  {isAr ? "مستعد للبدء؟" : "Ready to start?"}
                </h2>
              </Rise>
              <Rise delay={60}>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={waLink(industry.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-[0.9rem] text-paper transition-colors hover:bg-accent hover:border-accent"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-whatsapp)]" />
                    </span>
                    {isAr ? "واتساب" : "WhatsApp"}
                  </a>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-[0.9rem] text-ink transition-colors hover:bg-ink hover:text-paper"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {isAr ? "نموذج التواصل" : "Contact form"}
                  </Link>
                </div>
              </Rise>
            </section>
          </div>

          {/* Side panel (laptop and wider): the next step, the services on
            this page, and the other sectors. */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28 space-y-10 border-t border-rule pt-10 pb-10">
              <div>
                <div
                  className="text-[0.85rem] text-ink-mute"
                  style={{ fontFamily: bodyFont }}
                >
                  {isAr ? "تحدّث معنا عن" : "Talk to us about"}
                </div>
                <p
                  className="mt-3 text-[1.4rem] leading-[1.2] text-ink"
                  style={{ fontFamily: serifDisplay }}
                >
                  {industry.name}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={waLink(industry.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-[0.85rem] text-paper transition-colors hover:border-accent hover:bg-accent"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-whatsapp)]" />
                    {isAr ? "واتساب" : "WhatsApp"}
                  </a>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-[0.85rem] text-ink transition-colors hover:bg-ink hover:text-paper"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {isAr ? "نموذج التواصل" : "Contact form"}
                  </Link>
                </div>
              </div>
              <nav
                aria-label={isAr ? "الخدمات في هذه الصفحة" : "Services on this page"}
                className="border-t border-rule pt-8"
              >
                <div
                  className="text-[0.85rem] text-ink-mute"
                  style={{ fontFamily: bodyFont }}
                >
                  {isAr ? "الخدمات في هذه الصفحة" : "Services on this page"}
                </div>
                <ul className="mt-4 space-y-3">
                  {helped.map((h) => (
                    <li key={h.service}>
                      <Link
                        href={`/${locale}/services/${h.service}`}
                        className="text-[0.95rem] text-ink-soft transition-colors hover:text-accent"
                        style={{ fontFamily: bodyFont }}
                      >
                        {h.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav
                aria-label={isAr ? "قطاعات أخرى" : "Other sectors"}
                className="border-t border-rule pt-8"
              >
                <div
                  className="text-[0.85rem] text-ink-mute"
                  style={{ fontFamily: bodyFont }}
                >
                  {isAr ? "قطاعات أخرى" : "Other sectors"}
                </div>
                <ul className="mt-4 space-y-3">
                  {industryNav(locale)
                    .filter((i) => i.slug !== slug)
                    .map((i) => (
                      <li key={i.slug}>
                        <Link
                          href={`/${locale}/industries/${i.slug}`}
                          className="text-[0.95rem] text-ink-soft transition-colors hover:text-accent"
                          style={{ fontFamily: bodyFont }}
                        >
                          {i.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

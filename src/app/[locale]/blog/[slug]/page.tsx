import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { locales, isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import {
  getBlogPost,
  getAllSlugs,
  getRelatedPosts,
  type BlogSection,
} from "@/lib/blog-data";
import { ArticleList } from "@/components/article-list";
import { ShareLinks } from "@/components/share-links";
import { serviceSlugForNum } from "@/lib/service-map";
import { coverAlt, COVER_WIDTH, COVER_HEIGHT } from "@/lib/cover-art";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { JsonLd } from "@/components/json-ld";
import {
  pageMetadata,
  urlFor,
  graph,
  breadcrumbSchema,
  ORG_ID,
  coverUrl,
} from "@/lib/seo";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) return {};
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  // The hreflang pair was already here but had no x-default, which is enough
  // for Google to discard the whole cluster. pageMetadata adds it.
  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.description,
    article: {
      publishedTime: post.isoDate,
      modifiedTime: post.isoUpdated || undefined,
    },
    image: {
      url: coverUrl(locale, slug),
      alt: coverAlt(post.serviceNum, locale),
    },
  });
}

export default async function BlogPostPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const dict = getDict(locale);

  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const serviceSlug = serviceSlugForNum(post.serviceNum);
  const serviceEntry = serviceSlug
    ? dict.services.list.find((s) => s.slug === serviceSlug)
    : undefined;

  const url = urlFor(locale, `/blog/${slug}`);

  // "Updated" date, shown only when the frontmatter has a real one.
  const updated = post.isoUpdated ? new Date(post.isoUpdated) : null;
  const updatedLabel =
    updated && !Number.isNaN(updated.getTime())
      ? `${isAr ? "آخر تحديث" : "Updated"} ${new Intl.DateTimeFormat(
          isAr ? "ar-SA-u-ca-gregory-nu-arab" : "en-US",
          { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
        ).format(updated)}`
      : null;

  // Section headings, for the "On this page" list in the side panel. Ids are
  // positional so they work for Arabic and English alike.
  const headings = post.body.flatMap((s, i) =>
    s.type === "heading" ? [{ id: `section-${i + 1}`, text: s.text }] : [],
  );

  // BlogPosting rather than bare Article, plus mainEntityOfPage/image/
  // dateModified, which Google's Article guidance asks for. author stays an
  // Organization because this project records no human author anywhere.
  const jsonLd = graph(
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      headline: post.title,
      description: post.description,
      datePublished: post.isoDate,
      dateModified: post.isoUpdated || post.isoDate,
      image: coverUrl(locale, slug),
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      inLanguage: locale,
      isPartOf: { "@type": "Blog", "@id": `${urlFor(locale, "/blog")}#blog` },
    },
    breadcrumbSchema([
      { name: dict.nav.home, url: urlFor(locale) },
      // nav labels, not page titles — blog.title is a full sentence.
      { name: dict.nav.blog, url: urlFor(locale, "/blog") },
      { name: post.title, url },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <article className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        {/* Back link */}
        <nav className="pt-10 md:pt-16">
          <Rise eager>
            <Link
              href={`/${locale}/blog`}
              className="link-sweep inline-block text-[0.9rem] text-ink-mute transition-colors hover:text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {dict.blog.backLabel}
            </Link>
          </Rise>
        </nav>

        {/* Header */}
        <header className="pt-10 pb-10 md:pt-14 md:pb-14">
          <SectionRule label={post.kicker} />

          <Rise
            eager
            as="h1"
            className="mt-10 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {post.title}
          </Rise>

          <Rise eager delay={80}>
            <div
              className="mt-6 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>{post.date}</span>
              {updatedLabel && (
                <>
                  <span className="h-px w-6 bg-rule" />
                  <span>{updatedLabel}</span>
                </>
              )}
              <span className="h-px w-6 bg-rule" />
              <span>{post.readTime}</span>
            </div>
          </Rise>
        </header>

        {/* From laptop width the reading column sits beside a side panel;
            phones and tablets keep one column. */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {/* Cover: topic illustration drawn in code, also the share image. */}
            <Image
              src={`/${locale}/blog/${slug}/cover`}
              alt={coverAlt(post.serviceNum, locale)}
              width={COVER_WIDTH}
              height={COVER_HEIGHT}
              preload
              sizes="(min-width: 1440px) 860px, (min-width: 1024px) 60vw, 100vw"
              className="mb-10 h-auto w-full border border-rule"
            />
            {/* Lead paragraph */}
            <Rise eager delay={120}>
              <p
                className="max-w-3xl border-t border-rule pt-10 text-[1.15rem] leading-[1.65] text-ink-soft"
                style={{ fontFamily: bodyFont }}
              >
                {post.description}
              </p>
            </Rise>

            {/* Body */}
            <div className="mt-12 max-w-3xl pb-16 md:pb-24">
              {post.body.map((section, i) => (
                <Rise key={i} delay={Math.min(i * 40, 300)}>
                  {renderSection(
                    section,
                    serifDisplay,
                    bodyFont,
                    isAr,
                    `section-${i + 1}`,
                  )}
                </Rise>
              ))}
            </div>

            {/* Share: WhatsApp, LinkedIn, X, copy link. */}
            <div className="max-w-3xl pb-12">
              <ShareLinks locale={locale} url={url} title={post.title} />
            </div>

            {/* Related articles: same service only, newest first. */}
            <div className="max-w-3xl pb-12">
              <ArticleList
                locale={locale}
                heading={isAr ? "مقالات ذات صلة" : "Related articles"}
                posts={getRelatedPosts(locale, slug)}
              />
            </div>

            {/* CTA */}
            <section className="max-w-3xl border-t border-rule pb-20 pt-12 md:pb-28">
              <Rise>
                <h3
                  className="text-[clamp(1.4rem,3vw,2rem)] leading-[1.1]"
                  style={{
                    fontFamily: serifDisplay,
                    letterSpacing: isAr ? "0" : "-0.015em",
                  }}
                >
                  {isAr ? "هل تريد هذه الخدمة؟" : "Want this service?"}
                </h3>
              </Rise>
              <Rise delay={60}>
                <div className="mt-6 flex flex-wrap gap-4">
                  {/* Never link to a guessed address: if the article's service is
                  unknown, the button is left out instead of pointing at a 404. */}
                  {serviceEntry && (
                    <Link
                      href={`/${locale}/services/${serviceEntry.slug}`}
                      className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-[0.9rem] text-paper transition-colors hover:bg-accent hover:border-accent"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {isAr ? "تفاصيل الخدمة" : "Service details"}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                  <a
                    href={waLink(
                      isAr
                        ? `مرحبًا، أريد الاستفسار عن خدمة ${post.kicker}`
                        : `Hi, I'd like to ask about ${post.kicker}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-[0.9rem] text-ink transition-colors hover:bg-ink hover:text-paper"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-whatsapp)]" />
                    </span>
                    {isAr ? "واتساب" : "WhatsApp"}
                  </a>
                </div>
              </Rise>
            </section>
          </div>

          {/* Side panel (laptop and wider): sections of this article and the
            service it belongs to. Fills the space beside the reading column
            with things a reader can act on. */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] space-y-10 overflow-y-auto border-t border-rule pt-10 pb-10">
              {headings.length > 1 && (
                <nav aria-label={isAr ? "في هذه الصفحة" : "On this page"}>
                  <div
                    className="text-[0.85rem] text-ink-mute"
                    style={{ fontFamily: bodyFont }}
                  >
                    {isAr ? "في هذه الصفحة" : "On this page"}
                  </div>
                  <ol className="mt-4 space-y-3">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="block text-[0.95rem] leading-[1.4] text-ink-soft transition-colors hover:text-accent"
                          style={{ fontFamily: bodyFont }}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              {serviceEntry && (
                <div className="border-t border-rule pt-8">
                  <div
                    className="text-[0.85rem] text-ink-mute"
                    style={{ fontFamily: bodyFont }}
                  >
                    {isAr
                      ? "الخدمة المرتبطة بهذا المقال"
                      : "The service behind this article"}
                  </div>
                  <Link
                    href={`/${locale}/services/${serviceEntry.slug}`}
                    className="mt-3 block text-[1.4rem] leading-[1.2] text-ink transition-colors hover:text-accent"
                    style={{ fontFamily: serifDisplay }}
                  >
                    {serviceEntry.name}
                  </Link>
                  <p
                    className="mt-2 text-[0.95rem] leading-[1.55] text-ink-soft"
                    style={{ fontFamily: bodyFont }}
                  >
                    {serviceEntry.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`/${locale}/services/${serviceEntry.slug}`}
                      className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-[0.85rem] text-paper transition-colors hover:border-accent hover:bg-accent"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {isAr ? "تفاصيل الخدمة" : "Service details"}
                    </Link>
                    <a
                      href={waLink(
                        isAr
                          ? `مرحبًا، أريد الاستفسار عن خدمة ${serviceEntry.name}`
                          : `Hi, I'd like to ask about ${serviceEntry.name}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-[0.85rem] text-ink transition-colors hover:bg-ink hover:text-paper"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-whatsapp)]" />
                      {isAr ? "واتساب" : "WhatsApp"}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function renderSection(
  section: BlogSection,
  serifDisplay: string,
  bodyFont: string,
  isAr: boolean,
  id: string,
) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          id={id}
          className="mt-12 mb-5 scroll-mt-28 text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
          style={{
            fontFamily: serifDisplay,
            letterSpacing: isAr ? "0" : "-0.015em",
          }}
        >
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p
          className="mt-5 text-[1.02rem] leading-[1.7] text-ink-soft"
          style={{ fontFamily: bodyFont }}
        >
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="mt-5 flex flex-col gap-3">
          {section.items.map((item, j) => (
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
      );
    case "qa":
      return (
        <div className="mt-6">
          <h3
            className="text-[1.08rem] font-semibold leading-[1.4] text-ink"
            style={{ fontFamily: bodyFont }}
          >
            {section.question}
          </h3>
          <p
            className="mt-2 text-[1.02rem] leading-[1.7] text-ink-soft"
            style={{ fontFamily: bodyFont }}
          >
            {section.answer}
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote
          className={`mt-8 mb-8 border-accent py-2 ${isAr ? "border-r-2 pr-6" : "border-l-2 pl-6"}`}
        >
          <p
            className="text-[1.08rem] leading-[1.65] italic text-ink"
            style={{ fontFamily: serifDisplay }}
          >
            {section.text}
          </p>
          {section.cite && (
            <cite
              className="mt-2 block text-[0.82rem] not-italic text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {section.cite}
            </cite>
          )}
        </blockquote>
      );
  }
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getBlogPost, getAllSlugs, type BlogSection } from "@/lib/blog-data";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata(
  props: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) return {};
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  const dict = getDict(locale);
  const listingPost = dict.blog.posts.find((p) => p.slug === slug);
  return {
    title: listingPost?.title ?? post.slug,
    description: post.description,
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const dict = getDict(locale);
  const listingPost = dict.blog.posts.find((p) => p.slug === slug);
  if (!listingPost) notFound();

  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const serviceEntry = dict.services.list.find(
    (s) => s.num.replace(/[^\d]/g, "") === post.serviceNum,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: listingPost.title,
    description: post.description,
    datePublished: parseDateToISO(listingPost.date, isAr),
    author: {
      "@type": "Organization",
      name: "Cloud Valley",
      url: "https://cloudvalley.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Cloud Valley",
      url: "https://cloudvalley.co",
    },
    inLanguage: isAr ? "ar" : "en",
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
              href={`/${locale}/blog`}
              className="link-sweep inline-block text-[0.8rem] uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-accent"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {dict.blog.backLabel}
            </Link>
          </Rise>
        </nav>

        {/* Header */}
        <header className="pt-10 pb-10 md:pt-14 md:pb-14">
          <SectionRule label={listingPost.kicker} />

          <Rise
            as="h1"
            className="mt-10 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {listingPost.title}
          </Rise>

          <Rise delay={80}>
            <div
              className="mt-6 flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>{listingPost.date}</span>
              <span className="h-px w-6 bg-rule" />
              <span>{listingPost.readTime}</span>
            </div>
          </Rise>
        </header>

        {/* Lead paragraph */}
        <Rise delay={120}>
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
              {renderSection(section, serifDisplay, bodyFont, isAr)}
            </Rise>
          ))}
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
              <Link
                href={`/${locale}/services/${serviceEntry?.slug ?? post.serviceNum}`}
                className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-[0.82rem] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent hover:border-accent"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {isAr ? "تفاصيل الخدمة" : "Service details"}
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href={waLink(
                  isAr
                    ? `مرحبًا، أريد الاستفسار عن خدمة ${listingPost.kicker}`
                    : `Hi, I'd like to ask about ${listingPost.kicker}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-[0.82rem] uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-whatsapp)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-whatsapp)]" />
                </span>
                {isAr ? "واتساب" : "WhatsApp"}
              </a>
            </div>
          </Rise>
        </section>
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
) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          className="mt-12 mb-5 text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
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

function parseDateToISO(dateStr: string, isAr: boolean): string {
  if (!isAr) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
  }
  // Fallback for Arabic dates — return a reasonable default
  const arabicToEnglish: Record<string, string> = {
    "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4",
    "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9",
  };
  const months: Record<string, string> = {
    "كانون الثاني": "01", "شباط": "02", "آذار": "03", "نيسان": "04",
    "أيار": "05", "حزيران": "06", "تموز": "07", "آب": "08",
    "أيلول": "09", "تشرين الأول": "10", "تشرين الثاني": "11",
    "كانون الأول": "12",
  };
  let normalized = dateStr;
  for (const [ar, en] of Object.entries(arabicToEnglish)) {
    normalized = normalized.replaceAll(ar, en);
  }
  for (const [arMonth, num] of Object.entries(months)) {
    if (normalized.includes(arMonth)) {
      const parts = normalized.replace(arMonth, "").trim().split(/\s+/);
      const day = parts[0]?.padStart(2, "0");
      const year = parts[1];
      if (day && year) return `${year}-${num}-${day}`;
    }
  }
  return "2026-04-01";
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, waLink } from "@/lib/i18n";
import { ContactForm } from "@/components/contact-form";
import { ArticleList } from "@/components/article-list";
import { getBlogListing } from "@/lib/blog-data";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { JsonLd } from "@/components/json-ld";
import {
  pageMetadata,
  graph,
  organizationSchema,
  webSiteSchema,
} from "@/lib/seo";

// The home page exported no metadata at all, so it inherited the layout's and
// shipped with no canonical and no hreflang.
export async function generateMetadata(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale });
}

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";

  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      {/* Organization + WebSite live on the home page only; other pages point
          at them by @id rather than repeating the whole node. */}
      <JsonLd data={graph(organizationSchema(locale), webSiteSchema(locale))} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-12 pb-20 md:px-10 md:pt-20 md:pb-28">
          <div
            className="flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>{dict.home.eyebrow}</span>
            <span className="h-px flex-1 bg-rule" />
            <span className="hidden md:inline">Cloud Valley · وادي السحاب</span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12">
            <h1
              className="display-serif col-span-1 text-[clamp(3rem,11vw,10rem)] md:col-span-9"
              style={{ fontFamily: serifDisplay }}
            >
              {/* eager: this h1 is the LCP element — it must not wait for JS. */}
              <Rise as="span" eager className="block">
                {dict.home.displayA}
              </Rise>
              <Rise
                as="span"
                eager
                delay={120}
                className="block italic text-accent"
              >
                {dict.home.displayB}
              </Rise>
              <Rise as="span" eager delay={240} className="block">
                {dict.home.displayC}
              </Rise>
            </h1>

            <Rise
              as="div"
              eager
              delay={400}
              className="col-span-1 flex flex-col justify-end gap-8 md:col-span-3"
            >
              <p
                className="text-[1.05rem] leading-[1.55] text-ink-soft md:text-[1.1rem]"
                style={{
                  fontFamily: isAr
                    ? "var(--font-sans-ar)"
                    : "var(--font-serif-latin)",
                }}
              >
                {dict.home.lede}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-accent"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-whatsapp"
                  />
                  {dict.home.primaryCta}
                </a>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm text-ink link-sweep underline-offset-heavy"
                >
                  {dict.home.secondaryCta}
                  <span
                    aria-hidden
                    className={`inline-block ${isAr ? "rotate-180" : ""}`}
                  >
                    →
                  </span>
                </Link>
              </div>
            </Rise>
          </div>
        </div>

        {/* marquee */}
        <div className="keep-dark relative overflow-hidden border-t border-rule bg-ink text-paper">
          <div className="flex whitespace-nowrap py-5">
            <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
              {[...dict.home.marquee, ...dict.home.marquee].map((w, i) => (
                <span
                  key={i}
                  className="text-[1.1rem] tracking-tight"
                  style={{
                    fontFamily: isAr
                      ? "var(--font-serif-ar)"
                      : "var(--font-serif-latin)",
                    fontStyle: i % 2 === 1 && !isAr ? "italic" : "normal",
                  }}
                >
                  {w}
                  <span
                    className="mx-6 inline-block align-middle text-accent"
                    aria-hidden
                  >
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionRule label={dict.home.manifestoNum} />
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            as="h2"
            className="col-span-1 text-[clamp(2rem,5vw,4rem)] leading-[1.05] md:col-span-7"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            <span
              className="mr-2 align-top text-accent"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.4em" }}
              aria-hidden
            >
              ¶
            </span>
            {dict.home.manifestoTitle}
          </Rise>
          <Rise
            as="div"
            delay={120}
            className="col-span-1 space-y-5 text-[1rem] leading-[1.7] text-ink-soft md:col-span-5 md:pt-3 md:text-[1.05rem]"
            style={{
              fontFamily: isAr
                ? "var(--font-sans-ar)"
                : "var(--font-serif-latin)",
            }}
          >
            {dict.home.manifestoBody.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:text-5xl first-letter:float-none first-letter:mr-2 first-letter:font-bold first-letter:text-accent"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </Rise>
        </div>
      </section>


      {/* SERVICES PREVIEW */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionRule label={dict.home.servicesNum} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2
              className="text-[clamp(2rem,5vw,3.8rem)] leading-[1.05]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {dict.home.servicesTitle}
            </h2>
            <p
              className="mt-6 max-w-md text-[1.02rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.home.servicesLede}
            </p>
            <Link
              href={`/${locale}/services`}
              className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm link-sweep underline-offset-heavy"
            >
              {isAr ? "اقرأ التفاصيل" : "Read the details"}
              <span
                aria-hidden
                className={`inline-block ${isAr ? "rotate-180" : ""}`}
              >
                →
              </span>
            </Link>
          </div>
          <ul className="md:col-span-7 divide-y divide-rule border-y border-rule">
            {dict.services.list.map((s, i) => (
              <Rise as="li" key={s.num} delay={i * 70} className="group">
                <Link
                  href={`/${locale}/services/${s.slug}`}
                  className="flex items-start gap-6 py-6"
                >
                  <span
                    className="w-10 flex-shrink-0 pt-1 text-[0.75rem] tracking-[0.18em] text-ink-mute"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-xl leading-snug text-ink md:text-[1.6rem]"
                      style={{ fontFamily: serifDisplay }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="mt-1 text-[0.95rem] text-ink-mute"
                      style={{
                        fontFamily: isAr
                          ? "var(--font-sans-ar)"
                          : "var(--font-serif-latin)",
                      }}
                    >
                      {s.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className={`pt-2 text-ink-mute transition-transform duration-300 group-hover:text-accent ${
                      isAr
                        ? "rotate-180 group-hover:-translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </Link>
              </Rise>
            ))}
          </ul>
        </div>
      </section>

      {/* FROM THE BLOG: the three newest articles, so new posts are linked
          from the home page and found quickly by readers and crawlers. */}
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-24 md:px-10 md:pt-32">
        <div className="max-w-3xl">
          <ArticleList
            locale={locale}
            heading={isAr ? "من المدوّنة" : "From the blog"}
            posts={getBlogListing(locale).slice(0, 3)}
            more={{
              label: isAr ? "كل المقالات" : "All articles",
              href: `/${locale}/blog`,
            }}
          />
        </div>
      </div>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-6 py-28 md:px-10 md:py-40"
      >
        <SectionRule label={dict.home.ctaNum} />
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Rise
              as="h2"
              className="text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {dict.home.ctaTitle}
            </Rise>
            <Rise delay={80}>
              <p
                className="mt-6 text-[1.02rem] leading-[1.6] text-ink-soft"
                style={{
                  fontFamily: isAr
                    ? "var(--font-sans-ar)"
                    : "var(--font-serif-latin)",
                }}
              >
                {dict.home.ctaBody}
              </p>
            </Rise>
          </div>
          <Rise delay={150} className="md:col-span-7">
            <ContactForm locale={locale} labels={dict.contact.form} />
          </Rise>
        </div>
      </section>
    </>
  );
}

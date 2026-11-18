import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import {
  getTopic,
  getTopics,
  getTopicSlugs,
  topicPath,
  articleCount,
} from "@/lib/blog-topics";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { JsonLd } from "@/components/json-ld";
import { ArticleList } from "@/components/article-list";
import { TopicLinks } from "@/components/topic-links";
import { pageMetadata, urlFor, graph, breadcrumbSchema } from "@/lib/seo";

// One page per service that has articles (owner decision D21). The static
// "topic" segment takes precedence over the sibling blog/[slug] route.
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getTopicSlugs().map((topic) => ({ locale, topic })),
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await props.params;
  if (!isLocale(locale)) return {};
  const t = getTopic(locale, topic);
  if (!t) return {};
  return pageMetadata({
    locale,
    path: topicPath(topic),
    title: t.title,
    description: t.intro,
  });
}

export default async function BlogTopicPage(props: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await props.params;
  if (!isLocale(locale)) notFound();

  const t = getTopic(locale, topic);
  if (!t) notFound();

  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const url = urlFor(locale, topicPath(topic));
  const jsonLd = graph(
    breadcrumbSchema([
      { name: dict.nav.home, url: urlFor(locale) },
      { name: dict.nav.blog, url: urlFor(locale, "/blog") },
      { name: t.title, url },
    ]),
  );

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
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

        <header className="pt-10 pb-10 md:pt-14 md:pb-14">
          <SectionRule label={articleCount(t.posts.length, locale)} />

          <Rise
            eager
            as="h1"
            className="mt-10 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {t.title}
          </Rise>

          <Rise eager delay={80}>
            <p
              className="mt-6 max-w-3xl text-[1.15rem] leading-[1.55] text-ink-soft"
              style={{ fontFamily: bodyFont }}
            >
              {t.intro}
            </p>
          </Rise>
        </header>

        <div className="max-w-3xl">
          <ArticleList
            locale={locale}
            heading={
              isAr
                ? "كل المقالات، من الأحدث إلى الأقدم"
                : "All articles, newest first"
            }
            posts={t.posts}
            more={{
              label: t.serviceLink,
              href: `/${locale}/services/${topic}`,
            }}
          />
        </div>

        <TopicLinks
          locale={locale}
          label={isAr ? "كل المواضيع" : "All topics"}
          topics={getTopics(locale)}
          current={topic}
          className="max-w-3xl border-t border-rule pt-10 pb-20 mt-12 md:pb-28"
        />
      </div>
    </>
  );
}

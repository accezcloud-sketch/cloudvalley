import { notFound } from "next/navigation";
import Image from "next/image";
import { coverAlt, COVER_WIDTH, COVER_HEIGHT } from "@/lib/cover-art";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getBlogListing } from "@/lib/blog-data";
import { getTopics } from "@/lib/blog-topics";
import { Rise } from "@/components/rise";
import { TopicLinks } from "@/components/topic-links";
import { SectionRule } from "@/components/section-rule";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/blog">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  return pageMetadata({
    locale,
    path: "/blog",
    title: dict.seoTitles.blog,
    description: dict.blog.lede,
  });
}

export default async function BlogPage(props: PageProps<"/[locale]/blog">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const posts = getBlogListing(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-20">
        <SectionRule label={dict.blog.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <Rise
            eager
            as="h1"
            className="md:col-span-8 text-[clamp(2.5rem,7vw,6rem)] leading-[1.02]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {dict.blog.title}
          </Rise>
          <Rise eager delay={100} className="md:col-span-4 flex items-end">
            <p
              className="text-[1.02rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.blog.lede}
            </p>
          </Rise>
        </div>
        <TopicLinks
          locale={locale}
          label={isAr ? "تصفّح حسب الموضوع" : "Browse by topic"}
          topics={getTopics(locale)}
          className="mt-12 md:mt-16"
        />
      </section>

      <section className="border-t border-rule">
        <ol className="mx-auto w-full max-w-[1440px] divide-y divide-rule px-6 md:px-10">
          {posts.map((post, i) => (
            <Rise
              as="li"
              key={post.slug}
              delay={i * 70}
              className="group relative"
            >
              <a
                href={`/${locale}/blog/${post.slug}`}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                {/* Cover thumbnail: the article's topic illustration. */}
                <Image
                  src={`/${locale}/blog/${post.slug}/cover`}
                  alt={coverAlt(post.serviceNum, locale)}
                  width={COVER_WIDTH}
                  height={COVER_HEIGHT}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className="h-auto w-full border border-rule md:col-span-4 lg:col-span-3"
                />

                <div className="md:col-span-8 lg:col-span-6">
                  {/* Topic label only: the service number (01-08) that used to
                      sit here read like an article number. */}
                  <div
                    className="text-[0.85rem] text-accent"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {post.kicker}
                  </div>

                  <h2
                    className="mt-3 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.12] transition-colors group-hover:text-accent"
                    style={{
                      fontFamily: serifDisplay,
                      letterSpacing: isAr ? "0" : "-0.015em",
                    }}
                  >
                    {post.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-4 md:col-span-8 md:col-start-5 lg:col-span-3 lg:col-start-auto">
                  <p
                    className="text-[0.95rem] leading-[1.55] text-ink-soft"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-sans-ar)"
                        : "var(--font-serif-latin)",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>{post.date}</span>
                    <span className="h-px w-6 bg-rule" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            </Rise>
          ))}
        </ol>
      </section>
    </>
  );
}

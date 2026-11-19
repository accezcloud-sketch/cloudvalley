import Link from "next/link";
import Image from "next/image";
import { coverAlt, COVER_PNG_WIDTH, COVER_PNG_HEIGHT } from "@/lib/cover-art";
import type { Locale } from "@/lib/i18n";
import type { BlogListing } from "@/lib/blog-data";

type Props = {
  locale: Locale;
  heading: string;
  posts: BlogListing[];
  /** Optional link under the list, e.g. to the blog index. */
  more?: { label: string; href: string };
};

/**
 * A short list of article links, used for "related articles" under an
 * article and for "from the blog" on the home and service pages. Plain
 * server-rendered links so crawlers and readers both see them.
 */
export function ArticleList({ locale, heading, posts, more }: Props) {
  if (posts.length === 0) return null;
  const isAr = locale === "ar";
  const serif = isAr ? "var(--font-serif-ar)" : "var(--font-serif-latin)";
  const body = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  return (
    <section className="border-t border-rule pt-10">
      <h2
        className="text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.15]"
        style={{ fontFamily: serif, letterSpacing: isAr ? "0" : "-0.015em" }}
      >
        {heading}
      </h2>
      <ul className="mt-6 divide-y divide-rule border-y border-rule">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${locale}/blog/${p.slug}`}
              className="group flex items-start gap-5 py-5"
            >
              <Image
                src={`/${locale}/blog/${p.slug}/cover`}
                alt={coverAlt(p.cover, locale)}
                width={COVER_PNG_WIDTH}
                height={COVER_PNG_HEIGHT}
                sizes="(min-width: 640px) 160px, 112px"
                className="h-auto w-28 shrink-0 border border-rule sm:w-40"
              />
              <span className="min-w-0 flex-1">
                <span
                  className="block text-[1.15rem] leading-[1.3] text-ink transition-colors group-hover:text-accent"
                  style={{ fontFamily: serif }}
                >
                  {p.title}
                </span>
                <span
                  className="mt-1 block text-[0.95rem] leading-[1.55] text-ink-soft"
                  style={{ fontFamily: body }}
                >
                  {p.excerpt}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {more && (
        <Link
          href={more.href}
          className="mt-6 inline-block border-b border-ink pb-0.5 text-sm link-sweep underline-offset-heavy"
        >
          {more.label}
        </Link>
      )}
    </section>
  );
}

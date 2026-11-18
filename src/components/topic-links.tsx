import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { topicPath, type BlogTopic } from "@/lib/blog-topics";

type Props = {
  locale: Locale;
  label: string;
  topics: BlogTopic[];
  /** Slug of the topic page being shown, marked as the current page. */
  current?: string;
  className?: string;
};

/**
 * A row of blog topic links (one per service that has articles), on the
 * blog index and on each topic page. The count is the number of articles.
 */
export function TopicLinks({ locale, label, topics, current, className = "" }: Props) {
  if (topics.length === 0) return null;
  const isAr = locale === "ar";
  const body = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";
  const count = (n: number) =>
    isAr ? n.toLocaleString("ar-SA-u-nu-arab") : String(n);

  return (
    <nav aria-label={label} className={className}>
      <div
        className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {topics.map((t) => {
          const active = t.slug === current;
          return (
            <li key={t.slug}>
              <Link
                href={`/${locale}${topicPath(t.slug)}`}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center gap-2 border px-3 py-2 text-[0.9rem] transition-colors ${
                  active
                    ? "border-ink text-ink"
                    : "border-rule text-ink-soft hover:border-ink hover:text-ink"
                }`}
                style={{ fontFamily: body }}
              >
                {t.label}
                <span
                  className="text-[0.75rem] text-ink-mute"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {count(t.posts.length)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

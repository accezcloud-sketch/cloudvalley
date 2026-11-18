import type { Locale } from "@/lib/i18n";
import { CopyLinkButton } from "./copy-link-button";

type Props = { locale: Locale; url: string; title: string };

/**
 * Share row under each article: WhatsApp, LinkedIn, X and copy link.
 * Plain share URLs, no third-party scripts or tracking.
 */
export function ShareLinks({ locale, url, title }: Props) {
  const isAr = locale === "ar";
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
    { label: "X", href: `https://x.com/intent/post?text=${t}&url=${u}` },
  ];
  const item =
    "inline-flex items-center border border-rule px-3 py-2 text-[0.85rem] text-ink-soft transition-colors hover:border-ink hover:text-ink";

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-rule pt-8">
      <span
        className="text-[0.85rem] text-ink-mute"
        style={{
          fontFamily: isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)",
        }}
      >
        {isAr ? "شارك المقال" : "Share this article"}
      </span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={item}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {l.label}
        </a>
      ))}
      <CopyLinkButton
        url={url}
        label={isAr ? "نسخ الرابط" : "Copy link"}
        doneLabel={isAr ? "تم النسخ" : "Copied"}
        className={item}
      />
    </div>
  );
}

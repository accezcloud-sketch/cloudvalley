"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// not-found receives no params, so the language is read from the address.
// Shown for missing articles and services and, through [...rest], for any
// address under /ar or /en that does not exist.
const copy = {
  ar: {
    label: "٤٠٤ — الصفحة غير موجودة",
    title: "هذه الصفحة غير موجودة.",
    body: "ربما تغيّر الرابط أو كُتب بشكلٍ خاطئ. هذه صفحات قد تفيدك:",
    links: [
      { label: "الرئيسية", href: "" },
      { label: "الخدمات", href: "/services" },
      { label: "المدوّنة", href: "/blog" },
    ],
  },
  en: {
    label: "404 — Page not found",
    title: "This page does not exist.",
    body: "The link may have changed or been mistyped. These pages may help:",
    links: [
      { label: "Home", href: "" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
    ],
  },
} as const;

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const locale = pathname.startsWith("/en") ? "en" : "ar";
  const t = copy[locale];
  const isAr = locale === "ar";

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] flex-col items-start justify-center gap-6 px-6 md:px-10">
      <div
        className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {t.label}
      </div>
      <h1
        className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.05]"
        style={{
          fontFamily: isAr ? "var(--font-serif-ar)" : "var(--font-serif-latin)",
          letterSpacing: isAr ? "0" : "-0.03em",
        }}
      >
        {t.title}
      </h1>
      <p
        className="max-w-xl text-[1.05rem] leading-[1.6] text-ink-soft"
        style={{ fontFamily: isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)" }}
      >
        {t.body}
      </p>
      <ul className="flex flex-wrap gap-6">
        {t.links.map((l) => (
          <li key={l.href}>
            <Link
              href={`/${locale}${l.href}`}
              className="border-b border-ink pb-0.5 text-base link-sweep underline-offset-heavy"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

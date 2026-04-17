"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { waLink } from "@/lib/i18n";

type Props = { locale: Locale; dict: Dict };

function stripLocale(pathname: string, locale: Locale): string {
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(prefix + "/")) return pathname.slice(prefix.length);
  return pathname;
}

export function SiteHeader({ locale, dict }: Props) {
  const pathname = usePathname();
  const currentPath = stripLocale(pathname, locale);
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const otherHref = `/${otherLocale}${currentPath === "/" ? "" : currentPath}`;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const nav = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.trust, href: `/${locale}/trust` },
  ];

  const isAr = locale === "ar";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-rule bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link
          href={`/${locale}`}
          className="group flex items-baseline gap-3 text-ink"
          aria-label={dict.brand.name}
        >
          <span
            className={`text-xl leading-none tracking-tight md:text-[1.35rem] ${
              isAr ? "font-normal" : "italic"
            }`}
            style={{ fontFamily: "var(--font-serif-latin)" }}
          >
            Cloud Valley
          </span>
          <span
            className="hidden text-[0.7rem] uppercase tracking-[0.18em] text-ink-mute md:inline"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            — est. 2024
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === `/${locale}`
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="link-sweep text-[0.95rem] text-ink-soft hover:text-ink"
                data-active={active}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href={otherHref}
            className="rounded-full border border-ink/70 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-paper"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-label={dict.nav.switchLang}
          >
            {dict.nav.switchLang}
          </Link>
          <a
            href={waLink(
              isAr
                ? "أهلًا، أود الاستفسار عن خدمات وادي السحاب."
                : "Hi, I'd like to learn more about Cloud Valley.",
            )}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[0.85rem] text-paper transition-colors hover:bg-accent md:inline-flex"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-whatsapp pulse-dot"
              aria-hidden
            />
            {dict.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative h-10 w-10 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span
              className={`absolute left-2 right-2 top-3.5 h-px bg-ink transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-2 right-2 bottom-3.5 h-px bg-ink transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-rule bg-paper md:hidden">
          <nav className="flex flex-col divide-y divide-rule">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-4 text-lg text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waLink(
                isAr
                  ? "أهلًا، أود الاستفسار عن خدمات وادي السحاب."
                  : "Hi, I'd like to learn more about Cloud Valley.",
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-ink px-6 py-4 text-paper"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
              {dict.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { THEME_KEY } from "@/lib/theme";

/**
 * Light/dark button in the header.
 *
 * Until the visitor clicks it, the site follows the device setting
 * (prefers-color-scheme). A click stores "light" or "dark" in localStorage
 * and sets data-theme on <html>; the theme script (run in the layout's <head>
 * before paint) applies the stored choice on every page load, so there is
 * no flash of the wrong theme (see src/lib/theme.ts). Which icon shows is decided by CSS
 * (globals.css), so the server HTML never has to guess the theme.
 */
function stored(): "light" | "dark" | null {
  try {
    const t = window.localStorage.getItem(THEME_KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  // In development React's Strict Mode remount clears the attribute the
  // head script set; put it back before paint. No-op in production.
  useLayoutEffect(() => {
    const t = stored();
    if (t) document.documentElement.setAttribute("data-theme", t);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage blocked: the choice lasts for this page only */
    }
  }

  const isAr = locale === "ar";
  const label = isAr
    ? "التبديل بين الوضع الفاتح والداكن"
    : "Switch between light and dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/70 text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      {/* Moon: shown on a light page (switch to dark). */}
      <svg
        className="theme-icon-moon"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
      </svg>
      {/* Sun: shown on a dark page (switch to light). */}
      <svg
        className="theme-icon-sun"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    </button>
  );
}

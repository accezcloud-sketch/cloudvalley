"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Google Analytics 4 behind a consent banner (owner decision D3).
 *
 * - Turned on only when NEXT_PUBLIC_GA_ID (e.g. "G-XXXXXXX") is set in the
 *   hosting environment. Without it, nothing renders and nothing loads.
 * - Strict consent: Google's script is not requested until the visitor
 *   clicks Accept. Declining stores the choice; nothing is sent. Ad storage
 *   is never granted (no ad tags on this site).
 * - Events: `whatsapp_click` on any wa.me link, and `generate_lead` on the
 *   thank-you page (see TrackLead). Events before consent are dropped.
 * - "Cookie settings" in the footer reopens the banner (window event
 *   "cv:cookie-settings"), so consent can be withdrawn at any time.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const KEY = "cv-consent";
type Choice = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __cvGaInit?: boolean;
  }
}

/**
 * Set up gtag's queue once, before any event: consent defaults (ads never
 * granted), then config. Whichever runs first (the banner or an event on the
 * thank-you page) does it; gtag.js replays the queue in order when it loads.
 */
function initGtag() {
  if (window.__cvGaInit) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  window.__cvGaInit = true;
}

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/** Send a GA4 event if analytics is on and the visitor accepted. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || readChoice() !== "granted") return;
  initGtag();
  window.gtag!("event", event, params);
}

export function Analytics({ locale }: { locale: Locale }) {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const c = readChoice();
    if (c === "granted") initGtag();
    // Browser storage can only be read after mount, so the saved choice is
    // applied here rather than during render.
    /* eslint-disable react-hooks/set-state-in-effect */
    setChoice(c);
    setOpen(c === null);
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
    const reopen = () => setOpen(true);
    window.addEventListener("cv:cookie-settings", reopen);
    // WhatsApp is the main call to action: count clicks on any wa.me link.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href*='wa.me/']");
      if (a)
        track("whatsapp_click", { link_url: (a as HTMLAnchorElement).href });
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("cv:cookie-settings", reopen);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const decide = useCallback((c: "granted" | "denied") => {
    try {
      window.localStorage.setItem(KEY, c);
    } catch {
      /* storage blocked: the choice lasts for this page only */
    }
    if (c === "granted") initGtag();
    if (c === "denied" && window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    setChoice(c);
    setOpen(false);
  }, []);

  if (!GA_ID || !ready) return null;
  const isAr = locale === "ar";

  return (
    <>
      {choice === "granted" && (
        <Script
          id="ga-lib"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          onLoad={initGtag}
        />
      )}
      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={isAr ? "ملفات تعريف الارتباط" : "Cookies"}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-rule bg-paper px-6 py-5 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] md:px-10"
          style={{
            fontFamily: isAr
              ? "var(--font-sans-ar)"
              : "var(--font-serif-latin)",
          }}
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-[0.95rem] leading-[1.55] text-ink-soft">
              {isAr
                ? "نستخدم ملفات تعريف الارتباط من Google Analytics لنفهم كيف يُستخدم الموقع. لا نجمع أي بيانات ما لم توافق."
                : "We use Google Analytics cookies to understand how the site is used. Nothing is collected unless you accept."}{" "}
              <Link
                href={`/${locale}/privacy`}
                className="underline underline-offset-4"
              >
                {isAr ? "سياسة الخصوصية" : "Privacy policy"}
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="border border-ink px-5 py-2.5 text-[0.9rem] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {isAr ? "رفض" : "Decline"}
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="border border-ink bg-ink px-5 py-2.5 text-[0.9rem] text-paper transition-colors hover:border-accent hover:bg-accent"
              >
                {isAr ? "موافق" : "Accept"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Footer link that reopens the banner. Renders nothing if analytics is off. */
export function CookieSettingsLink({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("cv:cookie-settings"))}
      className={`underline underline-offset-4 ${className}`}
    >
      {label}
    </button>
  );
}

/** Put on the thank-you page: counts a lead once per visit. */
export function TrackLead() {
  useEffect(() => {
    track("generate_lead", { form: "contact" });
  }, []);
  return null;
}

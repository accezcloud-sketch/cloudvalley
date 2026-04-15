"use client";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  placeholder: string;
  cta: string;
};

export function SubscribeForm({ locale, placeholder, cta }: Props) {
  const isAr = locale === "ar";
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-3 md:flex-row md:items-end"
    >
      {submitted ? (
        <p
          className="text-[0.95rem] text-accent"
          style={{
            fontFamily: isAr
              ? "var(--font-sans-ar)"
              : "var(--font-serif-latin)",
          }}
        >
          {isAr
            ? "شكرًا — وصل البريد. سنراسلك الأحد القادم."
            : "Thanks — we got it. You'll hear from us Sunday."}
        </p>
      ) : (
        <>
          <label className="flex-1">
            <span className="sr-only">{placeholder}</span>
            <input
              type="email"
              required
              placeholder={placeholder}
              className="w-full border-b border-ink bg-transparent py-3 text-base text-ink placeholder:text-ink-mute focus:outline-none"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
          >
            {cta}
            <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
          </button>
        </>
      )}
    </form>
  );
}

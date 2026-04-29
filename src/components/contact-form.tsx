"use client";

import Script from "next/script";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  labels: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    mobile: string;
    city: string;
    details: string;
    submit: string;
  };
};

export function ContactForm({ locale, labels }: Props) {
  const isAr = locale === "ar";
  const bodyFont = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";

  const inputClass =
    "w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none transition-colors";

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D41000002kA0p"
        method="POST"
        className="space-y-8"
      >
        {/* Hidden Salesforce Fields — DO NOT CHANGE oid or recordType */}
        <input type="hidden" name="oid" value="00D41000002kA0p" />
        <input
          type="hidden"
          name="retURL"
          value={`${typeof window !== "undefined" ? window.location.origin : ""}/${locale}/thank-you`}
        />
        <input
          type="hidden"
          name="recordType"
          id="recordType"
          value="0122M000001YhIDQA0"
        />
        <input type="hidden" name="lead_source" value="Wady Cloud Website" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label className="block">
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {labels.firstName}
            </span>
            <input
              id="first_name"
              name="first_name"
              type="text"
              maxLength={40}
              className={inputClass}
              style={{ fontFamily: bodyFont }}
            />
          </label>

          <label className="block">
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {labels.lastName}
            </span>
            <input
              id="last_name"
              name="last_name"
              type="text"
              maxLength={80}
              className={inputClass}
              style={{ fontFamily: bodyFont }}
            />
          </label>

          <label className="block">
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {labels.email}
            </span>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={80}
              required
              className={inputClass}
              style={{ fontFamily: bodyFont }}
            />
          </label>

          <label className="block">
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {labels.company}
            </span>
            <input
              id="company"
              name="company"
              type="text"
              maxLength={40}
              className={inputClass}
              style={{ fontFamily: bodyFont }}
            />
          </label>

          <label className="block">
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {labels.mobile}
            </span>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              maxLength={40}
              className={inputClass}
              style={{ fontFamily: bodyFont }}
            />
          </label>

          <label className="block">
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {labels.city}
            </span>
            <input
              id="city"
              name="city"
              type="text"
              maxLength={40}
              className={inputClass}
              style={{ fontFamily: bodyFont }}
            />
          </label>
        </div>

        <label className="block">
          <span
            className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {labels.details}
          </span>
          <textarea
            id="Description"
            name="description"
            maxLength={3000}
            rows={4}
            className={`${inputClass} resize-none`}
            style={{ fontFamily: bodyFont }}
          />
        </label>

        <button
          type="submit"
          name="submit"
          className="inline-flex items-center justify-between gap-4 border border-ink px-6 py-4 text-base transition-colors hover:bg-ink hover:text-paper"
        >
          <span>{labels.submit}</span>
          <span aria-hidden className={isAr ? "rotate-180" : ""}>
            →
          </span>
        </button>
      </form>
    </>
  );
}

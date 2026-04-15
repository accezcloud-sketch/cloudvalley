import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, waLink } from "@/lib/i18n";

type Props = { locale: Locale; dict: Dict };

export function SiteFooter({ locale, dict }: Props) {
  const isAr = locale === "ar";
  return (
    <footer className="mt-32 border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div
              className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {isAr ? "كلاود فالي — ٢٠٢٦" : "Cloud Valley — 2026"}
            </div>
            <p
              className="mt-6 max-w-md text-[2rem] leading-[1.15] text-ink md:text-[2.4rem]"
              style={{
                fontFamily: isAr
                  ? "var(--font-serif-ar)"
                  : "var(--font-serif-latin)",
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {isAr
                ? "العمل الجيّد لا يحتاج فريقًا ضخمًا — يحتاج نظامًا صامتًا."
                : "Good work needs a quiet system, not a large team."}
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {dict.footer.columns.map((col) => (
              <div key={col.heading}>
                <h4
                  className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {col.heading}
                </h4>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={`/${locale}${link.href === "/" ? "" : link.href}`}
                        className="link-sweep text-[0.95rem] text-ink-soft hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <h4
              className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {dict.footer.contact}
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="link-sweep text-[0.95rem] text-ink-soft hover:text-ink"
                >
                  {dict.footer.whatsapp} · {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="link-sweep text-[0.95rem] text-ink-soft hover:text-ink"
                >
                  {dict.footer.email} · {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-2 border-t border-rule pt-6 text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute md:flex-row md:items-center md:justify-between"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>{dict.footer.copyright}</span>
          <span>{dict.footer.colophonLeft}</span>
          <span>{dict.footer.colophonRight}</span>
        </div>
      </div>
    </footer>
  );
}

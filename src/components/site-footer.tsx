import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { ContactDetails } from "./contact-details";
import { CookieSettingsLink } from "./analytics";

type Props = { locale: Locale; dict: Dict };

export function SiteFooter({ locale, dict }: Props) {
  const isAr = locale === "ar";
  return (
    <footer className="mt-16 border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href={`/${locale}`}
              aria-label={dict.brand.name}
              className="group inline-flex w-fit items-center gap-2.5 text-ink transition-opacity hover:opacity-80"
            >
              <Image
                src="/wady-logo.png"
                alt={`${dict.brand.name} logo`}
                width={40}
                height={26}
                className="h-6 w-auto md:h-7"
              />
              <span
                className={`text-lg leading-none tracking-tight md:text-xl ${
                  isAr ? "font-normal" : "italic"
                }`}
                style={{ fontFamily: "var(--font-serif-latin)" }}
              >
                Cloud Valley
              </span>
            </Link>
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
                ? "العمل الجيّد لا يحتاج فريقًا ضخمًا، بل يحتاج نظامًا صامتًا."
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
            <ContactDetails locale={locale} dict={dict} className="mt-4" />
          </div>
        </div>

        <div
          className="mt-16 border-t border-rule pt-6 text-center text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>{dict.footer.copyright}</span>
          <span className="mx-2">·</span>
          <span>{locale === "ar" ? "س.ت: ١٠١٠٦٣٧٨٤٥" : "CR: 1010637845"}</span>
          <CookieSettingsLink
            label={
              locale === "ar" ? "إعدادات ملفات الارتباط" : "Cookie settings"
            }
            className="ms-2"
          />
        </div>
      </div>
    </footer>
  );
}

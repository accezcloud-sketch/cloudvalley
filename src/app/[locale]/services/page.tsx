import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export async function generateMetadata(props: PageProps<"/[locale]/services">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).services.title };
}

export default async function ServicesPage(
  props: PageProps<"/[locale]/services">,
) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      {/* page header */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-20">
        <SectionRule label={dict.services.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <Rise
            as="h1"
            className="md:col-span-8 text-[clamp(2.5rem,7vw,6rem)] leading-[1.02]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {dict.services.title}
          </Rise>
          <Rise
            delay={100}
            className="md:col-span-4 flex items-end"
          >
            <p
              className="text-[1.02rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.services.lede}
            </p>
          </Rise>
        </div>
      </section>

      <div className="border-t border-rule">
        {dict.services.list.map((s, i) => (
          <article
            key={s.num}
            id={s.num.replace(/[^\d]/g, "") || String(i + 1).padStart(2, "0")}
            className={`border-b border-rule ${
              i % 2 === 1 ? "bg-paper-2/40" : "bg-transparent"
            }`}
          >
            <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
              <Rise className="grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div
                    className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.num} — {isAr ? "الخدمة" : "Service"}
                  </div>
                  <h2
                    className="mt-6 text-[clamp(2.2rem,5vw,4rem)] leading-[1.04]"
                    style={{
                      fontFamily: serifDisplay,
                      letterSpacing: isAr ? "0" : "-0.02em",
                    }}
                  >
                    {s.name}
                  </h2>
                </div>

                <div className="md:col-span-5">
                  <p
                    className="text-[1.15rem] leading-[1.55] text-ink"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-serif-ar)"
                        : "var(--font-serif-latin)",
                      fontStyle: !isAr ? "italic" : "normal",
                    }}
                  >
                    {s.summary}
                  </p>
                  <ul
                    className="mt-8 space-y-4 text-[1rem] leading-[1.55] text-ink-soft"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-sans-ar)"
                        : "var(--font-serif-latin)",
                    }}
                  >
                    {s.bullets.map((b, j) => (
                      <li key={b} className="flex gap-4">
                        <span
                          className="mt-3 h-px w-6 shrink-0 bg-ink-mute"
                          aria-hidden
                        />
                        <span className="flex-1">
                          <span
                            className="mr-2 text-ink-mute"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                            }}
                          >
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between gap-8">
                  <div className="border-l border-ink/80 pl-4 md:border-l-0 md:border-r md:pl-0 md:pr-4 md:text-right">
                    <div
                      className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {isAr ? "النتيجة" : "Outcome"}
                    </div>
                    <p
                      className="mt-3 text-[1.15rem] leading-[1.35] text-accent"
                      style={{
                        fontFamily: serifDisplay,
                        letterSpacing: isAr ? "0" : "-0.01em",
                      }}
                    >
                      {s.outcome}
                    </p>
                  </div>
                  <a
                    href={waLink(
                      isAr
                        ? `أود الاستفسار عن خدمة «${s.name}».`
                        : `I'd like to ask about your "${s.name}" service.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-2 border border-ink px-4 py-3 text-sm transition-colors hover:bg-ink hover:text-paper"
                  >
                    <span>
                      {isAr ? "تحدّث معنا" : "Discuss this service"}
                    </span>
                    <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
                  </a>
                </div>
              </Rise>
            </div>
          </article>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <h3
            className="md:col-span-8 text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {isAr
              ? "جرّب الخطة المجانية قبل الالتزام بشيء."
              : "Try the free plan before committing to anything."}
          </h3>
          <Link
            href={`/${locale}#pricing`}
            className="md:col-span-4 inline-flex items-center justify-between gap-2 border border-ink px-5 py-4 text-base hover:bg-ink hover:text-paper transition-colors"
          >
            <span>{isAr ? "شاهد الاشتراكات" : "See the plans"}</span>
            <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

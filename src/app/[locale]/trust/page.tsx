import { notFound } from "next/navigation";
import { isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export async function generateMetadata(props: PageProps<"/[locale]/trust">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).trust.title };
}

export default async function TrustPage(props: PageProps<"/[locale]/trust">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
        <SectionRule label={dict.trust.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            as="h1"
            className="md:col-span-9 text-[clamp(2.5rem,7vw,6rem)] leading-[0.98]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.028em",
            }}
          >
            {dict.trust.title}
          </Rise>
          <Rise delay={100} className="md:col-span-3 flex items-end">
            <p
              className="text-[1.05rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.trust.lede}
            </p>
          </Rise>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-rule bg-paper-2/40">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-2">
            {dict.trust.pillars.map((p, i) => (
              <Rise
                key={p.num}
                delay={i * 90}
                className="bg-paper p-8 md:p-12"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-[2.2rem] leading-none text-accent"
                    style={{ fontFamily: serifDisplay }}
                  >
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.15]"
                      style={{
                        fontFamily: serifDisplay,
                        letterSpacing: isAr ? "0" : "-0.015em",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-4 text-[1rem] leading-[1.6] text-ink-soft"
                      style={{
                        fontFamily: isAr
                          ? "var(--font-sans-ar)"
                          : "var(--font-serif-latin)",
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-accent text-paper">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <Rise
              as="h2"
              className="md:col-span-8 text-[clamp(2.5rem,7vw,6rem)] leading-[0.98]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.028em",
              }}
            >
              {dict.trust.guarantee.title}
            </Rise>
            <Rise
              delay={100}
              className="md:col-span-4 flex flex-col gap-4"
            >
              <p
                className="text-[1.1rem] leading-[1.6] text-paper"
                style={{
                  fontFamily: isAr
                    ? "var(--font-serif-ar)"
                    : "var(--font-serif-latin)",
                  fontStyle: !isAr ? "italic" : "normal",
                }}
              >
                {dict.trust.guarantee.body}
              </p>
              <div
                className="text-[0.72rem] uppercase tracking-[0.2em] text-paper/80"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {isAr ? "موقّع ومضمون" : "Signed & guaranteed"}
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <SectionRule
          label={isAr ? "٠٣ — شهادات" : "03 — Testimonials"}
        />
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {dict.trust.testimonials.map((t, i) => (
            <Rise
              as="figure"
              key={i}
              delay={i * 120}
              className="flex flex-col gap-6"
            >
              <span
                className="text-[4rem] leading-none text-accent"
                aria-hidden
                style={{ fontFamily: serifDisplay }}
              >
                “
              </span>
              <blockquote
                className="text-[1.2rem] leading-[1.45] text-ink"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.01em",
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto">
                <div
                  className="text-sm text-ink"
                  style={{
                    fontFamily: isAr
                      ? "var(--font-sans-ar)"
                      : "var(--font-serif-latin)",
                  }}
                >
                  {t.author}
                </div>
                <div
                  className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {t.role}
                </div>
              </figcaption>
            </Rise>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <h3
            className="md:col-span-8 text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {isAr
              ? "ابدأ بمحادثة قصيرة. لا التزام."
              : "Start with a short conversation. No obligation."}
          </h3>
          <a
            href={waLink(
              isAr
                ? "أهلًا، قرأتُ صفحة الثقة وأود البدء."
                : "Hi — I read your trust page and want to start.",
            )}
            target="_blank"
            rel="noreferrer"
            className="md:col-span-4 inline-flex items-center justify-between gap-4 self-end border border-ink px-5 py-4 text-base transition-colors hover:bg-ink hover:text-paper"
          >
            <span>{isAr ? "تواصل على واتساب" : "Start on WhatsApp"}</span>
            <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

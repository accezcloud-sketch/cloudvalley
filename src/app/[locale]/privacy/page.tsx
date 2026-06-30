import { notFound } from "next/navigation";
import { isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export async function generateMetadata(props: PageProps<"/[locale]/privacy">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).privacy.title };
}

export default async function PrivacyPage(props: PageProps<"/[locale]/privacy">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";
  const bodyFont = isAr
    ? "var(--font-sans-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-24">
        <SectionRule label={dict.privacy.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            as="h1"
            className="md:col-span-8 text-[clamp(2.5rem,7vw,6rem)] leading-[0.98]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.028em",
            }}
          >
            {dict.privacy.title}
          </Rise>
          <Rise delay={100} className="md:col-span-4 flex flex-col justify-end gap-4">
            <p
              className="text-[1.05rem] leading-[1.6] text-ink-soft"
              style={{ fontFamily: bodyFont }}
            >
              {dict.privacy.lede}
            </p>
            <div
              className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {dict.privacy.updated}
            </div>
          </Rise>
        </div>
      </section>

      {/* Sections */}
      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          {dict.privacy.sections.map((sec, i) => (
            <Rise
              key={sec.num}
              delay={i === 0 ? 0 : 60}
              className="grid grid-cols-1 gap-6 border-b border-rule py-12 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <div className="md:col-span-4 flex items-start gap-5">
                <span
                  className="text-[1.8rem] leading-none text-accent"
                  style={{ fontFamily: serifDisplay }}
                >
                  {sec.num}
                </span>
                <h2
                  className="text-[clamp(1.4rem,3vw,2rem)] leading-[1.12]"
                  style={{
                    fontFamily: serifDisplay,
                    letterSpacing: isAr ? "0" : "-0.015em",
                  }}
                >
                  {sec.heading}
                </h2>
              </div>
              <div className="md:col-span-8 flex flex-col gap-4">
                {sec.body.map((para, j) => (
                  <p
                    key={j}
                    className="max-w-2xl text-[1.05rem] leading-[1.7] text-ink-soft"
                    style={{ fontFamily: bodyFont }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Rise>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-rule">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <h3
            className="md:col-span-8 text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {isAr
              ? "سؤالٌ عن خصوصيتك؟ نحن هنا."
              : "A question about your privacy? We're here."}
          </h3>
          <a
            href={waLink(
              isAr
                ? "أهلًا، لديّ سؤال حول سياسة الخصوصية."
                : "Hi — I have a question about your privacy policy.",
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

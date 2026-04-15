import { notFound } from "next/navigation";
import { isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export async function generateMetadata(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).about.title };
}

export default async function AboutPage(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-24">
        <SectionRule label={dict.about.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            as="h1"
            className="md:col-span-9 text-[clamp(2.3rem,6vw,5.5rem)] leading-[1.02]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {dict.about.title}
          </Rise>
          <Rise delay={100} className="md:col-span-3 md:pt-6">
            <p
              className="text-[1.05rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.about.lede}
            </p>
          </Rise>
        </div>
      </section>

      {/* Story sections — asymmetric editorial */}
      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          {dict.about.sections.map((sec, i) => {
            const positions = [
              "md:col-start-2 md:col-end-11",
              "md:col-start-1 md:col-end-9",
              "md:col-start-4 md:col-end-13",
              "md:col-start-2 md:col-end-10",
            ];
            return (
              <Rise
                key={sec.num}
                className="grid grid-cols-1 border-b border-rule py-16 md:grid-cols-12 md:py-24"
              >
                <div className={`col-span-1 ${positions[i] ?? positions[0]}`}>
                  <div className="flex items-baseline gap-6">
                    <span
                      className="text-[0.8rem] tracking-[0.2em] text-ink-mute"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {sec.num}
                    </span>
                    <h2
                      className="text-[clamp(1.8rem,4.2vw,3.3rem)] leading-[1.06] text-accent"
                      style={{
                        fontFamily: serifDisplay,
                        letterSpacing: isAr ? "0" : "-0.015em",
                      }}
                    >
                      {sec.heading}
                    </h2>
                  </div>
                  <p
                    className="mt-6 max-w-2xl text-[1.1rem] leading-[1.65] text-ink"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-serif-ar)"
                        : "var(--font-serif-latin)",
                    }}
                  >
                    {sec.body}
                  </p>
                </div>
              </Rise>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink text-paper">
        <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <div
              className="text-[0.72rem] uppercase tracking-[0.2em] text-paper/60"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {isAr ? "الفريق — ٠٥" : "The team — 05"}
            </div>
            <h3
              className="mt-6 text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {dict.about.team.title}
            </h3>
          </div>
          <p
            className="md:col-span-7 md:pt-3 max-w-xl text-[1.15rem] leading-[1.6] text-paper/85"
            style={{
              fontFamily: isAr
                ? "var(--font-serif-ar)"
                : "var(--font-serif-latin)",
              fontStyle: !isAr ? "italic" : "normal",
            }}
          >
            {dict.about.team.body}
          </p>
        </div>
      </section>

      {/* closing signature */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p
              className="text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.2]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.01em",
              }}
            >
              {isAr
                ? "ما زلنا نقبل عميلاً واحدًا أسبوعيًا. لو وجدتَ نفسك هنا، فالغالب أنك التالي."
                : "We still take one new client a week. If you've read this far, odds are you're next."}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end gap-4">
            <a
              href={waLink(
                isAr
                  ? "أود التعرّف على الفريق."
                  : "I'd like to get in touch with the team.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-4 border border-ink px-5 py-4 text-base transition-colors hover:bg-ink hover:text-paper"
            >
              <span>{isAr ? "تحدّث معنا" : "Get in touch"}</span>
              <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

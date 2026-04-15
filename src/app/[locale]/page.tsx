import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, waLink, CONTACT_EMAIL } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";

  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-12 pb-20 md:px-10 md:pt-20 md:pb-28">
          <div
            className="flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>{dict.home.eyebrow}</span>
            <span className="h-px flex-1 bg-rule" />
            <span className="hidden md:inline">Cloud Valley · كلاود فالي</span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12">
            <h1
              className="display-serif col-span-1 text-[clamp(3rem,11vw,10rem)] md:col-span-9"
              style={{ fontFamily: serifDisplay }}
            >
              <Rise as="span" className="block">
                {dict.home.displayA}
              </Rise>
              <Rise as="span" delay={120} className="block italic text-accent">
                {dict.home.displayB}
              </Rise>
              <Rise as="span" delay={240} className="block">
                {dict.home.displayC}
              </Rise>
            </h1>

            <Rise
              as="div"
              delay={400}
              className="col-span-1 flex flex-col justify-end gap-8 md:col-span-3"
            >
              <p
                className="text-[1.05rem] leading-[1.55] text-ink-soft md:text-[1.1rem]"
                style={{
                  fontFamily: isAr
                    ? "var(--font-sans-ar)"
                    : "var(--font-serif-latin)",
                }}
              >
                {dict.home.lede}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-accent"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-whatsapp pulse-dot"
                  />
                  {dict.home.primaryCta}
                </a>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm text-ink link-sweep underline-offset-heavy"
                >
                  {dict.home.secondaryCta}
                  <span aria-hidden className={isAr ? "rotate-180" : ""}>
                    →
                  </span>
                </Link>
              </div>
            </Rise>
          </div>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden border-t border-rule bg-ink text-paper">
          <div className="flex whitespace-nowrap py-5">
            <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
              {[...dict.home.marquee, ...dict.home.marquee].map((w, i) => (
                <span
                  key={i}
                  className="text-[1.1rem] tracking-tight"
                  style={{
                    fontFamily: isAr
                      ? "var(--font-serif-ar)"
                      : "var(--font-serif-latin)",
                    fontStyle: i % 2 === 1 && !isAr ? "italic" : "normal",
                  }}
                >
                  {w}
                  <span
                    className="mx-6 inline-block align-middle text-accent"
                    aria-hidden
                  >
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionRule label={dict.home.manifestoNum} />
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            as="h2"
            className="col-span-1 text-[clamp(2rem,5vw,4rem)] leading-[1.05] md:col-span-7"
            style={{ fontFamily: serifDisplay, letterSpacing: isAr ? "0" : "-0.02em" }}
          >
            <span
              className="mr-2 align-top text-accent"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.4em" }}
              aria-hidden
            >
              ¶
            </span>
            {dict.home.manifestoTitle}
          </Rise>
          <Rise
            as="div"
            delay={120}
            className="col-span-1 space-y-5 text-[1rem] leading-[1.7] text-ink-soft md:col-span-5 md:pt-3 md:text-[1.05rem]"
            style={{
              fontFamily: isAr
                ? "var(--font-sans-ar)"
                : "var(--font-serif-latin)",
            }}
          >
            {dict.home.manifestoBody.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:text-5xl first-letter:float-none first-letter:mr-2 first-letter:font-bold first-letter:text-accent" : ""}>
                {p}
              </p>
            ))}
          </Rise>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-rule bg-paper-2/40">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <SectionRule label={dict.home.statsTitle} />
          <div className="mt-10 grid grid-cols-1 divide-y divide-rule md:grid-cols-3 md:divide-y-0 md:divide-x">
            {dict.home.stats.map((s, i) => (
              <Rise
                key={i}
                delay={i * 120}
                className="px-0 py-10 md:px-10 md:py-4"
              >
                <div
                  className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-mute"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="mt-4 text-[clamp(3.5rem,9vw,7rem)] leading-none tracking-tight text-ink"
                  style={{ fontFamily: serifDisplay }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-4 text-lg text-ink"
                  style={{ fontFamily: serifDisplay }}
                >
                  {s.label}
                </div>
                <p
                  className="mt-3 max-w-xs text-[0.95rem] leading-[1.55] text-ink-mute"
                  style={{
                    fontFamily: isAr
                      ? "var(--font-sans-ar)"
                      : "var(--font-serif-latin)",
                  }}
                >
                  {s.caption}
                </p>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
        <SectionRule label={dict.home.servicesNum} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2
              className="text-[clamp(2rem,5vw,3.8rem)] leading-[1.05]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {dict.home.servicesTitle}
            </h2>
            <p
              className="mt-6 max-w-md text-[1.02rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.home.servicesLede}
            </p>
            <Link
              href={`/${locale}/services`}
              className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm link-sweep underline-offset-heavy"
            >
              {isAr ? "اقرأ التفاصيل" : "Read the details"}
              <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
            </Link>
          </div>
          <ul className="md:col-span-7 divide-y divide-rule border-y border-rule">
            {dict.services.list.map((s, i) => (
              <Rise
                as="li"
                key={s.num}
                delay={i * 70}
                className="group flex items-start gap-6 py-6"
              >
                <span
                  className="w-10 flex-shrink-0 pt-1 text-[0.75rem] tracking-[0.18em] text-ink-mute"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3
                    className="text-xl leading-snug text-ink md:text-[1.6rem]"
                    style={{ fontFamily: serifDisplay }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="mt-1 text-[0.95rem] text-ink-mute"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-sans-ar)"
                        : "var(--font-serif-latin)",
                    }}
                  >
                    {s.summary}
                  </p>
                </div>
                <span
                  aria-hidden
                  className={`pt-2 text-ink-mute transition-transform duration-300 group-hover:text-accent ${
                    isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  }`}
                >
                  →
                </span>
              </Rise>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-rule bg-ink text-paper">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-36">
          <div
            className="flex items-center gap-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-paper/60"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>{dict.home.pricingNum}</span>
            <span className="h-px flex-1 bg-paper/20" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2
                className="text-[clamp(2rem,5vw,4.2rem)] leading-[1.02]"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.02em",
                }}
              >
                {dict.home.pricingTitle}
              </h2>
            </div>
            <p
              className="md:col-span-6 md:pt-3 max-w-md text-[1.02rem] leading-[1.6] text-paper/75"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.home.pricingLede}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-paper/20 bg-paper/20 md:grid-cols-3">
            {[
              dict.home.pricing.free,
              dict.home.pricing.paid,
              dict.home.pricing.custom,
            ].map((p, i) => {
              const featured = i === 1;
              return (
                <Rise
                  key={p.name}
                  delay={i * 100}
                  className={`relative flex flex-col p-8 md:p-10 ${
                    featured ? "bg-accent text-paper" : "bg-ink"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[0.7rem] uppercase tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {p.badge}
                    </span>
                    <span
                      className="text-[0.7rem] tracking-[0.18em]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {String(i + 1).padStart(2, "0")} / 03
                    </span>
                  </div>
                  <h3
                    className="mt-10 text-4xl md:text-5xl"
                    style={{
                      fontFamily: serifDisplay,
                      letterSpacing: isAr ? "0" : "-0.02em",
                    }}
                  >
                    {p.name}
                  </h3>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className="text-5xl md:text-6xl leading-none"
                      style={{ fontFamily: serifDisplay }}
                    >
                      {p.price}
                    </span>
                    <span
                      className="text-xs tracking-[0.18em] opacity-75"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {p.per}
                    </span>
                  </div>
                  <ul
                    className="mt-10 space-y-3 text-[0.95rem] leading-[1.55]"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-sans-ar)"
                        : "var(--font-serif-latin)",
                    }}
                  >
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-current opacity-60" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={i === 2 ? waLink() : waLink(p.cta)}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-auto pt-10 inline-flex items-center gap-2 text-sm link-sweep underline-offset-heavy ${
                      featured ? "text-paper" : "text-paper"
                    }`}
                  >
                    {p.cta}
                    <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
                  </a>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <SectionRule label={dict.home.ctaNum} />
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <Rise
            as="h2"
            className="md:col-span-8 text-[clamp(2.5rem,8vw,7rem)] leading-[0.95]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {dict.home.ctaTitle}
          </Rise>
          <Rise
            delay={120}
            className="md:col-span-4 flex flex-col justify-end gap-8"
          >
            <p
              className="text-[1.02rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.home.ctaBody}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={waLink(
                  isAr
                    ? "أهلاً كلاود فالي، أود البدء."
                    : "Hi Cloud Valley, I'd like to start.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-4 border border-ink px-5 py-4 text-base transition-colors hover:bg-ink hover:text-paper"
              >
                <span>{dict.home.ctaWhatsApp}</span>
                <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-between gap-4 border border-ink/20 px-5 py-4 text-base text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <span>{dict.home.ctaEmail}</span>
                <span aria-hidden className={isAr ? "rotate-180" : ""}>→</span>
              </a>
            </div>
          </Rise>
        </div>
      </section>
    </>
  );
}

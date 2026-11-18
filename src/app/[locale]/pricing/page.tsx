import { notFound } from "next/navigation";
import { isLocale, waLink } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { pageMetadata } from "@/lib/seo";

// Packages and prices, moved off the home page into their own page in the
// menu (owner decision D13). Same content and design as before.
export async function generateMetadata(props: PageProps<"/[locale]/pricing">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  return pageMetadata({
    locale,
    path: "/pricing",
    title: dict.nav.pricingTitle,
    description: dict.home.pricingLede,
  });
}

export default async function PricingPage(
  props: PageProps<"/[locale]/pricing">,
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
      <section className="keep-dark border-t border-rule bg-ink text-paper">
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
              <h1
                className="text-[clamp(2rem,5vw,4.2rem)] leading-[1.02]"
                style={{
                  fontFamily: serifDisplay,
                  letterSpacing: isAr ? "0" : "-0.02em",
                }}
              >
                {dict.home.pricingTitle}
              </h1>
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

          <div className="mt-16 grid grid-cols-1 gap-px border border-paper/20 bg-paper/20 lg:grid-cols-3">
            {[
              dict.home.pricing.basic,
              dict.home.pricing.professional,
              dict.home.pricing.custom,
            ].map((p, i) => {
              const featured = i === 1;
              return (
                <Rise
                  key={p.name}
                  delay={i * 100}
                  className={`relative flex flex-col p-8 xl:p-10 ${
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
                    className="mt-10 text-4xl xl:text-5xl"
                    style={{
                      fontFamily: serifDisplay,
                      letterSpacing: isAr ? "0" : "-0.02em",
                    }}
                  >
                    {p.name}
                  </h3>
                  <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span
                      className="text-5xl xl:text-6xl leading-none"
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
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 bg-current opacity-60"
                        />
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
                    <span
                      aria-hidden
                      className={`inline-block ${isAr ? "rotate-180" : ""}`}
                    >
                      →
                    </span>
                  </a>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { SubscribeForm } from "@/components/subscribe-form";

export async function generateMetadata(props: PageProps<"/[locale]/blog">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).blog.title };
}

export default async function BlogPage(props: PageProps<"/[locale]/blog">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-20">
        <SectionRule label={dict.blog.eyebrow} />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <Rise
            as="h1"
            className="md:col-span-8 text-[clamp(2.5rem,7vw,6rem)] leading-[1.02]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {dict.blog.title}
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
              {dict.blog.lede}
            </p>
          </Rise>
        </div>
      </section>

      <section className="border-t border-rule">
        <ol className="mx-auto w-full max-w-[1440px] divide-y divide-rule px-6 md:px-10">
          {dict.blog.posts.map((post, i) => (
            <Rise
              as="li"
              key={post.num}
              delay={i * 70}
              className="group relative"
            >
              <a
                href="#"
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-2">
                  <div
                    className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-mute"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {post.num}
                  </div>
                  <div
                    className="mt-3 text-[0.85rem] text-accent"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {post.kicker}
                  </div>
                </div>

                <h2
                  className="md:col-span-7 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.12] transition-colors group-hover:text-accent"
                  style={{
                    fontFamily: serifDisplay,
                    letterSpacing: isAr ? "0" : "-0.015em",
                  }}
                >
                  {post.title}
                </h2>

                <div className="md:col-span-3 flex flex-col gap-4">
                  <p
                    className="text-[0.95rem] leading-[1.55] text-ink-soft"
                    style={{
                      fontFamily: isAr
                        ? "var(--font-sans-ar)"
                        : "var(--font-serif-latin)",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-ink-mute"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>{post.date}</span>
                    <span className="h-px w-6 bg-rule" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            </Rise>
          ))}
        </ol>
      </section>

      {/* Subscribe */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-10 border border-ink bg-paper-2/40 p-8 md:grid-cols-12 md:gap-16 md:p-14">
          <div className="md:col-span-6">
            <h3
              className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.05]"
              style={{
                fontFamily: serifDisplay,
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {dict.blog.subscribe.title}
            </h3>
            <p
              className="mt-5 max-w-md text-[1rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.blog.subscribe.body}
            </p>
          </div>
          <div className="md:col-span-6 md:self-end">
            <SubscribeForm
              locale={locale}
              placeholder={dict.blog.subscribe.placeholder}
              cta={dict.blog.subscribe.cta}
            />
          </div>
        </div>
      </section>
    </>
  );
}

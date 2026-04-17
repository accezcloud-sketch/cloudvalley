import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Rise } from "@/components/rise";
import { SectionRule } from "@/components/section-rule";
import { ContactForm } from "@/components/contact-form";

export async function generateMetadata(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).contact.title };
}

export default async function ContactPage(
  props: PageProps<"/[locale]/contact">,
) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);
  const isAr = locale === "ar";
  const serifDisplay = isAr
    ? "var(--font-serif-ar)"
    : "var(--font-serif-latin)";

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
      <SectionRule label={dict.contact.eyebrow} />
      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Rise
            as="h1"
            className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.02]"
            style={{
              fontFamily: serifDisplay,
              letterSpacing: isAr ? "0" : "-0.025em",
            }}
          >
            {dict.contact.title}
          </Rise>
          <Rise delay={100}>
            <p
              className="mt-6 text-[1.02rem] leading-[1.6] text-ink-soft"
              style={{
                fontFamily: isAr
                  ? "var(--font-sans-ar)"
                  : "var(--font-serif-latin)",
              }}
            >
              {dict.contact.lede}
            </p>
          </Rise>
        </div>

        <Rise delay={150} className="md:col-span-7">
          <ContactForm locale={locale} labels={dict.contact.form} />
        </Rise>
      </div>
    </section>
  );
}

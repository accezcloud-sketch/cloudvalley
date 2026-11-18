import type { Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, waLink } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";

type Props = { locale: Locale; dict: Dict; className?: string };

/**
 * WhatsApp, email and working days, shown in the footer and on the contact
 * page (owner decision D4). The number is shown left-to-right on Arabic
 * pages so it reads correctly.
 */
export function ContactDetails({ locale, dict, className = "" }: Props) {
  const isAr = locale === "ar";
  const font = isAr ? "var(--font-sans-ar)" : "var(--font-serif-latin)";
  const link = "link-sweep text-[0.95rem] text-ink-soft hover:text-ink";
  return (
    <ul className={`space-y-2 ${className}`} style={{ fontFamily: font }}>
      <li>
        <a href={waLink()} target="_blank" rel="noreferrer" className={link}>
          {dict.footer.whatsapp}:{" "}
          <span dir="ltr" className="whitespace-nowrap">
            {WHATSAPP_DISPLAY}
          </span>
        </a>
      </li>
      <li>
        <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
          {dict.footer.email}: <span dir="ltr">{CONTACT_EMAIL}</span>
        </a>
      </li>
      <li className="text-[0.95rem] text-ink-mute">{dict.footer.hours}</li>
    </ul>
  );
}

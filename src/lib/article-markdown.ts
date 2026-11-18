// Inline markdown for article text: links only, written the standard way as
// [anchor text](href). Kept apart from blog-data.ts (which reads files) so the
// page and the reading-time count use exactly the same rules.
//
// Allowed addresses:
//   /ar/... or /en/...   a page on this site, shown with next/link
//   https://...          another site, opened in a new tab
// Anything else is shown as its anchor text only, never as raw markdown.
// tests/content.test.mjs checks that every link in an article is well formed
// and points to a page that exists.

export type InlinePart =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string; external: boolean };

/** One [text](href): no brackets inside the text, no spaces in the href. */
export const LINK_RE = /\[([^[\]\n]+)\]\(([^()\s]+)\)/g;

/** A block image on its own line: ![alt text](/path/in/public.png) */
export const IMAGE_LINE_RE = /^!\[([^[\]\n]+)\]\((\/[^()\s]+)\)$/;

const INTERNAL_HREF = /^\/(ar|en)(\/[a-z0-9-]+)*$/;
const EXTERNAL_HREF = /^https:\/\/[^\s/]+\.[^\s]+$/;

export function linkKind(href: string): "internal" | "external" | null {
  if (INTERNAL_HREF.test(href)) return "internal";
  if (EXTERNAL_HREF.test(href)) return "external";
  return null;
}

/** Splits text into plain runs and links. */
export function parseInline(text: string): InlinePart[] {
  const parts: InlinePart[] = [];
  let last = 0;
  const push = (t: string) => {
    if (!t) return;
    const prev = parts[parts.length - 1];
    if (prev?.type === "text") prev.text += t;
    else parts.push({ type: "text", text: t });
  };
  for (const m of text.matchAll(LINK_RE)) {
    const [whole, anchor, href] = m;
    const start = m.index ?? 0;
    push(text.slice(last, start));
    const kind = linkKind(href);
    if (kind) {
      parts.push({
        type: "link",
        text: anchor.trim(),
        href,
        external: kind === "external",
      });
    } else {
      push(anchor);
    }
    last = start + whole.length;
  }
  push(text.slice(last));
  return parts;
}

/**
 * The words a reader sees: links become their anchor text, so reading time,
 * excerpts, the RSS feed, structured data and the "On this page" list never
 * show brackets or addresses.
 */
export function plainText(text: string): string {
  return text.replace(LINK_RE, (_m, anchor: string) => anchor.trim());
}

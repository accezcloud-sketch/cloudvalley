# SEO & GEO — how this site is set up

Notes for anyone changing metadata, routing or blog content. Written 10 Aug 2026.

## The rules this site follows

- **Google does not read `<html lang>`** to decide a page's language — it reads the visible content. `hreflang` is the language signal, and it only works if it is **reciprocal and self-referencing** with an `x-default`. Miss any of that and Google discards the whole cluster.
- **AI crawlers do not execute JavaScript** (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot). Anything that only appears after hydration is invisible to them. Everything here is statically prerendered, which is why it works — keep it that way.
- **Never set `alternates.canonical` on the root layout.** Next.js inherits it to every child page, which tells Google those pages are duplicates of one URL.
- **A `'use client'` page cannot export `metadata`.** It silently inherits the parent's title, description and canonical. Split into a server `page.tsx` that renders the client component.
- **JSON-LD must be a raw server-rendered `<script>`.** `next/script` injects client-side and never reaches the HTML — a silent failure that looks fine in the browser.
- Sitemap `changefreq` and `priority` are ignored by Google. `lastmod` is used, so only set it where a real date exists — a build-time date on every URL trains Google to ignore the whole file.
- `FAQPage` rich results were retired 7 May 2026 and `HowTo` in 2023. Don't add either.

## How it's wired

- `src/lib/seo.ts` — builds the canonical plus `ar` / `en` / `x-default` alternates for any path. **Use it on every new page**; a page can't ship correct metadata without it.
- `src/components/json-ld.tsx` — the only correct way to emit structured data here.
- `src/app/robots.ts` — splits AI crawlers deliberately: **retrieval** bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Applebot) are allowed because a citation can send a real visitor; **training-only** bots (GPTBot, CCBot, Google-Extended, Applebot-Extended, Bytespider) are blocked because they never send traffic back. Note each crawler obeys only its own most-specific group — a named bot inherits nothing from `*`.
- Organization + WebSite schema live on the home page only. Other pages reference them by `@id` instead of repeating the node.

## The renderer constraint — read this before touching content

`src/lib/blog-data.ts` parses markdown into typed blocks **by hand**. It supports only:

- `##` headings
- `-` bullets
- `>` blockquotes (a trailing `— Name` line becomes a citation)

It does **not** support bold, italics, links, tables, images or code. Anything else renders as literal characters on the page. This is why the blog prompt cannot ask for outbound links — adding link support to the renderer would have to come first.

## GEO (generative engine optimization)

Posts open with a **summary block**: 2–4 lines beginning with `> `, 60–90 words, answering the article's core question on its own. The point is that an AI assistant quoting one passage still gets a correct, useful answer. Each post also carries a 3-question FAQ section.

This is produced by the n8n workflow, not by hand — see below. There is no separate "AI optimization" beyond this: Google states plainly that AI Overviews and AI Mode use the same index and ranking systems as normal Search, and that `llms.txt` neither helps nor harms.

## Blog automation

Posts come from n8n (`wady-blog-auto-deploy`) and land in `src/content/blog/<slug>.md`. Two prompt nodes: English first, then an Arabic localisation step. Output uses a custom header block (`SERVICE:`, `TITLE:`, `EXCERPT:`, `DESCRIPTION:`, `READTIME:`) followed by `===BODY===`. Arabic is split on a `<!-- AR -->` marker.

The workflow JSON in the n8n repo is a **record, not the running copy** — n8n keeps its workflows in its own database. Changing the JSON does not change what runs; the prompt has to be edited in the n8n UI.

The Arabic prompt pins the FAQ heading to `## الأسئلة الشائعة` verbatim, because leaving it to translation produces wrong results.

## Open items — need a decision, not code

- **No social profiles exist**, so Organization schema omits `sameAs`. Don't invent them.
- **Every post is authored by the Organization.** Google's Who/How/Why guidance wants a named `Person` with credentials and `sameAs`.
- A purpose-built 1200×630 OG image (currently reuses `wady-logo1.png`).
- Only `addressCountry: "SA"` is asserted. A real registered address would unlock `LocalBusiness`.
- **Apex → www is a 307 (temporary); it should be 308.** That's Vercel domain config, not code.
- `x-default` points at `/ar` because `/` only redirects. Flip `defaultLocale` if English should be the fallback.

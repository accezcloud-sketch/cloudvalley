# Cloud Valley (وادي السحاب) — www.wady.cloud

Bilingual marketing site for the Cloud Valley agency: Arabic (default, right-to-left) at `/ar` and English at `/en`. Next.js App Router, Tailwind CSS 4, every page prerendered as static HTML, hosted on Vercel.

Read [`SEO-GEO.md`](SEO-GEO.md) before changing metadata, routing or blog content.

## Commands

```bash
npm run dev      # local development on http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npm test         # checks on the last build (run a build first)
npm run check    # build + tests
```

`npm test` runs `tests/*.test.mjs` with Node's built-in test runner. It currently checks that every internal link in the built site resolves to a real page.

If the default (Turbopack) build fails with "Failed to fetch … from Google Fonts" on a flaky connection, `npx next build --webpack` downloads the fonts through Node instead.

## Where things live

| Path | What it is |
| --- | --- |
| `src/app/[locale]/` | All pages, per language. `[...rest]` sends unknown addresses to the branded 404. |
| `src/app/[locale]/feed.xml/route.ts` | RSS feed per language (`/ar/feed.xml`, `/en/feed.xml`). |
| `src/lib/dictionaries.ts` | All interface text, Arabic and English. |
| `src/lib/service-data.ts` | Copy for the 8 service pages. |
| `src/lib/blog-data.ts` | Markdown loader for `src/content/blog`, reading time, related articles. |
| `src/lib/seo.ts` | Canonical, hreflang, Open Graph and structured data helpers. |
| `src/content/blog/*.md` | Articles; English body, then `<!-- AR -->`, then Arabic body. |
| `src/proxy.ts` | Redirects addresses without a language prefix. |

## Blog articles

Articles are written by the n8n workflow `wady-blog-auto-deploy` (see `SEO-GEO.md`). The renderer supports `##` headings, `- ` bullets, `>` quotes and plain paragraphs only; anything else shows as literal characters.

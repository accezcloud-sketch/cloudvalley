import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";

/**
 * Crawler policy.
 *
 * AI crawlers split into two kinds, and they deserve different answers:
 *
 *  - RETRIEVAL bots (OAI-SearchBot, ChatGPT-User, PerplexityBot,
 *    Claude-SearchBot, Applebot) fetch a page so they can cite it in an answer.
 *    A citation can send a real visitor here, so these are allowed.
 *
 *  - TRAINING-ONLY bots (GPTBot, CCBot, Google-Extended, Applebot-Extended,
 *    Bytespider) ingest the content to train a model. They never send traffic
 *    back, so blocking them costs nothing in search terms and keeps the agency's
 *    written work out of training corpora. Note Google-Extended controls Gemini
 *    training ONLY — it has no effect on normal Google Search ranking.
 *
 * Important: each crawler obeys only its own most-specific group, so a named
 * bot does NOT inherit anything from the "*" group. Every rule a named bot
 * needs must be written inside its own entry.
 */
const RETRIEVAL_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Claude-SearchBot",
  "Applebot",
];

const TRAINING_ONLY_BOTS = [
  "GPTBot",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...RETRIEVAL_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...TRAINING_ONLY_BOTS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

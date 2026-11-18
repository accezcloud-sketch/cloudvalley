import { ImageResponse } from "next/og";
import { locales, isLocale } from "@/lib/i18n";
import { getAllSlugs, getBlogPost } from "@/lib/blog-data";
import { coverSvg, COVER_WIDTH, COVER_HEIGHT } from "@/lib/cover-art";

// The cover image of every article, at /<locale>/blog/<slug>/cover: a topic
// illustration drawn in code (src/lib/cover-art.ts), so every article,
// including future ones from the automation, gets one without anyone
// choosing a photo. Prerendered as a 1200x630 PNG at build time; it is also
// the article's share image (Open Graph / X).
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/[locale]/blog/[slug]/cover">,
) {
  const { locale, slug } = await params;
  const post = isLocale(locale) ? getBlogPost(locale, slug) : undefined;
  if (!post) return new Response("Not found", { status: 404 });

  const svg = coverSvg(post.serviceNum, slug);
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
        <img src={src} width={COVER_WIDTH} height={COVER_HEIGHT} alt="" />
      </div>
    ),
    { width: COVER_WIDTH, height: COVER_HEIGHT },
  );
}

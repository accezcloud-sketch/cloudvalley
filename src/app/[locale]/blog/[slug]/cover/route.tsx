import { ImageResponse } from "next/og";
import { locales, isLocale } from "@/lib/i18n";
import { getAllSlugs, getBlogPost } from "@/lib/blog-data";
import { coverSvg, COVER_PNG_WIDTH, COVER_PNG_HEIGHT } from "@/lib/cover-art";

// The cover image of every article, at /<locale>/blog/<slug>/cover: a topic
// illustration drawn in code (src/lib/cover-art.ts), so every article,
// including future ones from the automation, gets one without anyone
// choosing a photo. The picture is matched from the English title, so the
// Arabic and English pages share one cover. Prerendered at build time as a
// 2400x1260 PNG (2x, for sharp high-density screens); it is also the
// article's share image (Open Graph / X).
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

  const svg = coverSvg(post.cover, slug);
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
        <img src={src} width={COVER_PNG_WIDTH} height={COVER_PNG_HEIGHT} alt="" />
      </div>
    ),
    { width: COVER_PNG_WIDTH, height: COVER_PNG_HEIGHT },
  );
}

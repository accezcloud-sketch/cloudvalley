import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Default share image (1200x630) for every page that has no image of its
// own: the logo lock-up on the site's paper colour. It replaces sharing the
// raw 2600x1139 logo, which social apps cropped. /og-default.png has a dot,
// so src/proxy.ts leaves it alone. Prerendered at build time.
export const dynamic = "force-static";

export async function GET() {
  const logo = await readFile(
    path.join(process.cwd(), "public", "wady-logo1.png"),
  );
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2ede3",
          border: "2px solid #d6ccb8",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
        <img src={src} width={780} height={342} alt="" />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard security headers on every response. Deliberately no
  // Content-Security-Policy yet: a CSP has to list every script, font and
  // form target (Google Fonts, Salesforce, WhatsApp) and is easy to get
  // wrong; these four are safe on any page.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    // Overlapping articles merged into the stronger one (owner decision D10,
    // 2026-11-18). Kept for at least a year, as Google recommends.
    const merged: [string, string][] = [
      [
        "does-your-business-need-a-mobile-app",
        "app-or-mobile-site-what-s-your-digital-edge",
      ],
      ["e-commerce-design", "build-an-e-commerce-store-that-sells"],
      ["ai-your-new-content-creation-partner", "content-production"],
    ];
    return [
      ...merged.map(([from, to]) => ({
        source: `/:locale(ar|en)/blog/${from}`,
        destination: `/:locale/blog/${to}`,
        permanent: true,
      })),
      // Duplicate of is-your-website-outdated-10-red-flags, removed 2026-07-22.
      {
        source:
          "/:locale/blog/your-website-s-outdated-10-signs-it-needs-a-refresh",
        destination: "/:locale/blog/is-your-website-outdated-10-red-flags",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

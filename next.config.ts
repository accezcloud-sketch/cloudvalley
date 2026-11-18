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
    return [
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

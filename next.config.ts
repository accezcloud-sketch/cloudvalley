import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

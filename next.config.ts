import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.wordpress.com",
        pathname: "/mshots/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/", destination: "/ro", permanent: true },
      { source: "/contact", destination: "/ro#contact", permanent: true },
      { source: "/privacy-policy", destination: "/ro/privacy-policy", permanent: true },
      { source: "/terms", destination: "/ro/terms", permanent: true },
      { source: "/pricing/:path*", destination: "/ro/pricing/:path*", permanent: true },
      { source: "/services/:path*", destination: "/ro/services/:path*", permanent: true },
      { source: "/blog", destination: "/ro/blog", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Hashed Next assets — long cache
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // HTML pages — short cache + revalidate (good for Ads landing freshness)
        source: "/(ro|en|ru)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

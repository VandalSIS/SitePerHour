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
      { source: "/contact", destination: "/en#contact", permanent: true },
      { source: "/privacy-policy", destination: "/en/privacy-policy", permanent: true },
      { source: "/terms", destination: "/en/terms", permanent: true },
      { source: "/pricing/:path*", destination: "/en/pricing/:path*", permanent: true },
      { source: "/services/:path*", destination: "/en/services/:path*", permanent: true },
      { source: "/blog", destination: "/en/blog", permanent: true },
    ];
  },
};

export default nextConfig;

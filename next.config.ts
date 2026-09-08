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
};

export default nextConfig;

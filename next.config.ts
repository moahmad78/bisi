import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Developed-By", value: "Sahil Sheikh - IG: @sahil_sheikh78" },
          { key: "X-Creator", value: "Sahil Sheikh" },
        ],
      },
    ];
  },
};

export default nextConfig;

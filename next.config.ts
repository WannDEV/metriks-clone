import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Existing Next.js configurations go here (if any)

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;

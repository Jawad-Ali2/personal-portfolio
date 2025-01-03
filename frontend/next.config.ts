import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },
};

export default nextConfig;

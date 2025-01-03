import { withNextVideo } from "next-video/process";
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

export default withNextVideo(nextConfig);

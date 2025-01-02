import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "github-readme-stats.vercel.app",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
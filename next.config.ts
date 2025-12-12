import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,   // keep your current setting
  output: "export",        // enable static HTML export
  images: {
    unoptimized: true,     // disables Next/Image server optimizations
  },
};

export default nextConfig;

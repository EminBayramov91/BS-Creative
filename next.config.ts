import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hostinger shared hosting: `next build` emits a static `out/` folder.
  output: "export",
  // No image-optimization server on shared hosting → serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;

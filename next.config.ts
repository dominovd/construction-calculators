import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Rewrites handled by middleware.ts
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;

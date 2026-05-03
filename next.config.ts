import type { NextConfig } from "next";

const LOCALES = ["uk", "ru", "pl", "de", "es", "fr", "ja", "ar", "it"];

const nextConfig: NextConfig = {
  async rewrites() {
    return LOCALES.map((locale) => ({
      source: `/${locale}/:path*`,
      destination: `/:path*`,
    }));
  },
};

export default nextConfig;

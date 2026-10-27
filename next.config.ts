import type { NextConfig } from "next";
import { DEFAULT_LOCALE, LOCALES } from "./src/lib/i18n/config";

const localePrefixes = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/viewpoints/sunnegga-riffelsee",
        destination: "/viewpoints/riffelsee",
        permanent: true,
      },
      ...localePrefixes.map((locale) => ({
        source: `/${locale}/viewpoints/sunnegga-riffelsee`,
        destination: `/${locale}/viewpoints/riffelsee`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;

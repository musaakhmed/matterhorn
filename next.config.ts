import type { NextConfig } from "next";
import { DEFAULT_LOCALE, LOCALES, RETIRED_LOCALES } from "./src/lib/i18n/config";

const localePrefixes = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

/** One URL per search intent. Losers 308 to the page that should rank. */
const consolidatedGuides = [
  {
    source: "/guides/gornergrat-vs-klein-matterhorn",
    destination: "/guides/gornergrat-vs-glacier-paradise",
  },
  {
    source: "/guides/zurich-to-zermatt-day-trip-weather",
    destination: "/guides/zurich-geneva-to-zermatt-day-trip",
  },
  {
    source: "/guides/glacier-express",
    destination: "/trains",
  },
  {
    source: "/guides/gornergrat-railway-vs-glacier-express",
    destination: "/trains",
  },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/viewpoints/sunnegga-riffelsee",
        destination: "/viewpoints/riffelsee",
        permanent: true,
      },
      ...consolidatedGuides.map((redirect) => ({
        ...redirect,
        permanent: true,
      })),
      ...localePrefixes.flatMap((locale) =>
        consolidatedGuides.map((redirect) => ({
          source: `/${locale}${redirect.source}`,
          destination:
            redirect.destination === "/trains"
              ? `/${locale}/trains`
              : `/${locale}${redirect.destination}`,
          permanent: true,
        }))
      ),
      ...localePrefixes.map((locale) => ({
        source: `/${locale}/viewpoints/sunnegga-riffelsee`,
        destination: `/${locale}/viewpoints/riffelsee`,
        permanent: true,
      })),
      ...RETIRED_LOCALES.map((locale) => ({
        source: `/${locale}/viewpoints/sunnegga-riffelsee`,
        destination: "/viewpoints/riffelsee",
        permanent: true,
      })),
      ...RETIRED_LOCALES.flatMap((locale) => [
        {
          source: `/${locale}`,
          destination: "/",
          permanent: true,
        },
        {
          source: `/${locale}/:path*`,
          destination: "/:path*",
          permanent: true,
        },
      ]),
    ];
  },
};

export default nextConfig;

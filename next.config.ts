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
    source: "/guides/christmas-in-zermatt",
    destination: "/guides/christmas-in-zermatt-matterhorn",
  },
] as const;

const isDev = process.env.NODE_ENV === "development";

function buildCsp(frameAncestors: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://static.cloudflareinsights.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self' data:",
    "connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com",
    "frame-src 'self' https://gornergrat.roundshot.com https://zermatt.roundshot.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    `frame-ancestors ${frameAncestors}`,
    "upgrade-insecure-requests",
  ].join("; ");
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/((?!embed/widget).*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: buildCsp("'self'"),
          },
        ],
      },
      {
        source: "/embed/widget",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: buildCsp("*"),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.isthematterhornvisible.com",
          },
        ],
        destination: "https://isthematterhornvisible.com/:path*",
        statusCode: 301,
      },
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
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
          destination: `/${locale}${redirect.destination}`,
          permanent: true,
        }))
      ),
      ...localePrefixes.map((locale) => ({
        source: `/${locale}/viewpoints/sunnegga-riffelsee`,
        destination: `/${locale}/viewpoints/riffelsee`,
        permanent: true,
      })),
      ...localePrefixes.map((locale) => ({
        source: `/${locale}/guides/riffelsee-lake-matterhorn-reflection-guide`,
        destination: "/guides/riffelsee-lake-matterhorn-reflection-guide",
        statusCode: 301,
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

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SkiDashboardView from '@/components/SkiDashboardView';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildSkiPageJsonLd, serializeJsonLd } from '@/lib/schema';
import {
  LOCALES,
  DEFAULT_LOCALE,
  isValidLocale,
  getAlternateUrls,
  Locale,
} from '@/lib/i18n/config';

export const revalidate = 900; // Revalidate every 15 minutes

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title: 'Zermatt Ski Resort & Snow Report (2026) | Lifts, Cervinia Italy Link & Passes',
    description:
      'Live ski intelligence for Zermatt & Cervinia: snow depth at 3 elevations, real-time "Can I Ski to Italy?" border link status, 2026 dynamic ski pass pricing, Ikon Pass guide, and Findeln mountain restaurant directory.',
    alternates: getAlternateUrls('/ski', locale as Locale),
    keywords: [
      'Zermatt ski',
      'Zermatt ski resort',
      'Matterhorn ski paradise',
      'Zermatt to Cervinia ski',
      'Zermatt snow report',
      'Zermatt snow conditions',
      'Zermatt ski pass price',
      'Zermatt lift status',
      'Zermatt Ikon Pass',
      'Zermatt piste map',
      'Chez Vrony',
      'Hennu Stall après ski',
      'Zermatt glacier skiing',
    ],
    openGraph: {
      title: 'Zermatt Ski Resort & Snow Report (2026) | Lifts, Cervinia Link & Passes',
      description:
        'Live ski conditions across 360 km of slopes in Switzerland and Italy: snow depth at 3 elevations, Italy border link status, 2026 ski pass calculator, and mountain dining radar.',
      url: `https://isthematterhornvisible.com/${locale}/ski`,
      siteName: 'Is The Matterhorn Visible?',
      type: 'article',
      images: [
        {
          url: '/guides/gornergrat-vs-glacier-paradise.jpg',
          width: 1200,
          height: 630,
          alt: 'Skiing in Zermatt facing the Matterhorn pyramid',
        },
      ],
    },
  };
}

export default async function LocalizedSkiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildSkiPageJsonLd(telemetry, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <SkiDashboardView initialData={telemetry} locale={locale as Locale} />
    </>
  );
}

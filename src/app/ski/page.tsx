import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildSkiPageJsonLd, serializeJsonLd } from '@/lib/schema';
import SkiDashboardView from '@/components/SkiDashboardView';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Zermatt Ski Resort & Snow Report (2026) | Lifts, Cervinia Italy Link & Passes',
  description:
    'Live ski intelligence for Zermatt & Cervinia: snow depth at 3 elevations, real-time "Can I Ski to Italy?" border link status, 2026 dynamic ski pass pricing, Ikon Pass guide, and Findeln mountain restaurant directory.',
  alternates: getAlternateUrls('/ski'),
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
    url: 'https://isthematterhornvisible.com/ski',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'article',
    images: [
      {
        url: '/guides/gornergrat-vs-glacier-paradise.jpg',
        width: 1200,
        height: 630,
        alt: 'Skiing in Zermatt facing the Matterhorn pyramid',
      },
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Matterhorn Live Alpine Telemetry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zermatt Ski Report & Mountain Intelligence (2026)',
    description:
      'Real-time snow conditions, cross-border Italy link status, 2026 ski pass calculator, and Findeln gourmet huts guide.',
    images: ['/guides/gornergrat-vs-glacier-paradise.jpg'],
  },
};

export default async function SkiPage() {
  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildSkiPageJsonLd(telemetry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <SkiDashboardView initialData={telemetry} locale="en" />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { fetchResortSnowReport, fetchSnowForecast } from '@/lib/snow';
import { buildSkiPageJsonLd, serializeJsonLd } from '@/lib/schema';
import SkiDashboardView from '@/components/SkiDashboardView';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Zermatt Ski Report & Conditions | Lifts, Season & Cervinia',
  description:
    'Zermatt snow report from Zermatt Bergbahnen, a 10-day snowfall and freezing-level forecast, and average new snow by month since 1996.',
  alternates: getAlternateUrls('/ski'),
  keywords: [
    'Zermatt ski',
    'Zermatt ski resort',
    'Matterhorn ski paradise',
    'Zermatt to Cervinia ski',
    'Zermatt snow report',
    'Zermatt ski report',
    'Zermatt snow conditions',
    'Zermatt ski conditions',
    'Zermatt ski season',
    'Zermatt ski lifts',
    'Zermatt ski pass price',
    'Zermatt lift status',
    'ski cervinia',
    'cervinia webcam',
    'meteo cervinia',
    'skipass cervinia zermatt',
    'Zermatt Ikon Pass',
    'Zermatt piste map',
    'Chez Vrony',
    'Hennu Stall après ski',
    'Zermatt glacier skiing',
  ],
  openGraph: {
    title: 'Zermatt Ski Report & Conditions | Lifts, Season & Cervinia',
    description:
      'Zermatt snow report, 10-day new snow and freezing level, 30-year snowfall by elevation, and the Cervinia link.',
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
    title: 'Zermatt Ski Report & Conditions | Lifts, Season & Cervinia',
    description:
      'Zermatt snow report, 10-day new snow and freezing level, 30-year snowfall by elevation, and the Cervinia link.',
    images: ['/guides/gornergrat-vs-glacier-paradise.jpg'],
  },
};

export default async function SkiPage() {
  const [telemetry, snowReport, snowForecast] = await Promise.all([
    fetchMatterhornVisibility(),
    fetchResortSnowReport(),
    fetchSnowForecast(),
  ]);
  const jsonLd = buildSkiPageJsonLd(telemetry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <SkiDashboardView
        initialData={telemetry}
        locale="en"
        snowReport={snowReport}
        snowForecast={snowForecast}
      />
    </>
  );
}

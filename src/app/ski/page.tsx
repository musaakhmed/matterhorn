import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildSkiPageJsonLd, serializeJsonLd } from '@/lib/schema';
import SkiDashboardView from '@/components/SkiDashboardView';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Zermatt Ski Report & Conditions | Lifts, Season & Cervinia',
  description:
    'Zermatt ski report and conditions: snow by elevation, lift status, ski season, and whether you can ski to Cervinia today.',
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
      'Zermatt ski report and conditions: snow by elevation, lift status, ski season, and the Cervinia border link.',
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
      'Zermatt ski report and conditions: snow by elevation, lift status, ski season, and the Cervinia border link.',
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

import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildTrainsPageJsonLd, serializeJsonLd } from '@/lib/schema';
import TrainsComparisonView from '@/components/TrainsComparisonView';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Gornergrat Railway & Glacier Express (2026 Guide) | Tickets, Passes & Live Conditions',
  description:
    'Complete guide to Gornergrat Bahn & Glacier Express in Zermatt: 2026 ticket prices, Swiss Travel Pass discounts, seat reservations, live summit visibility scores, and scenic routes.',
  alternates: getAlternateUrls('/trains'),
  keywords: [
    'Gornergrat Bahn',
    'Gornergrat Railway',
    'Glacier Express',
    'Glacier Express tickets 2026',
    'Gornergrat Swiss Travel Pass',
    'Glacier Express Swiss Travel Pass',
    'Gornergrat train tickets',
    'Zermatt to Gornergrat train',
    'Glacier Express Excellence Class',
    'Gornergrat timetable',
    'Riffelsee train stop',
  ],
  openGraph: {
    title: 'Gornergrat Railway & Glacier Express Guide | Tickets, Passes & Live Conditions',
    description:
      'Compare Gornergrat (3,089 m cogwheel) and Glacier Express (panoramic trans-alpine rail): Swiss Travel Pass discounts, seat reservations, and live summit clarity.',
    url: 'https://isthematterhornvisible.com/trains',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'article',
    images: [
      {
        url: '/guides/gornergrat-vs-glacier-paradise.jpg',
        width: 1200,
        height: 630,
        alt: 'Gornergrat Bahn cogwheel train with panoramic view of the Matterhorn',
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
    title: 'Gornergrat Railway & Glacier Express | 2026 Tickets & Live Conditions',
    description:
      'Complete guide to Gornergrat Bahn & Glacier Express: Swiss Travel Pass 50% discount vs free tickets, seat reservations, and live Matterhorn summit visibility.',
    images: ['/guides/gornergrat-vs-glacier-paradise.jpg'],
  },
};

export default async function TrainsPage() {
  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildTrainsPageJsonLd(telemetry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <TrainsComparisonView initialData={telemetry} locale="en" />
    </>
  );
}

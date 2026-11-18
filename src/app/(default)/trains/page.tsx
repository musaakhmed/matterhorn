import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildTrainsPageJsonLd, serializeJsonLd } from '@/lib/schema';
import TrainsComparisonView from '@/components/TrainsComparisonView';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Gornergrat Timetable & Tickets | Glacier Express Price',
  description:
    'Gornergrat timetable and tickets, plus Glacier Express price, seat reservation, and the Zermatt route.',
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
    'gornergrat ticket',
    'glacier express price',
    'glacier express seat reservation',
    'glacier express route',
    'Riffelsee train stop',
  ],
  openGraph: {
    title: 'Gornergrat Timetable & Tickets | Glacier Express Price',
    description:
      'Gornergrat timetable and tickets, plus Glacier Express price, seat reservation, and the Zermatt route.',
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
    title: 'Gornergrat Timetable & Tickets | Glacier Express Price',
    description:
      'Gornergrat timetable and tickets, plus Glacier Express price, seat reservation, and the Zermatt route.',
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

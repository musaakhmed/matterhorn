import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TrainsComparisonView from '@/components/TrainsComparisonView';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildTrainsPageJsonLd, serializeJsonLd } from '@/lib/schema';
import {
  LOCALES,
  DEFAULT_LOCALE,
  isValidLocale,
  getAlternateUrls,
  Locale,
} from '@/lib/i18n/config';

export const revalidate = 900;

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
      url: `https://isthematterhornvisible.com/${locale}/trains`,
      siteName: 'Is The Matterhorn Visible?',
      type: 'article',
      images: [
        {
          url: '/guides/gornergrat-vs-glacier-paradise.jpg',
          width: 1200,
          height: 630,
          alt: 'Gornergrat Bahn cogwheel train with panoramic view of the Matterhorn',
        },
      ],
    },
  };
}

export default async function LocalizedTrainsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildTrainsPageJsonLd(telemetry, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <TrainsComparisonView initialData={telemetry} locale={locale as Locale} />
    </>
  );
}

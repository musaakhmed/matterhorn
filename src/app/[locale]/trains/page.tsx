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
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getSeo, openGraphLocale } from '@/lib/i18n/seo';

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
  const typed = locale as Locale;
  const seo = getSeo(typed);
  const dict = getDictionary(typed);

  return {
    title: seo.trains.title,
    description: seo.trains.description,
    alternates: getAlternateUrls('/trains', typed),
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
      title: seo.trains.title,
      description: seo.trains.description,
      url: `https://isthematterhornvisible.com/${locale}/trains`,
      siteName: dict.common.siteName,
      locale: openGraphLocale(typed),
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

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
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getSeo, openGraphLocale } from '@/lib/i18n/seo';

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
  const typed = locale as Locale;
  const seo = getSeo(typed);
  const dict = getDictionary(typed);

  return {
    title: seo.ski.title,
    description: seo.ski.description,
    alternates: getAlternateUrls('/ski', typed),
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
      title: seo.ski.title,
      description: seo.ski.description,
      url: `https://isthematterhornvisible.com/${locale}/ski`,
      siteName: dict.common.siteName,
      locale: openGraphLocale(typed),
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

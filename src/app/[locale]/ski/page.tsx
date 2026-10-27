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

  const skiTitle =
    locale === 'de'
      ? 'Zermatt Ski-Report & Wetter | Lifte, Webcam & Cervinia'
      : locale === 'fr'
        ? 'Conditions ski Zermatt | Remontées, saison & météo'
        : locale === 'it'
          ? 'Report sci Zermatt | Impianti, stagione e meteo'
          : 'Zermatt Ski Report & Conditions | Lifts, Season & Cervinia';

  const skiDescription =
    locale === 'de'
      ? 'Zermatt Ski-Report und Wetter: Schnee nach Höhe, Lifte, Saison und ob die Piste nach Cervinia heute offen ist.'
      : locale === 'fr'
        ? 'Bulletin ski de Zermatt : neige, remontées, saison et météo pour skier jusqu’à Cervinia.'
        : locale === 'it'
          ? 'Report sci di Zermatt: neve, impianti, stagione e meteo per sciare fino a Cervinia.'
          : 'Zermatt ski report and conditions: snow by elevation, lift status, ski season, and whether you can ski to Cervinia today.';

  return {
    title: skiTitle,
    description: skiDescription,
    alternates: getAlternateUrls('/ski', locale as Locale),
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
      title: skiTitle,
      description: skiDescription,
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

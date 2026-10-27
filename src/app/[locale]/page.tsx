import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VisibilityClientShell from '@/components/VisibilityClientShell';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { buildHomePageJsonLd, serializeJsonLd } from '@/lib/schema';
import { LOCALES, Locale, isValidLocale, DEFAULT_LOCALE, getAlternateUrls } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export const revalidate = 900;

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    alternates: getAlternateUrls('/'),
    openGraph: {
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      url: locale === DEFAULT_LOCALE ? 'https://isthematterhornvisible.com' : `https://isthematterhornvisible.com/${locale}`,
      siteName: dict.common.siteName,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: dict.seo.ogTitle,
        },
        {
          url: '/banner.jpeg',
          width: 1424,
          height: 752,
          alt: dict.seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      images: ['/opengraph-image', '/banner.jpeg'],
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const data = await fetchMatterhornVisibility();
  const jsonLd = buildHomePageJsonLd(data, rawLocale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <VisibilityClientShell initialData={data} />
    </>
  );
}

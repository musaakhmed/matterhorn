import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ViewpointsIndexView from '@/components/ViewpointsIndexView';
import { LOCALES, DEFAULT_LOCALE, isValidLocale, getAlternateUrls, Locale } from '@/lib/i18n/config';
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
  const title = `${dict.common.allViewpoints} - Matterhorn Live Visibility | Zermatt Cams`;
  const description =
    'Compare live Matterhorn visibility scores across Gornergrat (3,089m), Klein Matterhorn, and Riffelsee before buying mountain lift tickets.';

  return {
    title,
    description,
    alternates: getAlternateUrls('/viewpoints', locale),
    openGraph: {
      title,
      description,
      url: `https://isthematterhornvisible.com/${locale}/viewpoints`,
      siteName: dict.common.siteName,
      type: 'website',
    },
  };
}

export default async function LocalizedViewpointsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <ViewpointsIndexView locale={locale as Locale} />;
}

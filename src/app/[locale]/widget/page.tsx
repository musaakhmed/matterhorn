import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WidgetPage from '@/app/widget/page';
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
  const title = `${dict.common.widgetApi} - Live Matterhorn Visibility Widget`;
  const description = dict.widgetPromo.desc;

  return {
    title,
    description,
    alternates: getAlternateUrls('/widget', locale),
    openGraph: {
      title,
      description,
      url: `https://isthematterhornvisible.com/${locale}/widget`,
      siteName: dict.common.siteName,
      type: 'website',
    },
  };
}

export default async function LocalizedWidgetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <WidgetPage />;
}

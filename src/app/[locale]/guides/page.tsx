import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuidesIndexView from '@/components/GuidesIndexView';
import { LOCALES, DEFAULT_LOCALE, isValidLocale, getAlternateUrls, Locale } from '@/lib/i18n/config';
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
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const seo = getSeo(locale);
  const title = seo.guidesPage.title;
  const description = seo.guidesPage.description;

  return {
    title,
    description,
    alternates: getAlternateUrls('/guides', locale),
    openGraph: {
      title,
      description,
      url: `https://isthematterhornvisible.com/${locale}/guides`,
      siteName: dict.common.siteName,
      locale: openGraphLocale(locale),
      type: 'website',
    },
  };
}

export default async function LocalizedGuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <GuidesIndexView locale={locale as Locale} />;
}

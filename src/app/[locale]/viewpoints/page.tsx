import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ViewpointsIndexView from '@/components/ViewpointsIndexView';
import { LOCALES, DEFAULT_LOCALE, isValidLocale, getAlternateUrls, Locale } from '@/lib/i18n/config';

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
    alternates: getAlternateUrls('/viewpoints'),
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

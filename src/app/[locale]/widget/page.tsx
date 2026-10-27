import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WidgetPage from '@/app/widget/page';
import { LOCALES, DEFAULT_LOCALE, isValidLocale, getAlternateUrls } from '@/lib/i18n/config';

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
    alternates: getAlternateUrls('/widget'),
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

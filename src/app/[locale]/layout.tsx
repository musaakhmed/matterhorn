import React from 'react';
import { LOCALES, Locale, isValidLocale, DEFAULT_LOCALE } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { RootShell, rootMetadata, rootViewport } from '@/app/_components/RootShell';

export const viewport = rootViewport;
export const metadata = rootMetadata;
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ locale }));
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <RootShell locale={locale} dict={dict}>
      {children}
    </RootShell>
  );
}

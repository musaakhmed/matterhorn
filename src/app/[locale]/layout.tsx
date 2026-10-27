import React from 'react';
import { notFound } from 'next/navigation';
import { LOCALES, Locale, isValidLocale, DEFAULT_LOCALE } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { I18nProvider } from '@/lib/i18n/context';

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

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <I18nProvider locale={locale} dict={dict}>
      {children}
    </I18nProvider>
  );
}

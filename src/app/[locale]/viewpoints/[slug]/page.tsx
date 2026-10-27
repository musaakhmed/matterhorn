import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ViewpointDetailView from '@/components/ViewpointDetailView';
import { LOCALES, DEFAULT_LOCALE, isValidLocale, getAlternateUrls, Locale } from '@/lib/i18n/config';
import { VIEWPOINT_PAGES, ViewpointPageSlug } from '@/lib/viewpoints';
import { getLocalizedViewpointPage } from '@/lib/i18n/viewpoints';

export const revalidate = 900;

export function generateStaticParams() {
  const nonDefaultLocales = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
  return nonDefaultLocales.flatMap((locale) =>
    VIEWPOINT_PAGES.map((vp) => ({
      locale,
      slug: vp.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const page = getLocalizedViewpointPage(slug as ViewpointPageSlug, locale as Locale);

  return {
    title: `${page.title} | Is The Matterhorn Visible?`,
    description: page.description,
    alternates: getAlternateUrls(`/viewpoints/${slug}`),
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://isthematterhornvisible.com/${locale}/viewpoints/${slug}`,
    },
  };
}

export default async function LocalizedViewpointDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  return <ViewpointDetailView slug={slug} locale={locale as Locale} />;
}

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideArticleView from '@/components/GuideArticleView';
import { LOCALES, DEFAULT_LOCALE, isValidLocale, getAlternateUrls, Locale } from '@/lib/i18n/config';
import { GUIDES } from '@/lib/guides';
import { getLocalizedGuideArticle } from '@/lib/i18n/guides';

export const revalidate = 900;

export function generateStaticParams() {
  const nonDefaultLocales = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
  return nonDefaultLocales.flatMap((locale) =>
    GUIDES.map((g) => ({
      locale,
      slug: g.slug,
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
  const guide = getLocalizedGuideArticle(slug, locale as Locale);

  return {
    title: `${guide.title} | Is The Matterhorn Visible?`,
    description: guide.description,
    alternates: getAlternateUrls(`/guides/${slug}`),
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://isthematterhornvisible.com/${locale}/guides/${slug}`,
      images: [
        {
          url: guide.coverImage.src,
          alt: guide.coverImage.alt,
          width: 1376,
          height: 768,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: [guide.coverImage.src],
    },
  };
}

export default async function LocalizedGuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  return <GuideArticleView slug={slug} locale={locale as Locale} />;
}

import React from 'react';
import type { Metadata } from 'next';
import { GUIDES, getGuideBySlug } from '@/lib/guides';
import { getAlternateUrls } from '@/lib/i18n/config';
import GuideArticleView from '@/components/GuideArticleView';

export const revalidate = 900; // Refresh live banner every 15 minutes

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: 'Guide Not Found | Is The Matterhorn Visible?',
    };
  }

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: getAlternateUrls(`/guides/${guide.slug}`),
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      url: `https://isthematterhornvisible.com/guides/${guide.slug}`,
      siteName: 'Is The Matterhorn Visible?',
      locale: 'en_CH',
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
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
      title: guide.seoTitle,
      description: guide.description,
      images: [guide.coverImage.src],
    },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <GuideArticleView slug={slug} locale="en" />;
}

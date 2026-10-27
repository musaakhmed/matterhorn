import React from 'react';
import type { Metadata } from 'next';
import { getViewpointPageBySlug, VIEWPOINT_PAGES } from '@/lib/viewpoints';
import { getAlternateUrls } from '@/lib/i18n/config';
import ViewpointDetailView from '@/components/ViewpointDetailView';

export const revalidate = 900; // Refresh live viewpoint telemetry every 15 minutes

export function generateStaticParams() {
  return VIEWPOINT_PAGES.map((vp) => ({
    slug: vp.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getViewpointPageBySlug(slug);

  if (!page) {
    return {
      title: 'Viewpoint Not Found | Is The Matterhorn Visible?',
    };
  }

  return {
    title: page.seoTitle,
    description: page.description,
    keywords: [
      page.targetKeyword,
      page.name,
      `${page.shortName} visibility`,
      `${page.shortName} webcam`,
      'is the matterhorn visible today',
      'zermatt viewpoint forecast',
    ],
    alternates: getAlternateUrls(`/viewpoints/${page.slug}`),
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: `https://isthematterhornvisible.com/viewpoints/${page.slug}`,
      siteName: 'Is The Matterhorn Visible?',
      locale: 'en_CH',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${page.shortName} — Live Matterhorn Visibility & Forecast`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.description,
      images: ['/opengraph-image'],
    },
  };
}

export default async function ViewpointDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ViewpointDetailView slug={slug} locale="en" />;
}

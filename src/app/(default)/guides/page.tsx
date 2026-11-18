import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import GuidesIndexView from '@/components/GuidesIndexView';

export const revalidate = 900; // Revalidate live banner every 15 minutes

export const metadata: Metadata = {
  title: 'Matterhorn Field Guides | Viewpoints & Weather in Zermatt',
  description:
    'Field guides for seeing the Matterhorn: Gornergrat vs Glacier Paradise, 30-year weather stats, sunrise photo spots, and rainy-day plans.',
  alternates: getAlternateUrls('/guides'),
  openGraph: {
    title: 'Matterhorn Field Guides | Viewpoints & Weather in Zermatt',
    description:
      'Field guides for seeing the Matterhorn: Gornergrat vs Glacier Paradise, 30-year weather stats, sunrise spots & rainy-day plans.',
    url: 'https://isthematterhornvisible.com/guides',
    type: 'website',
  },
};

export default async function GuidesIndexPage() {
  return <GuidesIndexView locale="en" />;
}

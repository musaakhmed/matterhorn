import React from 'react';
import type { Metadata } from 'next';
import { getAlternateUrls } from '@/lib/i18n/config';
import ViewpointsIndexView from '@/components/ViewpointsIndexView';

export const revalidate = 900; // Revalidate every 15 minutes

export const metadata: Metadata = {
  title: 'Matterhorn Viewpoints Live Visibility | Zermatt Cams',
  description:
    'Compare live Matterhorn visibility scores across Gornergrat (3,089m), Klein Matterhorn, and Riffelsee before buying mountain lift tickets.',
  alternates: getAlternateUrls('/viewpoints'),
  openGraph: {
    title: 'Matterhorn Viewpoints Live Visibility | Zermatt Cams',
    description:
      'Compare live visibility across Gornergrat (3,089m), Klein Matterhorn, and Riffelsee before buying mountain lift tickets.',
    url: 'https://isthematterhornvisible.com/viewpoints',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
  },
};

export default async function ViewpointsIndexPage() {
  return <ViewpointsIndexView locale="en" />;
}

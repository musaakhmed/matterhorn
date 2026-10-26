import React from 'react';
import type { Metadata } from 'next';
import { fetchMatterhornVisibility } from '@/lib/weather';
import ThreeClientWrapper from '@/components/map/ThreeClientWrapper';

export const revalidate = 900; // 15-minute ISR

export const metadata: Metadata = {
  title: 'Matterhorn 3D Silhouette & Lighting Simulator | Interactive 3D Guide',
  description:
    'Explore the 3D Matterhorn (4,478m) geometry, sun angles, and alpine inversion cloud decks. Compare viewpoints from Gornergrat, Klein Matterhorn, and Riffelsee.',
  alternates: {
    canonical: '/map',
  },
  openGraph: {
    title: 'Matterhorn 3D Silhouette & Lighting Simulator | Interactive 3D Guide',
    description:
      'Interactive 3D model of the Matterhorn (4,478m) with sun angles and sightline analysis across Zermatt.',
    url: 'https://isthematterhornvisible.com/map',
    siteName: 'Is The Matterhorn Visible?',
    locale: 'en_CH',
    type: 'website',
  },
};

export default async function MapPage() {
  let visibilityData = null;
  try {
    visibilityData = await fetchMatterhornVisibility();
  } catch (err) {
    console.error('Failed to load visibility data for map page:', err);
  }

  return (
    <main className="w-full relative bg-slate-950">
      <ThreeClientWrapper initialVisibilityData={visibilityData} />
    </main>
  );
}

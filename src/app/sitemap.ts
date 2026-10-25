import type { MetadataRoute } from 'next';
import { GUIDES } from '@/lib/guides';

const BASE_URL = 'https://isthematterhornvisible.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const guideEntries: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.85,
    images: [`${BASE_URL}/logo.jpeg`],
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
      images: [
        `${BASE_URL}/logo.jpeg`,
        `${BASE_URL}/icons/crystal-clear.jpeg`,
        `${BASE_URL}/icons/partially-visible.jpeg`,
        `${BASE_URL}/icons/barely-visible.jpeg`,
        `${BASE_URL}/icons/not-visible.jpeg`,
      ],
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${BASE_URL}/logo.jpeg`],
    },
    ...guideEntries,
    {
      url: `${BASE_URL}/api/visibility`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
  ];
}

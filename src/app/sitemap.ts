import type { MetadataRoute } from 'next';
import { GUIDES } from '@/lib/guides';
import { VIEWPOINT_PAGES } from '@/lib/viewpoints';

const BASE_URL = 'https://isthematterhornvisible.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const viewpointEntries: MetadataRoute.Sitemap = VIEWPOINT_PAGES.map(
    (viewpoint) => ({
      url: `${BASE_URL}/viewpoints/${viewpoint.slug}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.95,
      images: [
        `${BASE_URL}/opengraph-image`,
        `${BASE_URL}/banner.jpeg`,
        `${BASE_URL}/logo.jpeg`,
      ],
    })
  );

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
      priority: 1.0,
      images: [
        `${BASE_URL}/opengraph-image`,
        `${BASE_URL}/banner.jpeg`,
        `${BASE_URL}/logo.jpeg`,
        `${BASE_URL}/icons/crystal-clear.jpeg`,
        `${BASE_URL}/icons/partially-visible.jpeg`,
        `${BASE_URL}/icons/barely-visible.jpeg`,
        `${BASE_URL}/icons/not-visible.jpeg`,
      ],
    },
    {
      url: `${BASE_URL}/viewpoints`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
      images: [`${BASE_URL}/logo.jpeg`],
    },
    ...viewpointEntries,
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${BASE_URL}/logo.jpeg`],
    },
    {
      url: `${BASE_URL}/widget`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
      images: [`${BASE_URL}/logo.jpeg`],
    },
    ...guideEntries,
  ];
}

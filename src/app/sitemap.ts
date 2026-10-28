import type { MetadataRoute } from 'next';
import { GUIDES } from '@/lib/guides';
import { PLANNING_GUIDES } from '@/lib/planning-guides';
import { VIEWPOINT_PAGES } from '@/lib/viewpoints';
import { LOCALES, DEFAULT_LOCALE, getAlternateUrls } from '@/lib/i18n/config';

const BASE_URL = 'https://isthematterhornvisible.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const nonDefaultLocales = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
      alternates: {
        languages: getAlternateUrls('/').languages,
      },
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
      alternates: {
        languages: getAlternateUrls('/viewpoints').languages,
      },
      images: [`${BASE_URL}/logo.jpeg`],
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: getAlternateUrls('/guides').languages,
      },
      images: [`${BASE_URL}/logo.jpeg`],
    },
    {
      url: `${BASE_URL}/trains`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.92,
      alternates: {
        languages: getAlternateUrls('/trains').languages,
      },
      images: [
        `${BASE_URL}/guides/gornergrat-vs-glacier-paradise.jpg`,
        `${BASE_URL}/logo.jpeg`,
      ],
    },
    {
      url: `${BASE_URL}/ski`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.95,
      alternates: {
        languages: getAlternateUrls('/ski').languages,
      },
      images: [
        `${BASE_URL}/guides/gornergrat-vs-glacier-paradise.jpg`,
        `${BASE_URL}/logo.jpeg`,
      ],
    },
    {
      url: `${BASE_URL}/widget`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
      alternates: {
        languages: getAlternateUrls('/widget').languages,
      },
      images: [`${BASE_URL}/logo.jpeg`],
    },
  ];

  const viewpointEntries: MetadataRoute.Sitemap = VIEWPOINT_PAGES.map(
    (viewpoint) => ({
      url: `${BASE_URL}/viewpoints/${viewpoint.slug}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.95,
      alternates: {
        languages: getAlternateUrls(`/viewpoints/${viewpoint.slug}`).languages,
      },
      images: [
        `${BASE_URL}/opengraph-image`,
        `${BASE_URL}/banner.jpeg`,
        `${BASE_URL}/logo.jpeg`,
      ],
    })
  );

  const planningGuideEntries: MetadataRoute.Sitemap = PLANNING_GUIDES.map((guide) => ({
    url: `${BASE_URL}${guide.path}`,
    lastModified: new Date('2026-10-28'),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.85,
    alternates: {
      languages: getAlternateUrls(`/guides/${guide.slug}`).languages,
    },
    images: [`${BASE_URL}${guide.coverImage.src}`, `${BASE_URL}/logo.jpeg`],
  }));

  // Localized route entries for all non-default locales
  const localizedHomeEntries: MetadataRoute.Sitemap = nonDefaultLocales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'hourly',
    priority: 0.9,
    alternates: {
      languages: getAlternateUrls('/').languages,
    },
  }));

  const localizedViewpointIndexEntries: MetadataRoute.Sitemap = nonDefaultLocales.map((locale) => ({
    url: `${BASE_URL}/${locale}/viewpoints`,
    lastModified: new Date(),
    changeFrequency: 'hourly',
    priority: 0.85,
    alternates: {
      languages: getAlternateUrls('/viewpoints').languages,
    },
  }));

  const localizedGuideIndexEntries: MetadataRoute.Sitemap = nonDefaultLocales.map((locale) => ({
    url: `${BASE_URL}/${locale}/guides`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
    alternates: {
      languages: getAlternateUrls('/guides').languages,
    },
  }));

  const localizedTrainEntries: MetadataRoute.Sitemap = nonDefaultLocales.map((locale) => ({
    url: `${BASE_URL}/${locale}/trains`,
    lastModified: new Date(),
    changeFrequency: 'hourly',
    priority: 0.88,
    alternates: {
      languages: getAlternateUrls('/trains').languages,
    },
  }));

  const localizedSkiEntries: MetadataRoute.Sitemap = nonDefaultLocales.map((locale) => ({
    url: `${BASE_URL}/${locale}/ski`,
    lastModified: new Date(),
    changeFrequency: 'hourly',
    priority: 0.9,
    alternates: {
      languages: getAlternateUrls('/ski').languages,
    },
  }));

  const localizedWidgetEntries: MetadataRoute.Sitemap = nonDefaultLocales.map((locale) => ({
    url: `${BASE_URL}/${locale}/widget`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: {
      languages: getAlternateUrls('/widget').languages,
    },
  }));

  const localizedViewpointEntries: MetadataRoute.Sitemap = nonDefaultLocales.flatMap((locale) =>
    VIEWPOINT_PAGES.map((viewpoint) => ({
      url: `${BASE_URL}/${locale}/viewpoints/${viewpoint.slug}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.85,
      alternates: {
        languages: getAlternateUrls(`/viewpoints/${viewpoint.slug}`).languages,
      },
    }))
  );

  const localizedGuideEntries: MetadataRoute.Sitemap = nonDefaultLocales.flatMap((locale) =>
    GUIDES.map((guide) => ({
      url: `${BASE_URL}/${locale}/guides/${guide.slug}`,
      lastModified: new Date(guide.updatedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: getAlternateUrls(`/guides/${guide.slug}`).languages,
      },
      images: [`${BASE_URL}${guide.coverImage.src}`, `${BASE_URL}/logo.jpeg`],
    }))
  );

  return [
    ...baseEntries,
    ...localizedHomeEntries,
    ...viewpointEntries,
    ...guideEntries,
    ...planningGuideEntries,
    ...localizedViewpointIndexEntries,
    ...localizedGuideIndexEntries,
    ...localizedTrainEntries,
    ...localizedSkiEntries,
    ...localizedWidgetEntries,
    ...localizedViewpointEntries,
    ...localizedGuideEntries,
  ];
}

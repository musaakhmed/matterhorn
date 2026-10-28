import type { Metadata } from 'next';
import type { GuideCategory } from './guides';

export const PLANNING_GUIDE_UPDATED = '2026-10-28';

/** Index and article pill. These guides include today's mountain conditions. */
export const PLANNING_GUIDE_BADGE = 'Live update';

export interface PlanningGuide {
  path: string;
  title: string;
  linkTitle: string;
  breadcrumb: string;
  blurb: string;
  description: string;
  category: GuideCategory;
  readingTimeMinutes: number;
  coverImage: { src: string; alt: string };
  heroStat: { label: string; value: string; detail: string };
}

export const PLANNING_GUIDES: PlanningGuide[] = [
  {
    path: '/guides/riffelsee-lake-matterhorn-reflection-guide',
    title: 'Riffelsee reflection guide',
    linkTitle: 'Riffelsee Matterhorn Reflection',
    breadcrumb: 'Riffelsee reflection',
    blurb: 'Wind, thaw dates, and the 10-minute walk from Rotenboden.',
    description:
      'Complete guide to photographing the iconic Matterhorn reflection at Lake Riffelsee. Best morning hours, wind speed limits for still water, seasonal thaw dates, and walking directions from Rotenboden.',
    category: 'Photography',
    readingTimeMinutes: 6,
    coverImage: {
      src: '/guides/riffelsee-shore-walk.jpg',
      alt: 'A photographer on the path at Riffelsee, with the Matterhorn mirrored in still water',
    },
    heroStat: {
      label: 'Still water',
      value: 'Under 10 km/h',
      detail: 'Before about 10:30, once the lake has thawed in late June or early July.',
    },
  },
];

export function planningGuideMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'Is The Matterhorn Visible?',
      locale: 'en_CH',
      type: 'article',
      images: [
        {
          url: '/banner.jpeg',
          width: 1424,
          height: 752,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/banner.jpeg'],
    },
  };
}

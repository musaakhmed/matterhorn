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
    path: '/guides/gornergrat-vs-klein-matterhorn',
    title: 'Gornergrat vs. Klein Matterhorn',
    linkTitle: 'Gornergrat vs. Klein Matterhorn: Which Viewpoint is Best?',
    breadcrumb: 'Gornergrat vs. Klein Matterhorn',
    blurb: 'East-face postcard angle, the cogwheel train, or the 3,883 m south crest.',
    description:
      "Compare Gornergrat (3,089m) and Klein Matterhorn Glacier Paradise (3,883m). Angle differences, ticket prices, summit cloud sensitivity, and which to choose based on today's weather.",
    category: 'Viewpoints',
    readingTimeMinutes: 7,
    coverImage: {
      src: '/guides/klein-matterhorn-glacier-paradise.jpg',
      alt: 'The Glacier Paradise viewing terrace at Klein Matterhorn, high above the ice, facing the Matterhorn',
    },
    heroStat: {
      label: 'Summit choice',
      value: '3,089 m vs 3,883 m',
      detail: 'East-face postcard from the cogwheel, or the south crest into Italy.',
    },
  },
  {
    path: '/guides/riffelsee-lake-matterhorn-reflection-guide',
    title: 'Riffelsee reflection guide',
    linkTitle: 'Riffelsee Matterhorn Reflection Guide',
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
  {
    path: '/guides/zurich-to-zermatt-day-trip-weather',
    title: 'Zurich or Geneva day trip',
    linkTitle: 'Zurich or Geneva to Zermatt Day Trip',
    breadcrumb: 'Zurich to Zermatt day trip',
    blurb: 'When a 3.5-hour train is worth boarding, and when to postpone.',
    description:
      'Deciding whether to take the 3.5-hour train from Zurich or Geneva to Zermatt? How to evaluate cloud forecasts before boarding, SBB train routing, and bad-weather backup plans.',
    category: 'Day Trips',
    readingTimeMinutes: 8,
    coverImage: {
      src: '/guides/zurich-zermatt-valley-fog.jpg',
      alt: 'A red train above valley fog on the way to Zermatt, with the Matterhorn clear overhead',
    },
    heroStat: {
      label: 'Morning rule',
      value: 'Postpone under 5/10',
      detail: 'A Zurich or Geneva day trip only pays off when the morning east-face score holds.',
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

import { GuideArticle, GuideFaq, GUIDES } from './guides';
import { PLANNING_GUIDES } from './planning-guides';
import { VisibilityApiResponse } from './types';
import { getLocalizedHref, isValidLocale, Locale } from './i18n/config';
import { getSeo, getWidgetFaqs, schemaLanguage, viewpointLivePrefix } from './i18n/seo';
import { getLocalizedViewpointPage } from './i18n/viewpoints';
import { getGuidesIndexFaqs, getHomeFaqs, liveVisibilityPrefix } from './i18n/faqs';
import { getLocalizedGuideArticle } from './i18n/guides';
import { getSkiFaqs } from './i18n/ski-copy';
import { getTrainsFaqs } from './i18n/trains-copy';
import {
  getLiveForecastForViewpointPage,
  VIEWPOINT_PAGES,
  ViewpointPageConfig,
} from './viewpoints';

export const SITE_URL = 'https://isthematterhornvisible.com';
export const SITE_NAME = 'Is The Matterhorn Visible?';

export interface RichFaqItem extends GuideFaq {
  guideHref?: string;
  guideLabel?: string;
}

/**
 * Safely serialize a JSON-LD object for injection into `<script type="application/ld+json">`.
 * Escapes `<` to `\u003c` to prevent XSS / script tag termination per Next.js 16 guidelines.
 */
export function serializeJsonLd(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

/**
 * Build Homepage / Dashboard FAQs, enriched with live Gornergrat & Glacier Paradise telemetry
 * when `data` is available so both the visible FAQ accordion and the `FAQPage` JSON-LD stay in sync.
 */
export function getDashboardFaqs(
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
): RichFaqItem[] {
  const prefix = liveVisibilityPrefix(locale, data);
  return getHomeFaqs(locale).map((faq, index) => ({
    question: faq.question,
    answer: index === 0 ? `${prefix}${faq.answer}` : faq.answer,
    guideHref: faq.guideHref,
    guideLabel: faq.guideLabel,
  }));
}

export function getGuidesIndexFaqItems(locale: Locale = 'en'): RichFaqItem[] {
  return getGuidesIndexFaqs(locale);
}

/**
 * Shared Organization node for publisher / provider references.
 */
export function buildOrganizationNode() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Is The Matterhorn Visible? Swiss Alpine Telemetry',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.jpeg`,
      width: 1024,
      height: 1024,
      caption: 'Is The Matterhorn Visible? Alpine Telemetry Logo',
    },
  };
}

/**
 * Build the `WeatherForecast` JSON-LD node with live 10-day AM/PM telemetry for
 * Gornergrat (3,089m) and Matterhorn Glacier Paradise (3,883m).
 */
export function buildWeatherForecastNode(
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
) {
  const nowIso = data?.updatedAt || new Date().toISOString();
  const gornergrat = data?.viewpoints.gornergrat;
  const glacier = data?.viewpoints['glacier-paradise'];

  const todayIso =
    gornergrat?.today.dateIso || nowIso.slice(0, 10);
  const lastDayIso =
    gornergrat?.days[gornergrat.days.length - 1]?.dateIso || todayIso;

  const description =
    gornergrat && glacier
      ? `Live 10-day Morning (AM) and Afternoon (PM) 1–10 visibility forecast for the Matterhorn (4,478m) in Zermatt, Switzerland. Current telemetry (${data.swissTimeFormatted}): Gornergrat (3,089m East) is ${gornergrat.currentScore}/10 (${gornergrat.currentStatus}; AM ${gornergrat.today.morning.score}/10, PM ${gornergrat.today.afternoon.score}/10, Mid-Cloud ${gornergrat.metrics.cloudCoverMid}%, Visibility ${gornergrat.metrics.visibilityKm} km) and Glacier Paradise (3,883m South) is ${glacier.currentScore}/10 (${glacier.currentStatus}; AM ${glacier.today.morning.score}/10, PM ${glacier.today.afternoon.score}/10, Mid-Cloud ${glacier.metrics.cloudCoverMid}%, Visibility ${glacier.metrics.visibilityKm} km).`
      : '10-day Morning (AM) and Afternoon (PM) 1–10 visibility index, 3-layer cloud diagnostics (2,000m–6,000m), Föhn wind banner risk, and 30-year monthly clear-sky probabilities for the Matterhorn (4,478m) in Zermatt, Switzerland.';

  const additionalProperty: Record<string, unknown>[] = [];

  if (gornergrat && glacier) {
    additionalProperty.push(
      {
        '@type': 'PropertyValue',
        name: 'Gornergrat (3,089m East) Current Visibility Score',
        value: gornergrat.currentScore,
        minValue: 1,
        maxValue: 10,
        unitText: '1-10 Visibility Index',
        description: `${gornergrat.currentStatus} — ${gornergrat.verdictSummary}`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Gornergrat Today Morning (AM 06:00–12:00 CET) Score',
        value: gornergrat.today.morning.score,
        minValue: 1,
        maxValue: 10,
        unitText: '1-10 Visibility Index',
        description: `${gornergrat.today.morning.status} (Mid-Cloud: ${gornergrat.today.morning.metrics.cloudCoverMid}%, Visibility: ${gornergrat.today.morning.metrics.visibilityKm} km)`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Gornergrat Today Afternoon (PM 12:00–18:00 CET) Score',
        value: gornergrat.today.afternoon.score,
        minValue: 1,
        maxValue: 10,
        unitText: '1-10 Visibility Index',
        description: `${gornergrat.today.afternoon.status} (Mid-Cloud: ${gornergrat.today.afternoon.metrics.cloudCoverMid}%, Visibility: ${gornergrat.today.afternoon.metrics.visibilityKm} km)`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Matterhorn Glacier Paradise (3,883m South) Current Visibility Score',
        value: glacier.currentScore,
        minValue: 1,
        maxValue: 10,
        unitText: '1-10 Visibility Index',
        description: `${glacier.currentStatus} — ${glacier.verdictSummary}`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Glacier Paradise Today Morning (AM 06:00–12:00 CET) Score',
        value: glacier.today.morning.score,
        minValue: 1,
        maxValue: 10,
        unitText: '1-10 Visibility Index',
        description: `${glacier.today.morning.status} (Mid-Cloud: ${glacier.today.morning.metrics.cloudCoverMid}%, Visibility: ${glacier.today.morning.metrics.visibilityKm} km)`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Glacier Paradise Today Afternoon (PM 12:00–18:00 CET) Score',
        value: glacier.today.afternoon.score,
        minValue: 1,
        maxValue: 10,
        unitText: '1-10 Visibility Index',
        description: `${glacier.today.afternoon.status} (Mid-Cloud: ${glacier.today.afternoon.metrics.cloudCoverMid}%, Visibility: ${glacier.today.afternoon.metrics.visibilityKm} km)`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Mid-Level Cloud Cover (2,000m–6,000m Summit Zone)',
        value: gornergrat.metrics.cloudCoverMid,
        unitCode: 'P1',
        unitText: '%',
      },
      {
        '@type': 'PropertyValue',
        name: 'Low-Level Valley Fog (<2,000m Zermatt Floor)',
        value: gornergrat.metrics.cloudCoverLow,
        unitCode: 'P1',
        unitText: '%',
      },
      {
        '@type': 'PropertyValue',
        name: 'Summit Horizontal Visibility',
        value: gornergrat.metrics.visibilityKm,
        unitCode: 'KMT',
        unitText: 'km',
      },
      {
        '@type': 'PropertyValue',
        name: 'Surface Wind & Southerly Föhn Banner Risk',
        value: `${gornergrat.metrics.windSpeedKmh} km/h ${gornergrat.metrics.windCardinal} (${gornergrat.metrics.windDirectionDeg}°)`,
        description: gornergrat.metrics.isFohnRisk
          ? 'Active southerly Föhn wind banner cloud risk on leeward summit ridge'
          : 'No southerly Föhn banner cloud penalty active',
      },
      {
        '@type': 'PropertyValue',
        name: 'Best Upcoming 48-Hour Viewing Window',
        value: `${gornergrat.bestBlockNext48h.dayLabel} ${gornergrat.bestBlockNext48h.period} (${gornergrat.bestBlockNext48h.score}/10 — ${gornergrat.bestBlockNext48h.status})`,
      },
      ...gornergrat.days.map((day) => ({
        '@type': 'PropertyValue',
        name: `${day.dateIso} (${day.dayOfWeek}) Matterhorn Visibility Forecast`,
        value: `Peak ${day.dailyPeakScore}/10 | AM: ${day.morning.score}/10 (${day.morning.status}) | PM: ${day.afternoon.score}/10 (${day.afternoon.status})`,
        description: `Gornergrat (3,089m) ${day.dateFormatted}: Morning 06:00–12:00 CET scores ${day.morning.score}/10 (Mid-Cloud ${day.morning.metrics.cloudCoverMid}%), Afternoon 12:00–18:00 CET scores ${day.afternoon.score}/10 (Mid-Cloud ${day.afternoon.metrics.cloudCoverMid}%).`,
      }))
    );
  }

  return {
    '@type': 'WeatherForecast',
    '@id': `${SITE_URL}/#weather-forecast`,
    name: 'Matterhorn 10-Day AM/PM Visibility Forecast (Gornergrat & Glacier Paradise)',
    alternateName: 'Zermatt Matterhorn Summit (4,478m) Live Visibility Index',
    url: locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`,
    inLanguage: schemaLanguage(locale),
    dateIssued: nowIso,
    datePublished: nowIso,
    dateModified: nowIso,
    validFrom: `${todayIso}T06:00:00+01:00`,
    validThrough: `${lastDayIso}T18:00:00+01:00`,
    description,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    about: {
      '@type': 'Mountain',
      '@id': `${SITE_URL}/#matterhorn-summit`,
      name: 'Matterhorn Summit (Zermatt, Switzerland)',
      elevation: '4478 m',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.9765,
        longitude: 7.7491,
        elevation: '4478 m',
      },
    },
    spatialCoverage: [
      {
        '@type': 'Place',
        name: 'Matterhorn, Zermatt, Valais, Switzerland',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.9765,
          longitude: 7.7491,
          elevation: '4478 m',
        },
      },
      {
        '@type': 'Place',
        name: 'Gornergrat Ridge & Sunnegga (East Face Viewpoint)',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.984,
          longitude: 7.7845,
          elevation: '3089 m',
        },
      },
      {
        '@type': 'Place',
        name: 'Matterhorn Glacier Paradise / Klein Matterhorn (South Face Viewpoint)',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.9383,
          longitude: 7.7297,
          elevation: '3883 m',
        },
      },
    ],
    ...(additionalProperty.length > 0 ? { additionalProperty } : {}),
  };
}

/**
 * Build a standards-compliant `FAQPage` JSON-LD node.
 */
export function buildFaqPageNode(
  faqs: GuideFaq[],
  pageUrl: string = SITE_URL,
  inLanguage: string = 'en-CH'
) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Root site-level JSON-LD (`WebSite`, `Organization`, `WebApplication`).
 */
export function buildRootLayoutJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationNode(),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'en-CH',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': 'WebApplication',
        '@id': `${SITE_URL}/#webapp`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/logo.jpeg`,
        applicationCategory: 'WeatherApplication',
        operatingSystem: 'All',
        description:
          'Check real-time 1–10 AM/PM visibility for the Matterhorn summit (4,478m) in Zermatt across Gornergrat (3,089m) and Glacier Paradise (3,883m), with 10-day horizon forecasts and 4 live Roundshot webcams.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CHF',
        },
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        contentLocation: {
          '@type': 'Place',
          name: 'Matterhorn Summit, Zermatt, Switzerland',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.9765,
            longitude: 7.7491,
            elevation: '4478 m',
          },
        },
      },
    ],
  };
}

/**
 * Complete Homepage (`/`) JSON-LD `@graph` combining live `WeatherForecast`,
 * `FAQPage`, and `BreadcrumbList` schemas.
 */
export function buildHomePageJsonLd(data?: VisibilityApiResponse, locale: Locale = 'en') {
  const faqs = getDashboardFaqs(data, locale);
  const pageUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;
  const lang = schemaLanguage(locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildWeatherForecastNode(data, locale),
      buildFaqPageNode(faqs, pageUrl, lang),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: getSeo(locale).dashboard,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Complete Guides Index (`/guides`) JSON-LD `@graph` combining `CollectionPage`,
 * `WeatherForecast`, `FAQPage`, and `BreadcrumbList`.
 */
export function buildGuidesIndexJsonLd(
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
) {
  const pageUrl =
    locale === 'en' ? `${SITE_URL}/guides` : `${SITE_URL}/${locale}/guides`;
  const guidesIndexFaqs = getGuidesIndexFaqItems(locale);
  const seo = getSeo(locale);
  const lang = schemaLanguage(locale);
  const homeUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        name: seo.guidesPage.jsonName,
        description: seo.guidesPage.jsonDescription,
        url: pageUrl,
        inLanguage: lang,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              url: `${SITE_URL}${getLocalizedHref(`/guides/${GUIDES[0].slug}`, locale)}`,
              name: getLocalizedGuideArticle(GUIDES[0].slug, locale).title,
            },
            ...PLANNING_GUIDES.map((guide, index) => ({
              '@type': 'ListItem',
              position: index + 2,
              url: `${SITE_URL}${guide.path}`,
              name: guide.linkTitle,
            })),
            ...GUIDES.slice(1).map((guide, index) => ({
              '@type': 'ListItem',
              position: PLANNING_GUIDES.length + index + 2,
              url: `${SITE_URL}${getLocalizedHref(`/guides/${guide.slug}`, locale)}`,
              name: getLocalizedGuideArticle(guide.slug, locale).title,
            })),
          ],
        },
      },
      buildWeatherForecastNode(data, locale),
      buildFaqPageNode(guidesIndexFaqs, pageUrl, lang),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: seo.dashboard,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.guides,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Complete Guide Article (`/guides/[slug]`) JSON-LD `@graph` combining `Article`,
 * `FAQPage`, `WeatherForecast`, and `BreadcrumbList`.
 */
export function buildGuideArticleJsonLd(
  guide: GuideArticle,
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
) {
  const pageUrl = `${SITE_URL}${getLocalizedHref(`/guides/${guide.slug}`, locale)}`;
  const seo = getSeo(locale);
  const lang = schemaLanguage(locale);
  const homeUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: guide.title,
        description: guide.description,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        inLanguage: lang,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl,
        },
        about: {
          '@id': `${SITE_URL}/#weather-forecast`,
        },
      },
      buildWeatherForecastNode(data, locale),
      buildFaqPageNode(guide.faqs, pageUrl, lang),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: seo.dashboard,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.guides,
            item: `${SITE_URL}${getLocalizedHref('/guides', locale)}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.shortTitle,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function buildStaticGuideJsonLd(input: {
  path: string;
  headline: string;
  description: string;
  breadcrumb: string;
  datePublished: string;
  dateModified: string;
  faqs?: GuideFaq[];
  howTo?: {
    name: string;
    description: string;
    totalTime: string;
    steps: { name: string; text: string; anchor: string }[];
  };
}) {
  const pageUrl = `${SITE_URL}${input.path}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: input.headline,
      description: input.description,
      datePublished: input.datePublished,
      dateModified: input.dateModified,
      inLanguage: 'en-CH',
      mainEntityOfPage: pageUrl,
      publisher: { '@id': `${SITE_URL}/#organization` },
      about: {
        '@type': 'Mountain',
        name: 'Matterhorn',
        elevation: '4478 m',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: input.breadcrumb, item: pageUrl },
      ],
    },
  ];

  if (input.faqs && input.faqs.length > 0) {
    graph.push(buildFaqPageNode(input.faqs, pageUrl, 'en-CH'));
  }

  if (input.howTo) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${pageUrl}#howto`,
      name: input.howTo.name,
      description: input.howTo.description,
      totalTime: input.howTo.totalTime,
      step: input.howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        url: `${pageUrl}#${step.anchor}`,
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Enrich Viewpoint Page FAQs with live telemetry so the visible FAQ accordion
 * and `FAQPage` JSON-LD always reflect real-time 1–10 visibility and wind data.
 */
export function getViewpointPageFaqs(
  page: ViewpointPageConfig,
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
): RichFaqItem[] {
  if (!data) {
    return page.faqs;
  }

  const forecast = getLiveForecastForViewpointPage(page, data);
  const prefix = viewpointLivePrefix(
    locale,
    data.swissTimeFormatted,
    page.shortName,
    forecast.currentScore,
    forecast.currentStatus,
    forecast.today.morning.score,
    forecast.today.afternoon.score
  );

  return page.faqs.map((faq, idx) => {
    if (idx !== 0) return faq;
    return {
      ...faq,
      answer: `${prefix}${faq.answer}`,
    };
  });
}

/**
 * Complete Viewpoints Index (`/viewpoints`) JSON-LD `@graph`.
 */
export function buildViewpointsIndexJsonLd(
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
) {
  const pageUrl =
    locale === 'en' ? `${SITE_URL}/viewpoints` : `${SITE_URL}/${locale}/viewpoints`;
  const seo = getSeo(locale);
  const lang = schemaLanguage(locale);
  const homeUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        name: seo.viewpointsPage.jsonName,
        description: seo.viewpointsPage.jsonDescription,
        url: pageUrl,
        inLanguage: lang,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: VIEWPOINT_PAGES.map((vp, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SITE_URL}${getLocalizedHref(`/viewpoints/${vp.slug}`, locale)}`,
            name: getLocalizedViewpointPage(vp.slug, locale).title,
          })),
        },
      },
      buildWeatherForecastNode(data, locale),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: seo.dashboard,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.viewpoints,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Complete Viewpoint Page (`/viewpoints/[slug]`) JSON-LD `@graph` combining
 * `TouristAttraction`, `WeatherForecast`, `FAQPage`, and `BreadcrumbList`.
 */
export function buildViewpointPageJsonLd(
  page: ViewpointPageConfig,
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
) {
  const pageUrl = `${SITE_URL}${getLocalizedHref(`/viewpoints/${page.slug}`, locale)}`;
  const faqs = getViewpointPageFaqs(page, data, locale);
  const seo = getSeo(locale);
  const lang = schemaLanguage(locale);
  const homeUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': `${pageUrl}#viewpoint`,
        name: page.name,
        description: page.description,
        url: pageUrl,
        inLanguage: lang,
        isAccessibleForFree: false,
        publicAccess: true,
        touristType: [
          'Mountain Sightseeing',
          'Alpine Photography',
          'Hiking & Ski Excursion',
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: page.latitude,
          longitude: page.longitude,
          elevation: `${page.elevationMeters} m`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Zermatt',
          addressRegion: 'Valais',
          addressCountry: 'CH',
        },
      },
      buildWeatherForecastNode(data, locale),
      buildFaqPageNode(faqs, pageUrl, lang),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: seo.dashboard,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.viewpoints,
            item: `${SITE_URL}${getLocalizedHref('/viewpoints', locale)}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: page.shortName,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export const WIDGET_PAGE_FAQS: RichFaqItem[] = getWidgetFaqs('en');

/**
 * Complete Partner Widget Studio (`/widget`) JSON-LD `@graph` combining
 * `SoftwareApplication`, `WeatherForecast`, `FAQPage`, and `BreadcrumbList`.
 */
export function buildWidgetPageJsonLd(
  data?: VisibilityApiResponse,
  locale: Locale = 'en'
) {
  const pageUrl = locale === 'en' ? `${SITE_URL}/widget` : `${SITE_URL}/${locale}/widget`;
  const seo = getSeo(locale);
  const lang = schemaLanguage(locale);
  const homeUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#widget-app`,
        name: seo.widget.jsonName,
        applicationCategory: 'WeatherApplication',
        operatingSystem: 'Web, WordPress, Webflow, Squarespace, Wix, HTML, Email',
        url: pageUrl,
        inLanguage: lang,
        description: seo.widget.jsonDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CHF',
        },
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      buildWeatherForecastNode(data, locale),
      buildFaqPageNode(getWidgetFaqs(locale), pageUrl, lang),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: seo.dashboard,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.widget.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Complete Scenic Trains Page (`/trains`) JSON-LD `@graph` combining
 * WebPage, TouristAttraction (Gornergrat Bahn), TouristTrip (Glacier Express),
 * WeatherForecast, FAQPage, and BreadcrumbList.
 */
export function buildTrainsPageJsonLd(data?: VisibilityApiResponse, locale: string = 'en') {
  const pageUrl = locale === 'en' ? `${SITE_URL}/trains` : `${SITE_URL}/${locale}/trains`;
  const trainLocale: Locale = isValidLocale(locale) ? locale : 'en';
  const trainSeo = getSeo(trainLocale);
  const faqs = getTrainsFaqs(trainLocale).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const inLanguage = schemaLanguage(trainLocale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: trainSeo.trains.jsonName,
        description: trainSeo.trains.jsonDescription,
        url: pageUrl,
        inLanguage,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      },
      {
        '@type': 'TouristAttraction',
        '@id': `${pageUrl}#gornergrat-railway`,
        name: 'Gornergrat Railway (Gornergrat Bahn)',
        description:
          'Europe’s highest open-air cogwheel electric railway ascending from Zermatt (1,604m) to Gornergrat summit (3,089m) facing the Matterhorn East Face.',
        url: `${pageUrl}#gornergrat`,
        isAccessibleForFree: false,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.984,
          longitude: 7.7845,
          elevation: 3089,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bahnhofplatz 1',
          addressLocality: 'Zermatt',
          postalCode: '3920',
          addressRegion: 'Valais',
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'TouristTrip',
        '@id': `${pageUrl}#glacier-express`,
        name: 'Glacier Express',
        description:
          'The world’s slowest express train connecting Zermatt and St. Moritz over 291 bridges, 91 tunnels, and the 2,033m Oberalp Pass.',
        url: `${pageUrl}#glacier-express`,
        itinerary: {
          '@type': 'ItemList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Zermatt (1,604 m)' },
            { '@type': 'ListItem', position: 2, name: 'Brig (678 m)' },
            { '@type': 'ListItem', position: 3, name: 'Andermatt (1,437 m)' },
            { '@type': 'ListItem', position: 4, name: 'Oberalp Pass (2,033 m)' },
            { '@type': 'ListItem', position: 5, name: 'Disentis / Mustér (1,130 m)' },
            { '@type': 'ListItem', position: 6, name: 'Chur & Rhine Gorge (585 m)' },
            { '@type': 'ListItem', position: 7, name: 'Filisur & Landwasser Viaduct (1,080 m)' },
            { '@type': 'ListItem', position: 8, name: 'St. Moritz (1,775 m)' },
          ],
        },
      },
      buildWeatherForecastNode(data, trainLocale),
      buildFaqPageNode(faqs, pageUrl, inLanguage),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: trainSeo.dashboard,
            item: trainLocale === 'en' ? SITE_URL : `${SITE_URL}/${trainLocale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: trainSeo.trains.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

/**
 * Complete Zermatt Ski Page (`/ski`) JSON-LD `@graph` combining
 * WebPage, SkiResort (Matterhorn Ski Paradise), WeatherForecast, FAQPage, and BreadcrumbList.
 */
export function buildSkiPageJsonLd(data?: VisibilityApiResponse, locale: string = 'en') {
  const pageUrl = locale === 'en' ? `${SITE_URL}/ski` : `${SITE_URL}/${locale}/ski`;
  const skiLocale: Locale = isValidLocale(locale) ? locale : 'en';
  const skiSeo = getSeo(skiLocale);
  const faqs = getSkiFaqs(skiLocale).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const inLanguage = schemaLanguage(skiLocale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: skiSeo.ski.jsonName,
        description: skiSeo.ski.jsonDescription,
        url: pageUrl,
        inLanguage,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      },
      {
        '@type': 'SkiResort',
        '@id': `${pageUrl}#resort`,
        name: 'Matterhorn Ski Paradise (Zermatt & Breuil-Cervinia)',
        alternateName: 'Zermatt Ski Resort',
        description:
          'Europe’s highest ski resort, offering 360 km of pistes spanning Switzerland and Italy under the iconic Matterhorn (Monte Cervino), open 365 days a year.',
        url: pageUrl,
        hasMap: 'https://www.matterhornparadise.ch/en/Current-information/Pistes-and-slopes',
        priceRange: 'CHF 94 - 112 per day',
        isAccessibleForFree: false,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.9765,
          longitude: 7.7491,
          elevation: 3883,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Schlattstrasse 86',
          addressLocality: 'Zermatt',
          postalCode: '3920',
          addressRegion: 'Valais',
          addressCountry: 'CH',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '08:30',
            closes: '16:30',
          },
        ],
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Total Piste Length',
            value: '360 km',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'Highest Ski Lift Elevation',
            value: '3883 m (Matterhorn Glacier Paradise)',
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: 'International Border Crossing',
            value: 'Direct skiing to Breuil-Cervinia & Valtournenche, Italy',
          },
        ],
      },
      buildWeatherForecastNode(data, skiLocale),
      buildFaqPageNode(faqs, pageUrl, inLanguage),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: skiSeo.dashboard,
            item: skiLocale === 'en' ? SITE_URL : `${SITE_URL}/${skiLocale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: skiSeo.ski.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

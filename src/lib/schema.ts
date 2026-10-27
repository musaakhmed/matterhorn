import { GuideArticle, GuideFaq, GUIDES } from './guides';
import { VisibilityApiResponse } from './types';
import { Locale, LOCALE_METAS } from './i18n/config';
import { TRAINS_FAQS } from './trains';
import { SKI_FAQS } from './ski';
import {
  evaluateLakeReflectionConditions,
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
export function getDashboardFaqs(data?: VisibilityApiResponse): RichFaqItem[] {
  const gornergrat = data?.viewpoints.gornergrat;
  const glacier = data?.viewpoints['glacier-paradise'];

  const liveAnswerPrefix =
    gornergrat && glacier
      ? `Right now (${data.swissTimeFormatted}), Gornergrat (3,089m East Face) scores ${gornergrat.currentScore}/10 (${gornergrat.currentStatus} — Morning AM: ${gornergrat.today.morning.score}/10, Afternoon PM: ${gornergrat.today.afternoon.score}/10) and Matterhorn Glacier Paradise (3,883m South Face) scores ${glacier.currentScore}/10 (${glacier.currentStatus} — Morning AM: ${glacier.today.morning.score}/10, Afternoon PM: ${glacier.today.afternoon.score}/10). `
      : '';

  return [
    {
      question: 'Is the Matterhorn visible today in Zermatt?',
      answer: `${liveAnswerPrefix}Our high-altitude telemetry engine updates every 15 minutes across both Gornergrat (3,089m) and Matterhorn Glacier Paradise (3,883m). A visibility index of 8–10/10 indicates crystal-clear, unobstructed views of the 4,478m pyramid; 6–7/10 means partially visible with light ridge or banner clouds; 3–5/10 indicates barely visible conditions; and 1–2/10 means the summit is completely socked in.`,
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Compare Gornergrat vs. Glacier Paradise viewpoints',
    },
    {
      question: 'What is the best time of day to see the Matterhorn clearly?',
      answer:
        'The Morning (AM) window between 06:00 and 11:00 CET is statistically clearer than the Afternoon (PM) window (12:00–18:00 CET) 78% of the year. Solar heating of the dark Mattertal valley walls triggers rising thermal updrafts (anabatic winds) by late morning, which condense into cumulus cloud bands around 3,000–4,000 meters after noon. Always target the first cogwheel train or gondola departure.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Read the 30-Year Morning vs. Afternoon Climatology Guide',
    },
    {
      question:
        'Which viewpoint has better Matterhorn visibility: Gornergrat (3,089m) or Matterhorn Glacier Paradise (3,883m)?',
      answer:
        'Gornergrat (3,089m) offers the iconic East/Northeast "Toblerone" pyramid silhouette, Riffelsee lake reflections, and a wind-resilient cogwheel train. Matterhorn Glacier Paradise (3,883m) views the broader Southern/Italian face and sits nearly 800 meters higher—making it superior during winter low-cloud valley inversions (<3,200m), though its aerial cableways close earlier during southerly Föhn gales (>50 km/h).',
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Full Gornergrat vs. Glacier Paradise comparison',
    },
    {
      question: 'What are the best months of the year to see the Matterhorn without clouds?',
      answer:
        'Based on 30-year Zermatt climatology, December (89%) and January (88%) deliver the highest daily clear-sky probability thanks to cold, stable winter air with minimal thermal convection. For snow-free hiking and alpine lake reflections, September (72%) and October (79%) offer the best balance. June (48%) and July (52%) record the lowest full-day visibility due to afternoon convective cloud buildup.',
      guideHref: '/guides/best-time-to-see-matterhorn',
      guideLabel: 'Explore month-by-month visibility probabilities',
    },
    {
      question:
        'Why does the Matterhorn have a cloud on top even when Zermatt village is sunny?',
      answer:
        'The Matterhorn’s isolated 4-sided pyramid (4,478m) acts like an aerodynamic barrier in high-altitude airflow, creating a low-pressure vortex on its downwind (leeward) face. Moist air drawn upward into this vortex cools adiabatically and condenses into a stationary lee-wave "banner cloud" attached to the peak—especially when southerly Föhn winds (150°–210° above 30 km/h) push moisture across the Italian ridge.',
      guideHref: '/guides/matterhorn-banner-cloud-fohn-wind',
      guideLabel: 'How banner clouds & Föhn wind scoring work',
    },
    {
      question:
        'Are Gornergrat or Glacier Paradise tickets refundable if the Matterhorn is hidden in clouds?',
      answer:
        'No. Zermatt Bergbahnen and the Gornergrat Bahn do not issue refunds for cloud cover or zero summit visibility once a ticket is purchased, and standard daily passes never sell out in advance. Always check our live 1–10 AM/PM Visibility Index and 4 Roundshot webcams on the morning of your excursion before spending CHF 100+ per person.',
      guideHref: '/guides/zermatt-cloudy-rainy-day-guide',
      guideLabel: 'What to do in Zermatt on a cloudy or rainy day',
    },
  ];
}

export const GUIDES_INDEX_FAQS: RichFaqItem[] = [
  {
    question: 'Why do standard phone weather apps get Matterhorn visibility wrong?',
    answer:
      'Consumer weather apps report conditions for Zermatt village on the valley floor at 1,608 meters. The Matterhorn summit stands at 4,478 meters—nearly 2,900 vertical meters higher—where mid-level cloud decks (3,000m–4,000m) and upper-tropospheric Föhn winds dictate whether the peak is visible.',
  },
  {
    question: 'What visibility score should I wait for before buying a mountain lift pass?',
    answer:
      'Wait for a live Morning (AM) or Afternoon (PM) score of 7/10 or higher ("Partially Visible" to "Visible"). When scores sit at 1/10 to 4/10, mid-level clouds block the summit sightline and you should pivot to valley attractions like Zermatlantis or Gorner Gorge.',
  },
  {
    question: 'Can you see the Matterhorn from Zermatt village without buying a lift ticket?',
    answer:
      'Yes! Kirchbrücke (the bridge next to the church over the Mattervispa river, a 5-minute walk from Zermatt Bahnhof) and the Mürini/Riedweg overlook (12-minute uphill walk) offer unobstructed, ticket-free views of the classic East and North faces—especially at sunrise.',
  },
  {
    question: 'How many mornings in Zermatt do I need to guarantee seeing the Matterhorn?',
    answer:
      'Staying 3 full mornings in Zermatt raises your cumulative probability of catching at least one crystal-clear (≥8/10) viewing window to over 88% in summer (June–August) and 98% in autumn and winter.',
  },
];

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
export function buildWeatherForecastNode(data?: VisibilityApiResponse) {
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
    url: SITE_URL,
    inLanguage: 'en-CH',
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
export function buildHomePageJsonLd(data?: VisibilityApiResponse, locale?: Locale) {
  const faqs = getDashboardFaqs(data);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildWeatherForecastNode(data),
      buildFaqPageNode(faqs, SITE_URL),
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Matterhorn Visibility Dashboard',
            item: SITE_URL,
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
export function buildGuidesIndexJsonLd(data?: VisibilityApiResponse) {
  const pageUrl = `${SITE_URL}/guides`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        name: 'Matterhorn Alpine Field Guides & Weather Climatology',
        description:
          'Data-backed field guides for Zermatt travelers: viewpoint comparisons, 30-year monthly visibility statistics, sunrise photography spots, and banner cloud physics.',
        url: pageUrl,
        inLanguage: 'en-CH',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: GUIDES.map((guide, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SITE_URL}/guides/${guide.slug}`,
            name: guide.title,
          })),
        },
      },
      buildWeatherForecastNode(data),
      buildFaqPageNode(GUIDES_INDEX_FAQS, pageUrl),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Alpine Field Guides',
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
  data?: VisibilityApiResponse
) {
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;

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
        inLanguage: 'en-CH',
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
      buildWeatherForecastNode(data),
      buildFaqPageNode(guide.faqs, pageUrl),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Alpine Field Guides',
            item: `${SITE_URL}/guides`,
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

/**
 * Enrich Viewpoint Page FAQs with live telemetry so the visible FAQ accordion
 * and `FAQPage` JSON-LD always reflect real-time 1–10 visibility and wind data.
 */
export function getViewpointPageFaqs(
  page: ViewpointPageConfig,
  data?: VisibilityApiResponse
): RichFaqItem[] {
  if (!data) {
    return page.faqs;
  }

  const forecast = getLiveForecastForViewpointPage(page, data);
  const reflection =
    page.slug === 'sunnegga-riffelsee'
      ? evaluateLakeReflectionConditions(forecast)
      : null;

  return page.faqs.map((faq, idx) => {
    if (idx !== 0) return faq;

    if (page.slug === 'sunnegga-riffelsee' && reflection) {
      return {
        ...faq,
        answer: `Right now (${data.swissTimeFormatted}), Riffelsee & Stellisee reflection status is "${reflection.overallVerdict}" — East-Face Visibility is ${forecast.currentScore}/10 (${forecast.currentStatus}; AM: ${forecast.today.morning.score}/10, PM: ${forecast.today.afternoon.score}/10) with surface wind at ${forecast.metrics.windSpeedKmh} km/h ${forecast.metrics.windCardinal}. ${faq.answer}`,
        guideHref: '/guides/best-matterhorn-photo-viewpoints',
        guideLabel: 'Read our complete Zermatt Photo & Mirror Lake Guide',
      };
    }

    return {
      ...faq,
      answer: `Right now (${data.swissTimeFormatted}), ${page.shortName} scores ${forecast.currentScore}/10 (${forecast.currentStatus} — Morning AM: ${forecast.today.morning.score}/10, Afternoon PM: ${forecast.today.afternoon.score}/10, Mid-Cloud: ${forecast.metrics.cloudCoverMid}%, Visibility: ${forecast.metrics.visibilityKm} km). ${faq.answer}`,
      guideHref: '/guides/gornergrat-vs-glacier-paradise',
      guideLabel: 'Compare Gornergrat vs. Glacier Paradise viewpoints',
    };
  });
}

/**
 * Complete Viewpoints Index (`/viewpoints`) JSON-LD `@graph`.
 */
export function buildViewpointsIndexJsonLd(data?: VisibilityApiResponse) {
  const pageUrl = `${SITE_URL}/viewpoints`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        name: 'Matterhorn Viewpoints Live Visibility & Conditions (Gornergrat, Glacier Paradise & Riffelsee)',
        description:
          'Compare live 1–10 visibility scores, 10-day AM/PM forecasts, wind speeds, and lake reflection conditions across Zermatt’s top Matterhorn viewpoints.',
        url: pageUrl,
        inLanguage: 'en-CH',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: VIEWPOINT_PAGES.map((vp, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SITE_URL}/viewpoints/${vp.slug}`,
            name: vp.title,
          })),
        },
      },
      buildWeatherForecastNode(data),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Matterhorn Viewpoints',
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
  data?: VisibilityApiResponse
) {
  const pageUrl = `${SITE_URL}/viewpoints/${page.slug}`;
  const faqs = getViewpointPageFaqs(page, data);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': `${pageUrl}#viewpoint`,
        name: page.name,
        description: page.description,
        url: pageUrl,
        inLanguage: 'en-CH',
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
      buildWeatherForecastNode(data),
      buildFaqPageNode(faqs, pageUrl),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Matterhorn Viewpoints',
            item: `${SITE_URL}/viewpoints`,
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

export const WIDGET_PAGE_FAQS: RichFaqItem[] = [
  {
    question:
      'Is the Matterhorn Live Visibility Widget free for Zermatt hotels, chalets, and tourism websites?',
    answer:
      'Yes. Our live 1–10 Matterhorn Visibility Widget, auto-resizing JavaScript embed, universal iframe, and dynamic SVG status badges are 100% free for Zermatt hotels, alpine chalets, mountain guide agencies, ski schools, and travel bloggers to publish with attribution.',
  },
  {
    question:
      'How often does the embedded hotel widget update its Matterhorn visibility score?',
    answer:
      'The widget updates automatically every 15 minutes using high-altitude Open-Meteo cloud layer telemetry (2,000m–6,000m), horizontal summit visibility, and southerly Föhn wind diagnostics across both Gornergrat (3,089m East) and Matterhorn Glacier Paradise (3,883m South).',
  },
  {
    question:
      'Can we display the Matterhorn widget in German (DE) or French (FR) for our hotel guests?',
    answer:
      'Yes. The widget natively supports English (lang="en"), German (lang="de"), and French (lang="fr"), automatically translating all visibility verdicts, Morning/Afternoon periods, and atmospheric metrics for international guests in Valais.',
  },
  {
    question:
      'Does the widget use tracking cookies or slow down our hotel website?',
    answer:
      'No. The widget sets zero cookies, collects zero personal guest data (100% GDPR and Swiss FADP compliant), and is edge-cached with 15-minute Incremental Static Regeneration (ISR) so it loads instantaneously without impacting your Core Web Vitals.',
  },
];

/**
 * Complete Partner Widget Studio (`/widget`) JSON-LD `@graph` combining
 * `SoftwareApplication`, `WeatherForecast`, `FAQPage`, and `BreadcrumbList`.
 */
export function buildWidgetPageJsonLd(data?: VisibilityApiResponse) {
  const pageUrl = `${SITE_URL}/widget`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#widget-app`,
        name: 'Matterhorn Live Visibility Status Widget for Hotels & Websites',
        applicationCategory: 'WeatherApplication',
        operatingSystem: 'Web, WordPress, Webflow, Squarespace, Wix, HTML, Email',
        url: pageUrl,
        inLanguage: ['en-CH', 'de-CH', 'fr-CH'],
        description:
          'Free embeddable live 1–10 Matterhorn visibility widget for Zermatt hotels, chalets, lobby screens, and travel portals. Displays real-time Gornergrat (3,089m) and Glacier Paradise (3,883m) AM/PM scores.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CHF',
        },
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      buildWeatherForecastNode(data),
      buildFaqPageNode(WIDGET_PAGE_FAQS, pageUrl),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Hotel & Partner Live Widget',
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
export function buildTrainsPageJsonLd(data?: VisibilityApiResponse) {
  const pageUrl = `${SITE_URL}/trains`;
  const faqs = TRAINS_FAQS.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: 'Gornergrat Railway & Glacier Express: Scenic Swiss Trains Guide, Tickets & Live Conditions',
        description:
          'Complete 2026 travel guide to the Gornergrat Bahn and Glacier Express. Compare Swiss Travel Pass discounts, seat reservations, live summit visibility scores, timetables, and panoramic routes.',
        url: pageUrl,
        inLanguage: 'en-CH',
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
      buildWeatherForecastNode(data),
      buildFaqPageNode(faqs, pageUrl),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Scenic Trains (Gornergrat & Glacier Express)',
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
  const faqs = SKI_FAQS.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const inLanguage = LOCALE_METAS[locale as Locale]?.htmlLang || 'en-CH';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        name: 'Zermatt Ski Resort & Matterhorn Ski Paradise: Live Snow, Lifts, Cervinia Link & 2026 Passes',
        description:
          'Live ski conditions for Zermatt & Cervinia: snow depth at 3 elevations, real-time Italy border link status, 2026 dynamic ski pass pricing, Ikon Pass guide, and mountain restaurant radar.',
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
      buildWeatherForecastNode(data),
      buildFaqPageNode(faqs, pageUrl, inLanguage),
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Live Dashboard',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Skiing in Zermatt & Matterhorn Ski Paradise',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

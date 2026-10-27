import {
  AtmosphericMetrics,
  BadgeColor,
  ViewpointForecastData,
  ViewpointId,
  VisibilityApiResponse,
} from './types';
import { GuideComparisonTable, GuideFaq, GuideSection } from './guides';

export type ViewpointPageSlug =
  | 'gornergrat'
  | 'glacier-paradise'
  | 'sunnegga-riffelsee'
  | 'zermatt-village';

export interface ViewpointQuickFact {
  label: string;
  value: string;
  detail: string;
}

export interface ViewpointPageConfig {
  slug: ViewpointPageSlug;
  /** Which underlying Open-Meteo high-altitude grid drives the primary forecast */
  telemetryKey: ViewpointId;
  /** Which Roundshot webcam tab to pre-select on this page */
  defaultWebcamId: 'gornergrat' | 'rothorn' | 'trockener-steg' | 'kirchbruecke';
  targetKeyword: string;
  name: string;
  shortName: string;
  title: string;
  seoTitle: string;
  description: string;
  elevationLabel: string;
  elevationMeters: number;
  coordinatesLabel: string;
  latitude: number;
  longitude: number;
  aspectLabel: string;
  transportSummary: string;
  journeyTime: string;
  firstDepartureLabel: string;
  bestTimeWindow: string;
  updatedAt: string;
  heroStat: {
    label: string;
    value: string;
    detail: string;
  };
  quickFacts: ViewpointQuickFact[];
  keyTakeaways: string[];
  comparisonTable: GuideComparisonTable;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedGuideSlugs: string[];
}

export interface ReflectionConditionAssessment {
  overallVerdict:
    | 'Optimal Mirror Conditions'
    | 'Rippled Reflection (Use Sheltered Shore)'
    | 'Choppy Water — Wind Disrupting Mirror'
    | 'Summit Obscured by Clouds';
  badgeColor: BadgeColor;
  windStatusLabel: string;
  waterSurfaceDetail: string;
  thawSeasonStatus: string;
  isOpenWaterSeason: boolean;
  photographerAction: string;
}

/**
 * Evaluate live Riffelsee & Stellisee mirror reflection conditions from
 * current East-aspect visibility score, surface wind speed, and calendar month.
 */
export function evaluateLakeReflectionConditions(
  forecast: ViewpointForecastData,
  now: Date = new Date()
): ReflectionConditionAssessment {
  const score = forecast.currentScore;
  const metrics: AtmosphericMetrics = forecast.metrics;
  const wind = metrics.windSpeedKmh;

  // Determine month in Europe/Zurich (1 = Jan ... 12 = Dec)
  const monthNum = parseInt(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Zurich',
      month: 'numeric',
    }).format(now),
    10
  );

  // Riffelsee (2,757m) & Stellisee (2,537m) are typically liquid/ice-free June (6) through October (10)
  const isOpenWaterSeason = monthNum >= 6 && monthNum <= 10;
  const thawSeasonStatus = isOpenWaterSeason
    ? 'Liquid Open Water Season (Mid-June – Late October)'
    : 'Winter Freeze Period (Lakes typically frozen/snow-covered Nov – Early June)';

  if (score <= 4) {
    return {
      overallVerdict: 'Summit Obscured by Clouds',
      badgeColor: 'rose',
      windStatusLabel: `${wind} km/h ${metrics.windCardinal}`,
      waterSurfaceDetail:
        'Even if lake water is calm, mid-level cloud cover (>60%) is blocking the 4,478m Matterhorn pyramid sightline.',
      thawSeasonStatus,
      isOpenWaterSeason,
      photographerAction: `Hold off on riding up to Rotenboden or Blauherd right now. Next high-clarity window: ${forecast.bestBlockNext48h.dayLabel} ${forecast.bestBlockNext48h.period} (${forecast.bestBlockNext48h.score}/10).`,
    };
  }

  if (wind <= 12 && score >= 8) {
    return {
      overallVerdict: 'Optimal Mirror Conditions',
      badgeColor: 'emerald',
      windStatusLabel: `Calm Air (${wind} km/h ${metrics.windCardinal} ≤ 12 km/h threshold)`,
      waterSurfaceDetail:
        'Glass-like water surface with crisp, symmetrical inverted pyramid reflection at both Upper Riffelsee (2,757m) and Stellisee (2,537m).',
      thawSeasonStatus,
      isOpenWaterSeason,
      photographerAction:
        'Board the earliest Gornergrat train to Rotenboden (28 mins) or Sunnegga–Blauherd lift now before daytime thermal breezes develop.',
    };
  }

  if (wind <= 22 && score >= 6) {
    return {
      overallVerdict: 'Rippled Reflection (Use Sheltered Shore)',
      badgeColor: 'amber',
      windStatusLabel: `Light Alpine Breeze (${wind} km/h ${metrics.windCardinal})`,
      waterSurfaceDetail:
        'Main Riffelsee and Stellisee basins will show light surface ripples; use a tripod with a 1–2s ND filter or walk 100m to the sheltered Lower Riffelsee pond.',
      thawSeasonStatus,
      isOpenWaterSeason,
      photographerAction:
        'Walk 2 minutes west past the main Riffelsee shore to the smaller, wind-sheltered secondary pond ("Lower Riffelsee") for a cleaner mirror surface.',
    };
  }

  return {
    overallVerdict: 'Choppy Water — Wind Disrupting Mirror',
    badgeColor: 'orange',
    windStatusLabel: `Breezy / Gusty (${wind} km/h ${metrics.windCardinal} > 22 km/h)`,
    waterSurfaceDetail:
      'Active surface wavelets break up the mirror reflection on open water, though the Matterhorn peak itself remains visible for framing with shoreline boulders.',
    thawSeasonStatus,
    isOpenWaterSeason,
    photographerAction:
      'Frame the Matterhorn using foreground alpine cotton grass (Eriophorum) or shoreline rocks rather than relying on a still water reflection, or return at 07:00 CET tomorrow.',
  };
}

export const VIEWPOINT_PAGES: ViewpointPageConfig[] = [
  {
    slug: 'gornergrat',
    telemetryKey: 'gornergrat',
    defaultWebcamId: 'gornergrat',
    targetKeyword: 'Can you see Matterhorn from Gornergrat today',
    name: 'Gornergrat Ridge (3,089m)',
    shortName: 'Gornergrat (3,089m)',
    title: 'Can You See the Matterhorn from Gornergrat Today? Live 3,089m Visibility & Forecast',
    seoTitle:
      'Can You See the Matterhorn from Gornergrat Today? | Live 3,089m Visibility & Webcam',
    description:
      'Check if you can see the Matterhorn from Gornergrat (3,089m) today before buying your cogwheel train ticket. Live 1–10 AM/PM visibility score, 3,000m cloud ceiling data, and Gornergrat webcam.',
    elevationLabel: '3,089 m (10,135 ft)',
    elevationMeters: 3089,
    coordinatesLabel: '45.9840° N, 7.7845° E',
    latitude: 45.984,
    longitude: 7.7845,
    aspectLabel: 'East & North-East "Toblerone" Pyramid Profile',
    transportSummary: 'Gornergrat Bahn Cogwheel Railway from Zermatt Bahnhof',
    journeyTime: '33 minutes direct (runs every 24 mins in peak hours)',
    firstDepartureLabel: '07:00 CET (Summer) / 07:36 CET (Winter)',
    bestTimeWindow: '06:30 – 11:00 CET (Morning East-Face Alpenglow)',
    updatedAt: '2026-10-25',
    heroStat: {
      label: 'Line-of-Sight Distance',
      value: '9.1 km East',
      detail: 'Direct unobstructed view of Hörnli Ridge & East Face (4,478m)',
    },
    quickFacts: [
      {
        label: 'Viewing Aspect',
        value: 'Classic Toblerone',
        detail: 'Iconic hooked East & North-East pyramid silhouette',
      },
      {
        label: 'Wind Resilience',
        value: 'Very High',
        detail: 'Track-bound cogwheel train operates when cable cars close',
      },
      {
        label: 'Best Train Seat',
        value: 'Right Side (Uphill)',
        detail: 'Sit on the right facing uphill for non-stop Matterhorn views',
      },
      {
        label: 'Lake Stop Included',
        value: 'Rotenboden (2,757m)',
        detail: '1 stop below Gornergrat for Riffelsee mirror lake',
      },
    ],
    keyTakeaways: [
      'Check our live 3,089m Morning (AM) and Afternoon (PM) score above before buying your Gornergrat Bahn ticket—a score of 7/10 to 10/10 guarantees a clear view of the iconic Toblerone pyramid.',
      'Gornergrat sits at 3,089 meters, meaning Mid-Level Clouds (2,000m–6,000m) are the #1 visibility blocker (weighted 60% in our algorithm). Low valley fog (<2,000m) over Zermatt village often sits completely below Gornergrat.',
      'Morning departures (07:00–10:30 CET) beat afternoon departures 78% of the year because solar heating triggers afternoon convective cumulus clouds along the Hörnli Ridge.',
      'Unlike aerial gondolas to Klein Matterhorn, the Gornergrat cogwheel railway runs on toothed tracks and rarely shuts down during high alpine winds.',
    ],
    comparisonTable: {
      caption: 'Gornergrat Bahn Station-by-Station Matterhorn Visibility & Stops',
      headers: [
        'Station Along Route',
        'Elevation',
        'Ride Time',
        'Matterhorn Sightline & Why Stop Here',
      ],
      rows: [
        [
          'Zermatt Bahnhof',
          '1,608 m',
          '0 min',
          'Terminal directly opposite SBB arrival tracks; board on the right-hand side.',
        ],
        [
          'Riffelalp',
          '2,222 m',
          '16 mins',
          'Upper timberline framing the Matterhorn through ancient Swiss stone pines (Arven).',
        ],
        [
          'Riffelberg',
          '2,582 m',
          '23 mins',
          'Open high-alpine meadow with wide-angle perspective of the Hörnli and Furgg ridges.',
        ],
        [
          'Rotenboden (Riffelsee)',
          '2,815 m',
          '28 mins',
          'Exit here for a 5-minute walk to Riffelsee (2,757m) for the famous mirror reflection.',
        ],
        [
          'Gornergrat Summit',
          '3,089 m',
          '33 mins',
          '360° observation terrace facing the Matterhorn, Gorner Glacier, and 29 peaks over 4,000m.',
        ],
      ],
    },
    sections: [
      {
        id: 'can-you-see-matterhorn-from-gornergrat-today',
        heading: '1. How to Read Today’s Gornergrat Visibility Score Before Buying Tickets',
        paragraphs: [
          'Because a round-trip Gornergrat Bahn ticket costs between CHF 92 and CHF 132 (50% off with a Swiss Travel Pass or Half-Fare Card) and is non-refundable for cloud cover, checking high-altitude telemetry before boarding is essential.',
          'When you look up from Zermatt village at 1,608 meters, you are only seeing the lowest atmospheric layer. Our Gornergrat visibility engine queries Open-Meteo grid cells specifically calibrated to 3,089 meters at 45.9840° N, 7.7845° E. If today’s active score is 8/10 to 10/10 ("Visible"), the East Face and Hörnli Ridge are unobstructed. If the score sits at 6/10 or 7/10 ("Partially Visible"), expect dramatic passing clouds or a lee-wave banner plume trailing off the summit.',
        ],
        bulletPoints: [
          {
            bold: 'Score 8–10/10 (Go Immediately):',
            text: 'Mid-level cloud cover (3,000m) is under 25% and horizontal optical range exceeds 20 km across the Gorner Glacier.',
          },
          {
            bold: 'Score 5–7/10 (Check AM vs. PM Split):',
            text: 'Usually indicates a clear morning window (06:00–11:00 CET) followed by afternoon thermal cumulus buildup. Catch the earliest train.',
          },
          {
            bold: 'Score 1–4/10 (Hold Your Ticket):',
            text: 'Thick mid-altitude stratus or precipitation is enveloping the 3,000m–4,478m zone. Verify on the live Gornergrat 360° webcam below before spending CHF 100+.',
          },
        ],
        proTip: {
          label: 'Low Valley Inversion Secret',
          text: 'If Zermatt village looks gray and foggy, check our "Low-Level Valley Fog (<2,000m)" vs. "Mid-Level Clouds (2,000m–6,000m)" cards above. When Low Fog is >70% but Mid Cloud is <20%, riding the Gornergrat train takes you above the fog into bright sunshine at 3,089m!',
        },
      },
      {
        id: 'best-time-and-lighting-gornergrat',
        heading: '2. Best Time of Day for Gornergrat: Morning Alpenglow vs. Afternoon Clouds',
        paragraphs: [
          'Gornergrat lies directly east-southeast of the Matterhorn. Because of this geometry, the morning sun shines straight onto the Matterhorn’s East Face between sunrise and 11:00 CET, illuminating every rock band, snowfield, and the Hörnli Ridge in crisp detail.',
          'By mid-afternoon (after 14:00 CET), two things happen simultaneously: the sun moves behind the Matterhorn toward Italy—casting the Gornergrat-facing wall into backlit shadow—and warm valley updrafts condense into afternoon clouds around the summit.',
        ],
      },
      {
        id: 'gornergrat-train-tips',
        heading: '3. Tactical Cogwheel Railway Tips: Seating, Hop-On Hop-Off & Riffelsee',
        paragraphs: [
          'Standard Gornergrat Bahn day tickets never sell out, so you can buy your ticket on your phone or at the station kiosk 5 minutes before departure once you confirm a high visibility score on this page.',
        ],
        bulletPoints: [
          {
            bold: 'Always Sit on the Right-Hand Side Going Up:',
            text: 'Board and sit on the right side (facing the direction of travel uphill). As soon as the train crosses the dramatic Findelbach bridge, the Matterhorn fills the right-hand windows all the way to 3,089m.',
          },
          {
            bold: 'Stop at Rotenboden on the Way Down (or Up):',
            text: 'Your Gornergrat ticket allows you to hop off at intermediate stations along the route. Stop at Rotenboden (2,815m)—one stop below the top—to walk 5 minutes down to Riffelsee for the iconic water reflection.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you see the Matterhorn from Gornergrat today?',
        answer:
          'Check the live 1–10 AM/PM Visibility Score at the top of this page, updated every 15 minutes for Gornergrat (3,089m). A score of 8–10/10 means crystal-clear views of the Matterhorn pyramid; 6–7/10 means partially visible with light ridge clouds; and 1–4/10 means clouds are obstructing the summit.',
      },
      {
        question: 'Is Gornergrat worth visiting if it is cloudy in Zermatt village?',
        answer:
          'It depends on the cloud altitude! Check our Atmospheric Layer Diagnostics above: if Low-Level Cloud (<2,000m) is high but Mid-Level Cloud (2,000m–6,000m) is below 25%, Gornergrat (3,089m) sits above the valley fog in sunshine. However, if Mid-Level Cloud is above 70%, Gornergrat will be inside the cloud deck and you should save your ticket for a clearer window.',
      },
      {
        question: 'Which side of the Gornergrat train has the best view of the Matterhorn?',
        answer:
          'Sit on the right-hand side when riding uphill from Zermatt to Gornergrat (and the left-hand side when riding downhill). The Matterhorn is visible out the right window for nearly the entire 33-minute climb.',
      },
      {
        question: 'Do I need to book Gornergrat tickets in advance?',
        answer:
          'No. Regular Gornergrat Bahn cogwheel trains do not require seat reservations and do not sell out. Wait until you check our live morning visibility score and Roundshot webcam on the day of travel before purchasing your ticket.',
      },
    ],
    relatedGuideSlugs: [
      'gornergrat-vs-glacier-paradise',
      'best-time-to-see-matterhorn',
      'zurich-geneva-to-zermatt-day-trip',
    ],
  },
  {
    slug: 'glacier-paradise',
    telemetryKey: 'glacier-paradise',
    defaultWebcamId: 'trockener-steg',
    targetKeyword: 'Klein Matterhorn visibility and view',
    name: 'Matterhorn Glacier Paradise / Klein Matterhorn (3,883m)',
    shortName: 'Glacier Paradise (3,883m)',
    title: 'Klein Matterhorn Visibility & View Today: Matterhorn Glacier Paradise (3,883m)',
    seoTitle:
      'Klein Matterhorn Visibility & View Today | Matterhorn Glacier Paradise (3,883m)',
    description:
      'Live Klein Matterhorn (Matterhorn Glacier Paradise, 3,883m) visibility score, South Face view comparison, Föhn wind cableway status, and live Trockener Steg glacier webcam.',
    elevationLabel: '3,883 m (12,740 ft)',
    elevationMeters: 3883,
    coordinatesLabel: '45.9383° N, 7.7297° E',
    latitude: 45.9383,
    longitude: 7.7297,
    aspectLabel: 'South & West Italian / Breuil Face & Theodul Glacier',
    transportSummary: 'Matterhorn Express Gondola + 3S Cableway via Trockener Steg',
    journeyTime: '45 minutes from Zermatt South valley station',
    firstDepartureLabel: '08:30 CET from Zermatt Bergbahnen terminal',
    bestTimeWindow: '09:30 – 15:30 CET (High-Sun Southern & Western Illumination)',
    updatedAt: '2026-10-25',
    heroStat: {
      label: 'Platform Elevation',
      value: '3,883 m',
      detail: 'Europe’s highest cable car station — 794m higher than Gornergrat',
    },
    quickFacts: [
      {
        label: 'Matterhorn Angle',
        value: 'South / Furgg Face',
        detail: 'Dramatic close-up trapezoidal wall (not the Toblerone hook)',
      },
      {
        label: 'Inversion Advantage',
        value: 'Above <3,500m Fog',
        detail: 'Rises above winter/autumn stratus inversions in the valley',
      },
      {
        label: 'Wind Sensitivity',
        value: 'Föhn Gale Alert',
        detail: '3S cableway may pause if southerly winds exceed 50–55 km/h',
      },
      {
        label: 'All-Weather Bonus',
        value: 'Glacier Palace',
        detail: 'Ice tunnels 15m inside the glacier remain open even in clouds',
      },
    ],
    keyTakeaways: [
      'Klein Matterhorn (Matterhorn Glacier Paradise) stands at 3,883 meters—only 595 vertical meters below the Matterhorn’s 4,478m summit—putting you eye-to-eye with the mountain’s massive Southern and Western faces.',
      'From Klein Matterhorn, the Matterhorn does NOT look like the hooked Toblerone pyramid seen from Zermatt village; instead, you see its wider, dramatic Italian/Breuil rock citadel up close across the Theodul Glacier.',
      'Because it sits at 3,883m, Klein Matterhorn frequently rises completely above low- and mid-level valley cloud inversions (<3,200m), scoring 8–9/10 when lower viewpoints are foggy.',
      'However, Klein Matterhorn sits right on the Italian border crest (Theodule Pass): when moist southerly Föhn winds (>35 km/h) blow from Italy, clouds wrap Klein Matterhorn first and gusts above 50 km/h can halt the upper cableway.',
    ],
    comparisonTable: {
      caption: 'Klein Matterhorn (3,883m) Gondola Sectors & Viewing Perspectives',
      headers: [
        'Lift Sector / Stop',
        'Elevation',
        'Matterhorn View & Atmospheric Role',
      ],
      rows: [
        [
          'Furi',
          '1,867 m',
          'Forest meadow junction looking steeply up at the East & Furgg faces.',
        ],
        [
          'Schwarzsee (Optional Detour)',
          '2,583 m',
          'Stands directly at the base of the Hörnli Ridge; best mid-altitude close-up view.',
        ],
        [
          'Trockener Steg',
          '2,939 m',
          'Glacier tongue station right beneath the towering East/Furgg wall; transfer point to the 3S cableway.',
        ],
        [
          'Matterhorn Glacier Paradise (Klein Matterhorn)',
          '3,883 m',
          '360° summit platform overlooking 38 four-thousand-meter peaks across Switzerland, Italy, and France (including Mont Blanc).',
        ],
        [
          'Testa Grigia (Alpine Crossing)',
          '3,480 m',
          'Cross-border 3S cableway onto the Italian border ridge overlooking Breuil-Cervinia.',
        ],
      ],
    },
    sections: [
      {
        id: 'klein-matterhorn-view-silhouette',
        heading: '1. What Does the Matterhorn Look Like from Klein Matterhorn (3,883m)?',
        paragraphs: [
          'The single most important thing to know before riding up to Matterhorn Glacier Paradise (Klein Matterhorn) is the viewing angle. From Zermatt village and Gornergrat, you view the Matterhorn from the northeast, where the East and North faces meet to form the famous narrow, curved "Toblerone" pyramid.',
          'When you ride the Matterhorn Express and 3S cableway south to Klein Matterhorn (3,883m), you rotate nearly 90 degrees around the mountain. From the 3,883m viewing platform, you look north-northwest at the Southern (Italian) and Furgg faces. From this angle, the Matterhorn appears as a colossal, broad-shouldered rock fortress rising straight out of the glacier rather than a slender hook—and you also see 38 peaks above 4,000 meters stretching all the way to Mont Blanc (4,808m) and Gran Paradiso in Italy.',
        ],
        proTip: {
          label: 'Get Both Angles in One Trip',
          text: 'On your way up or down from Glacier Paradise, hop off the Matterhorn Express at Schwarzsee (2,583m) or Trockener Steg (2,939m). From Trockener Steg, you stand almost directly beneath the sheer 1,500-meter East Wall!',
        },
      },
      {
        id: 'klein-matterhorn-weather-and-fohn',
        heading: '2. Klein Matterhorn Visibility Physics: Valley Inversions vs. Southerly Föhn Winds',
        paragraphs: [
          'Our telemetry engine calculates a dedicated forecast for Klein Matterhorn at 3,883 meters (45.9383° N, 7.7297° E) because its weather often diverges sharply from Gornergrat (3,089m).',
          'In autumn and winter, cold air frequently pools in the Mattertal valley beneath a temperature inversion around 2,800m–3,200m. On those days, Klein Matterhorn pokes nearly 700 meters above the cloud deck into crystalline blue sky (10/10 visibility) overlooking a sea of white clouds.',
          'Conversely, whenever a southerly Föhn wind pattern develops, warm moist air from Italy’s Aosta Valley is forced up the Breuil slope and over the Theodule Pass (3,300m). Klein Matterhorn is the very first peak in Zermatt hit by this Italian moisture wall—meaning visibility at 3,883m can drop to 2/10 while Gornergrat (sheltered 6 km northeast) still enjoys a 7/10 window.',
        ],
        bulletPoints: [
          {
            bold: 'Wind Hold Threshold (>50 km/h):',
            text: 'Check our "Wind & Föhn Risk" card above. Even though the modern 3S tri-cable gondola is far more wind-stable than older lifts, gale-force gusts above 50–60 km/h at 3,883m can trigger safety holds on the Trockener Steg–Klein Matterhorn section.',
          },
          {
            bold: 'Sub-Zero Temperatures Year-Round:',
            text: 'Even in July and August, air temperatures at 3,883m typically hover between -6°C and +2°C. Bring a windproof layer, sunglasses (Category 3/4 glacier glare), and walk slowly up the final stairs to the viewing deck.',
          },
        ],
      },
      {
        id: 'lighting-and-best-time-klein-matterhorn',
        heading: '3. Best Time of Day for Klein Matterhorn Photography',
        paragraphs: [
          'Unlike Gornergrat—where the East Face loses direct sun after midday—Klein Matterhorn faces the southern and western aspects of the Matterhorn. As a result, lighting at Matterhorn Glacier Paradise actually improves from late morning through early afternoon (10:00–15:00 CET) as the sun arcs across the southern sky and illuminates the Italian ridges.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How is Klein Matterhorn visibility today?',
        answer:
          'Check our live 1–10 AM/PM Visibility Index for Matterhorn Glacier Paradise / Klein Matterhorn (3,883m) at the top of this page. Updated every 15 minutes from 3,883m atmospheric data, a score of 8–10/10 indicates clear 360° views across the Matterhorn South Face, Breithorn, and Mont Blanc.',
      },
      {
        question: 'Why does the Matterhorn look different from Klein Matterhorn (Glacier Paradise)?',
        answer:
          'Klein Matterhorn (3,883m) sits south-southeast of the Matterhorn on the Italian border ridge. Instead of the narrow East/North "Toblerone" pyramid seen from Zermatt village and Gornergrat, you view the broader, steeper Southern and Western (Italian/Breuil) faces up close across the Theodul Glacier.',
      },
      {
        question: 'Does the Klein Matterhorn cable car close in high winds?',
        answer:
          'Yes. While the 3S cableway between Trockener Steg (2,939m) and Klein Matterhorn (3,883m) is engineered for high wind stability, southerly Föhn gales or storm gusts exceeding 50–60 km/h can temporarily close the upper section. Always check our Wind & Föhn Risk metric before walking to the Zermatt South gondola station.',
      },
      {
        question: 'Is Glacier Paradise worth visiting if visibility is only 5/10 or 6/10?',
        answer:
          'On a 6/10 day ("Partially Visible"), Glacier Paradise is still rewarding because your ticket includes the Glacier Palace (carved 15 meters deep inside the glacial ice, completely unaffected by clouds) and the Cinema Lounge. However, if the score is ≤ 4/10, you will be in a whiteout on the 3,883m viewing platform and should reschedule.',
      },
    ],
    relatedGuideSlugs: [
      'gornergrat-vs-glacier-paradise',
      'matterhorn-banner-cloud-fohn-wind',
      'zermatt-cloudy-rainy-day-guide',
    ],
  },
  {
    slug: 'sunnegga-riffelsee',
    telemetryKey: 'gornergrat',
    defaultWebcamId: 'rothorn',
    targetKeyword: 'Riffelsee Matterhorn reflection conditions',
    name: 'Sunnegga, Stellisee & Riffelsee Reflection Lakes',
    shortName: 'Sunnegga & Riffelsee',
    title: 'Riffelsee & Stellisee Matterhorn Reflection Conditions Today (Live Wind & Clarity)',
    seoTitle:
      'Riffelsee & Stellisee Matterhorn Reflection Conditions Today | Wind, Ice & Visibility',
    description:
      'Live Riffelsee (2,757m) and Stellisee (2,537m) Matterhorn reflection conditions today. Check real-time surface wind ripple speed (<12 km/h rule), East-face cloud clarity, and lake thaw status.',
    elevationLabel: '2,288 m – 2,757 m',
    elevationMeters: 2757,
    coordinatesLabel: '45.9825° N, 7.7661° E',
    latitude: 45.9825,
    longitude: 7.7661,
    aspectLabel: 'Classic East-Northeast Pyramid Mirror Reflection Angle',
    transportSummary: 'Rotenboden (Gornergrat Train, 28m) or Sunnegga Funicular (4.5m)',
    journeyTime: '28 mins + 5-min walk (Riffelsee) • 4.5 mins to Sunnegga',
    firstDepartureLabel: '07:00 CET (Rotenboden Train) / 08:00 CET (Sunnegga)',
    bestTimeWindow: '07:15 – 09:45 CET (Calm Morning Air Before Thermal Breeze)',
    updatedAt: '2026-10-25',
    heroStat: {
      label: 'Mirror Wind Limit',
      value: '< 12 km/h',
      detail: 'Surface wind above 15 km/h ripples Riffelsee & Stellisee water',
    },
    quickFacts: [
      {
        label: 'Riffelsee Access',
        value: '5-Min Walk',
        detail: 'Exit Gornergrat train at Rotenboden (2,815m) & walk down 60m',
      },
      {
        label: 'Stellisee Access',
        value: '20-Min Hike',
        detail: 'Sunnegga funicular (2,288m) + Blauherd gondola (2,571m)',
      },
      {
        label: 'Liquid Water Season',
        value: 'Mid-Jun – Oct',
        detail: 'Lakes are frozen & snow-covered November through early June',
      },
      {
        label: 'Wind Backup Spot',
        value: 'Lower Riffelsee',
        detail: 'Smaller pond 100m west stays glassy when main lake ripples',
      },
    ],
    keyTakeaways: [
      'A symmetrical Matterhorn water reflection requires THREE simultaneous conditions: a clear East-face sightline (Visibility Score ≥ 7/10), calm surface wind (< 12 km/h), and liquid ice-free water (mid-June through late October).',
      'Even on a 10/10 sunny bluebird day, a 18 km/h breeze will turn Riffelsee and Stellisee into choppy waves with zero mirror reflection—always check our live Surface Wind card above.',
      'Riffelsee (2,757m via Rotenboden on the Gornergrat line) is reachable by 07:30 CET on the first morning train when alpine air is calmest, whereas Stellisee (2,537m via Sunnegga–Blauherd) opens around 08:15–08:30 CET.',
      'Photographer Secret: If a light breeze (12–20 km/h) ripples the main Riffelsee basin, walk 100 meters further down the trail to the smaller "Lower Riffelsee" tarn, which is sheltered by a moraine ridge and stays glass-still.',
    ],
    comparisonTable: {
      caption: 'Riffelsee vs. Lower Riffelsee vs. Stellisee Mirror Lake Comparison',
      headers: [
        'Reflection Lake',
        'Elevation',
        'How to Reach from Zermatt',
        'Foreground & Wind Resistance',
      ],
      rows: [
        [
          'Upper Riffelsee (Main Lake)',
          '2,757 m',
          'Gornergrat train to Rotenboden (28m) + 5-min walk',
          'Closest, largest Matterhorn reflection; exposed to easterly/southerly breezes after 10:00 CET.',
        ],
        [
          'Lower Riffelsee (Second Pond)',
          '2,745 m',
          '2-min walk west past Upper Riffelsee along the trail',
          'High wind resistance — sheltered by natural earth bank; best backup when main lake is rippled.',
        ],
        [
          'Stellisee (Sunnegga-Blauherd)',
          '2,537 m',
          'Sunnegga funicular + Blauherd gondola + 20-min walk',
          'Iconic partially submerged boulders and cotton grass; slightly wider valley framing.',
        ],
        [
          'Grindjisee (5-Seenweg)',
          '2,334 m',
          '45-min hike below Stellisee on the 5-Lakes Trail',
          'Surrounded by larch trees (highest wind shelter of all Zermatt lakes, ideal in October).',
        ],
        [
          'Leisee (Sunnegga Terrace)',
          '2,232 m',
          'Sunnegga funicular (4.5m) + free shuttle elevator',
          'Family-friendly lake right below Sunnegga sun terrace; easiest access with kids.',
        ],
      ],
    },
    sections: [
      {
        id: 'riffelsee-matterhorn-reflection-conditions',
        heading: '1. The 3 Rules of Riffelsee & Stellisee Mirror Reflections',
        paragraphs: [
          'Thousands of visitors hike to Riffelsee or Stellisee on a sunny afternoon expecting the famous postcard mirror photo, only to find dark, choppy water with no reflection at all—or a frozen snowfield in May.',
          'Capturing the inverted Matterhorn pyramid in water is a precision microclimate game governed by three physical factors that you can verify right here before leaving Zermatt:',
        ],
        bulletPoints: [
          {
            bold: 'Rule 1 — Surface Wind Speed Must Be Under 12 km/h (7.5 mph):',
            text: 'Water acts as a specular mirror only when capillary waves are absent. At 0–10 km/h, the reflection is razor-sharp. At 12–20 km/h, ripples blur the peak into vertical streaks. Above 22 km/h, the reflection disappears completely.',
          },
          {
            bold: 'Rule 2 — Mid-Level Cloud Cover Must Be Low (Score ≥ 7/10):',
            text: 'Because both Riffelsee (2,757m) and Stellisee (2,537m) look southwest toward the 4,478m summit, any cloud band sitting at 3,200m–4,200m blocks the upper pyramid in both the sky and the water reflection.',
          },
          {
            bold: 'Rule 3 — Seasonal Lake Thaw Window (Mid-June to Late October):',
            text: 'Sitting between 2,537m and 2,757m, Stellisee and Riffelsee freeze solid in late October/November and remain buried under winter snowpack until mid-to-late June. In early June, expect dramatic half-melted turquoise ice floes.',
          },
        ],
        proTip: {
          label: 'The Lower Riffelsee Trick',
          text: 'Never leave Rotenboden disappointed if the main Riffelsee is rippled! Walk 100 meters further down the path toward Riffelberg to the smaller second pond ("Lower Riffelsee"). Because it is smaller and tucked behind a low moraine lip, it remains mirror-flat in winds up to 18–20 km/h.',
        },
      },
      {
        id: 'sunnegga-vs-rotenboden-timing',
        heading: '2. Why Morning (07:15–09:30 CET) Is Crucial for Lake Reflections',
        paragraphs: [
          'In high alpine valleys, wind speed follows a strict daily rhythm. Overnight radiative cooling stabilizes the air mass, leaving the lakes dead calm at dawn. Once the morning sun heats the Mattertal rock walls around 10:00 CET, thermal valley breezes (anabatic winds) begin blowing upslope at 15–25 km/h—rippling the lakes just as afternoon cumulus clouds start forming on the Hörnli Ridge.',
          'Because the Gornergrat Bahn cogwheel train departs Zermatt at 07:00 CET in summer, you can step off at Rotenboden at 07:28 CET and stand at Riffelsee by 07:33 CET in dead-calm air with golden morning light on the East Face.',
        ],
      },
      {
        id: 'five-lakes-hike-strategy',
        heading: '3. Sunnegga & The 5-Lakes Hike (5-Seenweg) Strategy',
        paragraphs: [
          'If you are hiking the famous 5-Seenweg (Stellisee → Grindjisee → Grünsee → Moosjisee → Leisee, 9.8 km, ~2.5 hours), always start at the top (Blauherd, 2,571m) as soon as the gondola opens so you reach Stellisee first while the water is still calm. Even if a midday breeze picks up later on your hike, Grindjisee (2,334m) is sheltered by tall larch trees that block the wind and preserve a reflection well into the afternoon.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are Riffelsee Matterhorn reflection conditions good today?',
        answer:
          'Check our live Riffelsee & Stellisee Reflection Diagnostic card at the top of this page! Optimal mirror reflections require a live Visibility Score of 7–10/10 combined with surface wind speeds under 12 km/h during the ice-free summer/autumn window (mid-June through October).',
      },
      {
        question: 'Which is better for seeing the Matterhorn reflection: Riffelsee or Stellisee?',
        answer:
          'Riffelsee (2,757m, reached via the Gornergrat train to Rotenboden + a 5-minute walk) offers the closest, largest Matterhorn reflection and can be reached earlier in the morning (07:30 CET) when wind is calmest. Stellisee (2,537m, reached via Sunnegga–Blauherd + a 20-minute walk) offers iconic foreground boulders and is the starting point of the 5-Lakes Hike.',
      },
      {
        question: 'Is Riffelsee frozen in May, June, or November?',
        answer:
          'Yes. At 2,757 meters, Riffelsee is frozen and covered in snow from November through early June (part of the Gornergrat winter ski/snowshoe area). Partial turquoise ice melt usually occurs between June 10 and June 25, with full liquid mirror reflections available from late June through late October.',
      },
      {
        question: 'What should I do if Riffelsee is too windy for a reflection?',
        answer:
          'First, walk 100 meters west past the main Riffelsee basin to the smaller "Lower Riffelsee" pond, which sits in a sheltered hollow and often stays mirror-smooth when the main lake is choppy. Alternatively, attach a 6-stop or 10-stop ND filter and shoot a 15-to-30-second long exposure to smooth the water ripples into a misty reflection.',
      },
    ],
    relatedGuideSlugs: [
      'best-matterhorn-photo-viewpoints',
      'best-time-to-see-matterhorn',
      'gornergrat-vs-glacier-paradise',
    ],
  },
  {
    slug: 'zermatt-village',
    telemetryKey: 'gornergrat',
    defaultWebcamId: 'kirchbruecke',
    targetKeyword: 'Matterhorn view from Zermatt village Kirchbrücke',
    name: 'Zermatt Village (Kirchbrücke & Riedweg)',
    shortName: 'Zermatt Village',
    title: 'Can You See the Matterhorn from Zermatt Village Today? Live Kirchbrücke Visibility & Webcam',
    seoTitle:
      'Can You See the Matterhorn from Zermatt Village Today? | Kirchbrücke Viewpoint & Live Webcam',
    description:
      'Check real-time Matterhorn visibility from Zermatt village (Kirchbrücke bridge & Riedweg viewpoint). Live webcam feed, sunrise alpenglow timing, and valley fog conditions with zero lift tickets required.',
    elevationLabel: '1,608 m – 1,620 m',
    elevationMeters: 1608,
    coordinatesLabel: '46.0189° N, 7.7469° E',
    latitude: 46.0189,
    longitude: 7.7469,
    aspectLabel: 'North-East Ridge & East Face Valley Framing',
    transportSummary: '5-minute walk from Zermatt Bahnhof / Church Square (No Ticket Required)',
    journeyTime: '0 – 10 minutes walking (Free public viewpoint)',
    firstDepartureLabel: 'Open 24/7 (Public bridge & walking trails)',
    bestTimeWindow: '20 mins before sunrise – 08:30 CET (Morning Alpenglow & Still Air)',
    updatedAt: '2026-10-27',
    heroStat: {
      label: 'Ticket Cost',
      value: 'CHF 0 (Free)',
      detail: 'Public bridge & trail viewpoints accessible 24/7 without mountain railways',
    },
    quickFacts: [
      {
        label: 'Best Vantage',
        value: 'Kirchbrücke Bridge',
        detail: 'Direct line over Mattervispa river towards the East Face',
      },
      {
        label: 'Elevated Spot',
        value: 'Riedweg / Mürini',
        detail: '10-min uphill walk above chalet rooftops with fewer crowds',
      },
      {
        label: 'Sunrise Golden Hour',
        value: 'Summit Alpenglow',
        detail: 'Tip ignites pink and orange ~15-20 mins before valley sunrise',
      },
      {
        label: 'Valley Fog Risk',
        value: 'Check Cloud Base',
        detail: 'Low fog (<2,000m) obscures village views even if peaks are clear',
      },
    ],
    keyTakeaways: [
      'Kirchbrücke (Church Bridge) is Zermatt’s premier free viewpoint: no mountain railway tickets (CHF 90–220+) needed, accessible 24/7 right in the heart of town.',
      'For the famous "Golden Horn" alpenglow, arrive on the bridge 20–30 minutes before official sunrise time; the highest 200 meters of the peak catch the morning light first.',
      'If Kirchbrücke is crowded with photographers, walk 10 minutes uphill towards Riedweg / Mürini for a breathtaking perspective looking over traditional Valais wooden chalets.',
      'Check our live Low Cloud diagnostic above: if low-level valley fog (<1,800m) settles over the village, the Matterhorn may be invisible from Kirchbrücke while basking in brilliant sunshine up at Gornergrat (3,089m) or Glacier Paradise (3,883m).',
    ],
    comparisonTable: {
      caption: 'Zermatt Village Public Viewpoints Comparison',
      headers: [
        'Village Vantage Point',
        'Elevation',
        'Walk Time from Train Station',
        'Best For & Framing',
      ],
      rows: [
        [
          'Kirchbrücke (Church Bridge)',
          '1,608 m',
          '8 mins walk',
          'Classic postcard shot framed by the rushing Mattervispa river; world-famous sunrise alpenglow gathering spot.',
        ],
        [
          'Riedweg / Mürini Hillside',
          '1,660 m',
          '15 mins walk (gentle uphill)',
          'Elevated panorama showing historic weathered larch wood chalets leading the eye to the Matterhorn.',
        ],
        [
          'Hohbalmen Lower Meadow',
          '1,750 m',
          '25 mins walk',
          'Peaceful pasture edge offering an uncluttered direct line-of-sight above village electric e-taxis.',
        ],
        [
          'Kirchplatz / Zermatterhof',
          '1,620 m',
          '6 mins walk',
          'Historic town center view next to St. Mauritius Church and Matterhorn Museum.',
        ],
      ],
    },
    sections: [
      {
        id: 'zermatt-village-matterhorn-views',
        heading: '1. Why Kirchbrücke is the Heart of Zermatt Photography',
        paragraphs: [
          'You do not always need to ride high-altitude cable cars or cogwheel trains to experience the majesty of the Matterhorn. Kirchbrücke (the Church Bridge), spanning the glacier-fed Mattervispa river, offers an iconic sightline straight down the valley directly to the mountain’s jagged East Face and Hörnli Ridge.',
          'Because the bridge is fully accessible 24 hours a day and completely free of charge, it serves as the ultimate morning test: if the summit is crisp from Kirchbrücke at dawn, it is time to head to the mountain stations.',
        ],
        bulletPoints: [
          {
            bold: 'Morning Alpenglow Spectacle:',
            text: 'Because the Matterhorn faces East, sunrise hits the summit pyramid while the village below remains in shadow. The tip glows fiery amber and soft magenta for roughly 15 minutes.',
          },
          {
            bold: 'River Foreground Reflection:',
            text: 'The glacial waters of the Mattervispa river provide dynamic moving water in the foreground, creating a classic leading line directly towards the peak.',
          },
          {
            bold: 'Avoid The Bridge Crowds:',
            text: 'On clear mornings, dozens of tripods line the Kirchbrücke railing. For a tranquil alternative, continue walking 10 minutes uphill towards Riedweg / Mürini for an elevated vista with wooden chalet roofs.',
          },
        ],
        proTip: {
          label: 'The Low Fog Inversion Rule',
          text: 'If Zermatt village is shrouded in cold gray fog, do not give up! Check our live score: when low cloud cover is high but mid/high clouds are zero, high viewpoints like Gornergrat (3,089m) and Glacier Paradise (3,883m) stand above the clouds under pure blue skies.',
        },
      },
      {
        id: 'sunrise-timing-and-tips',
        heading: '2. Best Timing & Photography Tips for Village Views',
        paragraphs: [
          'Arrive at Kirchbrücke or Riedweg at least 20 minutes before official sunrise. The first light does not appear at ground level; it touches the highest needle tip of the Matterhorn (4,478m) first, slowly descending down the rock face.',
          'In winter, the village view is blanketed in snow with smoking chalet chimneys. In summer and autumn, golden larches on the surrounding valley slopes add vibrant contrast to the gray gneiss pyramid.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you see the Matterhorn from Zermatt village?',
        answer:
          'Yes! The Matterhorn is clearly visible from numerous public spots in Zermatt village, most famously from Kirchbrücke (the Church Bridge over the Mattervispa river) and the uphill Riedweg / Mürini walking path, completely free of charge.',
      },
      {
        question: 'What is the best free viewpoint for the Matterhorn in Zermatt?',
        answer:
          'Kirchbrücke is the most famous free spot for watching the sunrise alpenglow. For a panoramic view looking over traditional chalet rooftops with fewer crowds, walk 10–15 minutes up the Riedweg path.',
      },
      {
        question: 'What time is sunrise at Kirchbrücke for the Matterhorn alpenglow?',
        answer:
          'In summer (June–July), sunrise light touches the summit around 05:30–05:50 CET. In autumn (September–October), it occurs between 06:45 and 07:30 CET. In winter, around 07:45–08:15 CET. Always arrive 20 minutes before official sunrise.',
      },
      {
        question: 'What if it is foggy in Zermatt village?',
        answer:
          'Low valley fog (stratus) often forms over Zermatt village at 1,600m while the peaks are completely clear. Check our live high-altitude scores: if Gornergrat (3,089m) or Glacier Paradise (3,883m) score 8–10/10, ride the train or cable car up to emerge above the clouds.',
      },
    ],
    relatedGuideSlugs: [
      'best-matterhorn-photo-viewpoints',
      'best-time-to-see-matterhorn',
      'gornergrat-vs-glacier-paradise',
    ],
  },
];

export function getViewpointPageBySlug(
  slug: string
): ViewpointPageConfig | undefined {
  return VIEWPOINT_PAGES.find((vp) => vp.slug === slug);
}

export function getLiveForecastForViewpointPage(
  page: ViewpointPageConfig,
  data: VisibilityApiResponse
): ViewpointForecastData {
  return data.viewpoints[page.telemetryKey];
}

export type GuideCategory =
  | 'Viewpoints'
  | 'Climatology'
  | 'Bad Weather'
  | 'Photography'
  | 'Meteorology'
  | 'Day Trips'
  | 'Winter & Seasons';

export interface GuideImage {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface GuideComparisonTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: GuideImage;
  bulletPoints?: {
    bold: string;
    text: string;
  }[];
  proTip?: {
    label: string;
    text: string;
  };
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  description: string;
  category: GuideCategory;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  coverImage: GuideImage;
  heroStat: {
    label: string;
    value: string;
    detail: string;
  };
  keyTakeaways: string[];
  comparisonTable?: GuideComparisonTable;
  embeddedWidget?:
    | 'historical-table'
    | 'contingency-plans'
    | 'scoring-formula'
    | 'trains-comparison';
  sections: GuideSection[];
  faqs: GuideFaq[];
}

export const GUIDES: GuideArticle[] = [
  {
    slug: 'gornergrat-vs-glacier-paradise',
    title: 'Gornergrat vs. Matterhorn Glacier Paradise: Which Viewpoint is Better?',
    shortTitle: 'Gornergrat vs. Glacier Paradise',
    seoTitle:
      'Gornergrat vs. Matterhorn Glacier Paradise (2026 Comparison) | Altitude, Views & Weather',
    description:
      'Compare Gornergrat (3,089m East Face) and Matterhorn Glacier Paradise (3,883m South/Breithorn Aspect) by Matterhorn angle, cloud resilience, ticket cost, and altitude.',
    category: 'Viewpoints',
    publishedAt: '2026-01-15',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 6,
    coverImage: {
      src: '/guides/gornergrat-vs-glacier-paradise.jpg',
      alt: 'Observation terrace at Gornergrat (3,089m) overlooking the Gorner Glacier and the classic East Face pyramid of the Matterhorn',
      caption: 'The classic "Toblerone" East Face seen from the Gornergrat observation ridge (3,089m) overlooking the vast Gorner Glacier.',
    },
    heroStat: {
      label: 'Elevation Delta',
      value: '794 m',
      detail: 'Gornergrat (3,089m) vs. Klein Matterhorn (3,883m)',
    },
    keyTakeaways: [
      'Gornergrat (3,089m) delivers the iconic pyramidal East/Northeast Toblerone silhouette and is far less prone to high-wind cable car closures.',
      'Matterhorn Glacier Paradise (3,883m) puts you nearly 800m higher on the glacial plateau, showing the dramatic, unfamiliar Southern/Western profile.',
      'Because of localized lee-wave clouds and Föhn winds, one viewpoint often scores 8/10 while the other sits at 4/10—always compare both live scores before buying tickets.',
      'If you only do one mountain excursion solely to photograph the classic Matterhorn shape, choose Gornergrat via the cogwheel railway.',
    ],
    comparisonTable: {
      caption: 'Side-by-Side Telemetry & Excursion Comparison',
      headers: [
        'Feature',
        'Gornergrat (3,089 m)',
        'Matterhorn Glacier Paradise (3,883 m)',
      ],
      rows: [
        [
          'Matterhorn Aspect',
          'Classic East & Hörnli Ridge ("Toblerone" profile)',
          'Steep South & West Italian/Furgg Face',
        ],
        [
          'Transport Mode',
          'Open-view Cogwheel Train (33 mins from Zermatt)',
          '3S Gondola & Cableway network via Furi / Trockener Steg (45 mins)',
        ],
        [
          'Wind & Storm Resilience',
          'High — Cogwheel rail operates in strong winds',
          'Moderate — 3,883m cables close first during Föhn gales (>50 km/h)',
        ],
        [
          'Best Lighting Window',
          '06:00–11:00 CET (Direct morning alpenglow on East face)',
          '11:00–16:00 CET (High midday & afternoon western illumination)',
        ],
        [
          'Lake Reflections on Route',
          'Yes — Riffelsee (Rotenboden stop, June–October)',
          'Optional detour via Schwarzsee (2,583m)',
        ],
        [
          'Altitude Sickness Risk',
          'Low to Moderate (3,089m)',
          'High for rapid ascents (3,883m thin air)',
        ],
      ],
    },
    sections: [
      {
        id: 'matterhorn-angle',
        heading: '1. The Matterhorn Silhouette: Classic Pyramid vs. High-Alpine Wall',
        paragraphs: [
          'First-time visitors to Zermatt are often surprised to learn that the Matterhorn looks like a completely different mountain from Matterhorn Glacier Paradise (Klein Matterhorn) than it does from the village or Gornergrat.',
          'From Gornergrat at 3,089 meters, you look directly across the Gorner Glacier toward the East and North faces divided by the razor-sharp Hörnli Ridge. This is the unmistakable hooked pyramid famous worldwide. From Glacier Paradise at 3,883 meters, you stand much closer to the southern border with Italy, viewing the Matterhorn from the side—where it appears broader, bulkier, and less curved.',
        ],
        proTip: {
          label: 'Photographer Verdict',
          text: 'For the classic postcard shot—especially paired with the mirror reflection at Riffelsee (Rotenboden station)—Gornergrat wins hands down.',
        },
      },
      {
        id: 'weather-differences',
        heading: '2. Why Visibility Scores Differ Between 3,089m and 3,883m',
        paragraphs: [
          'A core reason we built a dual-viewpoint scoring engine on isthematterhornvisible.com is that Gornergrat and Glacier Paradise sit in different atmospheric regimes.',
          'When moist southerly Föhn air pushes up from Italy’s Val Tournenche, clouds spill over the Theodule Pass (3,300m) and envelop Klein Matterhorn (3,883m) first, while Gornergrat—sheltered further east—can remain in bright sunshine for another 2 to 3 hours. Conversely, during winter low-stratus valley inversions below 3,200 meters, Glacier Paradise rises completely above the sea of fog while lower sectors sit in gray mist.',
        ],
        bulletPoints: [
          {
            bold: 'Mid-Level Cloud Layer (3,000m–4,000m):',
            text: 'Directly intersects both summits and carries a 60% weight in our 1–10 visibility score.',
          },
          {
            bold: 'Föhn Gale Closures:',
            text: 'Southerly winds above 45–55 km/h frequently halt the Trockener Steg–Klein Matterhorn aerial cableway, whereas the Gornergrat Bahn cogwheel train runs on tracks.',
          },
        ],
      },
      {
        id: 'ticket-strategy',
        heading: '3. Ticket Strategy: Never Pre-Book Non-Refundable Summit Passes Weeks Ahead',
        paragraphs: [
          'Mountain railway tickets in Zermatt are expensive (often CHF 90 to CHF 220+ depending on season and Swiss Travel Pass / Half-Fare discounts), and neither viewpoint ever sells out of standard day capacity.',
          'Wait until the evening before—or the morning of your ascent—and check our live 1–10 AM/PM Visibility Index and Roundshot webcams. Only purchase your Gornergrat or Glacier Paradise ticket once you confirm a score of 7/10 or higher.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which side of the Gornergrat train has the best Matterhorn view?',
        answer:
          'Sit on the right-hand side (facing the direction of travel uphill from Zermatt). The Matterhorn dominates the right window almost the entire 33-minute climb past Riffelalp and Rotenboden.',
      },
      {
        question: 'Can I visit both Gornergrat and Glacier Paradise in one day?',
        answer:
          'Yes, using the Zermatt Peak Pass, though only recommended on days with a 9/10 or 10/10 all-day visibility forecast. Start with Gornergrat at 08:00 CET for morning light on the East face, then ride up to Glacier Paradise after 11:30 CET.',
      },
      {
        question: 'Is Gornergrat or Glacier Paradise better in cloudy weather?',
        answer:
          'If both viewpoints score 4/10 or lower, save your money and stay in the valley. If clouds are strictly low valley fog (<2,800m), Glacier Paradise (3,883m) is more likely to poke above the inversion layer.',
      },
    ],
  },
  {
    slug: 'best-time-to-see-matterhorn',
    title: 'Zermatt Weather by Month | Best Time to See the Matterhorn',
    shortTitle: 'Zermatt Weather by Month',
    seoTitle: 'Zermatt Weather by Month | Best Time to See the Matterhorn',
    description:
      'Zermatt weather in December, September, and May, and the best time of day to see the Matterhorn. December hits 89% clear skies.',
    category: 'Climatology',
    publishedAt: '2026-01-20',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 5,
    coverImage: {
      src: '/guides/best-time-to-see-matterhorn.jpg',
      alt: 'Dramatic sunrise alpenglow illuminating the sharp summit of the Matterhorn in pink and gold against a clear blue morning sky',
      caption: 'First light ignites the 4,478m Matterhorn summit in intense golden alpenglow—the Morning (AM) window is clearer 78% of the year.',
    },
    heroStat: {
      label: 'Peak Clarity Window',
      value: '06:00–10:30',
      detail: 'Morning (AM) block beats afternoon (PM) 78% of the year',
    },
    keyTakeaways: [
      'December (89%) and January (88%) statistically offer the highest daily probability of a crystal-clear Matterhorn summit window.',
      'June (48%) and July (52%) record the lowest full-day visibility due to afternoon solar heating and convective cumulus clouds.',
      'Regardless of season, the 06:00–11:00 CET Morning (AM) window is dramatically clearer than the 12:00–18:00 CET Afternoon (PM) block.',
      'September and October ("Golden Autumn") provide the best balance of snow-free hiking trails and 72%–79% clear-sky reliability.',
    ],
    embeddedWidget: 'historical-table',
    sections: [
      {
        id: 'morning-vs-afternoon',
        heading: '1. The Golden Rule of Zermatt: Why Morning (AM) Always Beats Afternoon (PM)',
        paragraphs: [
          'If you take only one piece of advice before visiting Zermatt, make it this: set an early alarm. Throughout spring, summer, and early autumn, the Matterhorn regularly wakes up against a spotless cobalt-blue sky at 06:30 CET, only to be completely swallowed by boiling cumulus clouds by 13:30 CET.',
          'As soon as the sun heats the dark gneiss and schist rock walls of the Mattertal valley, warm air rises up the mountain flanks (anabatic thermal winds). When that rising air crosses the 3,000-meter freezing level, moisture condenses directly onto the summit ridges. Our dashboard separates every day into a 6-hour Morning (AM) and Afternoon (PM) score specifically so you don’t waste a clear morning sleeping in.',
        ],
        proTip: {
          label: 'First Train Strategy',
          text: 'Book the 07:00 or 07:36 CET Gornergrat cogwheel departure in summer to reach Riffelsee before thermal clouds and daytime breezes ripple the water.',
        },
      },
      {
        id: 'seasonal-breakdown',
        heading: '2. Season-by-Season Visibility Breakdown',
        paragraphs: [
          'Travelers often assume summer has the "best weather," but in high-altitude meteorology, cold air holds far less moisture and produces minimal convective turbulence.',
        ],
        bulletPoints: [
          {
            bold: 'Winter (Nov–Feb • 84%–89% Clarity):',
            text: 'Cold, stable high-pressure ridges create razor-sharp visibility and zero thermal cloud buildup. Even in the afternoon, skies often stay 10/10 clear.',
          },
          {
            bold: 'Late Spring & Early Summer (May–July • 48%–58% Clarity):',
            text: 'Melting snowpack provides abundant valley moisture that fuels rapid midday cloud towers. Early morning viewing is mandatory.',
          },
          {
            bold: 'Autumn Shoulder (Sep–Oct • 72%–79% Clarity):',
            text: 'Cooler nights suppress afternoon thermals while golden larch trees frame the valley—arguably the best all-around photography season.',
          },
        ],
      },
      {
        id: 'zermatt-weather-december',
        heading: 'Zermatt Weather in December',
        paragraphs: [
          'December is the clearest month on the 30-year record, with an 89% chance of a clear Matterhorn summit on a given day. Cold, stable air produces almost no afternoon cumulus, so both the morning and the afternoon stay open.',
          'Snow covers the village and the lakes are frozen, so this is a viewing and skiing month rather than a reflection month. For Christmas week, sleighs, and the village schedule, see the [Christmas in Zermatt guide](/guides/christmas-in-zermatt-matterhorn). The month on its own page is [Zermatt Weather in December](/guides/zermatt-weather-december).',
        ],
      },
      {
        id: 'zermatt-weather-september',
        heading: 'Zermatt Weather in September',
        paragraphs: [
          'September clears on about 72% of days. Cooler nights shut down the afternoon thermals that wreck June and July, and the larch forests turn gold around the east face.',
          'Hiking trails are still snow-free and Riffelsee is liquid, so this is the month for a Matterhorn reflection from Sunnegga or Rotenboden. Start at sunrise. A breeze often ripples the lake by early afternoon even when the summit stays clear. The month on its own page is [Zermatt Weather in September](/guides/zermatt-weather-september).',
        ],
      },
      {
        id: 'zermatt-weather-may',
        heading: 'Zermatt Weather in May',
        paragraphs: [
          'May is a shoulder month. Clear-sky odds sit in the late-spring range of 48–58%, and the reliable window is the morning. Moisture from melting snow feeds cumulus by early afternoon.',
          'Riffelsee is still frozen in May, so leave the reflection shot for late June. Use a clear morning for Gornergrat or the village bridge, and treat the afternoon as a valley day. The month on its own page is [Zermatt Weather in May](/guides/zermatt-weather-may).',
        ],
      },
      {
        id: 'how-many-days',
        heading: '3. How Many Days Should You Spend in Zermatt to Guarantee a View?',
        paragraphs: [
          'Based on 30-year Zermatt probability curves, a 1-night stay in July gives you roughly a coin-flip chance of a clean view. Staying 3 full mornings raises your cumulative probability of catching at least one ≥8/10 viewing window to over 88% in summer and 98% in autumn/winter.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the single best month to see the Matterhorn without clouds?',
        answer:
          'December (89%) and January (88%) have the highest statistical clear-sky probability. For hikers who want snow-free trails and high clarity, late September and October (72%–79%) are best.',
      },
      {
        question: 'What time does the sun hit the Matterhorn at sunrise?',
        answer:
          'First light touches the very tip of the 4,478m East face roughly 5 to 10 minutes before official Zermatt sunrise—around 05:30 CEST in June, 06:50 CEST in September, and 08:00 CET in December.',
      },
    ],
  },
  {
    slug: 'zermatt-cloudy-rainy-day-guide',
    title: 'What to Do in Zermatt When the Matterhorn is Hid in Clouds (Bad Weather Guide)',
    shortTitle: 'Cloudy & Rainy Day Guide',
    seoTitle:
      'What to Do in Zermatt in Bad Weather or Clouds | Save YourCHF 100+ Lift Ticket',
    description:
      'Is the Matterhorn visibility score 4/10 or lower today? Skip the CHF 100+ whiteout cable car ride and explore Zermatt’s best rainy-day activities, gorges, museums, and spas.',
    category: 'Bad Weather',
    publishedAt: '2026-02-02',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 5,
    coverImage: {
      src: '/guides/zermatt-cloudy-rainy-day-guide.jpg',
      alt: 'Dramatic view of the Matterhorn mountain partially engulfed and shrouded in thick stormy clouds and alpine mist in Zermatt',
      caption: 'When visibility scores drop to 1–4/10, thick mid-level storm clouds and fog swallow the 4,478m Matterhorn summit.',
    },
    heroStat: {
      label: 'Ticket Savings',
      value: 'CHF 110+',
      detail: 'Per person saved by skipping a 1/10 whiteout summit ride',
    },
    keyTakeaways: [
      'Never buy a summit pass to Gornergrat or Glacier Paradise when our live visibility index is ≤ 4/10—you will only see the inside of a cloud.',
      'Check if the cloud cover is a "Low Valley Inversion": occasionally Zermatt (1,608m) is overcast while 3,089m+ is sunny (our atmospheric layer cards reveal this immediately).',
      'Gorner Gorge (Gornerschlucht) actually looks more dramatic in light rain or overcast light thanks to roaring glacial waterfalls and vivid green serpentinite rock.',
      'Zermatlantis (the subterranean Matterhorn Museum) and village alpine day spas turn a socked-in day into a highlight.',
    ],
    embeddedWidget: 'contingency-plans',
    sections: [
      {
        id: 'check-inversion-first',
        heading: '1. Wait: Is It Truly Sock-In Weather, or Just a Low Valley Cloud Inversion?',
        paragraphs: [
          'Before writing off the mountain completely, look upward—or check the 3-Layer Cloud Breakdown on our main dashboard. If Low Cloud (2,000m) is 90% but Mid Cloud (3,000m) and High Cloud (5,000m) are under 15%, Zermatt village is trapped beneath a temperature inversion.',
          'In that specific scenario, riding the cogwheel train up to Gornergrat (3,089m) or the gondola to Glacier Paradise (3,883m) will launch you right through the cloud ceiling into blazing sunshine above a sea of white fog. Confirm on our embedded live Roundshot webcams before boarding.',
        ],
        proTip: {
          label: 'Webcam Verification',
          text: 'Always cross-check our Mid-Level Cloud % with the live Gornergrat 3,100m webcam. If both Mid Cloud > 75% and the webcam is white, stay in the valley.',
        },
      },
      {
        id: 'valley-alternatives',
        heading: '2. Best Valley Experiences When Visibility is 1/10 to 4/10',
        paragraphs: [
          'When a true synoptic storm or dense mid-altitude stratus deck blankets the Pennine Alps, save your mountain budget for tomorrow’s clear window and pivot to these valley plans:',
        ],
        bulletPoints: [
          {
            bold: 'Zermatlantis (Matterhorn Museum):',
            text: 'Located underground beneath Kirchplatz. Houses the original snapped rope from the tragic 1865 first ascent and reconstructed 19th-century alpine houses.',
          },
          {
            bold: 'Gorner Gorge (Gornerschlucht):',
            text: 'A 20-minute flat walk south of the village. Wooden walkways cling to narrow serpentinite cliffs above churning turquoise glacial water.',
          },
          {
            bold: 'Historic Hinterdorf Timber Quarter:',
            text: 'Wander the narrow lanes behind Bahnhofstrasse to photograph 500-year-old larchwood barns (Gädi) raised on stone mouse-slabs—best shot in soft, diffused overcast light.',
          },
          {
            bold: 'Alpine Thermal Spas & Long Fondue Lunch:',
            text: 'Book a day-spa pass (such as SchlossSpa or resort vitality pools) followed by black-truffle or Valais herb cheese fondue in the village.',
          },
        ],
      },
      {
        id: 'day-trip-escape',
        heading: '3. The "Microclimate Escape" by Train (45–70 Minutes Away)',
        paragraphs: [
          'Because the 4,000-meter peaks around Zermatt trap southerly moisture, the main Rhône Valley (Visp, Brig, Sion) is frequently dry and sunny even when Zermatt is raining. With a Swiss Travel Pass, you can ride down to Brig in 1 hour to visit the Stockalper Palace or soak in the outdoor thermal baths at Brigerbad.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I get a refund on my Gornergrat or Glacier Paradise ticket if it is cloudy?',
        answer:
          'No. Zermatt Bergbahnen and the Gornergrat Bahn do not refund tickets due to poor visibility or cloud cover once purchased, which is why you should always check live telemetry right before buying at the station.',
      },
      {
        question: 'Is Gorner Gorge open when it rains?',
        answer:
          'Yes, throughout the summer and autumn season (typically May through October). Wear a waterproof jacket and grippy shoes, as waterfall spray makes the wooden boardwalks damp.',
      },
    ],
  },
  {
    slug: 'best-matterhorn-photo-viewpoints',
    title: 'Best Matterhorn Photo Viewpoints & Sunrise Spots in Zermatt',
    shortTitle: 'Best Photo & Sunrise Spots',
    seoTitle:
      '7 Best Matterhorn Photo Spots in Zermatt | Sunrise, Lake Reflections & Coordinates',
    description:
      'Exact locations, walking times, and optimal sun angles for Zermatt’s best Matterhorn photo spots: Kirchbrücke sunrise, Stellisee, Riffelsee, Findeln, and Sunnegga.',
    category: 'Photography',
    publishedAt: '2026-02-10',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 6,
    coverImage: {
      src: '/guides/best-matterhorn-photo-viewpoints.jpg',
      alt: 'Crystal clear mirror reflection of the iconic Matterhorn mountain in the calm waters of Riffelsee lake near Rotenboden',
      caption: 'The inverted Matterhorn pyramid mirrored on the glassy surface of Riffelsee (2,757m) during early morning calm wind conditions.',
    },
    heroStat: {
      label: 'Top Reflection Lakes',
      value: '2,537m & 2,757m',
      detail: 'Stellisee (Sunnegga-Blauherd) & Riffelsee (Rotenboden)',
    },
    keyTakeaways: [
      'Kirchbrücke (the village bridge over the Mattervispa river) is the #1 zero-cost sunrise spot for capturing the golden alpenglow tip.',
      'Stellisee (2,537m) frames the Matterhorn with foreground boulders and grassy banks; Riffelsee (2,757m) delivers the closest, most dramatic mirror reflection.',
      'Mirror reflections require wind speeds under 12 km/h—check the Surface Wind metric on our dashboard before hiking to a lake.',
      'For village rooftops + Matterhorn in one frame, walk 10 minutes uphill to the Riedweg / Mürini viewpoint.',
    ],
    comparisonTable: {
      caption: 'Zermatt Photography Viewpoints Quick Reference',
      headers: [
        'Viewpoint',
        'Elevation',
        'Access from Zermatt',
        'Best Time & Light',
      ],
      rows: [
        [
          'Kirchbrücke (Church Bridge)',
          '1,615 m',
          '5-min walk from train station (Free)',
          '15 mins before sunrise (Golden peak alpenglow)',
        ],
        [
          'Mürini / Riedweg Overlook',
          '1,710 m',
          '12-min uphill walk via Riedstrasse (Free)',
          'Blue hour & sunrise (Village chalets + peak)',
        ],
        [
          'Riffelsee (Rotenboden)',
          '2,757 m',
          '28-min Gornergrat train to Rotenboden + 5-min walk',
          '07:30–10:00 CET (Calm water mirror reflection)',
        ],
        [
          'Stellisee (Blauherd)',
          '2,537 m',
          'Sunnegga funicular + Blauherd gondola + 20-min walk',
          '08:30–11:00 CET or sunset alpenglow',
        ],
        [
          'Findeln & Chez Vrony Trail',
          '2,050 m',
          '35-min walk down from Sunnegga',
          'Mid-morning (Wooden barns & alpine meadows)',
        ],
      ],
    },
    sections: [
      {
        id: 'village-sunrise',
        heading: '1. Best Zero-Ticket Village Viewpoints: Kirchbrücke & Mürini',
        paragraphs: [
          'You don’t need a mountain lift pass to capture an award-winning shot of the Matterhorn. Because the sun rises in the east, its first rays strike the tip of the Hörnli and East faces while Zermatt village still lies in cool blue shadow.',
          'Stand on the Kirchbrücke bridge over the Mattervispa river 20 minutes before official sunrise to watch the summit ignite from pale pink to fiery orange. If you want to avoid the tripod crowd on the bridge, climb 10 minutes up the paved path toward Riedweg (Mürini viewpoint), where wooden chalet roofs lead your eye straight toward the peak.',
        ],
        proTip: {
          label: 'Sunrise Check',
          text: 'Before leaving your hotel at 05:30, glance at our Gornergrat Morning (AM) score and High-Cloud (5,000m) metric. Thin high cirrus (20%–35%) actually enhances sunrise color, while Mid Cloud > 50% blocks the alpenglow.',
        },
      },
      {
        id: 'mirror-lakes',
        heading: '2. Stellisee vs. Riffelsee: Which Mirror Lake Should You Choose?',
        image: {
          src: '/guides/riffelsee-matterhorn-reflection.jpg',
          alt: 'Still water mirror reflection of the Matterhorn in Riffelsee at 2,757 meters',
          caption: 'Early morning glassy conditions at Riffelsee before mountain thermal winds ripple the surface.',
        },
        paragraphs: [
          'Zermatt has two world-famous alpine lakes that reflect the Matterhorn like glass—provided two conditions are met: the lake is thawed (typically mid-June through mid-October) and surface wind is calm (<12 km/h).',
        ],
        bulletPoints: [
          {
            bold: 'Riffelsee (2,757m via Rotenboden on the Gornergrat Line):',
            text: 'Requires only a 5-minute walk from Rotenboden station. Because the Gornergrat train starts running around 07:00 CET, you can reach Riffelsee much earlier in the morning before wind and afternoon clouds arrive. Note: walk 100 meters further to the smaller second pond ("Lower Riffelsee") for an undisturbed reflection if the main shore is breezy.',
          },
          {
            bold: 'Stellisee (2,537m via Sunnegga–Blauherd):',
            text: 'Features iconic partially submerged rocks in the foreground and a slightly wider valley perspective. Because the Blauherd gondola opens later (typically 08:00–08:30), aim for days when our Wind Speed card shows <10 km/h.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'When are Riffelsee and Stellisee frozen and covered in snow?',
        answer:
          'Both lakes sit above 2,500 meters and are normally frozen under snow from November through early June. Mirror water reflections are only possible from mid/late June through October.',
      },
      {
        question: 'Why was there no reflection at Stellisee even on a sunny day?',
        answer:
          'Even a 15–20 km/h breeze creates surface ripples that blur the reflection. Always check the Wind Speed card on our dashboard and walk to the sheltered leeward shore or the smaller secondary pond at Riffelsee.',
      },
    ],
  },
  {
    slug: 'matterhorn-banner-cloud-fohn-wind',
    title: 'Why Does the Matterhorn Always Have a Cloud on Top? (Banner Clouds & Föhn Winds)',
    shortTitle: 'Banner Clouds & Föhn Physics',
    seoTitle:
      'Why the Matterhorn Has a Cloud on Top | Banner Clouds, Föhn Winds & Visibility Scoring',
    description:
      'Learn the atmospheric physics behind the Matterhorn’s famous lee-wave "banner cloud," how southerly Föhn winds form it on otherwise clear days, and how we score it.',
    category: 'Meteorology',
    publishedAt: '2026-02-18',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 5,
    coverImage: {
      src: '/guides/matterhorn-banner-cloud-fohn-wind.jpg',
      alt: 'Isolated Matterhorn peak under azure sky with a distinctive white banner cloud streaming off its summit in Föhn winds',
      caption: 'A classic lee-wave banner cloud streaming from the Matterhorn summit under clear blue skies due to aerodynamic pressure drop.',
    },
    heroStat: {
      label: 'Summit Elevation',
      value: '4,478 m',
      detail: 'Isolated 4-sided pyramid triggers lee-side pressure drops',
    },
    keyTakeaways: [
      'The Matterhorn’s isolated pyramidal geometry acts like an aerodynamic wing in high-altitude airflow, creating a low-pressure vortex on its downwind (leeward) side.',
      'Air sucked upward into this leeward vortex cools adiabatically, condensing invisible moisture into a stationary "banner cloud" attached to the summit.',
      'Standard weather apps report "Sunny / 0% Rain" in Zermatt (1,608m) even when a dense banner cloud hides the top 500m of the peak.',
      'Our scoring algorithm specifically penalizes mid-level (3,000m) moisture and southerly Föhn wind vectors (180°–270° ≥ 35 km/h) to predict banner clouds.',
    ],
    embeddedWidget: 'scoring-formula',
    sections: [
      {
        id: 'banner-cloud-physics',
        heading: '1. The Physics of the Matterhorn Banner Cloud',
        paragraphs: [
          'Every visitor to Zermatt eventually witnesses a baffling sight: the entire sky over Switzerland is deep blue without a single cloud—except for a thick white plume streaming horizontally off the Matterhorn’s summit like smoke from a volcano.',
          'Unlike ordinary drifting clouds, a banner cloud is continuously born and dissolved in place. Because the Matterhorn stands as an isolated, steep-sided pyramid rising to 4,478 meters, winds striking its windward face are forced sharply around and over the ridges. On the sheltered leeward (downwind) face, aerodynamic separation creates a pocket of markedly lower atmospheric pressure.',
          'Moist air from 500 to 800 meters lower down the mountain is drawn rapidly upward into this low-pressure wake. As that air rises and expands, its temperature drops below the dew point, flashing water vapor into liquid cloud droplets right against the lee face. A few hundred meters downwind, the air sinks, warms up, and the cloud vanishes back into clear air.',
        ],
        proTip: {
          label: 'How to Read a Banner Cloud',
          text: 'If the banner plume points north/northeast toward Zermatt, southerly winds from Italy are active and weather often deteriorates within 12–24 hours. If it streams south toward Italy, drier northerly air is holding.',
        },
      },
      {
        id: 'fohn-wind-effect',
        heading: '2. Why Standard Weather Apps Fail in Zermatt',
        paragraphs: [
          'Generic weather apps on your phone interpolate conditions for Zermatt village on the valley floor at 1,608 meters. At 1,608 meters, air is warm, dry, and often sheltered from upper-level winds.',
          'Meanwhile, almost 3,000 vertical meters higher at the summit, upper-tropospheric winds and mid-level humidity dictate whether the peak is clear. That is why isthematterhornvisible.com queries atmospheric layers directly at high-alpine vantage elevations (3,089m and 3,883m) and applies a dedicated Föhn Banner Risk penalty whenever southerly/southwesterly winds (180°–270°) exceed 35 km/h.',
        ],
        bulletPoints: [
          {
            bold: 'Mid-Level Cloud Cover (60% Weight):',
            text: 'Clouds at ~3,000m–4,000m sit directly in the horizontal line of sight between Gornergrat/Glacier Paradise and the 4,478m summit.',
          },
          {
            bold: 'Low-Level Cloud Cover (25% Weight):',
            text: 'Affects valley viewing from Kirchbrücke (~2,000m), though high viewpoints may occasionally look over it.',
          },
          {
            bold: 'High-Level Cirrus (15% Weight):',
            text: 'High ice-crystal clouds at 5,000m+ rarely block the summit silhouette, so our engine only applies a light penalty.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a banner cloud mean the Matterhorn is completely invisible?',
        answer:
          'Usually no—a classic lee-wave banner cloud trails off one side of the summit ridge like a flag, leaving the windward face and 70%–85% of the pyramid visible (typically a 6/10 or 7/10 "Partially Visible" score). However, strong southerly Föhn events can thicken into a "Föhn wall" that obscures the entire upper peak.',
      },
      {
        question: 'Why does the banner cloud disappear at night?',
        answer:
          'When daytime solar heating stops, thermal updrafts feeding valley moisture into the leeward vortex subside, often allowing the summit to clear around dusk and remain sharp through early morning.',
      },
    ],
  },
  {
    slug: 'zurich-geneva-to-zermatt-day-trip',
    title: 'Zurich to Zermatt Train | Times, Visp Change & Live Go/No-Go',
    shortTitle: 'Zurich to Zermatt Train',
    seoTitle: 'Zurich to Zermatt Train | Times, Visp Change & Live Go/No-Go',
    description:
      'Zurich to Zermatt train times (3h 14m), the Visp change, and a live Matterhorn go/no-go before you board. Geneva is 3h 45m.',
    category: 'Day Trips',
    publishedAt: '2026-03-01',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 6,
    coverImage: {
      src: '/guides/zurich-geneva-to-zermatt-day-trip.jpg',
      alt: 'Scenic red Swiss mountain train traveling along a curved alpine canyon railway towards Zermatt with snow peaks',
      caption: 'The Matterhorn Gotthard Bahn scenic railway winding through the Vispa Valley gorge on the final leg into Zermatt.',
    },
    heroStat: {
      label: 'Round-Trip Rail Time',
      value: '6.5 – 7.5 hrs',
      detail: '3h 14m each way from Zurich HB • 3h 45m from Geneva',
    },
    keyTakeaways: [
      'A Zermatt day trip from Zurich or Geneva requires 6.5 to 7.5 hours of total train travel—making it 100% worth it on a ≥8/10 clear day, and a costly regret on a ≤4/10 cloudy day.',
      'Because even a 06:30 CET departure from Zurich or Geneva gets you to Zermatt around 10:00 CET, your summit viewing window falls across late morning and early afternoon—so check BOTH our AM and PM scores before boarding.',
      'In summer (June–August), afternoon cumulus clouds often form by 13:00 CET; day-trippers must take the earliest morning SBB connection and head straight up Gornergrat upon arrival before exploring Zermatt village.',
      'If our live Matterhorn score is ≤5/10 when you wake up in Zurich or Geneva, use your Swiss Travel Pass or Saver Day Pass for a clearer region (e.g., Lucerne/Rigi, Bernese Oberland, or Montreux) and save Zermatt for a higher-scoring day.',
    ],
    comparisonTable: {
      caption: 'SBB Rail Logistics to Zermatt from Major Swiss Hubs',
      headers: [
        'Origin Station',
        'One-Way Time',
        'Transfer Hub',
        'Target Departure',
        'Zermatt Arrival',
      ],
      rows: [
        [
          'Zurich HB',
          '3h 14m',
          '1 change at Visp (7–9 min cross-platform)',
          '06:02 or 07:02 CET',
          '09:14 or 10:14 CET',
        ],
        [
          'Geneva Airport / Cornavin',
          '3h 45m',
          '1 change at Visp (IR90 to MGB cogwheel)',
          '05:50 or 06:24 CET',
          '09:51 or 10:14 CET',
        ],
        [
          'Bern',
          '2h 10m',
          '1 change at Visp (via Lötschberg Base Tunnel)',
          '07:07 or 08:07 CET',
          '09:14 or 10:14 CET',
        ],
        [
          'Basel SBB',
          '3h 12m',
          '1 change at Visp (or Bern + Visp)',
          '06:03 or 06:56 CET',
          '09:14 or 10:14 CET',
        ],
        [
          'Interlaken Ost',
          '2h 18m',
          '2 changes at Spiez & Visp',
          '07:00 or 08:00 CET',
          '09:14 or 10:14 CET',
        ],
      ],
    },
    sections: [
      {
        id: 'go-no-go-matrix',
        heading: '1. The 06:00 CET "Go / No-Go" Decision Rule Before You Board',
        paragraphs: [
          'The biggest mistake travelers make in Switzerland is booking non-refundable Zermatt mountain excursions weeks in advance for a single rigid day trip from Zurich or Geneva. Because Zermatt sits inside a deep southern alpine pocket along the Italian border, its weather is completely disconnected from northern Switzerland: it can be pouring rain in Zurich while the Matterhorn is 10/10 crystal clear—or sunny in Geneva while a southerly Föhn wall completely hides the Matterhorn.',
          'Check the live Gornergrat and Glacier Paradise AM/PM scores at the top of this page before leaving your hotel in Zurich or Geneva:',
        ],
        bulletPoints: [
          {
            bold: 'GO — Both AM & PM Scores are 8/10 to 10/10:',
            text: 'Board the train immediately. Stable high pressure is locked in across the Pennine Alps and you will enjoy unobstructed views all afternoon.',
          },
          {
            bold: 'EARLY-BIRD GO — AM is 8–10/10, but PM drops to 5–6/10:',
            text: 'Very common in May–August due to afternoon thermal clouds. Only go if you catch the 06:02 (Zurich) or 05:50/06:24 (Geneva) train and ride the Gornergrat railway immediately at 09:36/10:24 CET BEFORE eating lunch or walking the village.',
          },
          {
            bold: 'NO-GO — Both AM & PM Scores are ≤ 4/10:',
            text: 'Cancel or reschedule your Zermatt day trip. Spending 7 hours on a train and CHF 200+ to stare into gray fog at 3,089m is never worth it—use our 10-Day Forecast slider to pick the highest-scoring day of your itinerary.',
          },
        ],
        proTip: {
          label: 'The Visp Connection Secret',
          text: 'Don’t panic over the 7-minute transfer at Visp! SBB mainline trains arrive right next to the red Matterhorn Gotthard Bahn (MGB) narrow-gauge tracks on surface platforms 1–3. Sit on the LEFT side of the MGB train going uphill from Visp to Zermatt for the deepest canyon and glacier views.',
        },
      },
      {
        id: 'perfect-day-trip-itinerary',
        heading: '2. The Optimal 1-Day Zermatt Timeline (Summit First, Village Second)',
        paragraphs: [
          'Because clouds almost always build later in the day, reverse the typical tourist schedule. Never waste clear morning sky wandering Bahnhofstrasse shops or eating a long breakfast on arrival.',
          'When your train pulls into Zermatt Bahnhof at 09:14 or 10:14 CET, walk straight across the station square (60 meters) to the Gornergrat Bahn terminal. Ride the cogwheel train 33 minutes up to Gornergrat (3,089m) while the East Face is lit by morning sun. On your descent around noon, hop off one stop below the summit at Rotenboden (2,757m) to photograph the Matterhorn reflection in Riffelsee, then return to Zermatt village around 13:30 CET for a relaxed lunch, a walk across Kirchbrücke bridge, and the historic Hinterdorf wooden barns—activities that remain great even if afternoon banner clouds appear.',
        ],
      },
      {
        id: 'gornergrat-vs-glacier-daytrip',
        heading: '3. Gornergrat vs. Glacier Paradise on a Tight Day-Trip Clock',
        paragraphs: [
          'When visiting Zermatt on a day trip from Zurich or Geneva, Gornergrat is almost always the smarter choice over Matterhorn Glacier Paradise (3,883m). The Gornergrat cogwheel station sits directly across the street from the Zermatt SBB arrival platform—saving you the 15-minute walk or e-bus ride to the southern end of the village required for the Glacier Paradise gondola.',
          'Even more importantly, ascending from Zurich (408m) or Geneva (375m) straight to 3,883m at Glacier Paradise in a single morning represents a 3,500-meter altitude jump that frequently triggers headaches and dizziness, whereas Gornergrat (3,089m) is gentler and shows the classic Toblerone silhouette the entire ride up.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the Swiss Travel Pass cover the train from Zurich or Geneva to Zermatt?',
        answer:
          'Yes! The Swiss Travel Pass (and SBB Saver Day Pass) covers 100% of the journey from Zurich, Geneva, Basel, or Bern all the way into Zermatt village (including the Matterhorn Gotthard Bahn segment from Visp to Zermatt). It also gives you a 50% discount on the Gornergrat Bahn and Matterhorn Glacier Paradise mountain lifts.',
      },
      {
        question: 'Can I do a Zermatt day trip from Zurich or Geneva in winter?',
        answer:
          'Yes—in fact, November through February have the highest clear-sky probabilities of the year (84%–89%). Just remember that sunset is around 16:45 CET in December/January, so catching a 06:02 or 07:02 CET morning train is essential to maximize daylight.',
      },
      {
        question: 'What is the last train back from Zermatt to Zurich or Geneva?',
        answer:
          'Trains depart Zermatt every 30 to 60 minutes until roughly 20:37 CET (reaching Zurich HB around 00:05 and Geneva around 00:20). Most day-trippers take the 16:37, 17:37, or 18:37 CET departure after watching sunset alpenglow from Kirchbrücke.',
      },
    ],
  },
  {
    slug: 'christmas-in-zermatt-matterhorn',
    title: 'Christmas in Zermatt: Winter Magic, Cozy Chalets & Clear-Sky Matterhorn Views',
    shortTitle: 'Christmas in Zermatt Guide',
    seoTitle:
      'Christmas in Zermatt (2026) | Winter Magic, Cozy Chalets & Matterhorn Views',
    description:
      'Everything you need to know about celebrating Christmas in Zermatt: fairy-tale snow-covered chalets, 89% December clear-sky odds, cozy fondue firesides, horse-drawn sleighs, and holiday mountain excursions.',
    category: 'Winter & Seasons',
    publishedAt: '2026-11-01',
    updatedAt: '2026-11-01',
    readingTimeMinutes: 6,
    coverImage: {
      src: '/guides/christmas-in-zermatt-matterhorn.jpg',
      alt: 'Zermatt alpine village illuminated at night in winter with heavy snow blanketing chalets under the starry sky',
      caption: 'Zermatt village glowing in festive winter light under heavy alpine snow on a December night.',
    },
    heroStat: {
      label: 'December Clear-Sky Rate',
      value: '89% Clarity',
      detail: 'Highest monthly clear-sky summit probability of the entire year',
    },
    keyTakeaways: [
      'December boasts an 89% statistical clear-sky summit probability—the highest of any month in Zermatt—due to cold, dry high-pressure air and zero summer thermal updrafts.',
      'Zermatt is strictly car-free; at Christmas, quiet cobblestone lanes are navigated by electric taxis, horse-drawn sleighs with brass bells, and walking under glowing street illuminations.',
      'Christmas Eve and Christmas Day dinners (traditional Swiss cheese fondue, Valais raclette, and black-truffle specialties) book out months ahead—secure table reservations by October/November.',
      'The Gornergrat cogwheel train and Klein Matterhorn cable cars operate 365 days a year, making a Christmas morning summit ascent to 3,089m an unforgettable alpine tradition.',
    ],
    comparisonTable: {
      caption: 'Zermatt Christmas Excursions & Winter Highlights Quick Reference',
      headers: [
        'Activity / Tradition',
        'Location / Route',
        'Best Timing',
        'Why It Is Magical at Christmas',
      ],
      rows: [
        [
          'Christmas Eve Stroll & Glühwein',
          'Bahnhofstrasse & Kirchplatz',
          '17:00–19:30 CET (Twilight)',
          'Illuminated village Christmas tree, choir carols by St. Mauritius church, roasted chestnuts.',
        ],
        [
          'Gornergrat Winter Panorama Rail',
          'Cogwheel train from Zermatt (33m)',
          '09:00–14:00 CET',
          'Ascends through deep snowy pine forests to 3,089m with 360° views of 29 four-thousand-meter peaks.',
        ],
        [
          'Historic Hinterdorf Chalet Walk',
          'Behind Monte Rosa Hotel',
          'Blue hour (16:30–17:30 CET)',
          '500-year-old larchwood barns (Gädi) heavily blanketed in pristine powder snow.',
        ],
        [
          'Fireside Cheese Fondue Dinner',
          'Traditional Zermatt Stübli & Chalets',
          '19:00–22:00 CET',
          'Local Valais AOP cheeses melted with garlic and Fendant wine beside a crackling hearth.',
        ],
        [
          'Matterhorn Glacier Palace & Skiing',
          'Klein Matterhorn (3,883m)',
          '10:00–14:30 CET',
          'Europe’s highest ski slopes and ice sculpture tunnels 15m deep inside the natural glacier.',
        ],
      ],
    },
    sections: [
      {
        id: 'why-zermatt-christmas-is-magical',
        heading: '1. Why Zermatt Is the Quintessential Alpine Christmas Destination',
        image: {
          src: '/guides/zermatt-winter-chalets.jpg',
          alt: 'Traditional wooden Swiss chalets in Zermatt dusted with thick winter snow beneath the Matterhorn',
          caption: 'Historic sun-darkened larchwood chalets draped in fresh December powder snow in Zermatt.',
        },
        paragraphs: [
          'Few places on Earth embody the fairy-tale spirit of Christmas quite like Zermatt. Nestled in a deep valley pocket beneath the sheer pyramid of the Matterhorn (4,478m), this car-free Swiss village transforms each December into a living snow globe.',
          'Because combustion-engine vehicles have been banned since 1966, there is no roar of traffic or exhaust slush—only the crunch of fresh snow underfoot, the gentle hum of small electric buses, and the rhythmic jingle of brass bells on horse-drawn sleighs outside historic hotels like the Mont Cervin Palace and Grand Hotel Zermatterhof.',
          'Along Bahnhofstrasse and Kirchplatz, warm golden fairy lights wrap snow-laden evergreen trees, while shop windows display handcrafted Swiss wooden ornaments, artisanal chocolates, and steaming copper cauldrons of spiced Glühwein (mulled wine) and roasted chestnuts (marroni).',
        ],
        proTip: {
          label: 'Local Secret',
          text: 'Wander into the Hinterdorf quarter just behind Bahnhofstrasse at dusk (16:45 CET). The narrow pedestrian lanes between 16th-century larch barns look straight out of a 19th-century winter painting when draped in heavy snow.',
        },
      },
      {
        id: 'december-weather-matterhorn-clarity',
        heading: '2. December Weather: Why Christmas Has the Clearest Skies of the Year',
        paragraphs: [
          'Travelers often assume summer offers the best mountain weather, but 30 years of official Swiss alpine telemetry tell the exact opposite story. December is statistically the clearest month of the entire calendar year in Zermatt, recording an astonishing 89% clear-sky probability for the Matterhorn summit.',
          'In winter, the atmosphere over the Pennine Alps is dominated by cold, stable, dry continental high-pressure systems. Unlike July and August—when intense valley solar heating creates afternoon thermal updrafts (anabatic winds) that trigger thick cumulus clouds by 13:00 CET—December air is crystal clear all day long. When you look up toward the Matterhorn at 10:00 CET or 15:00 CET, the mountain stands sharply etched against a deep indigo sky.',
        ],
        bulletPoints: [
          {
            bold: 'Sub-Zero Crisp Air Keeps Visibility Pristine:',
            text: 'Average December temperatures in Zermatt village range from -6°C to +1°C, while summit platforms (3,089m–3,883m) range from -14°C to -8°C. Cold air holds minimal moisture, eliminating hazy summit fog.',
          },
          {
            bold: 'Early Winter Sunset Alpenglow (16:30–16:50 CET):',
            text: 'Because sunset occurs early in late December, you do not have to wait until late evening to photograph the pink and violet alpenglow across the Matterhorn’s East Face.',
          },
          {
            bold: 'Check Live Telemetry for Föhn Gales:',
            text: 'Even in winter, periodic southerly Föhn wind fronts can bring high-altitude wind gusts over 45 km/h across Klein Matterhorn. Check our live 1–10 AM/PM Visibility Score each morning before boarding the lifts.',
          },
        ],
      },
      {
        id: 'cozy-dining-fireside-fondue',
        heading: '3. Cozy Alpine Dining: Fireside Fondue, Raclette & Christmas Feasts',
        image: {
          src: '/guides/zermatt-cozy-fondue-matterhorn-wide.jpg',
          alt: 'A pot of bubbling Swiss cheese fondue with bread and wine overlooking the snowy Matterhorn',
          caption: 'Nothing compares to bubbling Valais cheese fondue and a glass of crisp Fendant wine after a day in the snow.',
        },
        paragraphs: [
          'After spending a crisp winter morning riding the Gornergrat Bahn or skiing the international slopes to Cervinia, nothing warms the alpine soul like gathering around a bubbling ceramic caquelon of authentic Swiss cheese fondue.',
          'Zermatt’s cozy alpine restaurants and traditional Stüblis—such as Ferdinand by Cervo, Saycheese!, Chez Vrony, and Schäferstube—specialize in Valais AOP cheeses melted with dry white wine, garlic, and a splash of Kirsch cherry brandy. Savoring hot melted cheese scraped over baby potatoes (raclette) beside a crackling stone hearth while snow falls quietly outside is the ultimate Christmas comfort.',
        ],
        proTip: {
          label: 'Christmas Dinner Strategy',
          text: 'Christmas Eve (December 24) and Christmas Day (December 25) dinners in Zermatt book out weeks or even months in advance. Many village restaurants offer special festive multi-course menus. Make table reservations as early as October or November.',
        },
      },
      {
        id: 'christmas-day-mountain-excursions',
        heading: '4. Christmas Day Mountain Excursions: Gornergrat & Glacier Paradise',
        image: {
          src: '/guides/zermatt-winter-snow-village.jpg',
          alt: 'Snowy alpine slopes and winter landscape above Zermatt village with pristine powder snow',
          caption: 'Winter wonderland: high-alpine slopes above Zermatt open for scenic cogwheel rides and winter hiking on Christmas Day.',
        },
        paragraphs: [
          'A common concern for first-time visitors is whether Swiss mountain railways operate on Christmas Day. The answer is an emphatic yes: both the Gornergrat Bahn cogwheel train and the Matterhorn Glacier Paradise cableways operate 365 days a year, weather permitting.',
          'Riding the heated cogwheel train uphill from Zermatt Bahnhof on Christmas morning is an unforgettable journey. The red train climbs steadily through snow-laden larch and Swiss stone pine forests, emerging onto open high-alpine snowfields at Riffelberg (2,582m) and Rotenboden (2,815m) before terminating at the Gornergrat observatory terrace (3,089m). From here, you can gaze across the frozen expanses of the Gorner and Findel glaciers toward the pristine, snow-plastered North and East faces of the Matterhorn.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does it always snow in Zermatt at Christmas?',
        answer:
          'Zermatt sits at 1,608 meters with surrounding ski terrain rising to 3,883 meters, giving it one of the most reliable natural snow records in the European Alps. A white Christmas in Zermatt village is virtually guaranteed, and the high-altitude ski slopes are 100% snow-covered throughout December.',
      },
      {
        question: 'Are mountain trains and ski lifts open on Christmas Day in Zermatt?',
        answer:
          'Yes! The Gornergrat Bahn, Sunnegga funicular, and Matterhorn Glacier Paradise cableways operate on their standard winter schedules on December 24, 25, and 26. Always check our live 1–10 AM/PM Visibility Score on the morning of travel to ensure summit clarity.',
      },
      {
        question: 'Are restaurants and shops open during Christmas week in Zermatt?',
        answer:
          'Yes, Christmas week through New Year’s is the peak winter festive season in Zermatt. Grocery stores and ski rental shops remain open (with slightly reduced hours on December 24 evening and December 25), while restaurants and bars operate at full capacity. Dinner reservations for Christmas Eve and Christmas Day are essential.',
      },
      {
        question: 'What is the best way to see the Matterhorn on Christmas Day?',
        answer:
          'Take the 08:24 or 09:00 CET Gornergrat cogwheel train from Zermatt station. Sit on the right-hand side facing uphill for breathtaking, continuous views of the snow-clad Matterhorn East Face as the morning sun casts warm golden light across the fresh snow.',
      },
    ],
  },
  {
    slug: 'gornergrat-railway-vs-glacier-express',
    title:
      'Gornergrat Railway vs. Glacier Express: Comparing Switzerland’s Most Iconic Mountain Trains',
    shortTitle: 'Gornergrat vs. Glacier Express',
    seoTitle:
      'Gornergrat Railway vs. Glacier Express (2026 Comparison) | Tickets, Passes & Views',
    description:
      'Compare Zermatt’s two legendary railways: the Gornergrat 3,089m cogwheel mountain ascent vs. the Glacier Express 8-hour panoramic trans-alpine journey. Complete with Swiss Travel Pass rules, seat reservation fees, best side to sit, and live status.',
    category: 'Day Trips',
    publishedAt: '2026-11-05',
    updatedAt: '2026-11-05',
    readingTimeMinutes: 7,
    coverImage: {
      src: '/guides/gornergrat-railway-vs-glacier-express.jpg',
      alt: 'Gornergrat Bahn electric cogwheel mountain train ascending through rocky alpine terrain towards 3,089m with dramatic mountain backdrop',
      caption:
        'The Gornergrat Bahn cogwheel train climbing 1,485 vertical meters above Zermatt towards the 3,089m Gornergrat summit ridge.',
    },
    heroStat: {
      label: 'Journey Type Delta',
      value: '33 min vs. 7h 45m',
      detail:
        'Vertical summit cogwheel climb (3,089m) vs. 291km panoramic trans-alpine rail',
    },
    keyTakeaways: [
      'Gornergrat Railway (GGB) is a vertical cogwheel ascent taking 33 minutes from Zermatt (1,604m) straight to the 3,089m summit ridge, providing the front-row iconic East Face Matterhorn view.',
      'The Glacier Express (GEX) is an 8-hour, 291-kilometer trans-alpine scenic journey crossing 291 bridges and 91 tunnels between Zermatt and St. Moritz.',
      'Swiss Travel Pass rules differ sharply: Gornergrat offers a 50% discount with no seat reservations required, whereas the Glacier Express has 100% ticket coverage but MANDATORY paid seat reservations (CHF 39–49).',
      'You do not need to choose between them: both trains meet directly opposite each other at Zermatt Bahnhof square, making it effortless to ride the Glacier Express into town and then ride Gornergrat to the summit.',
      'Check our dedicated [Scenic Trains Live Hub & Ticket Comparison](/trains) for live summit weather scores, carriage layouts, and timetable updates before booking.',
    ],
    comparisonTable: {
      caption: 'Gornergrat Bahn vs. Glacier Express: Feature & Ticket Comparison (2026)',
      headers: [
        'Feature / Attribute',
        'Gornergrat Railway (GGB)',
        'Glacier Express (GEX)',
      ],
      rows: [
        [
          'Primary Purpose',
          'Vertical mountain summit excursion & Matterhorn viewpoint',
          'Trans-alpine grand panoramic overland journey',
        ],
        [
          'Route & Terminus',
          'Zermatt (1,604 m) ↔ Gornergrat Summit (3,089 m)',
          'Zermatt (Valais) ↔ St. Moritz / Davos (Graubünden)',
        ],
        [
          'Journey Duration',
          '33 minutes each way',
          '7 hours 45 minutes (full 291 km route)',
        ],
        [
          'Track & Propulsion',
          'Abt double-rack cogwheel (metric gauge, 1,000 mm)',
          'Adhesion & rack sections (Matterhorn Gotthard Bahn / RhB)',
        ],
        [
          'Elevation Gain / Peak',
          '+1,485 m climb (Peak: 3,089 m summit)',
          'Peak: Oberalp Pass (2,033 m) / Low: Chur (585 m)',
        ],
        [
          'Operating Season',
          '365 days a year (no seasonal closure)',
          'Early Dec to late Oct (annual maintenance shut Nov–early Dec)',
        ],
        [
          'Swiss Travel Pass',
          '50% Discount (CHF 51–66 return)',
          '100% Free Ticket (Mandatory seat reservation fee applies)',
        ],
        [
          'Seat Reservation',
          'Not required (walk-on, optional CHF 7 priority pass)',
          'MANDATORY (CHF 39 low season / CHF 49 peak summer)',
        ],
        [
          'Eurail / Interrail',
          'No discount (full price ticket)',
          '100% Free Ticket (Mandatory seat reservation fee applies)',
        ],
        [
          'Best Side to Sit',
          'Right side ascending from Zermatt (Matterhorn view)',
          'Left side departing Zermatt to Disentis / Either side in Rhine Gorge',
        ],
        [
          'Matterhorn Visibility',
          'Continuous direct views during entire ride & summit',
          'Only visible departing/arriving within Zermatt valley',
        ],
        [
          'Key Scenic Highlights',
          'Riffelsee reflection, Gorner Glacier, 29 four-thousanders',
          'Landwasser Viaduct, Rhine Gorge, Oberalp Pass lake',
        ],
      ],
    },
    embeddedWidget: 'trains-comparison',
    sections: [
      {
        id: 'gornergrat-overview',
        heading:
          'Gornergrat Bahn (GGB): Europe’s Highest Open-Air Cogwheel Railway',
        image: {
          src: '/guides/gornergrat-bahn-cogwheel-train.jpg',
          alt: 'Gornergrat Bahn cogwheel train climbing the steep alpine rack railway towards the Gornergrat summit with the Matterhorn in the background',
          caption:
            'The Gornergrat Bahn cogwheel train ascending past alpine meadows and larch forests towards the 3,089-meter observation terrace.',
        },
        paragraphs: [
          'Opened in 1898 as Switzerland’s first fully electric rack railway, the Gornergrat Bahn (GGB) is an engineering marvel. In just 33 minutes, its distinctive crimson and golden trainsets scale 1,485 vertical meters from Zermatt village (1,604m) straight up to the rocky summit ridge of Gornergrat (3,089m).',
          'Unlike ordinary scenic trains that glide through river valleys, the Gornergrat Bahn is a pure vertical mountain ascent. As the cogwheel claws its way up 20% gradients, passengers are treated to an ever-expanding panorama of the Matterhorn’s iconic East Face. Intermediate stops include Findelbach (crossing a dramatic stone viaduct), Riffelalp (2,211m), Riffelberg (2,582m), and Rotenboden (2,815m)—the starting trailhead for the world-famous 10-minute walk to Riffelsee, where the Matterhorn mirrors in pristine alpine water.',
          'At the summit terminus (3,089m), you step directly out onto the observation deck of the historic 3100 Kulmhotel Gornergrat. From here, you have an unobstructed 360-degree panorama encompassing Monte Rosa (4,634m, Switzerland’s highest peak), the colossal Gorner Glacier tongue, and 29 individual peaks towering above 4,000 meters.',
          'To plan your ascent and check real-time summit cloud coverage, visit our dedicated [Gornergrat Railway Guide on the Trains Hub](/trains#gornergrat).',
        ],
        bulletPoints: [
          {
            bold: 'Speed & Duration:',
            text: '33 minutes each way across 9.3 km of track, operating year-round with departures every 24 to 48 minutes.',
          },
          {
            bold: 'Elevation Profile:',
            text: 'Ascends from 1,604m in Zermatt to 3,089m at Gornergrat summit (+1,485m vertical gain).',
          },
          {
            bold: 'Walk-On Simplicity:',
            text: 'No advance seat reservation required. Simply scan your QR code or Swiss Pass at the turnstiles and board.',
          },
          {
            bold: 'Intermediate Hikes:',
            text: 'Hop off at Rotenboden for the Riffelsee mirror photo walk, or at Riffelberg for scenic alpine lunches overlooking the Matterhorn.',
          },
        ],
        proTip: {
          label: 'Best Side to Sit',
          text: 'Always sit on the RIGHT side of the carriage (starboard) when boarding at Zermatt. The right-hand windows deliver continuous, escalating views of the Matterhorn pyramid as the train climbs above the tree line.',
        },
      },
      {
        id: 'glacier-express-overview',
        heading:
          'Glacier Express (GEX): "The World’s Slowest Express Train"',
        image: {
          src: '/guides/glacier-express-panoramic-train.jpg',
          alt: 'Glacier Express panoramic train traversing the Swiss Alps with dome windows under clear blue skies',
          caption:
            'The Glacier Express gliding through the Swiss Alps, featuring panoramic dome windows that curve into the ceiling.',
        },
        paragraphs: [
          'If the Gornergrat Bahn is an exhilarating vertical elevator into the alpine sky, the Glacier Express is the ultimate slow-travel horizontal odyssey across the spine of the Swiss Alps. Linking the world-renowned resort towns of Zermatt in Valais and St. Moritz in the Engadin valley, the Glacier Express covers 291 kilometers (181 miles) over the course of roughly 7 hours and 45 minutes.',
          'Along the way, the train crosses 291 soaring viaducts, dives through 91 alpine tunnels, and scales the dramatic Oberalp Pass at 2,033 meters (6,670 ft)—the highest point on the line and the source of the Rhine River. Highlights along the route include the dizzying Landwasser Viaduct (a 65-meter-high curved limestone bridge plunging straight into a sheer cliff tunnel) and the Rhine Gorge ("Ruinaulta"), often celebrated as the Swiss Grand Canyon.',
          'The carriages are purpose-built panoramic coaches with vast curved windows extending into the ceiling, giving passengers an unbroken view of towering granite walls, cascading waterfalls, and glacial peaks. Fresh three-course meals are cooked on board and served directly to your table at your seat while the alpine landscape drifts silently past.',
          'Detailed seating configurations, dining menus, and booking strategies are available in our [Glacier Express Route & Seat Guide](/trains#glacier-express).',
        ],
        bulletPoints: [
          {
            bold: 'Route & Duration:',
            text: '291 km between Zermatt and St. Moritz, taking approximately 7 hours and 45 minutes.',
          },
          {
            bold: 'Key Engineering Feats:',
            text: 'Crosses 291 stone viaducts and traverses 91 tunnels, including the helical spiral tunnels of the Albula UNESCO World Heritage line.',
          },
          {
            bold: 'Excellence Class:',
            text: 'Ultra-luxurious premium class featuring guaranteed single window seats, dedicated concierge, private Glacier Bar, and a 5-course gourmet regional tasting menu with wine pairings.',
          },
          {
            bold: 'Seasonal Closure:',
            text: 'Unlike Gornergrat (which runs 365 days), the Glacier Express pauses for annual maintenance between late October and mid-December.',
          },
        ],
        proTip: {
          label: 'Mandatory Seat Reservations',
          text: 'Unlike standard Swiss trains, you CANNOT board the Glacier Express without a reserved seat, even if you hold an unlimited 1st Class Swiss Travel Pass. Booking opens exactly 93 days in advance on the official portal—set a calendar alert, as panoramic seats on peak summer and ski dates sell out within hours.',
        },
      },
      {
        id: 'pass-rules-pricing',
        heading:
          'Glacier Express Price, Seat Reservation & Swiss Travel Pass',
        paragraphs: [
          'Travelers often assume that holding a Swiss Travel Pass allows them to hop onto any train in Switzerland for free. While the Swiss rail network is famously integrated, the Gornergrat Bahn and Glacier Express fall under completely different tariff categories.',
          'Understanding these rules ahead of time will prevent unexpected counter surcharges or reservation penalties at the boarding gates.',
        ],
        bulletPoints: [
          {
            bold: 'Gornergrat Bahn with Swiss Travel Pass:',
            text: 'You receive a 50% discount on standard adult tickets (summer return drops from ~CHF 132 to CHF 66; winter drops from ~CHF 102 to CHF 51). It is NOT 100% free because it is classified as a mountain summit excursion railway. No seat reservation is needed.',
          },
          {
            bold: 'Gornergrat with Swiss Half Fare Card:',
            text: 'Identical 50% discount as the Swiss Travel Pass. Children aged 6–15 holding a Swiss Family Card travel completely free when accompanied by a paying parent.',
          },
          {
            bold: 'Glacier Express with Swiss Travel Pass:',
            text: 'Your rail fare is 100% COVERED by the Swiss Travel Pass (and Eurail / Interrail). However, you MUST pay the mandatory seat reservation fee: CHF 39 in low season (spring/autumn) or CHF 49 in peak summer and winter. Without the seat reservation slip, boarding is refused.',
          },
          {
            bold: 'Glacier Express Excellence Class Supplement:',
            text: 'Requires a valid 1st class rail ticket (or 1st class Swiss Travel Pass) plus a non-discountable Excellence Class supplement of CHF 470 per person.',
          },
        ],
        proTip: {
          label: 'Live Ticket & Pass Comparison',
          text: 'Compare side-by-side fares, children policies, and dog allowances on our interactive [Swiss Mountain Trains Comparison Page](/trains).',
        },
      },
      {
        id: 'which-train-to-choose',
        heading:
          'Which Train Should You Ride? (Or How to Combine Both)',
        paragraphs: [
          'Because both trains depart from the same central hub at Zermatt Bahnhof square, they are natural companions rather than direct rivals. Choosing which one to prioritize depends on your itinerary length and sightseeing priorities:',
          '1. If you only have 1 or 2 days in Zermatt: Ride the Gornergrat Bahn. Your primary goal is seeing and photographing the Matterhorn, hiking the Riffelsee reflection trail, and reaching 3,089 meters. In just over half an hour, Gornergrat puts you directly in front of the mountain.',
          '2. If you are traveling between eastern Switzerland and Zermatt: Take the Glacier Express as your scenic long-distance transit. Instead of taking standard regional trains through the long Lötschberg Base Tunnel, riding the Glacier Express transforms your transit day into a world-class scenic experience.',
          '3. The Ultimate 48-Hour Alpine Itinerary: Arrive in Zermatt aboard the Glacier Express in the late afternoon, marveling at the Mattertal valley cliffs. Check into your Zermatt hotel, enjoy a fondue dinner in the village, and board the first morning Gornergrat train at 08:00 to catch pristine golden-hour light reflecting across the Gorner Glacier and Matterhorn.',
          'Explore live weather scores and contingency routes before booking on our [Matterhorn Visibility Live Dashboard](/).',
        ],
      },
      {
        id: 'live-tracking-and-weather',
        heading:
          'Live Summit Weather & Why Timing Your Ride Matters',
        paragraphs: [
          'One fundamental difference between these two journeys is weather dependency. The Glacier Express travels primarily through deep valleys and mountain passes; even on overcast or lightly raining days, the misty alpine scenery, rushing waterfalls, and limestone gorges remain visually breathtaking.',
          'The Gornergrat Bahn, however, is an open-air mountain summit ascent. If localized low-hanging stratus clouds or a South Föhn banner cloud envelops the 3,089m ridge, visibility from the summit platform can drop to zero, obscuring both the Matterhorn and the Gorner Glacier.',
          'Because Gornergrat tickets are date-flexible, never purchase your tickets days in advance without verifying live summit conditions. Before boarding, check our real-time [Gornergrat Visibility Score on the Live Trains Tracker](/trains), which combines high-altitude cloud cover, summit webcams, and wind shear to give you a definitive 1–10 Go/No-Go score.',
        ],
        proTip: {
          label: 'Cloud Inversion Phenomenon',
          text: 'In late autumn and winter, Zermatt village can sit under thick fog ("Nebeldecke") while Gornergrat at 3,089m basks under crystal-clear blue skies above a sea of clouds. Check our live high-altitude webcams before assuming a cloudy village means bad summit weather!',
        },
      },
    ],
    faqs: [
      {
        question:
          'Do the Gornergrat Bahn and Glacier Express depart from the same station in Zermatt?',
        answer:
          'Yes, they depart within 50 meters of each other at Zermatt Bahnhof. The Glacier Express arrives and departs directly at the main Matterhorn Gotthard Bahn (MGB) / SBB platforms, while the Gornergrat Bahn has its own dedicated heritage terminal building immediately across the outdoor station square.',
      },
      {
        question: 'Is the Gornergrat Bahn 100% free with the Swiss Travel Pass?',
        answer:
          'No. The Gornergrat Bahn is classified as a high-altitude mountain excursion railway, so the Swiss Travel Pass provides a 50% discount rather than free travel. In 2026, an adult return ticket costs approximately CHF 66 in summer and CHF 51 in winter with the pass.',
      },
      {
        question:
          'Can I ride only a portion of the Glacier Express route instead of the full 8 hours?',
        answer:
          'Yes. Popular shorter sections include Zermatt to Brig (1h 20m), Zermatt to Andermatt (3h 15m), and Chur to St. Moritz over the Landwasser Viaduct (2h). Mandatory seat reservations are required for all segments.',
      },
      {
        question:
          'Which side of the train has the best view on the Gornergrat Bahn?',
        answer:
          'Always sit on the right side of the carriage when ascending from Zermatt to Gornergrat (and on the left side when descending). The right-hand windows face directly towards the Matterhorn throughout almost the entire 33-minute climb.',
      },
      {
        question:
          'What happens if I book a Gornergrat ticket and the Matterhorn is hidden by clouds?',
        answer:
          'Standard Gornergrat Bahn tickets are valid for any train on the selected calendar date, but are generally non-refundable once activated. To avoid disappointment, check our real-time 1–10 AM/PM Visibility Score and live summit webcams on the [Trains Dashboard](/trains) before purchasing tickets at the station.',
      },
    ],
  },
  {
    slug: 'what-is-the-matterhorn',
    title: 'What Is the Matterhorn? | Height, Location & How to See It',
    shortTitle: 'What Is the Matterhorn?',
    seoTitle: 'What Is the Matterhorn? | Height, Location & How to See It',
    description:
      'The Matterhorn is a 4,478 m pyramid on the Swiss–Italian border above Zermatt. Height, location, and how to check if it is visible today.',
    category: 'Viewpoints',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-27',
    readingTimeMinutes: 4,
    coverImage: {
      src: '/guides/best-time-to-see-matterhorn.jpg',
      alt: 'The Matterhorn pyramid above Zermatt at sunrise',
      caption: 'The Matterhorn, 4,478 m, above Zermatt on the Swiss–Italian border.',
    },
    heroStat: {
      label: 'Summit height',
      value: '4,478 m',
      detail: 'Zermatt, Valais, on the Swiss–Italian border',
    },
    keyTakeaways: [
      'The Matterhorn is a four-sided pyramid. Italian speakers call it Cervino, French speakers Cervin.',
      'The summit is 4,478 m (14,692 ft). In German that figure is the Matterhorn Höhe.',
      'It stands above Zermatt in Valais, Switzerland, and Breuil-Cervinia in Italy’s Aosta Valley.',
      'Check the live score before buying a lift ticket. Gornergrat faces the east side. Klein Matterhorn faces the south side.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'What is the Matterhorn?',
        paragraphs: [
          'The Matterhorn is a four-sided rock pyramid in the Pennine Alps. Each face is steep enough that the peak looks like a single spike from Zermatt, which is why the east-face view is nicknamed the Toblerone.',
          'The same mountain has three names. English and German use Matterhorn. Italian uses Cervino. French uses Cervin. All three refer to this summit, not the Disneyland ride and not a pipeline.',
        ],
      },
      {
        id: 'where-and-height',
        heading: 'Where is the Matterhorn, and how high is it?',
        paragraphs: [
          'The summit is 4,478 meters, or 14,692 feet. That number is the Matterhorn Höhe. The peak sits on the border between Switzerland and Italy.',
          'On the Swiss side it rises above Zermatt, in the canton of Valais. On the Italian side it rises above Breuil-Cervinia, in the Aosta Valley. The east and north faces are the classic view from Zermatt village, Gornergrat, and Riffelsee. The south and west faces look into Italy and are what you see from Matterhorn Glacier Paradise.',
        ],
      },
      {
        id: 'how-to-see-it',
        heading: 'How to see the Matterhorn today',
        paragraphs: [
          'The [live visibility score](/) updates every 15 minutes. A score of 8–10 means the pyramid is clear. A score of 1–2 means it is in cloud. Village weather apps read Zermatt at 1,608 m and miss the cloud deck around the summit.',
          'Gornergrat (3,089 m) is the east-face view, reached by the cogwheel train. Klein Matterhorn (3,883 m) is the cable car to the south side. Kirchbrücke in the village is free. Use the Gornergrat webcam and the Klein Matterhorn webcam on the homepage before you buy a ticket.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the Matterhorn?',
        answer:
          'A four-sided pyramid in the Pennine Alps, called Cervino in Italian and Cervin in French. The summit is 4,478 m above Zermatt.',
      },
      {
        question: 'Where is the Matterhorn?',
        answer:
          'On the Swiss–Italian border. The Swiss side is above Zermatt in Valais. The Italian side is above Breuil-Cervinia in the Aosta Valley.',
      },
      {
        question: 'How high is the Matterhorn?',
        answer:
          '4,478 meters (14,692 feet). In German the search is Matterhorn Höhe, and the answer is 4.478 Meter.',
      },
    ],
  },
  {
    slug: 'zermatt-weather-december',
    title: 'Zermatt Weather in December',
    shortTitle: 'December Weather',
    seoTitle: 'Zermatt Weather in December | Clear Skies & Skiing',
    description:
      'December is Zermatt’s clearest month, with an 89% chance of a clear Matterhorn. Snow, frozen lakes, and how to check the peak today.',
    category: 'Climatology',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-27',
    readingTimeMinutes: 3,
    coverImage: {
      src: '/guides/christmas-in-zermatt-matterhorn.jpg',
      alt: 'Snowy Zermatt village with the Matterhorn in December',
      caption: 'December is a viewing and skiing month. The lakes are frozen.',
    },
    heroStat: {
      label: 'Clear-sky chance',
      value: '89%',
      detail: 'Highest month on the 30-year record',
    },
    keyTakeaways: [
      'December clears on 89% of days. Morning and afternoon both stay open.',
      'The village is under snow and Riffelsee is frozen, so skip the reflection shot.',
      'Check the live score before buying a Gornergrat or ski ticket.',
    ],
    sections: [
      {
        id: 'december-clarity',
        heading: 'Zermatt weather in December',
        paragraphs: [
          'December is the clearest month on the 30-year record, with an 89% chance of a clear Matterhorn summit on a given day. Cold, stable air produces almost no afternoon cumulus, so both the morning and the afternoon stay open.',
          'Snow covers the village and the lakes are frozen, so this is a viewing and skiing month rather than a reflection month. For Christmas week, sleighs, and the village schedule, see the [Christmas in Zermatt guide](/guides/christmas-in-zermatt-matterhorn).',
          'The [live visibility score](/) is the check for today. The rest of the year is in [Zermatt weather by month](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Zermatt weather like in December?',
        answer:
          'Cold and unusually clear. About 89% of December days show the Matterhorn, and the afternoon stays open because there is almost no thermal cloud.',
      },
      {
        question: 'Can you see a Riffelsee reflection in December?',
        answer: 'No. Riffelsee is frozen and snow-covered from November through early June.',
      },
    ],
  },
  {
    slug: 'zermatt-weather-september',
    title: 'Zermatt Weather in September',
    shortTitle: 'September Weather',
    seoTitle: 'Zermatt Weather in September | Hiking & Lake Reflections',
    description:
      'September clears on about 72% of days in Zermatt. Hiking trails are open and Riffelsee is liquid for a Matterhorn reflection.',
    category: 'Climatology',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-27',
    readingTimeMinutes: 3,
    coverImage: {
      src: '/guides/best-time-to-see-matterhorn.jpg',
      alt: 'The Matterhorn above golden larches in September',
      caption: 'September is the month for hiking and a liquid Riffelsee reflection.',
    },
    heroStat: {
      label: 'Clear-sky chance',
      value: '72%',
      detail: 'Cooler nights, gold larches, liquid lakes',
    },
    keyTakeaways: [
      'September clears on about 72% of days, after the summer afternoon clouds fade.',
      'Trails are still snow-free and Riffelsee can mirror the east face.',
      'Start at sunrise. A breeze often ripples the lake by early afternoon.',
    ],
    sections: [
      {
        id: 'september-clarity',
        heading: 'Zermatt weather in September',
        paragraphs: [
          'September clears on about 72% of days. Cooler nights shut down the afternoon thermals that wreck June and July, and the larch forests turn gold around the east face.',
          'Hiking trails are still snow-free and Riffelsee is liquid, so this is the month for a Matterhorn reflection from Sunnegga or Rotenboden. Start at sunrise. A breeze often ripples the lake by early afternoon even when the summit stays clear.',
          'Check the [live visibility score](/) the morning you go. The full year is in [Zermatt weather by month](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Zermatt weather like in September?',
        answer:
          'Clear on about 72% of days. Nights are cool enough to stop the afternoon cumulus that covers the peak in midsummer, and the larches turn gold.',
      },
      {
        question: 'Is Riffelsee liquid in September?',
        answer:
          'Yes. The reflection window runs from late June through late October. September is inside that window. Go at sunrise, before the breeze.',
      },
    ],
  },
  {
    slug: 'zermatt-weather-may',
    title: 'Zermatt Weather in May',
    shortTitle: 'May Weather',
    seoTitle: 'Zermatt Weather in May | Morning Views, Frozen Lakes',
    description:
      'May in Zermatt clears on 48–58% of mornings. Afternoon clouds build fast, and Riffelsee is still frozen.',
    category: 'Climatology',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-27',
    readingTimeMinutes: 3,
    coverImage: {
      src: '/guides/best-time-to-see-matterhorn.jpg',
      alt: 'The Matterhorn above Zermatt in late spring',
      caption: 'May is a morning-only month. The high lakes are still frozen.',
    },
    heroStat: {
      label: 'Clear-sky chance',
      value: '48–58%',
      detail: 'Reliable only before midday',
    },
    keyTakeaways: [
      'May sits in the late-spring range of 48–58% clear days.',
      'The usable window is the morning. Melting snow feeds afternoon cumulus.',
      'Riffelsee is still frozen. Leave the reflection for late June.',
    ],
    sections: [
      {
        id: 'may-clarity',
        heading: 'Zermatt weather in May',
        paragraphs: [
          'May is a shoulder month. Clear-sky odds sit in the late-spring range of 48–58%, and the reliable window is the morning. Moisture from melting snow feeds cumulus by early afternoon.',
          'Riffelsee is still frozen in May, so leave the reflection shot for late June. Use a clear morning for Gornergrat or the village bridge, and treat the afternoon as a valley day.',
          'Check the [live visibility score](/) before you leave the hotel. The other months are in [Zermatt weather by month](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is Zermatt weather like in May?',
        answer:
          'A shoulder month. About half of days clear in the morning, then cumulus builds by early afternoon as snowmelt adds moisture.',
      },
      {
        question: 'Can you photograph Riffelsee in May?',
        answer:
          'The lake is still frozen in May. Full liquid reflections start in late June. Use a clear May morning at Gornergrat or Kirchbrücke instead.',
      },
    ],
  },
  {
    slug: 'glacier-express',
    title: 'Glacier Express Price, Route & Seat Reservation',
    shortTitle: 'Glacier Express',
    seoTitle: 'Glacier Express Price, Route & Seat Reservation',
    description:
      'Glacier Express ticket prices, the mandatory seat reservation, the Zermatt to St. Moritz route, and how it differs from the Bernina Express.',
    category: 'Day Trips',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-27',
    readingTimeMinutes: 5,
    coverImage: {
      src: '/guides/glacier-express-panoramic-train.jpg',
      alt: 'The Glacier Express panoramic train in the Alps',
      caption: 'The Glacier Express runs Zermatt to St. Moritz. The seat reservation is separate from the ticket.',
    },
    heroStat: {
      label: 'Seat reservation',
      value: 'CHF 39–49',
      detail: 'Mandatory, on top of the train ticket',
    },
    keyTakeaways: [
      'A 2nd class one-way ticket is about CHF 159. 1st class is about CHF 272. Both still need a seat reservation.',
      'The reservation is CHF 39 in the low season and CHF 49 in peak summer. It opens 93 days ahead.',
      'Excellence Class adds CHF 470 to a 1st class ticket. There are 20 seats.',
      'The Bernina Express is the same railway company in a different valley. It does not go to Zermatt.',
    ],
    sections: [
      {
        id: 'glacier-express-price',
        heading: 'Glacier Express price',
        paragraphs: [
          'A standard adult one-way fare is CHF 159 in 2nd class or CHF 272 in 1st class, and that fare does not include the seat. The Swiss Travel Pass and Eurail cover the train ticket. They do not cover the reservation.',
          'Excellence Class is a 1+1 panoramic car with 20 seats. The surcharge is CHF 470 on top of a 1st class ticket or pass, and the fare includes a champagne welcome and a five-course lunch. Seats often go on the morning reservations open.',
        ],
      },
      {
        id: 'seat-reservation',
        heading: 'Seat reservation',
        paragraphs: [
          'Every Glacier Express passenger needs a seat reservation: CHF 39 in the low season and CHF 49 in peak summer. Children who travel free on a pass still pay it. Reservations open 93 days before departure.',
          'The panoramic train pauses from roughly mid-October to mid-December. Regional Matterhorn Gotthard Bahn and RhB trains keep running the same tracks between Zermatt, Brig, Andermatt, and St. Moritz, without the Glacier Express reservation or the dining car.',
        ],
      },
      {
        id: 'route',
        heading: 'Route from Zermatt to St. Moritz',
        paragraphs: [
          'The full run is about eight hours from Zermatt (1,604 m) to St. Moritz (1,775 m), over the Oberalp Pass at 2,033 m. Some services continue toward Davos. The famous stretches are the Rhine Gorge and the Landwasser Viaduct near Filisur.',
          'From Zurich or Geneva you change at Visp onto the Matterhorn Gotthard Bahn for Zermatt, then board the Glacier Express there. Shorter hops that still need a reservation include Zermatt to Brig (about 1 hour 20 minutes) and Zermatt to Andermatt (about 3 hours 15 minutes).',
        ],
      },
      {
        id: 'bernina-express',
        heading: 'Glacier Express or Bernina Express',
        paragraphs: [
          'Both trains are Rhaetian Railway / Matterhorn Gotthard Bahn panoramic services, and they are not substitutes. The Glacier Express crosses the Alps from Zermatt to St. Moritz. The Bernina Express runs from Chur or St. Moritz over the Bernina Pass to Tirano in Italy.',
          'Ride the Glacier Express for the Matterhorn, the Oberalp Pass, and Zermatt. Ride the Bernina Express for the Bernina glaciers and the Italian descent. St. Moritz is the only place the two routes meet.',
        ],
      },
      {
        id: 'today',
        heading: 'Is it worth boarding today?',
        paragraphs: [
          'The [trains page](/trains) shows whether the Glacier Express is on its seasonal schedule or in the autumn pause, plus the live Gornergrat score. A high score means the Matterhorn is clear at the Zermatt end. It does not change the Oberalp weather in the middle of the route.',
          'The Gornergrat railway is a different train: a 33-minute cogwheel from Zermatt to 3,089 m, with no mandatory reservation. Compare the two on the [Gornergrat vs Glacier Express guide](/guides/gornergrat-railway-vs-glacier-express).',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much is the Glacier Express?',
        answer:
          'About CHF 159 one way in 2nd class or CHF 272 in 1st class, plus a mandatory seat reservation of CHF 39 or CHF 49. A Swiss Travel Pass covers the ticket and not the reservation.',
      },
      {
        question: 'Do I need a Glacier Express seat reservation?',
        answer:
          'Yes. Boarding is refused without it. Book when reservations open, 93 days before travel. Excellence Class is CHF 470 extra and has 20 seats.',
      },
      {
        question: 'What is the Glacier Express route?',
        answer:
          'Zermatt to St. Moritz in about eight hours, via Visp, Brig, Andermatt, and the Oberalp Pass, with some trains toward Davos. The Bernina Express is a separate line from St. Moritz to Tirano.',
      },
    ],
  },
  {
    slug: 'hotels-with-matterhorn-view',
    title: 'Hotels with a Matterhorn View',
    shortTitle: 'Hotels with a View',
    seoTitle: 'Hotels with a Matterhorn View | Which Rooms See the Peak',
    description:
      'Which Zermatt hotels actually see the Matterhorn east face, which sit by the reflection lakes, and which stay clear when valley cloud hides the village.',
    category: 'Viewpoints',
    publishedAt: '2026-10-27',
    updatedAt: '2026-10-27',
    readingTimeMinutes: 4,
    coverImage: {
      src: '/guides/best-matterhorn-photo-viewpoints.jpg',
      alt: 'The Matterhorn east face above Zermatt',
      caption: 'A Matterhorn view depends on which way the room faces, and how high the cloud base sits.',
    },
    heroStat: {
      label: 'View that fails first',
      value: 'Village',
      detail: 'East-face rooms at 1,620 m drop out in valley cloud',
    },
    keyTakeaways: [
      'Village rooms face the east face and lose the peak first when the cloud base drops.',
      'Riffelalp is the hotel on the walk toward Riffelsee. Sunnegga is a day terrace, not a hotel night.',
      'Riffelhaus and the Kulmhotel Gornergrat sit above the valley fog that hides the village.',
    ],
    sections: [
      {
        id: 'village-east-face',
        heading: 'Village east face',
        paragraphs: [
          'Rooms in the village look up the valley at the east face. The Omnia sits on the hillside above the church, and Mont Cervin Palace faces the peak from the village floor. Both are a walk from Kirchbrücke, the free viewpoint.',
          'This is the view that dies first. A cloud deck around 2,000–2,500 m can hide the summit from the village while Gornergrat, at 3,089 m, is still clear. Check the [live score](/) and the [village viewpoint](/viewpoints/zermatt-village) before you treat a “Matterhorn view” room as guaranteed.',
        ],
      },
      {
        id: 'riffelsee-and-sunnegga',
        heading: 'Sunnegga and Riffelsee',
        paragraphs: [
          'The reflection is the east face in Riffelsee, a five-minute walk down from Rotenboden, and in Stellisee above Sunnegga. Sunnegga itself is a funicular terrace for the day. There is no hotel on the lake shore.',
          'Riffelalp Resort 2222 is the lodging on that walk. It sits on the Gornergrat railway, below Rotenboden, with the east face in front of the hotel. The water only mirrors the peak from late June through October, and only while the wind stays under about 12 km/h. The [Riffelsee page](/viewpoints/riffelsee) is the daily check. [Sunnegga](/viewpoints/sunnegga) is the lower terrace and the start of the lakes walk.',
        ],
      },
      {
        id: 'gornergrat-side',
        heading: 'Gornergrat side',
        paragraphs: [
          'Two hotels sit on the ridge above the fog that fills Zermatt. Riffelhaus 1853 is at Riffelberg, 2,582 m, one stop below Rotenboden. Kulmhotel Gornergrat is at the summit station, 3,089 m, beside the viewpoint.',
          'These rooms keep the east face when the village is in cloud, and they lose it when the summit itself is capped. The [Gornergrat page](/viewpoints/gornergrat) is the score for that elevation. Neither hotel is a reason to skip the webcam check.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which hotels have a Matterhorn view?',
        answer:
          'In the village, The Omnia and Mont Cervin Palace face the east face. On the railway, Riffelalp Resort 2222 faces the same peak closer to Riffelsee. Riffelhaus 1853 and Kulmhotel Gornergrat are above the valley fog.',
      },
      {
        question: 'Which Matterhorn view disappears first in cloud?',
        answer:
          'The village. A cloud base near 2,000 m hides the peak from Kirchbrücke while the Gornergrat hotels are still above it. When the score at 3,089 m drops, every view fails together.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

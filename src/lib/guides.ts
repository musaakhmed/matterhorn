export type GuideCategory =
  | 'Viewpoints'
  | 'Climatology'
  | 'Bad Weather'
  | 'Photography'
  | 'Meteorology';

export interface GuideComparisonTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
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
  heroStat: {
    label: string;
    value: string;
    detail: string;
  };
  keyTakeaways: string[];
  comparisonTable?: GuideComparisonTable;
  embeddedWidget?: 'historical-table' | 'contingency-plans' | 'scoring-formula';
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
    title: 'Best Month & Time of Day to See the Matterhorn (30-Year Climatology)',
    shortTitle: 'Best Month & Time of Day',
    seoTitle:
      'Best Time & Month to See the Matterhorn | 30-Year Clear-Sky Statistics',
    description:
      'Data-backed guide to the best months and time of day to see the Matterhorn clearly. Discover why December & January hit 88%+ clarity while June & July afternoons cloud over.',
    category: 'Climatology',
    publishedAt: '2026-01-20',
    updatedAt: '2026-10-25',
    readingTimeMinutes: 5,
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
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}

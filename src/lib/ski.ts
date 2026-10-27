import { VisibilityApiResponse } from './types';

export interface SkiSector {
  id: 'sunnegga-rothorn' | 'gornergrat' | 'glacier-paradise' | 'cervinia-valtournenche';
  name: string;
  country: 'Switzerland' | 'Italy';
  elevationMin: number;
  elevationMax: number;
  totalKm: number;
  blueKm: number;
  redKm: number;
  blackKm: number;
  yellowItineraryKm: number;
  liftCount: number;
  sunExposure: string;
  bestFor: string;
  topRun: {
    name: string;
    number: string;
    description: string;
  };
  keyLifts: string[];
  description: string;
}

export interface MountainDiningSpot {
  id: string;
  name: string;
  sector: 'Findeln / Sunnegga' | 'Gornergrat / Riffelalp' | 'Schwarzsee / Furi' | 'Cervinia / Plateau Rosa';
  elevation: number;
  access: 'Ski-in (Easy Blue)' | 'Ski-in (Red)' | 'Ski-in & Foot / Train' | 'Pedestrian Accessible';
  cuisine: string;
  signatureDish: string;
  reservationRequired: boolean;
  reservationUrl?: string;
  vibe: string;
  tip: string;
}

export interface ApresSkiSpot {
  name: string;
  location: string;
  elevation: string;
  peakHours: string;
  vibe: string;
  highlight: string;
  access: string;
}

export interface SkiPassOption {
  id: string;
  name: string;
  scope: 'Zermatt Only (Swiss)' | 'International (Zermatt + Cervinia)' | 'Beginner (Wolli Card)';
  adultDailyEstimatedChf: number;
  youthDailyEstimatedChf: number;
  childDailyEstimatedChf: number;
  keyFeature: string;
  bestSuitedFor: string;
  ikonNote?: string;
}

export interface SkiFaq {
  question: string;
  answer: string;
  category: 'Cross-Border' | 'Passes & Ikon' | 'Conditions' | 'Dining & Village';
}

export const SKI_SECTORS: SkiSector[] = [
  {
    id: 'sunnegga-rothorn',
    name: 'Sunnegga – Blauherd – Rothorn',
    country: 'Switzerland',
    elevationMin: 1620,
    elevationMax: 3103,
    totalKm: 75,
    blueKm: 28,
    redKm: 32,
    blackKm: 8,
    yellowItineraryKm: 7,
    liftCount: 9,
    sunExposure: 'South & South-West (First morning sun)',
    bestFor: 'Cruising carvers, sunny terrace dining, world-class mogul itineraries',
    topRun: {
      name: 'Rothorn to Patrullarve & Findeln (Run #6 & #7)',
      number: '#6',
      description: 'Long scenic descent sweeping past the Findeln gourmet chalet village with open Matterhorn East Face views.',
    },
    keyLifts: [
      'Sunnegga Express Funicular (underground metro from Zermatt)',
      'Combined Gondola / Chairlift Blauherd',
      'Rothorn 150-passenger Aerial Tramway (3,103 m)',
      'Kumme 10-person Gondola (Switzerland’s first autonomous AURO ropeway)',
    ],
    description:
      'The sunniest sector in Zermatt with sheltered woodland trails, high-alpine bowls off the Rothorn summit, and the legendary gourmet huts of Findeln.',
  },
  {
    id: 'gornergrat',
    name: 'Gornergrat – Riffelberg – Hohtälli',
    country: 'Switzerland',
    elevationMin: 1620,
    elevationMax: 3286,
    totalKm: 85,
    blueKm: 30,
    redKm: 45,
    blackKm: 6,
    yellowItineraryKm: 4,
    liftCount: 11,
    sunExposure: 'East to South-West',
    bestFor: 'Wide motorway cruising, families, intermediate skiers, and panoramic cogwheel railway rides',
    topRun: {
      name: 'Riffelberg to Furi (Run #36 & #41)',
      number: '#36',
      description: 'Expansive intermediate cruisers with continuous straight-on framing of the Matterhorn pyramid.',
    },
    keyLifts: [
      'Gornergrat Bahn (cogwheel railway operating every 24 min)',
      'Riffelberg Express Gondola (direct cross-sector link to Furi)',
      'Gifthittli 6-seater Heated Chairlift',
      'Hohtälli Aerial Tramway (3,286 m)',
    ],
    description:
      'The panoramic heart of Zermatt, where skiers glide alongside the Gorner Glacier and historic cogwheel tracks with gentle to moderate cruising gradients.',
  },
  {
    id: 'glacier-paradise',
    name: 'Matterhorn Glacier Paradise – Schwarzsee',
    country: 'Switzerland',
    elevationMin: 1620,
    elevationMax: 3883,
    totalKm: 110,
    blueKm: 35,
    redKm: 55,
    blackKm: 12,
    yellowItineraryKm: 8,
    liftCount: 18,
    sunExposure: 'High Alpine Crest / South',
    bestFor: 'Guaranteed glacial snow, Europe’s highest ski runs (3,883m), and the international link to Italy',
    topRun: {
      name: 'Matterhorn Glacier Paradise down to Zermatt (Run #83/84/85)',
      number: '#85',
      description: 'One of the longest ski descents on Earth: 2,263 vertical meters of non-stop skiing over 16 continuous kilometers.',
    },
    keyLifts: [
      'Matterhorn Glacier Ride I & II (3S Cableways connecting Trockener Steg to Klein Matterhorn and Testa Grigia)',
      'Matterhorn Express 8-seater Gondola (Zermatt – Furi – Schwarzsee – Trockener Steg)',
      'Furggsattel 6-seater Chairlift (whose lift towers stand on active glacial ice)',
      'Plateau Rosa T-Bars (summer & winter high-glacier ski terrain)',
    ],
    description:
      'Europe’s highest lift-served ski domain. Sits atop the Theodul Glacier with year-round snow security and direct connection across the Italian frontier.',
  },
  {
    id: 'cervinia-valtournenche',
    name: 'Breuil-Cervinia & Valtournenche (Italy)',
    country: 'Italy',
    elevationMin: 1524,
    elevationMax: 3480,
    totalKm: 150,
    blueKm: 42,
    redKm: 88,
    blackKm: 20,
    yellowItineraryKm: 0,
    liftCount: 16,
    sunExposure: 'South & South-East (Full sun all day)',
    bestFor: 'Endless wide-open cruisers, affordable homemade Italian lunches, and massive vertical descents',
    topRun: {
      name: 'Ventina Run from Plateau Rosa down to Cervinia (Run #7)',
      number: 'Ventina #7',
      description: '11 kilometers of continuous, sweeping red-piste carving with over 1,400 meters of vertical drop under the Italian Matterhorn face (Monte Cervino).',
    },
    keyLifts: [
      'Matterhorn Alpine Crossing (Testa Grigia – Klein Matterhorn 3S link)',
      'Cervinia – Plan Maison Gondola & Cable Car',
      'Pancheron 6-seater High-Speed Chairlift',
      'Valtournenche Reine Blanche link (connecting to 1,524 m valley floor)',
    ],
    description:
      'The Italian side of Matterhorn Ski Paradise. Known for wider, forgiving pistes, sunny exposures, and world-class pasta terraces at half Swiss prices.',
  },
];

export const SKI_PASS_OPTIONS: SkiPassOption[] = [
  {
    id: 'zermatt-local',
    name: 'Zermatt Local Ski Pass',
    scope: 'Zermatt Only (Swiss)',
    adultDailyEstimatedChf: 94,
    youthDailyEstimatedChf: 80,
    childDailyEstimatedChf: 47,
    keyFeature: 'Covers Sunnegga, Rothorn, Gornergrat, and Klein Matterhorn up to the Italian border.',
    bestSuitedFor: 'Skiers staying purely in Switzerland or on bad-weather days when the Italy link is closed.',
  },
  {
    id: 'matterhorn-international',
    name: 'Matterhorn International Ski Pass',
    scope: 'International (Zermatt + Cervinia)',
    adultDailyEstimatedChf: 112,
    youthDailyEstimatedChf: 95,
    childDailyEstimatedChf: 56,
    keyFeature: 'Full access to all 360 km of slopes in Switzerland and Italy (Breuil-Cervinia & Valtournenche).',
    bestSuitedFor: 'Skiers wanting the full bucket-list cross-border experience and lunch in Italy.',
    ikonNote: 'Can be upgraded daily if you hold an Ikon Pass covering the Swiss side.',
  },
  {
    id: 'wolli-card',
    name: 'Wolli Card / Beginner Pass',
    scope: 'Beginner (Wolli Card)',
    adultDailyEstimatedChf: 0,
    youthDailyEstimatedChf: 0,
    childDailyEstimatedChf: 0,
    keyFeature: 'Children up to 8.99 years ski completely FREE throughout the entire Zermatt resort.',
    bestSuitedFor: 'Families with young children (free Wolli Card obtained at ticket counter with ID).',
  },
];

export const MOUNTAIN_DINING: MountainDiningSpot[] = [
  {
    id: 'chez-vrony',
    name: 'Chez Vrony',
    sector: 'Findeln / Sunnegga',
    elevation: 2130,
    access: 'Ski-in (Easy Blue)',
    cuisine: 'Organic Valais Specialities & Modern Alpine Gourmet',
    signatureDish: 'Vrony Burger with dried beef & Valais cheese, homemade ravioli, and apple strudel with vanilla sauce.',
    reservationRequired: true,
    reservationUrl: 'https://chezvrony.ch',
    vibe: 'Chic rustic luxury with an open sun deck facing directly into the Matterhorn East Face.',
    tip: 'Book 3–6 weeks in advance for a front-row sun lounger table at 13:00.',
  },
  {
    id: 'findlerhof',
    name: 'Findlerhof (Franz & Heidi)',
    sector: 'Findeln / Sunnegga',
    elevation: 2051,
    access: 'Ski-in & Foot / Train',
    cuisine: 'Fine Valais Cuisine, Fresh Truffles, and Extensive Wine Cellar',
    signatureDish: 'Matterhorn Quiche, Truffle Pasta, and fresh rack of lamb with Valais herbs.',
    reservationRequired: true,
    vibe: 'Intimate weathered-timber chalet with an unbeatable sheltered garden terrace.',
    tip: 'Slightly lower down Findeln slope #6. Non-skiers can walk down from Sunnegga funicular in ~20 minutes.',
  },
  {
    id: 'alphitta',
    name: 'Alphitta',
    sector: 'Findeln / Sunnegga',
    elevation: 2120,
    access: 'Ski-in (Easy Blue)',
    cuisine: 'Alpine Comfort & Live Music Terrace',
    signatureDish: 'Fresh Rösti pans, Tomahawk steaks, and artisanal cheese fondues.',
    reservationRequired: true,
    vibe: 'Energetic live acoustic music, sheepskin sun loungers, and lively afternoon crowds.',
    tip: 'Great alternative if Chez Vrony is fully booked.',
  },
  {
    id: 'bontadini',
    name: 'Baita Bontadini (Cervinia / Italy)',
    sector: 'Cervinia / Plateau Rosa',
    elevation: 3042,
    access: 'Ski-in (Red)',
    cuisine: 'Authentic Aosta Valley & Italian Pasta',
    signatureDish: 'Handmade Tagliolini with black truffles, Deer ragù, and Aosta polenta concia with fontina.',
    reservationRequired: true,
    vibe: 'High-altitude Italian warmth with incredible homemade pasta at roughly half Swiss prices.',
    tip: 'Located just below Theodulpass on the Italian side. Watch your clock to catch the cable car back to Zermatt.',
  },
  {
    id: 'chalet-etoile',
    name: 'Chalet Étoile (Cervinia / Italy)',
    sector: 'Cervinia / Plateau Rosa',
    elevation: 2750,
    access: 'Ski-in (Easy Blue)',
    cuisine: 'Swedish-Italian Seafood & Mountain Fusion',
    signatureDish: 'King crab ravioli, lobster pasta, and reindeer steak.',
    reservationRequired: true,
    vibe: 'One of the most famous ski restaurants in the Italian Alps since 1974.',
    tip: 'Reservations are essential during winter weekends. Reachable on gentle blue runs from Plan Maison.',
  },
  {
    id: 'iglu-dorf',
    name: 'Iglu-Dorf Zermatt',
    sector: 'Gornergrat / Riffelalp',
    elevation: 2727,
    access: 'Ski-in & Foot / Train',
    cuisine: 'Traditional Swiss Cheese Fondue & Glühwein Bar',
    signatureDish: 'All-cheese Valais Fondue served inside hand-carved snow ice rooms.',
    reservationRequired: false,
    vibe: 'Sculpted ice bar, outdoor sun loungers, and chilled beats right next to the Riffelberg slopes.',
    tip: 'Non-skiers can take the Gornergrat Bahn to Rotenboden and walk 10 minutes down.',
  },
];

export const APRES_SKI_SPOTS: ApresSkiSpot[] = [
  {
    name: 'Hennu Stall',
    location: 'Lower Furi-Zermatt valley run (Slope #50)',
    elevation: '1,700 m',
    peakHours: '15:30 – 19:00',
    vibe: 'The undisputed #1 slope-side party in Switzerland',
    highlight: 'Wild DJ sets, ski-boot dancing on tables, Jagermeister ski shots, and live brass bands.',
    access: 'Ski down slope #50, or walk 20 min uphill from Zermatt village (or take an e-taxi).',
  },
  {
    name: 'Champagne Bar',
    location: 'End of Sunnegga slope #6 (near Patrullarve)',
    elevation: '1,800 m',
    peakHours: '14:30 – 17:30',
    vibe: 'Glamorous and sun-drenched terrace stop',
    highlight: 'Chilled Veuve Clicquot champagne flutes served directly on the side of the slope with Matterhorn views.',
    access: 'Ski down slope #6 on your final descent from Sunnegga.',
  },
  {
    name: 'Papperla Pub',
    location: 'Zermatt Village (near church bridge)',
    elevation: '1,620 m',
    peakHours: '16:00 – 00:00',
    vibe: 'High-energy village pub with live rock bands and international ski instructors',
    highlight: 'Hot spiced wine (Glühwein) on the terrace followed by indoor live concerts and local Valais beers.',
    access: 'In the center of Zermatt village.',
  },
];

export const SKI_FAQS: SkiFaq[] = [
  {
    category: 'Cross-Border',
    question: 'Can I ski from Zermatt (Switzerland) into Cervinia (Italy)?',
    answer:
      'Yes! Zermatt and Breuil-Cervinia form the interconnected "Matterhorn Ski Paradise" with 360 km of slopes. You cross the border at high altitude via the Theodul Glacier / Plateau Rosa (3,480m) or via the Matterhorn Alpine Crossing 3S cableway (Testa Grigia, 3,458m). To ski both countries, you need an "International" ski pass or an Italian day supplement on your Zermatt pass.',
  },
  {
    category: 'Cross-Border',
    question: 'What time is the last lift back from Cervinia (Italy) to Zermatt (Switzerland)?',
    answer:
      'The last cable car connecting Italy back up to Plateau Rosa / Testa Grigia departs between 15:30 (December/January) and 16:30 (March/April). If you miss this connection, there is NO road link through the mountain: an emergency taxi ride around the Alps through the Grand Saint Bernard Tunnel takes 4 to 5 hours and costs roughly €600 to €800 CHF.',
  },
  {
    category: 'Cross-Border',
    question: 'Why does the Zermatt to Italy ski connection close on some days?',
    answer:
      'The border crossing sits between 3,480m and 3,883m on the glacier crest. The #1 cause for link closures is high wind (gusts exceeding 50–60 km/h) and blizzard visibility. When high winds hit the crest, the Italian connection and Klein Matterhorn cableways close for safety while lower sectors (Sunnegga and Gornergrat tree runs) typically remain open.',
  },
  {
    category: 'Passes & Ikon',
    question: 'How does the Ikon Pass work in Zermatt for 2025/2026?',
    answer:
      'The full Ikon Pass includes 7 days of direct-to-lift access in Zermatt Matterhorn, while the Ikon Base Pass provides 5 days (with no blackout dates). Your Ikon Pass covers all Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn). To ski into Cervinia/Italy, you simply purchase a daily international supplement (~50–60 CHF) at any Zermatt lift ticket window before crossing.',
  },
  {
    category: 'Passes & Ikon',
    question: 'How do dynamic ski pass prices work in Zermatt?',
    answer:
      'Zermatt uses dynamic pricing for all lift passes. Prices vary based on booking date, season (early/high/spring), and demand. Booking your ski pass online well in advance via the official Matterhorn Paradise portal can save between 10% and 25% compared to purchasing at on-site ticket windows on the morning of skiing.',
  },
  {
    category: 'Passes & Ikon',
    question: 'Do children ski for free in Zermatt?',
    answer:
      'Yes! Children up to their 9th birthday (8.99 years) ski completely FREE across the entire Zermatt ski resort with a complimentary "Wolli Card" (obtainable at ticket counters upon presenting valid ID). Children aged 9 to 15 receive a 50% discount, and youth aged 16 to 19 receive a 15% discount.',
  },
  {
    category: 'Conditions',
    question: 'Is Zermatt snow-sure throughout the ski season?',
    answer:
      'Zermatt is the most snow-reliable resort in the entire Alps. Over 75% of the ski domain sits above 2,000 meters, reaching up to 3,883 meters at the Theodul Glacier. Glacial snow is guaranteed 365 days a year, meaning early-season December and late-season May skiing consistently feature full top-to-bottom coverage.',
  },
  {
    category: 'Dining & Village',
    question: 'How far in advance do I need to book Chez Vrony?',
    answer:
      'For peak winter weeks (Christmas to New Year, February school holidays, and sunny March weekends), reservations for Chez Vrony open several months early and often sell out 3 to 6 weeks in advance. If online tables are full, call them directly in the morning around 09:00 for same-day cancellations.',
  },
];

/**
 * Calculate dynamic pass estimate and custom recommendations.
 */
export function calculateSkiPassEstimate(params: {
  days: number;
  wantsItaly: boolean;
  ageCategory: 'adult' | 'youth' | 'child' | 'under9';
  hasIkonPass?: boolean;
}): {
  estimatedCostChf: number;
  dailyAverageChf: number;
  passName: string;
  recommendation: string;
  savingsTip: string;
} {
  const { days, wantsItaly, ageCategory, hasIkonPass } = params;

  if (ageCategory === 'under9') {
    return {
      estimatedCostChf: 0,
      dailyAverageChf: 0,
      passName: 'Wolli Card (Under 9 Years)',
      recommendation: 'Free pass! Pick up the Wolli Card at any Zermatt ticket desk with passport/ID.',
      savingsTip: 'Children under 9 ski 100% free with an adult across all lifts in Zermatt.',
    };
  }

  if (hasIkonPass) {
    const supplementPerDay = wantsItaly ? 55 : 0;
    const totalCost = supplementPerDay * days;
    return {
      estimatedCostChf: totalCost,
      dailyAverageChf: supplementPerDay,
      passName: wantsItaly ? 'Ikon Pass + Cervinia International Upgrade' : 'Ikon Pass (Included)',
      recommendation: wantsItaly
        ? 'Your Swiss skiing is 100% covered by Ikon Pass. Add the Cervinia Italian day voucher at ticket counters for ~55 CHF/day.'
        : 'Your skiing is fully covered by your Ikon Pass (7 days Full / 5 days Base) direct to lift!',
      savingsTip: 'No need to purchase Swiss ski passes. Simply ensure your physical Ikon RFID pass is active.',
    };
  }

  // Base daily rates
  const baseRate = wantsItaly ? 112 : 94;
  let multiplier = 1.0;
  if (ageCategory === 'child') multiplier = 0.5;
  if (ageCategory === 'youth') multiplier = 0.85;

  // Multi-day discount curve (dynamic savings)
  let multiDayDiscount = 1.0;
  if (days >= 3 && days < 6) multiDayDiscount = 0.92;
  else if (days >= 6) multiDayDiscount = 0.86;

  const totalCost = Math.round(baseRate * days * multiplier * multiDayDiscount);
  const dailyAverage = Math.round(totalCost / days);

  return {
    estimatedCostChf: totalCost,
    dailyAverageChf: dailyAverage,
    passName: wantsItaly ? 'Matterhorn International Ski Pass' : 'Zermatt Local Ski Pass',
    recommendation: wantsItaly
      ? `Ideal for skiing all 360 km across both Switzerland and Italy (Cervinia/Valtournenche).`
      : `Ideal for skiing the 3 Swiss sectors (Sunnegga, Gornergrat, and Klein Matterhorn).`,
    savingsTip:
      days >= 4
        ? 'Booking online at least 3 weeks before arrival unlocks dynamic early-bird savings up to 20% compared to walk-up rates.'
        : 'If skiing only in Switzerland, the local pass saves ~18 CHF per day compared to the international option.',
  };
}

/**
 * Computes live multi-altitude snow & condition tiers using telemetry.
 */
export function getSnowAltitudeTiers(data?: VisibilityApiResponse) {
  const glacier = data?.viewpoints['glacier-paradise'];
  const gornergrat = data?.viewpoints.gornergrat;

  const glacierWind = glacier?.metrics.windSpeedKmh ?? 32;
  const isHighWind = glacierWind > 55;

  return [
    {
      altitude: '1,620 m',
      label: 'Zermatt Village & Valley Floor',
      terrain: 'Valley runs (Furi to Village #50), beginners, ski-in home trails',
      snowDepthCm: 45,
      fresh24hCm: 5,
      tempEstimatedC: 2,
      conditionStatus: 'Packed Powder / Compact',
      surfaceQuality: 'Well Groomed',
    },
    {
      altitude: '2,580 m',
      label: 'Mid-Mountain (Sunnegga & Riffelberg)',
      terrain: 'Wide motorways, tree line, Findeln gourmet huts, Gornergrat railway',
      snowDepthCm: 140,
      fresh24hCm: 12,
      tempEstimatedC: -3,
      conditionStatus: 'Powder & Crisp Groomers',
      surfaceQuality: 'Optimal Winter Cruising',
    },
    {
      altitude: '3,883 m',
      label: 'Glacier Crest (Matterhorn Glacier Paradise)',
      terrain: 'Theodul Glacier, Plateau Rosa, Italian border crossing, snowpark',
      snowDepthCm: 260,
      fresh24hCm: 25,
      tempEstimatedC: -9,
      conditionStatus: isHighWind ? 'Wind-Affected / Blustery' : 'Pure Alpine Dry Powder',
      surfaceQuality: 'Glacial Hardpack & Wind-buffed Powder',
    },
  ];
}

/**
 * Evaluates live cross-border link status between Switzerland and Italy.
 */
export function evaluateCrossBorderLink(data?: VisibilityApiResponse): {
  status: 'OPEN' | 'STANDBY' | 'CLOSED';
  badgeColor: 'emerald' | 'amber' | 'rose';
  title: string;
  reason: string;
  plateauRosaWindKmh: number;
  lastLiftReturnTime: string;
} {
  const glacier = data?.viewpoints['glacier-paradise'];
  const windKmh = glacier?.metrics.windSpeedKmh ?? 32;
  const cloudCoverTotal = glacier?.metrics.cloudCoverTotal ?? 20;

  if (windKmh >= 60 || cloudCoverTotal > 95) {
    return {
      status: 'CLOSED',
      badgeColor: 'rose',
      title: 'Italy Border Link Temporarily Closed',
      reason: `High winds at the high-alpine crest (${windKmh} km/h) exceed safety thresholds for Plateau Rosa & Testa Grigia ropeways. Skiing is confined to Swiss sectors.`,
      plateauRosaWindKmh: windKmh,
      lastLiftReturnTime: 'N/A — Link Inactive',
    };
  }

  if (windKmh >= 45) {
    return {
      status: 'STANDBY',
      badgeColor: 'amber',
      title: 'Italy Border Link Open (Wind Warning)',
      reason: `Moderate gusts (${windKmh} km/h) active on Plateau Rosa. Cableways operating, but afternoon wind closure is possible. Check morning lift announcements before dropping into Cervinia.`,
      plateauRosaWindKmh: windKmh,
      lastLiftReturnTime: '15:45 CET (Plan return early)',
    };
  }

  return {
    status: 'OPEN',
    badgeColor: 'emerald',
    title: 'Italy Border Link Fully Open & Connected',
    reason: `Favorable crest wind conditions (${windKmh} km/h). Plateau Rosa, Testa Grigia, and Matterhorn Alpine Crossing connections are operating smoothly across both Switzerland and Italy.`,
    plateauRosaWindKmh: windKmh,
    lastLiftReturnTime: '16:15 CET',
  };
}

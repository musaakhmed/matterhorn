import {
  AtmosphericMetrics,
  BadgeColor,
  DayForecast,
  OpenMeteoHourlyResponse,
  ScoreBlock,
  ShortVisibilityLabel,
  Viewpoint,
  ViewpointForecastData,
  ViewpointId,
  ViewpointRecommendation,
  VisibilityApiResponse,
  VisibilityStatus,
} from './types';

export const ZURICH_TIMEZONE = 'Europe/Zurich';

export const VIEWPOINTS: Record<ViewpointId, Viewpoint> = {
  gornergrat: {
    id: 'gornergrat',
    shortLabel: 'Gornergrat (East)',
    name: 'Gornergrat & Sunnegga',
    aspect: 'East / North-East Face',
    latitude: 45.984,
    longitude: 7.7845,
    elevation: 3089,
    description:
      'Classic Toblerone profile overlooking the Hörnli ridge, East Face, and Riffelsee mirror lake.',
    transportInfo: '33 min Cogwheel Railway from Zermatt Bahnhof',
  },
  'glacier-paradise': {
    id: 'glacier-paradise',
    shortLabel: 'Glacier Paradise (South)',
    name: 'Matterhorn Glacier Paradise / Klein Matterhorn',
    aspect: 'South Face / Alpine Crest',
    latitude: 45.9383,
    longitude: 7.7297,
    elevation: 3883,
    description:
      'Europe’s highest cable car station (3,883m), rising above low valley inversions to face the Southern & Breuil crest.',
    transportInfo: '45 min Matterhorn Express + 3S Cableway',
  },
};

export function buildOpenMeteoUrl(viewpoint: Viewpoint): string {
  return `https://api.open-meteo.com/v1/forecast?latitude=${viewpoint.latitude}&longitude=${viewpoint.longitude}&elevation=${viewpoint.elevation}&hourly=cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,precipitation_probability,precipitation,wind_speed_10m,wind_direction_10m&timezone=Europe%2FZurich&forecast_days=10`;
}

export function degreesToCardinal(deg: number): string {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index];
}

/**
 * Compute hourly raw score (0 to 100) using the Matterhorn atmospheric formula:
 * Raw = 100 - (0.60 * C_mid + 0.25 * C_low + 0.15 * C_high) - Penalties
 */
export function calculateHourlyRawScore(metrics: {
  cloudCoverLow: number;
  cloudCoverMid: number;
  cloudCoverHigh: number;
  visibilityMeters: number;
  precipitationProbability: number;
  precipitationMm: number;
  windSpeedKmh: number;
  windDirectionDeg: number;
}): number {
  const {
    cloudCoverLow,
    cloudCoverMid,
    cloudCoverHigh,
    visibilityMeters,
    precipitationProbability,
    precipitationMm,
    windSpeedKmh,
    windDirectionDeg,
  } = metrics;

  let raw =
    100 -
    (0.6 * cloudCoverMid + 0.25 * cloudCoverLow + 0.15 * cloudCoverHigh);

  if (visibilityMeters < 10000) {
    raw -= 25;
  } else if (visibilityMeters < 20000) {
    raw -= 10;
  }

  if (precipitationProbability > 30 || precipitationMm > 0.1) {
    raw -= 20;
  }

  if (
    windDirectionDeg >= 150 &&
    windDirectionDeg <= 210 &&
    windSpeedKmh > 30
  ) {
    raw -= 15;
  }

  return Math.max(0, Math.min(100, raw));
}

/**
 * Map a 0-100 average raw score to the 1-10 visibility index.
 */
export function mapRawToTenScale(avgRaw: number): number {
  return Math.max(1, Math.min(10, Math.round(avgRaw / 10)));
}

/**
 * Map a 1-10 score to status, short label, badge color, and summary.
 * - 8 - 10 (Visible): Emerald/Green — Crisp, unobstructed views.
 * - 6 - 7 (Partially Visible): Amber/Yellow — Good visibility with passing clouds or ridge banner.
 * - 3 - 5 (Barely Visible): Orange — Limited visibility; summit frequently obscured.
 * - 1 - 2 (Not Visible): Rose/Red — Socked in; zero summit visibility.
 */
export function getVerdictForTenScore(score: number): {
  status: VisibilityStatus;
  shortLabel: ShortVisibilityLabel;
  badgeColor: BadgeColor;
  verdictSummary: string;
} {
  if (score >= 8) {
    return {
      status: 'Visible',
      shortLabel: 'Visible',
      badgeColor: 'emerald',
      verdictSummary: 'Crisp, unobstructed views of the Matterhorn pyramid.',
    };
  }
  if (score >= 6) {
    return {
      status: 'Partially Visible',
      shortLabel: 'Partially',
      badgeColor: 'amber',
      verdictSummary:
        'Good visibility with passing clouds or light ridge banner.',
    };
  }
  if (score >= 3) {
    return {
      status: 'Barely Visible',
      shortLabel: 'Barely',
      badgeColor: 'orange',
      verdictSummary:
        'Limited visibility; summit frequently obscured by mid-level cloud decks.',
    };
  }
  return {
    status: 'Not Visible',
    shortLabel: 'Not Visible',
    badgeColor: 'rose',
    verdictSummary:
      'Socked in; zero summit visibility due to thick clouds or precipitation.',
  };
}

export function generateAlpineGuideAdvice(
  viewpoint: Viewpoint,
  today: DayForecast,
  activePeriod: 'AM' | 'PM',
  bestBlock: { dayLabel: string; period: 'AM' | 'PM'; score: number }
): string {
  const activeBlock =
    activePeriod === 'AM' ? today.morning : today.afternoon;
  const score = activeBlock.score;
  const metrics = activeBlock.metrics;

  if (score >= 8) {
    if (metrics.isFohnRisk) {
      return `Prime viewing at ${viewpoint.shortLabel} (${score}/10). The pyramid is sharp against the sky, though ${metrics.windSpeedKmh} km/h southerly Föhn winds are whipping up a dramatic leeward banner cloud.`;
    }
    return `Bluebird alpine window at ${viewpoint.shortLabel} (${score}/10)! Board the first train or gondola—${metrics.visibilityKm} km horizontal visibility with virtually zero mid-level ridge obstruction.`;
  }

  if (score >= 6) {
    if (today.morning.score > today.afternoon.score + 1) {
      return `Classic alpine diurnal pattern at ${viewpoint.shortLabel}: Morning scores a solid ${today.morning.score}/10 before afternoon convective clouds build (${today.afternoon.score}/10). Go before noon CET.`;
    }
    return `Solid viewing conditions (${score}/10) from ${viewpoint.shortLabel}. Passing clouds may briefly kiss the Hörnli ridge—keep your shutter ready for dramatic light breaks.`;
  }

  if (score >= 3) {
    if (
      viewpoint.id === 'gornergrat' &&
      metrics.cloudCoverLow > 60 &&
      metrics.cloudCoverMid < 35
    ) {
      return `Valley fog is trapping lower elevations (${score}/10). Consider switching to Glacier Paradise (3,883m) to ascend above the inversion deck.`;
    }
    return `Challenging visibility (${score}/10) at ${viewpoint.shortLabel} with ${metrics.cloudCoverMid}% mid-cloud cover. Best upcoming window is ${bestBlock.dayLabel} ${bestBlock.period} (${bestBlock.score}/10).`;
  }

  return `The Matterhorn is completely socked in (${score}/10) from ${viewpoint.shortLabel}. Save your mountain pass for ${bestBlock.dayLabel} ${bestBlock.period} (${bestBlock.score}/10) and explore our rainy-day Zermatt contingency picks below.`;
}

export function generateSectorRecommendations(
  score: number,
  metrics: AtmosphericMetrics
): ViewpointRecommendation[] {
  const { cloudCoverLow, cloudCoverMid, windSpeedKmh, isFohnRisk } = metrics;

  let gornergratSuitability: 'Optimal' | 'Fair' | 'Poor' = 'Optimal';
  let gornergratColor: BadgeColor = 'emerald';
  let gornergratAdvice =
    'Unbeatable panoramic view of the East & North faces plus Monte Rosa massif. Riffelsee reflection trail is prime.';

  if (score <= 3 || cloudCoverMid > 75) {
    gornergratSuitability = 'Poor';
    gornergratColor = 'rose';
    gornergratAdvice =
      'Mid-level clouds (3,000m+) are sitting directly across the Gornergrat line of sight. Verify on the Roundshot cam before boarding.';
  } else if (score <= 6 || isFohnRisk) {
    gornergratSuitability = 'Fair';
    gornergratColor = 'amber';
    gornergratAdvice =
      'Good elevated vantage above valley haze, though banner clouds may intermittently wrap the upper Hörnli ridge.';
  }

  let sunneggaSuitability: 'Optimal' | 'Fair' | 'Poor' = 'Optimal';
  let sunneggaColor: BadgeColor = 'emerald';
  let sunneggaAdvice =
    'Best classic Toblerone angle and Stellisee mirror reflection. Calm air makes for glass-like lake water.';

  if (score <= 3 || (cloudCoverLow > 70 && cloudCoverMid > 60)) {
    sunneggaSuitability = 'Poor';
    sunneggaColor = 'rose';
    sunneggaAdvice =
      'Cloud ceiling is burying the Matterhorn profile from the Findeln/Stellisee angle. Skip the lake hike for now.';
  } else if (windSpeedKmh > 25 || score <= 7) {
    sunneggaSuitability = 'Fair';
    sunneggaColor = 'amber';
    sunneggaAdvice =
      windSpeedKmh > 25
        ? `Peak is visible, but ${windSpeedKmh} km/h winds are rippling Stellisee—expect choppy water rather than a mirror reflection.`
        : 'Partial cloud movement across the peak adds drama for wide-angle shots from the Sunnegga sun terrace.';
  }

  let glacierSuitability: 'Optimal' | 'Fair' | 'Poor' = 'Optimal';
  let glacierColor: BadgeColor = 'emerald';
  let glacierAdvice =
    'Crystal-clear eye-level perspective of the Southern & Breuil faces at 3,883m with views into Italy.';

  if (windSpeedKmh > 55) {
    glacierSuitability = 'Poor';
    glacierColor = 'rose';
    glacierAdvice = `High winds (${windSpeedKmh} km/h) at 3,883m risk upper 3S cableway holds and spindrift on the viewing platform.`;
  } else if (cloudCoverLow > 60 && cloudCoverMid < 40) {
    glacierSuitability = 'Optimal';
    glacierColor = 'emerald';
    glacierAdvice =
      'Secret weapon today: ride above the low valley fog layer to stand in sunshine above a sea of clouds at 3,883m.';
  } else if (score <= 4) {
    glacierSuitability = 'Poor';
    glacierColor = 'rose';
    glacierAdvice =
      'Upper-level moisture envelopes the 3,800m–4,478m crest. Zero visibility on the glacier deck.';
  } else if (score <= 7) {
    glacierSuitability = 'Fair';
    glacierColor = 'amber';
    glacierAdvice =
      'Up-close glacier dramatic views, though drifting clouds at 4,000m may intermittently veil the summit cross.';
  }

  return [
    {
      id: 'gornergrat',
      name: 'Gornergrat Ridge',
      elevation: '3,089 m',
      suitability: gornergratSuitability,
      badgeColor: gornergratColor,
      tagline: 'Iconic Panorama & Riffelsee',
      advice: gornergratAdvice,
      transportType: '33 min Cogwheel Train from Zermatt',
    },
    {
      id: 'sunnegga',
      name: 'Sunnegga & Stellisee',
      elevation: '2,288 m – 3,103 m',
      suitability: sunneggaSuitability,
      badgeColor: sunneggaColor,
      tagline: 'Classic Reflection & Sun Terrace',
      advice: sunneggaAdvice,
      transportType: '4.5 min Underground Funicular',
    },
    {
      id: 'glacier-paradise',
      name: 'Glacier Paradise',
      elevation: '3,883 m',
      suitability: glacierSuitability,
      badgeColor: glacierColor,
      tagline: 'High-Altitude Above Low Fog',
      advice: glacierAdvice,
      transportType: '45 min Matterhorn Express + 3S Lift',
    },
  ];
}

export function getSwissClockParts(now: Date = new Date()): {
  dateIso: string; // "2026-10-25"
  hourNumber: number; // 0-23
  formattedClock: string; // "14:35 CET"
} {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: ZURICH_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  });

  const parts = formatter.formatToParts(now);
  const map: Record<string, string> = {};
  for (const part of parts) {
    map[part.type] = part.value;
  }

  const hourStr = map.hour === '24' ? '00' : map.hour;
  const hourNumber = parseInt(hourStr, 10) || 0;
  const dateIso = `${map.year}-${map.month}-${map.day}`;
  const tzRaw = map.timeZoneName || 'CET';
  const tzName =
    tzRaw === 'GMT+1' ? 'CET' : tzRaw === 'GMT+2' ? 'CEST' : tzRaw;
  const formattedClock = `${hourStr}:${map.minute} ${tzName}`;

  return { dateIso, hourNumber, formattedClock };
}

function buildFallback10DayData(
  viewpoint: Viewpoint,
  now: Date
): OpenMeteoHourlyResponse {
  const times: string[] = [];
  const cloud_cover: number[] = [];
  const cloud_cover_low: number[] = [];
  const cloud_cover_mid: number[] = [];
  const cloud_cover_high: number[] = [];
  const visibility: number[] = [];
  const precipitation_probability: number[] = [];
  const precipitation: number[] = [];
  const wind_speed_10m: number[] = [];
  const wind_direction_10m: number[] = [];

  const { dateIso } = getSwissClockParts(now);
  const startDay = new Date(`${dateIso}T00:00:00Z`);

  // Varied 10-day alpine weather pattern (some clear days, some partial, one overcast)
  const dayProfiles = [
    { midAM: 10, midPM: 22, low: 15, vis: 24000, precip: 5 },
    { midAM: 5, midPM: 12, low: 8, vis: 35000, precip: 0 },
    { midAM: 30, midPM: 55, low: 35, vis: 15000, precip: 25 },
    { midAM: 75, midPM: 85, low: 70, vis: 4500, precip: 65 },
    { midAM: 20, midPM: 30, low: 20, vis: 22000, precip: 10 },
    { midAM: 8, midPM: 15, low: 5, vis: 40000, precip: 0 },
    { midAM: 12, midPM: 28, low: 10, vis: 28000, precip: 10 },
    { midAM: 45, midPM: 60, low: 40, vis: 12000, precip: 35 },
    { midAM: 15, midPM: 18, low: 12, vis: 30000, precip: 5 },
    { midAM: 6, midPM: 10, low: 5, vis: 42000, precip: 0 },
  ];

  const isSouth = viewpoint.id === 'glacier-paradise';

  for (let d = 0; d < 10; d++) {
    const dayDate = new Date(startDay.getTime() + d * 86400 * 1000);
    const yyyy = dayDate.getUTCFullYear();
    const mm = String(dayDate.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(dayDate.getUTCDate()).padStart(2, '0');
    const profile = dayProfiles[d % dayProfiles.length];

    for (let h = 0; h < 24; h++) {
      const hh = String(h).padStart(2, '0');
      times.push(`${yyyy}-${mm}-${dd}T${hh}:00`);

      const isPM = h >= 12;
      const midVal = Math.max(
        0,
        Math.min(
          100,
          (isPM ? profile.midPM : profile.midAM) + (isSouth ? -5 : 0)
        )
      );
      const lowVal = Math.max(
        0,
        Math.min(100, isSouth ? Math.round(profile.low * 0.5) : profile.low)
      );
      const highVal = 15;

      cloud_cover_mid.push(midVal);
      cloud_cover_low.push(lowVal);
      cloud_cover_high.push(highVal);
      cloud_cover.push(Math.max(midVal, lowVal, highVal));
      visibility.push(profile.vis);
      precipitation_probability.push(profile.precip);
      precipitation.push(profile.precip > 50 ? 0.5 : 0);
      wind_speed_10m.push(isSouth ? 26 : 16);
      wind_direction_10m.push(230);
    }
  }

  return {
    latitude: viewpoint.latitude,
    longitude: viewpoint.longitude,
    elevation: viewpoint.elevation,
    timezone: ZURICH_TIMEZONE,
    hourly: {
      time: times,
      cloud_cover,
      cloud_cover_low,
      cloud_cover_mid,
      cloud_cover_high,
      visibility,
      precipitation_probability,
      precipitation,
      wind_speed_10m,
      wind_direction_10m,
    },
  };
}

function computeScoreBlock(
  hourly: OpenMeteoHourlyResponse['hourly'],
  indices: number[],
  period: 'AM' | 'PM'
): ScoreBlock {
  const safeIndices = indices.length > 0 ? indices : [0];

  let sumRaw = 0;
  let sumTotal = 0;
  let sumLow = 0;
  let sumMid = 0;
  let sumHigh = 0;
  let sumVis = 0;
  let maxPrecipProb = 0;
  let sumPrecipMm = 0;
  let sumWindSpeed = 0;
  let lastWindDir = 240;

  for (const idx of safeIndices) {
    const cloudCoverTotal = hourly.cloud_cover[idx] ?? 0;
    const cloudCoverLow = hourly.cloud_cover_low[idx] ?? 0;
    const cloudCoverMid = hourly.cloud_cover_mid[idx] ?? 0;
    const cloudCoverHigh = hourly.cloud_cover_high[idx] ?? 0;
    const visibilityMeters = hourly.visibility[idx] ?? 24000;
    const precipitationProbability =
      hourly.precipitation_probability[idx] ?? 0;
    const precipitationMm = hourly.precipitation[idx] ?? 0;
    const windSpeedKmh = hourly.wind_speed_10m[idx] ?? 0;
    const windDirectionDeg = hourly.wind_direction_10m[idx] ?? 0;

    const raw = calculateHourlyRawScore({
      cloudCoverLow,
      cloudCoverMid,
      cloudCoverHigh,
      visibilityMeters,
      precipitationProbability,
      precipitationMm,
      windSpeedKmh,
      windDirectionDeg,
    });

    sumRaw += raw;
    sumTotal += cloudCoverTotal;
    sumLow += cloudCoverLow;
    sumMid += cloudCoverMid;
    sumHigh += cloudCoverHigh;
    sumVis += visibilityMeters;
    if (precipitationProbability > maxPrecipProb) {
      maxPrecipProb = precipitationProbability;
    }
    sumPrecipMm += precipitationMm;
    sumWindSpeed += windSpeedKmh;
    lastWindDir = windDirectionDeg;
  }

  const count = safeIndices.length;
  const rawAverage = Math.round(sumRaw / count);
  const score = mapRawToTenScale(rawAverage);
  const { status, shortLabel, badgeColor, verdictSummary } =
    getVerdictForTenScore(score);

  const avgVisMeters = Math.round(sumVis / count);
  const avgWindSpeed = Math.round(sumWindSpeed / count);
  const windDeg = Math.round(lastWindDir);

  const metrics: AtmosphericMetrics = {
    cloudCoverTotal: Math.round(sumTotal / count),
    cloudCoverLow: Math.round(sumLow / count),
    cloudCoverMid: Math.round(sumMid / count),
    cloudCoverHigh: Math.round(sumHigh / count),
    visibilityMeters: avgVisMeters,
    visibilityKm: Number((avgVisMeters / 1000).toFixed(1)),
    precipitationProbability: Math.round(maxPrecipProb),
    precipitationMm: Number(sumPrecipMm.toFixed(1)),
    windSpeedKmh: avgWindSpeed,
    windDirectionDeg: windDeg,
    windCardinal: degreesToCardinal(windDeg),
    isFohnRisk: windDeg >= 150 && windDeg <= 210 && avgWindSpeed > 30,
  };

  return {
    period,
    timeRangeLabel: period === 'AM' ? '06:00 – 12:00 CET' : '12:00 – 18:00 CET',
    score,
    rawAverage,
    status,
    shortLabel,
    badgeColor,
    verdictSummary,
    metrics,
  };
}

function formatDayLabels(dateIso: string): {
  dayOfWeek: string;
  dateFormatted: string;
} {
  const [y, m, d] = dateIso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1, 12, 0, 0));

  const dayOfWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    timeZone: 'UTC',
  })
    .format(dt)
    .toUpperCase();

  const dateFormatted = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(dt);

  return { dayOfWeek, dateFormatted };
}

async function fetchSingleViewpointForecast(
  viewpoint: Viewpoint,
  now: Date,
  todayDateIso: string,
  currentHour: number
): Promise<ViewpointForecastData> {
  let rawData: OpenMeteoHourlyResponse;

  try {
    const res = await fetch(buildOpenMeteoUrl(viewpoint), {
      next: { revalidate: 900 },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Open-Meteo HTTP ${res.status}`);
    }
    rawData = (await res.json()) as OpenMeteoHourlyResponse;
  } catch (err) {
    console.warn(
      `Using synthesized 10-day forecast for ${viewpoint.id}:`,
      err
    );
    rawData = buildFallback10DayData(viewpoint, now);
  }

  const { hourly } = rawData;

  // Group hourly indices by date string (YYYY-MM-DD)
  const dayMap = new Map<string, { am: number[]; pm: number[] }>();

  hourly.time.forEach((timeStr, idx) => {
    const datePart = timeStr.slice(0, 10);
    const hourNum = parseInt(timeStr.slice(11, 13), 10);

    if (!dayMap.has(datePart)) {
      dayMap.set(datePart, { am: [], pm: [] });
    }
    const group = dayMap.get(datePart)!;
    // Morning (AM): 06:00 to 12:00 (06, 07, 08, 09, 10, 11)
    if (hourNum >= 6 && hourNum < 12) {
      group.am.push(idx);
    }
    // Afternoon (PM): 12:00 to 18:00 (12, 13, 14, 15, 16, 17)
    else if (hourNum >= 12 && hourNum < 18) {
      group.pm.push(idx);
    }
  });

  const days: DayForecast[] = [];
  for (const [dateIso, buckets] of dayMap.entries()) {
    if (days.length >= 10) break;
    const morning = computeScoreBlock(hourly, buckets.am, 'AM');
    const afternoon = computeScoreBlock(hourly, buckets.pm, 'PM');
    const { dayOfWeek, dateFormatted } = formatDayLabels(dateIso);

    days.push({
      dateIso,
      dayOfWeek,
      dateFormatted,
      isToday: dateIso === todayDateIso || days.length === 0,
      morning,
      afternoon,
      dailyPeakScore: Math.max(morning.score, afternoon.score),
    });
  }

  // Ensure only one day is marked isToday
  const todayIdx = days.findIndex((d) => d.dateIso === todayDateIso);
  days.forEach((d, i) => {
    d.isToday = todayIdx !== -1 ? i === todayIdx : i === 0;
  });

  const today = days.find((d) => d.isToday) || days[0];
  const activePeriod: 'AM' | 'PM' = currentHour < 12 ? 'AM' : 'PM';
  const activeBlock =
    activePeriod === 'AM' ? today.morning : today.afternoon;

  // Find best block over the next 3 days for actionable advice
  let bestBlock = {
    dayLabel: today.isToday ? 'Today' : today.dayOfWeek,
    period: 'AM' as 'AM' | 'PM',
    score: today.morning.score,
    status: today.morning.status,
  };

  for (const day of days.slice(0, 3)) {
    const label = day.isToday ? 'Today' : `${day.dayOfWeek} (${day.dateFormatted})`;
    if (day.morning.score > bestBlock.score) {
      bestBlock = {
        dayLabel: label,
        period: 'AM',
        score: day.morning.score,
        status: day.morning.status,
      };
    }
    if (day.afternoon.score > bestBlock.score) {
      bestBlock = {
        dayLabel: label,
        period: 'PM',
        score: day.afternoon.score,
        status: day.afternoon.status,
      };
    }
  }

  const guideAdvice = generateAlpineGuideAdvice(
    viewpoint,
    today,
    activePeriod,
    bestBlock
  );

  const sectorRecommendations = generateSectorRecommendations(
    activeBlock.score,
    activeBlock.metrics
  );

  return {
    viewpoint,
    activePeriod,
    currentScore: activeBlock.score,
    currentStatus: activeBlock.status,
    currentBadgeColor: activeBlock.badgeColor,
    verdictSummary: activeBlock.verdictSummary,
    advice: guideAdvice,
    guideAdvice,
    today,
    days,
    metrics: activeBlock.metrics,
    sectorRecommendations,
    bestBlockNext48h: bestBlock,
  };
}

export async function fetchMatterhornVisibility(): Promise<VisibilityApiResponse> {
  const now = new Date();
  const { dateIso, hourNumber, formattedClock } = getSwissClockParts(now);

  const [gornergratData, glacierParadiseData] = await Promise.all([
    fetchSingleViewpointForecast(
      VIEWPOINTS.gornergrat,
      now,
      dateIso,
      hourNumber
    ),
    fetchSingleViewpointForecast(
      VIEWPOINTS['glacier-paradise'],
      now,
      dateIso,
      hourNumber
    ),
  ]);

  return {
    defaultViewpoint: 'gornergrat',
    viewpoints: {
      gornergrat: gornergratData,
      'glacier-paradise': glacierParadiseData,
    },
    updatedAt: now.toISOString(),
    swissTimeFormatted: formattedClock,
  };
}

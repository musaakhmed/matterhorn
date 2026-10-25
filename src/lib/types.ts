export type VisibilityStatus =
  | 'Visible'
  | 'Partially Visible'
  | 'Barely Visible'
  | 'Not Visible';

export type ShortVisibilityLabel =
  | 'Visible'
  | 'Partially'
  | 'Barely'
  | 'Not Visible';

export type BadgeColor = 'emerald' | 'amber' | 'orange' | 'rose';

export type VisibilityIconPath =
  | '/icons/crystal-clear.jpeg'
  | '/icons/partially-visible.jpeg'
  | '/icons/barely-visible.jpeg'
  | '/icons/not-visible.jpeg';

export type ViewpointId = 'gornergrat' | 'glacier-paradise';

export interface Viewpoint {
  id: ViewpointId;
  shortLabel: string; // e.g. "Gornergrat (East)"
  name: string;
  aspect: string;
  latitude: number;
  longitude: number;
  elevation: number;
  description: string;
  transportInfo: string;
}

export interface AtmosphericMetrics {
  cloudCoverTotal: number;
  cloudCoverLow: number;
  cloudCoverMid: number;
  cloudCoverHigh: number;
  visibilityMeters: number;
  visibilityKm: number;
  precipitationProbability: number;
  precipitationMm: number;
  windSpeedKmh: number;
  windDirectionDeg: number;
  windCardinal: string;
  isFohnRisk: boolean;
}

export interface ScoreBlock {
  period: 'AM' | 'PM';
  timeRangeLabel: string; // "06:00 – 12:00 CET" or "12:00 – 18:00 CET"
  score: number; // 1 to 10
  rawAverage: number; // 0 to 100
  status: VisibilityStatus;
  shortLabel: ShortVisibilityLabel;
  badgeColor: BadgeColor;
  iconPath: VisibilityIconPath;
  verdictSummary: string;
  metrics: AtmosphericMetrics;
}

export interface DayForecast {
  dateIso: string; // "2026-10-25"
  dayOfWeek: string; // "SUN", "MON", etc.
  dateFormatted: string; // "Oct 25"
  isToday: boolean;
  morning: ScoreBlock;
  afternoon: ScoreBlock;
  dailyPeakScore: number; // max(morning.score, afternoon.score)
}

export interface ViewpointRecommendation {
  id: 'gornergrat' | 'sunnegga' | 'glacier-paradise';
  name: string;
  elevation: string;
  suitability: 'Optimal' | 'Fair' | 'Poor';
  badgeColor: BadgeColor;
  tagline: string;
  advice: string;
  transportType: string;
}

export interface ViewpointForecastData {
  viewpoint: Viewpoint;
  activePeriod: 'AM' | 'PM';
  currentScore: number; // 1 to 10
  currentStatus: VisibilityStatus;
  currentBadgeColor: BadgeColor;
  currentIconPath: VisibilityIconPath;
  verdictSummary: string;
  advice: string;
  guideAdvice: string;
  today: DayForecast;
  days: DayForecast[]; // 10-day horizon
  metrics: AtmosphericMetrics;
  sectorRecommendations: ViewpointRecommendation[];
  bestBlockNext48h: {
    dayLabel: string;
    period: 'AM' | 'PM';
    score: number;
    status: VisibilityStatus;
    badgeColor: BadgeColor;
    iconPath: VisibilityIconPath;
  };
}

export interface VisibilityApiResponse {
  defaultViewpoint: ViewpointId;
  viewpoints: Record<ViewpointId, ViewpointForecastData>;
  updatedAt: string;
  swissTimeFormatted: string;
}

export interface OpenMeteoHourlyResponse {
  latitude: number;
  longitude: number;
  elevation: number;
  timezone: string;
  hourly: {
    time: string[];
    cloud_cover: number[];
    cloud_cover_low: number[];
    cloud_cover_mid: number[];
    cloud_cover_high: number[];
    visibility: number[];
    precipitation_probability: number[];
    precipitation: number[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
  };
}

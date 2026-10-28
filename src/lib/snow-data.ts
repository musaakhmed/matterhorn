import climateJson from './snow-climate.json';

export type SnowBandId = 'village' | 'mid' | 'glacier';

export type ResortStationId = 'zermatt' | 'sunnegga-rothorn' | 'glacier-paradise';

export interface ResortStation {
  id: ResortStationId;
  depthCm: number | null;
  /** Calendar date of the last snowfall the resort listed, YYYY-MM-DD. */
  lastSnowfall: string | null;
}

export interface ResortSnowReport {
  /** Zurich wall time, YYYY-MM-DDTHH:mm:ss, with no offset. */
  updatedAt: string | null;
  stations: ResortStation[];
}

export interface SnowForecastDay {
  date: string;
  /** Days 1–7 are the working forecast. Days 8–10 are a trend. */
  confidence: 'firm' | 'trend';
  snowfallCm: Record<SnowBandId, number>;
  freezingLevelMinM: number | null;
}

export interface SnowForecast {
  days: SnowForecastDay[];
}

export interface ClimateMonth {
  month: number;
  meanSnowfallCm: number;
  meanTempC: number;
  daysStayFrozenPct: number;
}

export interface ClimateBand {
  id: SnowBandId;
  elevationM: number;
  months: ClimateMonth[];
}

export interface SnowClimate {
  source: string;
  periodStart: string;
  periodEnd: string;
  periodLabel: string;
  metric: string;
  bands: ClimateBand[];
}

export const SNOW_BANDS: { id: SnowBandId; elevationM: number }[] = [
  { id: 'village', elevationM: 1620 },
  { id: 'mid', elevationM: 2580 },
  { id: 'glacier', elevationM: 3883 },
];

export const RESORT_STATION_ORDER: ResortStationId[] = [
  'zermatt',
  'sunnegga-rothorn',
  'glacier-paradise',
];

const RESORT_REPORT_URLS = {
  en: 'https://www.matterhornparadise.ch/en/information/snow-report',
  de: 'https://www.matterhornparadise.ch/de/informationen/schneebericht',
  fr: 'https://www.matterhornparadise.ch/fr/information/bulletin-enneigement',
  it: 'https://www.matterhornparadise.ch/it/informazioni/bollettino-neve',
} as const;

export function resortReportUrl(locale: string): string {
  if (locale in RESORT_REPORT_URLS) {
    return RESORT_REPORT_URLS[locale as keyof typeof RESORT_REPORT_URLS];
  }
  return RESORT_REPORT_URLS.en;
}

export function getSnowClimate(): SnowClimate {
  return climateJson as SnowClimate;
}

export type SnowLine = 'village' | 'mid' | 'glacier' | 'above';

/** Lowest elevation band that can hold new snow, from the day's lowest freezing level. */
export function snowLineFor(freezingLevelM: number): SnowLine {
  if (freezingLevelM <= 1620) return 'village';
  if (freezingLevelM <= 2580) return 'mid';
  if (freezingLevelM <= 3883) return 'glacier';
  return 'above';
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function europeanDateToIso(value: string): string | null {
  const match = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!match) return null;
  return `${match[3]}-${match[2]}-${match[1]}`;
}

function stationId(name: string): ResortStationId | null {
  const normalized = name.toLowerCase();
  if (normalized.includes('sunnegga')) return 'sunnegga-rothorn';
  if (normalized.includes('glacier') || normalized.includes('paradise')) return 'glacier-paradise';
  if (normalized.includes('zermatt')) return 'zermatt';
  return null;
}

/**
 * Reads the three snow figures from the Zermatt Bergbahnen snow-report HTML.
 * The visible digit is an animation that starts at 0. The published value is
 * `data-number-count-animation-target`. A missing block means the resort did
 * not publish a depth for that sector.
 */
export function parseResortSnowReport(html: string): ResortSnowReport {
  const updatedMatch = html.match(
    /Last update:[\s\S]{0,240}?(\d{2}\.\d{2}\.\d{4})\s*-\s*(\d{2}:\d{2})/,
  );
  const updatedDate = updatedMatch ? europeanDateToIso(updatedMatch[1]) : null;
  const updatedAt =
    updatedDate && updatedMatch ? `${updatedDate}T${updatedMatch[2]}:00` : null;

  const found = new Map<ResortStationId, ResortStation>();
  const chunks = html.split('snow-item__title').slice(1);

  for (const chunk of chunks) {
    const name = chunk.match(/^">([^<]+)/)?.[1]?.trim();
    if (!name) continue;
    const id = stationId(name);
    if (!id || found.has(id)) continue;

    const window = chunk.slice(0, 1800);
    const height = window.match(/snow-item__snow-height[\s\S]{0,500}/)?.[0];
    let depthCm: number | null = null;
    if (height) {
      const target = height.match(/data-number-count-animation-target="(\d+(?:\.\d+)?)"/);
      if (target) {
        depthCm = Math.round(Number(target[1]));
      } else if (!height.includes('number-count-animation')) {
        const text = height.match(/>(\d+(?:\.\d+)?)</);
        if (text) depthCm = Math.round(Number(text[1]));
      }
    }

    const snowfall = window.match(/Last snowfall:\s*(\d{2}\.\d{2}\.\d{4})/);
    found.set(id, {
      id,
      depthCm,
      lastSnowfall: snowfall ? europeanDateToIso(snowfall[1]) : null,
    });
  }

  return {
    updatedAt,
    stations: RESORT_STATION_ORDER.map(
      (id) => found.get(id) ?? { id, depthCm: null, lastSnowfall: null },
    ),
  };
}

/** Format a Zurich wall-clock timestamp without shifting it through UTC. */
export function formatZurichWallTime(updatedAt: string, htmlLang: string): string {
  const match = updatedAt.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) return updatedAt;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const wallUtc = Date.UTC(year, month - 1, day, hour, minute);

  for (const offsetHours of [1, 2]) {
    const instant = new Date(wallUtc - offsetHours * 60 * 60 * 1000);
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zurich',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(instant);
    const read = (type: Intl.DateTimeFormatPartTypes) =>
      Number(parts.find((part) => part.type === type)?.value);
    if (
      read('year') === year &&
      read('month') === month &&
      read('day') === day &&
      read('hour') === hour &&
      read('minute') === minute
    ) {
      return new Intl.DateTimeFormat(htmlLang, {
        timeZone: 'Europe/Zurich',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(instant);
    }
  }

  return `${day} ${month} ${year}, ${pad(hour)}:${pad(minute)}`;
}

export function formatCalendarDate(
  isoDate: string,
  htmlLang: string,
  options: Intl.DateTimeFormatOptions,
): string {
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return isoDate;
  const instant = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12));
  return new Intl.DateTimeFormat(htmlLang, { timeZone: 'UTC', ...options }).format(instant);
}

export function zurichMonthIndex(now = new Date()): number {
  const month = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Zurich',
    month: 'numeric',
  }).format(now);
  return Number(month);
}

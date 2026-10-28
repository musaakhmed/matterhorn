import { cache } from 'react';
import { decode as decodeJpeg } from 'jpeg-js';
import { classifySummitFrame } from './banner-frame';
import type {
  BannerCameraReading,
  BannerCloudReason,
  BannerCloudReport,
  BannerCloudStatus,
} from './types';

/** Matterhorn summit. Open-Meteo interpolates the model to this elevation. */
export const MATTERHORN_SUMMIT = {
  latitude: 45.9765,
  longitude: 7.7491,
  elevation: 4478,
} as const;

/** Southerly sector that feeds a banner toward Zermatt. Matches the score penalty. */
export const FOHN_WIND_MIN_DEG = 150;
export const FOHN_WIND_MAX_DEG = 210;
export const FOHN_WIND_MIN_KMH = 30;

/** Lee-vortex lift of about 800 m. LCL ≈ 125 × (temperature − dew point). */
export const BANNER_LCL_MAX_M = 800;

/** Above this, the summit is already in cloud and a separate plume is not the story. */
export const BANNER_CLOUD_COVER_MAX = 85;

const SCHONEGG_IMAGE =
  'https://images.bergfex.at/webcams/?id=23670&format=2';
const SCHONEGG_PAGE = 'https://www.bergfex.com/zermatt/webcams/c23670/';
const SCHONEGG_NAME = 'Hotel Schönegg';

interface SummitSample {
  windFavorable: boolean;
  moistureFavorable: boolean;
  skyOpen: boolean;
  windSpeedKmh: number;
  windDirectionDeg: number;
  windCardinal: string;
  temperatureC: number | null;
  dewPointC: number | null;
  relativeHumidity: number | null;
  liftingCondensationLevelM: number | null;
  cloudCover: number | null;
}

function cardinal(deg: number): string {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const wrapped = ((deg % 360) + 360) % 360;
  return directions[Math.round(wrapped / 45) % 8];
}

export function isSoutherlyFohnWind(deg: number, speedKmh: number): boolean {
  return (
    deg >= FOHN_WIND_MIN_DEG &&
    deg <= FOHN_WIND_MAX_DEG &&
    speedKmh > FOHN_WIND_MIN_KMH
  );
}

export function emptyBannerReport(): BannerCloudReport {
  return {
    status: 'none',
    reason: 'unavailable',
    windFavorable: false,
    moistureFavorable: false,
    skyOpen: false,
    windSpeedKmh: 0,
    windDirectionDeg: 0,
    windCardinal: 'N',
    temperatureC: null,
    dewPointC: null,
    relativeHumidity: null,
    liftingCondensationLevelM: null,
    cloudCover: null,
    cameraReading: 'unavailable',
    cameraName: SCHONEGG_NAME,
    cameraUrl: SCHONEGG_PAGE,
  };
}

function swissHourKey(now: Date): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Zurich',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const map: Record<string, string> = {};
  for (const part of parts) map[part.type] = part.value;
  const hour = map.hour === '24' ? '00' : map.hour;
  return `${map.year}-${map.month}-${map.day}T${hour}:00`;
}

function emptySample(): SummitSample {
  return {
    windFavorable: false,
    moistureFavorable: false,
    skyOpen: false,
    windSpeedKmh: 0,
    windDirectionDeg: 0,
    windCardinal: 'N',
    temperatureC: null,
    dewPointC: null,
    relativeHumidity: null,
    liftingCondensationLevelM: null,
    cloudCover: null,
  };
}

async function fetchSummitSample(now: Date): Promise<SummitSample> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${MATTERHORN_SUMMIT.latitude}` +
    `&longitude=${MATTERHORN_SUMMIT.longitude}&elevation=${MATTERHORN_SUMMIT.elevation}` +
    `&hourly=temperature_2m,dew_point_2m,relative_humidity_2m,cloud_cover,wind_speed_10m,wind_direction_10m` +
    `&timezone=Europe%2FZurich&forecast_days=2`;

  const res = await fetch(url, {
    next: { revalidate: 900 },
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Open-Meteo summit HTTP ${res.status}`);

  const body = (await res.json()) as {
    hourly?: {
      time?: string[];
      temperature_2m?: number[];
      dew_point_2m?: number[];
      relative_humidity_2m?: number[];
      cloud_cover?: number[];
      wind_speed_10m?: number[];
      wind_direction_10m?: number[];
    };
  };

  const hourly = body.hourly;
  const times = hourly?.time ?? [];
  if (times.length === 0) return emptySample();

  const key = swissHourKey(now);
  let idx = times.indexOf(key);
  if (idx < 0) {
    idx = times.findIndex((time) => time >= key);
    if (idx < 0) idx = times.length - 1;
  }
  const temperature = hourly?.temperature_2m?.[idx];
  const dewPoint = hourly?.dew_point_2m?.[idx];
  const humidity = hourly?.relative_humidity_2m?.[idx];
  const cloudCover = hourly?.cloud_cover?.[idx];
  const windSpeed = hourly?.wind_speed_10m?.[idx] ?? 0;
  const windDir = hourly?.wind_direction_10m?.[idx] ?? 0;

  const temperatureC = typeof temperature === 'number' ? temperature : null;
  const dewPointC = typeof dewPoint === 'number' ? dewPoint : null;
  const lifting =
    temperatureC !== null && dewPointC !== null
      ? Math.round(125 * Math.max(0, temperatureC - dewPointC))
      : null;

  return {
    windFavorable: isSoutherlyFohnWind(windDir, windSpeed),
    moistureFavorable: lifting !== null && lifting <= BANNER_LCL_MAX_M,
    skyOpen: typeof cloudCover === 'number' && cloudCover < BANNER_CLOUD_COVER_MAX,
    windSpeedKmh: Math.round(windSpeed),
    windDirectionDeg: Math.round(windDir),
    windCardinal: cardinal(windDir),
    temperatureC,
    dewPointC,
    relativeHumidity: typeof humidity === 'number' ? Math.round(humidity) : null,
    liftingCondensationLevelM: lifting,
    cloudCover: typeof cloudCover === 'number' ? Math.round(cloudCover) : null,
  };
}

async function readSchoneggCamera(): Promise<BannerCameraReading> {
  const res = await fetch(SCHONEGG_IMAGE, {
    next: { revalidate: 900 },
    headers: {
      Accept: 'image/jpeg',
      'User-Agent':
        'IsTheMatterhornVisible/1.0 (banner monitor; +https://isthematterhornvisible.com)',
    },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) return 'unavailable';
  const buffer = Buffer.from(await res.arrayBuffer());
  const image = decodeJpeg(buffer, { useTArray: true, formatAsRGBA: true });
  return classifySummitFrame(image.data, image.width, image.height);
}

function resolveStatus(
  sample: SummitSample,
  camera: BannerCameraReading
): { status: BannerCloudStatus; reason: BannerCloudReason } {
  if (camera === 'plume') return { status: 'seen', reason: 'seen' };
  if (camera === 'clear') return { status: 'none', reason: 'clear' };
  if (camera === 'socked') return { status: 'none', reason: 'socked' };
  if (sample.windFavorable && sample.moistureFavorable && sample.skyOpen) {
    return { status: 'likely', reason: 'likely' };
  }
  if (sample.windFavorable && !sample.moistureFavorable) {
    return { status: 'none', reason: 'dry' };
  }
  if (sample.windFavorable && !sample.skyOpen) {
    return { status: 'none', reason: 'overcast' };
  }
  return { status: 'none', reason: 'unavailable' };
}

export const loadBannerCloud = cache(async (now: Date): Promise<BannerCloudReport> => {
  const [sampleResult, cameraResult] = await Promise.allSettled([
    fetchSummitSample(now),
    readSchoneggCamera(),
  ]);

  const sample = sampleResult.status === 'fulfilled' ? sampleResult.value : emptySample();
  const camera = cameraResult.status === 'fulfilled' ? cameraResult.value : 'unavailable';
  const { status, reason } = resolveStatus(sample, camera);

  return {
    ...sample,
    status,
    reason,
    cameraReading: camera,
    cameraName: SCHONEGG_NAME,
    cameraUrl: SCHONEGG_PAGE,
  };
});

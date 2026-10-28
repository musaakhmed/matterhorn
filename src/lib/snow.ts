import {
  SNOW_BANDS,
  type SnowBandId,
  type SnowForecast,
  type SnowForecastDay,
  parseResortSnowReport,
  type ResortSnowReport,
} from './snow-data';

const RESORT_REPORT_HTML = 'https://www.matterhornparadise.ch/en/information/snow-report';

const OPEN_METEO_FORECAST = 'https://api.open-meteo.com/v1/forecast';

interface OpenMeteoDaily {
  daily?: {
    time?: string[];
    snowfall_sum?: (number | null)[];
  };
  hourly?: {
    time?: string[];
    freezing_level_height?: (number | null)[];
  };
}

/**
 * Snow depths published by Zermatt Bergbahnen. Returns null when the page
 * cannot be read, so the UI never substitutes a model depth.
 */
export async function fetchResortSnowReport(): Promise<ResortSnowReport | null> {
  try {
    const res = await fetch(RESORT_REPORT_HTML, {
      headers: {
        Accept: 'text/html',
        'User-Agent':
          'Mozilla/5.0 (compatible; IsTheMatterhornVisible/1.0; +https://isthematterhornvisible.com/ski)',
      },
      next: { revalidate: 900 },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const report = parseResortSnowReport(html);
    const published = report.stations.some(
      (station) => station.depthCm != null || station.lastSnowfall != null,
    );
    return published ? report : null;
  } catch (error) {
    console.error('Resort snow report failed', error);
    return null;
  }
}

function emptySnowfall(): Record<SnowBandId, number> {
  return { village: 0, mid: 0, glacier: 0 };
}

/**
 * Ten-day new snow at three elevations, plus the day's lowest freezing level.
 * Days 8–10 are marked as a trend.
 */
export async function fetchSnowForecast(): Promise<SnowForecast | null> {
  try {
    const responses = await Promise.all(
      SNOW_BANDS.map(async (band) => {
        const params = new URLSearchParams({
          latitude: '45.98',
          longitude: '7.75',
          elevation: String(band.elevationM),
          timezone: 'Europe/Zurich',
          forecast_days: '10',
          daily: 'snowfall_sum',
        });
        if (band.id === 'village') params.set('hourly', 'freezing_level_height');
        const res = await fetch(`${OPEN_METEO_FORECAST}?${params}`, {
          next: { revalidate: 900 },
        });
        if (!res.ok) throw new Error(`Open-Meteo forecast ${band.id} ${res.status}`);
        const data = (await res.json()) as OpenMeteoDaily;
        return { id: band.id, data };
      }),
    );

    const byDate = new Map<string, SnowForecastDay>();
    for (const response of responses) {
      const dates = response.data.daily?.time ?? [];
      const amounts = response.data.daily?.snowfall_sum ?? [];
      dates.forEach((date, index) => {
        const day = byDate.get(date) ?? {
          date,
          confidence: 'firm' as const,
          snowfallCm: emptySnowfall(),
          freezingLevelMinM: null,
        };
        const amount = amounts[index];
        day.snowfallCm[response.id] = amount == null ? 0 : Math.max(0, Math.round(amount));
        byDate.set(date, day);
      });
    }

    const village = responses.find((response) => response.id === 'village');
    const times = village?.data.hourly?.time ?? [];
    const levels = village?.data.hourly?.freezing_level_height ?? [];
    const minimums = new Map<string, number>();
    times.forEach((time, index) => {
      const level = levels[index];
      if (level == null) return;
      const date = time.slice(0, 10);
      const previous = minimums.get(date);
      minimums.set(date, previous == null ? level : Math.min(previous, level));
    });
    for (const [date, level] of minimums) {
      const day = byDate.get(date);
      if (day) day.freezingLevelMinM = Math.round(level / 10) * 10;
    }

    const days = [...byDate.values()]
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 10)
      .map((day, index) => ({
        ...day,
        confidence: index >= 7 ? ('trend' as const) : ('firm' as const),
      }));

    return days.length ? { days } : null;
  } catch (error) {
    console.error('Snow forecast failed', error);
    return null;
  }
}

import { cache } from 'react';
import { fetchMatterhornVisibility } from '@/lib/weather';

export interface GuideTelemetrySnapshot {
  east: number;
  south: number;
  eastMorning: number;
  southMorning: number;
  windKmh: number;
  windCardinal: string;
  cloudHigh: number;
  cloudMid: number;
  cloudLow: number;
  fohn: boolean;
  banner: 'none' | 'likely' | 'seen';
  updatedLabel: string;
}

export const loadGuideTelemetry = cache(
  async (): Promise<GuideTelemetrySnapshot | null> => {
    try {
      const data = await fetchMatterhornVisibility();
      const east = data.viewpoints.gornergrat;
      const south = data.viewpoints['glacier-paradise'];
      return {
        east: east.currentScore,
        south: south.currentScore,
        eastMorning: east.today.morning.score,
        southMorning: south.today.morning.score,
        windKmh: east.metrics.windSpeedKmh,
        windCardinal: east.metrics.windCardinal,
        cloudHigh: east.metrics.cloudCoverHigh,
        cloudMid: east.metrics.cloudCoverMid,
        cloudLow: east.metrics.cloudCoverLow,
        fohn: east.metrics.isFohnRisk,
        banner: east.banner.status,
        updatedLabel: data.swissTimeFormatted,
      };
    } catch {
      return null;
    }
  }
);

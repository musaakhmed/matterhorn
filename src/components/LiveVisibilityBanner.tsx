import React from 'react';
import Header from './Header';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { getViewpointScoreMap } from '@/lib/viewpoints';

export default async function LiveVisibilityBanner() {
  const telemetry = await fetchMatterhornVisibility();
  const gornergrat = telemetry.viewpoints.gornergrat;
  const glacier = telemetry.viewpoints['glacier-paradise'];

  return (
    <Header
      initialSwissTime={telemetry.swissTimeFormatted}
      telemetrySummary={{
        gornergratScore: gornergrat.currentScore,
        gornergratBadge: gornergrat.currentBadgeColor,
        gornergratStatus: gornergrat.currentStatus,
        glacierScore: glacier.currentScore,
        glacierBadge: glacier.currentBadgeColor,
        glacierStatus: glacier.currentStatus,
        viewpointScores: getViewpointScoreMap(telemetry),
      }}
    />
  );
}

import { fetchMatterhornVisibility } from '@/lib/weather';
import { VIEWPOINT_PAGES, getLiveForecastForViewpointPage } from '@/lib/viewpoints';
import { publicGuides } from '@/lib/guides';
import { PLANNING_GUIDES } from '@/lib/planning-guides';
import { SITE_URL, SITE_NAME } from '@/lib/schema';
import { evaluateCrossBorderLink } from '@/lib/ski';
import { getTrainsLiveStatus } from '@/lib/trains';
import { bannerDetail } from '@/lib/banner-copy';

export const revalidate = 900;

export async function GET() {
  const data = await fetchMatterhornVisibility();
  const gornergrat = data.viewpoints.gornergrat;
  const glacier = data.viewpoints['glacier-paradise'];
  const border = evaluateCrossBorderLink(data);
  const trains = getTrainsLiveStatus(data);

  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    `> Real-time 1–10 AM/PM Matterhorn summit (4,478 m) visibility index, 3-layer alpine cloud diagnostics, Föhn banner cloud detection, 10-day horizon forecast, and field guides for Zermatt, Switzerland.`,
    '',
    '## Live Matterhorn Visibility Telemetry',
    '',
    `- **Updated (Swiss Time)**: ${data.swissTimeFormatted} (\`${data.updatedAt}\`)`,
    `- **Gornergrat (3,089 m · East Face "Toblerone" View)**: **${gornergrat.currentScore}/10 (${gornergrat.currentStatus})** — AM (06:00–12:00): ${gornergrat.today.morning.score}/10 (${gornergrat.today.morning.status}), PM (12:00–18:00): ${gornergrat.today.afternoon.score}/10 (${gornergrat.today.afternoon.status}). Mid-cloud (2,000–6,000 m): ${gornergrat.metrics.cloudCoverMid}%, Low valley fog (<2,000 m): ${gornergrat.metrics.cloudCoverLow}%, Visibility: ${gornergrat.metrics.visibilityKm} km, Wind: ${gornergrat.metrics.windSpeedKmh} km/h ${gornergrat.metrics.windCardinal}.`,
    `- **Matterhorn Glacier Paradise / Klein Matterhorn (3,883 m · South Face)**: **${glacier.currentScore}/10 (${glacier.currentStatus})** — AM (06:00–12:00): ${glacier.today.morning.score}/10 (${glacier.today.morning.status}), PM (12:00–18:00): ${glacier.today.afternoon.score}/10 (${glacier.today.afternoon.status}). Mid-cloud: ${glacier.metrics.cloudCoverMid}%, Visibility: ${glacier.metrics.visibilityKm} km, Wind: ${glacier.metrics.windSpeedKmh} km/h ${glacier.metrics.windCardinal}.`,
    `- **Summit Banner Cloud Status**: ${gornergrat.banner.status.toUpperCase()} — ${bannerDetail(gornergrat.banner.reason, 'en')}`,
    `- **Best Upcoming 48-Hour Viewing Window**: ${gornergrat.bestBlockNext48h.dayLabel} ${gornergrat.bestBlockNext48h.period} (${gornergrat.bestBlockNext48h.score}/10 — ${gornergrat.bestBlockNext48h.status})`,
    `- **Zermatt–Cervinia Cross-Border Ski Link (3,480 m)**: ${border.status} (${border.plateauRosaWindKmh} km/h wind at Klein Matterhorn — ${border.reason})`,
    `- **Scenic Mountain Railways**: Gornergrat Bahn (${trains.gornergrat.score}/10 — ${trains.gornergrat.verdictText}); Glacier Express is ${trains.glacierExpress.operatingStatusLabel}.`,
    '',
    '### 10-Day Matterhorn Visibility Forecast (Gornergrat 3,089 m vs. Glacier Paradise 3,883 m)',
    '',
    '| Date | Day | Gornergrat AM | Gornergrat PM | Gornergrat Peak | Glacier Paradise AM | Glacier Paradise PM | Glacier Peak |',
    '| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |',
    ...gornergrat.days.map((day, idx) => {
      const gDay = glacier.days[idx] ?? day;
      return `| ${day.dateIso} | ${day.dayOfWeek} | ${day.morning.score}/10 (${day.morning.status}) | ${day.afternoon.score}/10 (${day.afternoon.status}) | ${day.dailyPeakScore}/10 | ${gDay.morning.score}/10 (${gDay.morning.status}) | ${gDay.afternoon.score}/10 (${gDay.afternoon.status}) | ${gDay.dailyPeakScore}/10 |`;
    }),
    '',
    '## Core Hubs & Machine-Readable Feeds',
    '',
    `- [Live Matterhorn Visibility Dashboard](${SITE_URL}/): Real-time 1–10 visibility score, 10-day AM/PM forecast, and 4 live Zermatt Roundshot webcams.`,
    `- [Full LLM Knowledge & Telemetry Dump](${SITE_URL}/llms-full.txt): Complete Markdown reference containing live viewpoint diagnostics, scoring formulas, comparison tables, and all Zermatt field guides.`,
    `- [Live JSON Telemetry API](${SITE_URL}/api/visibility): Public JSON endpoint returning 15-minute high-altitude Open-Meteo and webcam visibility scores for Gornergrat (3,089 m) and Glacier Paradise (3,883 m).`,
    `- [Zermatt Ski & Cervinia Border Status](${SITE_URL}/ski): Live Klein Matterhorn wind hold risk, snow conditions, and Zermatt–Cervinia cross-border lift telemetry.`,
    `- [Swiss Mountain Trains Hub (Gornergrat Bahn & Glacier Express)](${SITE_URL}/trains): Live 3,089 m cogwheel rail conditions, 2026 ticket fares, Swiss Travel Pass discounts, and seat reservation rules.`,
    `- [Matterhorn Viewpoints Directory](${SITE_URL}/viewpoints): Side-by-side comparison of all 5 Zermatt viewing elevations.`,
    `- [Zermatt & Matterhorn Field Guides Index](${SITE_URL}/guides): Climatology, viewpoint comparisons, photography timing, and bad-weather contingency guides.`,
    `- [Embeddable Partner Visibility Widget](${SITE_URL}/widget): Free live Matterhorn visibility badge for Zermatt hotels, chalets, and travel blogs.`,
    '',
    '## Matterhorn Viewpoints (Live Telemetry Pages)',
    '',
    ...VIEWPOINT_PAGES.map((vp) => {
      const vpForecast = getLiveForecastForViewpointPage(vp, data);
      return `- [${vp.name} (${vp.elevationLabel})](${SITE_URL}/viewpoints/${vp.slug}): Live ${vpForecast.currentScore}/10 (${vpForecast.currentStatus}). ${vp.description}`;
    }),
    '',
    '## Zermatt & Matterhorn Field Guides',
    '',
    ...PLANNING_GUIDES.map(
      (guide) => `- [${guide.linkTitle}](${SITE_URL}${guide.path}): ${guide.description}`
    ),
    ...publicGuides().map(
      (guide) => `- [${guide.title}](${SITE_URL}/guides/${guide.slug}): ${guide.description}`
    ),
    '',
    '## International / Localized Editions',
    '',
    `- [English (Default)](${SITE_URL}/)`,
    `- [Deutsch (German)](${SITE_URL}/de)`,
    `- [Français (French)](${SITE_URL}/fr)`,
    `- [Italiano (Italian)](${SITE_URL}/it)`,
    `- [日本語 (Japanese)](${SITE_URL}/ja)`,
    `- [中文 (Chinese)](${SITE_URL}/zh)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
    },
  });
}

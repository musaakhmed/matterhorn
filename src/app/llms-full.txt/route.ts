import { fetchMatterhornVisibility } from '@/lib/weather';
import {
  VIEWPOINT_PAGES,
  getLiveForecastForViewpointPage,
  evaluateLakeReflectionConditions,
} from '@/lib/viewpoints';
import { publicGuides } from '@/lib/guides';
import { PLANNING_GUIDES } from '@/lib/planning-guides';
import { SITE_URL, SITE_NAME, stripMarkdownLinks } from '@/lib/schema';
import { evaluateCrossBorderLink } from '@/lib/ski';
import { getTrainsLiveStatus } from '@/lib/trains';

export const revalidate = 900;

export async function GET() {
  const data = await fetchMatterhornVisibility();
  const gornergrat = data.viewpoints.gornergrat;
  const glacier = data.viewpoints['glacier-paradise'];
  const border = evaluateCrossBorderLink(data);
  const trains = getTrainsLiveStatus(data);
  const reflection = evaluateLakeReflectionConditions(gornergrat);

  const lines: string[] = [
    `# ${SITE_NAME} — Complete AI & LLM Reference (/llms-full.txt)`,
    '',
    `> Canonical URL: ${SITE_URL}`,
    `> Live Telemetry Updated: ${data.swissTimeFormatted} (${data.updatedAt})`,
    `> Data Provenance: High-altitude Open-Meteo grid cells (3,089 m Gornergrat & 3,883 m Klein Matterhorn), MeteoSwiss 30-year Zermatt climatology, and Zermatt Roundshot live webcams.`,
    '',
    '## 1. Live Telemetry Summary',
    '',
    `- **Gornergrat (3,089 m · East Face)**: ${gornergrat.currentScore}/10 (${gornergrat.currentStatus}) — ${gornergrat.verdictSummary}`,
    `  - Morning (06:00–12:00 CET): ${gornergrat.today.morning.score}/10 (${gornergrat.today.morning.status}, Mid-Cloud ${gornergrat.today.morning.metrics.cloudCoverMid}%, Visibility ${gornergrat.today.morning.metrics.visibilityKm} km)`,
    `  - Afternoon (12:00–18:00 CET): ${gornergrat.today.afternoon.score}/10 (${gornergrat.today.afternoon.status}, Mid-Cloud ${gornergrat.today.afternoon.metrics.cloudCoverMid}%, Visibility ${gornergrat.today.afternoon.metrics.visibilityKm} km)`,
    `  - Guide Dispatch: "${gornergrat.guideAdvice}"`,
    `- **Matterhorn Glacier Paradise (3,883 m · South Face)**: ${glacier.currentScore}/10 (${glacier.currentStatus}) — ${glacier.verdictSummary}`,
    `  - Morning (06:00–12:00 CET): ${glacier.today.morning.score}/10 (${glacier.today.morning.status}, Mid-Cloud ${glacier.today.morning.metrics.cloudCoverMid}%, Visibility ${glacier.today.morning.metrics.visibilityKm} km)`,
    `  - Afternoon (12:00–18:00 CET): ${glacier.today.afternoon.score}/10 (${glacier.today.afternoon.status}, Mid-Cloud ${glacier.today.afternoon.metrics.cloudCoverMid}%, Visibility ${glacier.today.afternoon.metrics.visibilityKm} km)`,
    `  - Guide Dispatch: "${glacier.guideAdvice}"`,
    `- **Riffelsee (2,757 m) & Stellisee (2,537 m) Mirror Reflection Diagnostic**: ${reflection.overallVerdict} (${reflection.windStatusLabel} — ${reflection.thawSeasonStatus}). ${reflection.photographerAction}`,
    `- **Zermatt–Cervinia International Ski Link**: ${border.status} (${border.plateauRosaWindKmh} km/h wind at 3,883 m — ${border.reason}).`,
    `- **Mountain Railways Status**: Gornergrat Bahn: ${trains.gornergrat.score}/10 (${trains.gornergrat.verdictText}) | Glacier Express: ${trains.glacierExpress.operatingStatusLabel}.`,
    '',
    '## 2. How the 1–10 Matterhorn Visibility Scoring Formula Works',
    '',
    'Every 15 minutes, the telemetry engine queries high-altitude atmospheric layers above Zermatt and computes:',
    '',
    '```text',
    'Raw = 100 - (0.60 * C_mid + 0.25 * C_low + 0.15 * C_high) - Penalties',
    'Penalties:',
    '  - Horizontal visibility < 10 km: -25 (< 20 km: -10)',
    '  - Precipitation > 0.1 mm or probability > 30%: -20',
    '  - Southerly Föhn wind (150°–210°) > 30 km/h (lee-side banner cloud risk): -15',
    'Index Mapping: 8–10 = Clearly Visible | 6–7 = Partially Visible | 3–5 = Barely Visible | 1–2 = Not Visible (Socked In)',
    '```',
    '',
    '## 3. Viewpoints Directory & Live Specifications',
    '',
  ];

  for (const vp of VIEWPOINT_PAGES) {
    const vpForecast = getLiveForecastForViewpointPage(vp, data);
    lines.push(
      `### ${vp.name} (${SITE_URL}/viewpoints/${vp.slug})`,
      `- **Live Score**: ${vpForecast.currentScore}/10 (${vpForecast.currentStatus}) | AM: ${vpForecast.today.morning.score}/10 | PM: ${vpForecast.today.afternoon.score}/10`,
      `- **Elevation & Coordinates**: ${vp.elevationLabel} (${vp.coordinatesLabel})`,
      `- **Matterhorn Aspect**: ${vp.aspectLabel}`,
      `- **Access & Journey Time**: ${vp.transportSummary} (${vp.journeyTime})`,
      `- **Best Viewing Window**: ${vp.bestTimeWindow}`,
      `- **Summary**: ${vp.description}`,
      '- **Key Takeaways**:',
      ...vp.keyTakeaways.map((item) => `  - ${stripMarkdownLinks(item)}`),
      ''
    );
  }

  lines.push('## 4. Zermatt & Matterhorn Field Guides (Full Summaries & FAQs)', '');

  for (const pg of PLANNING_GUIDES) {
    lines.push(
      `### ${pg.linkTitle} (${SITE_URL}${pg.path})`,
      `- **Category**: ${pg.category} | **Key Metric**: ${pg.heroStat.label}: ${pg.heroStat.value} (${pg.heroStat.detail})`,
      `- **Summary**: ${pg.description}`,
      ''
    );
  }

  for (const guide of publicGuides()) {
    lines.push(
      `### ${guide.title} (${SITE_URL}/guides/${guide.slug})`,
      `- **Category**: ${guide.category} | **Updated**: ${guide.updatedAt} | **Key Metric**: ${guide.heroStat.label}: ${guide.heroStat.value} (${guide.heroStat.detail})`,
      `- **Description**: ${guide.description}`,
      '- **Key Takeaways (TL;DR)**:',
      ...guide.keyTakeaways.map((t) => `  - ${stripMarkdownLinks(t)}`),
      ''
    );

    if (guide.comparisonTable) {
      lines.push(
        `#### ${guide.comparisonTable.caption}`,
        `| ${guide.comparisonTable.headers.join(' | ')} |`,
        `| ${guide.comparisonTable.headers.map(() => ':---').join(' | ')} |`,
        ...guide.comparisonTable.rows.map((row) => `| ${row.join(' | ')} |`),
        ''
      );
    }

    if (guide.faqs.length > 0) {
      lines.push('#### Frequently Asked Questions');
      for (const faq of guide.faqs) {
        lines.push(`- **Q: ${faq.question}**`, `  A: ${stripMarkdownLinks(faq.answer)}`);
      }
      lines.push('');
    }
  }

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
    },
  });
}

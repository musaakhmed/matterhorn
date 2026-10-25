import React from 'react';
import type { Metadata } from 'next';
import { fetchMatterhornVisibility } from '@/lib/weather';
import PartnerWidgetCard, {
  WidgetLangOption,
  WidgetLayoutOption,
  WidgetThemeOption,
  WidgetViewpointOption,
} from '@/components/PartnerWidgetCard';
import EmbedResizeWrapper from '@/components/EmbedResizeWrapper';

export const revalidate = 900; // Refresh telemetry every 15 minutes

export const metadata: Metadata = {
  title: 'Matterhorn Live Visibility Status Widget | Zermatt (4,478m)',
  description:
    'Embeddable real-time Matterhorn 1–10 visibility status widget for Zermatt hotels, chalets, and alpine tourism portals.',
  robots: {
    index: false,
    follow: true,
  },
};

function parseFirstString(
  val: string | string[] | undefined,
  fallback: string
): string {
  if (Array.isArray(val)) return val[0] ?? fallback;
  return typeof val === 'string' ? val : fallback;
}

export default async function EmbedWidgetPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const data = await fetchMatterhornVisibility();

  const rawViewpoint = parseFirstString(resolvedParams.viewpoint, 'both');
  const viewpoint: WidgetViewpointOption =
    rawViewpoint === 'gornergrat' ||
    rawViewpoint === 'glacier-paradise' ||
    rawViewpoint === 'both'
      ? rawViewpoint
      : 'both';

  const rawTheme = parseFirstString(resolvedParams.theme, 'light');
  const theme: WidgetThemeOption =
    rawTheme === 'dark' || rawTheme === 'glass' || rawTheme === 'light'
      ? rawTheme
      : 'light';

  const rawLayout = parseFirstString(resolvedParams.layout, 'card');
  const layout: WidgetLayoutOption =
    rawLayout === 'compact' || rawLayout === 'badge' || rawLayout === 'card'
      ? rawLayout
      : 'card';

  const rawLang = parseFirstString(resolvedParams.lang, 'en');
  const lang: WidgetLangOption =
    rawLang === 'de' || rawLang === 'fr' || rawLang === 'en' ? rawLang : 'en';

  const partner = parseFirstString(resolvedParams.partner, '').slice(0, 48);
  const showForecast =
    parseFirstString(resolvedParams.forecast, '1') !== '0' &&
    parseFirstString(resolvedParams.forecast, 'true') !== 'false';
  const showMetrics =
    parseFirstString(resolvedParams.metrics, '1') !== '0' &&
    parseFirstString(resolvedParams.metrics, 'true') !== 'false';
  const widgetId = parseFirstString(resolvedParams.id, 'default');

  return (
    <div className="w-full p-1">
      <style>{`
        html, body {
          background: transparent !important;
          background-image: none !important;
          min-height: 0 !important;
        }
      `}</style>
      <EmbedResizeWrapper widgetId={widgetId}>
        <PartnerWidgetCard
          data={data}
          viewpoint={viewpoint}
          theme={theme}
          layout={layout}
          lang={lang}
          partner={partner}
          showForecast={showForecast}
          showMetrics={showMetrics}
        />
      </EmbedResizeWrapper>
    </div>
  );
}

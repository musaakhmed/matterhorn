'use client';

import React, { useMemo, useState } from 'react';
import {
  Building2,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Eye,
  Globe,
  Image as ImageIcon,
  Layers,
  LayoutTemplate,
  Monitor,
  Palette,
  Sliders,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { VisibilityApiResponse } from '@/lib/types';
import { LOCALES, LOCALE_METAS } from '@/lib/i18n/config';
import PartnerWidgetCard, {
  WidgetLangOption,
  WidgetLayoutOption,
  WidgetThemeOption,
  WidgetViewpointOption,
} from './PartnerWidgetCard';

interface WidgetBuilderClientProps {
  initialData: VisibilityApiResponse;
}

type EmbedTabId = 'script' | 'iframe' | 'svg' | 'json';
type CanvasBackdropId = 'light' | 'dark' | 'alpine';

const PARTNER_PRESETS = [
  'Grand Hotel Zermatterhof',
  'The Omnia Zermatt',
  'Hotel Monte Rosa',
  'Zermatt Alpine Guides',
];

export default function WidgetBuilderClient({
  initialData,
}: WidgetBuilderClientProps) {
  const [layout, setLayout] = useState<WidgetLayoutOption>('card');
  const [viewpoint, setViewpoint] = useState<WidgetViewpointOption>('both');
  const [theme, setTheme] = useState<WidgetThemeOption>('light');
  const [lang, setLang] = useState<WidgetLangOption>('en');
  const [partner, setPartner] = useState<string>('Grand Hotel Zermatterhof');
  const [showForecast, setShowForecast] = useState<boolean>(true);
  const [showMetrics, setShowMetrics] = useState<boolean>(true);
  const [svgStyle, setSvgStyle] = useState<'card' | 'pill'>('card');

  const [canvasBackdrop, setCanvasBackdrop] =
    useState<CanvasBackdropId>('light');
  const [activeTab, setActiveTab] = useState<EmbedTabId>('script');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const handleThemeChange = (nextTheme: WidgetThemeOption) => {
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      setCanvasBackdrop('dark');
    } else if (nextTheme === 'glass') {
      setCanvasBackdrop('alpine');
    } else {
      setCanvasBackdrop('light');
    }
  };

  const embedQueryString = useMemo(() => {
    const params = new URLSearchParams();
    params.set('viewpoint', viewpoint);
    params.set('theme', theme);
    params.set('layout', layout);
    params.set('lang', lang);
    if (partner.trim()) {
      params.set('partner', partner.trim());
    }
    if (layout === 'card') {
      if (!showForecast) params.set('forecast', '0');
      if (!showMetrics) params.set('metrics', '0');
    }
    return params.toString();
  }, [viewpoint, theme, layout, lang, partner, showForecast, showMetrics]);

  const svgQueryString = useMemo(() => {
    const params = new URLSearchParams();
    params.set('viewpoint', viewpoint);
    params.set('theme', theme === 'dark' ? 'dark' : 'light');
    params.set('style', svgStyle);
    params.set('lang', lang);
    if (partner.trim()) {
      params.set('partner', partner.trim());
    }
    return params.toString();
  }, [viewpoint, theme, svgStyle, lang, partner]);

  const iframeHeight = useMemo(() => {
    if (layout === 'badge') return 58;
    if (layout === 'compact') return 124;
    let h = 345;
    if (showMetrics) h += 72;
    if (showForecast) h += 92;
    return h;
  }, [layout, showMetrics, showForecast]);

  const scriptSnippet = useMemo(() => {
    const partnerAttr = partner.trim()
      ? `\n  data-partner="${partner.trim().replace(/"/g, '&quot;')}"`
      : '';
    const forecastAttr =
      layout === 'card' && !showForecast ? '\n  data-forecast="0"' : '';
    const metricsAttr =
      layout === 'card' && !showMetrics ? '\n  data-metrics="0"' : '';

    return `<!-- Matterhorn Live Visibility Widget (${partner.trim() || 'Zermatt 4,478m'}) -->
<div
  data-matterhorn-widget
  data-viewpoint="${viewpoint}"
  data-theme="${theme}"
  data-layout="${layout}"
  data-lang="${lang}"${partnerAttr}${forecastAttr}${metricsAttr}
></div>
<script async src="https://isthematterhornvisible.com/widget.js"></script>`;
  }, [viewpoint, theme, layout, lang, partner, showForecast, showMetrics]);

  const iframeSnippet = useMemo(() => {
    const maxWidthStyle =
      layout === 'card' ? 'max-width: 448px; ' : 'max-width: 100%; ';
    return `<!-- Matterhorn Live Visibility Iframe Embed -->
<iframe
  src="https://isthematterhornvisible.com/embed/widget?${embedQueryString}"
  title="Is The Matterhorn Visible? Live Zermatt Summit Telemetry (4,478m)"
  width="100%"
  height="${iframeHeight}"
  style="width: 100%; ${maxWidthStyle}border: 0; overflow: hidden; background: transparent;"
  loading="lazy"
  allowtransparency="true"
></iframe>`;
  }, [embedQueryString, iframeHeight, layout]);

  const svgHtmlSnippet = useMemo(() => {
    const width = svgStyle === 'pill' ? 380 : 420;
    const height = svgStyle === 'pill' ? 36 : 148;
    return `<!-- Matterhorn Dynamic SVG Status Badge (Great for Emails, Newsletters & CMS) -->
<a
  href="https://isthematterhornvisible.com?utm_source=partner_svg_badge"
  target="_blank"
  rel="noopener noreferrer"
  title="Check Live 10-Day Matterhorn Visibility Forecast"
>
  <img
    src="https://isthematterhornvisible.com/api/widget/badge?${svgQueryString}"
    alt="Live Matterhorn Visibility Score — isthematterhornvisible.com"
    width="${width}"
    height="${height}"
    style="max-width: 100%; height: auto; border: 0;"
  />
</a>`;
  }, [svgQueryString, svgStyle]);

  const jsonApiSnippet = useMemo(() => {
    return `// Fetch live 15-minute Matterhorn visibility telemetry (CORS enabled)
const res = await fetch('https://isthematterhornvisible.com/api/visibility');
const data = await res.json();

// Access Gornergrat (3,089m East) & Glacier Paradise (3,883m South)
const gornergrat = data.viewpoints.gornergrat;
const glacier = data.viewpoints['glacier-paradise'];

console.log(\`Gornergrat: \${gornergrat.currentScore}/10 (\${gornergrat.currentStatus})\`);
console.log(\`Today AM: \${gornergrat.today.morning.score}/10 | PM: \${gornergrat.today.afternoon.score}/10\`);`;
  }, []);

  const currentCodeSnippet =
    activeTab === 'script'
      ? scriptSnippet
      : activeTab === 'iframe'
        ? iframeSnippet
        : activeTab === 'svg'
          ? svgHtmlSnippet
          : jsonApiSnippet;

  const handleCopy = async (code: string, key: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedTab(key);
      setTimeout(() => setCopiedTab(null), 2200);
    } catch {
      // Fallback copy handled silently
    }
  };

  return (
    <section
      aria-label="Interactive Widget Studio & Embed Code Generator"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
    >
      {/* Left Column: Widget Customization Controls (5 cols on lg) */}
      <div className="lg:col-span-5 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300">
              <Sliders className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                1. Customize Your Widget
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tailor layout, viewpoint, language, and hotel branding
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300">
            Free Partner Use
          </span>
        </div>

        {/* Control 1: Widget Layout */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <LayoutTemplate className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>Widget Layout Format</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                {
                  id: 'card',
                  label: 'Concierge Card',
                  desc: 'AM/PM + 3-Day',
                },
                {
                  id: 'compact',
                  label: 'Header Banner',
                  desc: 'Full-width bar',
                },
                {
                  id: 'badge',
                  label: 'Navbar Pill',
                  desc: 'Compact badge',
                },
              ] as const
            ).map((opt) => {
              const active = layout === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLayout(opt.id)}
                  className={`rounded-xl border p-2.5 text-left transition-all cursor-pointer ${
                    active
                      ? 'border-sky-600 bg-sky-50/90 dark:bg-sky-950/60 ring-2 ring-sky-500/20 text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/60 hover:bg-slate-100/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-xs font-extrabold">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {opt.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Control 2: Viewpoint Aspect */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <span>Mountain Viewpoint Aspect</span>
          </label>
          <div className="grid grid-cols-1 gap-2">
            {(
              [
                {
                  id: 'both',
                  title: 'Dual Aspect: Gornergrat + Glacier Paradise',
                  subtitle:
                    'Shows both 3,089m East and 3,883m South scores side-by-side (Recommended)',
                },
                {
                  id: 'gornergrat',
                  title: 'Gornergrat & Sunnegga (3,089m East)',
                  subtitle:
                    'Classic Toblerone profile, Riffelsee & Stellisee reflection lakes',
                },
                {
                  id: 'glacier-paradise',
                  title: 'Matterhorn Glacier Paradise (3,883m South)',
                  subtitle:
                    'Highest cableway station — best for rising above low valley fog',
                },
              ] as const
            ).map((vp) => {
              const active = viewpoint === vp.id;
              return (
                <button
                  key={vp.id}
                  type="button"
                  onClick={() => setViewpoint(vp.id)}
                  className={`rounded-xl border p-3 text-left transition-all cursor-pointer flex items-start justify-between gap-2 ${
                    active
                      ? 'border-sky-600 bg-sky-50/90 dark:bg-sky-950/60 ring-2 ring-sky-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/60 hover:bg-slate-100/70 dark:hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {vp.title}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      {vp.subtitle}
                    </div>
                  </div>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      active
                        ? 'border-sky-600 bg-sky-600 text-white'
                        : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                    }`}
                  >
                    {active && <Check className="w-2.5 h-2.5" aria-hidden="true" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Control 3: Visual Theme & Guest Language */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <Palette className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>Color Theme</span>
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {(
                [
                  { id: 'light', label: 'Light' },
                  { id: 'dark', label: 'Dark' },
                  { id: 'glass', label: 'Glass' },
                ] as const
              ).map((th) => (
                <button
                  key={th.id}
                  type="button"
                  onClick={() => handleThemeChange(th.id)}
                  className={`px-2.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    theme === th.id
                      ? 'border-sky-600 bg-sky-50 dark:bg-sky-950/60 text-sky-950 dark:text-sky-200 ring-2 ring-sky-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>Guest Language</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 max-h-48 overflow-y-auto pr-0.5">
              {LOCALES.map((code) => {
                const meta = LOCALE_METAS[code];
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    title={`${meta.name} (${meta.englishName})`}
                    className={`px-2 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      lang === code
                        ? 'border-sky-600 bg-sky-50 dark:bg-sky-950/60 text-sky-950 dark:text-sky-200 ring-2 ring-sky-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-sm leading-none">{meta.flag}</span>
                    <span>{code.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Control 4: Hotel / Partner Co-Branding */}
        <div className="space-y-2">
          <label
            htmlFor="partner-name-input"
            className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300"
          >
            <span className="inline-flex items-center gap-1.5">
              <Building2
                className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
                aria-hidden="true"
              />
              <span>Hotel / Partner Header Title</span>
            </span>
            <span className="text-[10px] font-mono font-normal text-slate-400">
              Optional
            </span>
          </label>
          <input
            id="partner-name-input"
            type="text"
            maxLength={48}
            value={partner}
            onChange={(e) => setPartner(e.target.value)}
            placeholder="e.g. Grand Hotel Zermatterhof"
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
          />
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Presets:
            </span>
            {PARTNER_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setPartner(preset)}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-950/60 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:text-sky-900 dark:hover:text-sky-200 transition-colors cursor-pointer"
              >
                {preset}
              </button>
            ))}
            {partner && (
              <button
                type="button"
                onClick={() => setPartner('')}
                className="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-[11px] font-medium text-rose-700 dark:text-rose-300 transition-colors cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Control 5: Card Data Modules (Only applicable to 'card' layout) */}
        {layout === 'card' && (
          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Card Telemetry Modules
            </div>
            <label className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 px-3.5 py-2.5 cursor-pointer">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Atmospheric Diagnostics Row
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Mid-Cloud (3–5km), Horizontal Visibility &amp; Summit Wind
                </div>
              </div>
              <input
                type="checkbox"
                checked={showMetrics}
                onChange={(e) => setShowMetrics(e.target.checked)}
                className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 px-3.5 py-2.5 cursor-pointer">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  3-Day AM / PM Horizon Strip
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Shows next 3 days + Best 48-Hour Viewing Window
                </div>
              </div>
              <input
                type="checkbox"
                checked={showForecast}
                onChange={(e) => setShowForecast(e.target.checked)}
                className="w-4 h-4 accent-sky-600 rounded cursor-pointer"
              />
            </label>
          </div>
        )}
      </div>

      {/* Right Column: Live Preview Canvas + Copyable Embed Snippets (7 cols on lg) */}
      <div className="lg:col-span-7 space-y-6">
        {/* Live Preview Stage */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                <Eye className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                  2. Live Interactive Preview
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Rendered with live Zermatt telemetry ({initialData.swissTimeFormatted})
                </p>
              </div>
            </div>

            {/* Canvas Backdrop Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <Monitor
                className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 ml-1.5"
                aria-hidden="true"
              />
              {(
                [
                  { id: 'light', label: 'Light Site' },
                  { id: 'dark', label: 'Dark Site' },
                  { id: 'alpine', label: 'Alpine Glass' },
                ] as const
              ).map((bg) => (
                <button
                  key={bg.id}
                  type="button"
                  onClick={() => setCanvasBackdrop(bg.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    canvasBackdrop === bg.id
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {bg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preview Canvas Box */}
          <div
            className={`relative rounded-2xl border p-6 sm:p-8 min-h-[260px] flex flex-col items-center justify-center transition-colors overflow-hidden ${
              canvasBackdrop === 'dark'
                ? 'bg-slate-900 border-slate-800'
                : canvasBackdrop === 'alpine'
                  ? 'bg-gradient-to-br from-sky-200/80 via-sky-100 to-amber-50 border-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-sky-950/40 dark:border-slate-800'
                  : 'bg-slate-100/85 dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-800'
            }`}
          >
            {/* Subtle grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(148,163,184,0.4) 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}
            />

            <div className="relative z-10 w-full flex items-center justify-center">
              <PartnerWidgetCard
                data={initialData}
                viewpoint={viewpoint}
                theme={theme}
                layout={layout}
                lang={lang}
                partner={partner}
                showForecast={showForecast}
                showMetrics={showMetrics}
              />
            </div>
          </div>

          {/* Standalone Embed Test Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
              <Sparkles
                className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0"
                aria-hidden="true"
              />
              <span>
                Auto-resizes via ResizeObserver • Updates every 15 minutes
              </span>
            </span>

            <a
              href={`/embed/widget?${embedQueryString}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono font-bold text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 underline underline-offset-4 cursor-pointer"
            >
              <span>Open Standalone Embed URL (/embed/widget)</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Code Generator Card */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                3. Copy &amp; Publish Embed Code
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose from Script Loader, Universal Iframe, Email SVG Badge, or JSON API
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(currentCodeSnippet, activeTab)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-extrabold shadow-xs transition-all duration-150 active:scale-95 cursor-pointer shrink-0"
            >
              {copiedTab === activeTab ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Copy Embed Code</span>
                </>
              )}
            </button>
          </div>

          {/* Embed Method Tabs */}
          <div
            role="tablist"
            aria-label="Embed integration methods"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          >
            {(
              [
                {
                  id: 'script',
                  label: 'Script Loader',
                  badge: 'Recommended',
                  icon: Code2,
                },
                {
                  id: 'iframe',
                  label: 'HTML Iframe',
                  badge: 'Universal',
                  icon: LayoutTemplate,
                },
                {
                  id: 'svg',
                  label: 'Live SVG Badge',
                  badge: 'Emails & Docs',
                  icon: ImageIcon,
                },
                {
                  id: 'json',
                  label: 'JSON API',
                  badge: 'Custom UI',
                  icon: Terminal,
                },
              ] as const
            ).map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl border p-2.5 text-left transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                    isSelected
                      ? 'border-sky-600 bg-sky-50/90 dark:bg-sky-950/60 text-slate-900 dark:text-white ring-2 ring-sky-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-extrabold">
                    <Icon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">{tab.label}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {tab.badge}
                  </div>
                </button>
              );
            })}
          </div>

          {/* If SVG tab is active, show live rendered SVG image preview + style toggle */}
          {activeTab === 'svg' && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Live Server-Rendered SVG Image Preview (Works in Guest Emails &amp; Newsletters):
                </span>
                <div className="inline-flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setSvgStyle('card')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer ${
                      svgStyle === 'card'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Card SVG (420×148)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSvgStyle('pill')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer ${
                      svgStyle === 'pill'
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Compact Pill SVG (380×36)
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center py-2 overflow-x-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/api/widget/badge?${svgQueryString}`}
                  alt="Live Matterhorn SVG Status Badge Preview"
                  width={svgStyle === 'pill' ? 380 : 420}
                  height={svgStyle === 'pill' ? 36 : 148}
                  className="max-w-full h-auto rounded-xl shadow-xs"
                />
              </div>
            </div>
          )}

          {/* Code Block */}
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 overflow-x-auto">
            <pre className="text-xs font-mono text-sky-200 leading-relaxed whitespace-pre">
              <code>{currentCodeSnippet}</code>
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span>
              Zero cookies • GDPR/FADP compliant • Cached at edge (15m ISR)
            </span>
            <span>CORS: Access-Control-Allow-Origin: *</span>
          </div>
        </div>
      </div>
    </section>
  );
}

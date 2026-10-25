import { NextRequest, NextResponse } from 'next/server';
import { fetchMatterhornVisibility } from '@/lib/weather';
import { BadgeColor, VisibilityStatus } from '@/lib/types';

export const revalidate = 900;

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const COLOR_HEX: Record<
  BadgeColor,
  {
    accent: string;
    bgLight: string;
    borderLight: string;
    textLight: string;
    bgDark: string;
    borderDark: string;
    textDark: string;
  }
> = {
  emerald: {
    accent: '#10b981',
    bgLight: '#ecfdf5',
    borderLight: '#6ee7b7',
    textLight: '#065f46',
    bgDark: '#064e3b',
    borderDark: '#059669',
    textDark: '#a7f3d0',
  },
  amber: {
    accent: '#f59e0b',
    bgLight: '#fffbeb',
    borderLight: '#fcd34d',
    textLight: '#92400e',
    bgDark: '#78350f',
    borderDark: '#d97706',
    textDark: '#fde68a',
  },
  orange: {
    accent: '#f97316',
    bgLight: '#fff7ed',
    borderLight: '#fdba74',
    textLight: '#9a3412',
    bgDark: '#7c2d12',
    borderDark: '#ea580c',
    textDark: '#fed7aa',
  },
  rose: {
    accent: '#f43f5e',
    bgLight: '#fff1f2',
    borderLight: '#fda4af',
    textLight: '#9f1239',
    bgDark: '#881337',
    borderDark: '#e11d48',
    textDark: '#fecdd3',
  },
};

const STATUS_I18N: Record<
  'en' | 'de' | 'fr',
  Record<VisibilityStatus, string>
> = {
  en: {
    Visible: 'VISIBLE',
    'Partially Visible': 'PARTIAL',
    'Barely Visible': 'BARELY',
    'Not Visible': 'SOCKED IN',
  },
  de: {
    Visible: 'SICHTBAR',
    'Partially Visible': 'TEILWEISE',
    'Barely Visible': 'KAUM',
    'Not Visible': 'IN WOLKEN',
  },
  fr: {
    Visible: 'VISIBLE',
    'Partially Visible': 'PARTIEL',
    'Barely Visible': 'LIMITÉ',
    'Not Visible': 'BOUCHÉ',
  },
};

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;
  const viewpointParam = sp.get('viewpoint') || 'both';
  const theme = sp.get('theme') === 'dark' ? 'dark' : 'light';
  const style = sp.get('style') === 'pill' ? 'pill' : 'card';
  const rawLang = sp.get('lang');
  const lang: 'en' | 'de' | 'fr' =
    rawLang === 'de' || rawLang === 'fr' ? rawLang : 'en';
  const partner = (sp.get('partner') || '').trim().slice(0, 36);

  const data = await fetchMatterhornVisibility();
  const gornergrat = data.viewpoints.gornergrat;
  const glacier = data.viewpoints['glacier-paradise'];
  const primary =
    viewpointParam === 'glacier-paradise' ? glacier : gornergrat;

  const isDark = theme === 'dark';
  const pal = COLOR_HEX[primary.currentBadgeColor];
  const gPal = COLOR_HEX[gornergrat.currentBadgeColor];
  const glPal = COLOR_HEX[glacier.currentBadgeColor];
  const labels = STATUS_I18N[lang];

  const cardBg = isDark ? '#0f172a' : '#ffffff';
  const cardBorder = isDark ? '#1e293b' : '#cbd5e1';
  const titleColor = isDark ? '#f8fafc' : '#0f172a';
  const mutedColor = isDark ? '#94a3b8' : '#475569';
  const subBg = isDark ? '#1e293b' : '#f8fafc';

  let svg = '';

  if (style === 'pill') {
    const pillText =
      viewpointParam === 'both'
        ? `Gornergrat ${gornergrat.currentScore}/10 • Glacier ${glacier.currentScore}/10`
        : `${primary.viewpoint.shortLabel}: ${primary.currentScore}/10 ${labels[primary.currentStatus]}`;

    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="380" height="36" viewBox="0 0 380 36" role="img" aria-label="Matterhorn Live Visibility: ${escapeXml(pillText)}">
  <rect x="0.5" y="0.5" width="379" height="35" rx="10" fill="${cardBg}" stroke="${cardBorder}" />
  <path d="M16 25 L23 11 L27 17 L30 13 L35 25 Z" fill="#0284c7" />
  <circle cx="46" cy="18" r="4" fill="${pal.accent}" />
  <text x="56" y="22" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="11.5" font-weight="700" fill="${titleColor}">MATTERHORN</text>
  <text x="144" y="22" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11.5" font-weight="700" fill="${isDark ? pal.textDark : pal.textLight}">${escapeXml(pillText)}</text>
</svg>`;
  } else {
    const headerTitle = partner
      ? `${partner.toUpperCase()} • ZERMATT 4,478M`
      : 'IS THE MATTERHORN VISIBLE? • ZERMATT 4,478M';

    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="148" viewBox="0 0 420 148" role="img" aria-label="Matterhorn Live Visibility Status Card">
  <rect x="0.5" y="0.5" width="419" height="147" rx="16" fill="${cardBg}" stroke="${cardBorder}" />
  
  <!-- Header Row -->
  <rect x="16" y="14" width="28" height="28" rx="7" fill="#0f172a" />
  <path d="M21 36 L29 20 L33 27 L36 22 L40 36 Z" fill="#38bdf8" />
  <text x="52" y="26" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="11" font-weight="800" fill="${titleColor}">${escapeXml(headerTitle)}</text>
  <text x="52" y="40" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="${mutedColor}">LIVE TELEMETRY • ${escapeXml(data.swissTimeFormatted)} • 15M CACHE</text>
  
  <!-- Dual Viewpoint Blocks -->
  <rect x="16" y="52" width="188" height="62" rx="10" fill="${subBg}" stroke="${isDark ? gPal.borderDark : gPal.borderLight}" />
  <text x="28" y="69" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="10.5" font-weight="700" fill="${mutedColor}">Gornergrat (3,089m East)</text>
  <text x="28" y="94" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22" font-weight="800" fill="${gPal.accent}">${gornergrat.currentScore}/10</text>
  <rect x="92" y="78" width="98" height="20" rx="10" fill="${isDark ? gPal.bgDark : gPal.bgLight}" />
  <text x="141" y="92" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" font-weight="700" fill="${isDark ? gPal.textDark : gPal.textLight}">${escapeXml(labels[gornergrat.currentStatus])}</text>
  <text x="28" y="108" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="${mutedColor}">AM ${gornergrat.today.morning.score}/10 • PM ${gornergrat.today.afternoon.score}/10</text>

  <rect x="216" y="52" width="188" height="62" rx="10" fill="${subBg}" stroke="${isDark ? glPal.borderDark : glPal.borderLight}" />
  <text x="228" y="69" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="10.5" font-weight="700" fill="${mutedColor}">Glacier Paradise (3,883m)</text>
  <text x="228" y="94" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22" font-weight="800" fill="${glPal.accent}">${glacier.currentScore}/10</text>
  <rect x="292" y="78" width="98" height="20" rx="10" fill="${isDark ? glPal.bgDark : glPal.bgLight}" />
  <text x="341" y="92" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" font-weight="700" fill="${isDark ? glPal.textDark : glPal.textLight}">${escapeXml(labels[glacier.currentStatus])}</text>
  <text x="228" y="108" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9.5" fill="${mutedColor}">AM ${glacier.today.morning.score}/10 • PM ${glacier.today.afternoon.score}/10</text>

  <!-- Footer Strip -->
  <text x="16" y="134" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10" fill="${mutedColor}">Mid-Cloud: ${primary.metrics.cloudCoverMid}% • Vis: ${primary.metrics.visibilityKm}km • Wind: ${primary.metrics.windSpeedKmh}km/h</text>
  <text x="404" y="134" text-anchor="end" font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="10" font-weight="700" fill="#0284c7">isthematterhornvisible.com ↗</text>
</svg>`;
  }

  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
    },
  });
}

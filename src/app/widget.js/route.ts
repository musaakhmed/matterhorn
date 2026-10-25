import { NextResponse } from 'next/server';

const WIDGET_LOADER_SCRIPT = `(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  var scriptEl = document.currentScript || document.querySelector('script[src*="widget.js"]');
  var baseOrigin = 'https://isthematterhornvisible.com';
  if (scriptEl && scriptEl.src) {
    try {
      var parsed = new URL(scriptEl.src);
      baseOrigin = parsed.origin;
    } catch (e) {}
  }

  var iframeRegistry = {};

  function getInitialHeight(layout, showForecast, showMetrics) {
    if (layout === 'badge') return 56;
    if (layout === 'compact') return 118;
    var h = 340;
    if (showMetrics !== '0' && showMetrics !== 'false') h += 68;
    if (showForecast !== '0' && showForecast !== 'false') h += 88;
    return h;
  }

  function mountWidgets() {
    var containers = document.querySelectorAll('[data-matterhorn-widget]:not([data-matterhorn-mounted="true"])');
    for (var i = 0; i < containers.length; i++) {
      var el = containers[i];
      el.setAttribute('data-matterhorn-mounted', 'true');

      var widgetId = 'mh-w-' + Math.random().toString(36).slice(2, 9);
      var viewpoint = el.getAttribute('data-viewpoint') || 'both';
      var theme = el.getAttribute('data-theme') || 'light';
      var layout = el.getAttribute('data-layout') || 'card';
      var lang = el.getAttribute('data-lang') || 'en';
      var partner = el.getAttribute('data-partner') || '';
      var forecast = el.getAttribute('data-forecast') || '1';
      var metrics = el.getAttribute('data-metrics') || '1';

      var params = new URLSearchParams();
      params.set('id', widgetId);
      params.set('viewpoint', viewpoint);
      params.set('theme', theme);
      params.set('layout', layout);
      params.set('lang', lang);
      if (partner) params.set('partner', partner);
      if (forecast === '0' || forecast === 'false') params.set('forecast', '0');
      if (metrics === '0' || metrics === 'false') params.set('metrics', '0');

      var iframe = document.createElement('iframe');
      iframe.src = baseOrigin + '/embed/widget?' + params.toString();
      iframe.title = 'Is The Matterhorn Visible? Live Zermatt Summit Telemetry';
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('allowtransparency', 'true');
      iframe.style.width = '100%';
      iframe.style.maxWidth = layout === 'card' ? '448px' : '100%';
      iframe.style.height = getInitialHeight(layout, forecast, metrics) + 'px';
      iframe.style.border = '0';
      iframe.style.overflow = 'hidden';
      iframe.style.display = 'block';
      iframe.style.background = 'transparent';
      iframe.style.transition = 'height 150ms ease';

      iframeRegistry[widgetId] = iframe;
      el.innerHTML = '';
      el.appendChild(iframe);
    }
  }

  window.addEventListener('message', function (event) {
    if (!event || !event.data || event.data.type !== 'matterhorn-widget-resize') return;
    var id = event.data.widgetId;
    var height = Number(event.data.height);
    if (id && iframeRegistry[id] && height > 30 && height < 1200) {
      iframeRegistry[id].style.height = (height + 8) + 'px';
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountWidgets);
  } else {
    mountWidgets();
  }
})();
`;

export async function GET() {
  return new NextResponse(WIDGET_LOADER_SCRIPT, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

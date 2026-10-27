import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Globe,
  Mail,
  Monitor,
  Mountain,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { fetchMatterhornVisibility } from '@/lib/weather';
import {
  buildWidgetPageJsonLd,
  serializeJsonLd,
  WIDGET_PAGE_FAQS,
} from '@/lib/schema';
import { getAlternateUrls } from '@/lib/i18n/config';
import LiveVisibilityBanner from '@/components/LiveVisibilityBanner';
import WidgetBuilderClient from '@/components/WidgetBuilderClient';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FramedPhoto from '@/components/FramedPhoto';
import { PLACE_PHOTOS } from '@/lib/place-photos';

export const revalidate = 900; // Refresh live telemetry every 15 minutes

export const metadata: Metadata = {
  title: 'Matterhorn Live Widget | Free Embed for Websites',
  description:
    'Embed a live 1–10 Matterhorn summit visibility widget on your Zermatt website. Auto-updates every 15 min with Gornergrat telemetry in EN/DE/FR.',
  keywords: [
    'matterhorn visibility widget',
    'zermatt hotel weather widget',
    'embed matterhorn live status',
    'gornergrat visibility widget',
    'zermatt tourism website widget',
    'matterhorn webcam weather embed',
  ],
  alternates: getAlternateUrls('/widget'),
  openGraph: {
    title: 'Matterhorn Live Widget | Free Embed for Websites',
    description:
      'Embed a live 1–10 Matterhorn visibility widget on your website. Free script, iframe & badge embeds with Gornergrat data.',
    url: 'https://isthematterhornvisible.com/widget',
    type: 'website',
  },
};

const HOSPITALITY_USE_CASES = [
  {
    icon: Building2,
    badge: 'Hotels & Luxury Chalets',
    title: 'Upgrade Your "Weather & Webcams" Page',
    description:
      'Generic weather widgets read Zermatt valley floor conditions at 1,608m—telling guests it is cloudy when the 4,478m summit is crystal clear above an inversion. Give guests accurate Gornergrat & Glacier Paradise scores right on your booking or concierge page.',
  },
  {
    icon: Mail,
    badge: 'Pre-Arrival & Breakfast Digests',
    title: 'Live SVG Badges for Guest Emails',
    description:
      'Standard iframes and scripts are blocked by email clients. Our server-rendered SVG status badge (/api/widget/badge) works inside standard <img> tags in morning guest newsletters and digital room compendiums.',
  },
  {
    icon: Monitor,
    badge: 'Lobby & Reception Signage',
    title: 'Front-Desk & Smart TV Displays',
    description:
      'Use the Night Chalet (Dark) or Frosted Glacier (Glass) theme on reception screens alongside Gornergrat Bahn departure times so guests can decide whether to buy a CHF 100+ mountain pass.',
  },
  {
    icon: Mountain,
    badge: 'Guides, Ski Schools & Blogs',
    title: 'Multilingual (EN / DE / FR) Telemetry',
    description:
      'Serving international guests in Valais? Switch the widget to German (DE) or French (FR) with a single attribute to display localized AM/PM visibility verdicts and 3-day horizon trends.',
  },
];

const CMS_PLATFORMS = [
  {
    name: 'WordPress & Elementor',
    step: 'Paste the Script Loader or Iframe snippet into any "Custom HTML" Gutenberg block or Elementor HTML widget.',
  },
  {
    name: 'Webflow, Squarespace & Wix',
    step: 'Drop the Universal Iframe or Script snippet into an Embed / Code Block on your Weather or Concierge page.',
  },
  {
    name: 'Guest Emails & Notion / Markdown',
    step: 'Select the "Live SVG Badge" tab and paste the <img> tag into Mailchimp, Klaviyo, or your digital guestbook.',
  },
  {
    name: 'Custom React / Lobby TVs',
    step: 'Query /api/visibility (CORS-enabled JSON) or mount the responsive iframe with custom query parameters.',
  },
];

export default async function PartnerWidgetPage() {
  const telemetry = await fetchMatterhornVisibility();
  const jsonLd = buildWidgetPageJsonLd(telemetry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <LiveVisibilityBanner />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/"
            className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors font-semibold"
          >
            Live Dashboard
          </Link>
          <ChevronRight
            className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600"
            aria-hidden="true"
          />
          <span className="text-slate-800 dark:text-slate-200 font-bold">
            Hotel &amp; Partner Live Status Widget
          </span>
        </nav>

        {/* Hero Section */}
        <section className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-xs dark:border-slate-800 dark:bg-slate-900/90">
          <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="order-2 max-w-3xl space-y-4 p-6 sm:p-8 md:p-10 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-mono font-bold text-sky-800 dark:text-sky-300">
              <Code2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>
                FREE PARTNER TELEMETRY • ZERMATT HOTELS, CHALETS &amp; PORTALS
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              Publish Live Matterhorn Visibility on Your Website
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
              Every morning in Zermatt, hotel guests ask the front desk the same
              question:{' '}
              <em className="font-semibold text-slate-800 dark:text-slate-200">
                &ldquo;Can we see the Matterhorn today if we buy tickets for
                Gornergrat or Glacier Paradise?&rdquo;
              </em>{' '}
              Embed our real-time 1–10 summit visibility widget directly on your
              hotel website, digital room tablet, or morning guest newsletter.
            </p>

            {/* Key Value Props */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {[
                { icon: Zap, text: '15-Min Auto-Update' },
                { icon: Globe, text: 'EN / DE / FR Multilingual' },
                { icon: Sparkles, text: 'Light, Dark & Glass Themes' },
                { icon: ShieldCheck, text: 'Zero Cookies (GDPR/FADP)' },
              ].map((pill) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={pill.text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <Icon
                      className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{pill.text}</span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <FramedPhoto
              photo={PLACE_PHOTOS.zermattVillage}
              preload
              embedded
              sizes="(max-width: 1024px) 100vw, 40vw"
              aspectClass="aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[320px]"
            />
          </div>
          </div>
        </section>

        {/* Interactive Widget Configurator & Live Code Studio */}
        <WidgetBuilderClient initialData={telemetry} />

        {/* Built for Zermatt Hospitality Use-Case Grid */}
        <section
          aria-label="Hospitality & Partner Use Cases"
          className="space-y-5"
        >
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Designed for Alpine Hospitality</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              How Zermatt Hotels &amp; Mountain Partners Use the Live Widget
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HOSPITALITY_USE_CASES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-bold text-sky-800 dark:text-sky-300">
                      <Icon
                        className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
                        aria-hidden="true"
                      />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Platform & CMS Quick-Start Guide */}
        <section
          aria-label="CMS Integration Instructions"
          className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-8 shadow-2xs space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Works With Every Hotel CMS &amp; Website Builder
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                No API keys, npm packages, or backend setup required—install in
                under 60 seconds.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 shrink-0">
              <CheckCircle2
                className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>Plug &amp; Play Ready</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CMS_PLATFORMS.map((cms, index) => (
              <div
                key={cms.name}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-mono font-extrabold">
                    {index + 1}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {cms.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cms.step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection
          title="Hotel & Partner Widget FAQs"
          subtitle="Everything webmasters and hoteliers need to know about embedding live Matterhorn telemetry"
          faqs={WIDGET_PAGE_FAQS}
          groupName="widget-partner-faq"
          badgeLabel="FAQPage Schema • Zero-Cookie Partner Embed"
        />

        {/* Bottom CTA Banner */}
        <section className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-gradient-to-r from-sky-900 via-slate-900 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                <Activity
                  className="w-4 h-4 text-emerald-400"
                  aria-hidden="true"
                />
                <span>Full 10-Day Alpine Telemetry Dashboard</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-balance">
                Explore the Complete 10-Day Matterhorn Visibility Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Inspect 3-layer cloud ceilings, 4 live Roundshot webcams, Föhn
                banner cloud diagnostics, and 30-year monthly clarity tables.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
            >
              <span>Open Live Dashboard</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

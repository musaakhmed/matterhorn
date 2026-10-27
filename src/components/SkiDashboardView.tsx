'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mountain,
  Compass,
  ArrowRight,
  Clock,
  Wind,
  Snowflake,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  UtensilsCrossed,
  GlassWater,
  Ticket,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Info,
  Layers,
  MapPin,
  Calendar,
  Users,
  Camera,
  TrainFront,
  BookOpen,
} from 'lucide-react';
import { VisibilityApiResponse } from '@/lib/types';
import { getViewpointScoreMap } from '@/lib/viewpoints';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import { useTranslation } from '@/lib/i18n/context';
import Header from '@/components/Header';
import LiveWebcam from '@/components/LiveWebcam';
import Footer from '@/components/Footer';
import SkiScene from '@/components/scenes/SkiScene';
import {
  SKI_SECTORS,
  MOUNTAIN_DINING,
  APRES_SKI_SPOTS,
  SKI_FAQS,
  calculateSkiPassEstimate,
  getSnowAltitudeTiers,
  evaluateCrossBorderLink,
} from '@/lib/ski';

interface SkiDashboardViewProps {
  initialData?: VisibilityApiResponse;
  locale?: Locale;
}

export default function SkiDashboardView({
  initialData,
  locale = 'en',
}: SkiDashboardViewProps) {
  const { dict } = useTranslation();
  // Cross-Border Link Status
  const borderStatus = evaluateCrossBorderLink(initialData);
  const snowTiers = getSnowAltitudeTiers(initialData);

  // Sector selector state
  const [selectedSectorId, setSelectedSectorId] = useState<string>('sunnegga-rothorn');
  const activeSector = SKI_SECTORS.find((s) => s.id === selectedSectorId) || SKI_SECTORS[0];

  // Pass Calculator state
  const [calcDays, setCalcDays] = useState<number>(3);
  const [calcAge, setCalcAge] = useState<'adult' | 'youth' | 'child' | 'under9'>('adult');
  const [calcWantsItaly, setCalcWantsItaly] = useState<boolean>(true);
  const [calcHasIkon, setCalcHasIkon] = useState<boolean>(false);

  // Dining Filter state
  const [diningFilter, setDiningFilter] = useState<'all' | 'Findeln / Sunnegga' | 'Cervinia / Plateau Rosa' | 'Gornergrat / Riffelalp'>('all');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Compute live pass estimate
  const passEstimate = calculateSkiPassEstimate({
    days: calcDays,
    wantsItaly: calcWantsItaly,
    ageCategory: calcAge,
    hasIkonPass: calcHasIkon,
  });

  const filteredDining =
    diningFilter === 'all'
      ? MOUNTAIN_DINING
      : MOUNTAIN_DINING.filter((d) => d.sector === diningFilter);

  const gornergrat = initialData?.viewpoints.gornergrat;
  const glacier = initialData?.viewpoints['glacier-paradise'];

  return (
    <>
      {/* Site-Wide Global Header */}
      <Header
        initialSwissTime={initialData?.swissTimeFormatted}
        activeBadgeColor={gornergrat?.currentBadgeColor}
        telemetrySummary={
          gornergrat && glacier
            ? {
                gornergratScore: gornergrat.currentScore,
                gornergratBadge: gornergrat.currentBadgeColor,
                gornergratStatus: gornergrat.currentStatus,
                glacierScore: glacier.currentScore,
                glacierBadge: glacier.currentBadgeColor,
                glacierStatus: glacier.currentStatus,
                viewpointScores: getViewpointScoreMap(initialData),
              }
            : undefined
        }
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        
        {/* Unified Site Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Link
            href={getLocalizedHref('/', locale)}
            className="hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-semibold" aria-current="page">
            Ski & Snow Intelligence (Zermatt & Cervinia)
          </span>
        </nav>

        <header className="relative overflow-hidden pb-32">
          <SkiScene />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200/90 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold shadow-2xs">
              <Snowflake className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>Matterhorn Ski Paradise • 360 km International Domain</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
              {dict.skiPage.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              See whether the link to Cervinia is open, what the crest wind is doing, and what a pass costs.
              Snow depths further down are a seasonal guide.
            </p>
          </div>
        </header>


        <section
          aria-labelledby="border-link-heading"
          className={`rounded-2xl border p-6 sm:p-8 transition-colors shadow-2xs ${
            borderStatus.status === 'OPEN'
              ? 'bg-white dark:bg-slate-900 border-emerald-500 dark:border-emerald-500/80'
              : borderStatus.status === 'STANDBY'
              ? 'bg-white dark:bg-slate-900 border-amber-500 dark:border-amber-500/80'
              : 'bg-white dark:bg-slate-900 border-rose-500 dark:border-rose-500/80'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wide uppercase ${
                    borderStatus.status === 'OPEN'
                      ? 'bg-emerald-600 text-white'
                      : borderStatus.status === 'STANDBY'
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {borderStatus.status === 'OPEN' && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                  {borderStatus.status === 'STANDBY' && <AlertTriangle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                  {borderStatus.status === 'CLOSED' && <XCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                  <span>{borderStatus.status}: Switzerland ↔ Italy Border Link</span>
                </span>

                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Plateau Rosa & Testa Grigia (3,480 m)
                </span>
              </div>

              <h2 id="border-link-heading" className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                {borderStatus.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {borderStatus.reason}
              </p>
            </div>

            {/* Solid Telemetry Indicator Blocks */}
            <div className="grid grid-cols-2 gap-3 sm:w-80 shrink-0">
              <div className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span className="flex items-center justify-center gap-1.5 text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  <Wind className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <span>Crest Wind</span>
                </span>
                <p className="text-2xl font-mono font-bold text-slate-950 dark:text-white mt-1.5">
                  {borderStatus.plateauRosaWindKmh} <span className="text-xs font-sans font-normal text-slate-500">km/h</span>
                </p>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                  Safety limit: 55 km/h
                </span>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span className="flex items-center justify-center gap-1.5 text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <span>Last Return</span>
                </span>
                <p className="text-2xl font-mono font-bold text-slate-950 dark:text-white mt-1.5">
                  {borderStatus.lastLiftReturnTime.split(' ')[0]}
                </p>
                <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-medium block mt-0.5">
                  Do not miss lift
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>International ski pass or 55 CHF Cervinia daily supplement required before boarding Italian lifts.</span>
            </div>

            <Link
              href="#pass-calculator"
              className="font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
            >
              <span>Calculate international pass price</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="pass-calculator" aria-labelledby="pass-calc-heading" className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
              {dict.skiPage.passEyebrow}
            </span>
            <h2 id="pass-calc-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {dict.skiPage.passTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Estimate ticket costs based on duration, international border access, age group, and Ikon Pass validity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Duration Slider */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label htmlFor="duration-slider" className="flex items-center gap-2 text-slate-950 dark:text-white">
                    <Calendar className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    <span>Duration:</span>
                  </label>
                  <span className="font-mono text-base font-bold text-sky-600 dark:text-sky-400">
                    {calcDays} {calcDays === 1 ? 'Day' : 'Days'}
                  </span>
                </div>

                <input
                  id="duration-slider"
                  type="range"
                  min="1"
                  max="14"
                  value={calcDays}
                  onChange={(e) => setCalcDays(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />

                <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>1 day</span>
                  <span>3 days</span>
                  <span>6 days (Typical)</span>
                  <span>14 days</span>
                </div>
              </div>

              {/* Age Category Selector */}
              <div className="space-y-2.5">
                <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    <span>Age Category:</span>
                  </span>
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'adult', label: 'Adult (20+)' },
                    { id: 'youth', label: 'Youth (16–19)' },
                    { id: 'child', label: 'Child (9–15)' },
                    { id: 'under9', label: 'Under 9 (Free)' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCalcAge(cat.id as any)}
                      aria-pressed={calcAge === cat.id}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                        calcAge === cat.id
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white shadow-2xs font-bold'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkbox Options */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <div className="pr-4">
                    <span className="text-xs font-bold text-slate-950 dark:text-white block">
                      Include Cervinia (Italy) Border Crossing
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Unlocks full 360 km International domain and ski descents into Italy.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={calcWantsItaly}
                    onChange={(e) => setCalcWantsItaly(e.target.checked)}
                    className="w-4 h-4 accent-sky-600 rounded cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500"
                  />
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <div className="pr-4">
                    <span className="text-xs font-bold text-slate-950 dark:text-white block">
                      I have an Ikon Pass (Base or Full)
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Ikon Pass covers 5 to 7 days direct-to-lift across all Swiss sectors.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={calcHasIkon}
                    onChange={(e) => setCalcHasIkon(e.target.checked)}
                    className="w-4 h-4 accent-sky-600 rounded cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500"
                  />
                </label>
              </div>
            </div>

            {/* Solid Calculation Output Panel */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Estimated Pass Cost
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    2026 Dynamic
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                      ~{passEstimate.estimatedCostChf}
                    </span>
                    <span className="text-lg font-mono text-slate-300 font-semibold">CHF</span>
                  </div>

                  {calcDays > 1 && (
                    <span className="text-xs font-mono text-slate-400 mt-1 block">
                      Avg. ~{passEstimate.dailyAverageChf} CHF / day
                    </span>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-2">
                  <div className="font-bold text-sky-400 flex items-center gap-1.5">
                    <Ticket className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{passEstimate.passName}</span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {passEstimate.recommendation}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                <div className="text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 p-3 rounded-xl flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{passEstimate.savingsTip}</span>
                </div>

                <a
                  href="https://www.matterhornparadise.ch/en/book/tickets/single-tickets-ski-passes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
                >
                  <span>Book Early on Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="ski-season-heading" className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 sm:p-6 shadow-2xs space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
            Zermatt Bergbahnen
          </span>
          <h2 id="ski-season-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            Zermatt ski season
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Zermatt Bergbahnen run the lifts. Glacier skiing on the Theodul, up to 3,883 m at Matterhorn Glacier Paradise, runs year-round. The village slopes are the winter season. Early December and late May still ski on the glacier when the lower mountain is thin.
          </p>
        </section>

        <section aria-labelledby="snow-elevation-heading" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                {dict.skiPage.snowEyebrow}
              </span>
              <h2 id="snow-elevation-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                {dict.skiPage.snowTitle}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {dict.skiPage.snowNote}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {snowTiers.map((tier) => (
              <div
                key={tier.altitude}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                      {tier.altitude}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      {tier.tempEstimatedC > 0 ? `+${tier.tempEstimatedC}°C` : `${tier.tempEstimatedC}°C`}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 dark:text-white mt-3.5">
                    {tier.label}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {tier.terrain}
                  </p>

                  <div className="grid grid-cols-2 gap-3 my-5 py-3.5 border-y border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block">
                        Total Base
                      </span>
                      <p className="text-3xl font-mono font-extrabold text-slate-950 dark:text-white mt-1">
                        {tier.snowDepthCm} <span className="text-xs font-sans font-normal text-slate-500">cm</span>
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block">
                        24h Fresh
                      </span>
                      <p className="text-3xl font-mono font-extrabold text-sky-600 dark:text-sky-400 mt-1">
                        +{tier.fresh24hCm} <span className="text-xs font-sans font-normal text-slate-500">cm</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Condition:</span>
                  <span className="font-semibold text-slate-950 dark:text-slate-200 font-mono">
                    {tier.surfaceQuality}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="sectors-heading" className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              Infrastructure & Terrain
            </span>
            <h2 id="sectors-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              The 4 Mountain Sectors of Matterhorn Ski Paradise
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Select a sector to review elevation span, lift networks, sun aspect, and signature descents.
            </p>
          </div>

          {/* Sector Navigation Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-slate-200/70 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {SKI_SECTORS.map((sector) => {
              const isSelected = sector.id === selectedSectorId;
              return (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSectorId(sector.id)}
                  type="button"
                  aria-pressed={isSelected}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold border border-slate-300 dark:border-slate-700 shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="text-xs font-bold truncate">
                    {sector.name.split('–')[0].trim()}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {sector.elevationMax} m • {sector.totalKm} km
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Sector Content Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {activeSector.country}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Elevation: {activeSector.elevationMin} m – {activeSector.elevationMax} m
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  {activeSector.name}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  {activeSector.description}
                </p>
              </div>

              {/* Piste Metrics Summary Block */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 space-y-2.5">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block">
                  Piste Breakdown ({activeSector.totalKm} km Total)
                </span>

                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                  <span className="px-2.5 py-1 rounded bg-blue-500 text-white">
                    Blue {activeSector.blueKm} km
                  </span>
                  <span className="px-2.5 py-1 rounded bg-rose-600 text-white">
                    Red {activeSector.redKm} km
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-white dark:bg-black">
                    Black {activeSector.blackKm} km
                  </span>
                </div>

                {activeSector.yellowItineraryKm > 0 && (
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 block font-semibold">
                    + {activeSector.yellowItineraryKm} km Ungroomed Yellow Itineraries
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Premier Run */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-sky-700 dark:text-sky-300">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <span>Signature Descent</span>
                </div>

                <h4 className="text-base font-bold text-slate-950 dark:text-white">
                  {activeSector.topRun.name}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeSector.topRun.description}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/60 font-semibold">
                  Best For: {activeSector.bestFor}
                </div>
              </div>

              {/* Lift Network */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block">
                  Key Lifts & Ropeways ({activeSector.liftCount} total)
                </span>

                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {activeSector.keyLifts.map((lift, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{lift}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cervinia-ski-heading" className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              Italy side of the ski area
            </span>
            <h2 id="cervinia-ski-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Ski Cervinia, Webcam & Meteo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">Meteo Cervinia</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                The Italy side closes with the same crest wind as the Swiss border. Plateau Rosa is at {borderStatus.plateauRosaWindKmh} km/h right now, against a 55 km/h safety limit. The link above is {borderStatus.status}.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">Skipass Cervinia Zermatt</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Board Italian lifts with an international ski pass, or add the 55 CHF Cervinia day supplement to a Swiss pass. The calculator below prices the cross-border option.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">Cervinia webcam</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                This page does not embed an Italian camera. The Trockener Steg webcam at 2,939 m is the Swiss view toward the glacier and the Italy link.
              </p>
              <a
                href="#ski-webcams"
                className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
              >
                Open the Trockener Steg webcam
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="ski-webcams" aria-labelledby="ski-webcams-heading" className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              Live Visual Telemetry
            </span>
            <h2 id="ski-webcams-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Slope & Summit Webcams
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Real-time 360° Roundshot panoramic feeds from Rothorn, Gornergrat, and Trockener Steg glacier approach.
            </p>
          </div>

          {/* Integrated LiveWebcam component */}
          <LiveWebcam defaultCamId="trockener-steg" />
        </section>


        <section aria-labelledby="chamonix-heading" className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              Two resorts
            </span>
            <h2 id="chamonix-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Zermatt or Chamonix
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">Zermatt and Cervinia</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                This is one ski area. The link to Italy is the Plateau Rosa border above Trockener Steg. An international pass, or the 55 CHF Cervinia day supplement on a Swiss pass, is what lets you ski across.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">Chamonix is a different resort</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Chamonix sits under Mont Blanc, in France. Zermatt and Chamonix do not share a piste. Getting from one to the other is a travel day, not a lift ride. Cervinia remains the only ski link out of Zermatt.
              </p>
            </div>
          </div>
        </section>

        {/* MOUNTAIN DINING & APRÈS-SKI (Editorial Directory) */}
        <section aria-labelledby="dining-heading" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Culinary Guide
              </span>
              <h2 id="dining-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                Findeln Gourmet Chalets & Slope-Side Dining
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Explore premier mountain huts across Switzerland and Italy with slope access requirements and booking recommendations.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 bg-slate-200/70 dark:bg-slate-900 p-1 rounded-xl text-xs font-medium">
              {[
                { id: 'all', label: 'All Huts' },
                { id: 'Findeln / Sunnegga', label: 'Findeln' },
                { id: 'Cervinia / Plateau Rosa', label: 'Italy / Cervinia' },
                { id: 'Gornergrat / Riffelalp', label: 'Gornergrat' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setDiningFilter(btn.id as any)}
                  aria-pressed={diningFilter === btn.id}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    diningFilter === btn.id
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDining.map((spot) => (
              <div
                key={spot.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-900 dark:text-white font-bold">{spot.sector}</span>
                    <span className="text-slate-500 dark:text-slate-400">{spot.elevation} m</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-2">
                    {spot.name}
                  </h3>

                  <div className="my-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {spot.access}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {spot.vibe}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                    <span className="text-slate-400 text-xs uppercase font-mono block">Signature Dish</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{spot.signatureDish}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400">
                    {spot.reservationRequired ? 'Booking Required' : 'Walk-ins OK'}
                  </span>

                  {spot.reservationUrl && (
                    <a
                      href={spot.reservationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                    >
                      <span>Reserve</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Après-Ski Spotlight (Solid Dark Panel, 0 Gradients) */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  15:30 Onward
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Legendary Après-Ski Progression
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Slope-side huts to village taverns
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {APRES_SKI_SPOTS.map((bar) => (
                <div
                  key={bar.name}
                  className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">{bar.name}</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-700 text-slate-200">
                      {bar.peakHours}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-amber-400">{bar.vibe}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{bar.highlight}</p>

                  <div className="pt-2 text-xs font-mono text-slate-400 border-t border-slate-700/80">
                    Location: {bar.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCORDION FAQ */}
        <section aria-labelledby="faq-heading" className="space-y-6 max-w-4xl mx-auto pt-4">
          <div className="text-center space-y-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block">
              Knowledge Base
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Frequently Asked Questions About Skiing in Zermatt
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clear answers regarding cross-border link rules, Ikon Pass redemption, dynamic pricing, and dining.
            </p>
          </div>

          <div className="space-y-3">
            {SKI_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-colors shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-950 dark:text-white pr-2">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3.5 space-y-3">
                      <p>{faq.answer}</p>
                      <div>
                        <span className="inline-block text-xs font-mono uppercase font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Cross-Platform Exploration Hub (Consistent with All Pages on Website) */}
        <section aria-labelledby="cross-nav-heading" className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h2 id="cross-nav-heading" className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Continue Exploring Matterhorn & Zermatt
            </h2>
            <Link
              href={getLocalizedHref('/viewpoints', locale)}
              className="text-xs text-sky-600 dark:text-sky-400 font-semibold hover:underline"
            >
              All Vantage Points →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group shadow-2xs"
            >
              <span className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Live Vantage Point
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Gornergrat (3,089 m) Live Cams & Score →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Real-time Roundshot webcams and 10-day AM/PM summit clarity projections.
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/trains', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group shadow-2xs"
            >
              <span className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Scenic Rail Guide
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Gornergrat Bahn & Glacier Express →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Compare Swiss Travel Pass discounts, seat reservations, and cogwheel train timetables.
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/guides/gornergrat-vs-glacier-paradise', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group shadow-2xs"
            >
              <span className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                Field Comparison
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                Gornergrat vs. Glacier Paradise →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Compare view angles, altitude differences (794 m), and high-wind weather resilience.
              </p>
            </Link>
          </div>
        </section>

      </main>

      {/* Global Website Footer */}
      <Footer locale={locale} className="mt-12" />
    </>
  );
}

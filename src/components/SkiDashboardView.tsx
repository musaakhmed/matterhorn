'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  Wind,
  Snowflake,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Ticket,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Info,
  Calendar,
  Users,
} from 'lucide-react';
import { VisibilityApiResponse } from '@/lib/types';
import { getViewpointScoreMap } from '@/lib/viewpoints';
import { getLocalizedHref, Locale } from '@/lib/i18n/config';
import { useTranslation } from '@/lib/i18n/context';
import {
  getApresSkiSpots,
  getLocalizedCrossBorderLink,
  getLocalizedSkiPassEstimate,
  getMountainDining,
  getSkiDashboardUi,
  getSkiFaqs,
  getSkiSectors,
} from '@/lib/i18n/ski-copy';
import SnowConditions from '@/components/SnowConditions';
import type { ResortSnowReport, SnowForecast } from '@/lib/snow-data';
import Header from '@/components/Header';
import LiveWebcam from '@/components/LiveWebcam';
import Footer from '@/components/Footer';
import SkiScene from '@/components/scenes/SkiScene';

interface SkiDashboardViewProps {
  initialData?: VisibilityApiResponse;
  locale?: Locale;
  snowReport?: ResortSnowReport | null;
  snowForecast?: SnowForecast | null;
}

export default function SkiDashboardView({
  initialData,
  locale = 'en',
  snowReport = null,
  snowForecast = null,
}: SkiDashboardViewProps) {
  const { dict } = useTranslation();
  const ui = getSkiDashboardUi(locale);
  const skiSectors = getSkiSectors(locale);
  const mountainDining = getMountainDining(locale);
  const apresSkiSpots = getApresSkiSpots(locale);
  const skiFaqs = getSkiFaqs(locale);
  const borderStatus = getLocalizedCrossBorderLink(initialData, locale);
  const borderStatusLabel =
    borderStatus.status === 'OPEN'
      ? ui.statusOpen
      : borderStatus.status === 'STANDBY'
        ? ui.statusStandby
        : ui.statusClosed;

  // Sector selector state
  const [selectedSectorId, setSelectedSectorId] = useState<string>('sunnegga-rothorn');
  const activeSector = skiSectors.find((s) => s.id === selectedSectorId) || skiSectors[0];

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
  const passEstimate = getLocalizedSkiPassEstimate(
    {
      days: calcDays,
      wantsItaly: calcWantsItaly,
      ageCategory: calcAge,
      hasIkonPass: calcHasIkon,
    },
    locale,
  );

  const filteredDining =
    diningFilter === 'all'
      ? mountainDining
      : mountainDining.filter((d) => d.sector === diningFilter);

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
        <nav aria-label={ui.breadcrumbAria} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Link
            href={getLocalizedHref('/', locale)}
            className="hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
          >
            {ui.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-semibold" aria-current="page">
            {ui.breadcrumbCurrent}
          </span>
        </nav>

        <header className="relative overflow-hidden pb-32">
          <SkiScene />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200/90 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold shadow-2xs">
              <Snowflake className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>{ui.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
              {dict.skiPage.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {ui.heroLead}
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
                  <span>
                    {borderStatusLabel}
                    {ui.borderLinkSuffix}
                  </span>
                </span>

                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {ui.plateauRosa}
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
                  <span>{ui.crestWind}</span>
                </span>
                <p className="text-2xl font-mono font-bold text-slate-950 dark:text-white mt-1.5">
                  {borderStatus.plateauRosaWindKmh} <span className="text-xs font-sans font-normal text-slate-500">km/h</span>
                </p>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                  {ui.safetyLimit}
                </span>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span className="flex items-center justify-center gap-1.5 text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <span>{ui.lastReturn}</span>
                </span>
                <p className="text-2xl font-mono font-bold text-slate-950 dark:text-white mt-1.5">
                  {borderStatus.lastLiftReturnTime.split(' ')[0]}
                </p>
                <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-medium block mt-0.5">
                  {ui.doNotMiss}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
              <span>{ui.passNote}</span>
            </div>

            <Link
              href="#pass-calculator"
              className="font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
            >
              <span>{ui.calculatePass}</span>
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
              {ui.passIntro}
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
                    <span>{ui.duration}</span>
                  </label>
                  <span className="font-mono text-base font-bold text-sky-600 dark:text-sky-400">
                    {calcDays} {calcDays === 1 ? ui.day : ui.days}
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
                  <span>{ui.tick1}</span>
                  <span>{ui.tick3}</span>
                  <span>{ui.tick6}</span>
                  <span>{ui.tick14}</span>
                </div>
              </div>

              {/* Age Category Selector */}
              <div className="space-y-2.5">
                <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    <span>{ui.ageCategory}</span>
                  </span>
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'adult', label: ui.ageAdult },
                    { id: 'youth', label: ui.ageYouth },
                    { id: 'child', label: ui.ageChild },
                    { id: 'under9', label: ui.ageUnder9 },
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
                      {ui.italyToggleTitle}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {ui.italyToggleBody}
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
                      {ui.ikonTitle}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {ui.ikonBody}
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
                    {ui.estimatedCost}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {ui.dynamic2026}
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
                      {ui.avgPerDay(passEstimate.dailyAverageChf)}
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
                  <span>{ui.bookEarly}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="ski-season-heading" className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 sm:p-6 shadow-2xs space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
            {ui.seasonBrand}
          </span>
          <h2 id="ski-season-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            {ui.seasonTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {ui.seasonBody}
          </p>
        </section>

        <SnowConditions locale={locale} report={snowReport} forecast={snowForecast} />

        <section aria-labelledby="sectors-heading" className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              {ui.sectorsEyebrow}
            </span>
            <h2 id="sectors-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {ui.sectorsTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {ui.sectorsIntro}
            </p>
          </div>

          {/* Sector Navigation Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-slate-200/70 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {skiSectors.map((sector) => {
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
                    {ui.elevationRange(activeSector.elevationMin, activeSector.elevationMax)}
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
                  {ui.pisteBreakdown(activeSector.totalKm)}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                  <span className="px-2.5 py-1 rounded bg-blue-500 text-white">
                    {ui.blue} {activeSector.blueKm} km
                  </span>
                  <span className="px-2.5 py-1 rounded bg-rose-600 text-white">
                    {ui.red} {activeSector.redKm} km
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-white dark:bg-black">
                    {ui.black} {activeSector.blackKm} km
                  </span>
                </div>

                {activeSector.yellowItineraryKm > 0 && (
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 block font-semibold">
                    {ui.yellowItineraries(activeSector.yellowItineraryKm)}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Premier Run */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-sky-700 dark:text-sky-300">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <span>{ui.signatureDescent}</span>
                </div>

                <h4 className="text-base font-bold text-slate-950 dark:text-white">
                  {activeSector.topRun.name}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeSector.topRun.description}
                </p>

                <div className="pt-2 text-xs font-mono text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/60 font-semibold">
                  {ui.bestFor} {activeSector.bestFor}
                </div>
              </div>

              {/* Lift Network */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block">
                  {ui.keyLifts(activeSector.liftCount)}
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
              {ui.italyEyebrow}
            </span>
            <h2 id="cervinia-ski-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {ui.italyHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">{ui.meteoTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {ui.meteoBody(borderStatus.plateauRosaWindKmh, borderStatusLabel)}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">{ui.skipassTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {ui.skipassBody}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">{ui.webcamTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {ui.webcamBody}
              </p>
              <a
                href="#ski-webcams"
                className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
              >
                {ui.openWebcam}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="ski-webcams" aria-labelledby="ski-webcams-heading" className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              {ui.webcamsEyebrow}
            </span>
            <h2 id="ski-webcams-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {ui.webcamsTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {ui.webcamsIntro}
            </p>
          </div>

          {/* Integrated LiveWebcam component */}
          <LiveWebcam defaultCamId="trockener-steg" />
        </section>


        <section aria-labelledby="chamonix-heading" className="space-y-4">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
              {ui.resortsEyebrow}
            </span>
            <h2 id="chamonix-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {ui.resortsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">{ui.zcTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {ui.zcBody}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-950 dark:text-white">{ui.chamonixTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {ui.chamonixBody}
              </p>
            </div>
          </div>
        </section>

        {/* MOUNTAIN DINING & APRÈS-SKI (Editorial Directory) */}
        <section aria-labelledby="dining-heading" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.culinaryEyebrow}
              </span>
              <h2 id="dining-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                {ui.diningTitle}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {ui.diningIntro}
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 bg-slate-200/70 dark:bg-slate-900 p-1 rounded-xl text-xs font-medium">
              {[
                { id: 'all', label: ui.filterAll },
                { id: 'Findeln / Sunnegga', label: ui.filterFindeln },
                { id: 'Cervinia / Plateau Rosa', label: ui.filterItaly },
                { id: 'Gornergrat / Riffelalp', label: ui.filterGornergrat },
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
                    <span className="text-slate-400 text-xs uppercase font-mono block">{ui.signatureDish}</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{spot.signatureDish}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400">
                    {spot.reservationRequired ? ui.bookingRequired : ui.walkIns}
                  </span>

                  {spot.reservationUrl && (
                    <a
                      href={spot.reservationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                    >
                      <span>{ui.reserve}</span>
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
                  {ui.apresEyebrow}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {ui.apresTitle}
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {ui.apresSubtitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {apresSkiSpots.map((bar) => (
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
                    {ui.locationLabel} {bar.location}
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
              {ui.faqEyebrow}
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              {ui.faqTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {ui.faqIntro}
            </p>
          </div>

          <div className="space-y-3">
            {skiFaqs.map((faq, index) => {
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
              {ui.exploreTitle}
            </h2>
            <Link
              href={getLocalizedHref('/viewpoints', locale)}
              className="text-xs text-sky-600 dark:text-sky-400 font-semibold hover:underline"
            >
              {ui.allViewpoints}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href={getLocalizedHref('/viewpoints/gornergrat', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group shadow-2xs"
            >
              <span className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.cardLive}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                {ui.cardGornergratTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ui.cardGornergratBody}
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/trains', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group shadow-2xs"
            >
              <span className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.cardRail}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                {ui.cardTrainsTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ui.cardTrainsBody}
              </p>
            </Link>

            <Link
              href={getLocalizedHref('/guides/gornergrat-vs-glacier-paradise', locale)}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 hover:border-sky-300 dark:hover:border-sky-700 transition-colors group shadow-2xs"
            >
              <span className="text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold block mb-1">
                {ui.cardField}
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                {ui.cardCompareTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {ui.cardCompareBody}
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

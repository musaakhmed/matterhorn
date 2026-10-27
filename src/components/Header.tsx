'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  BookOpen,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Mountain,
  Radio,
  ArrowUpRight,
  Layers,
  Sparkles,
  TrainFront,
  Snowflake,
  Check,
} from 'lucide-react';
import { BadgeColor, Viewpoint } from '@/lib/types';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/lib/i18n/context';
import { getLocalizedHref, stripLocaleFromPath } from '@/lib/i18n/config';
import logoImg from '../../public/logo.jpeg';

export interface HeaderTelemetrySummary {
  gornergratScore?: number;
  gornergratBadge?: BadgeColor;
  gornergratStatus?: string;
  glacierScore?: number;
  glacierBadge?: BadgeColor;
  glacierStatus?: string;
  /** Live score + badge color for every viewpoint, keyed by page slug */
  viewpointScores?: Partial<Record<string, { score: number; color: BadgeColor }>>;
}

export interface HeaderProps {
  initialSwissTime?: string;
  activeViewpoint?: Viewpoint;
  activeBadgeColor?: BadgeColor;
  telemetrySummary?: HeaderTelemetrySummary;
}

const BADGE_COLOR_MAP: Record<BadgeColor, { pill: string; dot: string; text: string }> = {
  emerald: {
    pill: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700/80 text-emerald-900 dark:text-emerald-300',
    dot: 'bg-emerald-500',
    text: 'text-emerald-700 dark:text-emerald-400',
  },
  amber: {
    pill: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700/80 text-amber-900 dark:text-amber-300',
    dot: 'bg-amber-500',
    text: 'text-amber-700 dark:text-amber-400',
  },
  orange: {
    pill: 'bg-orange-50 dark:bg-orange-950/60 border-orange-300 dark:border-orange-700/80 text-orange-900 dark:text-orange-300',
    dot: 'bg-orange-500',
    text: 'text-orange-700 dark:text-orange-400',
  },
  rose: {
    pill: 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/80 text-rose-900 dark:text-rose-300',
    dot: 'bg-rose-500',
    text: 'text-rose-700 dark:text-rose-400',
  },
};

export default function Header({
  activeViewpoint,
  activeBadgeColor,
  telemetrySummary,
}: HeaderProps) {
  const pathname = usePathname() || '/';
  const { locale, dict } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [viewpointsDropdownOpen, setViewpointsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { pathWithoutLocale } = stripLocaleFromPath(pathname);
  const isHome = pathWithoutLocale === '/';
  const isViewpoints = pathWithoutLocale.startsWith('/viewpoints');
  const isTrains = pathWithoutLocale.startsWith('/trains');
  const isSki = pathWithoutLocale.startsWith('/ski');
  const isGuides = pathWithoutLocale.startsWith('/guides');

  const viewpointNavItems = [
    {
      slug: 'gornergrat',
      title: dict.navigation.gornergratTitle,
      elevation: dict.navigation.gornergratElevation,
      aspect: dict.navigation.gornergratAspect,
      badgeKey: 'gornergrat' as const,
    },
    {
      slug: 'glacier-paradise',
      title: dict.navigation.glacierTitle,
      elevation: dict.navigation.glacierElevation,
      aspect: dict.navigation.glacierAspect,
      badgeKey: 'glacier' as const,
    },
    {
      slug: 'sunnegga',
      title: 'Sunnegga',
      elevation: dict.navigation.sunneggaElevation,
      aspect: 'Funicular & east face',
      badgeKey: null,
    },
    {
      slug: 'riffelsee',
      title: 'Riffelsee',
      elevation: '2,757 m',
      aspect: dict.navigation.sunneggaAspect,
      badgeKey: null,
    },
    {
      slug: 'zermatt-village',
      title: dict.navigation.zermattVillageTitle || 'Zermatt Village (Kirchbrücke)',
      elevation: dict.navigation.zermattVillageElevation || '1,608 m',
      aspect: dict.navigation.zermattVillageAspect || 'Village & River Perspective',
      badgeKey: null,
    },
  ];

  const getScoreBadge = (
    slug: string,
    badgeKey: 'gornergrat' | 'glacier' | null
  ): { score: number; color: BadgeColor } | null => {
    const mapped = telemetrySummary?.viewpointScores?.[slug];
    if (mapped?.score) return mapped;
    if (badgeKey === 'gornergrat' && telemetrySummary?.gornergratScore) {
      return {
        score: telemetrySummary.gornergratScore,
        color: telemetrySummary.gornergratBadge || 'emerald',
      };
    }
    if (badgeKey === 'glacier' && telemetrySummary?.glacierScore) {
      return {
        score: telemetrySummary.glacierScore,
        color: telemetrySummary.glacierBadge || 'emerald',
      };
    }
    return null;
  };

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setViewpointsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setViewpointsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setViewpointsDropdownOpen(false);
  }, [pathname]);

  // Summary badge logic
  const gornergratBadge = telemetrySummary?.gornergratBadge || activeBadgeColor || 'emerald';
  const gornergratScore = telemetrySummary?.gornergratScore ?? 9;

  return (
    <header className="w-full border-b border-slate-200/90 dark:border-slate-800/90 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_1px_3px_rgba(15,23,42,0.04)] dark:shadow-none transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={getLocalizedHref('/', locale)}
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded-xl shrink-0"
            aria-label="Is The Matterhorn Visible? Home"
          >
            <div className="relative shrink-0">
              <span className="relative inline-flex items-center justify-center overflow-hidden shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 ring-1 ring-sky-500/35 shadow-sm select-none group-hover:ring-sky-500 transition-all">
                <Image
                  src={logoImg}
                  alt="Matterhorn Visibility Logo"
                  width={176}
                  height={176}
                  unoptimized
                  priority
                  className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-300"
                />
              </span>
              <span
                className="absolute -top-1 -right-1 flex h-3 w-3"
                title="Live Atmospheric Telemetry Active"
              >
                <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
              </span>
            </div>

            <div className="shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 dark:text-white uppercase whitespace-nowrap group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                  {dict.common.siteName.toUpperCase()}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono whitespace-nowrap">
                <span className="text-sky-700 dark:text-sky-400 font-semibold">Zermatt 4,478m</span>
                {activeViewpoint && (
                  <>
                    <span className="text-slate-300 dark:text-slate-600 hidden xl:inline">•</span>
                    <span className="hidden xl:inline text-slate-600 dark:text-slate-300">
                      {activeViewpoint.shortLabel}
                    </span>
                  </>
                )}
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2 font-medium text-xs sm:text-sm"
        >
          {/* Live Forecast / Home Link */}
          <Link
            href={getLocalizedHref('/', locale)}
            className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all h-9 ${
              isHome
                ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-bold border border-sky-200/90 dark:border-sky-800/80 shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
            }`}
            aria-current={isHome ? 'page' : undefined}
          >
            <Mountain
              className={`w-4 h-4 shrink-0 ${isHome ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}
              aria-hidden="true"
            />
            <span>{dict.common.liveScore}</span>
          </Link>

          {/* Viewpoints Dropdown */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setViewpointsDropdownOpen(!viewpointsDropdownOpen)}
              onMouseEnter={() => setViewpointsDropdownOpen(true)}
              aria-expanded={viewpointsDropdownOpen}
              aria-haspopup="true"
              className={`whitespace-nowrap inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all h-9 cursor-pointer ${
                isViewpoints
                  ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-bold border border-sky-200/90 dark:border-sky-800/80 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
              }`}
            >
              <Compass
                className={`w-4 h-4 shrink-0 ${isViewpoints ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}
                aria-hidden="true"
              />
              <span>{dict.common.allViewpoints}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  viewpointsDropdownOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : 'text-slate-400'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Flyout */}
            {viewpointsDropdownOpen && (
              <div
                onMouseLeave={() => setViewpointsDropdownOpen(false)}
                className="absolute left-0 mt-2 w-[360px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 animate-dropdown-left"
                role="menu"
                aria-label="Viewpoints menu"
              >
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    {dict.viewpointSwitcher.selectVantagePoint}
                  </span>
                </div>

                <div className="space-y-1">
                  {viewpointNavItems.map((item) => {
                    const isItemActive = pathWithoutLocale === `/viewpoints/${item.slug}`;
                    const scoreBadge = getScoreBadge(item.slug, item.badgeKey);

                    return (
                      <Link
                        key={item.slug}
                        href={getLocalizedHref(`/viewpoints/${item.slug}`, locale)}
                        role="menuitem"
                        aria-current={isItemActive ? 'page' : undefined}
                        className={`group flex items-center justify-between p-2.5 rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-sky-500 ${
                          isItemActive
                            ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-950 dark:text-sky-200 font-semibold ring-1 ring-sky-200 dark:ring-sky-800'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400">
                            <span className="truncate">{item.title}</span>
                            <span className="whitespace-nowrap shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {item.elevation}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans mt-0.5 truncate">
                            {item.aspect}
                          </p>
                        </div>

                        <div className="shrink-0 flex items-center justify-end gap-2">
                          {scoreBadge ? (
                            <span
                              title="Live photo-conditions score"
                              className={`inline-flex items-center justify-center gap-1 w-[58px] py-0.5 rounded-md text-[10px] font-mono font-bold border whitespace-nowrap ${
                                BADGE_COLOR_MAP[scoreBadge.color].pill
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  BADGE_COLOR_MAP[scoreBadge.color].dot
                                }`}
                              />
                              <span>{scoreBadge.score}/10</span>
                            </span>
                          ) : (
                            <span
                              aria-label="No live score"
                              className="inline-flex items-center justify-center w-[58px] py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500"
                            >
                              –
                            </span>
                          )}
                          <span className="w-3.5 h-3.5 flex items-center justify-center">
                            {isItemActive && (
                              <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                            )}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={getLocalizedHref('/viewpoints', locale)}
                    role="menuitem"
                    className="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{dict.common.allViewpoints}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Scenic Trains Link */}
          <Link
            href={getLocalizedHref('/trains', locale)}
            className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all h-9 ${
              isTrains
                ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-bold border border-sky-200/90 dark:border-sky-800/80 shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
            }`}
            aria-current={isTrains ? 'page' : undefined}
          >
            <TrainFront
              className={`w-4 h-4 shrink-0 ${isTrains ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}
              aria-hidden="true"
            />
            <span>Trains</span>
          </Link>

          {/* Ski & Snow Intelligence Link */}
          <Link
            href={getLocalizedHref('/ski', locale)}
            className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all h-9 ${
              isSki
                ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-bold border border-sky-200/90 dark:border-sky-800/80 shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
            }`}
            aria-current={isSki ? 'page' : undefined}
          >
            <Snowflake
              className={`w-4 h-4 shrink-0 ${isSki ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}
              aria-hidden="true"
            />
            <span>Ski & Snow</span>
          </Link>

          {/* Field Guides Link */}
          <Link
            href={getLocalizedHref('/guides', locale)}
            className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all h-9 ${
              isGuides
                ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-bold border border-sky-200/90 dark:border-sky-800/80 shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
            }`}
            aria-current={isGuides ? 'page' : undefined}
          >
            <BookOpen
              className={`w-4 h-4 shrink-0 ${isGuides ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-400'}`}
              aria-hidden="true"
            />
            <span>{dict.common.guides}</span>
          </Link>

        </nav>

        {/* Right Status Cluster: Telemetry Pill & Language & Theme Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Live Telemetry Score Pill */}
          <Link
            href={getLocalizedHref(isHome ? '/viewpoints/gornergrat' : '/', locale)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all hover:scale-102 shadow-2xs shrink-0 ${
              BADGE_COLOR_MAP[gornergratBadge].pill
            }`}
            title={`Live Gornergrat Summit Visibility: ${gornergratScore}/10`}
          >
            <Radio className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse shrink-0" aria-hidden="true" />
            <span>Live: {gornergratScore}/10</span>
          </Link>

          {/* Multilingual Selector */}
          <LanguageSelector />

          {/* Theme Toggle Button */}
          <ThemeToggle variant="dropdown" className="inline-block" />

          {/* Mobile/Tablet Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-colors active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-900 dark:text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900 dark:text-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 top-[61px] sm:top-[69px] bg-slate-900/40 dark:bg-black/60 backdrop-blur-xs z-40 lg:hidden animate-subtle-fade"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Down Drawer Container */}
          <div
            id="mobile-navigation-drawer"
            className="fixed inset-x-0 top-[61px] sm:top-[69px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200/90 dark:border-slate-800 shadow-2xl z-50 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto animate-drawer"
          >
            <div className="p-4 space-y-4 max-w-lg mx-auto">
              {/* Primary Mobile Links */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href={getLocalizedHref('/', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isHome
                      ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200 font-bold shadow-2xs'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <Mountain className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">{dict.common.liveScore}</span>
                </Link>

                <Link
                  href={getLocalizedHref('/viewpoints', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isViewpoints
                      ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200 font-bold shadow-2xs'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">{dict.common.allViewpoints}</span>
                </Link>

                <Link
                  href={getLocalizedHref('/trains', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isTrains
                      ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200 font-bold shadow-2xs'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <TrainFront className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">Scenic Trains</span>
                </Link>

                <Link
                  href={getLocalizedHref('/ski', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isSki
                      ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200 font-bold shadow-2xs'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <Snowflake className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">Ski & Snow</span>
                </Link>

                <Link
                  href={getLocalizedHref('/guides', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isGuides
                      ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200 font-bold shadow-2xs'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">{dict.common.guides}</span>
                </Link>
              </div>

              {/* Viewpoints Quick-Access Cards */}
              <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-3 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    {dict.viewpointSwitcher.selectVantagePoint}
                  </span>
                  <span className="text-[10px] font-mono text-sky-700 dark:text-sky-400 font-semibold">
                    Live Score
                  </span>
                </div>

                <div className="space-y-1.5">
                  {viewpointNavItems.map((item) => {
                    const isItemActive = pathWithoutLocale === `/viewpoints/${item.slug}`;
                    const scoreBadge = getScoreBadge(item.slug, item.badgeKey);

                    return (
                      <Link
                        key={item.slug}
                        href={getLocalizedHref(`/viewpoints/${item.slug}`, locale)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                          isItemActive
                            ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-950 dark:text-sky-200 font-bold'
                            : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-sky-50/50 dark:hover:bg-slate-700/60'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-xs font-bold block truncate text-slate-900 dark:text-white">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                            {item.elevation} • {item.aspect}
                          </span>
                        </div>

                        {scoreBadge ? (
                          <span
                            className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold border ${
                              BADGE_COLOR_MAP[scoreBadge.color].pill
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                BADGE_COLOR_MAP[scoreBadge.color].dot
                              }`}
                            />
                            <span>{scoreBadge.score}/10</span>
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Language Selector */}
              <LanguageSelector variant="mobile" />

              {/* Theme Selector Strip */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Theme Appearance
                </span>
                <ThemeToggle variant="segmented" />
              </div>

              {/* Mobile CTA Footer */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2.5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Zermatt 4,478m
                </span>

                <Link
                  href={getLocalizedHref('/', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-colors ml-auto"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-200" aria-hidden="true" />
                  <span>{dict.common.liveScore}</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

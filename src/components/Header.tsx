'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Clock,
  Compass,
  BookOpen,
  Code2,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Mountain,
  Radio,
  ArrowUpRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { BadgeColor, Viewpoint } from '@/lib/types';
import logoImg from '../../public/logo.jpeg';

export interface HeaderTelemetrySummary {
  gornergratScore?: number;
  gornergratBadge?: BadgeColor;
  gornergratStatus?: string;
  glacierScore?: number;
  glacierBadge?: BadgeColor;
  glacierStatus?: string;
}

export interface HeaderProps {
  initialSwissTime?: string;
  activeViewpoint?: Viewpoint;
  activeBadgeColor?: BadgeColor;
  telemetrySummary?: HeaderTelemetrySummary;
}

const BADGE_COLOR_MAP: Record<BadgeColor, { pill: string; dot: string; text: string }> = {
  emerald: {
    pill: 'bg-emerald-50 border-emerald-300 text-emerald-900',
    dot: 'bg-emerald-500',
    text: 'text-emerald-700',
  },
  amber: {
    pill: 'bg-amber-50 border-amber-300 text-amber-900',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
  },
  orange: {
    pill: 'bg-orange-50 border-orange-300 text-orange-900',
    dot: 'bg-orange-500',
    text: 'text-orange-700',
  },
  rose: {
    pill: 'bg-rose-50 border-rose-300 text-rose-900',
    dot: 'bg-rose-500',
    text: 'text-rose-700',
  },
};

const VIEWPOINT_NAV_ITEMS = [
  {
    slug: 'gornergrat',
    title: 'Gornergrat Vantage',
    elevation: '3,089 m',
    aspect: 'East Face (Toblerone View)',
    badgeKey: 'gornergrat' as const,
  },
  {
    slug: 'glacier-paradise',
    title: 'Matterhorn Glacier Paradise',
    elevation: '3,883 m',
    aspect: 'South Face & High Alpine Plateau',
    badgeKey: 'glacier' as const,
  },
  {
    slug: 'sunnegga-riffelsee',
    title: 'Sunnegga & Riffelsee',
    elevation: '2,288 m',
    aspect: 'Lake Mirror Reflections',
    badgeKey: null,
  },
];

export default function Header({
  initialSwissTime = '',
  activeViewpoint,
  activeBadgeColor,
  telemetrySummary,
}: HeaderProps) {
  const pathname = usePathname() || '/';
  const [swissTime, setSwissTime] = useState<string>(initialSwissTime);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [viewpointsDropdownOpen, setViewpointsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Live ticking Swiss CET / CEST clock
  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        const tzFormatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Zurich',
          timeZoneName: 'short',
        });
        const tzParts = tzFormatter.formatToParts(now);
        const tzRaw = tzParts.find((p) => p.type === 'timeZoneName')?.value || 'CET';
        const tzLabel = tzRaw === 'GMT+1' ? 'CET' : tzRaw === 'GMT+2' ? 'CEST' : tzRaw;
        setSwissTime(`${formatter.format(now)} ${tzLabel}`);
      } catch {
        // Fallback or maintain initial time
      }
    };

    if (!initialSwissTime) {
      updateClock();
    }
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [initialSwissTime]);

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
    setMobileMenuOpen(false);
    setViewpointsDropdownOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isViewpoints = pathname.startsWith('/viewpoints');
  const isGuides = pathname.startsWith('/guides');
  const isWidget = pathname.startsWith('/widget');

  // Summary badge logic
  const gornergratBadge = telemetrySummary?.gornergratBadge || activeBadgeColor || 'emerald';
  const gornergratScore = telemetrySummary?.gornergratScore ?? 9;

  return (
    <header className="w-full border-b border-slate-200/90 bg-white/85 backdrop-blur-xl sticky top-0 z-50 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Identity */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded-xl"
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-white" />
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 uppercase truncate group-hover:text-sky-700 transition-colors">
                  IS THE MATTERHORN VISIBLE?
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 flex items-center gap-1.5 font-mono truncate">
                <span className="text-sky-700 font-semibold">Zermatt 4,478m</span>
                <span className="text-slate-300">•</span>
                {activeViewpoint ? (
                  <span className="truncate hidden sm:inline text-slate-600">
                    {activeViewpoint.shortLabel}
                  </span>
                ) : (
                  <span className="truncate hidden sm:inline text-slate-600">
                    Live Alpine Telemetry
                  </span>
                )}
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-1.5 font-medium text-xs sm:text-sm"
        >
          {/* Live Forecast / Home Link */}
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all min-h-[40px] ${
              isHome
                ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200/90 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
            aria-current={isHome ? 'page' : undefined}
          >
            <Mountain
              className={`w-4 h-4 shrink-0 ${isHome ? 'text-sky-600' : 'text-slate-500'}`}
              aria-hidden="true"
            />
            <span>Forecast</span>
          </Link>

          {/* Viewpoints Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setViewpointsDropdownOpen(!viewpointsDropdownOpen)}
              onMouseEnter={() => setViewpointsDropdownOpen(true)}
              aria-expanded={viewpointsDropdownOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all min-h-[40px] cursor-pointer ${
                isViewpoints
                  ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200/90 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <Compass
                className={`w-4 h-4 shrink-0 ${isViewpoints ? 'text-sky-600' : 'text-slate-500'}`}
                aria-hidden="true"
              />
              <span>Viewpoints</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  viewpointsDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Flyout */}
            {viewpointsDropdownOpen && (
              <div
                onMouseLeave={() => setViewpointsDropdownOpen(false)}
                className="absolute left-0 mt-1.5 w-80 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                role="menu"
                aria-label="Viewpoints menu"
              >
                <div className="px-3 py-2 border-b border-slate-100 mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Matterhorn Vantage Points
                  </span>
                </div>

                <div className="space-y-1">
                  {VIEWPOINT_NAV_ITEMS.map((item) => {
                    const isItemActive = pathname === `/viewpoints/${item.slug}`;
                    let scoreBadge: { score: number; color: BadgeColor } | null = null;
                    if (item.badgeKey === 'gornergrat' && telemetrySummary?.gornergratScore) {
                      scoreBadge = {
                        score: telemetrySummary.gornergratScore,
                        color: telemetrySummary.gornergratBadge || 'emerald',
                      };
                    } else if (item.badgeKey === 'glacier' && telemetrySummary?.glacierScore) {
                      scoreBadge = {
                        score: telemetrySummary.glacierScore,
                        color: telemetrySummary.glacierBadge || 'emerald',
                      };
                    }

                    return (
                      <Link
                        key={item.slug}
                        href={`/viewpoints/${item.slug}`}
                        role="menuitem"
                        className={`group flex items-start justify-between p-2.5 rounded-xl transition-all ${
                          isItemActive
                            ? 'bg-sky-50/80 text-sky-950 font-semibold ring-1 ring-sky-200'
                            : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700">
                            <span>{item.title}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              {item.elevation}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-sans mt-0.5 truncate">
                            {item.aspect}
                          </p>
                        </div>

                        {scoreBadge && (
                          <span
                            className={`shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold border ${
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
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-2 mt-1 border-t border-slate-100">
                  <Link
                    href="/viewpoints"
                    role="menuitem"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-sky-700 hover:bg-sky-50 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Compare All Viewpoints</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Field Guides Link */}
          <Link
            href="/guides"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all min-h-[40px] ${
              isGuides
                ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200/90 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
            aria-current={isGuides ? 'page' : undefined}
          >
            <BookOpen
              className={`w-4 h-4 shrink-0 ${isGuides ? 'text-sky-600' : 'text-slate-500'}`}
              aria-hidden="true"
            />
            <span>Field Guides</span>
          </Link>

          {/* Embed Widget Link */}
          <Link
            href="/widget"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all min-h-[40px] ${
              isWidget
                ? 'bg-sky-50 text-sky-800 font-bold border border-sky-200/90 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
            aria-current={isWidget ? 'page' : undefined}
          >
            <Code2
              className={`w-4 h-4 shrink-0 ${isWidget ? 'text-sky-600' : 'text-slate-500'}`}
              aria-hidden="true"
            />
            <span>Widget</span>
          </Link>
        </nav>

        {/* Right Status Cluster: Live Swiss CET Clock & Telemetry Pill */}
        <div className="flex items-center gap-2">
          {/* Live Swiss CET Clock (Desktop & Tablet) */}
          {swissTime && (
            <div
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-sky-50/80 border border-sky-200/90 text-xs font-mono font-bold text-sky-900 shadow-2xs select-none"
              title="Official Zermatt Local Time (Europe/Zurich)"
              aria-label={`Official Swiss Local Time: ${swissTime}`}
            >
              <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" aria-hidden="true" />
              <span>{swissTime}</span>
            </div>
          )}

          {/* Live Telemetry Score Pill */}
          <Link
            href={isHome ? '/viewpoints/gornergrat' : '/'}
            className={`hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all hover:scale-102 shadow-2xs ${
              BADGE_COLOR_MAP[gornergratBadge].pill
            }`}
            title={`Live Gornergrat Summit Visibility: ${gornergratScore}/10`}
          >
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse shrink-0" aria-hidden="true" />
            <span>Live: {gornergratScore}/10</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-900" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 top-[61px] sm:top-[69px] bg-slate-900/40 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Down Drawer Container */}
          <div
            id="mobile-navigation-drawer"
            className="fixed inset-x-0 top-[61px] sm:top-[69px] bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-2xl z-50 md:hidden max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <div className="p-4 space-y-4 max-w-lg mx-auto">
              {/* Primary Mobile Links */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isHome
                      ? 'bg-sky-50 border-sky-300 text-sky-900 font-bold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Mountain className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">Live Forecast</span>
                </Link>

                <Link
                  href="/viewpoints"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isViewpoints
                      ? 'bg-sky-50 border-sky-300 text-sky-900 font-bold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Compass className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">All Viewpoints</span>
                </Link>

                <Link
                  href="/guides"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isGuides
                      ? 'bg-sky-50 border-sky-300 text-sky-900 font-bold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">Field Guides</span>
                </Link>

                <Link
                  href="/widget"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                    isWidget
                      ? 'bg-sky-50 border-sky-300 text-sky-900 font-bold shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Code2 className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold">Embed Widget</span>
                </Link>
              </div>

              {/* Viewpoints Quick-Access Cards */}
              <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Direct Viewpoint Telemetry
                  </span>
                  <span className="text-[10px] font-mono text-sky-700 font-semibold">
                    Live Score
                  </span>
                </div>

                <div className="space-y-1.5">
                  {VIEWPOINT_NAV_ITEMS.map((item) => {
                    const isItemActive = pathname === `/viewpoints/${item.slug}`;
                    let scoreBadge: { score: number; color: BadgeColor } | null = null;
                    if (item.badgeKey === 'gornergrat' && telemetrySummary?.gornergratScore) {
                      scoreBadge = {
                        score: telemetrySummary.gornergratScore,
                        color: telemetrySummary.gornergratBadge || 'emerald',
                      };
                    } else if (item.badgeKey === 'glacier' && telemetrySummary?.glacierScore) {
                      scoreBadge = {
                        score: telemetrySummary.glacierScore,
                        color: telemetrySummary.glacierBadge || 'emerald',
                      };
                    }

                    return (
                      <Link
                        key={item.slug}
                        href={`/viewpoints/${item.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                          isItemActive
                            ? 'bg-sky-50 border-sky-300 text-sky-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-sky-50/50'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-xs font-bold block truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
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

              {/* Swiss Clock & Altitude Footer */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                {swissTime && (
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" aria-hidden="true" />
                    <span>Zermatt Time: {swissTime}</span>
                  </div>
                )}

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-200" aria-hidden="true" />
                  <span>View 10-Day Horizon Score</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

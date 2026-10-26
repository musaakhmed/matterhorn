'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Sun, Moon, Laptop, ChevronDown, Check } from 'lucide-react';
import { useTheme, Theme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  variant?: 'icon' | 'dropdown' | 'segmented';
}

export default function ThemeToggle({
  className = '',
  variant = 'dropdown',
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Segmented control variant (ideal for mobile menu or settings)
  if (variant === 'segmented') {
    return (
      <div
        role="radiogroup"
        aria-label="Theme Selection"
        className={`inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 ${className}`}
      >
        <button
          type="button"
          role="radio"
          aria-checked={theme === 'light'}
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            mounted && theme === 'light'
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
          <span>Light</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={theme === 'dark'}
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            mounted && theme === 'dark'
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={theme === 'system'}
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            mounted && theme === 'system'
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Laptop className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <span>System</span>
        </button>
      </div>
    );
  }

  // Simple icon toggle button
  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          mounted
            ? `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`
            : 'Toggle Theme'
        }
        className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${className}`}
      >
        {!mounted ? (
          <span className="w-4 h-4" />
        ) : resolvedTheme === 'dark' ? (
          <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 text-sky-600 hover:-rotate-12 transition-transform" aria-hidden="true" />
        )}
      </button>
    );
  }

  // Default dropdown menu with Light / Dark / System
  const THEME_OPTIONS: { id: Theme; label: string; icon: typeof Sun }[] = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        aria-label="Toggle Theme Menu"
        className="inline-flex items-center justify-center gap-1.5 h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl bg-slate-100/90 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shadow-2xs"
      >
        {!mounted ? (
          <span className="w-4 h-4" />
        ) : resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
        )}

        <ChevronDown
          className={`w-3 h-3 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
            dropdownOpen ? 'rotate-180 text-sky-500' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {dropdownOpen && (
        <div
          role="menu"
          aria-label="Select website appearance"
          className="absolute right-0 mt-2 w-36 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {THEME_OPTIONS.map((opt) => {
            const IconComp = opt.icon;
            const isSelected = mounted && theme === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  setTheme(opt.id);
                  setDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-300 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2">
                  <IconComp
                    className={`w-3.5 h-3.5 ${
                      opt.id === 'light'
                        ? 'text-amber-500'
                        : opt.id === 'dark'
                        ? 'text-sky-400'
                        : 'text-slate-400 dark:text-slate-400'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{opt.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

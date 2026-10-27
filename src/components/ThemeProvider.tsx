'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'matterhorn-theme';

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyThemeToDocument(resolved: ResolvedTheme) {
  const root = document.documentElement;
  if (resolved === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const [mounted, setMounted] = useState<boolean>(false);

  // Initialize theme from localStorage or system
  useEffect(() => {
    let savedTheme: Theme = 'system';
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        savedTheme = stored;
      }
    } catch {
      // Storage unavailable / private mode
    }

    const initialResolved =
      savedTheme === 'system' ? getSystemTheme() : savedTheme;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(savedTheme);
    setResolvedTheme(initialResolved);
    applyThemeToDocument(initialResolved);
    setMounted(true);
  }, []);

  // Set theme handler
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // Storage unavailable
    }

    const nextResolved =
      newTheme === 'system' ? getSystemTheme() : newTheme;
    setResolvedTheme(nextResolved);
    applyThemeToDocument(nextResolved);
  }, []);

  // Toggle theme utility (Light <-> Dark)
  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  // Listen to OS system color-scheme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const nextResolved: ResolvedTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(nextResolved);
        applyThemeToDocument(nextResolved);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // Listen for storage changes across tabs
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const nextTheme = (e.newValue as Theme) || 'system';
        if (
          nextTheme === 'light' ||
          nextTheme === 'dark' ||
          nextTheme === 'system'
        ) {
          setThemeState(nextTheme);
          const nextResolved =
            nextTheme === 'system' ? getSystemTheme() : nextTheme;
          setResolvedTheme(nextResolved);
          applyThemeToDocument(nextResolved);
        }
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme: mounted ? resolvedTheme : 'light',
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

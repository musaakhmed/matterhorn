'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/context';

export default function HowThisScoreWorks({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dict } = useTranslation();

  return (
    <details className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 shadow-2xs">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 text-sm font-bold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
        <span>{dict.common.howThisScoreWorks}</span>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="space-y-6 border-t border-slate-200/80 px-5 py-5 dark:border-slate-800">
        {children}
      </div>
    </details>
  );
}

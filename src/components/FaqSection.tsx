import React from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { RichFaqItem } from '@/lib/schema';

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: RichFaqItem[];
  groupName?: string;
  badgeLabel?: string;
}

export default function FaqSection({
  title = 'Frequently Asked Questions — Matterhorn Visibility & Zermatt Weather',
  subtitle = 'Answers backed by 30-year Zermatt climatology and live high-altitude Open-Meteo telemetry (3,089m & 3,883m)',
  faqs,
  groupName = 'matterhorn-faq',
  badgeLabel = 'FAQPage Schema • Live Telemetry Indexed',
}: FaqSectionProps) {
  return (
    <section
      aria-label={title}
      className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
    >
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <HelpCircle
              className="w-5 h-5 text-sky-600 shrink-0"
              aria-hidden="true"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-[11px] font-mono font-bold text-sky-800 shrink-0">
          <CheckCircle2
            className="w-3.5 h-3.5 text-emerald-600 shrink-0"
            aria-hidden="true"
          />
          <span>{badgeLabel}</span>
        </div>
      </div>

      {/* Native Accessible Accordion List */}
      <div className="divide-y divide-slate-200/80 border border-slate-200 rounded-xl overflow-hidden">
        {faqs.map((faq, idx) => (
          <details
            key={faq.question}
            name={groupName}
            open={idx === 0}
            className="group bg-white open:bg-slate-50/75 transition-colors"
          >
            <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:text-sky-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-600">
              <span>{faq.question}</span>
              <ChevronRight
                className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-90"
                aria-hidden="true"
              />
            </summary>

            <div className="px-4 sm:px-5 pb-4 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>{faq.answer}</p>

              {faq.guideHref && faq.guideLabel && (
                <div className="pt-1">
                  <Link
                    href={faq.guideHref}
                    className="inline-flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 underline underline-offset-4 transition-colors"
                  >
                    <span>{faq.guideLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

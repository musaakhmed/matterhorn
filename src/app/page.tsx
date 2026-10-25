import React, { Suspense } from 'react';
import VisibilityClientShell from '@/components/VisibilityClientShell';
import { fetchMatterhornVisibility } from '@/lib/weather';

export const revalidate = 900; // Revalidate every 15 minutes

function DashboardSkeleton() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 space-y-6 animate-pulse">
      <div className="h-20 rounded-2xl bg-slate-200/70 border border-slate-200" />
      <div className="h-80 rounded-3xl bg-slate-200/70 border border-slate-200" />
      <div className="h-64 rounded-2xl bg-slate-200/70 border border-slate-200" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="h-44 rounded-2xl bg-slate-200/70 border border-slate-200" />
        <div className="h-44 rounded-2xl bg-slate-200/70 border border-slate-200" />
        <div className="h-44 rounded-2xl bg-slate-200/70 border border-slate-200" />
        <div className="h-44 rounded-2xl bg-slate-200/70 border border-slate-200" />
      </div>
    </div>
  );
}

async function VisibilityDashboard() {
  const data = await fetchMatterhornVisibility();
  return <VisibilityClientShell initialData={data} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <VisibilityDashboard />
    </Suspense>
  );
}

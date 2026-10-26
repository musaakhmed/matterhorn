'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { VisibilityApiResponse } from '@/lib/types';
import { Loader2 } from 'lucide-react';

const ThreeScene = dynamic(() => import('@/components/map/ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-65px)] min-h-[600px] bg-slate-950 flex flex-col items-center justify-center text-white">
      <Loader2 className="w-8 h-8 text-amber-400 animate-spin mb-3" />
      <span className="text-sm font-bold font-mono tracking-wider uppercase text-slate-300">
        Rendering 3D Matterhorn Simulation...
      </span>
      <span className="text-xs text-slate-500 mt-1">Procedural Pyramid & Alpine Sunlight Model</span>
    </div>
  ),
});

interface ThreeClientWrapperProps {
  initialVisibilityData?: VisibilityApiResponse | null;
}

export default function ThreeClientWrapper({ initialVisibilityData }: ThreeClientWrapperProps) {
  return <ThreeScene initialVisibilityData={initialVisibilityData} />;
}

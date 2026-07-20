'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

export function Loader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader on path change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 gap-6">
      <div className="relative flex items-center justify-center">
        {/* Fluid custom SVG loader */}
        <svg className="w-36 h-36 animate-[spin_4s_linear_infinite]" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Overlapping fluid waves / morphing rings */}
          <path
            d="M 50,5 A 45,45 0 0,1 95,50 A 45,45 0 0,1 50,95 A 45,45 0 0,1 5,50"
            fill="none"
            stroke="url(#fluidGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="120 150"
            className="animate-[pulse_2s_ease-in-out_infinite]"
            filter="url(#glow)"
          />
          <path
            d="M 50,10 A 40,40 0 0,1 90,50 A 40,40 0 0,1 50,90 A 40,40 0 0,1 10,50"
            fill="none"
            stroke="url(#fluidGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="80 120"
            className="opacity-50"
            style={{ transformOrigin: 'center', transform: 'rotate(120deg)' }}
          />
        </svg>

        {/* Central Round Logo */}
        <div className="absolute w-20 h-20 p-1 bg-slate-950 rounded-full overflow-hidden flex items-center justify-center border border-slate-800">
          <div className="relative w-full h-full rounded-full overflow-hidden animate-[pulse_3s_ease-in-out_infinite]">
            <Image
              src="/elcoders-logo.png"
              alt="Loading..."
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5 animate-pulse">
        <span className="text-sm font-bold tracking-widest text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text uppercase">
          EL CODERS
        </span>
        <span className="text-[10px] text-slate-500 font-semibold tracking-wider">
          Loading digital velocity...
        </span>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { CANDIDATE } from '../data/portfolioData';

interface StartupLoaderProps {
  onComplete: () => void;
}

export const StartupLoader: React.FC<StartupLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // 2-second progress animation (from 0 to 100% over ~1800ms)
    const startTime = performance.now();
    const duration = 1800;

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 300); // 300ms fade-out transition
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090D16] text-[#F8FAFC] transition-opacity duration-300 ease-out select-none ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Monogram Reveal */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-2xl tracking-tight shadow-lg shadow-blue-500/5">
            {CANDIDATE.initials}
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-blue-500/10 blur-sm -z-10 animate-pulse" />
        </div>

        {/* Identity */}
        <h1 className="text-base font-bold tracking-tight text-white mb-1">
          {CANDIDATE.name}
        </h1>
        <p className="text-xs text-slate-400 font-mono mb-6">
          B.Tech CSE · IEEE Member
        </p>

        {/* Minimalist Progress Bar */}
        <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-800 mb-3">
          <div
            className="h-full bg-blue-500 transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress readout */}
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400">
          <span>INITIALIZING</span>
          <span className="text-blue-400 tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';
import SpinningGlobe from './SpinningGlobe';

export default function GlobalExchangeBanner({ onGetId }) {
  return (
    <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex items-center justify-center select-none">
      {/* Enlarged Responsive 3D Spinning Globe (Shifted to show upper horizon with transparent base) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[54%] sm:translate-y-[50%] md:translate-y-[46%] w-full max-w-[640px] sm:max-w-[800px] md:max-w-[960px] lg:max-w-[1120px] aspect-square pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <SpinningGlobe isBackground />
      </div>

      {/* Floating World Message Transmission Popups (Sequentially popping in around the spinning globe) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 h-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] pointer-events-none">

        {/* Box 1: London Desk (Europe) */}
        <div
          onClick={onGetId}
          className="absolute left-2 sm:left-8 md:left-12 top-[46%] sm:top-[42%] max-w-[200px] sm:max-w-[230px] animate-world-pop pointer-events-auto cursor-pointer"
          style={{ animationDelay: '0s' }}
        >
          <div className="p-2.5 sm:p-3 rounded-sm bg-slate-950/90 border border-slate-700/70 shadow-lg backdrop-blur-md text-left transition-transform hover:scale-105">
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-serif-display text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">London Desk</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-1 py-0.2 rounded-xs border border-emerald-800/40">LIVE</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#d4af37] flex items-center gap-1 mb-0.5">
              <Zap className="w-3 h-3 text-[#d4af37]" />
              <span>Instant Odds Updates</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
              Premier League & UEFA Synced
            </p>
          </div>
          <div className="flex items-center justify-center -mt-0.5">
            <div className="w-px h-3 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
          </div>
        </div>

        {/* Box 2: Dubai VIP Hub (Middle East) */}
        <div
          onClick={onGetId}
          className="absolute left-4 sm:left-[16%] md:left-[20%] top-[18%] sm:top-[14%] max-w-[200px] sm:max-w-[230px] animate-world-pop pointer-events-auto cursor-pointer"
          style={{ animationDelay: '3s' }}
        >
          <div className="p-2.5 sm:p-3 rounded-sm bg-slate-950/90 border border-slate-700/70 shadow-lg backdrop-blur-md text-left transition-transform hover:scale-105">
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-serif-display text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">Dubai Hub</span>
              </div>
              <span className="text-[9px] font-mono text-[#d4af37] font-bold bg-[#9d7837]/20 px-1 py-0.2 rounded-xs border border-[#d4af37]/40">24/7 VIP</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#d4af37] flex items-center gap-1 mb-0.5">
              <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
              <span>Instant Settlement</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
              Zero-Delay Account Routing
            </p>
          </div>
          <div className="flex items-center justify-center -mt-0.5">
            <div className="w-px h-3 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
          </div>
        </div>

        {/* Box 3: ICC In-Play Hub (South Asia) */}
        <div
          onClick={onGetId}
          className="absolute left-1/2 -translate-x-1/2 top-[6%] sm:top-[8%] max-w-[210px] sm:max-w-[240px] animate-world-pop pointer-events-auto cursor-pointer"
          style={{ animationDelay: '6s' }}
        >
          <div className="p-2.5 sm:p-3 rounded-sm bg-slate-950/90 border border-slate-700/70 shadow-lg backdrop-blur-md text-left transition-transform hover:scale-105">
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-serif-display text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">ICC In-Play Hub</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-1 py-0.2 rounded-xs border border-emerald-800/40">MATCHED</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#d4af37] flex items-center gap-1 mb-0.5">
              <Activity className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Real-Time Volume</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
              Cricket Tournaments Synced
            </p>
          </div>
          <div className="flex items-center justify-center -mt-0.5">
            <div className="w-px h-3 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
          </div>
        </div>

        {/* Box 4: Singapore Desk (East Asia) */}
        <div
          onClick={onGetId}
          className="absolute right-4 sm:right-[16%] md:right-[20%] top-[18%] sm:top-[14%] max-w-[200px] sm:max-w-[230px] animate-world-pop pointer-events-auto cursor-pointer"
          style={{ animationDelay: '9s' }}
        >
          <div className="p-2.5 sm:p-3 rounded-sm bg-slate-950/90 border border-slate-700/70 shadow-lg backdrop-blur-md text-left transition-transform hover:scale-105">
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="font-serif-display text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">Singapore Desk</span>
              </div>
              <span className="text-[9px] font-mono text-[#d4af37] font-bold bg-[#9d7837]/20 px-1 py-0.2 rounded-xs border border-[#d4af37]/40">ONLINE</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#d4af37] flex items-center gap-1 mb-0.5">
              <Zap className="w-3 h-3 text-[#d4af37]" />
              <span>24/7 Human Desk</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
              ATP Slams & Global Tables
            </p>
          </div>
          <div className="flex items-center justify-center -mt-0.5">
            <div className="w-px h-3 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
          </div>
        </div>

        {/* Box 5: New York Desk (Americas) */}
        <div
          onClick={onGetId}
          className="absolute right-2 sm:right-8 md:right-12 top-[46%] sm:top-[42%] max-w-[200px] sm:max-w-[230px] animate-world-pop pointer-events-auto cursor-pointer"
          style={{ animationDelay: '12s' }}
        >
          <div className="p-2.5 sm:p-3 rounded-sm bg-slate-950/90 border border-slate-700/70 shadow-lg backdrop-blur-md text-left transition-transform hover:scale-105">
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-serif-display text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">New York Desk</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-1 py-0.2 rounded-xs border border-emerald-800/40">ACTIVE</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#d4af37] flex items-center gap-1 mb-0.5">
              <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
              <span>Global Liquidity Pool</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
              Continuous Order Matching
            </p>
          </div>
          <div className="flex items-center justify-center -mt-0.5">
            <div className="w-px h-3 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}

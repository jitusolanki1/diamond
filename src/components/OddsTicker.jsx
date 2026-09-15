import React from 'react';
import { SPORTS_MARKETS } from '../data/siteData';

export default function OddsTicker({ onSelectMatch }) {
  const tickerItems = [...SPORTS_MARKETS, ...SPORTS_MARKETS];

  return (
    <div className="bg-[#032b3a] border-b border-[#085a78] py-2 overflow-hidden select-none">
      <div className="flex items-center">
        <div className="shrink-0 px-4 py-0.5 text-[11px] font-serif-display font-bold text-white flex items-center gap-2 border-r border-[#085a78] bg-[#032b3a] z-10 tracking-wider">
          <svg className="w-3 h-3 text-[#edd315]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="6 3, 18 3, 22 9, 12 21, 2 9" />
          </svg>
          <span className="uppercase text-[#edd315]">LIVE TICKER</span>
        </div>

        <div className="flex gap-2.5 items-center animate-marquee shrink-0 whitespace-nowrap pl-4">
          {tickerItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              onClick={() => onSelectMatch(item)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#05435A] border border-[#085a78] text-xs cursor-pointer hover:bg-[#075673] transition-colors shadow-xs text-white"
            >
              <span className="text-slate-300 font-medium text-[11px] uppercase tracking-wider">{item.sport}:</span>
              <span className="text-white font-semibold text-xs">{item.match}</span>
              <span className="px-1.5 py-0.2 rounded-xs bg-[#032b3a] text-[#edd315] border border-[#edd315]/40 font-mono text-[11px] font-bold">
                {item.markets[0]?.back || '1.90'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

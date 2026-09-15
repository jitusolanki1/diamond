import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Trophy } from 'lucide-react';
import { SPORTS_MARKETS } from '../data/siteData';

export default function SportsSection({ onGetId }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    { id: 'all', label: 'All Sports' },
    { id: 'cricket', label: '🏏 Cricket' },
    { id: 'football', label: '⚽ Football' },
    { id: 'tennis', label: '🎾 Tennis' },
    { id: 'horse', label: '🐎 Horse Racing' },
  ];

  const filteredMarkets = activeCategory === 'all'
    ? SPORTS_MARKETS
    : SPORTS_MARKETS.filter(m => m.category === activeCategory);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Smooth auto-scroll slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, filteredMarkets.length]);

  const handleAction = (marketName = '') => {
    if (onGetId) {
      onGetId(marketName ? `Trade on ${marketName}` : 'Sports Market');
    } else {
      const el = document.getElementById('get-id');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sports" className="relative py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 reveal-on-scroll">
          <div>
            <div className="text-xs font-serif-display font-bold text-[#05435A] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#05435A]" />
              <span>Live & Upcoming Trading Markets</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#05435A] tracking-tight">
              Exchange Sports Markets
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous Markets"
              className="p-2 rounded-xs bg-white border border-[#d0e2ec] text-[#05435A] hover:bg-[#f4f9fb] cursor-pointer transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next Markets"
              className="p-2 rounded-xs bg-white border border-[#d0e2ec] text-[#05435A] hover:bg-[#f4f9fb] cursor-pointer transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Matches Slider Track */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth reveal-on-scroll"
        >
          {filteredMarkets.map((market) => (
            <div
              key={market.id}
              className="w-[310px] sm:w-[340px] shrink-0 snap-start bg-white rounded-sm border border-slate-200 p-4 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Real Image Banner */}
                <div className="relative h-36 -mx-4 -mt-4 mb-3 overflow-hidden rounded-t-sm bg-slate-100 border-b border-slate-200">
                  <img
                    src={market.image}
                    alt={market.match}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Sport Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-xs text-xs font-bold text-slate-900 border border-slate-200 shadow-xs">
                    <span>{market.emoji}</span>
                    <span className="font-serif-display tracking-wider text-[11px]">{market.sport}</span>
                  </div>

                  {/* Liquidity Tag */}
                  <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-[#fbf9f4] px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wide border border-slate-700">
                    {market.liquidity?.split(' ')[0] || 'Active'}
                  </div>

                  {/* Time Overlay */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs text-white">
                    <span className="font-medium truncate text-[11px]">{market.tournament}</span>
                    <span className="bg-slate-900/95 px-2 py-0.5 rounded-xs text-[10px] font-bold border border-slate-700">
                      {market.time}
                    </span>
                  </div>
                </div>

                {/* Match Title */}
                <h3 className="font-serif-display text-base font-bold text-slate-900 mb-2 truncate">
                  {market.match}
                </h3>

                {/* Status Bar */}
                <div className="p-2 rounded-xs bg-[#f4f9fb] border border-[#d0e2ec] text-xs mb-3 flex justify-between items-center">
                  <span className="text-[#05435A] font-bold font-serif-display tracking-wide text-[11px]">
                    {market.status}
                  </span>
                  <span className="text-slate-700 font-semibold text-[11px] truncate max-w-[140px]">
                    {market.score}
                  </span>
                </div>

                {/* Back / Lay Headers */}
                <div className="grid grid-cols-5 text-xs font-serif-display tracking-wider font-bold mb-1 px-1 text-slate-700">
                  <div className="col-span-3 text-[11px] uppercase">Selection</div>
                  <div className="text-center text-[#05435A] text-[11px] uppercase">Back</div>
                  <div className="text-center text-slate-700 text-[11px] uppercase">Lay</div>
                </div>

                {/* Selections */}
                <div className="space-y-1.5 mb-4">
                  {market.markets.map((sel, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-5 items-center p-1.5 rounded-xs bg-slate-50 border border-slate-200 text-xs"
                    >
                      <div className="col-span-3 text-slate-900 font-medium truncate pr-1">
                        {sel.selection}
                      </div>
                      <button
                        onClick={handleAction}
                        className="py-1 px-2 rounded-xs bg-[#e8f2f6] text-[#05435A] text-center font-mono font-bold hover:bg-[#d0e2ec] cursor-pointer border border-[#085a78]/30 transition-colors"
                        title="Back this selection"
                      >
                        {sel.back}
                      </button>
                      <button
                        onClick={handleAction}
                        className="py-1 px-2 rounded-xs bg-slate-100 text-slate-800 text-center font-mono font-bold hover:bg-slate-200 cursor-pointer border border-slate-300 transition-colors"
                        title="Lay this selection"
                      >
                        {sel.lay}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <button
                onClick={() => handleAction(market.match)}
                className="w-full py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#0BA281] hover:bg-[#0e8f73] cursor-pointer text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Get ID to Bet</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

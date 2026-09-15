import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { CASINO_GAMES } from '../data/siteData';

export default function GamesSection({ onGetId }) {
  const [activeTab, setActiveTab] = useState('all');
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const tabs = [
    { id: 'all', label: 'All Tables' },
    { id: 'card', label: '🃏 Indian Classics & Cards' },
    { id: 'table', label: '🎡 Roulette & Baccarat' },
  ];

  const filteredGames = activeTab === 'all'
    ? CASINO_GAMES
    : CASINO_GAMES.filter(g => g.category === activeTab);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const amount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
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
          carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, filteredGames.length]);

  const handleAction = (gameName = '') => {
    if (onGetId) {
      onGetId(gameName ? `Play ${gameName}` : 'Casino Table');
    } else {
      const el = document.getElementById('get-id');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="games" className="relative py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 reveal-on-scroll">
          <div>
            <div className="text-xs font-serif-display font-bold text-[#9d7837] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9d7837]" />
              <span>Live Dealer Tables & Interactive Salons</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Casino & Card Tables
            </h2>

          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous Games"
              className="p-2 rounded-xs bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next Games"
              className="p-2 rounded-xs bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel / Slider Track */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth reveal-on-scroll"
        >
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-sm border border-slate-200 p-4 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Real Live Casino Image Banner */}
                <div className="relative h-36 -mx-4 -mt-4 mb-3 overflow-hidden rounded-t-sm bg-slate-100 border-b border-slate-200">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Category & Emoji Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-xs text-xs font-bold text-slate-900 border border-slate-200 shadow-xs">
                    <span>{game.emoji}</span>
                    <span className="font-serif-display tracking-wider text-[11px]">{game.categoryName}</span>
                  </div>

                  {/* Feature Tag */}
                  <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-[#d4af37] px-2 py-0.5 rounded-xs text-[10px] font-bold border border-slate-700 tracking-wider uppercase font-serif-display">
                    {game.tag}
                  </div>

                  {/* Dealer Info */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="font-medium text-[11px] truncate">{game.dealer}</span>
                    </div>
                    <span className="bg-slate-900/95 px-2 py-0.5 rounded-xs text-[10px] font-bold border border-slate-700">
                      LIVE
                    </span>
                  </div>
                </div>

                <h3 className="font-serif-display text-base font-bold text-slate-900 mb-1.5 truncate">
                  {game.name}
                </h3>

                <p className="text-xs text-slate-600 mb-3 line-clamp-2 leading-relaxed">
                  {game.description}
                </p>

                <div className="flex justify-between p-2 rounded-xs bg-slate-50 border border-slate-200 text-xs mb-4">
                  <div>
                    <span className="text-slate-500 block text-[9px] font-serif-display uppercase tracking-wider font-bold">MIN STAKE</span>
                    <span className="text-[#8a6a2a] font-bold font-mono text-xs">{game.minLimit}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] font-serif-display uppercase tracking-wider font-bold">MAX STAKE</span>
                    <span className="text-slate-800 font-bold font-mono text-xs">{game.maxLimit}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleAction(game.name)}
                className="w-full py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#0BA281] hover:bg-[#0e8f73] cursor-pointer text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Get ID to Play</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-slate-500 text-center font-normal">
          Random number generated (RNG) certified & live dealer video feeds. 18+ only.
        </div>

      </div>
    </section>
  );
}

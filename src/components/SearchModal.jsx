import React, { useState } from 'react';
import { 
  Search, 
  X, 
  Trophy, 
  Gamepad2, 
  Gift, 
  HelpCircle, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { SPORTS_MARKETS, CASINO_GAMES, PROMOTIONAL_OFFERS, FAQS, BLOG_ARTICLES } from '../data/siteData';

export default function SearchModal({ onClose, scrollTo, openLegalModal }) {
  const [query, setQuery] = useState('');

  const sportsResults = query 
    ? SPORTS_MARKETS.filter(m => m.match.toLowerCase().includes(query.toLowerCase()) || m.sport.toLowerCase().includes(query.toLowerCase()))
    : [];

  const gamesResults = query 
    ? CASINO_GAMES.filter(g => g.name.toLowerCase().includes(query.toLowerCase()) || g.categoryName.toLowerCase().includes(query.toLowerCase()))
    : [];

  const faqResults = query
    ? FAQS.filter(f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : [];

  const totalResults = sportsResults.length + gamesResults.length + faqResults.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#0d121c] border border-[#00d2ff]/30 rounded-2xl shadow-2xl z-10 overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#00d2ff]" />
          <input
            autoFocus
            type="text"
            placeholder="Search sports, live casino tables, guides, rules, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query ? (
            <div className="py-8 text-center text-xs text-slate-500 space-y-2">
              <p>Type keywords like <span className="text-[#00d2ff]">Cricket</span>, <span className="text-[#00d2ff]">Teen Patti</span>, <span className="text-[#00d2ff]">Bonus</span>, <span className="text-[#00d2ff]">ID</span>, or <span className="text-[#00d2ff]">Rules</span></p>
              <div className="flex justify-center gap-2 pt-2">
                <button 
                  onClick={() => { onClose(); scrollTo('sports'); }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 hover:text-[#00d2ff]"
                >
                  Sports Markets
                </button>
                <button 
                  onClick={() => { onClose(); scrollTo('games'); }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 hover:text-[#00d2ff]"
                >
                  Live Casino
                </button>
                <button 
                  onClick={() => { onClose(); scrollTo('faq'); }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 hover:text-[#00d2ff]"
                >
                  FAQ Hub
                </button>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No results found for “{query}”.
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Sports Results */}
              {sportsResults.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-[#00d2ff] uppercase tracking-wider mb-2">
                    Sports Markets ({sportsResults.length})
                  </div>
                  <div className="space-y-1.5">
                    {sportsResults.map(s => (
                      <div 
                        key={s.id}
                        onClick={() => { onClose(); scrollTo('sports'); }}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00d2ff]/30 text-xs flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-[#00d2ff]" />
                          <span className="font-semibold text-white">{s.match}</span>
                          <span className="text-slate-500 text-[11px]">({s.tournament})</span>
                        </div>
                        <span className="text-[#00d2ff] font-mono text-[11px] font-bold">{s.markets[0]?.back}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Games Results */}
              {gamesResults.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-[#00d2ff] uppercase tracking-wider mb-2">
                    Live Casino & Games ({gamesResults.length})
                  </div>
                  <div className="space-y-1.5">
                    {gamesResults.map(g => (
                      <div 
                        key={g.id}
                        onClick={() => { onClose(); scrollTo('games'); }}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00d2ff]/30 text-xs flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="w-4 h-4 text-[#00d2ff]" />
                          <span className="font-semibold text-white">{g.name}</span>
                          <span className="text-slate-500 text-[11px]">{g.categoryName}</span>
                        </div>
                        <span className="text-slate-400 text-[11px] font-mono">{g.minLimit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Results */}
              {faqResults.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-[#00d2ff] uppercase tracking-wider mb-2">
                    FAQ & Knowledge ({faqResults.length})
                  </div>
                  <div className="space-y-1.5">
                    {faqResults.map((f, i) => (
                      <div 
                        key={i}
                        onClick={() => { onClose(); scrollTo('faq'); }}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00d2ff]/30 text-xs cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2 text-white font-medium mb-1">
                          <HelpCircle className="w-3.5 h-3.5 text-[#00d2ff]" />
                          <span>{f.q}</span>
                        </div>
                        <p className="text-slate-400 text-[11px] truncate">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#090d14] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press ESC or click outside to dismiss</span>
          <span className="text-slate-400">Diamond Exchange Quick Search</span>
        </div>

      </div>
    </div>
  );
}

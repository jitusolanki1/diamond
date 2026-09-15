import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Calendar, 
  X, 
  Sparkles,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { BLOG_ARTICLES } from '../data/siteData';

export default function BlogSection({ openAuthModal }) {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="py-20 bg-[#06080d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/25 text-xs font-semibold text-[#00d2ff] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            Insights & Guides
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Educational resources to help you understand market mechanics, decimal probability, 
            cricket analytics, and disciplined bankroll management.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BLOG_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="reveal-on-scroll bg-[#0d121c] rounded-2xl border border-white/10 p-5 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Subtle top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d2ff]/30 to-transparent" />

              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                  <span className="text-[#00d2ff] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#00d2ff]/10 border border-[#00d2ff]/20">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug font-mono">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">{art.date}</span>
                <button
                  onClick={() => setActiveArticle(art)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00d2ff] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#0c1017] border border-[#00d2ff]/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-[#00d2ff] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#00d2ff]/10 border border-[#00d2ff]/20">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 font-mono leading-tight">
              {activeArticle.title}
            </h2>

            {/* Body */}
            <div className="text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans border-b border-white/10 pb-8">
              {activeArticle.content}
            </div>

            {/* Bottom Disclaimer */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <p>
                Strictly for informational and educational purposes. No guaranteed outcomes. 18+ only.
              </p>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  openAuthModal('register');
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold text-[#07090e] bg-[#00d2ff] hover:bg-[#33d9ff] transition-colors cursor-pointer shrink-0"
              >
                GET STARTED
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/siteData';

export default function HowItWorks({ onGetId, openWhatsApp }) {
  const handleGetId = () => {
    if (onGetId) onGetId('How It Works Request ID');
    else if (openWhatsApp) openWhatsApp('How It Works Request ID');
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#f4f9fb] border-b border-[#d0e2ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <div className="text-xs font-serif-display font-bold text-[#05435A] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05435A]" />
            <span>HOW TO START BETTING</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#05435A] tracking-tight">
            How Diamond Exchange Works
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Follow 5 simple steps to get your ID and start your betting journey instantly.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 reveal-on-scroll">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-lg border border-[#d0e2ec] p-5 flex flex-col justify-between shadow-xs hover:border-[#05435A] transition-all hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-serif-display font-bold text-[#05435A] tracking-widest uppercase bg-[#e8f2f6] px-2 py-0.5 rounded-xs">
                    STEP {item.step}
                  </span>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform"
                    />
                  )}
                </div>
                <h3 className="font-serif-display text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 text-xs text-slate-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0BA281] shrink-0" />
                <span className="text-[11px] font-bold text-[#05435A] tracking-wide">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-[#05435A] to-[#043649] text-white flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-md border border-[#085a78]">
          <div>
            <h4 className="font-serif-display text-base font-bold text-white mb-0.5">Need help creating your account?</h4>
            <p className="text-xs text-slate-200">Connect directly on WhatsApp to get your official Diamond ID within seconds.</p>
          </div>
          <div className="flex gap-2.5 w-full sm:w-auto shrink-0">
            <button
              onClick={handleGetId}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0BA281] hover:bg-[#0e8f73] cursor-pointer shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Get ID on WhatsApp
            </button>
            <button
              onClick={() => openWhatsApp('Registration Help')}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#032b3a] hover:bg-[#021f2a] border border-[#085a78] cursor-pointer flex items-center justify-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#edd315]" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

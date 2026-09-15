import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, Lock, Activity } from 'lucide-react';
import { BRAND_CONFIG } from '../data/siteData';

export default function Hero({ onGetId, openWhatsApp, scrollTo }) {
  const handleGetId = () => {
    if (onGetId) onGetId('Hero Get Started');
    else if (openWhatsApp) openWhatsApp('Hero Get Started');
    else scrollTo('get-id');
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#05435A] via-[#043649] to-[#022430] text-white py-12 sm:py-20 overflow-hidden border-b border-[#085a78]">
      {/* Background Diamond Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diamond-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" stroke="#ffffff" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#032b3a] border border-[#edd315]/40 text-xs text-[#edd315] mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#edd315] animate-pulse" />
              <span className="font-bold tracking-wider uppercase text-[11px]">WELCOME TO DIAMOND EXCHANGE</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 font-medium text-[11px]">Live In-Play Markets</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Diamond Exchange: <br />
              <span className="text-[#edd315] italic font-serif-classic font-normal">Your Best Online Betting Partner</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal max-w-xl mb-8 leading-relaxed">
              India's premier digital sports exchange. Get your instant Diamond Exchange ID for cricket betting, football matches, and live casino games with 24/7 instant withdrawals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={handleGetId}
                className="px-7 py-3 rounded-full text-xs font-extrabold tracking-wider uppercase text-white bg-[#0BA281] hover:bg-[#0e8f73] border border-[#0BA281] transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <span>GET ID NOW</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => openWhatsApp('Hero WhatsApp Support')}
                className="px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#032b3a] hover:bg-[#021f2a] border border-[#085a78] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#edd315]" />
                <span>WHATSAPP SUPPORT</span>
              </button>

              <button
                onClick={() => scrollTo('sports')}
                className="px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors cursor-pointer"
              >
                EXPLORE GAMES
              </button>
            </div>
          </div>

          {/* Right Image Banner */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0BA281] to-[#edd315] rounded-2xl blur-lg opacity-30 animate-pulse" />
              <img
                src={BRAND_CONFIG.heroBannerUrl || "https://diamondexchofficial.com/wp-content/uploads/2024/03/best-online-partner-600-x600.webp"}
                alt="Diamond Exchange - Best Online Betting Partner"
                className="relative rounded-xl w-full h-auto object-cover border border-white/15 shadow-2xl"
              />
            </div>
          </div>

        </div>

        {/* 4 Feature Badges with 3D Icons from reference site */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-12 pt-8 border-t border-white/10 text-left">
          <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <img
              src="https://diamondexchofficial.com/wp-content/uploads/2024/03/telephone.webp"
              alt="24/7 Support"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-bold text-white block tracking-wide">24/7 Support</span>
              <p className="text-[11px] text-slate-300 leading-snug">Instant WhatsApp help</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <img
              src="https://diamondexchofficial.com/wp-content/uploads/2024/03/cyber-security.webp"
              alt="100% Safe"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-bold text-white block tracking-wide">100% Safe</span>
              <p className="text-[11px] text-slate-300 leading-snug">256-Bit SSL Encrypted</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <img
              src="https://diamondexchofficial.com/wp-content/uploads/2024/03/withdraw.webp"
              alt="Instant Withdraw"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-bold text-white block tracking-wide">Instant Withdraw</span>
              <p className="text-[11px] text-slate-300 leading-snug">Swift 24/7 bank payouts</p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <img
              src="https://diamondexchofficial.com/wp-content/uploads/2024/03/trust.webp"
              alt="100% Trusted"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-bold text-white block tracking-wide">100% Trusted</span>
              <p className="text-[11px] text-slate-300 leading-snug">Verified official partner</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

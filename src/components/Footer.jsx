import React from 'react';
import { BRAND_CONFIG } from '../data/siteData';

export default function Footer({ scrollTo, openLegalModal, openWhatsApp }) {
  return (
    <footer className="bg-[#020018] text-slate-300 text-xs border-t border-[#085a78]">

      {/* Top Value / Trust Highlights Bar */}
      <div className="border-b border-[#085a78] bg-[#05435A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#085a78] bg-[#043649] shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#032b3a] text-[#edd315] flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-serif-display font-bold text-white text-xs tracking-wide">Instant Account ID</p>
                <p className="text-slate-300 text-[11px]">Direct WhatsApp ID issuance 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#085a78] bg-[#043649] shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#032b3a] text-[#edd315] flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-serif-display font-bold text-white text-xs tracking-wide">100% Safe & Encrypted</p>
                <p className="text-slate-300 text-[11px]">256-bit SSL secured transaction ledger</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#085a78] bg-[#043649] shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#032b3a] text-[#edd315] flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-serif-display font-bold text-white text-xs tracking-wide">Instant Withdrawals</p>
                <p className="text-slate-300 text-[11px]">UPI, IMPS, Bank Transfer & USDT</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#085a78] bg-[#043649] shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#032b3a] text-[#edd315] flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="font-serif-display font-bold text-white text-xs tracking-wide">24/7 Human Care</p>
                <p className="text-slate-300 text-[11px]">Direct WhatsApp support anytime</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={BRAND_CONFIG.logoUrl || "https://diamondexchofficial.com/wp-content/uploads/2024/02/Logo.webp"}
                alt="Diamond Exchange Logo"
                className="h-16 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />

            </div>

            <p className="text-slate-300 text-xs leading-relaxed mb-4 max-w-sm">
              India's trusted digital sports exchange platform. Real-time back & lay odds, cricket betting, live casino tables, and 24/7 customer care on WhatsApp.
            </p>

            {/* Quick Contact Box */}
            <div className="p-3.5 rounded-lg bg-[#043649] border border-[#085a78] max-w-sm space-y-2 mb-4 shadow-xs">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">WhatsApp Helpline:</span>
                <button
                  onClick={() => openWhatsApp('Footer Contact')}
                  className="font-bold text-[#edd315] hover:underline cursor-pointer"
                >
                  {BRAND_CONFIG.whatsappNumber}
                </button>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">Support Email:</span>
                <span className="font-medium text-white font-mono">{BRAND_CONFIG.supportEmail}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#085a78]">
                <span className="text-slate-300 font-medium">Support Status:</span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  24/7 Live Desk Active
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-xs bg-[#032b3a] border border-[#edd315]/30 text-[#edd315] font-serif-display font-bold text-[10px] uppercase tracking-wider">
                18+ STRICTLY
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-xs bg-[#043649] border border-[#085a78] text-slate-200 font-medium text-[10px] uppercase tracking-wider">
                Fair Play Certified
              </span>
            </div>
          </div>

          {/* Col 2: Sports Markets */}
          <div>
            <h4 className="font-serif-display font-bold text-white uppercase text-xs tracking-wider mb-4 border-l-2 border-[#edd315] pl-2.5">
              Sports Markets
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('sports')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🏏 Cricket In-Play (IPL & ICC)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sports')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  ⚽ Football Live Odds
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sports')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🎾 Tennis Centre Court
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sports')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🐎 Horse Racing Markets
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sports')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  📊 Exchange Back & Lay Rates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Casino & Tables */}
          <div>
            <h4 className="font-serif-display font-bold text-white uppercase text-xs tracking-wider mb-4 border-l-2 border-[#edd315] pl-2.5">
              Live Tables
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('games')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🎴 Live Teen Patti
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('games')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🃏 Andar Bahar Tables
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('games')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🎡 Lightning Roulette
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('games')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🎲 Live Baccarat & Blackjack
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('games')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  🚀 Aviator & Instant Multipliers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Legal */}
          <div>
            <h4 className="font-serif-display font-bold text-white uppercase text-xs tracking-wider mb-4 border-l-2 border-[#edd315] pl-2.5">
              Help & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => openWhatsApp('Footer Get ID')} className="text-[#edd315] font-serif-display font-bold hover:underline cursor-pointer text-left flex items-center gap-1">
                  <span>→ Get Account ID (WhatsApp)</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('offers')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  Promotional Terms
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('terms')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('privacy')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openLegalModal('disclaimer')} className="text-slate-300 hover:text-[#edd315] font-medium cursor-pointer text-left transition-colors">
                  Disclaimer & Legality
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment & Settlement Method Chips */}
        <div className="pt-6 pb-6 border-t border-[#085a78]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif-display font-bold text-white text-xs mb-0.5 text-center md:text-left tracking-wide">Supported Settlement Channels</p>
              <p className="text-slate-400 text-[11px] text-center md:text-left">Immediate processing with zero platform surcharge</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="px-3 py-1.5 rounded-sm bg-[#043649] border border-[#085a78] text-white font-mono text-xs shadow-xs">
                UPI / QR
              </div>
              <div className="px-3 py-1.5 rounded-sm bg-[#043649] border border-[#085a78] text-white font-mono text-xs shadow-xs">
                Google Pay
              </div>
              <div className="px-3 py-1.5 rounded-sm bg-[#043649] border border-[#085a78] text-white font-mono text-xs shadow-xs">
                PhonePe
              </div>
              <div className="px-3 py-1.5 rounded-sm bg-[#043649] border border-[#085a78] text-white font-mono text-xs shadow-xs">
                Paytm
              </div>
              <div className="px-3 py-1.5 rounded-sm bg-[#043649] border border-[#085a78] text-white font-mono text-xs shadow-xs">
                IMPS / NetBanking
              </div>
              <div className="px-3 py-1.5 rounded-sm bg-[#043649] border border-[#085a78] text-white font-mono text-xs shadow-xs">
                USDT (TRC-20)
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-6 border-t border-[#085a78] space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed text-center">
            {BRAND_CONFIG.licenseNote} Sports exchange rates and live casino tables are provided for entertainment purposes only. Users must be at least 18 years old and reside in jurisdictions where participation is permitted by law.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 pt-2">
            <p>© 2026 {BRAND_CONFIG.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button onClick={() => openLegalModal('terms')} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
              <span>•</span>
              <button onClick={() => openLegalModal('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Statement</button>
              <span>•</span>
              <button onClick={() => openLegalModal('disclaimer')} className="hover:text-white transition-colors cursor-pointer">Compliance</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { AlertTriangle, ShieldCheck, HeartHandshake, Lock } from 'lucide-react';
import { RESPONSIBLE_GAMING_RULES } from '../data/siteData';

export default function ResponsibleGamingSection({ openWhatsApp }) {
  return (
    <section id="responsible-gaming" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="text-xs font-serif-display font-bold text-[#9d7837] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
            <HeartHandshake className="w-3.5 h-3.5 text-[#9d7837]" />
            <span>Player Protection Policy</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Responsible Gaming & Risk Notice
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Gaming is entertainment, not an investment. Set strict boundaries and never wager money you cannot afford to lose.
          </p>
        </div>

        {/* Mandatory Warning Box */}
        <div className="p-5 rounded-sm bg-[#faf9f6] border border-[#d4af37]/35 mb-8 text-slate-900 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#9d7837] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-serif-display font-bold uppercase tracking-wider mb-1 text-slate-900">
                Statutory Warning & Legal Eligibility
              </h3>
              <p className="text-sm leading-relaxed font-semibold text-slate-800">
                “Betting and gaming involve financial risk. Outcomes are uncertain and winnings are not guaranteed.
                Participate only where legally permitted and only if you meet the applicable legal age (18+).”
              </p>
            </div>
          </div>
        </div>

        {/* 5 Simple Rules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {RESPONSIBLE_GAMING_RULES.map((r, idx) => (
            <div key={idx} className="p-4 rounded-sm bg-white border border-slate-200 shadow-xs">
              <h4 className="text-xs font-serif-display font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9d7837]" />
                <span>{r.rule}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {r.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Self Exclusion & Support Strip */}
        <div className="p-5 rounded-sm bg-[#faf9f6] border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-700">
            <strong className="text-slate-900 block font-serif-display font-bold mb-0.5">Need to take a break or set a deposit limit?</strong>
            Contact our dedicated support specialists to activate a 24-hour cooling-off pause or permanent self-exclusion.
          </div>
          <button
            onClick={() => openWhatsApp('Self-Exclusion or Deposit Limits')}
            className="px-5 py-2.5 rounded-xs bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider cursor-pointer shrink-0 transition-colors shadow-xs"
          >
            Request Pause / Limit
          </button>
        </div>

      </div>
    </section>
  );
}

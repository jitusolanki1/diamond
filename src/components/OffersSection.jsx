import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { PROMOTIONAL_OFFERS } from '../data/siteData';

export default function OffersSection({ onGetId }) {
  const handleGetId = (offerTitle = '') => {
    if (onGetId) {
      onGetId(offerTitle ? `Claim Bonus: ${offerTitle}` : 'Bonus Offer');
    } else {
      const el = document.getElementById('get-id');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [expandedOffer, setExpandedOffer] = useState(null);
  
  // Wagering Turnover Calculator
  const [depositAmount, setDepositAmount] = useState(1000);
  const [rolloverMultiplier, setRolloverMultiplier] = useState(8);

  const bonusAmount = Math.min(depositAmount, 5000);
  const requiredTurnover = bonusAmount * rolloverMultiplier;

  return (
    <section id="offers" className="py-16 sm:py-20 bg-white border-b border-[#d0e2ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <div className="text-xs font-serif-display font-bold text-[#05435A] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05435A]" />
            <span>EXCLUSIVE PROMOTIONS & BONUSES</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#05435A] tracking-tight">
            Promotions & Transparent Rules
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            All bonuses include clearly stated rollover conditions, validity, and qualification rules.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal-on-scroll">
          {PROMOTIONAL_OFFERS.map((offer) => {
            const isExpanded = expandedOffer === offer.id;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-lg border border-[#d0e2ec] p-5 flex flex-col justify-between shadow-xs hover:border-[#05435A] hover:shadow-md transition-all overflow-hidden"
              >
                <div>
                  {offer.image && (
                    <div className="h-40 -mx-5 -mt-5 mb-4 overflow-hidden bg-slate-100 border-b border-[#d0e2ec]">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <span className="text-[10px] font-serif-display font-bold text-[#05435A] uppercase tracking-widest block mb-1">
                    {offer.tagline}
                  </span>

                  <h3 className="font-serif-display text-base font-bold text-slate-900 mb-2">
                    {offer.title}
                  </h3>

                  {/* Bonus Highlight */}
                  <div className="p-2.5 rounded-xs bg-[#f4f9fb] border border-[#05435A]/30 text-[#05435A] font-serif-display font-bold text-sm mb-3">
                    {offer.bonusHighlight}
                  </div>

                  {/* Details */}
                  <div className="p-3 rounded-xs bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Rollover:</span>
                      <span className="font-mono font-bold text-slate-900">{offer.wageringRequirement}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Validity:</span>
                      <span className="font-medium text-slate-900">{offer.validity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Condition:</span>
                      <span className="font-medium text-slate-900">{offer.minDeposit}</span>
                    </div>
                  </div>

                  {/* Terms Toggle */}
                  <button
                    onClick={() => setExpandedOffer(isExpanded ? null : offer.id)}
                    className="w-full text-left text-xs font-medium text-slate-600 hover:text-[#05435A] flex items-center justify-between py-1 cursor-pointer mb-3 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Terms & Conditions' : 'View Terms & Conditions'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
                  </button>

                  {isExpanded && (
                    <div className="p-3 rounded-xs bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 mb-3 leading-relaxed">
                      {offer.terms.map((t, idx) => (
                        <div key={idx} className="flex gap-1.5">
                          <span className="text-[#05435A] font-bold">•</span>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleGetId(offer.title)}
                  className="w-full py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#0BA281] hover:bg-[#0e8f73] cursor-pointer text-center shadow-xs transition-colors"
                >
                  Claim on WhatsApp
                </button>
              </div>
            );
          })}
        </div>

        {/* Turnover Calculator */}
        <div className="bg-[#f4f9fb] rounded-lg border border-[#d0e2ec] p-6 max-w-2xl mx-auto shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#d0e2ec]">
            <Calculator className="w-4 h-4 text-[#05435A]" />
            <h3 className="font-serif-display text-xs font-bold text-[#05435A] uppercase tracking-wider">
              Turnover Requirement Calculator
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="text-slate-700 font-medium block mb-1">Deposit Amount (₹):</label>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value) || 0)}
                className="w-full bg-white border border-[#d0e2ec] rounded-xs p-2 text-slate-900 font-mono text-xs font-bold focus:border-[#05435A] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-1">Rollover Multiplier:</label>
              <select
                value={rolloverMultiplier}
                onChange={(e) => setRolloverMultiplier(Number(e.target.value))}
                className="w-full bg-white border border-[#d0e2ec] rounded-xs p-2 text-slate-900 font-mono text-xs font-medium focus:border-[#05435A] focus:outline-none"
              >
                <option value={3}>3x (Weekly Sports)</option>
                <option value={5}>5x (Table Bonus)</option>
                <option value={8}>8x (Welcome Benefit)</option>
              </select>
            </div>
          </div>

          <div className="mt-5 p-3.5 rounded-xs bg-white border border-[#d0e2ec] text-xs flex justify-between items-center shadow-xs">
            <span className="text-slate-600 font-medium">Total Bets Required Before Withdrawal:</span>
            <span className="text-[#05435A] font-bold font-mono text-sm">₹{requiredTurnover.toLocaleString('en-IN')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { X, AlertTriangle, FileText } from 'lucide-react';
import { TERMS_SECTIONS } from '../data/siteData';

export default function LegalModal({ activeTab = 'terms', onClose }) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-slate-300 rounded-sm p-5 sm:p-6 shadow-md flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xs bg-[#fbf9f4] text-[#9d7837] flex items-center justify-center border border-[#d4af37]/30 shadow-xs">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs sm:text-sm font-serif-display font-bold text-slate-900 uppercase tracking-wider">
                Legal Documentation & Regulatory Terms
              </h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-1 rounded-xs text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-200 pb-2 mb-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setCurrentTab('terms')}
              className={`px-3 py-1.5 rounded-xs text-xs font-medium tracking-wide cursor-pointer transition-colors ${
                currentTab === 'terms' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Terms & Conditions (22 Sections)
            </button>
            <button
              onClick={() => setCurrentTab('privacy')}
              className={`px-3 py-1.5 rounded-xs text-xs font-medium tracking-wide cursor-pointer transition-colors ${
                currentTab === 'privacy' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setCurrentTab('disclaimer')}
              className={`px-3 py-1.5 rounded-xs text-xs font-medium tracking-wide cursor-pointer transition-colors ${
                currentTab === 'disclaimer' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Disclaimer
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto space-y-3 text-xs text-slate-700 leading-relaxed pr-2 my-2">
          {currentTab === 'terms' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xs bg-[#faf9f6] border border-slate-200 text-slate-800 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#9d7837] shrink-0 mt-0.5" />
                <span className="font-medium">
                  Official operational terms. All account holders must meet legal eligibility (18+) and accept rules on market settlement and bonuses.
                </span>
              </div>

              {TERMS_SECTIONS.map((s) => (
                <div key={s.id} className="p-3.5 rounded-xs bg-slate-50 border border-slate-200">
                  <h4 className="font-serif-display font-bold text-slate-900 mb-1">{s.num}. {s.title}</h4>
                  <p className="text-slate-600 font-normal leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          )}

          {currentTab === 'privacy' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200">
                <h4 className="font-serif-display font-bold text-slate-900 mb-1">1. Information Collection</h4>
                <p className="text-slate-600 font-normal leading-relaxed">We collect information required strictly for 18+ age verification, account security, and payment processing.</p>
              </div>
              <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200">
                <h4 className="font-serif-display font-bold text-slate-900 mb-1">2. Data Protection</h4>
                <p className="text-slate-600 font-normal leading-relaxed">All data transmissions are protected via industry-standard SSL encryption and are never sold to external marketers.</p>
              </div>
              <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200">
                <h4 className="font-serif-display font-bold text-slate-900 mb-1">3. User Rights</h4>
                <p className="text-slate-600 font-normal leading-relaxed">Users may request account closure, cooling-off pauses, or information review at any time through our 24/7 helpdesk.</p>
              </div>
            </div>
          )}

          {currentTab === 'disclaimer' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xs bg-[#faf9f6] border border-slate-200 text-slate-900 font-serif-display font-semibold">
                “Betting and gaming involve financial risk. Outcomes are uncertain and winnings are not guaranteed. 
                Participate only where legally permitted and only if you meet the applicable legal age (18+).”
              </div>
              <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200">
                <h4 className="font-serif-display font-bold text-slate-900 mb-1">No Guaranteed Profits</h4>
                <p className="text-slate-600 font-normal leading-relaxed">Outcomes are subject to random event variance. No prediction model or strategy guarantees returns.</p>
              </div>
              <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200">
                <h4 className="font-serif-display font-bold text-slate-900 mb-1">Jurisdiction Eligibility</h4>
                <p className="text-slate-600 font-normal leading-relaxed">Users are solely responsible for ensuring compliance with all local regulations governing sports betting and gaming.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xs bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { ShieldCheck, Headphones, Lock, FileText, Sliders, Smartphone } from 'lucide-react';
import { TRUST_PILLARS } from '../data/siteData';

export default function TrustSection() {
  return (
    <section id="trust" className="py-16 sm:py-20 bg-white border-b border-[#d0e2ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <div className="text-xs font-serif-display font-bold text-[#05435A] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05435A]" />
            <span>DIAMOND EXCH FEATURES</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#05435A] tracking-tight">
            Why Choose Diamond Exchange
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Certified security, lightning-fast settlements, and 24/7 dedicated customer assistance.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 reveal-on-scroll">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-lg border border-[#d0e2ec] p-6 shadow-xs hover:border-[#05435A] hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-[#f4f9fb] border border-[#d0e2ec] flex items-center justify-center shrink-0 shadow-xs p-2 group-hover:scale-105 transition-transform">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#0BA281] uppercase tracking-wider block">
                    {pillar.highlight}
                  </span>
                  <h3 className="font-serif-display text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

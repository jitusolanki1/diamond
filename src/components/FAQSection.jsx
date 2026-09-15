import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/siteData';

export default function FAQSection({ openWhatsApp }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['All', 'General & ID', 'Legal & Eligibility', 'Safety & Risk', 'Account & Payments'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="text-xs font-serif-display font-bold text-[#9d7837] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d7837]" />
            <span>Exchange Clarifications & Protocol</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Learn about account IDs, verification, market rules, and fast settlement.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. ID, withdrawal, legal, bonus)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-xs bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xs text-xs font-medium tracking-wide cursor-pointer shrink-0 transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-2 mb-8">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-serif-display font-semibold text-slate-900 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <span className="pr-2">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#9d7837] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#faf9f6]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="p-5 rounded-sm bg-[#faf9f6] border border-slate-200 text-center text-xs shadow-xs">
          <span className="text-slate-600 font-medium">Still have questions? </span>
          <button
            onClick={() => openWhatsApp('FAQ Inquiry')}
            className="text-[#8a6a2a] font-bold hover:underline cursor-pointer ml-1 inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#9d7837]" />
            <span>Chat with our support team on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}

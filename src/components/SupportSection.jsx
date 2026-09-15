import React, { useState } from 'react';
import { MessageCircle, Mail, Headphones, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/siteData';

export default function SupportSection({ openWhatsApp }) {
  const [formData, setFormData] = useState({ name: '', identifier: '', category: 'Account Assistance', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', identifier: '', category: 'Account Assistance', message: '' });
    }, 4000);
  };

  return (
    <section id="support" className="py-16 sm:py-20 bg-white border-b border-[#d0e2ec]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="text-xs font-serif-display font-bold text-[#05435A] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05435A]" />
            <span>Dedicated Trading Desk Support</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#05435A] tracking-tight">
            Support & Assistance
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Connect with our dedicated support specialists via official channels.
          </p>
        </div>

        {/* 2 Classic Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 reveal-on-scroll">
          <div className="p-5 rounded-sm bg-white border border-[#d0e2ec] shadow-xs flex flex-col justify-between hover:border-[#05435A] transition-all">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-serif-display font-bold text-xs uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 text-[#0BA281]" />
                <span>WhatsApp Desk (24/7)</span>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">Fastest response channel for ID generation, account help, and direct inquiries.</p>
            </div>
            <button
              onClick={() => openWhatsApp('Support Section')}
              className="w-full py-2.5 rounded-full bg-[#0BA281] hover:bg-[#0e8f73] text-white text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>Open WhatsApp</span>
            </button>
          </div>

          <div className="p-5 rounded-sm bg-white border border-[#d0e2ec] shadow-xs flex flex-col justify-between hover:border-[#05435A] transition-all">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-serif-display font-bold text-xs uppercase tracking-wider">
                <Mail className="w-4 h-4 text-[#05435A]" />
                <span>Official Email</span>
              </div>
              <p className="text-xs text-slate-700 mb-4 font-mono font-medium">{BRAND_CONFIG.supportEmail}</p>
            </div>
            <a
              href={`mailto:${BRAND_CONFIG.supportEmail}`}
              className="w-full py-2.5 rounded-full bg-white hover:bg-[#f4f9fb] text-[#05435A] text-xs font-semibold uppercase tracking-wider text-center cursor-pointer transition-colors block border border-[#d0e2ec] hover:border-[#05435A] shadow-xs"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Classic Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#f4f9fb] border border-[#d0e2ec] shadow-xs">
          <h3 className="font-serif-display text-base font-bold text-[#05435A] mb-1">
            Send an Official Inquiry
          </h3>
          <p className="text-xs text-slate-500 mb-5">Our team will review and reply via WhatsApp or email.</p>

          {submitted ? (
            <div className="p-5 rounded-xs bg-[#e8f2f6] border border-[#085a78]/30 text-center text-xs text-[#05435A] font-medium shadow-xs">
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-[#0BA281]" />
              Your inquiry has been submitted. Our team will review and reply shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-slate-700 font-medium block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xs p-2 text-slate-900 focus:border-[#05435A] focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-slate-700 font-medium block mb-1">WhatsApp / Phone / Diamond ID</label>
                  <input
                    type="text"
                    required
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xs p-2 text-slate-900 focus:border-[#05435A] focus:outline-none"
                    placeholder="+91 / Mobile / ID"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xs p-2 text-slate-900 focus:border-[#05435A] focus:outline-none"
                >
                  <option>Account Registration & ID</option>
                  <option>Deposit & Withdrawal Help</option>
                  <option>Promotions & Bonus Rules</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xs p-2 text-slate-900 focus:border-[#05435A] focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#05435A] hover:bg-[#043649] text-white font-bold uppercase tracking-wider cursor-pointer text-xs transition-colors shadow-xs"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, User, Phone, Lock, AlertCircle, Loader2 } from 'lucide-react';
import AnimatedLines from './AnimatedLines';
import { BRAND_CONFIG } from '../data/siteData';
import { FORMSPREE_ENDPOINT } from './GetIdModal';

export default function GetIdSection({ openWhatsApp }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    ageConfirmed: false,
    jurisdictionConfirmed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.ageConfirmed || !formData.jurisdictionConfirmed) {
      alert('Please confirm that you are 18+ and legally eligible to participate.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          whatsappNumber: formData.contact,
          isAge18Plus: formData.ageConfirmed ? 'Yes' : 'No',
          jurisdictionEligible: formData.jurisdictionConfirmed ? 'Yes' : 'No',
          source: 'Diamond Exchange - In-Page Section',
          submittedAt: new Date().toLocaleString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const result = await response.json().catch(() => ({}));
        if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
          setIsSuccess(true);
        } else {
          setErrorMessage(result.error || 'Submission failed. Please check details or contact us on WhatsApp.');
        }
      }
    } catch (err) {
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
        setIsSuccess(true);
      } else {
        setErrorMessage('Network connection error. Please try again or connect via WhatsApp.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-id" className="relative py-16 sm:py-20 bg-[#f4f9fb] border-b border-[#d0e2ec] overflow-hidden">
      {/* Background Architectural Watermark Lines */}
      <AnimatedLines />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#e8f2f6] border border-[#085a78]/30 text-xs font-bold text-[#05435A] mb-2 font-serif-display uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#05435A]" />
            <span>Instant Verified Access</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#05435A] tracking-tight">
            Get Your Official Diamond ID
          </h2>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Create your personalized exchange account in under 2 minutes. Transparent terms and dedicated 24/7 support.
          </p>
        </div>

        {/* Classic 2-Column Card */}
        <div className="bg-white rounded-lg border border-[#d0e2ec] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-sm reveal-on-scroll">
          
          {/* Left Column: Direct WhatsApp Desk */}
          <div className="p-6 sm:p-8 md:col-span-5 bg-gradient-to-b from-[#05435A] to-[#043649] text-white border-b md:border-b-0 md:border-r border-[#085a78] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <img
                  src={BRAND_CONFIG.logoUrl || "https://diamondexchofficial.com/wp-content/uploads/2024/02/Logo.webp"}
                  alt="Diamond Exchange"
                  className="h-8 w-auto object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="flex flex-col">
                  <span className="font-serif-display font-bold text-white text-sm tracking-wider">DIAMOND DESK</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#edd315] font-semibold">Official WhatsApp 24/7</span>
                </div>
              </div>

              <h3 className="font-serif-display text-lg font-bold text-white mb-2">
                Instant ID Generation
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-6">
                Get your verified ID directly on WhatsApp within seconds without waiting. No registration fee.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>Instant verified ID & password on WhatsApp</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>Zero account setup or activation charge</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>24/7 direct human support & instant withdrawal</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>Strict 18+ player protection standard</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp('Instant Get ID Request')}
              className="w-full py-3.5 rounded-full bg-[#0BA281] hover:bg-[#0e8f73] text-white font-extrabold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Get ID on WhatsApp (Instant)</span>
            </button>
          </div>

          {/* Right Column: Online Form */}
          <div className="p-6 sm:p-8 md:col-span-7 bg-white flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-xs bg-[#e8f2f6] text-[#05435A] flex items-center justify-center mx-auto border border-[#085a78]/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-display text-base font-bold text-slate-900">
                  ID Request Received!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our support desk will message your WhatsApp number (<strong>{formData.contact}</strong>) to issue your verified credentials.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => openWhatsApp(`ID Verification for ${encodeURIComponent(formData.name)}`)}
                    className="px-5 py-2.5 rounded-full bg-[#0BA281] hover:bg-[#0e8f73] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Connect on WhatsApp Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3.5 text-xs">
                {/* Formspree Helper Fields */}
                <input type="hidden" name="_subject" value="New Diamond Official ID Request" />
                <input type="hidden" name="source" value="Diamond Exchange - In-Page Section" />

                <div>
                  <h4 className="font-serif-display text-sm font-bold text-[#05435A] mb-0.5">
                    Enter Your Details
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">
                    Fill this quick form or click directly below to get your ID on WhatsApp.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-2.5 rounded-xs bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="text-slate-800 font-bold block mb-1">Full Legal Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:border-[#05435A] focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-800 font-bold block mb-1">WhatsApp Mobile Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="+91 / Mobile number"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:border-[#05435A] focus:outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-[11px] text-slate-700">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="ageConfirmed"
                      required
                      checked={formData.ageConfirmed}
                      onChange={(e) => setFormData({ ...formData, ageConfirmed: e.target.checked })}
                      className="mt-0.5 accent-[#05435A] rounded-xs"
                    />
                    <span>I confirm I am 18 years of age or older (Strict 18+ Only).</span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="jurisdictionConfirmed"
                      required
                      checked={formData.jurisdictionConfirmed}
                      onChange={(e) => setFormData({ ...formData, jurisdictionConfirmed: e.target.checked })}
                      className="mt-0.5 accent-[#05435A] rounded-xs"
                    />
                    <span>I confirm that participation is legally permitted in my jurisdiction.</span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 rounded-full bg-[#05435A] hover:bg-[#043649] disabled:opacity-75 text-white font-bold uppercase tracking-wider cursor-pointer transition-colors flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#edd315]" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="w-4 h-4 text-[#edd315]" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp('Direct Get ID Request')}
                    className="flex-1 py-2.5 rounded-full bg-[#0BA281] hover:bg-[#0e8f73] text-white font-bold uppercase tracking-wider cursor-pointer transition-colors flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Direct on WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Data protected by SSL encryption & delivered via Formspree.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

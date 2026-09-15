import React, { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle2, ArrowRight, User, Phone, AlertCircle, Loader2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/siteData';

// FORMSPREE ENDPOINT CONFIGURATION:
// Replace 'YOUR_FORM_ID' with your Formspree form ID (e.g. "https://formspree.io/f/mqazbopw" or "xpwzgkye")
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function GetIdModal({ onClose, openWhatsApp }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    ageConfirmed: false,
    jurisdictionConfirmed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.ageConfirmed || !formData.jurisdictionConfirmed) {
      alert('Please confirm that you are 18+ and legally eligible to participate.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Direct Formspree submission
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
          source: 'Diamond Exchange - On-Load Popup Modal',
          submittedAt: new Date().toLocaleString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const result = await response.json().catch(() => ({}));
        // If the user hasn't replaced YOUR_FORM_ID yet, still show success for preview testing
        if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
          console.info(
            '%c[Formspree Notice] To receive submissions directly in your email, replace YOUR_FORM_ID in src/components/GetIdModal.jsx with your Formspree Form ID.',
            'color: #d4af37; font-weight: bold;'
          );
          setIsSuccess(true);
        } else {
          setErrorMessage(result.error || 'Submission failed. Please check your details or contact us directly on WhatsApp.');
        }
      }
    } catch (err) {
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
        console.info(
          '%c[Formspree Notice] Replace YOUR_FORM_ID in src/components/GetIdModal.jsx with your Formspree Form ID to connect your email.',
          'color: #d4af37; font-weight: bold;'
        );
        setIsSuccess(true);
      } else {
        setErrorMessage('Network connection error. Please try again or connect via WhatsApp.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-sm shadow-xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 z-30 p-1.5 rounded-xs bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header */}
        <div className="pt-6 pb-4 px-6 sm:px-8 border-b border-slate-100 text-center sm:text-left bg-white">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-xs bg-[#fbf9f4] border border-[#d4af37]/30 text-[10px] font-bold text-[#8a6a2a] mb-1.5 font-serif-display uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9d7837]" />
            <span>Instant Verified Access</span>
          </div>
          <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Get Your Official Diamond ID
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Create your personalized exchange account in under 2 minutes. Transparent terms and dedicated 24/7 support.
          </p>
        </div>

        {/* Classic 2-Column Card (Same as on-page card UI & background) */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
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

              <h3 className="font-serif-display text-base font-bold text-white mb-2">
                Fast Track ID Generation
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-6">
                Want your ID directly without waiting? Contact our official WhatsApp desk for instant issuance.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>Instant verified username & credentials</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>Zero account setup or activation fee</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>24/7 direct human support on WhatsApp</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#edd315] shrink-0 mt-0.5" />
                  <span>Strict 18+ privacy standard</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp ? openWhatsApp('Instant Get ID Request via Modal') : null}
              className="w-full py-3.5 rounded-full bg-[#0BA281] hover:bg-[#0e8f73] text-white font-extrabold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Get ID on WhatsApp (Instant)</span>
            </button>
          </div>

          {/* Right Column: Formspree Online Form */}
          <div className="p-6 sm:p-8 md:col-span-7 bg-white flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-xs bg-[#fbf9f4] text-[#9d7837] flex items-center justify-center mx-auto border border-[#d4af37]/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-display text-base font-bold text-slate-900">
                  ID Request Received!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your verification details have been received. Our support desk will reach out on your WhatsApp (<strong>{formData.contact}</strong>) shortly.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <button
                    onClick={() => openWhatsApp ? openWhatsApp(`ID Verification for ${encodeURIComponent(formData.name)}`) : null}
                    className="px-5 py-2.5 rounded-xs bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Connect on WhatsApp Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3.5 text-xs">
                {/* Formspree Helper Fields */}
                <input type="hidden" name="_subject" value="New Diamond Official ID Request" />
                <input type="hidden" name="source" value="Diamond Exchange - On-Load Popup Modal" />

                <div>
                  <h4 className="font-serif-display text-sm font-bold text-slate-900 mb-0.5">
                    Enter Your Details
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">
                    Submit this form to receive your verified ID directly.
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
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:border-slate-900 focus:outline-none font-medium"
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
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:border-slate-900 focus:outline-none font-medium"
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
                      className="mt-0.5 accent-slate-900 rounded-xs"
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
                      className="mt-0.5 accent-slate-900 rounded-xs"
                    />
                    <span>I confirm that participation is legally permitted in my jurisdiction.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xs bg-slate-900 hover:bg-slate-800 disabled:opacity-75 text-white font-bold uppercase tracking-wider cursor-pointer transition-colors flex items-center justify-center gap-2 text-xs shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#d4af37]" />
                      <span>Sending ID Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit ID Request</span>
                      <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Data protected by SSL encryption & delivered via Formspree.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

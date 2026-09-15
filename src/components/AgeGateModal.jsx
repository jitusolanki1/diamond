import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function AgeGateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [exited, setExited] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('diamond_age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('diamond_age_verified', 'true');
    setIsOpen(false);
  };

  const handleExit = () => {
    setExited(true);
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-[#0b0e16] border-2 border-[#00d2ff]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
        
        {/* Diamond 18+ Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/30 flex items-center justify-center mx-auto text-[#00d2ff]">
          <span className="text-2xl font-black font-mono">18+</span>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-white font-mono tracking-tight mb-2">
            Age & Legal Eligibility Verification
          </h2>
          <p className="text-sm font-semibold text-slate-300">
            Are you 18 years of age or older and legally eligible to access online sports and gaming interfaces?
          </p>
        </div>

        {/* Regulatory & Risk Box */}
        <div className="p-4 rounded-xl bg-[#141a26] border border-white/10 text-xs text-slate-400 space-y-2 text-left">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
            <p>
              Age and legal eligibility requirements vary by jurisdiction. Please participate only where permitted by law. 
              Betting and gaming involve financial risk; outcomes are not guaranteed.
            </p>
          </div>
        </div>

        {exited ? (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            Access is restricted to individuals of legal majority age (18+). Redirecting safely...
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={handleConfirm}
              className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold tracking-wider text-[#07090e] bg-[#00d2ff] hover:bg-[#33d9ff] transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,210,255,0.35)]"
            >
              YES, I AM 18+ & ELIGIBLE
            </button>
            <button
              onClick={handleExit}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-400 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              NO, EXIT
            </button>
          </div>
        )}

        <p className="text-[10px] text-slate-500">
          This verification does not replace mandatory jurisdiction compliance and account identity checks.
        </p>

      </div>
    </div>
  );
}

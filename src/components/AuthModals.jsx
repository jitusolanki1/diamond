import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, User } from 'lucide-react';

export default function AuthModals({ mode = 'register', onClose, openWhatsApp }) {
  const [currentMode, setCurrentMode] = useState(mode);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    ageConfirmed: false,
    jurisdictionConfirmed: false,
    diamondId: '',
    password: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentMode === 'register' && (!formData.ageConfirmed || !formData.jurisdictionConfirmed)) {
      alert('Please confirm that you are 18+ and legally permitted to participate.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              {currentMode === 'register' ? <User className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            </div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              {currentMode === 'register' ? 'Request Diamond ID' : 'Account Login'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-4 space-y-3 text-xs">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              {currentMode === 'register' ? 'ID Request Submitted' : 'Login Verified'}
            </h4>
            <p className="text-slate-600 leading-relaxed font-normal">
              {currentMode === 'register'
                ? 'Our customer desk will instantly reach out on WhatsApp to issue your verified credentials.'
                : 'Redirecting to your secure account dashboard.'}
            </p>
            <button
              onClick={() => {
                onClose();
                if (currentMode === 'register') openWhatsApp('ID Verification');
              }}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer transition-all shadow-sm shadow-indigo-200"
            >
              Continue to WhatsApp Desk
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            {/* Mode toggle */}
            <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 mb-4">
              <button
                type="button"
                onClick={() => setCurrentMode('register')}
                className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentMode === 'register' 
                    ? 'bg-white text-indigo-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Request ID
              </button>
              <button
                type="button"
                onClick={() => setCurrentMode('login')}
                className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currentMode === 'login' 
                    ? 'bg-white text-indigo-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Login
              </button>
            </div>

            {currentMode === 'register' ? (
              <>
                <div>
                  <label className="text-slate-700 font-bold block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none shadow-2xs font-medium"
                  />
                </div>

                <div>
                  <label className="text-slate-700 font-bold block mb-1">WhatsApp Mobile Number</label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="+91 / Mobile number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none shadow-2xs font-medium"
                  />
                </div>

                <div className="space-y-2 pt-1 text-[11px] text-slate-600">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.ageConfirmed}
                      onChange={(e) => setFormData({ ...formData, ageConfirmed: e.target.checked })}
                      className="mt-0.5 accent-indigo-600 rounded"
                    />
                    <span>I confirm I am 18 years of age or older.</span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.jurisdictionConfirmed}
                      onChange={(e) => setFormData({ ...formData, jurisdictionConfirmed: e.target.checked })}
                      className="mt-0.5 accent-indigo-600 rounded"
                    />
                    <span>I confirm participation is permitted in my jurisdiction.</span>
                  </label>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-slate-700 font-bold block mb-1">Diamond Exchange ID</label>
                  <input
                    type="text"
                    required
                    value={formData.diamondId}
                    onChange={(e) => setFormData({ ...formData, diamondId: e.target.value })}
                    placeholder="e.g. DIA-12345"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none font-mono text-xs font-bold shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-slate-700 font-bold block mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:border-indigo-600 focus:outline-none shadow-2xs font-medium"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => openWhatsApp('Forgot Password')}
                    className="text-[11px] text-indigo-600 font-semibold hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer transition-all shadow-sm shadow-indigo-200 mt-2"
            >
              {currentMode === 'register' ? 'Submit ID Request' : 'Login to Account'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

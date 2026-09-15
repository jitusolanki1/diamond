import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ onOpenWhatsApp }) {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={() => onOpenWhatsApp('Floating WhatsApp Button')}
        aria-label="WhatsApp Support Desk"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20b557] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer text-xs font-bold tracking-wider uppercase border border-white/20 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="w-5 h-5 text-white fill-white" />
        <span className="font-extrabold">Get ID on WhatsApp</span>
        <span className="w-2 h-2 rounded-full bg-white inline-block animate-ping" />
      </button>
    </div>
  );
}

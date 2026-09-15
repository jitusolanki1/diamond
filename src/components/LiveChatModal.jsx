import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Headphones, 
  MessageCircle, 
  ShieldCheck, 
  Check, 
  CheckCheck,
  Bot
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/siteData';

export default function LiveChatModal({ onClose, openWhatsApp }) {
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: 'Hello! Welcome to Diamond Exchange Customer Care. How can we assist with your sports markets, account ID, or rules today?',
      time: 'Just now',
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    "How do I get a new ID?",
    "What is the minimum deposit?",
    "How does Back & Lay work?",
    "Are winnings guaranteed?",
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      text: text,
      time: 'Just now',
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Automated knowledgeable response
    setTimeout(() => {
      let reply = "Thank you for reaching out. Our verification desk is active. You can connect directly on our verified WhatsApp desk for immediate action.";
      const lower = text.toLowerCase();

      if (lower.includes('id') || lower.includes('register')) {
        reply = "To receive an official Diamond Exchange ID, click 'GET STARTED' or message our WhatsApp desk. You will need to confirm you are 18+ and residing in a permissible legal jurisdiction.";
      } else if (lower.includes('deposit') || lower.includes('withdrawal')) {
        reply = "Deposits and withdrawals are processed back to the verified payment method registered under your personal name. There are zero hidden platform commissions.";
      } else if (lower.includes('guarantee') || lower.includes('win') || lower.includes('profit')) {
        reply = "Important notice: Gaming and sports exchange markets involve financial risk. Outcomes are uncertain and winnings are never guaranteed. Always bet within personal limits.";
      } else if (lower.includes('back') || lower.includes('lay')) {
        reply = "Backing means betting on an event to occur. Laying means betting against it (offering the odds). Our exchange offers true peer-to-peer liquidity.";
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'agent',
          text: reply,
          time: 'Just now',
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:right-8 z-50 w-full max-w-sm">
      <div className="bg-[#043649] border border-[#085a78] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
        
        {/* Chat Header */}
        <div className="bg-[#05435A] border-b border-[#085a78] p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#032b3a] border border-[#085a78] flex items-center justify-center text-[#edd315]">
                <Headphones className="w-4 h-4" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -bottom-0.5 -right-0.5 border-2 border-[#05435A]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-serif-display">Diamond Care Desk</h4>
              <p className="text-[10px] text-slate-300">Live Specialist • 24/7 Active</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-[#043649]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl p-3 ${
                  msg.sender === 'user'
                    ? 'bg-[#0BA281] text-white font-medium rounded-br-none shadow-xs'
                    : 'bg-[#05435A] text-slate-100 border border-[#085a78] rounded-bl-none shadow-xs'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                <div className={`text-[9px] mt-1 flex items-center justify-end gap-1 ${
                  msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-300'
                }`}>
                  <span>{msg.time}</span>
                  {msg.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="p-2 border-t border-[#085a78] bg-[#032b3a] flex gap-1.5 overflow-x-auto no-scrollbar">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 rounded-lg bg-white/10 text-[10px] text-slate-200 hover:text-[#edd315] hover:bg-white/15 shrink-0 transition-colors cursor-pointer"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#05435A] border-t border-[#085a78] flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your question..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-3 py-2 rounded-xl bg-[#032b3a] border border-[#085a78] text-xs text-white placeholder-slate-400 focus:border-[#edd315] focus:outline-none"
          />
          <button
            onClick={() => handleSend()}
            className="p-2 rounded-xl bg-[#0BA281] text-white hover:bg-[#0e8f73] transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Escalate to WhatsApp footer */}
        <div className="p-2 bg-[#032b3a] border-t border-[#085a78] text-center">
          <button
            onClick={() => openWhatsApp('Live Chat Escalation')}
            className="text-[11px] text-[#edd315] font-semibold hover:text-white inline-flex items-center gap-1 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Switch to Official WhatsApp Desk</span>
          </button>
        </div>

      </div>
    </div>
  );
}

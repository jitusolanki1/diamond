import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/siteData';

export default function Navbar({
  activeSection,
  setActiveSection,
  openLegalModal,
  openWhatsApp,
  onGetId
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Sports', id: 'sports' },
    { label: 'Live Games', id: 'games' },
    { label: 'Get ID', id: 'get-id' },
    { label: 'Offers', id: 'offers' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Responsible Gaming', id: 'responsible-gaming' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Support', id: 'support' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGetIdClick = () => {
    setMobileMenuOpen(false);
    if (onGetId) {
      onGetId('Navbar Get ID');
    } else if (openWhatsApp) {
      openWhatsApp('Navbar Get ID');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#05435A] backdrop-blur-md border-b border-[#085a78] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Diamond Exchange Official Logo */}
        <div
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <img
            src={BRAND_CONFIG.logoUrl || "https://diamondexchofficial.com/wp-content/uploads/2024/02/Logo.webp"}
            alt="Diamond Exchange Logo"
            className="h-12 sm:h-12 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-white/90">
          {navLinks.slice(0, 6).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`transition-colors hover:text-[#edd315] cursor-pointer ${activeSection === link.id ? 'text-[#edd315] font-bold border-b-2 border-[#edd315] pb-0.5' : ''
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => openWhatsApp('General Support')}
            className="px-3.5 py-1.5 rounded-sm text-xs font-medium text-white bg-[#043649] hover:bg-[#032b3a] border border-[#085a78] cursor-pointer flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#edd315]" />
            <span>24/7 Support</span>
          </button>

          <button
            onClick={handleGetIdClick}
            className="px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#0BA281] hover:bg-[#0e8f73] border border-[#0BA281] cursor-pointer shadow-md hover:shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
          >
            Get ID
          </button>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleGetIdClick}
            className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0BA281] shadow-xs"
          >
            Get ID
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-sm text-white hover:bg-[#043649] cursor-pointer border border-[#085a78]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

      </div>

      {/* Simple Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#043649] border-b border-[#085a78] px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-3 py-2 rounded-sm text-xs font-medium block transition-colors ${activeSection === link.id
                ? 'bg-[#05435A] text-[#edd315] font-bold border border-[#edd315]/40'
                : 'text-white/90 hover:bg-[#05435A]'
                }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#085a78] flex gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); openWhatsApp('Mobile Menu Help'); }}
              className="flex-1 py-2 text-center text-xs font-medium text-white bg-[#032b3a] border border-[#085a78] rounded-sm flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#edd315]" />
              <span>Support</span>
            </button>
            <button
              onClick={handleGetIdClick}
              className="flex-1 py-2 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#0BA281] hover:bg-[#0e8f73] rounded-full"
            >
              Get ID on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OddsTicker from './components/OddsTicker';
import GlobalExchangeBanner from './components/GlobalExchangeBanner';
import SportsSection from './components/SportsSection';
import GamesSection from './components/GamesSection';
import GetIdSection from './components/GetIdSection';
import HowItWorks from './components/HowItWorks';
import OffersSection from './components/OffersSection';
import TrustSection from './components/TrustSection';
import ResponsibleGamingSection from './components/ResponsibleGamingSection';
import FAQSection from './components/FAQSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

import LegalModal from './components/LegalModal';
import GetIdModal from './components/GetIdModal';
import WhatsAppButton from './components/WhatsAppButton';

import { useScrollReveal } from './hooks/useScrollReveal';
import { BRAND_CONFIG } from './data/siteData';

export default function App() {
  // Activate simple scroll reveal
  useScrollReveal();

  const [activeSection, setActiveSection] = useState('hero');
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: 'terms' });
  const [isGetIdModalOpen, setIsGetIdModalOpen] = useState(false);

  const openLegalModal = (tab = 'terms') => {
    setLegalModal({ isOpen: true, tab });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, tab: 'terms' });
  };

  const handleWhatsAppClick = (context = 'Get ID') => {
    const cleanNumber = BRAND_CONFIG.whatsappNumber ? BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '') : '639701138907';
    const message = encodeURIComponent('Hi, I want to get my Diamond Exchange ID 🆔');
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
  };

  const handleOpenGetId = (context = 'Get Diamond ID') => {
    handleWhatsAppClick(context);
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">

      {/* Classic Clean Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        openLegalModal={openLegalModal}
        openWhatsApp={handleWhatsAppClick}
        onGetId={handleOpenGetId}
      />

      {/* Classic Hero */}
      <Hero
        onGetId={handleOpenGetId}
        openWhatsApp={handleWhatsAppClick}
        scrollTo={scrollTo}
      />

      {/* Simple Odds Ribbon */}
      <OddsTicker
        onSelectMatch={() => scrollTo('sports')}
      />

      {/* Global In-Play Exchange & Rotating 3D Globe Showcase */}
      <GlobalExchangeBanner
        onGetId={handleOpenGetId}
      />

      {/* Sports Markets (Real images, emojis, smooth working carousel) */}
      <SportsSection
        onGetId={handleOpenGetId}
      />

      {/* Casino & Live Games (Real HD images, emojis, smooth working carousel) */}
      <GamesSection
        onGetId={handleOpenGetId}
      />

      {/* Dedicated On-Page Get ID Section */}
      <GetIdSection
        openWhatsApp={handleWhatsAppClick}
      />

      {/* Simple How It Works */}
      <HowItWorks
        onGetId={handleOpenGetId}
        openWhatsApp={handleWhatsAppClick}
      />

      {/* Offers & Simple Calculator */}
      <OffersSection
        onGetId={handleOpenGetId}
      />

      {/* Verifiable Platform Standards */}
      <TrustSection />

      {/* Responsible Gaming & Risk Notice */}
      <ResponsibleGamingSection
        openWhatsApp={handleWhatsAppClick}
      />

      {/* FAQ Hub */}
      <FAQSection
        openWhatsApp={handleWhatsAppClick}
      />

      {/* Dedicated Support */}
      <SupportSection
        openWhatsApp={handleWhatsAppClick}
      />

      {/* Footer */}
      <Footer
        scrollTo={scrollTo}
        openLegalModal={openLegalModal}
        openWhatsApp={handleWhatsAppClick}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton
        onOpenWhatsApp={handleWhatsAppClick}
      />

      {/* On-Load & On-Demand Get Your Official Diamond ID Modal Popup */}
      {isGetIdModalOpen && (
        <GetIdModal
          onClose={() => setIsGetIdModalOpen(false)}
          openWhatsApp={handleWhatsAppClick}
        />
      )}

      {/* Terms & Legal Modal */}
      {legalModal.isOpen && (
        <LegalModal
          activeTab={legalModal.tab}
          onClose={closeLegalModal}
        />
      )}

    </div>
  );
}

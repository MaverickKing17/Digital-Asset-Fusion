import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Transparency } from './components/Transparency';
import { ValueCards } from './components/ValueCards';
import { Pricing } from './components/Pricing';
import { FinalForm } from './components/FinalForm';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Check if script is already loaded to prevent duplicates (fixes t.$_Tawk.i18next error)
    if (document.getElementById('tawk-widget-script')) {
      return;
    }

    // Initialize Tawk global variables before script loads
    // @ts-ignore
    window.Tawk_API = window.Tawk_API || {};
    // @ts-ignore
    window.Tawk_LoadStart = new Date();

    // Safely load Tawk.to script
    const script = document.createElement("script");
    script.id = 'tawk-widget-script'; // Unique ID for check above
    script.async = true;
    script.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Tawk widget persists across re-renders, so we generally don't remove it 
      // to avoid losing chat state during navigation.
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-navy">
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        <Transparency />
        <ValueCards />
        <Pricing />
        <FinalForm />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
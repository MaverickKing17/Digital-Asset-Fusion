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
    // Safely load Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary, though Tawk usually persists
      // document.body.removeChild(script); 
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
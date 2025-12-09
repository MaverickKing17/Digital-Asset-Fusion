import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TechHub } from './components/TechHub';
import { BlueprintHub } from './components/BlueprintHub';
import { Transparency } from './components/Transparency';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById('tawk-widget-script')) {
      return;
    }

    // Initialize Tawk global variables
    // @ts-ignore
    window.Tawk_API = window.Tawk_API || {};
    // @ts-ignore
    window.Tawk_LoadStart = new Date();

    // Safely load Tawk.to script
    const script = document.createElement("script");
    script.id = 'tawk-widget-script';
    script.async = true;
    script.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-navy bg-white">
      <Navigation onOpenModal={openModal} />
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        <TechHub />
        <BlueprintHub />
        <Transparency />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
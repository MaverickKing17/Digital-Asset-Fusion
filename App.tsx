import React, { useState } from 'react';
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
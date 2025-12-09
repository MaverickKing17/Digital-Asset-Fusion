import React from 'react';
import { Button } from './Button';
import { ArrowRight, Cpu, Box, Glasses } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="marketplace" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background - Platform/Architecture Aesthetic */}
      <div className="absolute inset-0 z-0 animate-subtle-zoom">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Architecture Platform Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1.1] drop-shadow-lg">
              The Classic Homes<br/>
              <span className="text-brand-gold italic">Marketplace</span>
            </h1>

            <div className="border-l-4 border-brand-gold pl-6 py-1">
                <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-2">
                  Verified Provenance. Digital Certainty. <span className="text-brand-eco font-medium">Sustainable Integrity.</span>
                </h2>
                <p className="text-gray-300 font-light leading-relaxed max-w-2xl">
                  The enterprise B2B procurement platform fusing classical quality with AI matchmaking, Web3 tokenization, and 2026-ready immersive visualization.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button onClick={onOpenModal} className="min-w-[280px] group flex items-center justify-center gap-2">
                Request Beta Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center text-white/80 font-sans text-sm">
                <span className="block border-l border-white/20 pl-6 h-full flex items-center">
                  Reduce Sourcing Time by 60%
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tech Stack Badge Footer */}
      <div className="relative z-20 bg-brand-navy/90 backdrop-blur-md border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider">
            <span className="text-brand-gold font-semibold">Powered by</span>
            <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-gold" />
                AI Procurement Matchmaking
              </div>
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-brand-gold" />
                Web3 Tokenization
              </div>
              <div className="flex items-center gap-2">
                <Glasses className="w-4 h-4 text-brand-gold" />
                AR/VR Visualizer (Beta 2026)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
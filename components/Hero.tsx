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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=2070&auto=format&fit=crop" 
          alt="Luxury Architecture Platform Background" 
          className="w-full h-full object-cover"
        />
        {/* Removed mix-blend-multiply for sharpness. Added very subtle tint for cohesion. */}
        <div className="absolute inset-0 bg-brand-navy/10"></div>
        {/* Adjusted gradient: Stronger on left for text, completely clear on right for image clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] drop-shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              The Classic Homes<br/>
              <span className="text-brand-gold italic">Marketplace</span>
            </h1>

            <div className="border-l-4 border-brand-gold pl-6 py-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl md:text-2xl text-white font-semibold tracking-wide mb-3">
                  Verified Provenance. Digital Certainty. <span className="text-white font-bold">Sustainable Integrity.</span>
                </h2>
                <p className="text-white font-medium text-lg leading-relaxed max-w-2xl drop-shadow-md">
                  The enterprise B2B procurement platform fusing classical quality with AI matchmaking, Web3 tokenization, and 2026-ready immersive visualization.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button onClick={onOpenModal} className="min-w-[280px] group flex items-center justify-center gap-2 font-bold">
                Request Beta Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center text-white font-sans text-sm drop-shadow-sm">
                <span className="block border-l-2 border-white/40 pl-6 h-full flex items-center font-bold tracking-wide">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-200 font-mono uppercase tracking-wider font-bold">
            <span className="text-brand-gold font-extrabold">Powered by</span>
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
import React from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Luxury Interior Architecture" 
          className="w-full h-full object-cover"
        />
        {/* Deep Navy Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-navy/70 mix-blend-multiply"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-sm shadow-xl">
             <Logo />
        </div>
        <div className="hidden md:block text-brand-gold font-serif italic text-lg">
            Est. 2005
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-brand-gold pl-4">
                <p className="text-brand-gold font-sans text-sm uppercase tracking-[0.2em] font-semibold mb-2">
                    Premium Digital Asset Sale
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight">
                    ClassicHomes<br />
                    <span className="text-brand-gold">Remodeling.com</span>
                </h1>
            </div>
            
            <p className="text-gray-200 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                Acquire the definitive digital authority in high-end residential renovation. 
                A 19-year-old domain asset engineered for the sophisticated B2B professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start sm:items-center">
                <Button onClick={onOpenModal} className="min-w-[300px]">
                    Request Private Offering<br/>Memorandum & Valuation
                </Button>
                <div className="text-white/80 font-serif italic">
                    <span className="block text-sm">Asking Price Anchor</span>
                    <span className="text-2xl text-brand-gold">$40,000</span>
                </div>
            </div>
          </div>

          {/* Right side visual element - Abstract/Technical representation */}
          <div className="hidden lg:flex justify-end items-center">
             <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm max-w-md w-full">
                <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                    <span className="text-white/60 text-xs uppercase tracking-widest">Asset ID</span>
                    <span className="text-brand-gold font-mono">CHR-2005-V4</span>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-white font-serif">Domain Age</span>
                        <span className="text-white/90 font-mono">19 Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-white font-serif">Market Segment</span>
                        <span className="text-white/90 font-mono">Luxury B2B</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-white font-serif">Transfer Type</span>
                        <span className="text-white/90 font-mono">Immediate / Escrow</span>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
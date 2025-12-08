import React from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-e32c215962d1?q=80&w=2600&auto=format&fit=crop" 
          alt="Luxury Modern Home with Pool" 
          className="w-full h-full object-cover"
        />
        {/* High Contrast Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 z-20 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center left-0 right-0 ml-auto mr-auto">
        <div className="bg-white/95 backdrop-blur-sm p-3 px-6 rounded-sm shadow-xl">
             <Logo />
        </div>
        <div className="hidden md:block text-brand-gold font-serif italic text-lg tracking-wide">
            Est. 2005
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-brand-gold pl-6">
                <p className="text-brand-gold font-sans text-sm uppercase tracking-[0.25em] font-semibold mb-4">
                    Premium Digital Asset Sale
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1]">
                    ClassicHomes<br />
                    <span className="text-brand-gold">Remodeling.com</span>
                </h1>
            </div>
            
            <p className="text-white text-xl md:text-2xl font-light max-w-xl leading-relaxed tracking-wide drop-shadow-sm">
                Acquire the definitive digital authority in high-end residential renovation. 
                A 19-year-old domain asset engineered for the sophisticated B2B professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-6 items-start sm:items-center">
                <Button onClick={onOpenModal} className="min-w-[300px] shadow-brand-gold/20 shadow-2xl">
                    Request Private Offering<br/>Memorandum & Valuation
                </Button>
                <div className="text-white/90 font-serif italic border-l border-white/20 pl-6">
                    <span className="block text-sm font-sans uppercase tracking-wider opacity-80 mb-1">Asking Price Anchor</span>
                    <span className="text-3xl text-brand-gold">$40,000</span>
                </div>
            </div>
          </div>

          {/* Right side visual element - Abstract/Technical representation */}
          <div className="hidden lg:flex justify-end items-center">
             <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm max-w-md w-full shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                    <span className="text-white/80 text-xs uppercase tracking-widest font-semibold">Asset ID</span>
                    <span className="text-brand-gold font-mono tracking-wider">CHR-2005-V4</span>
                </div>
                <div className="space-y-5">
                    <div className="flex justify-between items-center group">
                        <span className="text-white font-serif text-lg">Domain Age</span>
                        <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">19 Years</span>
                    </div>
                    <div className="flex justify-between items-center group">
                        <span className="text-white font-serif text-lg">Market Segment</span>
                        <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">Luxury B2B</span>
                    </div>
                    <div className="flex justify-between items-center group">
                        <span className="text-white font-serif text-lg">Transfer Type</span>
                        <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">Immediate</span>
                    </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="uppercase tracking-wider text-xs">Verified Available</span>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
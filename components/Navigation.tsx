import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo light={true} className="transform scale-90" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-brand-gold font-sans text-sm font-medium tracking-wide transition-colors">Marketplace</a>
          <a href="#" className="text-white hover:text-brand-gold font-sans text-sm font-medium tracking-wide transition-colors">Technology</a>
          <a href="#" className="text-white hover:text-brand-gold font-sans text-sm font-medium tracking-wide transition-colors">Insights</a>
          <a href="#" className="text-white hover:text-brand-gold font-sans text-sm font-medium tracking-wide transition-colors">Contact</a>
          <Button variant="gold" onClick={onOpenModal} className="py-2 px-6 text-xs shadow-none hover:shadow-lg">
            Request Beta Access
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          <a href="#" className="text-white text-lg font-serif">Marketplace</a>
          <a href="#" className="text-white text-lg font-serif">Technology</a>
          <a href="#" className="text-white text-lg font-serif">Insights</a>
          <a href="#" className="text-white text-lg font-serif">Contact</a>
          <Button variant="gold" onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }} fullWidth>
            Request Beta Access
          </Button>
        </div>
      )}
    </nav>
  );
};
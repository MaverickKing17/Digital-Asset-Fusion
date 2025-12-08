import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="opacity-80 grayscale brightness-200">
            <Logo />
        </div>
        
        <div className="text-xs text-gray-400 font-light text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} ClassicHomesRemodeling.com Asset Sale.</p>
            <p className="mt-1">All Rights Reserved. Managed by Domain Brokerage Services.</p>
        </div>
      </div>
    </footer>
  );
};
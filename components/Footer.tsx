import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="opacity-90">
            <Logo light={true} />
        </div>
        
        <div className="text-xs text-gray-400 font-light text-center md:text-right space-y-2">
            <p>&copy; {new Date().getFullYear()} ClassicHomesRemodeling.com Asset Sale.</p>
            <p>All Rights Reserved. Managed by Domain Brokerage Services.</p>
        </div>
      </div>
    </footer>
  );
};
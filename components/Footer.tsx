import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-6">
            <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                <Logo light={true} />
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                    <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
                    <Twitter size={20} strokeWidth={1.5} />
                </a>
                <a href="mailto:contact@classichomesremodeling.com" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 transition-all duration-300" aria-label="Email">
                    <Mail size={20} strokeWidth={1.5} />
                </a>
            </div>
        </div>
        
        <div className="text-xs text-gray-400 font-light text-center md:text-right space-y-2 cursor-default">
            <p className="hover:text-white transition-colors duration-300">
                &copy; {new Date().getFullYear()} ClassicHomesRemodeling.com Asset Sale.
            </p>
            <p className="hover:text-white transition-colors duration-300">
                All Rights Reserved. Managed by Domain Brokerage Services.
            </p>
        </div>
      </div>
    </footer>
  );
};
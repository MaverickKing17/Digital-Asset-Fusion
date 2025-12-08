import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative flex items-center justify-center">
        {/* Logo Image from User Upload */}
        <img 
            src="/Classic.webp" 
            alt="Classic Homes Remodeling" 
            className="h-14 w-auto object-contain drop-shadow-md"
        />
    </div>
    <div className={`flex flex-col ${light ? 'text-white' : 'text-brand-navy'}`}>
        <span className="font-serif text-xl font-bold tracking-tight leading-none">
            ClassicHomes
        </span>
        <span className="font-sans text-[0.65rem] uppercase tracking-widest text-brand-gold">
            Remodeling.com
        </span>
    </div>
  </div>
);
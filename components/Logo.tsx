import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Golden Circle */}
        <div className="absolute inset-0 border-2 border-brand-gold rounded-full opacity-80"></div>
        {/* Classical Column Icon */}
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-7 h-7 text-brand-navy relative z-10"
        >
            <path d="M2 22h20" />
            <path d="M6 22V10" />
            <path d="M18 22V10" />
            <path d="M4 10h16" />
            <path d="M12 2L2 10" />
            <path d="M22 10L12 2" />
            <path d="M10 22v-4a2 2 0 0 1 4 0v4" />
        </svg>
    </div>
    <div className="flex flex-col">
        <span className="font-serif text-xl font-bold tracking-tight text-brand-navy leading-none">
            ClassicHomes
        </span>
        <span className="font-sans text-[0.65rem] uppercase tracking-widest text-brand-gold">
            Remodeling.com
        </span>
    </div>
  </div>
);
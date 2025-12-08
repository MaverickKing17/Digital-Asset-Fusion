import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  const [imgError, setImgError] = useState(false);
  
  // Colors based on theme for SVG fallback
  const primaryColor = light ? '#FFFFFF' : '#1A2A44'; // White or Navy
  const accentColor = '#D4AF37'; // Gold

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-16 h-16">
        {!imgError ? (
          <img 
            src="Classic.webp" 
            alt="Classic Homes Logo" 
            className="w-full h-full object-contain drop-shadow-sm"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Custom SVG Logo Fallback: Classical House with Columns + Gold Circle */
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
            {/* Gold Circle/Crescent behind */}
            <circle cx="50" cy="50" r="35" stroke={accentColor} strokeWidth="2" className="opacity-20" />
            <path d="M75 50C75 63.8071 63.8071 75 50 75" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
            
            {/* Classical House Structure */}
            {/* Pediment (Roof) */}
            <path d="M50 20L80 40H20L50 20Z" fill={primaryColor} stroke={primaryColor} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M50 25L70 38H30L50 25Z" fill={light ? "#1A2A44" : "#FFFFFF"} fillOpacity="0.2"/>
            
            {/* Columns */}
            <rect x="25" y="40" width="8" height="35" fill={primaryColor} />
            <rect x="25" y="38" width="8" height="2" fill={primaryColor} /> {/* Capital */}
            <rect x="24" y="75" width="10" height="2" fill={primaryColor} /> {/* Base */}
            
            <rect x="46" y="40" width="8" height="35" fill={primaryColor} />
            <rect x="46" y="38" width="8" height="2" fill={primaryColor} />
            <rect x="45" y="75" width="10" height="2" fill={primaryColor} />

            <rect x="67" y="40" width="8" height="35" fill={primaryColor} />
            <rect x="67" y="38" width="8" height="2" fill={primaryColor} />
            <rect x="66" y="75" width="10" height="2" fill={primaryColor} />
            
            {/* Floor */}
            <rect x="15" y="77" width="70" height="3" fill={accentColor} />
          </svg>
        )}
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
};
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'navy' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'gold', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-lg";
  
  const variants = {
    gold: "bg-brand-gold text-white hover:bg-[#c29f2f] hover:shadow-brand-gold/20",
    navy: "bg-brand-navy text-white hover:bg-[#253b5e] hover:shadow-brand-navy/30",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
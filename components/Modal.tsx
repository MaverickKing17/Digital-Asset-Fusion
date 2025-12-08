import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-md p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors"
        >
            <X size={24} />
        </button>

        <div className="mb-8 text-center">
            <h3 className="font-serif text-2xl text-brand-navy mb-2">Request Memorandum</h3>
            <p className="text-gray-600 text-sm">
                Enter your details to receive the private valuation document immediately.
            </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Request sent!"); onClose(); }}>
            <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Full Name</label>
                <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-200 py-2 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                    placeholder="John Doe"
                    required
                />
            </div>
            <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Professional Email</label>
                <input 
                    type="email" 
                    className="w-full border-b-2 border-gray-200 py-2 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                    placeholder="john@company.com"
                    required
                />
            </div>
            
            <Button fullWidth type="submit">
                Access Document
            </Button>
        </form>
      </div>
    </div>
  );
};
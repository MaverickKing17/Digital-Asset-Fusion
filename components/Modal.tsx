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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-lg p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors"
        >
            <X size={24} />
        </button>

        <div className="mb-8 text-center">
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Priority Access</span>
            <h3 className="font-serif text-3xl text-brand-navy mb-2 mt-2">Request Beta Access</h3>
            <p className="text-gray-600 text-sm">
                Join the exclusive cohort of Tier-1 architects and builders piloting the 2026 platform.
            </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Request sent! Our team will contact you shortly."); onClose(); }}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                </div>
            </div>

            <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Work Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                </div>
                <div>
                     <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Role</label>
                     <select className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm">
                        <option>Executive / C-Suite</option>
                        <option>Procurement Officer</option>
                        <option>Architect / Designer</option>
                        <option>Builder / Contractor</option>
                        <option>Other</option>
                     </select>
                </div>
            </div>

            <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Primary Interest</label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm">
                    <option>AI Procurement Matchmaking</option>
                    <option>Web3 Material Tokenization</option>
                    <option>AR/VR Visualization Tools</option>
                    <option>Platform Investment / M&A</option>
                </select>
            </div>
            
            <Button fullWidth type="submit" className="mt-2 py-4 text-sm">
                Submit Request
            </Button>
            
            <p className="text-center text-[10px] text-gray-400">
                By submitting, you agree to our Terms and Privacy Policy. All data is processed in accordance with GDPR and CCPA standards.
            </p>
        </form>
      </div>
    </div>
  );
};
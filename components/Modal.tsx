import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqardyzp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        // Reset after 3 seconds or keep success message visible
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-lg p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors z-10"
        >
            <X size={24} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in slide-in-from-bottom-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-3xl text-brand-navy mb-4">Request Received</h3>
            <p className="text-gray-600 mb-8 max-w-xs">
              Thank you for your interest in the Classic Homes Marketplace Beta Program. Our team will review your application and contact you shortly.
            </p>
            <Button onClick={onClose} variant="outline">Close Window</Button>
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
                <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Priority Access</span>
                <h3 className="font-serif text-3xl text-brand-navy mb-2 mt-2">Request Beta Access</h3>
                <p className="text-gray-600 text-sm">
                    Join the exclusive cohort of Tier-1 architects and builders piloting the 2026 platform.
                </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">First Name</label>
                        <input name="firstName" type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Last Name</label>
                        <input name="lastName" type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Work Email</label>
                    <input name="email" type="email" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Company Name</label>
                        <input name="company" type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm" required />
                    </div>
                    <div>
                         <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Role</label>
                         <select name="role" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm">
                            <option value="Executive / C-Suite">Executive / C-Suite</option>
                            <option value="Procurement Officer">Procurement Officer</option>
                            <option value="Architect / Designer">Architect / Designer</option>
                            <option value="Builder / Contractor">Builder / Contractor</option>
                            <option value="Other">Other</option>
                         </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Primary Interest</label>
                    <select name="interest" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold transition-colors rounded-sm">
                        <option value="AI Procurement Matchmaking">AI Procurement Matchmaking</option>
                        <option value="Web3 Material Tokenization">Web3 Material Tokenization</option>
                        <option value="AR/VR Visualization Tools">AR/VR Visualization Tools</option>
                        <option value="Platform Investment / M&A">Platform Investment / M&A</option>
                    </select>
                </div>
                
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 p-3 rounded-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}

                <Button fullWidth type="submit" disabled={status === "submitting"} className="mt-2 py-4 text-sm flex items-center justify-center gap-2">
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                </Button>
                
                <p className="text-center text-[10px] text-gray-400">
                    By submitting, you agree to our Terms and Privacy Policy. All data is processed in accordance with GDPR and CCPA standards.
                </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
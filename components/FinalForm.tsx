import React from 'react';
import { Button } from './Button';

export const FinalForm: React.FC = () => {
  return (
    <section className="relative py-24 min-h-[600px] flex items-center">
      {/* Background Image - Serious Financial Transaction Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=1" 
          alt="Executive Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/95"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Secure This Asset Today
            </h2>
            <p className="text-brand-gold text-lg font-light">
                Initiate the acquisition process for ClassicHomesRemodeling.com
            </p>
        </div>

        <form className="bg-white p-8 md:p-12 shadow-2xl rounded-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold" />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Company / Organization</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold" />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">Phone (Optional)</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold" />
                </div>
            </div>

            <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-brand-navy mb-2">How do you plan to use this asset?</label>
                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 p-3 text-brand-navy focus:outline-none focus:border-brand-gold"></textarea>
            </div>

            <Button fullWidth className="mt-4 text-lg py-5">
                Submit Acquisition Inquiry
            </Button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
                Your information is held in strict confidence. We do not share data with third parties.
            </p>
        </form>
      </div>
    </section>
  );
};
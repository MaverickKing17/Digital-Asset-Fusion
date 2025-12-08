import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section className="relative py-24 min-h-screen flex items-center">
      {/* Background Image: 'Private Banking' & 'Financial Trust' Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2600&auto=format&fit=crop" 
            alt="Luxury Dark Interior Aesthetic" 
            className="w-full h-full object-cover"
        />
        {/* Deep Navy Overlay: 80% opacity to ensure white text pops */}
        <div className="absolute inset-0 bg-brand-navy/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 drop-shadow-md">Final Payment Options</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto shadow-sm"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Option 1: Outright Acquisition */}
            <div className="bg-brand-navy/40 backdrop-blur-md border border-white/10 p-8 flex flex-col relative group hover:border-brand-gold/50 transition-all duration-300 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 group-hover:bg-brand-gold transition-colors"></div>
                <h3 className="font-serif text-2xl text-white mb-2">Option 1</h3>
                <h4 className="text-gray-300 font-medium mb-6">Outright Acquisition</h4>
                
                <div className="mb-8 border-b border-white/10 pb-8">
                    <span className="text-sm text-brand-gold uppercase tracking-wide font-semibold">Asking Price</span>
                    <div className="text-4xl font-serif text-white font-bold mt-2">$40,000 <span className="text-lg text-gray-400 font-sans font-normal">(OBO)</span></div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Immediate and Full Ownership Transfer</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Secure Escrow.com transfer</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Capital Asset: Consult CPA for 15-Year Amortization</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Full resale rights immediately</span>
                    </li>
                </ul>
                
                <Button variant="gold" fullWidth className="mt-auto shadow-brand-gold/20">Submit Your Offer</Button>
            </div>

            {/* Option 2: Broker-Assisted Installment */}
            <div className="bg-brand-navy/60 backdrop-blur-xl border border-brand-gold/60 p-8 flex flex-col relative transform lg:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10">
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 bg-brand-gold text-white text-xs font-bold px-4 py-1 uppercase tracking-wider rounded-sm shadow-lg">Recommended</div>
                <h3 className="font-serif text-2xl text-white mb-2">Option 2</h3>
                <h4 className="text-gray-200 font-medium mb-6">Broker-Assisted Installment</h4>
                
                <div className="mb-8 border-b border-white/10 pb-8">
                    <span className="text-sm text-brand-gold uppercase tracking-wide font-semibold">Initial Payment</span>
                    <div className="text-3xl font-serif text-white font-bold mt-2">$8,000</div>
                    <div className="text-sm text-gray-300 font-semibold mt-1">0% Financing</div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-sm font-semibold text-gray-300">12-Month</span>
                        <span className="text-brand-gold font-bold">$2,666.67/mo</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-sm font-semibold text-gray-300">24-Month</span>
                        <span className="text-brand-gold font-bold">$1,333.33/mo</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 p-3 -mx-3 rounded border border-brand-gold/30">
                        <span className="text-sm font-semibold text-white">36-Month (Best Value)</span>
                        <span className="text-brand-gold font-bold">$888.89/mo</span>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        Ownership transfer on completion
                    </p>
                </div>
                
                <Button variant="navy" className="border border-brand-gold/50 hover:bg-brand-navy hover:text-brand-gold hover:border-brand-gold" fullWidth>Secure Purchase Plan</Button>
            </div>

            {/* Option 3: Lease to Own */}
            <div className="bg-brand-navy/40 backdrop-blur-md border border-white/10 p-8 flex flex-col relative group hover:border-brand-gold/50 transition-all duration-300 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 group-hover:bg-brand-gold transition-colors"></div>
                <h3 className="font-serif text-2xl text-white mb-2">Option 3</h3>
                <h4 className="text-gray-300 font-medium mb-6">Lease to Own</h4>
                
                <div className="mb-8 border-b border-white/10 pb-8">
                    <span className="text-sm text-brand-gold uppercase tracking-wide font-semibold">Monthly Rate</span>
                    <div className="text-4xl font-serif text-white font-bold mt-2">$1,500<span className="text-lg text-gray-400">/mo</span></div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Defined Initial Lease Fee Required</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Payments apply to purchase</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Immediate domain usage</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Cancel anytime option</span>
                    </li>
                </ul>
                
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand-navy hover:border-white" fullWidth>Start Lease</Button>
            </div>
        </div>

        <div className="mt-12 p-6 bg-brand-navy/60 backdrop-blur-sm border-l-4 border-brand-gold/50 text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto rounded-r-sm">
            <p>
                "All purchase plans are subject to final contract and third-party escrow verification. 
                Monthly installment payments assume a 0% interest rate on the remaining principal balance of $32,000. 
                This is not a financing offer, and transfer of the domain is contingent upon final payment. 
                Consult your financial and tax advisor for asset treatment and amortization schedules."
            </p>
        </div>
      </div>
    </section>
  );
};

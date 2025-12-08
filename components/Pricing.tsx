import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">Final Payment Options</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Option 1: Outright Acquisition */}
            <div className="border border-gray-200 p-8 flex flex-col relative group hover:border-brand-gold transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy group-hover:bg-brand-gold transition-colors"></div>
                <h3 className="font-serif text-2xl text-brand-navy mb-2">Option 1</h3>
                <h4 className="text-gray-600 font-medium mb-6">Outright Acquisition</h4>
                
                <div className="mb-8">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Asking Price</span>
                    <div className="text-4xl font-serif text-brand-gold font-bold mt-1">$40,000 <span className="text-lg text-gray-400 font-sans font-normal">(OBO)</span></div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Immediate and Full Ownership Transfer</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Secure Escrow.com transfer</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Capital Asset: Consult CPA for 15-Year Amortization</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Full resale rights immediately</span>
                    </li>
                </ul>
                
                <Button variant="gold" fullWidth>Submit Your Offer</Button>
            </div>

            {/* Option 2: Broker-Assisted Installment */}
            <div className="border border-brand-gold/50 bg-brand-navy/5 p-8 flex flex-col relative transform lg:-translate-y-4 shadow-xl">
                 <div className="absolute top-0 center bg-brand-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider -mt-10">Recommended</div>
                <h3 className="font-serif text-2xl text-brand-navy mb-2">Option 2</h3>
                <h4 className="text-gray-600 font-medium mb-6">Broker-Assisted Installment</h4>
                
                <div className="mb-8">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Initial Payment</span>
                    <div className="text-3xl font-serif text-brand-gold font-bold mt-1">$8,000</div>
                    <div className="text-sm text-brand-navy font-semibold mt-1">0% Financing</div>
                </div>

                <div className="space-y-4 mb-8 flex-grow border-t border-b border-gray-200 py-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-brand-navy">12-Month</span>
                        <span className="text-brand-gold font-bold">$2,666.67/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-brand-navy">24-Month</span>
                        <span className="text-brand-gold font-bold">$1,333.33/mo</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 -mx-2 rounded border border-brand-gold/20">
                        <span className="text-sm font-semibold text-brand-navy">36-Month (Best Value)</span>
                        <span className="text-brand-gold font-bold">$888.89/mo</span>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="flex items-center gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        Ownership transfer on completion
                    </p>
                </div>
                
                <Button variant="navy" fullWidth>Secure Purchase Plan</Button>
            </div>

            {/* Option 3: Lease to Own */}
            <div className="border border-gray-200 p-8 flex flex-col relative group hover:border-brand-gold transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy group-hover:bg-brand-gold transition-colors"></div>
                <h3 className="font-serif text-2xl text-brand-navy mb-2">Option 3</h3>
                <h4 className="text-gray-600 font-medium mb-6">Lease to Own</h4>
                
                <div className="mb-8">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Monthly Rate</span>
                    <div className="text-4xl font-serif text-brand-gold font-bold mt-1">$1,500<span className="text-lg">/mo</span></div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Defined Initial Lease Fee Required</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Payments apply to purchase</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Immediate domain usage</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="text-brand-gold shrink-0 w-5 h-5" />
                        <span>Cancel anytime option</span>
                    </li>
                </ul>
                
                <Button variant="navy" fullWidth>Start Lease</Button>
            </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 border-l-4 border-gray-300 text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
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
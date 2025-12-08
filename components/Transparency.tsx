import React from 'react';
import { ShieldCheck, FileCheck } from 'lucide-react';

export const Transparency: React.FC = () => {
  return (
    <section className="bg-brand-white py-20 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-gray-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <ShieldCheck className="text-brand-gold w-8 h-8" />
                    <h2 className="text-2xl md:text-3xl font-serif text-brand-navy">
                        Full Transparency: Your SEO Asset Reset
                    </h2>
                </div>
                
                <h3 className="text-lg font-semibold text-brand-navy/80 mb-4 font-sans">
                    Immediate Trust: This 19-Year Asset Comes with a Clean Slate.
                </h3>
                
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    <p className="mb-6">
                        Due to changes in search engine algorithms over the past two decades, the
                        domain has accrued historical links that are now considered outdated. 
                    </p>
                    <p className="mb-8">
                        To ensure your immediate growth, we provide a <strong className="text-brand-navy font-semibold">Professionally Assembled Google Disavow File</strong> ready for upload upon transfer. Your team starts instantly with the full power of a 19-year-old name and zero historical SEO baggage.
                    </p>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-semibold bg-gray-50 p-4 rounded-sm inline-flex border border-gray-100">
                    <FileCheck className="w-5 h-5 text-brand-gold" />
                    <span>Verified Google Disavow File Included in Transfer</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
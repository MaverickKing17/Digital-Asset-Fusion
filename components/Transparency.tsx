import React from 'react';
import { ShieldCheck, FileCheck, Leaf } from 'lucide-react';

export const Transparency: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden bg-white border border-brand-gold/30 p-8 md:p-12 shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-shadow duration-500 rounded-sm">
            {/* Background Texture */}
            <div 
                className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
                style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
                    backgroundSize: '40px 40px'
                }}
            ></div>
            
            {/* Gold Accent Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-16 -mt-16 z-0"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-gold/10 rounded-full border border-brand-gold/20">
                        <ShieldCheck className="text-brand-gold w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-brand-navy">
                        Full Transparency: Your Zero-Liability Asset
                    </h2>
                </div>
                
                <h3 className="text-lg font-semibold text-brand-navy/90 mb-6 font-sans tracking-tight">
                    Immediate Trust: Validated Provenance & Sustainability Data.
                </h3>
                
                <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-8">
                    <p className="mb-4">
                        We prioritize absolute clarity in B2B transactions. Every asset on the Classic Homes Marketplace undergoes rigorous due diligence to ensure a seamless transfer of value.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-4 text-sm text-brand-navy bg-brand-gray/50 p-4 rounded-sm border border-gray-200">
                        <FileCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span><strong>SEO Clean Slate:</strong> Includes a professionally assembled Google Disavow File to neutralize historical links.</span>
                    </div>
                    <div className="flex items-start gap-4 text-sm text-brand-navy bg-brand-eco/5 p-4 rounded-sm border border-brand-eco/20">
                        <Leaf className="w-5 h-5 text-brand-eco flex-shrink-0 mt-0.5" />
                        <span><strong>Sustainability Assurance:</strong> All tokenized materials include embedded carbon footprint data, preparing for 2026's eco-focused regulations.</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
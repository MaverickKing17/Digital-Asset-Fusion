import React from 'react';
import { Cpu, Link, Glasses } from 'lucide-react';

export const TechHub: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4 font-semibold">Strategic Value: Technology that De-Risks Procurement</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: AI/ML */}
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-navy hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="text-brand-navy w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-brand-navy mb-3 font-bold">AI Procurement Matchmaking</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Ethically trained AI analyzes project blueprints and geo-data to instantly match architects with vetted materials and artisans, ensuring bias-free matching and aligning with 2026's agentic commerce trends.
            </p>
          </div>

          {/* Card 2: Web3/Sustainability */}
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-eco hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-eco text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              Eco-Verified
            </div>
            <div className="w-12 h-12 bg-brand-eco/10 rounded-lg flex items-center justify-center mb-6">
              <Link className="text-brand-eco w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-brand-navy mb-3 font-bold">Tokenized Material Provenance</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Blockchain ledger guarantees the source, authenticity, and legal provenance of high-end materials, enabling ESG compliance through traceable sustainable materials and supporting 2026's data collaborative initiatives.
            </p>
          </div>

          {/* Card 3: AR/VR */}
          <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-brand-gold hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
              <Glasses className="text-brand-gold w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-brand-navy mb-3 font-bold">AR/VR Client Visualizer</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Beta-Ready Tool for real-time, client-facing simulation of material selections and remodels, enhanced for 2026's immersive retail experiences.
            </p>
            <div className="mt-4 inline-block px-2 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold rounded">
              Beta 2026 Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Boxes, BrainCircuit, Coins, Globe, Search, ShoppingBag } from 'lucide-react';

const Card: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-0 bg-brand-gold group-hover:h-full transition-all duration-500"></div>
    <div className="mb-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
        {icon}
    </div>
    <h3 className="font-serif text-xl text-brand-navy mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export const ValueCards: React.FC = () => {
  const cards = [
    {
        icon: <Boxes size={32} />,
        title: "AI-Powered Visualizer",
        description: "Ready for AR/VR home remodeling simulation integration. The perfect namespace for next-gen visualization tools."
    },
    {
        icon: <BrainCircuit size={32} />,
        title: "Proprietary LLM Fine-Tuning",
        description: "Ideal data structure for training specialized Large Language Models on luxury renovation and architectural datasets."
    },
    {
        icon: <Coins size={32} />,
        title: "Tokenization of Subdomains",
        description: "Blockchain-ready structure allowing for secure, tokenized contractor verification subdomains (e.g., verify.classichomes...)."
    },
    {
        icon: <ShoppingBag size={32} />,
        title: "Classic Homes Marketplace",
        description: "Establish a unified B2B procurement platform for high-end materials, connecting artisans with architects."
    },
    {
        icon: <Globe size={32} />,
        title: "Global Brand Authority",
        description: "A category-defining .com that commands instant respect and trust across international markets."
    },
    {
        icon: <Search size={32} />,
        title: "Organic Search Dominance",
        description: "Capture high-intent traffic for 'Classic Homes' and 'Remodeling' keywords with a 19-year-old aged domain."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background Image for Texture */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Texture" 
            className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">
                Technical Requirements & Value Props
            </h2>
            <p className="text-brand-gold uppercase tracking-widest text-sm font-semibold">
                Web 3.0 Ready &bull; AI Optimized
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
                <Card key={idx} {...card} />
            ))}
        </div>
      </div>
    </section>
  );
};
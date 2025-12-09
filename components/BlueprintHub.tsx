import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';

export const BlueprintHub: React.FC = () => {
  const articles = [
    {
      category: "Finance & Blockchain",
      title: "The Financial Case for Tokenized Lumber",
      excerpt: "How automated provenance tracking reduces insurance premiums and increases asset liquidity in commercial construction.",
      readTime: "5 min read"
    },
    {
      category: "Compliance",
      title: "WCAG Compliance: A Legal Imperative in 2026",
      excerpt: "Why digital accessibility is no longer optional for Tier-1 construction firms and supplier portals.",
      readTime: "4 min read"
    },
    {
      category: "Future Tech",
      title: "2026 Outlook: AI-Agentic Supply Chains in Ultra-Luxury Construction",
      excerpt: "Preparing for the shift from human-procurement to autonomous agent negotiation protocols.",
      readTime: "7 min read"
    }
  ];

  return (
    <section id="insights" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-brand-gold font-mono uppercase tracking-widest text-sm mb-2 block font-extrabold">The Blueprint Hub</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-bold">
              Strategic Insights for <br/>Luxury Construction Leaders
            </h2>
          </div>
          <Button variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-bold">
            View All Research
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="bg-white/5 border border-white/10 p-8 h-full hover:bg-white/10 transition-colors duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-brand-gold uppercase tracking-wider font-bold">{article.category}</span>
                  <ArrowUpRight className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors font-bold">
                  {article.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-grow font-semibold">
                  {article.excerpt}
                </p>
                <span className="text-xs text-gray-400 font-mono font-bold">{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-white/10 pt-16">
          <h3 className="text-2xl font-serif text-white mb-6 font-semibold">Stay ahead of the 2026 market shift.</h3>
          <div className="flex justify-center">
             <Button variant="gold" className="min-w-[300px] font-bold">
               Subscribe for Executive Insights
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
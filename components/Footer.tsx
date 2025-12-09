import React, { useState } from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter, Mail, X } from 'lucide-react';

type PolicyKey = 
  | 'privacy' 
  | 'terms' 
  | 'cookies' 
  | 'accessibility' 
  | 'escrow' 
  | 'disclosures' 
  | 'dispute' 
  | 'disclaimer' 
  | 'dmca' 
  | 'tax'
  | 'sustainability';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  // Placeholder content for modals
  const policies: Record<PolicyKey, { title: string; content: React.ReactNode }> = {
    privacy: { 
        title: "Privacy Policy", 
        content: (
            <div className="space-y-4 text-gray-800">
                <p className="text-sm text-gray-500"><strong>Last Updated: January 15, 2026</strong></p>
                <p>At Classic Homes Marketplace, we are committed to maintaining the trust and confidence of our B2B partners, architects, and builders. This Privacy Policy explains how we collect, use, and protect your enterprise data.</p>
                
                <h4 className="font-bold text-brand-navy text-lg mt-6">1. Information Collection</h4>
                <p>We collect information necessary to facilitate AI-driven procurement matchmaking and provenance verification, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Corporate identity and officer verification details.</li>
                    <li>Project blueprints and material specifications (encrypted).</li>
                    <li>Transactional metadata for blockchain tokenization.</li>
                </ul>

                <h4 className="font-bold text-brand-navy text-lg mt-6">2. Data Usage & AI Processing</h4>
                <p>Your data is used exclusively for:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Training our proprietary matching algorithms (anonymized).</li>
                    <li>Verifying supply chain provenance via Web3 ledgers.</li>
                    <li>Facilitating secure escrow transactions.</li>
                </ul>
                <p className="italic text-sm mt-2">We do not sell raw proprietary data to third-party marketing firms.</p>

                <h4 className="font-bold text-brand-navy text-lg mt-6">3. Data Security</h4>
                <p>We utilize enterprise-grade encryption (AES-256) and immutable blockchain ledgers for audit trails of sensitive project data. Access is restricted to authorized procurement officers.</p>

                <h4 className="font-bold text-brand-navy text-lg mt-6">4. Contact Us</h4>
                <p>For privacy concerns or data deletion requests (GDPR/CCPA), please contact our Compliance Officer at privacy@classichomesremodeling.com.</p>
            </div>
        )
    },
    terms: { title: "Terms of Service", content: <p>Conditions of use for the marketplace...</p> },
    cookies: { title: "Cookie Policy", content: <p>Usage of analytics and functional cookies...</p> },
    accessibility: { title: "Accessibility Statement", content: <p>WCAG 2.1 Level AA compliance declaration...</p> },
    escrow: { title: "Escrow & Transfer", content: <p>Secure transaction protocols via Escrow.com...</p> },
    disclosures: { title: "Marketplace Disclosures", content: <p>Platform operational transparency...</p> },
    dispute: { title: "Dispute Resolution", content: <p>Arbitration and mediation procedures...</p> },
    disclaimer: { title: "Legal Disclaimer", content: <p>Limitation of liability and warranty...</p> },
    dmca: { title: "DMCA Policy", content: <p>Copyright infringement reporting...</p> },
    tax: { title: "Tax Guide", content: <p>General guidance on digital asset taxation...</p> },
    sustainability: { title: "Sustainability Policy", content: <p>Our commitment to 2026 ESG standards and carbon-neutral operations...</p> },
  };

  const openPolicy = (key: PolicyKey) => setActivePolicy(key);
  const closePolicy = () => setActivePolicy(null);

  return (
    <>
      <footer id="contact" className="bg-brand-navy text-white pt-20 pb-12 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
                <Logo light={true} />
                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                  The B2B procurement platform for the future of luxury construction.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-white transition-all duration-300">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-white transition-all duration-300">
                        <Twitter size={18} />
                    </a>
                    <a href="mailto:contact@classichomesremodeling.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-white transition-all duration-300">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
            
            {/* Links Columns */}
            <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-white font-bold mb-2">Platform</h4>
                    <button onClick={() => openPolicy('privacy')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Privacy Policy</button>
                    <button onClick={() => openPolicy('terms')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Terms of Service</button>
                    <button onClick={() => openPolicy('sustainability')} className="text-gray-200 text-left hover:text-brand-eco transition-colors font-medium">Sustainability Policy</button>
                    <button onClick={() => openPolicy('accessibility')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Accessibility</button>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-white font-bold mb-2">Legal & Trust</h4>
                    <button onClick={() => openPolicy('escrow')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Escrow</button>
                    <button onClick={() => openPolicy('disclosures')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Disclosures</button>
                    <button onClick={() => openPolicy('dmca')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">DMCA</button>
                    <button onClick={() => openPolicy('dispute')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Dispute Resolution</button>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-white font-bold mb-2">Resources</h4>
                    <button onClick={() => openPolicy('tax')} className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Tax Guide</button>
                    <a href="#" className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">Contact Support</a>
                    <a href="#" className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">LinkedIn</a>
                    <a href="#" className="text-gray-200 text-left hover:text-brand-gold transition-colors font-medium">X (Twitter)</a>
                </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-gray-300 font-medium">
             <div className="space-y-1">
                <p>&copy; 2026 Classic Homes Marketplace. All rights reserved.</p>
                <p>Aged domain authority since 2006.</p>
             </div>
             
             <p className="md:text-right max-w-md">
                Note on Branding: Updated for AI discoverability and sustainability focus, including 2026 tech projections.
             </p>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-navy/95 backdrop-blur-sm" onClick={closePolicy}></div>
          <div className="relative bg-white w-full max-w-2xl p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[80vh] overflow-y-auto">
            <button onClick={closePolicy} className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy"><X size={24} /></button>
            <h3 className="font-serif text-2xl text-brand-navy mb-4 font-bold">{policies[activePolicy].title}</h3>
            <div className="prose prose-sm text-gray-900 font-medium">{policies[activePolicy].content}</div>
          </div>
        </div>
      )}
    </>
  );
};
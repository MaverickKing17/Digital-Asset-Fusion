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
  | 'tax';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  const policies: Record<PolicyKey, { title: string; date?: string; content: React.ReactNode }> = {
    privacy: {
      title: "Privacy Policy",
      date: new Date().toLocaleDateString(),
      content: (
        <>
            <p><strong>1. Introduction</strong><br/>ClassicHomesRemodeling.com ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us during the domain acquisition inquiry process.</p>
            <p><strong>2. Information Collection</strong><br/>We collect only the information necessary to facilitate the sale and transfer of the digital asset. This includes your name, email address, company name, and intended use of the asset provided via our inquiry forms.</p>
            <p><strong>3. Use of Information</strong><br/>Your data is used strictly for the purpose of communicating regarding the valuation, negotiation, and transfer of the domain name. We do not sell, rent, or trade your information to third parties.</p>
            <p><strong>4. Data Security</strong><br/>We implement industry-standard security measures to protect your data. However, no transmission over the internet is completely secure.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Service",
      date: new Date().toLocaleDateString(),
      content: (
        <>
            <p><strong>1. Acceptance of Terms</strong><br/>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <p><strong>2. Asset Sale Disclaimer</strong><br/>This website represents the sale of a digital asset (domain name). All information provided regarding the value, metrics, or potential use of the domain is for informational purposes only.</p>
            <p><strong>3. Negotiation & Purchase</strong><br/>Submission of an inquiry or offer does not constitute a binding contract. A binding agreement is only formed upon the execution of a definitive Purchase and Sale Agreement.</p>
            <p><strong>4. Limitation of Liability</strong><br/>In no event shall the domain owners or brokers be liable for any damages arising out of the use or inability to use the materials on this site.</p>
        </>
      )
    },
    cookies: {
        title: "Cookie Policy",
        date: new Date().toLocaleDateString(),
        content: (
            <>
                <p><strong>1. Usage</strong><br/>We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
                <p><strong>2. Essential Cookies</strong><br/>We use essential cookies that are necessary for the website to function properly. These cannot be disabled.</p>
                <p><strong>3. Analytics</strong><br/>We may use third-party analytics tools (like Google Analytics) to help us understand how visitors engage with the site.</p>
            </>
        )
    },
    accessibility: {
        title: "Accessibility Statement",
        date: new Date().toLocaleDateString(),
        content: (
            <>
                <p><strong>Commitment</strong><br/>We are committed to ensuring that our website is accessible to people with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards.</p>
                <p><strong>Feedback</strong><br/>We welcome your feedback on the accessibility of ClassicHomesRemodeling.com. Please let us know if you encounter accessibility barriers on this site.</p>
            </>
        )
    },
    escrow: {
        title: "Escrow & Transfer Process",
        content: (
            <>
                <p><strong>1. Third-Party Security</strong><br/>To ensure the safety of both the buyer and seller, all high-value transactions are conducted via Escrow.com, a licensed and regulated escrow service.</p>
                <p><strong>2. The Process</strong><br/>
                   (a) Buyer initiates transaction and deposits funds to Escrow.<br/>
                   (b) Seller transfers the domain name to the Buyer.<br/>
                   (c) Buyer confirms receipt and control of the domain.<br/>
                   (d) Escrow releases funds to the Seller.
                </p>
                <p><strong>3. Timeline</strong><br/>Most transfers are completed within 3-5 business days upon funding.</p>
            </>
        )
    },
    disclosures: {
        title: "Domain Asset Disclosures",
        content: (
            <>
                <p><strong>1. History</strong><br/>This domain was originally registered in 2005. It has been maintained continuously since that date.</p>
                <p><strong>2. SEO Health</strong><br/>We have performed a comprehensive audit of the domain's backlink profile. While the domain has high authority, we include a Google Disavow File to ensure you can neutralize any historic, low-quality links immediately.</p>
                <p><strong>3. Trademarks</strong><br/>Buyer is responsible for verifying that their intended use of the domain does not infringe on any trademarks in their specific jurisdiction.</p>
            </>
        )
    },
    dispute: {
        title: "Dispute Resolution Policy",
        content: (
            <>
                <p><strong>1. Mediation</strong><br/>In the event of a dispute arising out of or in connection with the purchase agreement, the parties agree to first attempt to resolve the dispute through good-faith negotiation.</p>
                <p><strong>2. Arbitration</strong><br/>If negotiation fails, the dispute shall be settled by binding arbitration administered by the American Arbitration Association (AAA).</p>
            </>
        )
    },
    disclaimer: {
        title: "Legal Disclaimer",
        content: (
            <>
                <p><strong>1. Valuation</strong><br/>Any valuation figures provided on this site are estimates based on market comparables and algorithm appraisals. They do not constitute a guarantee of value.</p>
                <p><strong>2. "As Is" Sale</strong><br/>The domain is sold "as is" and "where is," with no warranties, express or implied, regarding fitness for a particular purpose.</p>
            </>
        )
    },
    dmca: {
        title: "DMCA Policy",
        content: (
            <>
                <p><strong>Copyright Notice</strong><br/>We respect the intellectual property rights of others. If you believe that any material available on this site infringes upon your copyright, please notify us immediately via the contact email provided in the footer.</p>
            </>
        )
    },
    tax: {
        title: "Capital Asset Tax Guide",
        content: (
            <>
                <p><strong>1. Capital Asset Treatment</strong><br/>The acquisition of a premium domain name is typically treated as the purchase of an intangible capital asset (Section 197 intangible) for US federal income tax purposes.</p>
                <p><strong>2. Amortization</strong><br/>Buyers may be eligible to amortize the cost of the domain over a 15-year period. Please consult your Certified Public Accountant (CPA) or tax advisor to confirm the specific tax treatment for your jurisdiction and business situation.</p>
                <p><em>Disclaimer: We do not provide tax advice.</em></p>
            </>
        )
    }
  };

  const openPolicy = (key: PolicyKey) => setActivePolicy(key);
  const closePolicy = () => setActivePolicy(null);

  return (
    <>
      <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/4">
                <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                    <Logo light={true} />
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                        <Linkedin size={20} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="Twitter">
                        <Twitter size={20} strokeWidth={1.5} />
                    </a>
                    <a href="mailto:contact@classichomesremodeling.com" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" aria-label="Email">
                        <Mail size={20} strokeWidth={1.5} />
                    </a>
                </div>
            </div>
            
            {/* Links Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:w-3/4">
                {/* Column 1: Corporate & Legal */}
                <div className="flex flex-col gap-4 text-sm">
                    <h4 className="font-serif text-lg text-white mb-2 border-b border-brand-gold/30 pb-2 inline-block w-full">Standard Legal</h4>
                    <button onClick={() => openPolicy('privacy')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        1. Privacy Policy
                    </button>
                    <button onClick={() => openPolicy('terms')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        2. Terms of Service
                    </button>
                    <button onClick={() => openPolicy('cookies')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        8. Cookie Policy
                    </button>
                    <button onClick={() => openPolicy('accessibility')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        9. Accessibility Statement
                    </button>
                </div>

                {/* Column 2: Asset Trust */}
                <div className="flex flex-col gap-4 text-sm">
                    <h4 className="font-serif text-lg text-white mb-2 border-b border-brand-gold/30 pb-2 inline-block w-full">Asset & Transfer Trust</h4>
                    <button onClick={() => openPolicy('escrow')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        3. Escrow & Transfer Process
                    </button>
                    <button onClick={() => openPolicy('disclosures')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        4. Domain Asset Disclosures
                    </button>
                    <button onClick={() => openPolicy('dispute')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        7. Dispute Resolution Policy
                    </button>
                </div>

                {/* Column 3: Compliance & Financial */}
                <div className="flex flex-col gap-4 text-sm">
                    <h4 className="font-serif text-lg text-white mb-2 border-b border-brand-gold/30 pb-2 inline-block w-full">Liability & Protection</h4>
                    <button onClick={() => openPolicy('disclaimer')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        5. Legal Disclaimer
                    </button>
                    <button onClick={() => openPolicy('dmca')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        6. DMCA Policy
                    </button>
                    <button onClick={() => openPolicy('tax')} className="text-gray-400 text-left hover:text-brand-gold hover:text-gray-300 transition-colors duration-300">
                        10. Capital Asset Tax Guide
                    </button>
                </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light gap-4">
             <p className="text-center md:text-left hover:text-gray-300 transition-colors duration-300 cursor-default">
                &copy; {new Date().getFullYear()} ClassicHomesRemodeling.com Asset Sale.
             </p>
             <p className="text-center md:text-right hover:text-gray-300 transition-colors duration-300 cursor-default">
                All Rights Reserved. Managed by Domain Brokerage Services.
             </p>
          </div>
        </div>
      </footer>

      {/* Unified Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm transition-opacity" 
            onClick={closePolicy}
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[80vh] overflow-y-auto">
            <button 
                onClick={closePolicy}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors"
            >
                <X size={24} />
            </button>

            <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-serif text-2xl text-brand-navy">{policies[activePolicy].title}</h3>
                {policies[activePolicy].date && (
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Effective Date: {policies[activePolicy].date}</p>
                )}
            </div>

            <div className="prose prose-sm text-gray-600 space-y-4">
                {policies[activePolicy].content}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                    onClick={closePolicy}
                    className="px-6 py-2 bg-brand-navy text-white text-sm uppercase tracking-wider font-semibold hover:bg-brand-navy/90 transition-colors"
                >
                    Close
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
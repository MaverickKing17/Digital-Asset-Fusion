import React, { useState } from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter, Mail, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-brand-navy text-white py-12 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-6">
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <Logo light={true} />
              </div>

              {/* Social Icons */}
              <div className="flex gap-6">
                  <a href="#" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                      <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
                      <Twitter size={20} strokeWidth={1.5} />
                  </a>
                  <a href="mailto:contact@classichomesremodeling.com" className="text-gray-400 hover:text-brand-gold transform hover:-translate-y-1 transition-all duration-300" aria-label="Email">
                      <Mail size={20} strokeWidth={1.5} />
                  </a>
              </div>
          </div>
          
          <div className="text-xs text-gray-400 font-light text-center md:text-right space-y-2 cursor-default flex flex-col items-center md:items-end">
              <p className="hover:text-white transition-colors duration-300">
                  &copy; {new Date().getFullYear()} ClassicHomesRemodeling.com Asset Sale.
              </p>
              <p className="hover:text-white transition-colors duration-300">
                  All Rights Reserved. Managed by Domain Brokerage Services.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-gray-500 hover:text-brand-gold transition-colors duration-300 underline decoration-dotted underline-offset-4"
                >
                  Privacy Policy
                </button>
                <span className="text-gray-600">•</span>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="text-gray-500 hover:text-brand-gold transition-colors duration-300 underline decoration-dotted underline-offset-4"
                >
                  Terms of Service
                </button>
              </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsPrivacyOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[80vh] overflow-y-auto">
            <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors"
            >
                <X size={24} />
            </button>

            <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-serif text-2xl text-brand-navy">Privacy Policy</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-sm text-gray-600 space-y-4">
                <p>
                    <strong>1. Introduction</strong><br/>
                    ClassicHomesRemodeling.com ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us during the domain acquisition inquiry process.
                </p>
                <p>
                    <strong>2. Information Collection</strong><br/>
                    We collect only the information necessary to facilitate the sale and transfer of the digital asset. This includes your name, email address, company name, and intended use of the asset provided via our inquiry forms.
                </p>
                <p>
                    <strong>3. Use of Information</strong><br/>
                    Your data is used strictly for the purpose of communicating regarding the valuation, negotiation, and transfer of the domain name. We do not sell, rent, or trade your information to third parties for marketing purposes.
                </p>
                <p>
                    <strong>4. Data Security</strong><br/>
                    We implement industry-standard security measures to protect your data. However, no transmission over the internet is completely secure.
                </p>
                <p>
                    <strong>5. Contact</strong><br/>
                    For privacy concerns, please contact our brokerage team via the contact details provided on this landing page.
                </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                    onClick={() => setIsPrivacyOpen(false)}
                    className="px-6 py-2 bg-brand-navy text-white text-sm uppercase tracking-wider font-semibold hover:bg-brand-navy/90 transition-colors"
                >
                    Close
                </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsTermsOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl p-8 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[80vh] overflow-y-auto">
            <button 
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors"
            >
                <X size={24} />
            </button>

            <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="font-serif text-2xl text-brand-navy">Terms of Service</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-sm text-gray-600 space-y-4">
                <p>
                    <strong>1. Acceptance of Terms</strong><br/>
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                    <strong>2. Asset Sale Disclaimer</strong><br/>
                    This website represents the sale of a digital asset (domain name). All information provided regarding the value, metrics, or potential use of the domain is for informational purposes only. No guarantees of future performance or traffic are made.
                </p>
                <p>
                    <strong>3. Negotiation & Purchase</strong><br/>
                    Submission of an inquiry or offer does not constitute a binding contract. A binding agreement for the sale of the domain is only formed upon the execution of a definitive Purchase and Sale Agreement and the successful funding of escrow.
                </p>
                <p>
                    <strong>4. Limitation of Liability</strong><br/>
                    In no event shall the domain owners or brokers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this site.
                </p>
                <p>
                    <strong>5. Governing Law</strong><br/>
                    Any claim relating to this website shall be governed by the laws of the jurisdiction of the seller without regard to its conflict of law provisions.
                </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                    onClick={() => setIsTermsOpen(false)}
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
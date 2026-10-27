import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: 'home' | 'dispensary' | 'lab' | 'herbarium' | 'provenance' | 'gazette') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#f4efeb] border-t border-[#e7e1d8] text-[#1a1817] pt-16 pb-12 font-sans">
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#e7e1d8]">
          
          {/* Brand Manifesto (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl tracking-[0.1em] text-[#1a1817] font-normal">
              AURELIA BOTANICA
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-[#767f6d] leading-relaxed max-w-md">
              "We reject the synthetic haste of industrial skincare. True cellular repair asks for patient distillation, wild-harvested alpine integrity, and deliberate slowness."
            </p>
            <p className="text-xs text-[#4a4643] leading-relaxed max-w-md font-light">
              Founded in the Swiss Valais Alps. Operating clinical extraction ateliers in Zurich, Paris, and Kyoto. Formulating under European and Swiss Pharmacopoeia monographs.
            </p>
          </div>

          {/* Quick Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <span className="text-[9px] tracking-[0.25em] text-[#827e79] uppercase font-semibold block">
                COMPENDIUM
              </span>
              <ul className="space-y-2 text-[#4a4643]">
                <li>
                  <button onClick={() => onNavigate('dispensary')} className="hover:text-[#1a1817] transition-colors uppercase tracking-[0.1em]">
                    Dispensary
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('lab')} className="hover:text-[#1a1817] transition-colors uppercase tracking-[0.1em] text-[#c5a880] font-medium">
                    Bespoke Lab
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('herbarium')} className="hover:text-[#1a1817] transition-colors uppercase tracking-[0.1em]">
                    Herbarium
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('provenance')} className="hover:text-[#1a1817] transition-colors uppercase tracking-[0.1em]">
                    Batch Trace
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[9px] tracking-[0.25em] text-[#827e79] uppercase font-semibold block">
                ATELIERS
              </span>
              <ul className="space-y-2 text-[#4a4643] text-[11px]">
                <li>ZURICH &bull; BAHNHOFSTRASSE</li>
                <li>VALAIS &bull; ALPS 2,420M</li>
                <li>PARIS &bull; RUE DE LA PAIX</li>
                <li>KYOTO &bull; GION HIGASHIYAMA</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Dispatch Registration (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[9px] tracking-[0.25em] text-[#827e79] uppercase font-semibold block">
              THE BOTANICAL GAZETTE & HARVEST ALERTS
            </span>
            <p className="text-xs text-[#4a4643] leading-relaxed">
              Patrons receive advance notification when finite alpine extractions are bottled and released from cellar maturation.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="flex items-center border-b border-[#1a1817] pb-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER DISPATCH EMAIL..."
                  className="w-full bg-transparent text-xs tracking-[0.18em] uppercase text-[#1a1817] placeholder:text-[#827e79] focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[#1a1817] hover:text-[#767f6d] transition-colors ml-2"
                  aria-label="Subscribe to Gazette"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#586150]">
                  <Check className="w-3.5 h-3.5" />
                  <span>REGISTRATION RECORDED FOR NEXT CELLAR RELEASE</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Metadata & Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-[0.18em] text-[#827e79] uppercase gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} AURELIA BOTANICA SUISSE</span>
            <span>&bull;</span>
            <span>DEMETER BIODYNAMIC HARVEST</span>
            <span>&bull;</span>
            <span>SUPERCRITICAL CO2 SOLVENT-FREE</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>TERMS OF COLD DISPATCH</span>
            <span>BOTANICAL PHYTOSANITARY CODE</span>
            <span>SWISS LAB REG. 049-CH</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

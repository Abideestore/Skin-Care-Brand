import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { Formulation } from '../types';

interface HeroEditorialProps {
  featuredFormulation: Formulation;
  onExploreCatalog: () => void;
  onOpenDossier: (formulation: Formulation) => void;
  onOpenLab: () => void;
  currencySymbol: string;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  featuredFormulation,
  onExploreCatalog,
  onOpenDossier,
  onOpenLab,
  currencySymbol
}) => {
  return (
    <section className="relative w-full border-b border-[#e7e1d8] bg-[#fbf9f5] overflow-hidden">
      {/* Background Architectural Grid Lines (Hairline decorative) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-12 max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 opacity-40">
        <div className="border-r border-[#e7e1d8] h-full col-span-5 hidden lg:block" />
        <div className="border-r border-[#e7e1d8] h-full col-span-7 hidden lg:block" />
      </div>

      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 5-column editorial text block */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            {/* Batch & Series Metadata */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-2.5 py-1 border border-[#e7e1d8] bg-[#f4efeb] text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold">
                AUTUMN SOLSTICE HARVEST
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#767f6d] uppercase font-medium">
                ALTITUDE: 2,420M
              </span>
            </div>

            {/* Display Hero Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1817] font-normal leading-[1.12] tracking-[-0.01em]">
              Cellular Resonance from <span className="italic font-normal">High-Altitude</span> Flora.
            </h1>

            {/* Editorial Body */}
            <p className="mt-6 text-base sm:text-lg text-[#4a4643] leading-relaxed font-sans font-light">
              We extract secondary botanical metabolites at peak bio-active intensity from protected alpine sanctuaries. Formulations compounded without synthetic preservatives, thermal degradation, or petrochemical carriers.
            </p>

            {/* Featured Product Capsule Pill / Spec */}
            <div className="mt-8 p-5 bg-[#f4efeb] border border-[#e7e1d8] space-y-2">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-medium text-[#827e79]">
                <span>KEYSTONE FORMULATION</span>
                <span className="text-[#1a1817] font-semibold">{currencySymbol}{featuredFormulation.price}</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-[#1a1817]">
                {featuredFormulation.name}
              </p>
              <p className="text-xs text-[#767f6d] italic font-serif">
                {featuredFormulation.scientificExtract}
              </p>
            </div>

            {/* CTA Buttons strictly following design system */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Action Button */}
              <button
                onClick={() => onOpenDossier(featuredFormulation)}
                className="bg-[#1a1817] text-[#fbf9f5] px-8 py-4 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-all duration-300 rounded-none text-center shadow-xs"
              >
                EXAMINE CLINICAL DOSSIER
              </button>

              {/* Secondary Outline Action Button */}
              <button
                onClick={onExploreCatalog}
                className="border border-[#1a1817] text-[#1a1817] bg-transparent px-8 py-4 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-all duration-300 rounded-none text-center"
              >
                EXPLORE DISPENSARY
              </button>
            </div>

            {/* Bespoke Formulator Prompt Link */}
            <div className="mt-8 pt-6 border-t border-[#e7e1d8] flex items-center justify-between">
              <span className="text-[11px] text-[#827e79] tracking-[0.1em]">
                Seeking custom compounded flora?
              </span>
              <button
                onClick={onOpenLab}
                className="text-[10px] tracking-[0.22em] uppercase text-[#1a1817] font-medium border-b border-[#1a1817] pb-1 hover:text-[#767f6d] hover:border-[#767f6d] transition-colors flex items-center gap-1.5"
              >
                <span>COMMISSION BESPOKE BLEND</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 7-column architectural product view */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#f4efeb] border border-[#e7e1d8] overflow-hidden group">
              <img
                src={featuredFormulation.image}
                alt={featuredFormulation.name}
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-102"
              />

              {/* Minimalist Apothecary Plate Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-[#fbf9f5]/95 backdrop-blur-sm p-6 border border-[#e7e1d8]">
                <div className="flex items-center justify-between border-b border-[#e7e1d8] pb-3 mb-3">
                  <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold">
                    FORMULATION N° 01 • SPECIFICATION
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-[#767f6d] uppercase font-medium">
                    COLD-CHAIN VERIFIED
                  </span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] tracking-[0.15em] text-[#827e79] uppercase">
                    HARVEST REGION: <span className="text-[#1a1817] font-medium">{featuredFormulation.origin}</span>
                  </p>
                  <p className="text-[11px] tracking-[0.15em] text-[#827e79] uppercase">
                    EXTRACTION METHOD: <span className="text-[#1a1817] font-medium">SUPERCRITICAL CO2 & SONICATION</span>
                  </p>
                  <p className="text-[11px] tracking-[0.15em] text-[#827e79] uppercase">
                    INSPECTION STATUS: <span className="text-[#586150] font-semibold">PASSED PHYTOSANITARY ASSAY</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e7e1d8] flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79]">
                    AUTHENTICITY CODE: AUR-VAL-2026-992
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#767f6d]" />
                </div>
              </div>
            </div>

            {/* Ambient subtle badge */}
            <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.2em] text-[#827e79] uppercase font-medium px-1">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#767f6d]" />
                COORDINATES: 46.2276° N, 7.3598° E
              </span>
              <span>100% BOTANICAL RIGOR</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

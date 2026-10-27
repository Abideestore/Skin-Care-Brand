import React, { useState } from 'react';
import { Formulation } from '../types';
import { ArrowLeft, Check, ShieldCheck, Droplet, Sparkles, Plus, Minus } from 'lucide-react';

interface ProductDossierProps {
  formulation: Formulation;
  onBack: () => void;
  onAddToCart: (formulation: Formulation, quantity: number) => void;
  currencySymbol: string;
}

export const ProductDossier: React.FC<ProductDossierProps> = ({
  formulation,
  onBack,
  onAddToCart,
  currencySymbol
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageTab, setActiveImageTab] = useState<'primary' | 'secondary'>('primary');
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToCart(formulation, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen py-8 md:py-16">
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="group flex items-center space-x-2 text-[10px] tracking-[0.22em] uppercase text-[#4a4643] hover:text-[#1a1817] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO DISPENSARY ARCHIVE</span>
          </button>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Visual Plates (Col 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/5] bg-[#f4efeb] border border-[#e7e1d8] overflow-hidden">
              <img
                src={activeImageTab === 'primary' ? formulation.image : (formulation.secondaryImage || formulation.image)}
                alt={formulation.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              
              {/* Batch Stamp */}
              <div className="absolute top-4 left-4 bg-[#fbf9f5]/95 border border-[#e7e1d8] px-3 py-1.5 text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold">
                {formulation.batchNumber} &bull; {formulation.volume}
              </div>

              {/* Verified Purity Mark */}
              <div className="absolute top-4 right-4 bg-[#fbf9f5]/95 border border-[#e7e1d8] px-3 py-1.5 text-[9px] tracking-[0.2em] text-[#767f6d] uppercase font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GC-MS ASSAY CERTIFIED</span>
              </div>
            </div>

            {/* Image Switcher if secondary image exists */}
            {formulation.secondaryImage && (
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveImageTab('primary')}
                  className={`flex-1 py-2 text-[9px] tracking-[0.22em] uppercase font-medium border text-center transition-colors ${
                    activeImageTab === 'primary'
                      ? 'border-[#1a1817] bg-[#f4efeb] text-[#1a1817]'
                      : 'border-[#e7e1d8] text-[#827e79] hover:border-[#1a1817]'
                  }`}
                >
                  PLATE I: APOTHECARY VESSEL
                </button>
                <button
                  onClick={() => setActiveImageTab('secondary')}
                  className={`flex-1 py-2 text-[9px] tracking-[0.22em] uppercase font-medium border text-center transition-colors ${
                    activeImageTab === 'secondary'
                      ? 'border-[#1a1817] bg-[#f4efeb] text-[#1a1817]'
                      : 'border-[#e7e1d8] text-[#827e79] hover:border-[#1a1817]'
                  }`}
                >
                  PLATE II: BOTANICAL CONTEXT
                </button>
              </div>
            )}

            {/* Archival Specification Certificate Box */}
            <div className="p-6 bg-[#f4efeb] border border-[#e7e1d8] space-y-4">
              <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block border-b border-[#e7e1d8] pb-2">
                APOTHECARY REGISTRATION & HARVEST PROVENANCE
              </span>
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">ORIGIN ESPLANADE</span>
                  <p className="font-medium text-[#1a1817] mt-0.5">{formulation.origin}</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">HARVEST ALTITUDE</span>
                  <p className="font-medium text-[#1a1817] mt-0.5">{formulation.altitude}</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">EXTRACTION CYCLE</span>
                  <p className="font-medium text-[#1a1817] mt-0.5">{formulation.harvestDate}</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">BATCH LIMITATION</span>
                  <p className="font-medium text-[#1a1817] mt-0.5">{formulation.batchRemaining} / {formulation.totalBatchSize} Flacons</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dossier Details & Acquisition (Col 7-12) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.22em] text-[#767f6d] uppercase font-semibold">
                  {formulation.collection}
                </span>
                <span className="text-[#827e79]">•</span>
                <span className="text-[10px] tracking-[0.2em] text-[#827e79] uppercase">
                  SKU: {formulation.sku}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal leading-tight">
                {formulation.name}
              </h1>

              {/* Scientific Nomenclature */}
              <p className="font-serif italic text-base sm:text-lg text-[#767f6d] mt-2">
                {formulation.scientificExtract}
              </p>

              {/* Price & Volume */}
              <div className="mt-6 pb-6 border-b border-[#e7e1d8] flex items-baseline justify-between">
                <span className="font-serif text-3xl text-[#1a1817]">
                  {currencySymbol}{formulation.price}
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-[#827e79]">
                  VOLUME: {formulation.volume}
                </span>
              </div>

              {/* Description Literature */}
              <div className="py-6 space-y-4 border-b border-[#e7e1d8]">
                <p className="text-sm sm:text-base text-[#4a4643] leading-relaxed font-light">
                  {formulation.description}
                </p>
                <div className="p-4 bg-[#f4efeb] border-l-2 border-[#1a1817]">
                  <span className="text-[9px] tracking-[0.22em] uppercase text-[#1a1817] font-semibold block mb-1">
                    TACTILE APPLICATION PROTOCOL
                  </span>
                  <p className="text-xs text-[#4a4643] leading-normal italic font-serif">
                    "{formulation.tactileRitual}"
                  </p>
                </div>
              </div>

              {/* Botanical Accords Breakdown */}
              <div className="py-6 border-b border-[#e7e1d8]">
                <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold block mb-4">
                  CELLULAR ACCORD PROFILE & EFFICACY INDICES
                </span>
                <div className="space-y-3">
                  {formulation.accords.map((accord, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs tracking-[0.1em] text-[#4a4643]">
                        <span>{accord.label}</span>
                        <span className="font-mono text-[#1a1817] font-medium">{accord.percentage}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-[#e7e1d8] overflow-hidden">
                        <div
                          className="h-full bg-[#1a1817] transition-all duration-700"
                          style={{ width: `${accord.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Olfactory Notes Pyramid */}
              <div className="py-6 border-b border-[#e7e1d8]">
                <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold block mb-3">
                  OLFACTORY HARMONY
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                  <div className="p-3 bg-[#f4efeb] border border-[#e7e1d8]">
                    <span className="text-[8px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">HEAD NOTE</span>
                    <p className="text-[#1a1817] font-medium leading-snug">{formulation.sensoryNotes.top}</p>
                  </div>
                  <div className="p-3 bg-[#f4efeb] border border-[#e7e1d8]">
                    <span className="text-[8px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">HEART NOTE</span>
                    <p className="text-[#1a1817] font-medium leading-snug">{formulation.sensoryNotes.heart}</p>
                  </div>
                  <div className="p-3 bg-[#f4efeb] border border-[#e7e1d8]">
                    <span className="text-[8px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">BASE NOTE</span>
                    <p className="text-[#1a1817] font-medium leading-snug">{formulation.sensoryNotes.base}</p>
                  </div>
                </div>
              </div>

              {/* Full INCI Ingredient Disclosure */}
              <div className="py-6 border-b border-[#e7e1d8]">
                <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold block mb-2">
                  FULL INCI FORMULATION DECLARATION
                </span>
                <p className="text-xs text-[#827e79] leading-relaxed font-mono">
                  {formulation.inci.join(' • ')}
                </p>
                <span className="text-[9px] text-[#767f6d] tracking-[0.15em] uppercase mt-2 block font-medium">
                  *Denotes Certified Demeter / Organic Alpine Cultivation
                </span>
              </div>
            </div>

            {/* Action Bar: Quantity & Acquire Button */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Quantity Controller with 90-degree corners */}
                <div className="flex items-center border border-[#1a1817] h-14 px-3 bg-transparent">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#1a1817] hover:text-[#767f6d] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-12 text-center text-sm font-mono font-medium text-[#1a1817]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(formulation.batchRemaining, quantity + 1))}
                    className="p-2 text-[#1a1817] hover:text-[#767f6d] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Action Button */}
                <button
                  onClick={handleAdd}
                  disabled={!formulation.inStock}
                  className="flex-1 bg-[#1a1817] text-[#fbf9f5] h-14 px-8 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-all duration-300 rounded-none flex items-center justify-center gap-2"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-[#dce6d0]" />
                      <span>ADDED TO APOTHECARY BAG</span>
                    </>
                  ) : (
                    <>
                      <span>ACQUIRE FORMULATION &bull; {currencySymbol}{formulation.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Reassurance Metadata */}
              <div className="mt-4 flex flex-wrap items-center justify-between text-[10px] tracking-[0.18em] text-[#827e79] uppercase">
                <span className="flex items-center gap-1.5">
                  <Droplet className="w-3 h-3 text-[#767f6d]" />
                  COLD-COMPOUNDED PER ORDER
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#c5a880]" />
                  INCLUDES 2 COMPLIMENTARY VIALS
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

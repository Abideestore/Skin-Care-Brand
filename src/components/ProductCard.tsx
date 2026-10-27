import React from 'react';
import { Formulation } from '../types';
import { Plus, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  formulation: Formulation;
  onSelect: (formulation: Formulation) => void;
  onQuickAdd: (formulation: Formulation) => void;
  currencySymbol: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  formulation,
  onSelect,
  onQuickAdd,
  currencySymbol
}) => {
  return (
    <div className="group flex flex-col bg-[#fbf9f5] border border-[#e7e1d8] transition-all duration-300 hover:border-[#1a1817]">
      {/* Image container: 4:5 aspect ratio with sand-toned container */}
      <div 
        className="relative aspect-[4/5] bg-[#f4efeb] overflow-hidden cursor-pointer"
        onClick={() => onSelect(formulation)}
      >
        <img
          src={formulation.image}
          alt={formulation.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Serialized Batch Stamp */}
        <div className="absolute top-3 left-3 bg-[#fbf9f5]/90 backdrop-blur-xs px-2.5 py-1 border border-[#e7e1d8] text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold">
          {formulation.batchNumber}
        </div>

        {/* Harvest / In Stock Status */}
        <div className="absolute top-3 right-3 bg-[#fbf9f5]/90 px-2 py-1 text-[9px] tracking-[0.2em] text-[#767f6d] uppercase font-semibold">
          {formulation.batchRemaining} REMAINING
        </div>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-[#1a1817]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(formulation);
            }}
            className="w-full bg-[#fbf9f5] text-[#1a1817] py-3 text-[10px] tracking-[0.22em] uppercase font-medium border border-[#1a1817] hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>INSPECT DOSSIER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Content Stack */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Volume and Subtitle Metadata */}
          <div className="flex items-center justify-between text-[9px] tracking-[0.25em] text-[#827e79] uppercase font-semibold mb-2">
            <span>{formulation.volume}</span>
            <span className="text-[#767f6d]">{formulation.origin.split(',')[0]}</span>
          </div>

          {/* Botanical Headline */}
          <h3 
            onClick={() => onSelect(formulation)}
            className="font-serif text-xl sm:text-2xl text-[#1a1817] font-normal leading-snug cursor-pointer hover:text-[#767f6d] transition-colors"
          >
            {formulation.name}
          </h3>

          {/* Scientific Extract Subtitle */}
          <p className="text-[12px] italic font-serif text-[#767f6d] mt-1 line-clamp-1">
            {formulation.scientificExtract}
          </p>

          {/* Formulation Summary */}
          <p className="text-[13px] text-[#4a4643] leading-relaxed mt-3 line-clamp-2">
            {formulation.subtitle}
          </p>
        </div>

        {/* Footer: Price & Quick Add Button */}
        <div className="pt-6 mt-4 border-t border-[#e7e1d8] flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block">
              APOTHECARY PRICE
            </span>
            <span className="text-base font-serif text-[#1a1817] font-normal">
              {currencySymbol}{formulation.price}
            </span>
          </div>

          <button
            onClick={() => onQuickAdd(formulation)}
            className="px-4 py-2 border border-[#1a1817] text-[#1a1817] hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-all duration-300 text-[10px] tracking-[0.22em] uppercase font-medium flex items-center gap-1"
            title="Quick add to bag"
            aria-label={`Add ${formulation.name} to bag`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>ACQUIRE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

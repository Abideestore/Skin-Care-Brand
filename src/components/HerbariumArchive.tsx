import React, { useState } from 'react';
import { BOTANICAL_MONOGRAPHS } from '../data/botanicals';
import { BotanicalMonograph } from '../types';
import { Microscope, Mountain, Compass, FileText, CheckCircle2 } from 'lucide-react';

interface HerbariumArchiveProps {
  onSelectFormulationFromHerbarium: (formulationId: string) => void;
}

export const HerbariumArchive: React.FC<HerbariumArchiveProps> = ({
  onSelectFormulationFromHerbarium
}) => {
  const [selectedMonograph, setSelectedMonograph] = useState<BotanicalMonograph>(BOTANICAL_MONOGRAPHS[0]);

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen py-12 md:py-20">
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* Editorial Section Header */}
        <div className="border-b border-[#e7e1d8] pb-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold">
                  INDEX HERBARIUM & SCIENTIFIC MONOGRAPHS
                </span>
                <span className="text-[#827e79]">•</span>
                <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                  PHYTOTHERAPEUTIC COMPENDIUM
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal tracking-tight">
                Botanical Monographs & Science
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4a4643] max-w-2xl font-light">
                Examine the pharmacognostic blueprints of our keystone raw materials. Documented with chromatographic markers, high-altitude geo-coordinates, and biological mechanisms of action.
              </p>
            </div>

            <div className="text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block">
                ARCHIVED SPECIMENS
              </span>
              <span className="font-serif text-2xl text-[#1a1817]">
                {BOTANICAL_MONOGRAPHS.length} Botanical Species
              </span>
            </div>
          </div>
        </div>

        {/* Monograph Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {BOTANICAL_MONOGRAPHS.map((mono) => {
            const isSelected = selectedMonograph.id === mono.id;
            return (
              <button
                key={mono.id}
                onClick={() => setSelectedMonograph(mono)}
                className={`p-4 text-left border transition-all duration-300 rounded-none ${
                  isSelected
                    ? 'bg-[#f4efeb] border-[#1a1817]'
                    : 'bg-[#fbf9f5] border-[#e7e1d8] hover:border-[#827e79]'
                }`}
              >
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#767f6d] font-semibold block mb-1">
                  FAMILY: {mono.family}
                </span>
                <h4 className="font-serif text-lg text-[#1a1817] font-normal leading-snug">
                  {mono.commonName}
                </h4>
                <p className="text-[11px] font-serif italic text-[#827e79] mt-0.5 truncate">
                  {mono.scientificBinomial}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Monograph In-Depth Specimen Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-[#e7e1d8] bg-[#fbf9f5] p-6 sm:p-10">
          
          {/* Left Column: Specimen Plate (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] bg-[#f4efeb] border border-[#e7e1d8] overflow-hidden">
              <img
                src={selectedMonograph.image}
                alt={selectedMonograph.commonName}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#fbf9f5]/90 backdrop-blur-xs p-4 border border-[#e7e1d8] text-xs">
                <span className="text-[9px] tracking-[0.2em] text-[#767f6d] uppercase font-semibold block mb-1">
                  HERBARIUM SPECIMEN ARCHIVE
                </span>
                <p className="font-serif italic text-sm text-[#1a1817]">
                  {selectedMonograph.scientificBinomial}
                </p>
              </div>
            </div>

            {/* Geological Coordinates Card */}
            <div className="p-5 bg-[#f4efeb] border border-[#e7e1d8] space-y-3">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#1a1817] font-semibold">
                <Mountain className="w-3.5 h-3.5 text-[#767f6d]" />
                <span>HABITAT & HARVEST SPECIFICATIONS</span>
              </div>
              <div className="space-y-1.5 text-xs text-[#4a4643]">
                <p className="flex justify-between">
                  <span className="text-[#827e79]">Ecoregion:</span>
                  <span className="font-medium text-[#1a1817]">{selectedMonograph.originRegion}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#827e79]">Altitude:</span>
                  <span className="font-medium text-[#1a1817]">{selectedMonograph.harvestElevation}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#827e79]">Method:</span>
                  <span className="font-medium text-[#1a1817]">{selectedMonograph.extractionTechnique}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Phytochemical Assay & Mechanism (Col 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block mb-1">
                  MONOGRAPH {selectedMonograph.id}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1817] font-normal">
                  {selectedMonograph.commonName}
                </h3>
                <p className="font-serif italic text-lg text-[#767f6d] mt-1">
                  {selectedMonograph.scientificBinomial} &bull; Family {selectedMonograph.family}
                </p>
              </div>

              {/* Clinical Efficacy Findings */}
              <div className="space-y-2 border-t border-b border-[#e7e1d8] py-6">
                <span className="text-[9px] tracking-[0.22em] text-[#1a1817] uppercase font-semibold flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5 text-[#767f6d]" />
                  CLINICAL BIOLOGICAL EFFICACY
                </span>
                <p className="text-sm text-[#4a4643] leading-relaxed font-light">
                  {selectedMonograph.clinicalEfficacy}
                </p>
              </div>

              {/* Primary Active Phytochemicals */}
              <div className="space-y-3">
                <span className="text-[9px] tracking-[0.22em] text-[#1a1817] uppercase font-semibold block">
                  SECONDARY METABOLITES & CHROMATOGRAPHIC MARKERS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedMonograph.primaryActiveConstituents.map((item, i) => (
                    <div key={i} className="p-3 bg-[#f4efeb] border border-[#e7e1d8] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#767f6d] shrink-0" />
                      <span className="text-xs font-mono text-[#1a1817]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sensorial Profile */}
              <div className="p-5 bg-[#f4efeb] border border-[#e7e1d8]">
                <span className="text-[9px] tracking-[0.22em] text-[#c5a880] uppercase font-semibold block mb-1">
                  TACTILE & OLFACTORY RECEPTIVITY
                </span>
                <p className="text-xs sm:text-sm text-[#1a1817] italic font-serif leading-relaxed">
                  "{selectedMonograph.sensoryProfile}"
                </p>
              </div>
            </div>

            {/* Related Formulations Button */}
            <div className="pt-6 border-t border-[#e7e1d8] flex items-center justify-between">
              <div>
                <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">
                  FORMULATION CROSS-REFERENCE
                </span>
                <span className="text-xs text-[#1a1817] font-medium">
                  Utilized in {selectedMonograph.associatedFormulationIds.join(', ')}
                </span>
              </div>

              <button
                onClick={() => onSelectFormulationFromHerbarium(selectedMonograph.associatedFormulationIds[0])}
                className="bg-[#1a1817] text-[#fbf9f5] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none"
              >
                VIEW ACTIVE COMPOUND
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

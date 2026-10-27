import React, { useState } from 'react';
import { FORMULATIONS } from '../data/botanicals';
import { ShieldCheck, Search, Award, CheckCircle, FileCheck2, ArrowRight } from 'lucide-react';
import { Formulation } from '../types';

interface ProvenanceArchiveProps {
  onSelectFormulation: (formulation: Formulation) => void;
}

export const ProvenanceArchive: React.FC<ProvenanceArchiveProps> = ({
  onSelectFormulation
}) => {
  const [searchBatch, setSearchBatch] = useState<string>('BATCH 049-C');
  const [selectedBatch, setSelectedBatch] = useState<Formulation>(FORMULATIONS[0]);
  const [verifiedFeedback, setVerifiedFeedback] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchBatch.trim().toUpperCase();
    const found = FORMULATIONS.find(
      (f) =>
        f.batchNumber.toUpperCase().includes(query) ||
        f.sku.toUpperCase().includes(query) ||
        f.id.toUpperCase() === query
    );

    if (found) {
      setSelectedBatch(found);
      setVerifiedFeedback(true);
    } else {
      setVerifiedFeedback(false);
    }
  };

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen py-12 md:py-20">
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* Editorial Section Header */}
        <div className="border-b border-[#e7e1d8] pb-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold">
                  AUDIT REGISTRY & TRACEABILITY
                </span>
                <span className="text-[#827e79]">•</span>
                <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                  SWISS FEDERAL PHYTOSANITARY STANDARDS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal tracking-tight">
                Batch Provenance & Verification
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4a4643] max-w-2xl font-light">
                Every glass flacon bears a serialized batch cipher. Enter your flacon identifier to authenticate harvest coordinates, Gas Chromatography-Mass Spectrometry (GC-MS) purity assays, and master chemist release protocols.
              </p>
            </div>

            <div className="text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#767f6d] flex items-center justify-end gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#767f6d]" />
                100% UNADULTERATED
              </span>
              <span className="text-xs text-[#827e79] uppercase tracking-[0.15em] mt-1 block">
                IMMUTABLE AUDIT LOG
              </span>
            </div>
          </div>
        </div>

        {/* Verification Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchBatch}
                onChange={(e) => setSearchBatch(e.target.value)}
                placeholder="ENTER BATCH CIPHER (E.G. BATCH 049-C)..."
                className="w-full apothecary-input py-3 text-sm tracking-[0.2em] uppercase text-[#1a1817] placeholder:text-[#827e79] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1a1817] text-[#fbf9f5] px-8 py-3 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5" />
              <span>AUTHENTICATE CIPHER</span>
            </button>
          </form>

          {/* Quick Click Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">SAMPLE CIPHERS:</span>
            {FORMULATIONS.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setSearchBatch(f.batchNumber);
                  setSelectedBatch(f);
                  setVerifiedFeedback(true);
                }}
                className="text-[9px] px-2 py-0.5 border border-[#e7e1d8] hover:border-[#1a1817] text-[#1a1817] transition-colors uppercase font-mono"
              >
                {f.batchNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Certificate Dossier */}
        {verifiedFeedback ? (
          <div className="border border-[#1a1817] bg-[#f4efeb] p-8 sm:p-12 max-w-4xl mx-auto shadow-xs relative">
            {/* Watermark Crest */}
            <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
              <Award className="w-32 h-32 text-[#1a1817]" />
            </div>

            {/* Certificate Header */}
            <div className="border-b border-[#1a1817] pb-8 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#767f6d] font-semibold block mb-1">
                  OFFICIAL AUDIT PROTOCOL & CERTIFICATE OF ASSAY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1817] font-normal">
                  Certificate of Botanical Provenance
                </h3>
                <p className="text-xs text-[#827e79] tracking-[0.18em] uppercase mt-1">
                  SERIALIZED REGISTRATION: {selectedBatch.sku}
                </p>
              </div>

              <div className="bg-[#fbf9f5] px-4 py-2 border border-[#1a1817] text-center self-start sm:self-auto">
                <span className="text-[8px] tracking-[0.25em] text-[#827e79] uppercase block">VERIFICATION STATUS</span>
                <span className="text-xs tracking-[0.2em] uppercase text-[#586150] font-bold flex items-center gap-1.5 justify-center">
                  <CheckCircle className="w-3.5 h-3.5" />
                  AUTHENTIC & SECURED
                </span>
              </div>
            </div>

            {/* Core Botanical Assay Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-[10px] tracking-[0.22em] text-[#1a1817] uppercase font-semibold border-b border-[#e7e1d8] pb-2">
                  BOTANICAL BIOMETRICS & PROVENANCE
                </h4>
                <div className="space-y-2 text-xs">
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Formulation Title:</span>
                    <span className="font-medium text-[#1a1817]">{selectedBatch.name}</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Bio-Active Extracts:</span>
                    <span className="font-medium text-[#1a1817]">{selectedBatch.scientificExtract}</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Geo-Coordinates:</span>
                    <span className="font-medium text-[#1a1817]">{selectedBatch.origin}</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Harvest Elevation:</span>
                    <span className="font-medium text-[#1a1817]">{selectedBatch.altitude}</span>
                  </p>
                  <p className="flex justify-between py-1">
                    <span className="text-[#827e79]">Distillation Timestamp:</span>
                    <span className="font-medium text-[#1a1817]">{selectedBatch.harvestDate}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] tracking-[0.22em] text-[#1a1817] uppercase font-semibold border-b border-[#e7e1d8] pb-2">
                  GAS CHROMATOGRAPHY (GC-MS) METRICS
                </h4>
                <div className="space-y-2 text-xs">
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Synthetic Solvent Trace:</span>
                    <span className="font-mono text-[#586150] font-semibold">0.000 PPM (UNDETECTED)</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Heavy Metals Assay:</span>
                    <span className="font-mono text-[#586150] font-semibold">&lt; 0.01 PPM (PASSED)</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Key Marker Concentration:</span>
                    <span className="font-mono text-[#1a1817] font-semibold">{selectedBatch.phytochemicalFocus[0]}</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-[#e7e1d8]/50">
                    <span className="text-[#827e79]">Packaging Integrity:</span>
                    <span className="font-mono text-[#1a1817]">Miron Violet Glass Sealed</span>
                  </p>
                  <p className="flex justify-between py-1">
                    <span className="text-[#827e79]">Flasks Produced in Run:</span>
                    <span className="font-mono text-[#1a1817]">{selectedBatch.totalBatchSize} Units Total</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Release Signatures & Seal */}
            <div className="pt-8 border-t border-[#1a1817] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-6 text-xs text-[#827e79]">
                <div>
                  <span className="text-[8px] tracking-[0.2em] uppercase block">LEAD PHARMACOGNOCIST</span>
                  <span className="font-serif italic text-base text-[#1a1817] mt-0.5 block">
                    Dr. Evelyn Vane-Chantelle
                  </span>
                </div>
                <div className="border-l border-[#e7e1d8] pl-6">
                  <span className="text-[8px] tracking-[0.2em] uppercase block">CERTIFIED ATELIER</span>
                  <span className="text-xs text-[#1a1817] font-medium block">
                    Zurich Laboratory &bull; Station 4
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectFormulation(selectedBatch)}
                className="bg-[#1a1817] text-[#fbf9f5] px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none flex items-center gap-1.5"
              >
                <span>OPEN FORMULATION DOSSIER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center bg-[#f4efeb] border border-[#e7e1d8] max-w-xl mx-auto">
            <h4 className="font-serif text-2xl text-[#1a1817] font-normal mb-2">
              Unrecognized Batch Cipher
            </h4>
            <p className="text-xs text-[#4a4643] leading-relaxed mb-6">
              The identifier "{searchBatch}" does not match active 2026 laboratory serial logs. Please verify the embossed label on the underside of your glass vessel.
            </p>
            <button
              onClick={() => {
                setSearchBatch('BATCH 049-C');
                setSelectedBatch(FORMULATIONS[0]);
                setVerifiedFeedback(true);
              }}
              className="text-[10px] tracking-[0.2em] uppercase text-[#1a1817] border-b border-[#1a1817] pb-1 hover:text-[#767f6d]"
            >
              RESET TO CANONICAL BATCH 049-C
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

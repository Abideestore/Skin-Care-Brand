import React from 'react';
import { CertificateData } from '../types';
import { Award, CheckCircle, Printer, X, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose
}) => {
  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1a1817]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#fbf9f5] border-2 border-[#1a1817] p-8 sm:p-12 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#4a4643] hover:text-[#1a1817] transition-colors"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Certificate Border Ring (Hairline double outline) */}
        <div className="border border-[#e7e1d8] p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="text-center border-b border-[#1a1817] pb-6">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#767f6d] font-semibold block mb-1">
              CONFOEDERATIO HELVETICA &bull; BOTANICAL ARCHIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1817] font-normal tracking-wide">
              Certificate of Botanical Provenance
            </h2>
            <p className="text-[10px] tracking-[0.25em] text-[#827e79] uppercase mt-1">
              DOCUMENT IDENTIFIER: {certificate.certificateId}
            </p>
          </div>

          {/* Recipient Inscription */}
          <div className="text-center py-2 space-y-1">
            <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">
              THIS CERTIFIES THAT AN INDIVIDUALIZED COLD-EXTRACTION HAS BEEN COMPOUNDED FOR:
            </span>
            <p className="font-serif italic text-2xl sm:text-3xl text-[#1a1817]">
              {certificate.clientName}
            </p>
          </div>

          {/* Formulations Sealed */}
          <div className="p-4 bg-[#f4efeb] border border-[#e7e1d8] space-y-2">
            <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold block border-b border-[#e7e1d8] pb-1">
              VERIFIED FLACONS & EXTRACTS
            </span>
            <ul className="text-xs space-y-1 font-serif text-[#1a1817]">
              {certificate.formulationNames.map((name, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#767f6d] font-mono text-[10px]">0{i + 1}.</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Purity & Batch Details */}
          <div className="grid grid-cols-2 gap-4 text-xs font-sans border-b border-[#1a1817] pb-6">
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">BATCH CODE</span>
              <p className="font-mono text-sm text-[#1a1817] font-medium mt-0.5">{certificate.batchNumber}</p>
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">PURITY ASSAY</span>
              <p className="font-mono text-sm text-[#586150] font-semibold mt-0.5">{certificate.purityIndex}</p>
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">DISPATCH DATE</span>
              <p className="text-xs text-[#1a1817] mt-0.5">{certificate.date}</p>
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block">TOTAL VOLUME</span>
              <p className="text-xs text-[#1a1817] mt-0.5">{certificate.totalVolume}</p>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#827e79] block">
                RATIFYING CHIEF PHARMACOGNOCIST
              </span>
              <p className="font-serif italic text-base text-[#1a1817]">
                {certificate.leadBotanist}
              </p>
              <span className="text-[9px] text-[#767f6d] font-sans block">
                {certificate.signatureCoordinates}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#767f6d] border border-[#767f6d] px-3 py-1.5 text-[9px] tracking-[0.2em] uppercase font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>COLD-CHAIN SEAL VALIDATED</span>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#1a1817] border border-[#1a1817] px-4 py-2 hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PRINT ARCHIVAL CERTIFICATE</span>
          </button>

          <button
            onClick={onClose}
            className="bg-[#1a1817] text-[#fbf9f5] px-8 py-2.5 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none"
          >
            RETURN TO APOTHECARY
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BESPOKE_QUESTIONS } from '../data/botanicals';
import { Sparkles, Check, ArrowRight, ArrowLeft, Shield, Sliders } from 'lucide-react';
import { Formulation } from '../types';

interface BespokeLabProps {
  onAddBespokeToCart: (bespokeFormulation: Formulation, clientName: string, prescriptionCode: string) => void;
  currencySymbol: string;
}

export const BespokeLab: React.FC<BespokeLabProps> = ({
  onAddBespokeToCart,
  currencySymbol
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({
    'step-1': 'depleted',
    'step-2': 'metropolitan',
    'step-3': 'mitochondrial',
    'step-4': 'alpine-herbal'
  });
  const [clientName, setClientName] = useState('Dr. Clarisse Moreau');
  const [isCompounded, setIsCompounded] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const activeQuestion = BESPOKE_QUESTIONS[currentStep];

  const handleSelectOption = (stepId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [stepId]: optionId
    }));
  };

  const handleNext = () => {
    if (currentStep < BESPOKE_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompounded(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Generate dynamic bespoke prescription parameters
  const prescriptionCode = `AUR-BESP-${Math.abs(
    (selectedAnswers['step-1']?.length || 5) * 133 +
    (selectedAnswers['step-2']?.length || 7) * 77 +
    (selectedAnswers['step-3']?.length || 9) * 41
  ).toString().padStart(4, '0')}-CH`;

  const bespokePrice = 225;

  const handleCommission = () => {
    const bespokeFormulation: Formulation = {
      id: `bespoke-${Date.now()}`,
      sku: prescriptionCode,
      batchNumber: 'BESPOKE N° 01',
      name: `Bespoke Cellular Nectar (${selectedAnswers['step-1']?.toUpperCase() || 'EQUILIBRIUM'})`,
      scientificExtract: 'Personalized Multi-Alpine & Oleoresin Compounding',
      collection: 'Cellular Phyto-Elixirs',
      subtitle: `Custom calibrated formulation compounded specifically for ${clientName || 'Private Patron'}. Prepared at 0°C under sterile nitrogen blanketing.`,
      volume: '50 ML / 1.69 FL.OZ',
      price: bespokePrice,
      image: 'https://images.unsplash.com/photo-1608248597359-0098e9863c0a?auto=format&fit=crop&w=1000&q=85',
      origin: 'Atelier Botanique, Zurich & Valais Escarpment',
      altitude: 'Compounded at 2,420m Lab Elevation',
      harvestDate: 'Current Moon Phase (Immediate Extraction)',
      description: `Tailored restorative botanical serum addressing ${selectedAnswers['step-1']} cutaneous indications under ${selectedAnswers['step-2']} atmospheric conditions. Primary bio-target focused on ${selectedAnswers['step-3']} with ${selectedAnswers['step-4']} olfactory notes.`,
      tactileRitual: 'Dispense 4 drops onto damp skin morning and night following floral hydrosol misting.',
      sensoryNotes: {
        top: 'Bespoke Fresh Alpine Extracts',
        heart: 'Custom Cold-Pressed Oleoresins',
        base: 'Subterranean Amber & Rare Roots'
      },
      accords: [
        { label: 'Targeted Barrier Cohesion', percentage: 98 },
        { label: 'Cellular Vitality & Quenching', percentage: 95 },
        { label: 'Atmospheric Particulate Defense', percentage: 94 },
        { label: 'Personalized Neuro-Calming', percentage: 92 }
      ],
      phytochemicalFocus: ['Custom Supercritical CO2 Immortelle', 'Cold-Screw Nigella Sativa', 'Frankincense AKBA', 'Demeter Squalane'],
      inci: [
        'Helichrysum Italicum Cellular Water*',
        'Nigella Sativa Seed Oil*',
        'Boswellia Carterii Resin Extract',
        'Squalane',
        'Tocopherol'
      ],
      inStock: true,
      batchRemaining: 1,
      totalBatchSize: 1
    };

    onAddBespokeToCart(bespokeFormulation, clientName || 'Private Patron', prescriptionCode);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
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
                  CLINICAL APOTHECARY CONSULTATION
                </span>
                <span className="text-[#827e79]">•</span>
                <span className="text-[9px] tracking-[0.2em] text-[#c5a880] uppercase font-semibold">
                  BESPOKE COMPOUNDING DIVISION
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal tracking-tight">
                The Bespoke Formulation Atelier
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4a4643] max-w-2xl font-light">
                Complete a rigorous 4-stage phytotherapeutic evaluation to compound a unique fluid flask tailored to your skin biome, atmospheric altitude, and cellular repair requirements.
              </p>
            </div>

            {/* Step Progress Pill */}
            <div className="text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block">
                DIAGNOSTIC CADENCE
              </span>
              <span className="font-serif text-2xl text-[#1a1817]">
                {isCompounded ? 'CALIBRATION COMPLETE' : `STAGE ${currentStep + 1} OF ${BESPOKE_QUESTIONS.length}`}
              </span>
            </div>
          </div>
        </div>

        {!isCompounded ? (
          /* Step-by-Step Diagnostic Consultation */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Progress & Question Intro (Col 1-4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-[#f4efeb] border border-[#e7e1d8]">
                <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block mb-2">
                  CONSULTATION PROTOCOL
                </span>
                <h3 className="font-serif text-2xl text-[#1a1817] font-normal">
                  {activeQuestion.title}
                </h3>
                <p className="text-xs text-[#4a4643] mt-2 leading-relaxed">
                  {activeQuestion.subtitle}
                </p>

                {/* Progress Indicators */}
                <div className="mt-8 space-y-3 pt-6 border-t border-[#e7e1d8]">
                  {BESPOKE_QUESTIONS.map((q, idx) => (
                    <div
                      key={q.id}
                      onClick={() => setCurrentStep(idx)}
                      className={`cursor-pointer flex items-center justify-between text-xs py-1.5 transition-colors ${
                        idx === currentStep
                          ? 'text-[#1a1817] font-semibold'
                          : idx < currentStep
                          ? 'text-[#767f6d]'
                          : 'text-[#827e79]'
                      }`}
                    >
                      <span className="tracking-[0.15em] uppercase text-[10px]">
                        0{idx + 1}. {q.title.split(' ')[0]}
                      </span>
                      {selectedAnswers[q.id] && (
                        <Check className="w-3.5 h-3.5 text-[#767f6d]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Note */}
              <div className="text-[11px] text-[#827e79] leading-relaxed p-4 border border-[#e7e1d8]">
                All bespoke compounds are prepared in small amber glass flacons sealed with natural pine rosin wax to preserve freshness for 12 months.
              </div>
            </div>

            {/* Right Column: Interactive Options Grid (Col 5-12) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[activeQuestion.id] === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => handleSelectOption(activeQuestion.id, option.id)}
                      className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between rounded-none ${
                        isSelected
                          ? 'bg-[#f4efeb] border-[#1a1817]'
                          : 'bg-[#fbf9f5] border-[#e7e1d8] hover:border-[#827e79]'
                      }`}
                    >
                      <div>
                        {/* Selector Mark */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold">
                            OPTION INDICATOR
                          </span>
                          <div
                            className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                              isSelected ? 'border-[#1a1817] bg-[#1a1817]' : 'border-[#e7e1d8]'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 text-[#fbf9f5]" />}
                          </div>
                        </div>

                        {/* Title & Scientific Term */}
                        <h4 className="font-serif text-xl text-[#1a1817] font-normal">
                          {option.title}
                        </h4>
                        <p className="text-[11px] font-serif italic text-[#767f6d] mt-1">
                          {option.scientificTerm}
                        </p>

                        {/* Description */}
                        <p className="text-xs text-[#4a4643] leading-relaxed mt-3">
                          {option.description}
                        </p>
                      </div>

                      {/* Phytochemicals Chips */}
                      <div className="mt-6 pt-4 border-t border-[#e7e1d8]">
                        <span className="text-[8px] tracking-[0.2em] text-[#827e79] uppercase block mb-1.5 font-medium">
                          CONSTITUENT TARGETS:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {option.phytochemicals.map((chem, i) => (
                            <span
                              key={i}
                              className="text-[9px] px-2 py-0.5 border border-[#e7e1d8] bg-[#fbf9f5] text-[#1a1817]"
                            >
                              {chem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="mt-10 pt-6 border-t border-[#e7e1d8] flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-3 border border-[#e7e1d8] ${
                    currentStep === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:border-[#1a1817] text-[#1a1817]'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>PREVIOUS STAGE</span>
                </button>

                <button
                  onClick={handleNext}
                  className="bg-[#1a1817] text-[#fbf9f5] hover:bg-[#767f6d] transition-colors duration-300 px-8 py-3 text-[10px] tracking-[0.22em] uppercase font-medium flex items-center gap-2 rounded-none"
                >
                  <span>
                    {currentStep === BESPOKE_QUESTIONS.length - 1
                      ? 'SYNTHESIZE COMPOUND PROFILE'
                      : 'NEXT DIAGNOSTIC STAGE'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Compounded Result & Personalized Bottle Label Preview */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-500">
            
            {/* Left: The Serialized Bespoke Pharmacopoeia Label (Col 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 bg-[#f4efeb] border-2 border-[#1a1817] relative shadow-xs">
                {/* Vintage Pharmacopoeia Header */}
                <div className="text-center border-b border-[#1a1817] pb-6 mb-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#827e79] block">
                    PHARMACOPOEA HELVETICA &bull; FORMULA PRIVATA
                  </span>
                  <h3 className="font-serif text-3xl text-[#1a1817] font-normal tracking-wide mt-2">
                    AURELIA BOTANICA
                  </h3>
                  <p className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase mt-1">
                    LABORATOIRE DE PHYTOCHIMIE CELLULAIRE
                  </p>
                </div>

                {/* Prescription Code & Personalization Plate */}
                <div className="space-y-4 border-b border-[#1a1817] pb-6 mb-6">
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                      PRESCRIPTION SERIAL:
                    </span>
                    <span className="font-mono text-sm text-[#1a1817] font-semibold tracking-wider">
                      {prescriptionCode}
                    </span>
                  </div>

                  {/* Editable Client Name */}
                  <div>
                    <label className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">
                      COMPOUNDED SPECIFICALLY FOR (NAME):
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="ENTER PATRON NAME..."
                      className="w-full apothecary-input py-1 text-base font-serif italic text-[#1a1817] focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-between items-baseline text-xs pt-1">
                    <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                      DISPENSING DATE:
                    </span>
                    <span className="text-xs text-[#1a1817] font-mono">
                      OCTOBER 2026 (MOON WAXING)
                    </span>
                  </div>
                </div>

                {/* Calculated Botanical Formulation Formula Ratios */}
                <div className="space-y-3 mb-6">
                  <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold block">
                    ACTIVE CELLULAR EXTRACTION RATIOS
                  </span>
                  <div className="space-y-2 text-xs font-sans">
                    <div className="flex justify-between border-b border-[#e7e1d8] pb-1">
                      <span>Alpine Immortelle Supercritical CO2 (Valais)</span>
                      <span className="font-mono font-medium">38.0%</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e7e1d8] pb-1">
                      <span>Boswellia Carterii Oleoresin AKBA (Dhofar)</span>
                      <span className="font-mono font-medium">26.5%</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e7e1d8] pb-1">
                      <span>Anatolian Cold-Pressed Nigella Sativa</span>
                      <span className="font-mono font-medium">21.5%</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span>Demeter-Certified Olive Squalane Mantle</span>
                      <span className="font-mono font-medium">14.0%</span>
                    </div>
                  </div>
                </div>

                {/* Seal & Certification Footer */}
                <div className="pt-6 border-t border-[#1a1817] flex items-center justify-between text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                  <span>SEAL: NITROGEN PACKED 0°C</span>
                  <span className="text-[#1a1817] font-semibold">100% UNADULTERATED</span>
                  <span>50 ML / 1.69 FL.OZ</span>
                </div>
              </div>

              <button
                onClick={() => setIsCompounded(false)}
                className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] hover:text-[#1a1817] flex items-center gap-1.5 transition-colors"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>RE-ADJUST DIAGNOSTIC PARAMETERS</span>
              </button>
            </div>

            {/* Right: Formulation Summary & Commission Action (Col 7-12) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[rgba(118,127,109,0.1)] border border-[#767f6d] text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold">
                    FORMULATION RATIFIED
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                    50 ML APOTHECARY FLUID FLASK
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1817] font-normal">
                  Individualized Cellular Nectar
                </h3>

                <p className="font-serif italic text-base text-[#767f6d]">
                  Prescribed for {clientName || 'Private Patron'} &bull; Serial N° {prescriptionCode}
                </p>

                <p className="text-sm text-[#4a4643] leading-relaxed font-light">
                  Your customized tincture balances cold-extracted high-altitude active polyphenols with deep lipid-barrier restoratives. Hand-blended under nitrogen blanketing by our master pharmacognocist in Zurich within 24 hours of commission.
                </p>

                {/* Accords Breakdown */}
                <div className="p-5 bg-[#f4efeb] border border-[#e7e1d8] space-y-3">
                  <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold block">
                    PROJECTED DERMAL RESPONSE MATRIX
                  </span>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[9px] text-[#827e79] uppercase block">BARRIER STABILIZATION</span>
                      <span className="font-serif text-lg text-[#1a1817]">98% Index</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#827e79] uppercase block">CELLULAR LONGEVITY</span>
                      <span className="font-serif text-lg text-[#1a1817]">95% Resonance</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#827e79] uppercase block">PARTICULATE SHIELD</span>
                      <span className="font-serif text-lg text-[#1a1817]">94% Efficacy</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-[#827e79] uppercase block">NEURO-CALM INDEX</span>
                      <span className="font-serif text-lg text-[#1a1817]">92% Accord</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#e7e1d8] pt-6 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block">
                      BESPOKE COMMISSION FEE
                    </span>
                    <span className="font-serif text-3xl text-[#1a1817]">
                      {currencySymbol}{bespokePrice}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-[0.18em] text-[#767f6d] uppercase font-semibold">
                    INCLUDES ARCHIVAL CALLIGRAPHY BOX
                  </span>
                </div>
              </div>

              {/* Commission Button */}
              <div className="pt-8">
                <button
                  onClick={handleCommission}
                  className="w-full bg-[#1a1817] text-[#fbf9f5] h-14 px-8 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-all duration-300 rounded-none flex items-center justify-center gap-2"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-[#dce6d0]" />
                      <span>BESPOKE FLACON ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#c5a880]" />
                      <span>COMMISSION BESPOKE FORMULATION &bull; {currencySymbol}{bespokePrice}</span>
                    </>
                  )}
                </button>

                <p className="mt-3 text-[10px] text-center tracking-[0.15em] text-[#827e79] uppercase">
                  DELIVERED IN SEALED OBSIDIAN GLASS WITH PERSONALIZED EMBOSSED MONOGRAM
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

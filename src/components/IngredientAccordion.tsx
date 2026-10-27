import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  label: string;
  scientificTerm: string;
  botanicalOrigin: string;
  sensorialDescription: string;
  molecularPathway: string;
  bioConcentration: string;
}

const DEFAULT_ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'accord-1',
    label: 'Alpine Immortelle Flower Matrix',
    scientificTerm: 'Helichrysum italicum subsp. serotinum (Italidiones I, II, III)',
    botanicalOrigin: 'Valais Escarpment, 2,420m Elevation (Wild Harvested)',
    sensorialDescription: 'Sun-warmed golden hay, subtle caramelized amber, and crystalline mountain air. Melts with immediate dry-oil tactile absorption without sheen.',
    molecularPathway: 'Inhibits micro-inflammatory 5-LOX cascades, stimulating fibroblast proliferation and type-I procollagen synthesis.',
    bioConcentration: '4.8% Active Terpene Fraction'
  },
  {
    id: 'accord-2',
    label: 'Dhofar Sacred Frankincense Oleoresin',
    scientificTerm: 'Boswellia carterii (Acetyl-11-Keto-Beta-Boswellic Acid / AKBA)',
    botanicalOrigin: 'Dhofar Mist Plateau, Southern Oman (Hand-Sorted Green Tears)',
    sensorialDescription: 'Ancient church incense, green balsam pine, and grounding liturgical smoke. Imparts velvety barrier cushioning and nocturnal serenity.',
    molecularPathway: 'Protects extracellular lipid matrices from diurnal oxidative degradation while signaling neuro-cutaneous parasympathetic calm.',
    bioConcentration: '14.2% AKBA standardized'
  },
  {
    id: 'accord-3',
    label: 'Anatolian Black Cumin Virgin Lipid',
    scientificTerm: 'Nigella sativa L. (Thymoquinone & Linoleic Acid Complex)',
    botanicalOrigin: 'Upper Anatolian Basin, Turkey (First Hydraulic Cold-Press)',
    sensorialDescription: 'Piquant cracked pepper, toasted walnut husks, and rich dark earth. Envelops the epidermis in silky non-comedogenic nutrition.',
    molecularPathway: 'Modulates cutaneous microbiome flora while suppressing sebum hyper-oxidation and follicular micro-irritation.',
    bioConcentration: '2.4% Thymoquinone by weight'
  },
  {
    id: 'accord-4',
    label: 'Glacial Marine Porous Silicates',
    scientificTerm: 'Colloidal Marine Argillite & Ocean Micro-Trace Matrix',
    botanicalOrigin: 'Bella Coola Coastal Fjord, British Columbia (Glacial Runoff)',
    sensorialDescription: 'Petrichor, rain-soaked granite boulders, and cooling coastal marine breeze. Leaves skin feeling weightlessly detoxified and purified.',
    molecularPathway: 'Electrostatically adsorbs cationic urban particulates and micro-combustion residues without stripping the stratum corneum.',
    bioConcentration: '60+ Ionic Trace Minerals'
  }
];

export const IngredientAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['accord-1']);

  const toggleItem = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full border-t border-[#e7e1d8]">
      {DEFAULT_ACCORDION_ITEMS.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="border-b border-[#e7e1d8] transition-colors">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full py-6 sm:py-8 flex items-center justify-between text-left group hover:bg-[#f4efeb]/40 px-2 sm:px-4 transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-serif text-xl sm:text-2xl text-[#1a1817] font-normal group-hover:text-[#767f6d] transition-colors">
                  {item.label}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] font-medium mt-1 sm:mt-0">
                  {item.bioConcentration}
                </span>
              </div>
              
              {/* Slender mechanical + / - indicator */}
              <span className="text-2xl sm:text-3xl font-light text-[#1a1817] group-hover:text-[#767f6d] transition-transform duration-200 select-none ml-4 font-mono">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Expansion: dual column scientific vs sensorial description */}
            {isOpen && (
              <div className="px-2 sm:px-4 pb-8 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-6 bg-[#f4efeb] border border-[#e7e1d8]">
                  {/* Column 1: Scientific Extract Terminology */}
                  <div className="space-y-4">
                    <div className="border-b border-[#e7e1d8] pb-2">
                      <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block">
                        CLINICAL TAXONOMY & EXTRACTION
                      </span>
                      <p className="font-serif italic text-base sm:text-lg text-[#1a1817] mt-1">
                        {item.scientificTerm}
                      </p>
                    </div>

                    <div className="text-[13px] text-[#4a4643] space-y-2">
                      <p>
                        <strong className="font-semibold text-[#1a1817] uppercase text-[10px] tracking-[0.18em] block mb-1">
                          Provenance Coordinates:
                        </strong>
                        {item.botanicalOrigin}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#1a1817] uppercase text-[10px] tracking-[0.18em] block mb-1">
                          Molecular Pathway:
                        </strong>
                        {item.molecularPathway}
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Sensorial & Olfactory Experience */}
                  <div className="space-y-4 md:border-l md:border-[#e7e1d8] md:pl-8">
                    <div className="border-b border-[#e7e1d8] pb-2">
                      <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase font-semibold block">
                        SENSORIAL EXPERIENCE & TEXTURE
                      </span>
                      <p className="font-serif text-base sm:text-lg text-[#1a1817] mt-1">
                        Olfactory Profile & Dermal Accord
                      </p>
                    </div>

                    <div className="text-[13px] text-[#4a4643] space-y-2">
                      <p className="italic leading-relaxed text-[#1a1817]">
                        "{item.sensorialDescription}"
                      </p>
                      <div className="pt-2 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#767f6d]" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79]">
                          100% Unadulterated Wild Raw Botanical
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

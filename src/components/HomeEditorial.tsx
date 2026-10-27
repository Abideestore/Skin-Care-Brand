import React from 'react';
import { Formulation } from '../types';
import { HeroEditorial } from './HeroEditorial';
import { ProductCard } from './ProductCard';
import { IngredientAccordion } from './IngredientAccordion';
import { EDITORIAL_ARTICLES } from '../data/botanicals';
import { ArrowRight, Sparkles, Shield, Compass, Mountain, CheckCircle2 } from 'lucide-react';

interface HomeEditorialProps {
  formulations: Formulation[];
  onSelectFormulation: (formulation: Formulation) => void;
  onQuickAdd: (formulation: Formulation) => void;
  onNavigate: (screen: 'home' | 'dispensary' | 'lab' | 'herbarium' | 'provenance' | 'gazette') => void;
  currencySymbol: string;
}

export const HomeEditorial: React.FC<HomeEditorialProps> = ({
  formulations,
  onSelectFormulation,
  onQuickAdd,
  onNavigate,
  currencySymbol
}) => {
  const featured = formulations[0];
  const highlightedCollection = formulations.slice(0, 3);

  return (
    <div className="w-full bg-[#fbf9f5]">
      {/* 1. Monumental Hero Editorial Section */}
      <HeroEditorial
        featuredFormulation={featured}
        onExploreCatalog={() => onNavigate('dispensary')}
        onOpenDossier={onSelectFormulation}
        onOpenLab={() => onNavigate('lab')}
        currencySymbol={currencySymbol}
      />

      {/* 2. Core Formulations Highlight (The Dispensary Repertory) */}
      <section className="py-20 md:py-28 max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 border-b border-[#e7e1d8]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold">
                CURATED DISPENSARY REPERTORY
              </span>
              <span className="text-[#827e79]">•</span>
              <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                HARVEST SERIES 2026
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal tracking-tight">
              Finite Alpine Formulations
            </h2>
          </div>

          <button
            onClick={() => onNavigate('dispensary')}
            className="text-[10px] tracking-[0.22em] uppercase text-[#1a1817] font-medium border-b border-[#1a1817] pb-1 hover:text-[#767f6d] hover:border-[#767f6d] transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>VIEW ALL DISPENSARY FLACONS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Keystone Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {highlightedCollection.map((item) => (
            <ProductCard
              key={item.id}
              formulation={item}
              onSelect={onSelectFormulation}
              onQuickAdd={onQuickAdd}
              currencySymbol={currencySymbol}
            />
          ))}
        </div>
      </section>

      {/* 3. Asymmetric Editorial Intermission: Botanical Rigor & Pure Solvents */}
      <section className="py-20 md:py-28 max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 border-b border-[#e7e1d8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-[#f4efeb] border border-[#e7e1d8] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=85"
                alt="Artisanal copper alembic distillation and botanical flora"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-[#fbf9f5]/95 p-4 border border-[#e7e1d8] max-w-xs text-xs">
                <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block mb-1">
                  COPPER ALEMBIC APPARATUS
                </span>
                <p className="font-serif italic text-sm text-[#1a1817]">
                  "Distillation temperature strictly maintained below 38°C to avert terpene evaporation."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#f4efeb] border border-[#e7e1d8] text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold">
                LABORATORY MANIFESTO
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#767f6d] uppercase font-medium">
                SWISS BIO-ALPS INITIATIVE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal leading-tight">
              Cold Extraction Without Synthetic Carriers.
            </h2>

            <p className="text-base text-[#4a4643] leading-relaxed font-light">
              Conventional cosmetic manufacture subjects fragile flora to aggressive thermal treatment and solvent petroleum washes. At Aurelia Botanica, we deploy cryogenic fracturing and supercritical CO2 extraction to retrieve complete secondary metabolite fractions intact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-[#f4efeb] border border-[#e7e1d8]">
                <span className="font-serif text-2xl text-[#1a1817] font-normal block mb-1">
                  0.00%
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block mb-1 font-semibold">
                  SYNTHETIC EMULSIFIERS
                </span>
                <p className="text-xs text-[#4a4643]">
                  Zero polysorbates, silicones, or microplastic viscosity agents.
                </p>
              </div>

              <div className="p-5 bg-[#f4efeb] border border-[#e7e1d8]">
                <span className="font-serif text-2xl text-[#1a1817] font-normal block mb-1">
                  2,420M
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block mb-1 font-semibold">
                  MEDIAN HARVEST ALTITUDE
                </span>
                <p className="text-xs text-[#4a4643]">
                  Alpine UV stress stimulates 4x cellular antioxidant polyphenols.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('herbarium')}
                className="bg-[#1a1817] text-[#fbf9f5] px-8 py-4 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none"
              >
                STUDY THE HERBARIUM MONOGRAPHS
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Botanical Formula Accords & Ingredient Accordions (Design System Requirement) */}
      <section className="py-20 md:py-28 max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 border-b border-[#e7e1d8]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block mb-2">
            CONSTITUENT ACCORDS & SENSORIAL INQUIRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal tracking-tight">
            Botanical Accords & Taxonomy
          </h2>
          <p className="mt-3 text-sm text-[#4a4643] font-light">
            Toggle our signature raw botanical matrices to examine clinical phytochemistry alongside olfactory and sensory profiles.
          </p>
        </div>

        <IngredientAccordion />
      </section>

      {/* 5. Bespoke Laboratory Banner Invitation */}
      <section className="py-20 md:py-28 bg-[#f4efeb] border-b border-[#e7e1d8]">
        <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="p-8 sm:p-14 border border-[#1a1817] bg-[#fbf9f5] flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c5a880]" />
                <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase font-semibold">
                  PRIVATE ATELIER SERVICE
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1a1817] font-normal leading-snug">
                Commission an Individualized Botanical Formulation
              </h3>
              <p className="text-sm text-[#4a4643] leading-relaxed font-light">
                No two skin biomes share the exact same lipid profile or environmental exposure. Through our 4-step diagnostic protocol, our chemists compound a personalized fluid flask labeled with your patron inscription.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('lab')}
                className="bg-[#1a1817] text-[#fbf9f5] px-8 py-4 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none text-center shadow-xs"
              >
                ENTER BESPOKE ATELIER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Editorial Gazette Articles */}
      <section className="py-20 md:py-28 max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-baseline justify-between mb-16 border-b border-[#e7e1d8] pb-6">
          <div>
            <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block mb-1">
              THE BOTANICAL GAZETTE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1817] font-normal">
              Essays from the Alpine Laboratory
            </h2>
          </div>
          <span className="text-[10px] tracking-[0.2em] text-[#827e79] uppercase hidden sm:block">
            VOL. IV &bull; AUTUMN EQUINOX
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EDITORIAL_ARTICLES.map((art) => (
            <article key={art.id} className="group border border-[#e7e1d8] p-6 bg-[#fbf9f5] flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] bg-[#f4efeb] overflow-hidden mb-6">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-[#fbf9f5]/90 px-2 py-1 text-[8px] tracking-[0.2em] uppercase font-semibold text-[#1a1817]">
                    {art.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#767f6d] uppercase font-semibold mb-2">
                  <span>{art.readTime}</span>
                  <span>&bull;</span>
                  <span>{art.author}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1a1817] font-normal leading-snug group-hover:text-[#767f6d] transition-colors">
                  {art.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#4a4643] leading-relaxed font-light">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e7e1d8] flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#1a1817] group-hover:text-[#767f6d] flex items-center gap-1.5 font-medium">
                  <span>READ ARCHIVAL ESSAY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

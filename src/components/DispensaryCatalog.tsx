import React, { useState, useMemo } from 'react';
import { Formulation } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, RefreshCcw } from 'lucide-react';

interface DispensaryCatalogProps {
  formulations: Formulation[];
  onSelectFormulation: (formulation: Formulation) => void;
  onQuickAdd: (formulation: Formulation) => void;
  currencySymbol: string;
}

const CATEGORIES = [
  'ALL FORMULATIONS',
  'Cellular Phyto-Elixirs',
  'Rare Resins & Balms',
  'Cold-Pressed Lipids',
  'Fermented Floral Waters',
  'Aromatic Essences'
] as const;

export const DispensaryCatalog: React.FC<DispensaryCatalogProps> = ({
  formulations,
  onSelectFormulation,
  onQuickAdd,
  currencySymbol
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL FORMULATIONS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'availability'>('featured');

  const filteredFormulations = useMemo(() => {
    return formulations
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'ALL FORMULATIONS' || item.collection === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.scientificExtract.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.batchNumber.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'availability') return b.batchRemaining - a.batchRemaining;
        return 0; // featured default
      });
  }, [formulations, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen py-12 md:py-20">
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        
        {/* Editorial Section Header */}
        <div className="border-b border-[#e7e1d8] pb-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold">
                  DISPENSARY COMPENDIUM
                </span>
                <span className="text-[#827e79] text-xs">•</span>
                <span className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase">
                  ACTIVE BATCHES: AUTUMN 2026
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1817] font-normal tracking-tight">
                Curated Botanical Formulations
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4a4643] max-w-2xl font-light">
                Each formulation represents an individual extraction run, numbered and compounded in finite quantities to ensure absolute terpene preservation and secondary metabolite concentration.
              </p>
            </div>

            {/* Quick Summary Pill */}
            <div className="text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] block">
                CATALOG INVENTORY
              </span>
              <span className="font-serif text-2xl text-[#1a1817]">
                {filteredFormulations.length} of {formulations.length} Formulations
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="space-y-8 mb-12">
          
          {/* Top Row: Baseline Search Input & Sort Selector */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
            
            {/* Single Baseline Border Form Input (Strictly following specs) */}
            <div className="relative flex-1 max-w-md">
              <div className="flex items-center border-b border-[#e7e1d8] focus-within:border-[#1a1817] transition-colors py-2">
                <Search className="w-4 h-4 text-[#827e79] mr-3 stroke-[1.5]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH BY BOTANICAL EXTRACT, BATCH, OR AFFINITY..."
                  className="w-full bg-transparent border-none text-xs tracking-[0.18em] uppercase text-[#1a1817] placeholder:text-[#827e79] focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[10px] tracking-[0.15em] text-[#827e79] hover:text-[#1a1817] uppercase ml-2"
                  >
                    CLEAR
                  </button>
                )}
              </div>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center space-x-3 text-xs">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                SORT ARCHIVE:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-b border-[#e7e1d8] py-1.5 px-2 text-[10px] tracking-[0.2em] uppercase text-[#1a1817] focus:outline-none focus:border-[#1a1817] rounded-none cursor-pointer"
              >
                <option value="featured">CANONICAL ORDER</option>
                <option value="price-asc">PRICE: ASCENDING</option>
                <option value="price-desc">PRICE: DESCENDING</option>
                <option value="availability">BATCH AVAILABILITY</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Category Chips / Badges strictly per spec:
              Sharp rectangles with 1px borders, padding 6px 12px, typography label-caps-sm,
              Muted Olive version: Tinted background (rgba(118, 127, 109, 0.1)) with #767F6D border and text */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[9px] tracking-[0.25em] uppercase font-semibold transition-all duration-200 rounded-none border ${
                    isActive
                      ? 'bg-[rgba(118,127,109,0.1)] border-[#767f6d] text-[#767f6d]'
                      : 'bg-transparent border-[#e7e1d8] text-[#4a4643] hover:border-[#1a1817] hover:text-[#1a1817]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredFormulations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredFormulations.map((formulation) => (
              <ProductCard
                key={formulation.id}
                formulation={formulation}
                onSelect={onSelectFormulation}
                onQuickAdd={onQuickAdd}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-[#e7e1d8] bg-[#f4efeb] p-8">
            <h3 className="font-serif text-2xl text-[#1a1817] font-normal mb-2">
              No Botanicals Match Your Query
            </h3>
            <p className="text-sm text-[#4a4643] max-w-md mx-auto mb-6">
              No archived or active serial numbers correspond to "{searchQuery}". You may reset filters or request bespoke compounding.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL FORMULATIONS');
              }}
              className="inline-flex items-center gap-2 border border-[#1a1817] px-6 py-3 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-colors"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>RESET CATALOG FILTERS</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

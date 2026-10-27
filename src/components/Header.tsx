import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Compass, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeScreen: string;
  setActiveScreen: (screen: 'home' | 'dispensary' | 'lab' | 'herbarium' | 'provenance' | 'gazette') => void;
  cartCount: number;
  openCart: () => void;
  currency: string;
  setCurrency: (c: string) => void;
  openSearchModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  cartCount,
  openCart,
  currency,
  setCurrency,
  openSearchModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  interface NavItem {
    id: 'home' | 'dispensary' | 'lab' | 'herbarium' | 'provenance' | 'gazette';
    label: string;
    highlight?: boolean;
  }

  const navItems: NavItem[] = [
    { id: 'home', label: 'DISPENSARY' },
    { id: 'dispensary', label: 'FORMULATIONS' },
    { id: 'lab', label: 'BESPOKE LAB', highlight: true },
    { id: 'herbarium', label: 'HERBARIUM' },
    { id: 'provenance', label: 'PROVENANCE ARCHIVE' },
  ];

  const handleNavClick = (id: 'home' | 'dispensary' | 'lab' | 'herbarium' | 'provenance' | 'gazette') => {
    setActiveScreen(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e7e1d8] transition-all">
      <div className="max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1a1817] hover:text-[#767f6d] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Left Nav (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                  activeScreen === item.id
                    ? 'text-[#1a1817] font-semibold'
                    : 'text-[#4a4643] hover:text-[#1a1817]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {item.highlight && <Sparkles className="w-3 h-3 text-[#c5a880]" />}
                  {item.label}
                </span>
                {activeScreen === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1a1817]" />
                )}
              </button>
            ))}
          </nav>

          {/* Center Brand */}
          <div className="text-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.14em] text-[#1a1817] font-normal leading-none hover:opacity-90 transition-opacity">
              AURELIA BOTANICA
            </h1>
            <p className="text-[9px] tracking-[0.28em] text-[#827e79] uppercase mt-1 font-medium">
              LABORATOIRE BOTANIQUE &bull; SUISSE
            </p>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Currency Selector */}
            <div className="hidden sm:flex items-center space-x-1 text-[11px] tracking-[0.15em] text-[#827e79]">
              {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-1.5 py-0.5 transition-colors uppercase ${
                    currency === curr ? 'text-[#1a1817] font-semibold' : 'hover:text-[#1a1817]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => {
                if (openSearchModal) openSearchModal();
                else handleNavClick('dispensary');
              }}
              className="p-2 text-[#4a4643] hover:text-[#1a1817] transition-colors"
              title="Search Dispensary Formulations"
              aria-label="Search dispensary"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="group flex items-center space-x-2 py-2 px-3 border border-[#1a1817] hover:bg-[#1a1817] transition-all duration-300 rounded-none text-[#1a1817] hover:text-[#fbf9f5]"
              aria-label={`View apothecary bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                BAG ({cartCount})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e7e1d8] bg-[#fbf9f5] px-6 py-8 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2 text-xs tracking-[0.22em] uppercase flex items-center justify-between border-b border-[#e7e1d8]/50 ${
                  activeScreen === item.id ? 'text-[#1a1817] font-bold' : 'text-[#4a4643]'
                }`}
              >
                <span>{item.label}</span>
                <Compass className="w-4 h-4 text-[#827e79]" />
              </button>
            ))}

            <div className="pt-4 flex items-center justify-between text-xs tracking-[0.2em] text-[#827e79]">
              <span>CURRENCY:</span>
              <div className="flex space-x-3">
                {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`uppercase font-medium ${
                      currency === curr ? 'text-[#1a1817] underline' : ''
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[10px] tracking-[0.18em] text-[#827e79] uppercase">
              ARCHIVAL APOTHECARY • COLD EXTRACTION 2026
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

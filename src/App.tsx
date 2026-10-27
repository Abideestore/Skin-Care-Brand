/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FORMULATIONS } from './data/botanicals';
import { Formulation, CartItem, CertificateData } from './types';
import { MarqueeNotice } from './components/MarqueeNotice';
import { Header } from './components/Header';
import { HomeEditorial } from './components/HomeEditorial';
import { DispensaryCatalog } from './components/DispensaryCatalog';
import { ProductDossier } from './components/ProductDossier';
import { BespokeLab } from './components/BespokeLab';
import { HerbariumArchive } from './components/HerbariumArchive';
import { ProvenanceArchive } from './components/ProvenanceArchive';
import { CartDrawer } from './components/CartDrawer';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'dispensary' | 'dossier' | 'lab' | 'herbarium' | 'provenance'>('home');
  const [selectedFormulation, setSelectedFormulation] = useState<Formulation>(FORMULATIONS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      formulation: FORMULATIONS[0],
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [completedCertificate, setCompletedCertificate] = useState<CertificateData | null>(null);

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };

  const currencySymbol = currencySymbols[currency];

  const handleSelectFormulation = (formulation: Formulation) => {
    setSelectedFormulation(formulation);
    setActiveScreen('dossier');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickAdd = (formulation: Formulation) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.formulation.id === formulation.id);
      if (existing) {
        return prev.map((item) =>
          item.formulation.id === formulation.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { formulation, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleAddToCart = (formulation: Formulation, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.formulation.id === formulation.id);
      if (existing) {
        return prev.map((item) =>
          item.formulation.id === formulation.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { formulation, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleAddBespokeToCart = (
    bespokeFormulation: Formulation,
    clientName: string,
    prescriptionCode: string
  ) => {
    const newItem: CartItem = {
      formulation: bespokeFormulation,
      quantity: 1,
      isBespoke: true,
      bespokeDetails: {
        clientName,
        prescriptionCode,
        targetAccord: 'Personalized Alpine Equilibrium'
      }
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.formulation.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.formulation.id !== id));
  };

  const handleSelectFromHerbarium = (formulationId: string) => {
    const target = FORMULATIONS.find((f) => f.id === formulationId) || FORMULATIONS[0];
    handleSelectFormulation(target);
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a]">
      {/* Archival Marquee Bulletin */}
      <MarqueeNotice />

      {/* Main Editorial Header */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={(screen) => {
          setActiveScreen(screen as any);
        }}
        cartCount={cartTotalCount}
        openCart={() => setIsCartOpen(true)}
        currency={currency}
        setCurrency={(c) => setCurrency(c as any)}
        openSearchModal={() => {
          setActiveScreen('dispensary');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Screen Routing */}
      <main className="flex-1">
        {activeScreen === 'home' && (
          <HomeEditorial
            formulations={FORMULATIONS}
            onSelectFormulation={handleSelectFormulation}
            onQuickAdd={handleQuickAdd}
            onNavigate={(screen) => {
              setActiveScreen(screen as any);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currencySymbol={currencySymbol}
          />
        )}

        {activeScreen === 'dispensary' && (
          <DispensaryCatalog
            formulations={FORMULATIONS}
            onSelectFormulation={handleSelectFormulation}
            onQuickAdd={handleQuickAdd}
            currencySymbol={currencySymbol}
          />
        )}

        {activeScreen === 'dossier' && (
          <ProductDossier
            formulation={selectedFormulation}
            onBack={() => {
              setActiveScreen('dispensary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
            currencySymbol={currencySymbol}
          />
        )}

        {activeScreen === 'lab' && (
          <BespokeLab
            onAddBespokeToCart={handleAddBespokeToCart}
            currencySymbol={currencySymbol}
          />
        )}

        {activeScreen === 'herbarium' && (
          <HerbariumArchive
            onSelectFormulationFromHerbarium={handleSelectFromHerbarium}
          />
        )}

        {activeScreen === 'provenance' && (
          <ProvenanceArchive
            onSelectFormulation={handleSelectFormulation}
          />
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        currencySymbol={currencySymbol}
        onCompleteOrder={(cert) => setCompletedCertificate(cert)}
      />

      {/* Serialized Certificate of Provenance Modal */}
      <CertificateModal
        certificate={completedCertificate}
        onClose={() => setCompletedCertificate(null)}
      />

      {/* Archival Editorial Footer */}
      <Footer
        onNavigate={(screen) => {
          setActiveScreen(screen as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { CartItem, CertificateData } from '../types';
import { COMPLIMENTARY_SAMPLES } from '../data/botanicals';
import { X, Trash2, Plus, Minus, ShieldCheck, Sparkles, Check, Package, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  currencySymbol: string;
  onCompleteOrder: (certificate: CertificateData) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  currencySymbol,
  onCompleteOrder
}) => {
  const [selectedSamples, setSelectedSamples] = useState<string[]>(['s-01', 's-03']);
  const [isGiftPackaging, setIsGiftPackaging] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [recipientName, setRecipientName] = useState('Lady Clarisse Moreau');
  const [shippingAddress, setShippingAddress] = useState('74 Rue de la Paix, 75002 Paris');
  const [postalCity, setPostalCity] = useState('Paris, France');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.formulation.price * item.quantity,
    0
  );
  const packagingFee = isGiftPackaging ? 0 : 0; // Complimentary luxury packaging
  const total = subtotal + packagingFee;

  const toggleSample = (sampleId: string) => {
    if (selectedSamples.includes(sampleId)) {
      setSelectedSamples(selectedSamples.filter((id) => id !== sampleId));
    } else {
      if (selectedSamples.length < 2) {
        setSelectedSamples([...selectedSamples, sampleId]);
      } else {
        setSelectedSamples([selectedSamples[1], sampleId]);
      }
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const certificate: CertificateData = {
      certificateId: `AUR-CERT-${Math.floor(100000 + Math.random() * 900000)}`,
      batchNumber: cartItems[0]?.formulation.batchNumber || 'BATCH 049-C',
      clientName: recipientName || 'Private Patron',
      date: 'OCTOBER 2026',
      formulationNames: cartItems.map((item) => item.formulation.name),
      totalVolume: `${cartItems.length * 50} ML REFINED CELLULAR FLUID`,
      purityIndex: '99.98% BOTANICAL PHYTOSANITARY PURITY',
      leadBotanist: 'Dr. Evelyn Vane-Chantelle, Ph.D.',
      signatureCoordinates: 'Valais Escarpment Laboratory, 2,420m'
    };

    onCompleteOrder(certificate);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#1a1817]/40 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-[#fbf9f5] border-l border-[#e7e1d8] flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e7e1d8] flex items-center justify-between">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block">
                APOTHECARY DISPATCH MANIFEST
              </span>
              <h3 className="font-serif text-2xl text-[#1a1817] font-normal mt-0.5">
                Your Botanical Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#4a4643] hover:text-[#1a1817] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {!isCheckingOut ? (
              <>
                {/* Cart Items List */}
                {cartItems.length > 0 ? (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.formulation.id}
                        className="p-4 bg-[#f4efeb] border border-[#e7e1d8] flex gap-4 transition-all"
                      >
                        {/* Thumbnail */}
                        <div className="w-18 h-22 bg-[#efeeea] border border-[#e7e1d8] shrink-0 overflow-hidden">
                          <img
                            src={item.formulation.image}
                            alt={item.formulation.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <span className="text-[8px] tracking-[0.2em] uppercase text-[#767f6d] font-semibold">
                                {item.formulation.batchNumber}
                              </span>
                              <button
                                onClick={() => onRemoveItem(item.formulation.id)}
                                className="text-[#827e79] hover:text-[#ba1a1a] p-1 transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <h4 className="font-serif text-base text-[#1a1817] font-normal leading-snug">
                              {item.formulation.name}
                            </h4>

                            {item.isBespoke && (
                              <p className="text-[10px] tracking-[0.15em] text-[#c5a880] uppercase font-medium mt-0.5">
                                BESPOKE FOR: {item.bespokeDetails?.clientName}
                              </p>
                            )}

                            <span className="text-[10px] text-[#827e79] uppercase block mt-1">
                              {item.formulation.volume}
                            </span>
                          </div>

                          {/* Controls & Unit Price */}
                          <div className="flex items-center justify-between pt-2 border-t border-[#e7e1d8]">
                            <div className="flex items-center border border-[#1a1817] bg-[#fbf9f5]">
                              <button
                                onClick={() => onUpdateQuantity(item.formulation.id, item.quantity - 1)}
                                className="px-2 py-1 text-[#1a1817] hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-colors"
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="px-3 text-xs font-mono font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.formulation.id, item.quantity + 1)}
                                className="px-2 py-1 text-[#1a1817] hover:bg-[#1a1817] hover:text-[#fbf9f5] transition-colors"
                              >
                                <Plus className="w-2.5 h-2.5" />
                              </button>
                            </div>

                            <span className="font-serif text-sm text-[#1a1817]">
                              {currencySymbol}{item.formulation.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-center border border-[#e7e1d8] bg-[#f4efeb] p-6">
                    <p className="font-serif text-lg text-[#1a1817]">
                      Your Apothecary Bag is Empty
                    </p>
                    <p className="text-xs text-[#827e79] mt-2">
                      Select active botanicals from our catalog or commission an individualized blend in our Bespoke Lab.
                    </p>
                  </div>
                )}

                {/* Complimentary Miniature Vials Selector (Max 2) */}
                {cartItems.length > 0 && (
                  <div className="p-5 border border-[#e7e1d8] bg-[#fbf9f5] space-y-3">
                    <div className="flex items-center justify-between border-b border-[#e7e1d8] pb-2">
                      <span className="text-[9px] tracking-[0.25em] text-[#1a1817] uppercase font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                        COMPLIMENTARY DISCOVERY VIALS (SELECT UP TO 2)
                      </span>
                      <span className="text-[9px] font-mono text-[#767f6d]">
                        {selectedSamples.length}/2 CHOSEN
                      </span>
                    </div>

                    <div className="space-y-2">
                      {COMPLIMENTARY_SAMPLES.map((sample) => {
                        const isChosen = selectedSamples.includes(sample.id);
                        return (
                          <div
                            key={sample.id}
                            onClick={() => toggleSample(sample.id)}
                            className={`p-2.5 border cursor-pointer transition-all flex items-center justify-between ${
                              isChosen
                                ? 'bg-[#f4efeb] border-[#1a1817]'
                                : 'bg-transparent border-[#e7e1d8] hover:border-[#827e79]'
                            }`}
                          >
                            <div>
                              <p className="text-xs font-serif text-[#1a1817]">{sample.name}</p>
                              <p className="text-[10px] text-[#827e79]">{sample.description}</p>
                            </div>
                            <div
                              className={`w-4 h-4 border flex items-center justify-center shrink-0 ml-3 ${
                                isChosen ? 'bg-[#1a1817] border-[#1a1817]' : 'border-[#e7e1d8]'
                              }`}
                            >
                              {isChosen && <Check className="w-3 h-3 text-[#fbf9f5]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Archival Packaging Option */}
                {cartItems.length > 0 && (
                  <div
                    onClick={() => setIsGiftPackaging(!isGiftPackaging)}
                    className="p-4 border border-[#e7e1d8] bg-[#f4efeb] flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Package className="w-4 h-4 text-[#767f6d]" />
                      <div>
                        <p className="text-xs font-serif text-[#1a1817]">
                          Archival Presentation Box & Wax Seal
                        </p>
                        <p className="text-[10px] text-[#827e79]">
                          Individually wax-sealed with signed chemist certificate (Included)
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-4 h-4 border flex items-center justify-center ${
                        isGiftPackaging ? 'bg-[#1a1817] border-[#1a1817]' : 'border-[#e7e1d8]'
                      }`}
                    >
                      {isGiftPackaging && <Check className="w-3 h-3 text-[#fbf9f5]" />}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Checkout Details Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-6 animate-in fade-in duration-300">
                <div className="border-b border-[#e7e1d8] pb-3">
                  <span className="text-[9px] tracking-[0.25em] text-[#767f6d] uppercase font-semibold block">
                    DESTINATION & CERTIFICATION
                  </span>
                  <h4 className="font-serif text-xl text-[#1a1817] mt-1">
                    Apothecary Dispatch Coordinates
                  </h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">
                      PATRON / RECIPIENT NAME:
                    </label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full apothecary-input py-1 text-sm font-serif text-[#1a1817]"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">
                      DELIVERY ADDRESS:
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      className="w-full apothecary-input py-1 text-sm font-sans text-[#1a1817]"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] tracking-[0.2em] text-[#827e79] uppercase block mb-1">
                      CITY, POSTAL CODE & COUNTRY:
                    </label>
                    <input
                      type="text"
                      required
                      value={postalCity}
                      onChange={(e) => setPostalCity(e.target.value)}
                      className="w-full apothecary-input py-1 text-sm font-sans text-[#1a1817]"
                    />
                  </div>

                  <div className="p-4 bg-[#f4efeb] border border-[#e7e1d8] space-y-2 mt-4">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#767f6d] font-semibold block">
                      COLD-CHAIN DISPATCH NOTICE
                    </span>
                    <p className="text-[11px] text-[#4a4643] leading-relaxed">
                      Flasks are packed in temperature-stabilized insulated cork casings. Dispatched directly from our Valais laboratory via expedited courier.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-[10px] tracking-[0.2em] uppercase text-[#827e79] hover:text-[#1a1817]"
                  >
                    BACK TO BAG
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1a1817] text-[#fbf9f5] px-8 py-3.5 text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-[#767f6d] transition-colors rounded-none"
                  >
                    AUTHORIZE & GENERATE CERTIFICATE
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer Subtotal & Action Bar */}
          {!isCheckingOut && (
            <div className="p-6 border-t border-[#e7e1d8] bg-[#f4efeb] space-y-4">
              <div className="space-y-1.5 text-xs font-sans">
                <div className="flex justify-between text-[#827e79]">
                  <span className="uppercase tracking-[0.15em] text-[10px]">SUBTOTAL:</span>
                  <span className="font-mono text-[#1a1817]">{currencySymbol}{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#827e79]">
                  <span className="uppercase tracking-[0.15em] text-[10px]">COLD-CHAIN DISPATCH:</span>
                  <span className="text-[#586150] font-semibold">COMPLIMENTARY</span>
                </div>
                <div className="pt-2 border-t border-[#e7e1d8] flex justify-between text-sm sm:text-base font-serif text-[#1a1817]">
                  <span className="font-normal">TOTAL APOTHECARY ASSESSMENT:</span>
                  <span className="font-medium">{currencySymbol}{total}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                disabled={cartItems.length === 0}
                className={`w-full py-4 text-[11px] tracking-[0.22em] uppercase font-medium rounded-none transition-all duration-300 flex items-center justify-center gap-2 ${
                  cartItems.length === 0
                    ? 'bg-[#e7e1d8] text-[#827e79] cursor-not-allowed'
                    : 'bg-[#1a1817] text-[#fbf9f5] hover:bg-[#767f6d]'
                }`}
              >
                <span>PROCEED TO DISPATCH MANIFEST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[9px] tracking-[0.18em] text-[#827e79] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#767f6d]" />
                <span>INCLUDES OFFICIAL SEAL & CERTIFICATE OF PROVENANCE</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

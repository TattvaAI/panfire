import React, { useState, useEffect } from 'react';
import { X, Check, Plus, Minus } from 'lucide-react';
import { MenuItem, Variant, Addon } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface VariantSelectorModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VariantSelectorModal: React.FC<VariantSelectorModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !item) return null;

  const addItem = useCartStore((state) => state.addItem);

  const initialVariant = item.variants && item.variants.length > 0 ? item.variants[0] : undefined;
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(initialVariant);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [instructions, setInstructions] = useState<string>('');

  // Sync state whenever selected item changes
  useEffect(() => {
    setSelectedVariant(item?.variants && item.variants.length > 0 ? item.variants[0] : undefined);
    setSelectedAddons([]);
    setQuantity(1);
    setInstructions('');
  }, [item?.id]);

  const basePrice = selectedVariant ? selectedVariant.price : (item.basePrice || item.price);
  const addonsPrice = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = basePrice + addonsPrice;
  const finalPrice = unitPrice * quantity;

  const toggleAddon = (addon: Addon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleAddToCart = () => {
    addItem(item, selectedVariant, selectedAddons, quantity, instructions);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white text-stone-900 w-full max-w-lg rounded-2xl border border-stone-200 modal-shadow flex flex-col max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-start justify-between gap-4 bg-white">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`w-3.5 h-3.5 border-[1.5px] flex items-center justify-center shrink-0 ${
                  (selectedVariant ? selectedVariant.isVeg : item.isVeg)
                    ? 'border-emerald-600'
                    : 'border-[#C8371A]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    (selectedVariant ? selectedVariant.isVeg : item.isVeg)
                      ? 'bg-emerald-600'
                      : 'bg-[#C8371A]'
                  }`}
                />
              </span>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                {item.category}
              </span>
            </div>
            <h3 className="font-sans text-xl font-bold text-stone-900">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-stone-500 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Options */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 bg-stone-50/50">
          {/* Variant Selection (Size or Protein Style: Veg, Chicken, Prawn) */}
          {item.variants && item.variants.length > 0 && (
            <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Select Protein / Preparation Option
                </label>
                <span className="text-[11px] text-stone-400 font-semibold">1 Option Required</span>
              </div>

              <div className="space-y-2">
                {item.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  const priceDiff = v.price - (item.basePrice || item.price);
                  return (
                    <label
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#1E2D24] bg-emerald-50/40 text-stone-900 font-semibold'
                          : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-[#1E2D24] bg-[#1E2D24] text-white'
                              : 'border-stone-300'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        {/* Dietary dot next to variant if specified */}
                        {v.isVeg !== undefined && (
                          <span
                            className={`w-3 h-3 border-[1.5px] flex items-center justify-center shrink-0 ${
                              v.isVeg ? 'border-emerald-600' : 'border-[#C8371A]'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                v.isVeg ? 'bg-emerald-600' : 'bg-[#C8371A]'
                              }`}
                            />
                          </span>
                        )}
                        <span className="text-sm font-bold">{v.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-stone-900">
                          ₹{v.price}
                        </span>
                        {priceDiff > 0 && (
                          <span className="text-[11px] text-stone-400 block font-mono">
                            (+₹{priceDiff})
                          </span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional Add-Ons */}
          {item.addons && item.addons.length > 0 && (
            <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Recommended Add-Ons
              </label>

              <div className="space-y-2">
                {item.addons.map((a) => {
                  const isChecked = selectedAddons.some((addon) => addon.id === a.id);
                  return (
                    <label
                      key={a.id}
                      onClick={() => toggleAddon(a)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#1E2D24] bg-emerald-50/40 text-stone-900 font-semibold'
                          : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked
                              ? 'border-[#1E2D24] bg-[#1E2D24] text-white'
                              : 'border-stone-300'
                          }`}
                        >
                          {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="text-sm">{a.name}</span>
                      </div>
                      <span className="text-sm font-bold text-stone-900">
                        +₹{a.price}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Kitchen Special Notes */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1.5">
              Special Instructions (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Extra hot drizzle, sauce on side..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24]"
            />
          </div>
        </div>

        {/* Footer: Quantity Stepper & Add to Order */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-white flex items-center justify-between gap-4">
          <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 flex items-center justify-center hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-sm px-3 min-w-[28px] text-center text-stone-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 px-5 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-sm font-bold flex items-center justify-between shadow-xs transition-all cursor-pointer"
          >
            <span>Add to Cart</span>
            <span>₹{finalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VariantSelectorModal;

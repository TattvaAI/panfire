import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
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

  const basePrice = selectedVariant ? selectedVariant.price : item.price;
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
    // Deliver required payload: { itemId, itemName, selectedVariant, basePrice, finalPrice: unitPrice, quantity }
    addItem(item, selectedVariant, selectedAddons, quantity, instructions);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161412]/80 backdrop-blur-none">
      <div 
        className="bg-[#F3ECDD] text-[#161412] w-full max-w-lg border-[1.5px] border-[#161412] hard-shadow-lg flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b-[1.5px] border-[#161412] flex items-start justify-between gap-4 bg-[#F3ECDD]">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              {/* Veg / Non-Veg Indicator */}
              <span
                className={`w-3.5 h-3.5 border-[1.5px] flex items-center justify-center ${
                  item.isVeg ? 'border-[#2E7D32]' : 'border-[#C8371A]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.isVeg ? 'bg-[#2E7D32]' : 'bg-[#C8371A]'
                  }`}
                />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#8A8378]">
                Customise Preparation
              </span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#161412] tracking-tight">
              {item.name}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#8A8378] mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border-[1.5px] border-[#161412] bg-[#F3ECDD] hover:bg-[#161412] hover:text-[#F3ECDD] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Customization Options */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm bg-[#F3ECDD]">
          
          {/* Required Variant / Choice Selection */}
          {item.variants && item.variants.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1 border-b-[1.5px] border-[#161412]">
                <span className="font-headline text-sm font-bold uppercase text-[#161412] tracking-wide">
                  {item.category === 'Pizzas' ? 'Select Crust / Size' : 'Select Protein / Preparation'}
                </span>
                <span className="font-mono text-[10px] uppercase font-bold text-[#C8371A]">
                  [REQUIRED]
                </span>
              </div>

              <div className="space-y-2">
                {item.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`flex items-center justify-between p-3 border-[1.5px] border-[#161412] cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#161412] text-[#F3ECDD]'
                          : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Radio box */}
                        <div
                          className={`w-4 h-4 border-[1.5px] flex items-center justify-center ${
                            isSelected ? 'border-[#F3ECDD] bg-[#C8371A]' : 'border-[#161412] bg-[#F3ECDD]'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 bg-[#F3ECDD]" />}
                        </div>
                        <span className="font-sans font-semibold text-sm">{v.name}</span>
                      </div>
                      <span className="font-mono font-bold text-sm">
                        ₹{v.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional Add-ons */}
          {item.addons && item.addons.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1 border-b-[1.5px] border-[#161412]">
                <span className="font-headline text-sm font-bold uppercase text-[#161412] tracking-wide">
                  Optional Add-ons
                </span>
                <span className="font-mono text-[10px] uppercase font-bold text-[#8A8378]">
                  [OPTIONAL]
                </span>
              </div>

              <div className="space-y-2">
                {item.addons.map((a) => {
                  const isChecked = selectedAddons.some((addon) => addon.id === a.id);
                  return (
                    <div
                      key={a.id}
                      onClick={() => toggleAddon(a)}
                      className={`flex items-center justify-between p-3 border-[1.5px] border-[#161412] cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#161412]/5 border-[#161412]'
                          : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 border-[1.5px] border-[#161412] flex items-center justify-center ${
                            isChecked ? 'bg-[#161412] text-[#F3ECDD]' : 'bg-[#F3ECDD]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-sans text-sm font-medium">{a.name}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#161412]">+₹{a.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Preparation Instructions */}
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-[#161412] block">
              Kitchen Note (Optional)
            </span>
            <input
              type="text"
              placeholder="e.g. Extra crispy crust, less chilli, no spring onion..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full p-3 bg-transparent border-[1.5px] border-[#161412] font-sans text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
            />
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-[#F3ECDD] border-t-[1.5px] border-[#161412] flex items-center justify-between gap-4">
          
          {/* Quantity Controls */}
          <div className="flex items-center border-[1.5px] border-[#161412] bg-[#F3ECDD] font-mono text-sm font-bold">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-9 h-9 flex items-center justify-center hover:bg-[#161412] hover:text-[#F3ECDD] disabled:opacity-30 transition-colors cursor-pointer"
            >
              -
            </button>
            <span className="w-8 text-center select-none">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center hover:bg-[#161412] hover:text-[#F3ECDD] transition-colors cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2.5 px-4 bg-[#C8371A] hover:bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm hover:hard-shadow text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center justify-between transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            <span>Add To Order</span>
            <span>₹{finalPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default VariantSelectorModal;

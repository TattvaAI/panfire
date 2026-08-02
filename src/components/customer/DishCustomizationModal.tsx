import React, { useState } from 'react';
import { X, Plus, Minus, Check, Flame, ShoppingBag, Sparkles } from 'lucide-react';
import { MenuItem, Variant, Addon } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface DishCustomizationModalProps {
  item: MenuItem;
  onClose: () => void;
}

export const DishCustomizationModal: React.FC<DishCustomizationModalProps> = ({ item, onClose }) => {
  const addItem = useCartStore((state) => state.addItem);

  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    item.variants && item.variants.length > 0 ? item.variants[0] : undefined
  );
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [itemNotes, setItemNotes] = useState<string>('');

  const basePrice = selectedVariant ? selectedVariant.price : item.price;
  const addonsPrice = selectedAddons.reduce((acc, a) => acc + a.price, 0);
  const unitPrice = basePrice + addonsPrice;
  const totalItemPrice = unitPrice * quantity;

  const toggleAddon = (addon: Addon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleAddToCart = () => {
    addItem(item, selectedVariant, selectedAddons, quantity, itemNotes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F4] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#2D4A2D]/15 relative flex flex-col max-h-[90vh]">
        
        {/* Header Image */}
        <div className="relative h-56 w-full bg-[#EAF1E8] shrink-0">
          <img
            src={item.imagePath}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F4] via-transparent to-black/40" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D4A2D] shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#466B45] text-white px-2.5 py-0.5 rounded-full inline-block mb-1">
              {item.category}
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#2D4A2D]">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          <p className="text-[#5C6B5E] leading-relaxed">
            {item.description}
          </p>

          {/* Variants Selection */}
          {item.variants && item.variants.length > 0 && (
            <div>
              <h4 className="font-bold text-[#2D4A2D] mb-2 uppercase text-xs tracking-wider">
                Select Crust / Portion Size
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {item.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`p-3 rounded-2xl border text-left flex justify-between items-center transition-all ${
                      selectedVariant?.id === v.id
                        ? 'border-[#466B45] bg-[#EAF1E8] text-[#2D4A2D] font-bold shadow-xs'
                        : 'border-gray-200 bg-white text-[#5C6B5E] hover:bg-gray-50'
                    }`}
                  >
                    <span>{v.name}</span>
                    <span className="text-[#466B45]">₹{v.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Addons Selection */}
          {item.addons && item.addons.length > 0 && (
            <div>
              <h4 className="font-bold text-[#2D4A2D] mb-2 uppercase text-xs tracking-wider">
                Extra Toppings & Add-ons
              </h4>
              <div className="space-y-2">
                {item.addons.map((addon) => {
                  const isChecked = selectedAddons.some((a) => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-[#466B45] bg-[#EAF1E8] text-[#2D4A2D]'
                          : 'border-gray-200 bg-white text-[#5C6B5E] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked ? 'bg-[#466B45] border-[#466B45] text-white' : 'border-gray-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="font-medium">{addon.name}</span>
                      </div>
                      <span className="font-semibold text-[#466B45]">+₹{addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <h4 className="font-bold text-[#2D4A2D] mb-1.5 uppercase text-xs tracking-wider">
              Special Instructions
            </h4>
            <textarea
              rows={2}
              placeholder="e.g. Less spicy, extra sauce on side..."
              value={itemNotes}
              onChange={(e) => setItemNotes(e.target.value)}
              className="w-full p-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between gap-4">
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-[#F9F8F3] px-3 py-2 rounded-2xl border border-gray-200">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-full bg-white text-[#2D4A2D] flex items-center justify-center hover:bg-gray-100 shadow-xs"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-sm text-[#2D4A2D] w-4 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-full bg-white text-[#2D4A2D] flex items-center justify-center hover:bg-gray-100 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 btn-flavoria-green justify-between py-3 text-sm"
          >
            <span>Add Item</span>
            <span className="font-bold">₹{totalItemPrice}</span>
          </button>

        </div>

      </div>
    </div>
  );
};

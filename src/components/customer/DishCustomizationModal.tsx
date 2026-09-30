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
  const [imgError, setImgError] = useState<boolean>(false);

  const initials = item.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const hasValidImage = Boolean(item.imagePath && item.imagePath.trim() !== '' && !imgError);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0E1015] w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-white/[0.12] relative flex flex-col max-h-[90vh]">
        
        {/* Header Image or Haute Monogram Header */}
        <div className="relative h-60 w-full bg-[#181B24] shrink-0 overflow-hidden">
          {hasValidImage ? (
            <>
              <img
                src={item.imagePath}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-[#0E1015]/40 to-black/70" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1B1E28] via-[#101217] to-[#08090B] flex flex-col items-center justify-center p-6 text-center border-b border-white/[0.08]">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <span className="font-serif-luxury text-2xl font-semibold text-[#E5C07B]">
                  {initials || 'PF'}
                </span>
              </div>
              <span className="font-mono-luxury text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/80">
                Atelier Creation • PanFire
              </span>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/10 transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 z-10">
            <span className="text-[10px] font-mono-luxury uppercase tracking-[0.18em] text-[#E5C07B] inline-block mb-1">
              {item.category}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          <p className="text-slate-400 leading-relaxed font-light">
            {item.description}
          </p>

          {/* Variants Selection */}
          {item.variants && item.variants.length > 0 && (
            <div>
              <h4 className="font-mono-luxury text-xs uppercase tracking-wider text-[#E5C07B] mb-2.5">
                Select Portion or Size
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {item.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`p-3.5 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                      selectedVariant?.id === v.id
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-medium shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                        : 'border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="font-mono-luxury text-xs">{v.name}</span>
                    <span className="font-mono-luxury text-xs text-[#E5C07B]">₹{v.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Dietary / Culinary Notes */}
          <div>
            <h4 className="font-mono-luxury text-xs uppercase tracking-wider text-slate-300 mb-2">
              Culinary & Sommelier Instructions
            </h4>
            <textarea
              rows={2}
              placeholder="Allergies, spice preference, or specific preparation instructions for the chef..."
              value={itemNotes}
              onChange={(e) => setItemNotes(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 font-mono-luxury transition-colors"
            />
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-5 bg-[#12141A] border-t border-white/[0.08] flex items-center justify-between gap-4">
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-white/[0.04] px-3 py-2 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] disabled:opacity-30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono-luxury font-semibold text-white w-4 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className="btn-luxury-gold flex-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider cursor-pointer"
          >
            <span>Add to Order</span>
            <span className="font-mono-luxury font-bold">₹{totalItemPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DishCustomizationModal;

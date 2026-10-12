import React, { useState } from 'react';
import { Plus, Minus, Utensils } from 'lucide-react';
import { MenuItem, Variant } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface MenuItemCardProps {
  item: MenuItem;
  onCustomise?: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  onSelect?: (item: MenuItem) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (itemId: string) => void;
  onHoverItem?: (item: MenuItem, e: React.MouseEvent) => void;
  onMouseMoveItem?: (e: React.MouseEvent) => void;
  onLeaveItem?: () => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onCustomise,
  onQuickAdd,
  onSelect,
}) => {
  const [imgError, setImgError] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);

  const cartItems = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const addItem = useCartStore((state) => state.addItem);

  const hasVariants = Boolean(item.hasVariants && item.variants && item.variants.length > 0);
  const activeVariant: Variant | undefined = hasVariants && item.variants
    ? item.variants[Math.min(selectedVariantIndex, item.variants.length - 1)]
    : undefined;

  const currentPrice = activeVariant ? activeVariant.price : (item.basePrice || item.price);
  const currentImage = (activeVariant && activeVariant.imagePath) ? activeVariant.imagePath : item.imagePath;

  // Check if active variant (or direct item) is in cart
  const currentCartItem = hasVariants
    ? cartItems.find((ci) => ci.menuItem.id === item.id && ci.selectedVariant?.id === activeVariant?.id)
    : cartItems.find((ci) => ci.menuItem.id === item.id);

  const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;
  const hasValidImage = Boolean(currentImage && currentImage.trim() !== '' && !imgError);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasVariants && activeVariant) {
      addItem(item, activeVariant);
    } else {
      onQuickAdd(item);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentCartItem) {
      updateQuantity(currentCartItem.cartId, currentCartItem.quantity + 1);
    } else {
      handleAdd(e);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentCartItem) {
      updateQuantity(currentCartItem.cartId, currentCartItem.quantity - 1);
    }
  };

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(item);
    } else if (onCustomise) {
      onCustomise(item);
    }
  };

  // Visual transformation based on crust/size selection
  const getImageScaleClass = () => {
    if (!activeVariant) return 'group-hover:scale-105';
    if (activeVariant.crustType === 'woodfired-small') return 'scale-90';
    if (activeVariant.crustType === 'woodfired-large') return 'scale-105';
    if (activeVariant.crustType === 'thin-crust') return 'scale-98 contrast-105';
    return '';
  };

  const getVariantBadgeText = () => {
    if (!activeVariant) return null;
    if (activeVariant.crustType === 'woodfired-small') return '8″ Wood-Fired';
    if (activeVariant.crustType === 'woodfired-large') return '12″ Wood-Fired';
    if (activeVariant.crustType === 'thin-crust') return 'Thin Crust (8 Slices)';
    return activeVariant.name;
  };

  return (
    <article
      onClick={handleCardClick}
      className="bg-white rounded-2xl border border-stone-200/90 card-shadow card-shadow-hover p-3.5 sm:p-4 flex flex-col sm:flex-row gap-3.5 sm:gap-5 sm:items-center justify-between cursor-pointer transition-all"
    >
      <div className="flex gap-3.5 sm:gap-5 items-start sm:items-center flex-1 min-w-0">
        {/* 1. Left: Food Photo (Changes dynamically with selected crust/size) */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/70 shrink-0 relative">
          {hasValidImage ? (
            <img
              key={currentImage}
              src={currentImage}
              alt={item.name}
              className={`w-full h-full object-cover transition-all duration-300 ${getImageScaleClass()}`}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 bg-stone-50">
              <Utensils className="w-6 h-6 stroke-[1.5]" />
            </div>
          )}

          {/* Dietary Indicator */}
          <div className="absolute top-1.5 left-1.5 bg-white/95 rounded-sm p-0.5 shadow-xs">
            <span
              className={`w-3 h-3 border-[1.5px] flex items-center justify-center ${
                item.isVeg ? 'border-emerald-600' : 'border-[#C8371A]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  item.isVeg ? 'bg-emerald-600' : 'bg-[#C8371A]'
                }`}
              />
            </span>
          </div>

          {/* Dynamic Crust / Size Badge */}
          {getVariantBadgeText() && (
            <div className="absolute bottom-1 right-1 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-tight">
              {getVariantBadgeText()}
            </div>
          )}
        </div>

        {/* 2. Middle: Title, Description, Crust Options, Price */}
        <div className="flex-1 min-w-0 pr-1 sm:pr-2">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-sans text-sm sm:text-base font-bold text-stone-900 line-clamp-2">
              {item.name}
            </h3>
          </div>

          {item.description && (
            <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mb-2 font-normal">
              {item.description}
            </p>
          )}

          {/* Crust / Size Options (Direct Selection on Card) */}
          {hasVariants && item.variants && (
            <div
              className="flex flex-wrap items-center gap-1.5 my-2"
              onClick={(e) => e.stopPropagation()}
            >
              {item.variants.map((v, idx) => {
                const isSelected = selectedVariantIndex === idx;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#1E2D24] text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>{v.name}</span>
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isSelected ? 'text-emerald-300' : 'text-stone-500'
                      }`}
                    >
                      ₹{v.price}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Price & Active Selection Indicator */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-sans font-bold text-sm sm:text-base text-stone-900">
              ₹{currentPrice}
            </span>
            {hasVariants && (
              <span className="text-[11px] font-medium text-stone-500">
                • {activeVariant?.name || 'Selected Size'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. Right: Action Controls (Add Button or Stepper + Customise Link) */}
      <div
        className="shrink-0 flex sm:flex-col items-center justify-between sm:justify-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {currentQuantity > 0 ? (
          <div className="flex items-center bg-[#1E2D24] text-white rounded-xl shadow-xs overflow-hidden">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center hover:bg-black/20 transition-colors cursor-pointer"
              title="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-sans text-xs sm:text-sm font-bold px-2 min-w-[24px] text-center">
              {currentQuantity}
            </span>
            <button
              onClick={handleIncrement}
              className="w-8 h-8 flex items-center justify-center hover:bg-black/20 transition-colors cursor-pointer"
              title="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="px-4 sm:px-5 py-2 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        )}

        {/* Customise / Addons Trigger */}
        {((item.addons && item.addons.length > 0) || hasVariants) && (
          <button
            type="button"
            onClick={() => onCustomise && onCustomise(item)}
            className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 hover:underline transition-colors cursor-pointer"
          >
            Customise
          </button>
        )}
      </div>
    </article>
  );
};

export default MenuItemCard;

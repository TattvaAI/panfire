import React, { useState } from 'react';
import { Plus, Minus, Utensils } from 'lucide-react';
import { MenuItem } from '../../types';
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
  const cartItems = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // Check if item without variants is in cart
  const directCartItem = !item.hasVariants
    ? cartItems.find((ci) => ci.menuItem.id === item.id)
    : undefined;

  const currentQuantity = directCartItem ? directCartItem.quantity : 0;
  const hasValidImage = Boolean(item.imagePath && item.imagePath.trim() !== '' && !imgError);

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.hasVariants) {
      if (onCustomise) onCustomise(item);
    } else {
      onQuickAdd(item);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (directCartItem) {
      updateQuantity(directCartItem.cartId, directCartItem.quantity + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (directCartItem) {
      updateQuantity(directCartItem.cartId, directCartItem.quantity - 1);
    }
  };

  return (
    <article
      onClick={handleAction}
      className="bg-white rounded-2xl border border-stone-200/90 card-shadow card-shadow-hover p-3.5 sm:p-4 flex gap-3.5 sm:gap-5 items-center justify-between cursor-pointer transition-all"
    >
      {/* 1. Left: Food Photo (Clean Rounded Visual) */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/70 shrink-0 relative">
        {hasValidImage ? (
          <img
            src={item.imagePath}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 bg-stone-50">
            <Utensils className="w-6 h-6 stroke-[1.5]" />
          </div>
        )}

        {/* Subtle Veg / Non-Veg Dot on Image Corner for Quick Glance */}
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
      </div>

      {/* 2. Middle: Content, Dietary Tag, Title, Description, Price */}
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

        {/* Price & Variant Pill */}
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-sm sm:text-base text-stone-900">
            ₹{item.price}
          </span>
          {item.hasVariants && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
              Customisable
            </span>
          )}
        </div>
      </div>

      {/* 3. Right: Action Button or Stepper */}
      <div className="shrink-0 flex items-center" onClick={(e) => e.stopPropagation()}>
        {item.hasVariants ? (
          <button
            onClick={handleAction}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-emerald-50 hover:bg-emerald-100 text-[#1E2D24] border border-emerald-300 rounded-xl font-bold transition-all cursor-pointer flex flex-col items-center justify-center min-w-[76px] shadow-2xs"
            title="Customise dish options"
          >
            <span className="text-xs sm:text-sm flex items-center gap-1">
              <Plus className="w-3.5 h-3.5 text-emerald-700" />
              <span>Add</span>
            </span>
            <span className="text-[9px] text-emerald-700/80 font-semibold tracking-wide uppercase">
              Customise
            </span>
          </button>
        ) : currentQuantity > 0 ? (
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
            onClick={handleAction}
            className="px-4 sm:px-5 py-2 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        )}
      </div>
    </article>
  );
};

export default MenuItemCard;

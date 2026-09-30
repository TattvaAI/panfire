import React, { useState } from 'react';
import { MenuItem } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface MenuItemCardProps {
  item: MenuItem;
  onCustomise?: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  onHoverItem?: (item: MenuItem, e: React.MouseEvent) => void;
  onMouseMoveItem?: (e: React.MouseEvent) => void;
  onLeaveItem?: () => void;
  onSelect?: (item: MenuItem) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (itemId: string) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onCustomise,
  onQuickAdd,
  onHoverItem,
  onMouseMoveItem,
  onLeaveItem,
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
      else if (onSelect) onSelect(item);
    } else {
      if (onSelect && !onQuickAdd) {
        onSelect(item);
      } else {
        onQuickAdd(item);
      }
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
      className="py-4 sm:py-5 border-b-[1.5px] border-[#161412]/20 hover:border-[#161412] transition-colors group cursor-pointer relative"
      onMouseEnter={(e) => hasValidImage && onHoverItem?.(item, e)}
      onMouseMove={(e) => hasValidImage && onMouseMoveItem?.(e)}
      onMouseLeave={() => onLeaveItem?.()}
      onClick={handleAction}
    >
      <div className="flex items-baseline justify-between gap-3 sm:gap-4">
        
        {/* Left Side: Dietary Indicator + Dish Title */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
          {/* Strict Dietary Box/Dot Indicator: Green for Veg, Red for Non-Veg */}
          <span
            className={`w-3.5 h-3.5 shrink-0 border-[1.5px] flex items-center justify-center ${
              item.isVeg ? 'border-[#2E7D32]' : 'border-[#C8371A]'
            }`}
            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                item.isVeg ? 'bg-[#2E7D32]' : 'bg-[#C8371A]'
              }`}
            />
          </span>

          {/* Dish Title in Fraunces / Bold Serif */}
          <h4 className="font-headline text-lg sm:text-2xl font-bold tracking-tight text-[#161412] group-hover:text-[#C8371A] transition-colors truncate">
            {item.name}
          </h4>

          {/* House Essential Label */}
          {item.isBestseller && (
            <span className="hidden md:inline-block font-mono text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#161412] text-[#F3ECDD] shrink-0">
              Essential
            </span>
          )}

          {/* Chef Special Label */}
          {item.isChefSpecial && !item.isBestseller && (
            <span className="hidden md:inline-block font-mono text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#C8371A] text-[#F3ECDD] shrink-0">
              Chef Select
            </span>
          )}
        </div>

        {/* Typographic Dotted Leader (Extends across desktop widths) */}
        <div className="dotted-leader hidden sm:block" />

        {/* Right Side: JetBrains Mono Price + Add Action */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <span className="font-mono text-base sm:text-xl font-bold text-[#161412]">
            ₹{item.price}
          </span>

          {/* Direct Quantity Counter if already in cart */}
          {currentQuantity > 0 ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm font-mono text-xs font-bold"
            >
              <button
                onClick={handleDecrement}
                className="px-2 py-1 hover:bg-[#C8371A] transition-colors cursor-pointer"
                title="Decrease"
              >
                -
              </button>
              <span className="px-2 py-1 select-none min-w-[20px] text-center">
                {currentQuantity}
              </span>
              <button
                onClick={handleIncrement}
                className="px-2 py-1 hover:bg-[#C8371A] transition-colors cursor-pointer"
                title="Increase"
              >
                +
              </button>
            </div>
          ) : item.hasVariants ? (
            <button
              onClick={handleAction}
              className="px-2.5 py-1 sm:px-3 sm:py-1 bg-[#F3ECDD] hover:bg-[#161412] text-[#161412] hover:text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer shrink-0"
            >
              Customise +
            </button>
          ) : (
            <button
              onClick={handleAction}
              className="px-3 py-1 sm:px-3.5 sm:py-1 bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer shrink-0"
            >
              Add +
            </button>
          )}
        </div>
      </div>

      {/* Description / Ingredients Label Underneath & Mobile Thumbnail */}
      <div className="mt-1.5 flex items-start justify-between gap-3 pl-6 sm:pl-7">
        <p className="font-sans text-xs sm:text-sm text-[#8A8378] leading-relaxed max-w-2xl">
          {item.description}
          {item.hasVariants && item.variants && item.variants.length > 0 && (
            <span className="block mt-1 font-mono text-[11px] text-[#161412] font-semibold">
              Options: {item.variants.map((v) => v.name).join(' / ')}
            </span>
          )}
        </p>

        {/* Mobile touch thumbnail (hidden on desktop where hover reveal is used) */}
        {hasValidImage && (
          <div className="sm:hidden shrink-0 w-16 h-16 border-[1.5px] border-[#161412] overflow-hidden bg-[#161412]/5">
            <img
              src={item.imagePath}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItemCard;

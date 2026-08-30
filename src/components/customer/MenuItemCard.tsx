import React from 'react';
import { Plus, Heart, Star, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../../types';

interface MenuItemCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (itemId: string) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onSelect,
  onQuickAdd,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-white rounded-3xl p-4 sm:p-5 border border-[#2D4A2D]/10 shadow-xs hover:shadow-lg hover:border-[#466B45]/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between cursor-pointer"
    >
      {/* 1. Dish Image (Left) */}
      <div className="relative w-full sm:w-32 md:w-36 h-40 sm:h-32 md:h-36 shrink-0 rounded-2xl overflow-hidden bg-[#F2F7F1]">
        <img
          src={item.imagePath}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('classic-margherita')) {
              target.src = '/assets/pizza/classic-margherita.avif';
            }
          }}
        />

        {/* Veg/Non-Veg Badge & Chef Special */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          <span
            className={`w-4 h-4 rounded-md flex items-center justify-center bg-white/90 backdrop-blur-sm border shadow-xs ${
              item.isVeg ? 'border-emerald-600' : 'border-red-600'
            }`}
            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
              }`}
            />
          </span>

          {item.isChefSpecial && (
            <span className="bg-[#D97706] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Chef's Choice</span>
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        {onToggleWishlist && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(item.id);
            }}
            className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? 'bg-red-50 text-red-500 shadow-md scale-110'
                : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-500' : ''}`} />
          </button>
        )}

        {/* Spicy Indicator Overlay */}
        {item.spicyLevel && item.spicyLevel > 0 && (
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full text-[9px] font-semibold flex items-center gap-0.5">
            <Flame className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />
            <span>Spicy {item.spicyLevel > 1 ? `x${item.spicyLevel}` : ''}</span>
          </div>
        )}
      </div>

      {/* 2. Dish Details (Middle: Name -> Description -> Price) */}
      <div className="flex-1 min-w-0 w-full sm:w-auto flex flex-col justify-center">
        <div className="flex items-center gap-2 text-xs text-[#5C6B5E] mb-1">
          <span className="font-semibold uppercase tracking-wider text-[10px] text-[#466B45]">
            {item.category}
          </span>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
            <Star className="w-3 h-3 fill-amber-500" />
            <span>4.8</span>
          </div>
        </div>

        <h3 className="font-serif-luxury font-bold text-[#2D4A2D] text-lg sm:text-xl leading-snug group-hover:text-[#466B45] transition-colors">
          {item.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#5C6B5E] line-clamp-2 mt-1 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-2.5 flex items-center gap-2">
          <span className="font-serif-luxury font-bold text-lg sm:text-xl text-[#2D4A2D]">
            ₹{item.price}
          </span>
          {item.variants && item.variants.length > 0 && (
            <span className="text-[10px] font-medium text-[#5C6B5E] bg-[#F2F7F1] px-2 py-0.5 rounded-md border border-[#2D4A2D]/10">
              Customizable
            </span>
          )}
        </div>
      </div>

      {/* 3. Add to Cart Action (Right in the same row) */}
      <div className="shrink-0 w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (item.variants && item.variants.length > 0) {
              onSelect(item);
            } else {
              onQuickAdd(item);
            }
          }}
          className="w-full sm:w-auto bg-[#1D2B1E] hover:bg-[#466B45] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl shadow-sm hover:shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          title="Add to Cart"
        >
          <Plus className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

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
    <div className="group relative bg-white rounded-3xl p-4 border border-[#2D4A2D]/10 shadow-sm hover:shadow-xl hover:border-[#466B45]/30 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Media Image Container */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F2F7F1] mb-3 cursor-pointer" onClick={() => onSelect(item)}>
        <img
          src={item.imagePath}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges (Veg/Non-Veg & Chef Special) */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
          <span
            className={`w-5 h-5 rounded-md flex items-center justify-center bg-white/90 backdrop-blur-sm border shadow-xs ${
              item.isVeg ? 'border-emerald-600' : 'border-red-600'
            }`}
            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
              }`}
            />
          </span>

          {item.isChefSpecial && (
            <span className="bg-[#D97706] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3" />
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
            className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? 'bg-red-50 text-red-500 shadow-md scale-110'
                : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
          </button>
        )}

        {/* Spicy Indicator Overlay */}
        {item.spicyLevel && item.spicyLevel > 0 && (
          <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
            <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
            <span>Spicy {item.spicyLevel > 1 ? `x${item.spicyLevel}` : ''}</span>
          </div>
        )}
      </div>

      {/* Item Body Info */}
      <div className="flex-1 flex flex-col justify-between cursor-pointer" onClick={() => onSelect(item)}>
        <div>
          <div className="flex items-center justify-between text-xs text-[#5C6B5E] mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px] text-[#466B45]">
              {item.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span>4.8</span>
            </div>
          </div>

          <h3 className="font-serif-luxury font-bold text-[#2D4A2D] text-lg leading-snug group-hover:text-[#466B45] transition-colors line-clamp-1">
            {item.name}
          </h3>

          <p className="text-xs text-[#5C6B5E] line-clamp-2 mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom Price & Add Button */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#5C6B5E] block leading-none">Price</span>
            <span className="font-serif-luxury font-bold text-xl text-[#2D4A2D]">
              ₹{item.price}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(item);
            }}
            className="w-10 h-10 rounded-2xl bg-[#466B45] hover:bg-[#2D4A2D] text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
            title="Add to Cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
};

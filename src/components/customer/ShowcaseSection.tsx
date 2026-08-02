import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { INITIAL_MENU_ITEMS } from '../../data/menuCatalog';
import { MenuItem } from '../../types';
import { MenuItemCard } from './MenuItemCard';
import { useCartStore } from '../../store/useCartStore';

interface ShowcaseSectionProps {
  onSelectItem: (item: MenuItem) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (itemId: string) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  onSelectItem,
  wishlistIds = [],
  onToggleWishlist,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  // Filter Chef's Special or Bestseller items
  const specials = INITIAL_MENU_ITEMS.filter((item) => item.isChefSpecial).slice(0, 4);

  return (
    <section id="specials" className="py-16 bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1E8] text-[#2D4A2D] text-xs font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>POPULAR DISHES</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2D4A2D]">
              Our Chef's Special
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B5E] mt-1">
              Hand-selected signature creations crafted to perfection by our culinary masters
            </p>
          </div>

          <a
            href="#menu"
            className="mt-4 sm:mt-0 font-semibold text-sm text-[#466B45] hover:text-[#2D4A2D] flex items-center gap-1.5 transition-colors group"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onSelect={onSelectItem}
              onQuickAdd={(targetItem) => addItem(targetItem, undefined, [], 1)}
              isWishlisted={wishlistIds.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

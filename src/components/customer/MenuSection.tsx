import React, { useState, useMemo } from 'react';
import { Search, Filter, Flame, Leaf, Sparkles, SlidersHorizontal, Layers } from 'lucide-react';
import { INITIAL_MENU_ITEMS } from '../../data/menuCatalog';
import { MenuItem } from '../../types';
import { MenuItemCard } from './MenuItemCard';
import { useCartStore } from '../../store/useCartStore';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (itemId: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  wishlistIds = [],
  onToggleWishlist,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnlyFilter, setVegOnlyFilter] = useState<boolean>(false);
  const [chefSpecialOnly, setChefSpecialOnly] = useState<boolean>(false);

  const categories = [
    { id: 'ALL', label: 'All Wishes', icon: '✨' },
    { id: 'ITALIAN', label: 'Italian Wood-Fired', icon: '🍕' },
    { id: 'ASIAN', label: 'Asian Wok & Craft', icon: '🥢' },
    { id: 'PIZZA', label: 'Pizzas', icon: '🍕' },
    { id: 'DIM SUMS', label: 'Dim Sums', icon: '🥟' },
    { id: 'BAO', label: 'Baos', icon: '🥖' },
    { id: 'SUSHI', label: 'Sushi Rolls', icon: '🍣' },
    { id: 'PASTA', label: 'Pastas', icon: '🍝' },
    { id: 'BURGERS', label: 'Burgers', icon: '🍔' },
    { id: 'GARLIC BREAD', label: 'Garlic Bread', icon: '🧄' },
    { id: 'NOODLES', label: 'Noodles', icon: '🍜' },
    { id: 'APPETISERS', label: 'Appetisers', icon: '🥗' },
    { id: 'SALADS', label: 'Salads', icon: '🌿' },
    { id: 'SOUPS', label: 'Soups', icon: '🍲' },
  ];

  const filteredItems = useMemo(() => {
    return INITIAL_MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory === 'ITALIAN' && item.broadCategory !== 'ITALIAN') return false;
      if (selectedCategory === 'ASIAN' && item.broadCategory !== 'ASIAN') return false;
      if (
        selectedCategory !== 'ALL' &&
        selectedCategory !== 'ITALIAN' &&
        selectedCategory !== 'ASIAN'
      ) {
        const catUpper = item.category.toUpperCase();
        if (!catUpper.includes(selectedCategory.toUpperCase())) return false;
      }

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCategory = item.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCategory) return false;
      }

      // Veg filter
      if (vegOnlyFilter && !item.isVeg) return false;

      // Chef special filter
      if (chefSpecialOnly && !item.isChefSpecial) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, vegOnlyFilter, chefSpecialOnly]);

  return (
    <section id="menu" className="py-20 bg-[#F2F7F1]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1E8] text-[#2D4A2D] text-xs font-semibold mb-2">
            <Leaf className="w-4 h-4 text-[#466B45]" />
            <span>ARTISANAL CATALOG</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#2D4A2D]">
            Menu: What will you wish for?
          </h2>
          <p className="text-sm text-[#5C6B5E] mt-2">
            Select from our wood-fired Neapolitan oven, handmade Asian steamers, craft sushi counter & wok stations.
          </p>
        </div>

        {/* Search & Filter Utility Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#2D4A2D]/10 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#5C6B5E] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search pizza, dim sums, sushi, pasta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#F9F8F3] border border-[#2D4A2D]/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
            />
          </div>

          {/* Toggle Switches */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            
            {/* Veg Only Toggle */}
            <button
              onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
                vegOnlyFilter
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-[#F9F8F3] text-[#2D4A2D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Veg Only</span>
            </button>

            {/* Chef's Specials Toggle */}
            <button
              onClick={() => setChefSpecialOnly(!chefSpecialOnly)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all ${
                chefSpecialOnly
                  ? 'bg-[#D97706] text-white shadow-md'
                  : 'bg-[#F9F8F3] text-[#2D4A2D] hover:bg-[#FEF3C7]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef's Choice</span>
            </button>

          </div>
        </div>

        {/* Dakingo-style Category Selector Pill Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-6 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#2D4A2D] text-white shadow-lg scale-105'
                    : 'bg-white text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#2D4A2D]/20">
            <p className="text-lg font-bold text-[#2D4A2D]">No dishes found</p>
            <p className="text-xs text-[#5C6B5E] mt-1">Try resetting your search or filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
                setVegOnlyFilter(false);
                setChefSpecialOnly(false);
              }}
              className="mt-4 btn-flavoria-green text-xs px-4 py-2"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
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
        )}

      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { Search, Flame, Leaf, Sparkles, Star, Check } from 'lucide-react';
import { INITIAL_MENU_ITEMS } from '../../data/menuCatalog';
import { MenuItem, MainCategory } from '../../types';
import { MenuItemCard } from './MenuItemCard';
import { useCartStore } from '../../store/useCartStore';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (itemId: string) => void;
}

interface CategoryDef {
  id: MainCategory;
  label: string;
  icon: string;
  badge?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  wishlistIds = [],
  onToggleWishlist,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  // Exactly 6 primary categories, with Signature Dishes first!
  const MAIN_CATEGORIES: CategoryDef[] = [
    { id: 'SIGNATURE', label: 'Signature Dishes', icon: '⭐', badge: "Chef's Picks" },
    { id: 'MEXICAN', label: 'Mexican', icon: '🌮' },
    { id: 'ITALIAN', label: 'Italian', icon: '🍕' },
    { id: 'ASIAN', label: 'Asian', icon: '🥢' },
    { id: 'BEVERAGES', label: 'Beverages', icon: '🍹' },
    { id: 'DESSERTS', label: 'Desserts', icon: '🍨' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<MainCategory>('SIGNATURE');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnlyFilter, setVegOnlyFilter] = useState<boolean>(false);
  const [chefSpecialOnly, setChefSpecialOnly] = useState<boolean>(false);

  // Get available subcategories for current active main category
  const subcategories = useMemo(() => {
    const itemsInCat = INITIAL_MENU_ITEMS.filter((item) => item.mainCategory === selectedCategory);
    const setOfSubs = new Set<string>();
    itemsInCat.forEach((item) => setOfSubs.add(item.category));
    return ['ALL', ...Array.from(setOfSubs)];
  }, [selectedCategory]);

  const handleCategoryChange = (catId: MainCategory) => {
    setSelectedCategory(catId);
    setSelectedSubcategory('ALL');
  };

  const filteredItems = useMemo(() => {
    return INITIAL_MENU_ITEMS.filter((item) => {
      // 1. Primary Category Filter
      if (item.mainCategory !== selectedCategory) {
        return false;
      }

      // 2. Subcategory Filter
      if (selectedSubcategory !== 'ALL' && item.category !== selectedSubcategory) {
        return false;
      }

      // 3. Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchSub = item.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchSub) return false;
      }

      // 4. Veg filter
      if (vegOnlyFilter && !item.isVeg) return false;

      // 5. Chef special filter
      if (chefSpecialOnly && !item.isChefSpecial) return false;

      return true;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery, vegOnlyFilter, chefSpecialOnly]);

  const currentCatInfo = MAIN_CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#F2F7F1]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1E8] text-[#2D4A2D] text-xs font-semibold mb-3 border border-[#2D4A2D]/10 shadow-xs">
            <Leaf className="w-3.5 h-3.5 text-[#466B45]" />
            <span className="uppercase tracking-wider">CRAFT CULINARY CATALOG</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2D4A2D] tracking-tight">
            Explore Our Menu
          </h2>
          <p className="text-sm sm:text-base text-[#5C6B5E] mt-2.5 leading-relaxed">
            Organized across our 6 authentic culinary collections. Experience artisan wood-fired baking, Mexican sizzle, Asian wok mastery, chilled beverages, and handcrafted desserts.
          </p>
        </div>

        {/* 6 Primary Category Tabs (Pill Bar) */}
        <div className="mb-8">
          <div className="flex items-center justify-start md:justify-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
            {MAIN_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#2D4A2D] text-white shadow-lg scale-105 ring-2 ring-[#466B45]/40'
                      : 'bg-white text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10 shadow-xs'
                  }`}
                >
                  <span className="text-base sm:text-lg">{cat.icon}</span>
                  <span>{cat.label}</span>
                  {cat.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      isActive ? 'bg-[#D97706] text-white' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#2D4A2D]/10 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#5C6B5E] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder={`Search in ${currentCatInfo?.label || 'menu'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-[#F9F8F3] border border-[#2D4A2D]/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
            />
          </div>

          {/* Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            
            {/* Veg Only Toggle */}
            <button
              onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                vegOnlyFilter
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-[#F9F8F3] text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Veg Only</span>
            </button>

            {/* Chef's Specials Toggle */}
            <button
              onClick={() => setChefSpecialOnly(!chefSpecialOnly)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                chefSpecialOnly
                  ? 'bg-[#D97706] text-white shadow-md'
                  : 'bg-[#F9F8F3] text-[#2D4A2D] hover:bg-[#FEF3C7] border border-[#2D4A2D]/10'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Chef's Choice</span>
            </button>

          </div>
        </div>

        {/* Subcategory Secondary Filter Chips (if more than 1 subcategory exists) */}
        {subcategories.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
            <span className="text-xs font-semibold text-[#5C6B5E] shrink-0 mr-1">Filter:</span>
            {subcategories.map((sub) => {
              const isSubActive = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSubActive
                      ? 'bg-[#466B45] text-white shadow-xs'
                      : 'bg-white text-[#5C6B5E] hover:text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10'
                  }`}
                >
                  {sub === 'ALL' ? `All ${currentCatInfo?.label}` : sub}
                </button>
              );
            })}
          </div>
        )}

        {/* Menu Grid - Full-Size Standard Cards */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#2D4A2D]/20">
            <p className="text-lg font-bold text-[#2D4A2D]">No dishes found</p>
            <p className="text-xs text-[#5C6B5E] mt-1">Try adjusting your search query or reset filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubcategory('ALL');
                setVegOnlyFilter(false);
                setChefSpecialOnly(false);
              }}
              className="mt-4 btn-flavoria-green text-xs px-4 py-2 cursor-pointer"
            >
              Reset Filters
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

export default MenuSection;

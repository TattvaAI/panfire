import React, { useState, useMemo, useRef } from 'react';
import { Search, Sparkles, Filter } from 'lucide-react';
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
  badge?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  wishlistIds = [],
  onToggleWishlist,
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const dishListRef = useRef<HTMLDivElement>(null);

  // Primary categories in high-luxury phrasing
  const MAIN_CATEGORIES: CategoryDef[] = [
    { id: 'SIGNATURE', label: 'Grand Signatures', badge: 'Chef Special' },
    { id: 'ASIAN', label: 'Asian Mastery' },
    { id: 'ITALIAN', label: 'Italian Wood-Fired' },
    { id: 'MEXICAN', label: 'Mexican Sizzle' },
    { id: 'BEVERAGES', label: 'Private Reserve Beverages' },
    { id: 'DESSERTS', label: 'Artisanal Desserts' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<MainCategory>('SIGNATURE');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnlyFilter, setVegOnlyFilter] = useState<boolean>(false);
  const [chefSpecialOnly, setChefSpecialOnly] = useState<boolean>(false);

  // Subcategories for current main category
  const subcategories = useMemo(() => {
    const itemsInCat = INITIAL_MENU_ITEMS.filter((item) => item.mainCategory === selectedCategory);
    const setOfSubs = new Set<string>();
    itemsInCat.forEach((item) => setOfSubs.add(item.category));
    return ['ALL', ...Array.from(setOfSubs)];
  }, [selectedCategory]);

  const handleCategoryChange = (catId: MainCategory) => {
    setSelectedCategory(catId);
    setSelectedSubcategory('ALL');
    if (dishListRef.current) {
      dishListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubcategoryChange = (sub: string) => {
    setSelectedSubcategory(sub);
    if (dishListRef.current) {
      dishListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredItems = useMemo(() => {
    return INITIAL_MENU_ITEMS.filter((item) => {
      if (item.mainCategory !== selectedCategory) return false;
      if (selectedSubcategory !== 'ALL' && item.category !== selectedSubcategory) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchSub = item.category.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchSub) return false;
      }

      if (vegOnlyFilter && !item.isVeg) return false;
      if (chefSpecialOnly && !item.isChefSpecial) return false;

      return true;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery, vegOnlyFilter, chefSpecialOnly]);

  const currentCatInfo = MAIN_CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#08090B] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-white tracking-tight">
            The Tasting Menu & Culinary Catalog
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-light leading-relaxed">
            Every dish is an individual exploration of high-temperature wood fire, fresh hand-rolled dough, and heritage spices.
          </p>
        </div>

        {/* Main Grid: Left Column Category Rail, Right Column Scrollable Dishes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT PANE: Categories, Search, Filters */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            
            {/* Categories Navigation */}
            <div className="bg-[#0E1015]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/[0.08] shadow-2xl space-y-2">
              <div className="flex items-center justify-between px-2 text-[11px] font-mono-luxury uppercase tracking-[0.2em] text-[#E5C07B] mb-3">
                <span>Collections</span>
                <span className="text-slate-400">{INITIAL_MENU_ITEMS.length} Offerings</span>
              </div>
              
              <div className="space-y-1.5">
                {MAIN_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const catItemCount = INITIAL_MENU_ITEMS.filter((i) => i.mainCategory === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full px-4 py-3 rounded-xl text-xs font-mono-luxury uppercase tracking-wider transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                        isActive
                          ? 'bg-[#181B24] border-[#D4AF37]/50 text-white shadow-[0_0_15px_rgba(212,175,55,0.15)] font-semibold'
                          : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#D4AF37]' : 'bg-transparent'}`} />
                        <span>{cat.label}</span>
                      </div>
                      <span className={`text-[11px] px-2 py-0.5 rounded-md ${
                        isActive ? 'bg-[#D4AF37]/20 text-[#E5C07B]' : 'bg-white/[0.04] text-slate-400'
                      }`}>
                        {catItemCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search and Filters Box */}
            <div className="bg-[#0E1015]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/[0.08] shadow-2xl space-y-4">
              
              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder={`Search ${currentCatInfo?.label}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono-luxury focus:outline-none focus:border-[#D4AF37]/60 text-white placeholder-slate-500 transition-colors"
                />
              </div>

              {/* Filter Toggles */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono-luxury uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                    vegOnlyFilter
                      ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                      : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Vegetarian</span>
                </button>

                <button
                  onClick={() => setChefSpecialOnly(!chefSpecialOnly)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono-luxury uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                    chefSpecialOnly
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#E5C07B]'
                      : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Chef Choice</span>
                </button>
              </div>

              {/* Subcategories Filter Chips */}
              {subcategories.length > 2 && (
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono-luxury uppercase tracking-[0.16em] text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Filter className="w-3 h-3 text-[#D4AF37]" />
                    <span>Course Subcategory</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {subcategories.map((sub) => {
                      const isSubActive = selectedSubcategory === sub;
                      return (
                        <button
                          key={sub}
                          onClick={() => handleSubcategoryChange(sub)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-mono-luxury whitespace-nowrap transition-all cursor-pointer border ${
                            isSubActive
                              ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-semibold'
                              : 'bg-white/[0.04] text-slate-400 hover:text-white border-white/[0.06]'
                          }`}
                        >
                          {sub === 'ALL' ? 'All Courses' : sub}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT PANE: Dish Listing */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Top Status Bar */}
            <div className="flex items-center justify-between px-2 py-1">
              <p className="text-xs font-mono-luxury text-slate-400">
                Displaying <span className="text-white font-medium">{filteredItems.length}</span> creations in{' '}
                <span className="text-[#E5C07B]">{currentCatInfo?.label}</span>
                {selectedSubcategory !== 'ALL' && ` (${selectedSubcategory})`}
              </p>
              {(searchQuery || vegOnlyFilter || chefSpecialOnly || selectedSubcategory !== 'ALL') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSubcategory('ALL');
                    setVegOnlyFilter(false);
                    setChefSpecialOnly(false);
                  }}
                  className="text-xs font-mono-luxury text-[#E5C07B] hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Scrollable Container */}
            <div
              ref={dishListRef}
              className="space-y-4 max-h-[calc(100vh-140px)] min-h-[500px] overflow-y-auto pr-1 sm:pr-2 rounded-2xl scroll-smooth"
            >
              {filteredItems.length === 0 ? (
                <div className="text-center py-20 bg-[#0E1015]/80 rounded-2xl border border-dashed border-white/[0.1]">
                  <p className="text-base font-serif-luxury text-white">No creations found matching criteria</p>
                  <p className="text-xs font-mono-luxury text-slate-400 mt-1">Please refine your search or clear active filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedSubcategory('ALL');
                      setVegOnlyFilter(false);
                      setChefSpecialOnly(false);
                    }}
                    className="mt-5 btn-luxury-outline text-xs px-5 py-2 cursor-pointer font-mono-luxury"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onSelect={onSelectItem}
                    onQuickAdd={(targetItem) => addItem(targetItem, undefined, [], 1)}
                    isWishlisted={wishlistIds.includes(item.id)}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MenuSection;

import React, { useState, useMemo, useRef } from 'react';
import { Search, Leaf, Sparkles, Filter } from 'lucide-react';
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
  const dishListRef = useRef<HTMLDivElement>(null);

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
    <section id="menu" className="py-12 sm:py-16 bg-[#F2F7F1]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Column is Fixed/Sticky, Right Column Scrolls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* FIXED / STICKY LEFT PANE: Categories, Food Range, Headings, Filters */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Title Header & Badge */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1E8] text-[#2D4A2D] text-xs font-semibold border border-[#2D4A2D]/10 shadow-xs">
                <Leaf className="w-3.5 h-3.5 text-[#466B45]" />
                <span className="uppercase tracking-wider">CRAFT CULINARY CATALOG</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2D4A2D] tracking-tight">
                Explore Our Menu
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6B5E] leading-relaxed">
                Wood-fired baking, Mexican sizzle, Asian wok mastery, chilled beverages, and handcrafted desserts.
              </p>
            </div>

            {/* Categories Navigation (Fixed Stays in Place) */}
            <div className="bg-white p-4 rounded-3xl border border-[#2D4A2D]/10 shadow-sm space-y-3">
              <div className="flex items-center justify-between px-2 text-xs font-bold text-[#2D4A2D] uppercase tracking-wider">
                <span>Categories</span>
                <span className="text-[10px] text-[#5C6B5E] font-normal">{INITIAL_MENU_ITEMS.length} dishes</span>
              </div>
              
              <div className="space-y-1.5">
                {MAIN_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const catItemCount = INITIAL_MENU_ITEMS.filter((i) => i.mainCategory === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#2D4A2D] text-white shadow-md font-bold'
                          : 'text-[#2D4A2D] hover:bg-[#EAF1E8] hover:text-[#2D4A2D]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{cat.icon}</span>
                        <span>{cat.label}</span>
                        {cat.badge && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                            isActive ? 'bg-[#D97706] text-white' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#5C6B5E]'
                      }`}>
                        {catItemCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search and Filters Box */}
            <div className="bg-white p-4 rounded-3xl border border-[#2D4A2D]/10 shadow-sm space-y-3">
              
              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#5C6B5E] absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder={`Search ${currentCatInfo?.label}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#F9F8F3] border border-[#2D4A2D]/10 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                />
              </div>

              {/* Filter Toggles */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    vegOnlyFilter
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-[#F9F8F3] text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Veg Only</span>
                </button>

                <button
                  onClick={() => setChefSpecialOnly(!chefSpecialOnly)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    chefSpecialOnly
                      ? 'bg-[#D97706] text-white shadow-sm'
                      : 'bg-[#F9F8F3] text-[#2D4A2D] hover:bg-[#FEF3C7] border border-[#2D4A2D]/10'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Chef's Choice</span>
                </button>
              </div>

              {/* Subcategories Food Range Filter Chips */}
              {subcategories.length > 2 && (
                <div className="pt-2 border-t border-gray-100">
                  <div className="text-[10px] font-bold text-[#5C6B5E] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Filter className="w-3 h-3" />
                    <span>Food Range / Types</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {subcategories.map((sub) => {
                      const isSubActive = selectedSubcategory === sub;
                      return (
                        <button
                          key={sub}
                          onClick={() => handleSubcategoryChange(sub)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                            isSubActive
                              ? 'bg-[#466B45] text-white shadow-xs font-semibold'
                              : 'bg-[#F9F8F3] text-[#5C6B5E] hover:text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10'
                          }`}
                        >
                          {sub === 'ALL' ? 'All Types' : sub}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* ========================================================================= */}
          {/* SCROLLABLE RIGHT PANE: Dish Listing (One dish per row, only dishes scroll) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-4">
            
            {/* Top Stats Bar */}
            <div className="flex items-center justify-between px-2">
              <p className="text-xs font-bold text-[#2D4A2D]">
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'} in{' '}
                <span className="text-[#466B45]">{currentCatInfo?.label}</span>
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
                  className="text-xs text-[#466B45] hover:text-[#2D4A2D] font-semibold underline cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Scrollable Container with Single-Dish-Per-Row Layout */}
            <div
              ref={dishListRef}
              className="space-y-4 max-h-[calc(100vh-140px)] min-h-[500px] overflow-y-auto pr-1 sm:pr-2 rounded-2xl scroll-smooth"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#466B45 #F2F7F1' }}
            >
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


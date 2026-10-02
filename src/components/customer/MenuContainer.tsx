import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Utensils, Sparkles, ChevronsUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import { RESTAURANT_MENU_ACCORDIONS } from '../../data/restaurantMenuData';
import { CategoryAccordionData, MenuItem } from '../../types';
import { CategoryAccordion } from './CategoryAccordion';
import { VariantSelectorModal } from './VariantSelectorModal';
import { useCartStore } from '../../store/useCartStore';

export const MenuContainer: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  // Active Category for Sidebar
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  // Customisation Modal State
  const [customisingItem, setCustomisingItem] = useState<MenuItem | null>(null);

  // Accordion open/collapse states for top-level categories
  const [openCategories, setOpenCategories] = useState<{ [id: string]: boolean }>(() => {
    return RESTAURANT_MENU_ACCORDIONS.reduce(
      (acc, cat) => ({ ...acc, [cat.id]: true }),
      {}
    );
  });

  // Filtered categories and dishes
  const filteredCategories: CategoryAccordionData[] = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return RESTAURANT_MENU_ACCORDIONS.map((category) => {
      // Filter subcategories and items
      const filteredSubcategories = category.subcategories
        .map((subgroup) => {
          const filteredItems = subgroup.items.filter((item) => {
            // Search filter
            if (q) {
              const matchName = item.name.toLowerCase().includes(q);
              const matchDesc = item.description.toLowerCase().includes(q);
              const matchSub = subgroup.title.toLowerCase().includes(q);
              if (!matchName && !matchDesc && !matchSub) return false;
            }

            // Dietary filter
            if (dietaryFilter === 'veg' && !item.isVeg) return false;
            if (dietaryFilter === 'non-veg' && item.isVeg) return false;

            return true;
          });

          return {
            ...subgroup,
            items: filteredItems,
          };
        })
        .filter((subgroup) => subgroup.items.length > 0);

      return {
        ...category,
        subcategories: filteredSubcategories,
      };
    }).filter((category) => {
      if (activeCategoryId !== 'all' && category.id !== activeCategoryId) {
        return false;
      }
      return category.subcategories.length > 0;
    });
  }, [searchQuery, dietaryFilter, activeCategoryId]);

  // When search or dietary filter is active, automatically expand matching categories
  useEffect(() => {
    if (searchQuery.trim() || dietaryFilter !== 'all') {
      const updated: { [id: string]: boolean } = {};
      filteredCategories.forEach((cat) => {
        updated[cat.id] = true;
      });
      setOpenCategories((prev) => ({ ...prev, ...updated }));
    }
  }, [searchQuery, dietaryFilter, filteredCategories]);

  // Total dish count
  const totalDishesCount = useMemo(() => {
    return RESTAURANT_MENU_ACCORDIONS.reduce(
      (acc, cat) => acc + cat.subcategories.reduce((sAcc, sub) => sAcc + sub.items.length, 0),
      0
    );
  }, []);

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const expandAll = () => {
    setOpenCategories(
      RESTAURANT_MENU_ACCORDIONS.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
    );
  };

  const collapseAll = () => {
    setOpenCategories(
      RESTAURANT_MENU_ACCORDIONS.reduce((acc, cat) => ({ ...acc, [cat.id]: false }), {})
    );
  };

  const areAllExpanded = useMemo(() => {
    return filteredCategories.every((cat) => openCategories[cat.id]);
  }, [filteredCategories, openCategories]);

  const handleScrollToCategory = (catId: string) => {
    setActiveCategoryId(catId);
    if (catId === 'all') {
      const el = document.getElementById('menu-content');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Ensure target category is open
      setOpenCategories((prev) => ({ ...prev, [catId]: true }));
      setTimeout(() => {
        const el = document.getElementById(`category-${catId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    }
  };

  return (
    <section id="menu" className="py-12 sm:py-20 bg-[#FAFAF7] text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Craft Culinary Catalog</span>
          </div>
          <h2 className="font-serif-clean text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Explore Our Menu
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Complete restaurant kitchen catalog: 318 authentic dishes across Wood-Fired Pizzas, Dim Sum, Momos, Wok Bowls, Pastas & Mexican Street.
          </p>
        </div>

        {/* Mobile Horizontal Category Bar (Sticky on Mobile) */}
        <div className="lg:hidden sticky top-16 z-30 bg-[#FAFAF7]/95 backdrop-blur-md py-3 -mx-4 px-4 border-y border-stone-200/80 mb-6 overflow-x-auto no-scrollbar flex items-center gap-2">
          <button
            onClick={() => handleScrollToCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-[#1E2D24] text-white shadow-xs'
                : 'bg-white text-stone-600 border border-stone-200'
            }`}
          >
            All Dishes
          </button>
          {RESTAURANT_MENU_ACCORDIONS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleScrollToCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategoryId === cat.id
                  ? 'bg-[#1E2D24] text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 2-Column Grid: Sticky Category Sidebar Left (4 Cols), Dishes List Right (8 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sticky Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-5">
            
            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pizzas, dim sum, noodles..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
              />
            </div>

            {/* Dietary Toggle Pills */}
            <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-bold">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                  dietaryFilter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  dietaryFilter === 'veg' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-500 hover:text-emerald-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  dietaryFilter === 'non-veg' ? 'bg-[#C8371A] text-white shadow-xs' : 'text-stone-500 hover:text-[#C8371A]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-300" />
                <span>Non-Veg</span>
              </button>
            </div>

            {/* Category Navigation List */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-3 shadow-xs space-y-1">
              <div className="px-3 py-2 flex items-center justify-between text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
                <span>Categories</span>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  {totalDishesCount} Dishes
                </span>
              </div>

              {/* All Dishes Option */}
              <button
                onClick={() => handleScrollToCategory('all')}
                className={`w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                  activeCategoryId === 'all'
                    ? 'bg-[#1E2D24] text-white shadow-xs'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>⭐ All Categories</span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                    activeCategoryId === 'all'
                      ? 'bg-white/20 text-white'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {totalDishesCount}
                </span>
              </button>

              {/* Specific Categories */}
              {RESTAURANT_MENU_ACCORDIONS.map((cat, idx) => {
                const count = cat.subcategories.reduce((acc, sub) => acc + sub.items.length, 0);
                const isActive = activeCategoryId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleScrollToCategory(cat.id)}
                    className={`w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1E2D24] text-white shadow-xs'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span className="truncate pr-2">
                      <span className="text-stone-400 mr-1.5 font-mono text-xs">0{idx + 1}</span>
                      {cat.title}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-stone-100 text-stone-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </aside>

          {/* Right Column: Menu Sections & Dish Cards (8 Cols) */}
          <div id="menu-content" className="lg:col-span-8">
            
            {/* Accordion Controls Bar */}
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-stone-200/80">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-stone-700">
                  {filteredCategories.length} {filteredCategories.length === 1 ? 'Category' : 'Categories'}
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 hidden sm:inline">
                  Click category header to expand or collapse
                </span>
              </div>

              <button
                type="button"
                onClick={areAllExpanded ? collapseAll : expandAll}
                className="px-3 py-1.5 rounded-xl border border-stone-200 hover:border-stone-300 bg-white text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                title={areAllExpanded ? 'Collapse all category accordions' : 'Expand all category accordions'}
              >
                <ChevronsUpDown className="w-3.5 h-3.5 text-stone-500" />
                <span>{areAllExpanded ? 'Collapse All' : 'Expand All'}</span>
              </button>
            </div>

            {filteredCategories.length === 0 ? (
              <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center card-shadow">
                <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <h4 className="font-sans text-base font-bold text-stone-900">No matching dishes found</h4>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Try clearing your search query or switching dietary filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                    setActiveCategoryId('all');
                  }}
                  className="mt-4 px-4 py-2 bg-[#1E2D24] text-white text-xs font-bold rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredCategories.map((category, index) => (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  index={index}
                  isOpen={Boolean(openCategories[category.id])}
                  onToggle={() => toggleCategory(category.id)}
                  onCustomise={(item) => setCustomisingItem(item)}
                  onQuickAdd={(item) => addItem(item)}
                />
              ))
            )}
          </div>

        </div>

      </div>

      {/* Product Variant & Customisation Modal */}
      <VariantSelectorModal
        item={customisingItem}
        isOpen={Boolean(customisingItem)}
        onClose={() => setCustomisingItem(null)}
      />

    </section>
  );
};

export default MenuContainer;

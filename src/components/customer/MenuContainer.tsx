import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { RESTAURANT_MENU_ACCORDIONS } from '../../data/restaurantMenuData';
import { CategoryAccordionData, MenuItem } from '../../types';
import { CategoryAccordion } from './CategoryAccordion';
import { VariantSelectorModal } from './VariantSelectorModal';
import { useCartStore } from '../../store/useCartStore';

type PrimaryGroup = 'all' | 'pizzas' | 'small-plates' | 'drinks';

export const MenuContainer: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  // Primary Tab Group: All, Pizzas, Small plates, Drinks
  const [selectedGroup, setSelectedGroup] = useState<PrimaryGroup>('all');

  // Accordion state: IDs of open categories (defaults to first 3 open)
  const [openCategories, setOpenCategories] = useState<string[]>(() => [
    'pizzas-calzones',
    'dimsum-baos',
    'soups-salads',
  ]);

  // Filtering state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  // Active item for VariantSelectorModal
  const [customisingItem, setCustomisingItem] = useState<MenuItem | null>(null);

  // Desktop Hover Photo Reveal state
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Map each accordion to its primary group
  const getAccordionGroup = (id: string): PrimaryGroup => {
    if (id === 'pizzas-calzones') return 'pizzas';
    if (id === 'beverages-desserts') return 'drinks';
    return 'small-plates';
  };

  // Toggle single category
  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  // Expand / Collapse all
  const areAllOpen = openCategories.length === RESTAURANT_MENU_ACCORDIONS.length;
  const toggleAll = () => {
    if (areAllOpen) {
      setOpenCategories([]);
    } else {
      setOpenCategories(RESTAURANT_MENU_ACCORDIONS.map((c) => c.id));
    }
  };

  // Filtered categories and items based on group tab, search, and dietary toggle
  const filteredCategories: CategoryAccordionData[] = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return RESTAURANT_MENU_ACCORDIONS.filter((category) => {
      if (selectedGroup !== 'all' && getAccordionGroup(category.id) !== selectedGroup) {
        return false;
      }
      return true;
    })
      .map((category) => {
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

              // Dietary filters
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
      })
      .filter((category) => category.subcategories.length > 0);
  }, [selectedGroup, searchQuery, dietaryFilter]);

  const totalFilteredDishes = filteredCategories.reduce(
    (total, cat) =>
      total + cat.subcategories.reduce((subTotal, sub) => subTotal + sub.items.length, 0),
    0
  );

  const handleQuickAdd = (item: MenuItem) => {
    addItem(item, undefined, [], 1);
  };

  // Hover handlers for cursor reveal
  const handleItemHover = (item: MenuItem, e: React.MouseEvent) => {
    setHoveredItem(item);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleItemMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  // Floating preview position calculation with viewport boundary clamping
  const previewLeft = typeof window !== 'undefined'
    ? Math.min(cursorPos.x + 20, window.innerWidth - 270)
    : cursorPos.x + 20;

  const previewTop = typeof window !== 'undefined'
    ? Math.min(Math.max(cursorPos.y - 120, 80), window.innerHeight - 230)
    : cursorPos.y - 120;

  return (
    <section id="menu" className="py-14 sm:py-24 bg-[#F3ECDD] text-[#161412] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Stark Editorial Bill of Fare */}
        <div className="mb-10 sm:mb-14 border-b-[1.5px] border-[#161412] pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-wider text-[#8A8378]">
              <span>[02]</span>
              <span>•</span>
              <span>Bill of Fare</span>
              <span>•</span>
              <span>Naturally Leavened</span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#161412] leading-[0.95]">
              The Menu.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#8A8378] mt-3 max-w-xl">
              Wood-fired sourdough pizza, hand-pinched crystal dim sum, wok noodles, and botanical sodas.
            </p>
          </div>

          {/* Primary Group Selectors: Pizzas, Small plates, Drinks */}
          <div className="flex items-center gap-1.5 flex-wrap font-mono text-[11px] sm:text-xs font-bold uppercase">
            <button
              onClick={() => setSelectedGroup('all')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 border-[1.5px] border-[#161412] transition-all cursor-pointer ${
                selectedGroup === 'all'
                  ? 'bg-[#161412] text-[#F3ECDD] hard-shadow-sm'
                  : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
              }`}
            >
              All [74]
            </button>
            <button
              onClick={() => setSelectedGroup('pizzas')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 border-[1.5px] border-[#161412] transition-all cursor-pointer ${
                selectedGroup === 'pizzas'
                  ? 'bg-[#C8371A] text-[#F3ECDD] hard-shadow-sm'
                  : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
              }`}
            >
              Pizzas
            </button>
            <button
              onClick={() => setSelectedGroup('small-plates')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 border-[1.5px] border-[#161412] transition-all cursor-pointer ${
                selectedGroup === 'small-plates'
                  ? 'bg-[#161412] text-[#F3ECDD] hard-shadow-sm'
                  : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
              }`}
            >
              Small Plates
            </button>
            <button
              onClick={() => setSelectedGroup('drinks')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 border-[1.5px] border-[#161412] transition-all cursor-pointer ${
                selectedGroup === 'drinks'
                  ? 'bg-[#161412] text-[#F3ECDD] hard-shadow-sm'
                  : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
              }`}
            >
              Drinks & Sweets
            </button>
          </div>
        </div>

        {/* Filter Controls Row: Search, Dietary Filters, Expand All */}
        <div className="mb-8 p-3 sm:p-4 bg-[#F3ECDD] border-[1.5px] border-[#161412] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8A8378] absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search pizza, dim sum, broth, noodles, tacos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-transparent border-[1.5px] border-[#161412] font-mono text-xs sm:text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Dietary Filter Segmented Buttons */}
            <div className="flex items-center border-[1.5px] border-[#161412] font-mono text-xs font-bold">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#161412] text-[#F3ECDD]'
                    : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-2.5 py-1.5 border-l-[1.5px] border-[#161412] flex items-center gap-1.5 transition-colors cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#161412] text-[#F3ECDD]'
                    : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
                }`}
              >
                <span className="w-2.5 h-2.5 border border-[#2E7D32] flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-[#2E7D32]" />
                </span>
                <span>VEG</span>
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-2.5 py-1.5 border-l-[1.5px] border-[#161412] flex items-center gap-1.5 transition-colors cursor-pointer ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-[#161412] text-[#F3ECDD]'
                    : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
                }`}
              >
                <span className="w-2.5 h-2.5 border border-[#C8371A] flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-[#C8371A]" />
                </span>
                <span>NON-VEG</span>
              </button>
            </div>

            {/* Expand / Collapse All */}
            <button
              onClick={toggleAll}
              className="px-3 py-1.5 bg-[#F3ECDD] hover:bg-[#161412] hover:text-[#F3ECDD] border-[1.5px] border-[#161412] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {areAllOpen ? '[ Collapse All ]' : '[ Expand All ]'}
            </button>
          </div>
        </div>

        {/* Results Counter if Filtered */}
        {(searchQuery || dietaryFilter !== 'all' || selectedGroup !== 'all') && (
          <div className="mb-6 font-mono text-xs text-[#8A8378] flex items-center justify-between">
            <span>
              Showing {totalFilteredDishes} {totalFilteredDishes === 1 ? 'item' : 'items'} matching current filters.
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedGroup('all');
              }}
              className="text-[#C8371A] font-bold underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Categories Typographic Lists */}
        {filteredCategories.length === 0 ? (
          <div className="py-16 text-center border-[1.5px] border-[#161412] bg-[#F3ECDD] p-8">
            <p className="font-headline text-2xl font-bold text-[#161412]">
              No dishes match your selection.
            </p>
            <p className="font-sans text-sm text-[#8A8378] mt-2">
              Try adjusting your search terms or dietary filters.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCategories.map((category, index) => (
              <CategoryAccordion
                key={category.id}
                category={category}
                index={index}
                isOpen={openCategories.includes(category.id)}
                onToggle={() => toggleCategory(category.id)}
                onCustomise={(item) => setCustomisingItem(item)}
                onQuickAdd={handleQuickAdd}
                onHoverItem={handleItemHover}
                onMouseMoveItem={handleItemMouseMove}
                onLeaveItem={handleItemLeave}
              />
            ))}
          </div>
        )}

      </div>

      {/* Desktop Cursor-Following Image Hover Reveal */}
      {hoveredItem && hoveredItem.imagePath && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-150 hidden sm:block"
          style={{
            left: `${previewLeft}px`,
            top: `${previewTop}px`,
          }}
        >
          <div className="w-60 bg-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow p-2">
            <div className="w-full h-40 overflow-hidden border-[1.5px] border-[#161412] bg-[#161412]">
              <img
                src={hoveredItem.imagePath}
                alt={hoveredItem.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="mt-2 flex items-baseline justify-between px-0.5">
              <span className="font-headline text-xs font-bold text-[#161412] truncate max-w-[150px]">
                {hoveredItem.name}
              </span>
              <span className="font-mono text-xs font-bold text-[#C8371A]">
                ₹{hoveredItem.price}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Dish Customization Modal */}
      <VariantSelectorModal
        item={customisingItem}
        isOpen={Boolean(customisingItem)}
        onClose={() => setCustomisingItem(null)}
      />

    </section>
  );
};

export default MenuContainer;

import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { CategoryAccordionData, MenuItem } from '../../types';
import { SubcategoryGroup } from './SubcategoryGroup';

interface CategoryAccordionProps {
  category: CategoryAccordionData;
  isOpen: boolean;
  onToggle: () => void;
  onCustomise: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  index: number;
}

export const CategoryAccordion: React.FC<CategoryAccordionProps> = ({
  category,
  isOpen,
  onToggle,
  onCustomise,
  onQuickAdd,
  index,
}) => {
  const totalItemCount = category.subcategories.reduce(
    (sum, sub) => sum + sub.items.length,
    0
  );

  return (
    <div
      id={`category-${category.id}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden mb-5 ${
        isOpen
          ? 'bg-white border-stone-300 shadow-sm'
          : 'bg-white/80 hover:bg-white border-stone-200/90 shadow-2xs'
      }`}
    >
      {/* Category Accordion Header Button */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors cursor-pointer select-none gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-700/50"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${category.id}`}
      >
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            {/* Category Index Number */}
            <span className="font-mono text-xs font-bold text-stone-600">
              0{index + 1}
            </span>

            {/* Category Title */}
            <h3 className="font-serif-clean text-lg sm:text-xl md:text-2xl font-black text-stone-900 tracking-tight">
              {category.title}
            </h3>

            {/* Total Dish Count Pill */}
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-sans">
              {totalItemCount} {totalItemCount === 1 ? 'dish' : 'dishes'}
            </span>

            {/* Optional Badge */}
            {category.badge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                <span>{category.badge}</span>
              </span>
            )}
          </div>

          {/* Category Description */}
          {category.description && (
            <p className="text-xs sm:text-sm text-stone-500 line-clamp-1 sm:line-clamp-none font-normal">
              {category.description}
            </p>
          )}
        </div>

        {/* Accordion Toggle Indicator (Rotating Chevron Icon) */}
        <div className="shrink-0 flex items-center gap-2">
          <span className="hidden sm:inline text-xs font-semibold text-stone-400">
            {isOpen ? 'Collapse' : 'Expand'}
          </span>
          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? 'border-emerald-700/30 bg-emerald-50 text-emerald-800'
                : 'border-stone-200 bg-stone-50 text-stone-500 hover:border-stone-300'
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </div>
      </button>

      {/* Smooth Slide-down Content Container (CSS Grid Transition) */}
      <div
        id={`accordion-content-${category.id}`}
        role="region"
        aria-labelledby={`category-${category.id}`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 sm:p-6 pt-2 border-t border-stone-100 bg-[#FAFAF7]/50 space-y-6">
            {category.subcategories.map((subgroup) => (
              <SubcategoryGroup
                key={subgroup.id}
                group={subgroup}
                onCustomise={onCustomise}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAccordion;

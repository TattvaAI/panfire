import React from 'react';
import { CategoryAccordionData, MenuItem } from '../../types';
import { SubcategoryGroup } from './SubcategoryGroup';

interface CategoryAccordionProps {
  category: CategoryAccordionData;
  isOpen: boolean;
  onToggle: () => void;
  onCustomise: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  index: number;
  onHoverItem?: (item: MenuItem, e: React.MouseEvent) => void;
  onMouseMoveItem?: (e: React.MouseEvent) => void;
  onLeaveItem?: () => void;
}

export const CategoryAccordion: React.FC<CategoryAccordionProps> = ({
  category,
  isOpen,
  onToggle,
  onCustomise,
  onQuickAdd,
  index,
  onHoverItem,
  onMouseMoveItem,
  onLeaveItem,
}) => {
  const totalItemCount = category.subcategories.reduce(
    (sum, sub) => sum + sub.items.length,
    0
  );

  const paddedIndex = String(index + 1).padStart(2, '0');

  return (
    <div
      id={`category-${category.id}`}
      className="border-[1.5px] border-[#161412] bg-[#F3ECDD] mb-6 overflow-hidden transition-all duration-200 w-full"
    >
      {/* Editorial Header Button */}
      <button
        onClick={onToggle}
        className={`w-full p-3.5 sm:p-6 flex items-center justify-between text-left transition-colors cursor-pointer select-none border-b-[1.5px] gap-2 ${
          isOpen
            ? 'bg-[#161412] text-[#F3ECDD] border-[#161412]'
            : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5 border-transparent'
        }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-2 sm:gap-5 flex-1 min-w-0 pr-2">
          {/* Index Number */}
          <span className={`font-mono text-xs sm:text-sm font-bold shrink-0 ${
            isOpen ? 'text-[#C8371A]' : 'text-[#8A8378]'
          }`}>
            [{paddedIndex}]
          </span>

          {/* Title */}
          <h3 className={`font-headline text-lg sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase truncate ${
            isOpen ? 'text-[#F3ECDD]' : 'text-[#161412]'
          }`}>
            {category.title}
          </h3>

          {/* Total Count */}
          <span className={`hidden md:inline-block font-mono text-xs uppercase tracking-wider font-semibold shrink-0 ${
            isOpen ? 'text-[#8A8378]' : 'text-[#8A8378]'
          }`}>
            ({totalItemCount} {totalItemCount === 1 ? 'dish' : 'dishes'})
          </span>
        </div>

        {/* Toggle Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {category.badge && (
            <span className={`hidden md:inline-block font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 border-[1.5px] ${
              isOpen
                ? 'border-[#C8371A] text-[#C8371A] bg-transparent'
                : 'border-[#161412] text-[#161412] bg-transparent'
            }`}>
              {category.badge}
            </span>
          )}

          <div
            className={`w-6 h-6 sm:w-8 sm:h-8 border-[1.5px] flex items-center justify-center font-mono text-xs sm:text-base font-bold transition-all ${
              isOpen
                ? 'border-[#F3ECDD] text-[#F3ECDD] bg-[#C8371A]'
                : 'border-[#161412] text-[#161412] bg-[#F3ECDD]'
            }`}
          >
            {isOpen ? '−' : '+'}
          </div>
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-3.5 sm:p-7 bg-[#F3ECDD] w-full">
          {category.description && (
            <p className="font-sans text-xs sm:text-base text-[#8A8378] mb-5 sm:mb-6 max-w-3xl border-l-2 border-[#C8371A] pl-3 py-0.5">
              {category.description}
            </p>
          )}

          <div className="space-y-6 w-full">
            {category.subcategories.map((subgroup) => (
              <SubcategoryGroup
                key={subgroup.id}
                group={subgroup}
                onCustomise={onCustomise}
                onQuickAdd={onQuickAdd}
                onHoverItem={onHoverItem}
                onMouseMoveItem={onMouseMoveItem}
                onLeaveItem={onLeaveItem}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;

import React from 'react';
import { SubcategoryGroupData, MenuItem } from '../../types';
import { MenuItemCard } from './MenuItemCard';

interface SubcategoryGroupProps {
  group: SubcategoryGroupData;
  onCustomise: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  onHoverItem?: (item: MenuItem, e: React.MouseEvent) => void;
  onMouseMoveItem?: (e: React.MouseEvent) => void;
  onLeaveItem?: () => void;
}

export const SubcategoryGroup: React.FC<SubcategoryGroupProps> = ({
  group,
  onCustomise,
  onQuickAdd,
}) => {
  if (!group.items || group.items.length === 0) return null;

  return (
    <section className="mb-6 last:mb-0 w-full">
      {/* Subcategory Header */}
      <div className="flex items-center justify-between gap-3 pb-2.5 mb-3 border-b border-stone-200/90">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Standard Dietary Tag Badge (Veg / Non-Veg) */}
          {group.isVegSection !== undefined && (
            <span
              className={`w-4 h-4 rounded-xs shrink-0 border-[1.5px] flex items-center justify-center bg-white shadow-2xs ${
                group.isVegSection ? 'border-emerald-600' : 'border-[#C8371A]'
              }`}
              title={group.isVegSection ? 'Vegetarian Selection' : 'Non-Vegetarian Selection'}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  group.isVegSection ? 'bg-emerald-600' : 'bg-[#C8371A]'
                }`}
              />
            </span>
          )}

          <h4 className="font-sans text-sm sm:text-base font-bold text-stone-800 tracking-tight flex items-center gap-2">
            <span>{group.title}</span>
            {group.isVegSection !== undefined && (
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                  group.isVegSection
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/70'
                    : 'bg-red-50 text-[#C8371A] border border-red-200/70'
                }`}
              >
                {group.isVegSection ? 'Veg' : 'Non-Veg'}
              </span>
            )}
          </h4>
        </div>

        {/* Count Indicator */}
        <span className="text-xs font-semibold text-stone-500 font-sans shrink-0">
          {group.items.length} {group.items.length === 1 ? 'dish' : 'dishes'}
        </span>
      </div>

      {/* Dish Cards List */}
      <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
        {group.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onCustomise={onCustomise}
            onQuickAdd={onQuickAdd}
          />
        ))}
      </div>
    </section>
  );
};

export default SubcategoryGroup;

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
  onHoverItem,
  onMouseMoveItem,
  onLeaveItem,
}) => {
  if (!group.items || group.items.length === 0) return null;

  return (
    <section className="mb-8 last:mb-0 w-full overflow-hidden">
      {/* Subcategory Header */}
      <div className="flex items-start justify-between gap-2 pb-2 mb-2 border-b-[1.5px] border-[#161412]">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {group.isVegSection !== undefined && (
            <span
              className={`w-3.5 h-3.5 shrink-0 border-[1.5px] flex items-center justify-center ${
                group.isVegSection ? 'border-[#2E7D32]' : 'border-[#C8371A]'
              }`}
              title={group.isVegSection ? 'Vegetarian Section' : 'Non-Vegetarian Section'}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  group.isVegSection ? 'bg-[#2E7D32]' : 'bg-[#C8371A]'
                }`}
              />
            </span>
          )}
          <h4 className="font-headline text-sm sm:text-lg font-bold tracking-tight text-[#161412] uppercase break-words leading-tight">
            {group.title}
          </h4>
        </div>

        <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#8A8378] shrink-0 mt-0.5 whitespace-nowrap">
          [{group.items.length}]
        </span>
      </div>

      {/* Typographic Rows */}
      <div className="divide-y-0 w-full">
        {group.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onCustomise={onCustomise}
            onQuickAdd={onQuickAdd}
            onHoverItem={onHoverItem}
            onMouseMoveItem={onMouseMoveItem}
            onLeaveItem={onLeaveItem}
          />
        ))}
      </div>
    </section>
  );
};

export default SubcategoryGroup;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '../types';
import { INITIAL_MENU_ITEMS } from '../data/menuCatalog';

interface MenuState {
  menuItems: MenuItem[];
  toggleItemAvailability: (itemId: string) => void;
  getAvailableItems: () => MenuItem[];
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      menuItems: INITIAL_MENU_ITEMS,
      toggleItemAvailability: (itemId) => {
        set((state) => ({
          menuItems: state.menuItems.map((item) =>
            item.id === itemId ? { ...item, isAvailable: !item.isAvailable } : item
          ),
        }));
      },
      getAvailableItems: () => {
        return get().menuItems.filter((i) => i.isAvailable);
      },
    }),
    {
      name: 'panfire-menu-inventory',
    }
  )
);

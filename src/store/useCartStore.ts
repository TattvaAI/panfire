import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, MenuItem, Variant, Addon } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (menuItem: MenuItem, variant?: Variant, addons?: Addon[], quantity?: number, notes?: string) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTaxes: () => number;
  getDeliveryFee: () => number;
  getTotalAmount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (menuItem, variant, addons = [], quantity = 1, notes) => {
        const basePrice = variant ? variant.price : menuItem.price;
        const addonsPrice = addons.reduce((sum, a) => sum + a.price, 0);
        const unitPrice = basePrice + addonsPrice;
        const totalItemPrice = unitPrice * quantity;

        const cartId = `${menuItem.id}-${variant?.id || 'base'}-${addons.map(a => a.id).sort().join('-')}`;

        const existingIndex = get().items.findIndex(i => i.cartId === cartId);

        if (existingIndex > -1) {
          const updatedItems = [...get().items];
          const item = updatedItems[existingIndex];
          const newQty = item.quantity + quantity;
          updatedItems[existingIndex] = {
            ...item,
            quantity: newQty,
            totalItemPrice: item.unitPrice * newQty,
            itemNotes: notes || item.itemNotes,
          };
          set({ items: updatedItems });
        } else {
          const newItem: CartItem = {
            cartId,
            menuItem,
            selectedVariant: variant,
            selectedAddons: addons,
            quantity,
            itemNotes: notes,
            unitPrice,
            totalItemPrice,
          };
          set({ items: [...get().items, newItem] });
        }
      },
      removeItem: (cartId) => {
        set({ items: get().items.filter(i => i.cartId !== cartId) });
      },
      updateQuantity: (cartId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartId);
          return;
        }
        set({
          items: get().items.map(item => {
            if (item.cartId === cartId) {
              return {
                ...item,
                quantity,
                totalItemPrice: item.unitPrice * quantity,
              };
            }
            return item;
          }),
        });
      },
      clearCart: () => set({ items: [] }),
      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.totalItemPrice, 0);
      },
      getTaxes: () => {
        return Math.round(get().getSubtotal() * 0.05); // 5% GST/Taxes
      },
      getDeliveryFee: () => {
        return get().items.length > 0 ? 49 : 0;
      },
      getTotalAmount: () => {
        return get().getSubtotal() + get().getTaxes() + get().getDeliveryFee();
      },
    }),
    {
      name: 'panfire-cart-storage',
    }
  )
);

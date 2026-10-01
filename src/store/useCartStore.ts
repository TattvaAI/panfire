import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, MenuItem, Variant, Addon, CartPayloadItem } from '../types';

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
  getCartPayload: () => CartPayloadItem[];
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (menuItem, variant, addons = [], quantity = 1, notes) => {
        const basePrice = variant ? variant.price : (menuItem.basePrice || menuItem.price);
        const addonsPrice = addons.reduce((sum, a) => sum + a.price, 0);
        const unitPrice = basePrice + addonsPrice;
        const totalItemPrice = unitPrice * quantity;

        const cartId = `${menuItem.id}-${variant?.id || 'base'}-${addons.map(a => a.id).sort().join('-')}`;

        const existingIndex = get().items.findIndex(i => i.cartId === cartId);

        if (existingIndex > -1) {
          const updatedItems = [...get().items];
          const item = updatedItems[existingIndex];
          const newQty = item.quantity + quantity;
          const updatedFinalPrice = item.unitPrice * newQty;
          updatedItems[existingIndex] = {
            ...item,
            quantity: newQty,
            finalPrice: updatedFinalPrice,
            totalItemPrice: updatedFinalPrice,
            itemNotes: notes || item.itemNotes,
          };
          set({ items: updatedItems });
        } else {
          const newItem: CartItem = {
            cartId,
            menuItem,
            // Standardized Cart Payload Fields: { itemId, itemName, selectedVariant, basePrice, finalPrice, quantity }
            itemId: menuItem.id,
            itemName: menuItem.name,
            selectedVariant: variant,
            basePrice,
            finalPrice: totalItemPrice,
            quantity,
            // Extended metadata
            selectedAddons: addons,
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
              const updatedFinalPrice = item.unitPrice * quantity;
              return {
                ...item,
                quantity,
                finalPrice: updatedFinalPrice,
                totalItemPrice: updatedFinalPrice,
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
      getCartPayload: () => {
        return get().items.map(item => ({
          itemId: item.itemId,
          itemName: item.itemName,
          selectedVariant: item.selectedVariant,
          basePrice: item.basePrice,
          finalPrice: item.finalPrice,
          quantity: item.quantity,
        }));
      },
    }),
    {
      name: 'panfire-cart-storage',
    }
  )
);

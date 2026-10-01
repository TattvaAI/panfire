import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order, OrderStatus, UserProfile, CartItem } from '../types';

interface OrderState {
  orders: Order[];
  activeCustomerOrderId: string | null;
  hasNewOrderAlert: boolean;
  placeOrder: (user: UserProfile, items: CartItem[], subtotal: number, taxes: number, deliveryFee: number, totalAmount: number, notes?: string) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  setActiveCustomerOrderId: (id: string | null) => void;
  clearNewOrderAlert: () => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      activeCustomerOrderId: null,
      hasNewOrderAlert: false,
      placeOrder: (user, items, subtotal, taxes, deliveryFee, totalAmount, notes) => {
        const orderId = `PF-${Math.floor(1000 + Math.random() * 9000)}`;
        const newOrder: Order = {
          id: orderId,
          user,
          items,
          subtotal,
          taxes,
          deliveryFee,
          totalAmount,
          status: 'PENDING',
          placedAt: new Date().toISOString(),
          estimatedTimeMinutes: 30,
          specialInstructions: notes,
        };

        set((state) => ({
          orders: [newOrder, ...state.orders],
          activeCustomerOrderId: orderId,
          hasNewOrderAlert: true,
        }));

        return newOrder;
      },
      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((ord) =>
            ord.id === orderId ? { ...ord, status } : ord
          ),
        }));
      },
      setActiveCustomerOrderId: (id) => set({ activeCustomerOrderId: id }),
      clearNewOrderAlert: () => set({ hasNewOrderAlert: false }),
    }),
    {
      name: 'panfire-orders-store',
    }
  )
);

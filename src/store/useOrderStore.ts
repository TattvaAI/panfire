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

const SAMPLE_INITIAL_ORDERS: Order[] = [
  {
    id: 'PF-9481',
    user: {
      id: 'usr-02',
      fullName: 'Samantha Sterling',
      phone: '+1 (555) 392-1049',
      email: 'samantha@designcorp.co',
      address: '14 Wall Street, Financial Plaza, Floor 18',
      landmark: 'Opposite Art Deco Tower',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
    items: [
      {
        cartId: 'it-piz-7-v-tm-12',
        menuItem: {
          id: 'it-piz-7',
          name: 'Truffle Mushroom Pizza',
          broadCategory: 'ITALIAN',
          category: 'Neapolitan & Thin Crust Pizza',
          isVeg: true,
          price: 440,
          description: 'Mozzarella, shiitake and button mushrooms over a creamy white base.',
          imagePath: '/assets/PIZZA/Truffle Mushroom.png',
          isAvailable: true,
        },
        selectedVariant: { id: 'v-tm-12', name: 'Neapolitan Large (12 inch)', price: 845 },
        selectedAddons: [{ id: 'a-burrata-120', name: 'Add Burrata', price: 120 }],
        quantity: 1,
        unitPrice: 965,
        totalItemPrice: 965,
        itemNotes: 'Extra hot drizzle please!',
      },
      {
        cartId: 'as-bao-1',
        menuItem: {
          id: 'as-bao-1',
          name: 'Prawn Fire Cracker Bao',
          broadCategory: 'ASIAN',
          category: 'Baos',
          isVeg: false,
          price: 495,
          description: 'Fried prawns with spicy mayo.',
          imagePath: '/assets/BAO/PRAWN FRIER CRACKER BAO .png',
          isAvailable: true,
        },
        selectedAddons: [],
        quantity: 1,
        unitPrice: 495,
        totalItemPrice: 495,
      }
    ],
    subtotal: 1460,
    taxes: 73,
    deliveryFee: 49,
    totalAmount: 1582,
    status: 'PREPARING',
    placedAt: new Date(Date.now() - 1200000).toISOString(),
    estimatedTimeMinutes: 25,
    specialInstructions: 'Ring bell twice upon delivery.',
  },
  {
    id: 'PF-9480',
    user: {
      id: 'usr-03',
      fullName: 'Marcus Vance',
      phone: '+1 (555) 883-9210',
      address: '202 Ocean Promenade, Penthouse C',
      createdAt: new Date(Date.now() - 7200000).toISOString(),
    },
    items: [
      {
        cartId: 'as-sus-1-v-dra-8',
        menuItem: {
          id: 'as-sus-1',
          name: 'Dragon Uramaki Sushi',
          broadCategory: 'ASIAN',
          category: 'Sushi',
          isVeg: false,
          price: 395,
          description: 'Prawn tempura and avocado.',
          imagePath: '/assets/SUSHI/DRAGON URAMAKI .png',
          isAvailable: true,
        },
        selectedVariant: { id: 'v-dra-8', name: '8 Pieces', price: 645 },
        selectedAddons: [],
        quantity: 2,
        unitPrice: 645,
        totalItemPrice: 1290,
      }
    ],
    subtotal: 1290,
    taxes: 65,
    deliveryFee: 49,
    totalAmount: 1404,
    status: 'OUT_FOR_DELIVERY',
    placedAt: new Date(Date.now() - 2400000).toISOString(),
    estimatedTimeMinutes: 10,
  }
];

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: SAMPLE_INITIAL_ORDERS,
      activeCustomerOrderId: 'PF-9481',
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

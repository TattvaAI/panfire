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
      phone: '+91 78142 19191',
      email: 'samantha@designcorp.co',
      address: '14 Wall Street, Financial Plaza, Floor 18',
      landmark: 'Opposite Art Deco Tower',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
    items: [
      {
        cartId: 'it-piz-7-v-tm-12',
        menuItem: {
          id: 'it-piz-5',
          name: 'Truffle Mushroom Pizza',
          mainCategory: 'ITALIAN',
          broadCategory: 'ITALIAN',
          category: 'Thin Crust Pizzas',
          isVeg: true,
          price: 530,
          description: 'Mozzarella, shiitake and button mushrooms over a creamy white base.',
          imagePath: '/assets/pizza/truffle-mushroom.avif',
          isAvailable: true,
        },
        selectedVariant: { id: 'v-tm-12', name: '12 inch Large', price: 730 },
        selectedAddons: [],
        quantity: 1,
        unitPrice: 730,
        totalItemPrice: 730,
        itemNotes: 'Extra hot drizzle please!',
      },
      {
        cartId: 'as-bao-1',
        menuItem: {
          id: 'as-bao-3',
          name: 'Prawn Fire Cracker Bao',
          mainCategory: 'ASIAN',
          broadCategory: 'ASIAN',
          category: 'Baos',
          isVeg: false,
          price: 445,
          description: 'Fried prawns with spicy sriracha mayo.',
          imagePath: '/assets/bao/prawn-frier-cracker-bao.avif',
          isAvailable: true,
        },
        selectedAddons: [],
        quantity: 1,
        unitPrice: 445,
        totalItemPrice: 445,
      }
    ],
    subtotal: 1175,
    taxes: 58,
    deliveryFee: 40,
    totalAmount: 1273,
    status: 'PREPARING',
    placedAt: new Date(Date.now() - 1200000).toISOString(),
    estimatedTimeMinutes: 25,
    specialInstructions: 'Ring bell upon arrival.',
  },
  {
    id: 'PF-9480',
    user: {
      id: 'usr-03',
      fullName: 'Marcus Vance',
      phone: '+91 78142 19191',
      address: '202 Ocean Promenade, Penthouse C',
      createdAt: new Date(Date.now() - 7200000).toISOString(),
    },
    items: [
      {
        cartId: 'as-sus-1-v-dra-8',
        menuItem: {
          id: 'as-sus-3',
          name: 'Dragon Uramaki Sushi Roll',
          mainCategory: 'ASIAN',
          broadCategory: 'ASIAN',
          category: 'Sushi',
          isVeg: false,
          price: 475,
          description: 'Prawn tempura, avocado scales and unagi drizzle.',
          imagePath: '/assets/sushi/dragon-uramaki.avif',
          isAvailable: true,
        },
        selectedVariant: { id: 'v-dra-8', name: '8 Pieces', price: 790 },
        selectedAddons: [],
        quantity: 2,
        unitPrice: 790,
        totalItemPrice: 1580,
      }
    ],
    subtotal: 1580,
    taxes: 79,
    deliveryFee: 40,
    totalAmount: 1699,
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

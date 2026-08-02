export type BroadCategory = 'ITALIAN' | 'ASIAN';

export interface Variant {
  id: string;
  name: string;
  price: number;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  broadCategory: BroadCategory;
  category: string; // e.g., "PIZZA", "SUSHI", "BAO", "PASTA"
  isVeg: boolean;
  price: number;
  description: string;
  imagePath: string;
  variants?: Variant[];
  addons?: Addon[];
  isAvailable: boolean;
  isChefSpecial?: boolean;
  spicyLevel?: number; // 0 (mild) to 3 (very spicy)
}

export interface UserProfile {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  landmark?: string;
  createdAt: string;
}

export interface CartItem {
  cartId: string;
  menuItem: MenuItem;
  selectedVariant?: Variant;
  selectedAddons: Addon[];
  quantity: number;
  itemNotes?: string;
  unitPrice: number;
  totalItemPrice: number;
}

export type OrderStatus = 'PENDING' | 'PREPARING' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';

export interface Order {
  id: string; // PF-XXXX format
  user: UserProfile;
  items: CartItem[];
  subtotal: number;
  taxes: number;
  deliveryFee: number;
  totalAmount: number;
  status: OrderStatus;
  placedAt: string;
  estimatedTimeMinutes: number;
  specialInstructions?: string;
}

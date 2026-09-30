export type MainCategory =
  | 'SOUPS_SALADS'
  | 'DIMSUM_BAOS'
  | 'APPETIZERS_STARTERS'
  | 'PIZZAS_CALZONES'
  | 'MAINS_PASTAS_WOK'
  | 'MEXICAN_STREET'
  | 'BEVERAGES_DESSERTS'
  | 'SIGNATURE'
  | 'MEXICAN'
  | 'ITALIAN'
  | 'ASIAN'
  | 'BEVERAGES'
  | 'DESSERTS';

export interface Variant {
  id: string;
  name: string;
  price: number;
  isVeg?: boolean;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  mainCategory?: MainCategory | string;
  category: string;
  isVeg: boolean;
  price: number;
  basePrice?: number;
  description: string;
  imagePath: string;
  variants?: Variant[];
  addons?: Addon[];
  isAvailable: boolean;
  isChefSpecial?: boolean;
  isBestseller?: boolean;
  spicyLevel?: number;
  hasVariants?: boolean;
  broadCategory?: string;
}

export interface SubcategoryGroupData {
  id: string;
  title: string;
  isVegSection?: boolean;
  items: MenuItem[];
}

export interface CategoryAccordionData {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  subcategories: SubcategoryGroupData[];
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
  id: string;
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

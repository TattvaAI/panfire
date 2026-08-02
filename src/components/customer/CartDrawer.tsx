import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, CheckCircle2, Ticket } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useOrderStore } from '../../store/useOrderStore';
import { useUserStore } from '../../store/useUserStore';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
  onOpenTracker: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  onOpenProfile,
  onOpenTracker,
}) => {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal } = useCartStore();
  const { placeOrder } = useOrderStore();
  const user = useUserStore((state) => state.user);

  const [orderType, setOrderType] = useState<'DELIVERY' | 'PICKUP'>('DELIVERY');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [tipAmount, setTipAmount] = useState<number>(30);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const discount = discountApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = orderType === 'DELIVERY' ? 45 : 0;
  const taxes = Math.round((subtotal - discount) * 0.05);
  const totalAmount = Math.max(0, subtotal - discount + deliveryFee + taxes + tipAmount);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FLAVORIA20') {
      setDiscountApplied(true);
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
    } else {
      alert('Invalid Promo Code. Try "FLAVORIA20"');
    }
  };

  const handleCheckout = () => {
    if (!user) {
      alert('Please fill out your profile details before placing an order.');
      onOpenProfile();
      return;
    }

    if (items.length === 0) return;

    const newOrder = placeOrder(
      user,
      items,
      subtotal,
      taxes,
      deliveryFee,
      totalAmount,
      specialInstructions
    );

    clearCart();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#466B45', '#2D4A2D', '#D97706'],
    });

    onClose();
    onOpenTracker();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F4] shadow-2xl flex flex-col border-l border-[#2D4A2D]/10">
          
          {/* Header */}
          <div className="p-6 bg-[#2D4A2D] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-xl font-bold">Your Order Cart</h3>
                <p className="text-xs text-white/75">{items.length} items in cart</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Delivery / Pickup Switch */}
          <div className="p-4 bg-white border-b border-gray-100 flex gap-2">
            <button
              onClick={() => setOrderType('DELIVERY')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                orderType === 'DELIVERY'
                  ? 'bg-[#EAF1E8] text-[#2D4A2D] border border-[#466B45]'
                  : 'bg-gray-50 text-gray-500'
              }`}
            >
              🚀 Home Delivery
            </button>
            <button
              onClick={() => setOrderType('PICKUP')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                orderType === 'PICKUP'
                  ? 'bg-[#EAF1E8] text-[#2D4A2D] border border-[#466B45]'
                  : 'bg-gray-50 text-gray-500'
              }`}
            >
              🛍️ Store Pickup
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EAF1E8] text-[#466B45] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#2D4A2D] text-lg">Your Cart is Empty</h4>
                <p className="text-xs text-[#5C6B5E]">Explore our menu and add your favorite dishes!</p>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="p-4 rounded-2xl bg-white border border-[#2D4A2D]/10 flex gap-4 items-center shadow-xs"
                >
                  <img
                    src={cartItem.menuItem.imagePath}
                    alt={cartItem.menuItem.name}
                    className="w-16 h-16 rounded-xl object-cover bg-[#EAF1E8] shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-[#2D4A2D] truncate">
                      {cartItem.menuItem.name}
                    </h5>
                    {cartItem.selectedVariant && (
                      <p className="text-[11px] text-[#466B45]">
                        {cartItem.selectedVariant.name}
                      </p>
                    )}
                    <p className="font-bold text-sm text-[#2D4A2D] mt-1">
                      ₹{cartItem.totalItemPrice}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-[#F9F8F3] px-2 py-1 rounded-xl border border-gray-200">
                    <button
                      onClick={() => updateQuantity(cartItem.cartId, cartItem.quantity - 1)}
                      className="text-gray-500 hover:text-black p-0.5"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-[#2D4A2D] w-4 text-center">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(cartItem.cartId, cartItem.quantity + 1)}
                      className="text-gray-500 hover:text-black p-0.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(cartItem.cartId)}
                    className="text-red-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}

            {/* Promo Code Entry */}
            {items.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Ticket className="w-4 h-4 text-[#D97706] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Promo Code (FLAVORIA20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#2D4A2D]/15 text-xs text-[#2D4A2D] focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-[#D97706] text-white text-xs font-bold rounded-xl hover:bg-[#B45309]"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    ✓ 20% Voucher Applied Successfully!
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-gray-100 space-y-3">
              <div className="space-y-1.5 text-xs text-[#5C6B5E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2D4A2D]">₹{subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Voucher Discount (20%)</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (5%)</span>
                  <span>₹{taxes}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-100 font-serif-luxury font-bold text-lg text-[#2D4A2D]">
                  <span>Total Amount</span>
                  <span className="text-[#466B45]">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full btn-flavoria-green justify-center py-3 text-sm font-bold shadow-lg"
              >
                <span>Confirm & Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

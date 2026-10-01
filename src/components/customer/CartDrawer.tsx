import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Bike, Store, Ticket } from 'lucide-react';
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

  const [orderType, setOrderType] = useState<'DELIVERY' | 'DINE_IN'>('DELIVERY');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const discount = discountApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = orderType === 'DELIVERY' ? 49 : 0;
  const taxes = Math.round((subtotal - discount) * 0.05);
  const totalAmount = Math.max(0, subtotal - discount + deliveryFee + taxes);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'PANFIRE20') {
      setDiscountApplied(true);
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#1E2D24', '#C8371A', '#FFFFFF'],
        });
      } catch (e) {
        // fallback
      }
    } else {
      alert('Invalid coupon code. Try "PANFIRE20" for 20% off.');
    }
  };

  const handleCheckout = () => {
    if (!user || !user.fullName || !user.phone || (orderType === 'DELIVERY' && !user.address)) {
      alert('Please fill your contact and address details to complete the order.');
      onOpenProfile();
      return;
    }

    if (items.length === 0) return;

    placeOrder(
      user,
      items,
      subtotal,
      taxes,
      deliveryFee,
      totalAmount,
      specialInstructions
    );

    clearCart();
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#1E2D24', '#C8371A', '#FFFFFF'],
      });
    } catch (e) {
      // fallback
    }

    onClose();
    onOpenTracker();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white text-stone-900 border-l border-stone-200 modal-shadow flex flex-col h-full">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-sans text-base sm:text-lg font-bold text-stone-900">
                  Your Order
                </h3>
                <p className="text-xs text-stone-500">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in cart
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery / Dine-in Segmented Switch */}
          <div className="p-3 bg-stone-50 border-b border-stone-200/80 grid grid-cols-2 gap-2">
            <button
              onClick={() => setOrderType('DELIVERY')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                orderType === 'DELIVERY'
                  ? 'bg-[#1E2D24] text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>Doorstep Delivery</span>
            </button>
            <button
              onClick={() => setOrderType('DINE_IN')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                orderType === 'DINE_IN'
                  ? 'bg-[#1E2D24] text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Dine-In Table</span>
            </button>
          </div>

          {/* Customer Dispatch Bar */}
          <div className="px-4 py-2.5 bg-stone-50/70 border-b border-stone-200/80 flex items-center justify-between text-xs">
            <div className="truncate pr-2 text-stone-600">
              {user && user.fullName ? (
                <span>
                  <strong className="text-stone-900 font-semibold">{user.fullName}</strong> • {user.phone}
                </span>
              ) : (
                <span className="text-stone-400">Add contact details for receipt & delivery</span>
              )}
            </div>
            <button
              onClick={onOpenProfile}
              className="text-emerald-800 hover:text-emerald-950 font-bold uppercase tracking-wider shrink-0 cursor-pointer text-[11px]"
            >
              {user && user.fullName ? 'Edit' : '+ Add Details'}
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50/30">
            {items.length === 0 ? (
              <div className="text-center py-20 px-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-base font-bold text-stone-800">Your cart is empty</h4>
                <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
                  Add delicious wood-fired pizzas, dim sums, or noodle bowls from the menu.
                </p>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {/* Dietary dot */}
                        <span
                          className={`w-3 h-3 border-[1.5px] flex items-center justify-center shrink-0 ${
                            cartItem.menuItem.isVeg
                              ? 'border-emerald-600'
                              : 'border-[#C8371A]'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              cartItem.menuItem.isVeg
                                ? 'bg-emerald-600'
                                : 'bg-[#C8371A]'
                            }`}
                          />
                        </span>
                        <p className="text-sm font-bold text-stone-900 truncate">
                          {cartItem.menuItem.name}
                        </p>
                      </div>

                      {cartItem.selectedVariant && (
                        <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                          {cartItem.selectedVariant.name}
                        </p>
                      )}

                      {cartItem.selectedAddons && cartItem.selectedAddons.length > 0 && (
                        <p className="text-[11px] text-stone-400 mt-0.5 truncate">
                          +{cartItem.selectedAddons.map((a) => a.name).join(', ')}
                        </p>
                      )}

                      {cartItem.itemNotes && (
                        <p className="text-[11px] text-stone-400 italic mt-0.5 truncate">
                          Note: {cartItem.itemNotes}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(cartItem.cartId)}
                      className="p-1 text-stone-400 hover:text-[#C8371A] transition-colors cursor-pointer shrink-0"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity Stepper & Price */}
                  <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                    <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(cartItem.cartId, cartItem.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-2.5 text-center text-stone-900 min-w-[20px]">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.cartId, cartItem.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-bold text-sm text-stone-900">
                      ₹{cartItem.totalItemPrice}
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Special Instructions */}
            {items.length > 0 && (
              <div className="pt-1">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Kitchen Notes
                </label>
                <input
                  type="text"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Extra hot drizzle, cutlery requested..."
                  className="w-full px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24]"
                />
              </div>
            )}
          </div>

          {/* Footer Checkout & Receipt */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-white space-y-3">
              
              {/* Coupon Code Input */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Ticket className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Coupon (PANFIRE20)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={discountApplied}
                    className="w-full pl-8 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 uppercase placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] disabled:opacity-50"
                  />
                </div>
                <button
                  onClick={handleApplyPromo}
                  disabled={discountApplied}
                  className="px-4 py-2 bg-[#1E2D24] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#152019] transition-colors disabled:opacity-40 cursor-pointer"
                >
                  {discountApplied ? 'Applied' : 'Apply'}
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-2.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Item Subtotal</span>
                  <span className="font-bold text-stone-900">₹{subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount (20% Off)</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-stone-500">
                    {orderType === 'DELIVERY' ? 'Delivery Fee' : 'Packaging & Table Fee'}
                  </span>
                  <span className="font-bold text-stone-900">{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">GST (5%)</span>
                  <span className="font-bold text-stone-900">₹{taxes}</span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-2 text-sm font-bold text-stone-900">
                  <span>Total to Pay</span>
                  <span className="text-base text-emerald-800">₹{totalAmount}</span>
                </div>
              </div>

              {/* Payment Method Badge */}
              <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between text-xs">
                <span className="text-emerald-950 font-semibold">Payment Method:</span>
                <span className="font-bold text-emerald-800">
                  {orderType === 'DELIVERY' ? 'Cash / UPI on Delivery' : 'Pay at Counter'}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-sm font-bold flex items-center justify-between shadow-xs transition-all cursor-pointer"
              >
                <span>Confirm & Place Order</span>
                <span>₹{totalAmount}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

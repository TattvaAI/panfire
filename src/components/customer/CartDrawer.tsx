import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
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
          colors: ['#C8371A', '#161412', '#F3ECDD'],
        });
      } catch (e) {
        // fallback
      }
    } else {
      alert('Invalid coupon code. Try "PANFIRE20" for 20% off.');
    }
  };

  const handleCheckout = () => {
    if (!user || !user.fullName || !user.phone || !user.address) {
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
        colors: ['#C8371A', '#161412', '#F3ECDD'],
      });
    } catch (e) {
      // fallback
    }

    onClose();
    onOpenTracker();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#161412]/80 backdrop-blur-none animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#F3ECDD] text-[#161412] border-l-[1.5px] border-[#161412] hard-shadow-lg flex flex-col h-full">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b-[1.5px] border-[#161412] flex items-center justify-between bg-[#F3ECDD]">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8371A]">
                [ORDER TICKET]
              </div>
              <h3 className="font-headline text-2xl font-black text-[#161412] tracking-tight">
                Your Selection
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-2 py-1 border-[1.5px] border-[#161412] bg-[#161412] text-[#F3ECDD]">
                {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 border-[1.5px] border-[#161412] bg-[#F3ECDD] hover:bg-[#161412] hover:text-[#F3ECDD] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Order Type Toggle: Dine-in vs Takeaway/Delivery */}
          <div className="p-3 border-b-[1.5px] border-[#161412] bg-[#F3ECDD] grid grid-cols-2 gap-2">
            <button
              onClick={() => setOrderType('DELIVERY')}
              className={`py-2 px-3 border-[1.5px] border-[#161412] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center ${
                orderType === 'DELIVERY'
                  ? 'bg-[#161412] text-[#F3ECDD] hard-shadow-sm'
                  : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
              }`}
            >
              Takeaway / Delivery
            </button>
            <button
              onClick={() => setOrderType('DINE_IN')}
              className={`py-2 px-3 border-[1.5px] border-[#161412] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center ${
                orderType === 'DINE_IN'
                  ? 'bg-[#161412] text-[#F3ECDD] hard-shadow-sm'
                  : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/5'
              }`}
            >
              Dine-In Table
            </button>
          </div>

          {/* Customer Dispatch Bar */}
          <div className="px-4 py-2.5 bg-[#161412]/5 border-b-[1.5px] border-[#161412] flex items-center justify-between text-xs font-mono">
            <div className="truncate pr-2">
              {user && user.fullName ? (
                <span className="text-[#161412]">
                  <strong className="font-bold">{user.fullName}</strong> • {user.phone}
                </span>
              ) : (
                <span className="text-[#8A8378]">No contact details set</span>
              )}
            </div>
            <button
              onClick={onOpenProfile}
              className="text-[#C8371A] hover:underline font-bold uppercase tracking-wider shrink-0 cursor-pointer text-[11px]"
            >
              {user && user.fullName ? '[EDIT]' : '[+ SET DETAILS]'}
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F3ECDD]">
            {items.length === 0 ? (
              <div className="text-center py-20 px-4">
                <div className="w-12 h-12 border-[1.5px] border-[#161412] bg-[#F3ECDD] text-[#161412] flex items-center justify-center mx-auto mb-3 hard-shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h4 className="font-headline text-xl font-bold text-[#161412]">Your ticket is empty</h4>
                <p className="font-sans text-xs text-[#8A8378] mt-1 max-w-xs mx-auto">
                  Pick wood-fired pizzas, dim sums, or noodle bowls from the menu.
                </p>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="p-3 border-[1.5px] border-[#161412] bg-[#F3ECDD] hard-shadow-sm space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {/* Dietary dot */}
                        <span
                          className={`w-3 h-3 border-[1.5px] flex items-center justify-center shrink-0 ${
                            cartItem.menuItem.isVeg
                              ? 'border-emerald-700'
                              : 'border-[#C8371A]'
                          }`}
                          title={cartItem.menuItem.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              cartItem.menuItem.isVeg
                                ? 'bg-emerald-700'
                                : 'bg-[#C8371A]'
                            }`}
                          />
                        </span>
                        <p className="font-sans text-sm font-bold text-[#161412] truncate">
                          {cartItem.menuItem.name}
                        </p>
                      </div>

                      {cartItem.selectedVariant && (
                        <p className="font-mono text-xs text-[#C8371A] font-bold mt-0.5">
                          [ {cartItem.selectedVariant.name.toUpperCase()} ]
                        </p>
                      )}

                      {cartItem.selectedAddons && cartItem.selectedAddons.length > 0 && (
                        <p className="font-mono text-[10px] text-[#8A8378] mt-0.5 truncate">
                          + {cartItem.selectedAddons.map((a) => a.name).join(', ')}
                        </p>
                      )}

                      {cartItem.itemNotes && (
                        <p className="font-sans text-[11px] text-[#8A8378] italic mt-0.5 truncate">
                          Note: {cartItem.itemNotes}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(cartItem.cartId)}
                      className="p-1 text-[#8A8378] hover:text-[#C8371A] transition-colors cursor-pointer shrink-0"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity & Price Row */}
                  <div className="flex items-center justify-between pt-1 border-t border-[#161412]/15">
                    {/* Stepper */}
                    <div className="flex items-center border-[1.5px] border-[#161412] bg-[#F3ECDD]">
                      <button
                        onClick={() => updateQuantity(cartItem.cartId, cartItem.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-[#161412] hover:text-[#F3ECDD] transition-colors cursor-pointer text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs font-bold px-2.5 text-center text-[#161412]">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.cartId, cartItem.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-[#161412] hover:text-[#F3ECDD] transition-colors cursor-pointer text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-mono font-bold text-sm text-[#161412]">
                      ₹{cartItem.totalItemPrice}
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Special Instructions Textarea */}
            {items.length > 0 && (
              <div className="pt-2">
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                  Kitchen Notes
                </label>
                <textarea
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Extra well-done crust, sauce on the side..."
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-sans text-xs text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>
            )}
          </div>

          {/* Footer Calculation & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t-[1.5px] border-[#161412] bg-[#F3ECDD] space-y-3">
              
              {/* Coupon Code Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon (try PANFIRE20)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={discountApplied}
                  className="flex-1 px-3 py-2 bg-transparent border-[1.5px] border-[#161412] font-mono text-xs uppercase text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5 disabled:opacity-50"
                />
                <button
                  onClick={handleApplyPromo}
                  disabled={discountApplied}
                  className="px-3 py-2 bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#C8371A] transition-colors disabled:opacity-40 cursor-pointer"
                >
                  {discountApplied ? 'Applied' : 'Apply'}
                </button>
              </div>

              {/* Price Breakdown Receipt */}
              <div className="space-y-1.5 font-mono text-xs text-[#161412] border-t border-[#161412]/20 pt-2.5">
                <div className="flex justify-between">
                  <span className="text-[#8A8378]">Item Subtotal</span>
                  <span className="font-bold">₹{subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-[#C8371A]">
                    <span>Discount (20% Off)</span>
                    <span className="font-bold">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#8A8378]">
                    {orderType === 'DELIVERY' ? 'Delivery Fee' : 'Packaging & Service'}
                  </span>
                  <span className="font-bold">{deliveryFee === 0 ? '₹0 (Free)' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8378]">GST (5%)</span>
                  <span className="font-bold">₹{taxes}</span>
                </div>
                <div className="flex justify-between border-t-[1.5px] border-[#161412] pt-2 text-sm font-bold">
                  <span className="font-headline text-base font-black">Total to Pay</span>
                  <span className="font-mono text-base text-[#C8371A]">₹{totalAmount}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 bg-[#C8371A] hover:bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow hover:hard-shadow-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-between transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <span>Confirm Order →</span>
                <span className="font-mono text-sm">₹{totalAmount}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

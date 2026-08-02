import React from 'react';
import { X, Clock, CheckCircle2, Truck, UtensilsCrossed, Package } from 'lucide-react';
import { CartItem } from '../../types';
import { useOrderStore } from '../../store/useOrderStore';

interface OrderTrackerModalProps {
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ onClose }) => {
  const activeOrder = useOrderStore((state) =>
    state.orders.find((o) => o.id === state.activeCustomerOrderId)
  );

  if (!activeOrder) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-[#FBF9F4] w-full max-w-md p-8 rounded-3xl text-center relative border border-[#2D4A2D]/15 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-full bg-[#EAF1E8] text-[#466B45] flex items-center justify-center mx-auto mb-4">
            <UtensilsCrossed className="w-8 h-8" />
          </div>

          <h3 className="font-serif-luxury text-2xl font-bold text-[#2D4A2D]">No Active Order</h3>
          <p className="text-xs text-[#5C6B5E] mt-1">Place an order from our menu to track real-time delivery status.</p>

          <button
            onClick={onClose}
            className="mt-6 btn-flavoria-green text-xs px-6 py-2.5"
          >
            Explore Menu
          </button>
        </div>
      </div>
    );
  }

  const steps = [
    { label: 'Order Placed', icon: <Package className="w-5 h-5" />, done: true },
    { label: 'Kitchen Preparing', icon: <UtensilsCrossed className="w-5 h-5" />, done: activeOrder.status !== 'PENDING' },
    { label: 'Out for Delivery', icon: <Truck className="w-5 h-5" />, done: activeOrder.status === 'OUT_FOR_DELIVERY' || activeOrder.status === 'DELIVERED' },
    { label: 'Delivered', icon: <CheckCircle2 className="w-5 h-5" />, done: activeOrder.status === 'DELIVERED' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F4] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#2D4A2D]/15 relative">
        
        {/* Header */}
        <div className="bg-[#2D4A2D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Real-Time Tracker</span>
          </div>
          <h3 className="font-serif-luxury text-2xl font-bold">
            Order #{activeOrder.id}
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Estimated Delivery Time: <span className="font-bold text-amber-300">~25-35 Minutes</span>
          </p>
        </div>

        {/* Status Timeline */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="relative border-l-2 border-[#466B45]/30 ml-4 space-y-8 pl-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-center gap-4">
                <div
                  className={`absolute -left-[35px] w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.done
                      ? 'bg-[#466B45] border-[#466B45] text-white shadow-md'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {step.icon}
                </div>

                <div>
                  <h5 className={`font-bold text-sm ${step.done ? 'text-[#2D4A2D]' : 'text-gray-400'}`}>
                    {step.label}
                  </h5>
                  <p className="text-[11px] text-[#5C6B5E]">
                    {step.done ? 'Completed' : 'Pending...'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Box */}
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs space-y-2">
            <div className="flex justify-between font-bold text-[#2D4A2D]">
              <span>Items Ordered ({activeOrder.items.length})</span>
              <span>Total: ₹{activeOrder.totalAmount}</span>
            </div>
            <div className="space-y-1 text-gray-600 max-h-28 overflow-y-auto">
              {activeOrder.items.map((i: CartItem) => (
                <div key={i.cartId} className="flex justify-between">
                  <span>{i.quantity}x {i.menuItem.name}</span>
                  <span>₹{i.totalItemPrice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

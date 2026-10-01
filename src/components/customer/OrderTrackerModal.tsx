import React from 'react';
import { X, Check, Flame, Box, Bike, Clock } from 'lucide-react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
        <div className="bg-white text-stone-900 w-full max-w-md p-6 sm:p-8 rounded-2xl border border-stone-200 modal-shadow text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6" />
          </div>

          <h3 className="font-sans text-xl font-bold text-stone-900">No Active Order</h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-2 max-w-xs mx-auto">
            Place an order from our menu to track hearth preparation and live delivery progress.
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2.5 bg-[#1E2D24] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#152019] transition-colors cursor-pointer"
          >
            Explore Menu
          </button>
        </div>
      </div>
    );
  }

  const steps = [
    { label: 'Order Confirmed', desc: 'Received in kitchen queue', done: true },
    { label: 'In the Wood Hearth', desc: 'Baking at 450°C on volcanic stone', done: activeOrder.status !== 'PENDING' },
    { label: 'Packed & Dispatched', desc: 'Sealed hot for delivery or table', done: activeOrder.status === 'OUT_FOR_DELIVERY' || activeOrder.status === 'DELIVERED' },
    { label: 'Delivered / Handed Over', desc: 'Enjoy hot and fresh', done: activeOrder.status === 'DELIVERED' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white text-stone-900 w-full max-w-lg rounded-2xl border border-stone-200 modal-shadow overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-start justify-between bg-white">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mb-1">
              Live Order Tracker
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900">
              Order #{activeOrder.id}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Estimated Delivery: <strong className="text-stone-900">20–30 Minutes</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 bg-stone-50/40">
          
          {/* Timeline Steps */}
          <div className="space-y-4 bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-all ${
                    step.done
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-400 border border-stone-200'
                  }`}
                >
                  {step.done ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className={`text-xs sm:text-sm font-bold ${step.done ? 'text-stone-900' : 'text-stone-400'}`}>
                      {step.label}
                    </h5>
                    <span className="text-[10px] font-semibold uppercase text-stone-400">
                      {step.done ? 'Done' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Receipt Snapshot */}
          <div className="bg-white rounded-xl border border-stone-200/80 p-4 space-y-2 text-xs shadow-xs">
            <div className="font-bold text-stone-900 border-b border-stone-100 pb-2 flex justify-between">
              <span>Items ({activeOrder.items.length})</span>
              <span className="text-emerald-800">₹{activeOrder.totalAmount}</span>
            </div>

            <div className="space-y-1.5 pt-1">
              {activeOrder.items.map((item, i) => (
                <div key={i} className="flex justify-between text-stone-700">
                  <span className="truncate pr-2">
                    {item.quantity}x {item.menuItem.name} {item.selectedVariant ? `(${item.selectedVariant.name})` : ''}
                  </span>
                  <span className="font-semibold shrink-0">₹{item.totalItemPrice}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-100 pt-2 text-stone-500 text-[11px] space-y-0.5">
              <div><strong>Recipient:</strong> {activeOrder.user.fullName} ({activeOrder.user.phone})</div>
              {activeOrder.user.address && (
                <div className="truncate"><strong>Destination:</strong> {activeOrder.user.address}</div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#1E2D24] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#152019] transition-colors cursor-pointer"
          >
            Close & Keep Exploring
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderTrackerModal;

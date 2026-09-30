import React from 'react';
import { X, Check, Flame, Box, Bike } from 'lucide-react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161412]/80 backdrop-blur-none animate-fade-in">
        <div className="bg-[#F3ECDD] text-[#161412] w-full max-w-md p-6 border-[1.5px] border-[#161412] hard-shadow-lg text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 border-[1.5px] border-[#161412] bg-[#F3ECDD] hover:bg-[#161412] hover:text-[#F3ECDD] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 border-[1.5px] border-[#161412] bg-[#161412] text-[#F3ECDD] flex items-center justify-center mx-auto mb-3 hard-shadow-sm">
            <Flame className="w-6 h-6 text-[#C8371A]" />
          </div>

          <h3 className="font-headline text-2xl font-bold text-[#161412]">No Active Order</h3>
          <p className="font-sans text-xs text-[#8A8378] mt-2 max-w-xs mx-auto">
            Place an order from the menu to track preparation at the hearth and live dispatch.
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2.5 bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#C8371A] transition-colors cursor-pointer"
          >
            Explore Menu
          </button>
        </div>
      </div>
    );
  }

  const steps = [
    { label: 'Order Received', desc: 'Logged in the kitchen queue', done: true },
    { label: 'In the Wood Hearth', desc: 'Baking at 450°C on volcanic stone', done: activeOrder.status !== 'PENDING' },
    { label: 'Boxed & Sealed', desc: 'Inspected hot at pass station', done: activeOrder.status === 'OUT_FOR_DELIVERY' || activeOrder.status === 'DELIVERED' },
    { label: 'Delivered / Handed Over', desc: 'Enjoy immediately while hot', done: activeOrder.status === 'DELIVERED' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161412]/80 backdrop-blur-none animate-fade-in">
      <div className="bg-[#F3ECDD] text-[#161412] w-full max-w-lg border-[1.5px] border-[#161412] hard-shadow-lg overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b-[1.5px] border-[#161412] flex items-start justify-between bg-[#F3ECDD]">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8371A] mb-1">
              [LIVE ORDER TRACKER]
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#161412] tracking-tight">
              Order #{activeOrder.id}
            </h3>
            <p className="font-mono text-xs text-[#8A8378] mt-1">
              Estimated Ready: <strong className="text-[#161412]">20 - 30 Minutes</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border-[1.5px] border-[#161412] bg-[#F3ECDD] hover:bg-[#161412] hover:text-[#F3ECDD] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-[#F3ECDD]">
          
          {/* Timeline steps */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div
                  className={`w-7 h-7 border-[1.5px] border-[#161412] flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                    step.done
                      ? 'bg-[#161412] text-[#F3ECDD]'
                      : 'bg-[#F3ECDD] text-[#8A8378] opacity-50'
                  }`}
                >
                  {step.done ? <Check className="w-4 h-4 text-[#F3ECDD]" /> : idx + 1}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className={`font-mono text-xs uppercase font-bold tracking-wider ${step.done ? 'text-[#161412]' : 'text-[#8A8378]'}`}>
                      {step.label}
                    </h5>
                    <span className="font-mono text-[10px] uppercase font-bold text-[#8A8378]">
                      {step.done ? '[DONE]' : '[PENDING]'}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#8A8378] mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Snapshot Receipt */}
          <div className="border-[1.5px] border-[#161412] p-4 bg-[#161412]/5 space-y-2 font-mono text-xs">
            <div className="font-bold uppercase tracking-wider text-[#161412] border-b border-[#161412]/15 pb-1 flex justify-between">
              <span>Items ({activeOrder.items.length})</span>
              <span className="text-[#C8371A]">₹{activeOrder.totalAmount}</span>
            </div>

            <div className="space-y-1 pt-1">
              {activeOrder.items.map((item, i) => (
                <div key={i} className="flex justify-between text-[#161412]">
                  <span className="truncate pr-2">
                    {item.quantity}x {item.menuItem.name} {item.selectedVariant ? `(${item.selectedVariant.name})` : ''}
                  </span>
                  <span className="font-bold shrink-0">₹{item.totalItemPrice}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#161412]/15 pt-2 text-[#8A8378] text-[11px]">
              <div><strong>Recipient:</strong> {activeOrder.user.fullName} ({activeOrder.user.phone})</div>
              {activeOrder.user.address && (
                <div className="truncate"><strong>Address:</strong> {activeOrder.user.address}</div>
              )}
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer"
          >
            Keep Exploring Menu →
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderTrackerModal;

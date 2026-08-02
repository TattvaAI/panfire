import React, { useState } from 'react';
import { Ticket, Sparkles, Check, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export const VoucherBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleUnlock = () => {
    navigator.clipboard.writeText('FLAVORIA20');
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D97706', '#466B45', '#2D4A2D'],
    });
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <section className="py-10 bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#FFF5ED] via-[#FDF0E6] to-[#FFF8F0] p-6 sm:p-8 border-2 border-dashed border-[#D97706]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          
          {/* Left Decorative Badge */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shrink-0 shadow-lg transform -rotate-3">
              <Ticket className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-bold uppercase tracking-wider mb-1">
                <Gift className="w-3.5 h-3.5" />
                <span>Special Promo Pass</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">
                The Magical Ticket
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6B5E] mt-0.5">
                Unlock <span className="font-bold text-[#D97706]">20% OFF</span> your order on orders above ₹600 with code <code className="bg-white/80 px-2 py-0.5 rounded font-mono font-bold text-[#2D4A2D]">FLAVORIA20</code>
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              onClick={handleUnlock}
              className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Code Copied: FLAVORIA20!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>CLAIM VOUCHER NOW</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

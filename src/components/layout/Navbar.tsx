import React from 'react';
import { ShoppingBag, Calendar, Clock, User } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenTracker?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCart,
  onOpenReservation,
  onOpenTracker,
}) => {
  const items = useCartStore((state) => state.items);
  const totalCartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = useCartStore((state) => state.getSubtotal)();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img
            src="/assets/panfire-logo.svg"
            alt="PanFire Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif-clean text-xl sm:text-2xl font-black text-stone-900 tracking-tight leading-none group-hover:text-[#C8371A] transition-colors">
              PanFire
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-stone-500 font-sans mt-0.5">
              Pizza & Asian Small Plates
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600 font-sans">
          <a
            href="#"
            className="text-stone-900 hover:text-[#C8371A] transition-colors"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-[#C8371A] transition-colors"
          >
            Menu
          </a>
          <a
            href="#story"
            className="hover:text-[#C8371A] transition-colors"
          >
            Our Story
          </a>
          <a
            href="#location"
            className="hover:text-[#C8371A] transition-colors"
          >
            Hours & Location
          </a>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {onOpenTracker && (
            <button
              onClick={onOpenTracker}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              title="Track existing order"
            >
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>Track Order</span>
            </button>
          )}

          {/* Book A Table CTA Button (Client's favorite style) */}
          <button
            onClick={onOpenReservation}
            className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>Book a Table</span>
          </button>

          {/* Cart Pill Button */}
          <button
            onClick={onOpenCart}
            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-stone-200 hover:border-stone-400 text-stone-900 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer relative"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4 text-stone-700" />
            <span className="hidden sm:inline font-sans">Cart</span>
            {totalCartCount > 0 ? (
              <span className="bg-[#C8371A] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {totalCartCount}
              </span>
            ) : (
              <span className="text-stone-400 font-normal">[0]</span>
            )}
            {totalCartCount > 0 && subtotal > 0 && (
              <span className="hidden md:inline text-xs font-medium text-stone-600 pl-1 border-l border-stone-200">
                ₹{subtotal}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

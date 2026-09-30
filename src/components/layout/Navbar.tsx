import React from 'react';
import { useCartStore } from '../../store/useCartStore';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCart,
  onOpenReservation,
}) => {
  const items = useCartStore((state) => state.items);
  const totalCartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F3ECDD] border-b-[1.5px] border-[#161412]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between">
        
        {/* Logo Wordmark */}
        <a
          href="#"
          className="flex items-baseline gap-1.5 text-[#161412] hover:text-[#C8371A] transition-colors shrink-0"
        >
          <span className="font-headline text-lg sm:text-3xl font-black tracking-tight leading-none">
            PANFIRE
          </span>
          <span className="hidden md:inline-block font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A8378]">
            Pizza & Small Plates
          </span>
        </a>

        {/* Minimal Navigation: Menu, Book, Cart only */}
        <nav className="flex items-center gap-2 sm:gap-7 shrink-0">
          <a
            href="#menu"
            className="font-sans text-xs sm:text-base font-bold text-[#161412] hover:text-[#C8371A] transition-colors uppercase tracking-wider px-1"
          >
            Menu
          </a>

          <button
            onClick={onOpenReservation}
            className="font-sans text-xs sm:text-base font-bold text-[#161412] hover:text-[#C8371A] transition-colors uppercase tracking-wider cursor-pointer px-1"
          >
            Book
          </button>

          {/* Cart Button with Hard Offset Shadow */}
          <button
            onClick={onOpenCart}
            className="px-2.5 py-1 sm:px-4 sm:py-2 bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm hover:hard-shadow text-[11px] sm:text-sm font-mono font-bold uppercase tracking-wider cursor-pointer transition-all active:translate-x-[1px] active:translate-y-[1px]"
          >
            Cart [{totalCartCount}]
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;

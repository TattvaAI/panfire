import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, UtensilsCrossed, Calendar, Leaf, Heart, Search, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { usePortalStore } from '../../store/usePortalStore';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenProfile: () => void;
  onOpenTracker: () => void;
  onOpenReservation: () => void;
  wishlistCount?: number;
  onOpenWishlist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCart,
  onOpenProfile,
  onOpenTracker,
  onOpenReservation,
  wishlistCount = 0,
  onOpenWishlist,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalCartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const { currentView, setView } = usePortalStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-[#2D4A2D]/10 shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[#466B45] text-white flex items-center justify-center shadow-md group-hover:bg-[#2D4A2D] transition-colors">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif-luxury text-2xl font-bold tracking-tight text-[#2D4A2D] block leading-none">
                PanFire
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#5C6B5E] block">
                Artisanal Kitchen
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2D4A2D]">
            <a
              href="#hero"
              className="hover:text-[#466B45] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#466B45] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Home
            </a>
            <a
              href="#story"
              className="hover:text-[#466B45] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#466B45] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              About Us
            </a>
            <a
              href="#specials"
              className="hover:text-[#466B45] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#466B45] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Chef's Special
            </a>
            <a
              href="#menu"
              className="hover:text-[#466B45] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#466B45] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Menu
            </a>
            <a
              href="#gallery"
              className="hover:text-[#466B45] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#466B45] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Gallery
            </a>
            <button
              onClick={onOpenTracker}
              className="hover:text-[#466B45] transition-colors py-1 flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#466B45]" />
              Track Order
            </button>
          </nav>

          {/* Action Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Admin Switcher */}
            <button
              onClick={() => setView(currentView === 'CUSTOMER' ? 'ADMIN' : 'CUSTOMER')}
              className={`p-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentView === 'ADMIN'
                  ? 'bg-[#2D4A2D] text-white'
                  : 'bg-[#EAF1E8] text-[#2D4A2D] hover:bg-[#D4E3D1]'
              }`}
              title="Toggle Admin View"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">
                {currentView === 'ADMIN' ? 'Customer Mode' : 'Admin'}
              </span>
            </button>

            {/* Profile Button */}
            <button
              onClick={onOpenProfile}
              className="p-2.5 rounded-full bg-white text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10 transition-colors relative"
              title="User Profile"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Wishlist Button */}
            {onOpenWishlist && (
              <button
                onClick={onOpenWishlist}
                className="p-2.5 rounded-full bg-white text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10 transition-colors relative"
                title="Wishlist"
              >
                <Heart className="w-4 h-4 text-[#D97706]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D97706] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
            )}

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2.5 rounded-full bg-white text-[#2D4A2D] hover:bg-[#EAF1E8] border border-[#2D4A2D]/10 transition-colors relative"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#466B45]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#466B45] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Book A Table Primary CTA */}
            <button
              onClick={onOpenReservation}
              className="btn-flavoria-green text-sm px-4 py-2 sm:px-5 sm:py-2.5 shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Table</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

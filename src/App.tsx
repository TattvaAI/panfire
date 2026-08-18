import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/customer/HeroSection';
import { MenuSection } from './components/customer/MenuSection';
import { KitchenGallerySection } from './components/customer/KitchenGallerySection';
import { TableReservationModal } from './components/customer/TableReservationModal';
import { DishCustomizationModal } from './components/customer/DishCustomizationModal';
import { UserProfileModal } from './components/customer/UserProfileModal';
import { CartDrawer } from './components/customer/CartDrawer';
import { OrderTrackerModal } from './components/customer/OrderTrackerModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { usePortalStore } from './store/usePortalStore';
import { MenuItem } from './types';

export function App() {
  const currentView = usePortalStore((state) => state.currentView);

  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const handleToggleWishlist = (itemId: string) => {
    setWishlistIds((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1D2B1E] relative overflow-x-hidden selection:bg-[#466B45] selection:text-white">
      
      {/* Global Floating Navbar */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        wishlistCount={wishlistIds.length}
      />

      {/* Main View Switch */}
      {currentView === 'CUSTOMER' ? (
        <main className="relative z-10">
          {/* PanFire Hero Banner */}
          <HeroSection onOpenReservation={() => setIsReservationOpen(true)} />

          {/* Interactive 6-Category Menu (Signature Dishes #1 in full size) */}
          <MenuSection
            onSelectItem={(item) => setSelectedMenuItem(item)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />

          {/* Kitchen Moments Gallery Grid */}
          <KitchenGallerySection />

          {/* Curved Organic Footer */}
          <Footer />
        </main>
      ) : (
        <main className="relative z-10">
          <AdminDashboard />
        </main>
      )}

      {/* Modals & Slide-Out Drawers */}
      {selectedMenuItem && (
        <DishCustomizationModal
          item={selectedMenuItem}
          onClose={() => setSelectedMenuItem(null)}
        />
      )}

      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {isProfileOpen && (
        <UserProfileModal onClose={() => setIsProfileOpen(false)} />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOpenProfile={() => {
          setIsCartOpen(false);
          setIsProfileOpen(true);
        }}
        onOpenTracker={() => {
          setIsCartOpen(false);
          setIsTrackerOpen(true);
        }}
      />

      {isTrackerOpen && (
        <OrderTrackerModal onClose={() => setIsTrackerOpen(false)} />
      )}

    </div>
  );
}

export default App;

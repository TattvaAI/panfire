import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/customer/HeroSection';
import { MarqueeStrip } from './components/customer/MarqueeStrip';
import { MenuContainer } from './components/customer/MenuContainer';
import { StorySection } from './components/customer/StorySection';
import { BookingSection } from './components/customer/BookingSection';
import { HoursLocationSection } from './components/customer/HoursLocationSection';
import { TableReservationModal } from './components/customer/TableReservationModal';
import { UserProfileModal } from './components/customer/UserProfileModal';
import { CartDrawer } from './components/customer/CartDrawer';
import { OrderTrackerModal } from './components/customer/OrderTrackerModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { StaffPasscodeGate } from './components/admin/StaffPasscodeGate';
import { usePortalStore } from './store/usePortalStore';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  useSmoothScroll();
  const currentView = usePortalStore((state) => state.currentView);
  const isStaffAuthenticated = usePortalStore((state) => state.isStaffAuthenticated);

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  const handleOpenReservation = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsReservationOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-stone-900 relative overflow-x-hidden selection:bg-[#1E2D24] selection:text-white font-sans antialiased">
      
      {/* Modern Hospitality Navbar (Visible for Customers & Logged-in Staff) */}
      {currentView === 'CUSTOMER' && (
        <Navbar
          onOpenCart={() => setIsCartOpen(true)}
          onOpenReservation={handleOpenReservation}
          onOpenTracker={() => setIsTrackerOpen(true)}
        />
      )}

      {/* Main View: Customer Storefront or Staff POS */}
      {currentView === 'CUSTOMER' ? (
        <main className="relative z-10">
          {/* 1. Hero Section */}
          <HeroSection onOpenReservation={handleOpenReservation} />

          {/* 2. Refined Fact Strip */}
          <MarqueeStrip />

          {/* 3. The 2-Column Menu (Sticky Sidebar + Dish Cards) */}
          <MenuContainer />

          {/* 4. Story & Hearth Craft */}
          <StorySection />

          {/* 5. Clean Single-Table Booking Card */}
          <BookingSection />

          {/* 6. Hours & Location */}
          <HoursLocationSection />

          {/* 7. Modern Hospitality Footer */}
          <Footer />
        </main>
      ) : !isStaffAuthenticated ? (
        <main className="relative z-10">
          <StaffPasscodeGate />
        </main>
      ) : (
        <main className="relative z-10 pt-16">
          <AdminDashboard />
        </main>
      )}

      {/* Table Reservation Modal (Direct Popup) */}
      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Customer Profile & Address Modal */}
      {isProfileOpen && (
        <UserProfileModal onClose={() => setIsProfileOpen(false)} />
      )}

      {/* Slide-out Cart Drawer */}
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

      {/* Live Order Tracker Modal */}
      {isTrackerOpen && (
        <OrderTrackerModal onClose={() => setIsTrackerOpen(false)} />
      )}

    </div>
  );
}

export default App;

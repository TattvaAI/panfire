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
import { usePortalStore } from './store/usePortalStore';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  useSmoothScroll();
  const currentView = usePortalStore((state) => state.currentView);

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
    <div className="min-h-screen bg-[#F3ECDD] text-[#161412] relative overflow-x-hidden selection:bg-[#C8371A] selection:text-[#F3ECDD] font-sans">
      
      {/* Editorial Zine Navbar */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main View: Customer or Staff POS Admin */}
      {currentView === 'CUSTOMER' ? (
        <main className="relative z-10">
          {/* Phase 2: Editorial Hero Section */}
          <HeroSection onOpenReservation={handleOpenReservation} />

          {/* Phase 2: Concrete Facts Marquee Strip */}
          <MarqueeStrip />

          {/* Phase 3: Typographic Menu Section */}
          <MenuContainer />

          {/* Phase 4: Story Section (1 blunt paragraph + 1 big photo detail) */}
          <StorySection />

          {/* Phase 4: Stark On-Page Booking Form */}
          <BookingSection />

          {/* Phase 4: Hours & Location Section */}
          <HoursLocationSection />

          {/* Phase 4: Editorial Footer with Cropped Wordmark */}
          <Footer />
        </main>
      ) : (
        <main className="relative z-10 pt-20">
          <AdminDashboard />
        </main>
      )}

      {/* Table Reservation Modal (Alternative / Direct) */}
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

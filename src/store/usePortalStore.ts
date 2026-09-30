import { create } from 'zustand';

type PortalView = 'CUSTOMER' | 'ADMIN';

interface PortalState {
  currentView: PortalView;
  setView: (view: PortalView) => void;
  toggleView: () => void;
}

const isStaffRoute = typeof window !== 'undefined' && 
  (window.location.pathname.startsWith('/staff') || window.location.hash.includes('staff'));

export const usePortalStore = create<PortalState>((set) => ({
  currentView: isStaffRoute ? 'ADMIN' : 'CUSTOMER',
  setView: (currentView) => set({ currentView }),
  toggleView: () =>
    set((state) => ({
      currentView: state.currentView === 'CUSTOMER' ? 'ADMIN' : 'CUSTOMER',
    })),
}));

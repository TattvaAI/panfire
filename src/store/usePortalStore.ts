import { create } from 'zustand';

type PortalView = 'CUSTOMER' | 'ADMIN';

interface PortalState {
  currentView: PortalView;
  setView: (view: PortalView) => void;
  toggleView: () => void;
}

export const usePortalStore = create<PortalState>((set) => ({
  currentView: 'CUSTOMER',
  setView: (currentView) => set({ currentView }),
  toggleView: () =>
    set((state) => ({
      currentView: state.currentView === 'CUSTOMER' ? 'ADMIN' : 'CUSTOMER',
    })),
}));

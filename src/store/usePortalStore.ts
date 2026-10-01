import { create } from 'zustand';

type PortalView = 'CUSTOMER' | 'ADMIN';

interface PortalState {
  currentView: PortalView;
  isStaffAuthenticated: boolean;
  setView: (view: PortalView) => void;
  toggleView: () => void;
  authenticateStaff: (pin: string) => boolean;
  logoutStaff: () => void;
}

// Master Staff Terminal PIN (Default: 4500 based on PanFire 450°C hearth)
const MASTER_STAFF_PIN = '4500';

const isStaffRoute = typeof window !== 'undefined' && 
  (window.location.pathname.startsWith('/staff') || window.location.hash.includes('staff'));

export const usePortalStore = create<PortalState>((set, get) => ({
  currentView: isStaffRoute ? 'ADMIN' : 'CUSTOMER',
  isStaffAuthenticated: typeof window !== 'undefined' && sessionStorage.getItem('panfire-staff-auth') === 'true',

  setView: (currentView) => {
    set({ currentView });
    if (typeof window !== 'undefined') {
      if (currentView === 'ADMIN') {
        window.location.hash = 'staff';
      } else {
        if (window.location.hash.includes('staff')) {
          window.location.hash = '';
        }
      }
    }
  },

  toggleView: () => {
    const nextView = get().currentView === 'CUSTOMER' ? 'ADMIN' : 'CUSTOMER';
    get().setView(nextView);
  },

  authenticateStaff: (pin: string) => {
    if (pin.trim() === MASTER_STAFF_PIN) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('panfire-staff-auth', 'true');
      }
      set({ isStaffAuthenticated: true, currentView: 'ADMIN' });
      return true;
    }
    return false;
  },

  logoutStaff: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('panfire-staff-auth');
    }
    set({ isStaffAuthenticated: false, currentView: 'CUSTOMER' });
  },
}));

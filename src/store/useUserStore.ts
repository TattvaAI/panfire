import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile } from '../types';

interface UserState {
  user: UserProfile | null;
  setUser: (profile: UserProfile) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        id: 'usr-demo-01',
        fullName: 'Alex Vance',
        phone: '+1 (555) 019-2834',
        email: 'alex.vance@panfire.io',
        address: '742 Evergreen Terrace, Culinary District, Suite 4B',
        landmark: 'Near Central Flame Plaza',
        createdAt: new Date().toISOString(),
      },
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'panfire-user-profile',
    }
  )
);

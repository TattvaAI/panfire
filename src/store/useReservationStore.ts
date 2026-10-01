import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Reservation, ReservationStatus } from '../types';

interface ReservationState {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  updateReservationStatus: (id: string, status: ReservationStatus) => void;
}

export const useReservationStore = create<ReservationState>()(
  persist(
    (set, get) => ({
      reservations: [],
      addReservation: (reservation: Reservation) => {
        set({
          reservations: [reservation, ...get().reservations],
        });
      },
      updateReservationStatus: (id: string, status: ReservationStatus) => {
        set({
          reservations: get().reservations.map((r) =>
            r.id === id ? { ...r, status } : r
          ),
        });
      },
    }),
    {
      name: 'panfire-reservations-storage',
    }
  )
);

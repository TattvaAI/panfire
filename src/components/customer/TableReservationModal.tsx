import React, { useState } from 'react';
import { X, Check, Calendar, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useReservationStore } from '../../store/useReservationStore';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const addReservation = useReservationStore((state) => state.addReservation);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '8:00 PM',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const timeSlots = ['12:30 PM', '1:30 PM', '7:00 PM', '8:00 PM', '9:15 PM'];
  const partySizes = ['1 Guest', '2 Guests', '4 Guests', '6 Guests', '8+ Guests'];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const newId = `PF-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(newId);
    addReservation({
      id: newId,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      seating: 'Standard Hearth Dining Table',
      status: 'CONFIRMED',
      createdAt: new Date().toISOString(),
    });
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#1E2D24', '#C8371A', '#FFFFFF'],
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white text-stone-900 w-full max-w-lg rounded-2xl border border-stone-200 modal-shadow flex flex-col max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-start justify-between gap-4 bg-white">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mb-1">
              Table Reservation
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900">
              Reserve a Table
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              40 seats around our open wood hearth. Table held for 15 minutes.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 bg-stone-50/30">
          {isSubmitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Reservation Confirmed
                </span>
                <h4 className="font-serif-clean text-2xl font-bold text-stone-900">
                  {formData.name}
                </h4>
                <p className="text-xs text-stone-500 mt-1 font-mono">
                  Ref: <strong className="text-stone-900">{bookingId}</strong>
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-xs space-y-2 text-xs sm:text-sm text-left">
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-400">Date:</span>
                  <span className="font-semibold text-stone-900">{formData.date}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-400">Time:</span>
                  <span className="font-semibold text-stone-900">{formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="font-semibold text-stone-900">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Seating:</span>
                  <span className="font-semibold text-stone-900">Standard Hearth</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 bg-[#1E2D24] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#152019] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm focus:outline-none focus:border-[#1E2D24] shadow-xs"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Seating Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg text-center transition-all cursor-pointer ${
                        formData.time === slot
                          ? 'bg-[#1E2D24] text-white shadow-xs'
                          : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Party Size
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {partySizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: size })}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg text-center transition-all cursor-pointer ${
                        formData.guests === size
                          ? 'bg-[#1E2D24] text-white shadow-xs'
                          : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fixed Table Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Table Type
                </label>
                <div className="px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-100 text-stone-800 text-xs sm:text-sm font-medium flex items-center justify-between">
                  <span>Standard Dining Table (Indoor Hearth)</span>
                  <span className="text-[11px] font-bold text-stone-400">Fixed</span>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98100 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default TableReservationModal;

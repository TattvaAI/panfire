import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Users, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useReservationStore } from '../../store/useReservationStore';

export const BookingSection: React.FC = () => {
  const addReservation = useReservationStore((state) => state.addReservation);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '8:00 PM',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = ['12:30 PM', '1:30 PM', '7:00 PM', '8:00 PM', '9:15 PM'];
  const partySizes = ['1 Guest', '2 Guests', '4 Guests', '6 Guests', '8+ Guests'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const code = `PF-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(code);
    addReservation({
      id: code,
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
        origin: { y: 0.7 },
        colors: ['#1E2D24', '#C8371A', '#FFFFFF'],
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#FAFAF7] text-stone-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Table Reservation</span>
          </div>
          <h2 className="font-serif-clean text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Reserve Your Table
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 leading-relaxed">
            We seat 40 guests around our open wood hearth. Walk-in seating is always welcomed at the bar on a first-come basis.
          </p>
        </div>

        {isSubmitted ? (
          /* Confirmation Ticket */
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 card-shadow text-center space-y-6 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Reservation Confirmed
              </span>
              <h3 className="font-serif-clean text-2xl sm:text-3xl font-bold text-stone-900">
                We look forward to hosting you, {formData.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Booking Reference: <strong className="font-mono text-stone-900">{bookingRef}</strong>
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-6 border border-stone-200/80 max-w-md mx-auto grid grid-cols-2 gap-4 text-left text-xs sm:text-sm">
              <div>
                <span className="text-stone-400 block text-xs">Date:</span>
                <strong className="text-stone-800">{formData.date}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-xs">Time:</span>
                <strong className="text-stone-800">{formData.time}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-xs">Party Size:</span>
                <strong className="text-stone-800">{formData.guests}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-xs">Seating:</span>
                <strong className="text-stone-800">Standard Hearth</strong>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-sm mx-auto">
              A confirmation SMS has been dispatched. Your table will be held for 15 minutes past reservation time.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 bg-[#1E2D24] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#152019] transition-colors cursor-pointer"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          /* Clean Booking Form */
          <div className="bg-white rounded-2xl border border-stone-200 card-shadow p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm focus:outline-none focus:border-[#1E2D24] shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
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
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Party Size & Single Table Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
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
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Table Type
                  </label>
                  <div className="px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 text-xs sm:text-sm font-medium flex items-center justify-between">
                    <span>Standard Dining Table (Indoor Hearth)</span>
                    <span className="text-[11px] font-bold text-stone-400">Fixed</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Name & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Mobile Number
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

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};

export default BookingSection;

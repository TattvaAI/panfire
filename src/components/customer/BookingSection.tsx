import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const BookingSection: React.FC = () => {
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

    const code = `PF-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(code);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#C8371A', '#161412', '#F3ECDD'],
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#F3ECDD] text-[#161412] border-t-[1.5px] border-[#161412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 border-b-[1.5px] border-[#161412] pb-6">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C8371A] mb-2">
            [04] // Table Reservation
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#161412] leading-[0.95]">
            Book a Table.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8A8378] mt-3 max-w-xl">
            We seat 40 guests around our open wood hearth. Walk-ins are always welcomed at the bar counter.
          </p>
        </div>

        {isSubmitted ? (
          /* Confirmation Ticket */
          <div className="border-[1.5px] border-[#161412] bg-[#F3ECDD] p-6 sm:p-10 hard-shadow space-y-6">
            <div className="flex items-start justify-between border-b-[1.5px] border-[#161412] pb-4">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#C8371A] block">
                  Reservation Confirmed
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#161412] mt-1">
                  We look forward to hosting you, {formData.name}.
                </h3>
              </div>
              <span className="font-mono text-sm sm:text-base font-bold bg-[#161412] text-[#F3ECDD] px-3 py-1">
                {bookingRef}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs sm:text-sm">
              <div>
                <span className="text-[#8A8378] block">Date</span>
                <span className="font-bold text-[#161412]">{formData.date}</span>
              </div>
              <div>
                <span className="text-[#8A8378] block">Time</span>
                <span className="font-bold text-[#161412]">{formData.time}</span>
              </div>
              <div>
                <span className="text-[#8A8378] block">Party</span>
                <span className="font-bold text-[#161412]">{formData.guests}</span>
              </div>
              <div>
                <span className="text-[#8A8378] block">Table</span>
                <span className="font-bold text-[#161412]">Standard Hearth</span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#8A8378] pt-2 border-t-[1.5px] border-[#161412]/20">
              A confirmation SMS has been logged for {formData.phone}. Table held for 15 minutes past booking time.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  guests: '2 Guests',
                  date: new Date().toISOString().split('T')[0],
                  time: '8:00 PM',
                });
              }}
              className="px-4 py-2 border-[1.5px] border-[#161412] bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          /* Stark Brutalist Booking Form */
          <form onSubmit={handleSubmit} className="border-[1.5px] border-[#161412] bg-[#F3ECDD] p-5 sm:p-8 hard-shadow space-y-6">
            
            {/* Row 1: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1.5">
                  Reservation Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-mono text-sm text-[#161412] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1.5">
                  Seating Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 px-1 text-[11px] font-mono font-bold text-center border-[1.5px] border-[#161412] transition-colors cursor-pointer ${
                        formData.time === slot
                          ? 'bg-[#161412] text-[#F3ECDD]'
                          : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/10'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Party Size & Table Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1.5">
                  Party Size
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {partySizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: size })}
                      className={`py-2 px-1 text-[11px] font-mono font-bold text-center border-[1.5px] border-[#161412] transition-colors cursor-pointer ${
                        formData.guests === size
                          ? 'bg-[#C8371A] text-[#F3ECDD]'
                          : 'bg-[#F3ECDD] text-[#161412] hover:bg-[#161412]/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1.5">
                  Table Type (Fixed)
                </label>
                <div className="p-2.5 border-[1.5px] border-[#161412] bg-[#161412]/5 font-mono text-xs font-bold text-[#161412] flex items-center justify-between">
                  <span>Standard Dining Table (Indoor Hearth)</span>
                  <span className="text-[#C8371A]">[ONLY OPTION]</span>
                </div>
              </div>
            </div>

            {/* Row 3: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-sans text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98100 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-mono text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#C8371A] hover:bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow hover:hard-shadow-lg font-mono text-sm sm:text-base font-bold uppercase tracking-wider transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                Confirm Table Reservation →
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

export default BookingSection;

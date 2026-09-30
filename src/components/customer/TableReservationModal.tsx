import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
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
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#C8371A', '#161412', '#F3ECDD'],
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161412]/80 backdrop-blur-none">
      <div 
        className="bg-[#F3ECDD] text-[#161412] w-full max-w-lg border-[1.5px] border-[#161412] hard-shadow-lg flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b-[1.5px] border-[#161412] flex items-start justify-between gap-4 bg-[#F3ECDD]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8371A] font-bold block mb-1">
              Table Reservation // One Seating Style
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#161412] tracking-tight">
              Reserve a Table
            </h3>
            <p className="font-sans text-xs text-[#8A8378] mt-1">
              40 seats around the hearth. Table held for 15 minutes past reservation.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border-[1.5px] border-[#161412] bg-[#F3ECDD] hover:bg-[#161412] hover:text-[#F3ECDD] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 bg-[#F3ECDD]">
          {isSubmitted ? (
            <div className="space-y-5">
              <div className="border-[1.5px] border-[#161412] bg-[#161412] text-[#F3ECDD] p-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#C8371A] font-bold uppercase block">
                    Confirmed
                  </span>
                  <span className="font-headline text-xl font-bold">
                    {formData.name}
                  </span>
                </div>
                <span className="font-mono text-sm font-bold bg-[#C8371A] text-[#F3ECDD] px-2.5 py-1">
                  {bookingId}
                </span>
              </div>

              <div className="border-[1.5px] border-[#161412] p-4 font-mono text-xs space-y-2 bg-[#F3ECDD]">
                <div className="flex justify-between border-b border-[#161412]/20 pb-1.5">
                  <span className="text-[#8A8378]">Date:</span>
                  <span className="font-bold text-[#161412]">{formData.date}</span>
                </div>
                <div className="flex justify-between border-b border-[#161412]/20 pb-1.5">
                  <span className="text-[#8A8378]">Time:</span>
                  <span className="font-bold text-[#161412]">{formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#161412]/20 pb-1.5">
                  <span className="text-[#8A8378]">Party Size:</span>
                  <span className="font-bold text-[#161412]">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8378]">Table Type:</span>
                  <span className="font-bold text-[#161412]">Standard Hearth</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Date */}
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-mono text-sm text-[#161412] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>

              {/* Time */}
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
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

              {/* Party Size */}
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
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

              {/* Table Type: Fixed single table type */}
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                  Table Type
                </label>
                <div className="p-2 border-[1.5px] border-[#161412] bg-[#161412]/5 font-mono text-xs font-bold text-[#161412] flex items-center justify-between">
                  <span>Standard Dining Table (Indoor Hearth)</span>
                  <span className="text-[#C8371A]">[ONLY OPTION]</span>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-sans text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                    Phone
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

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C8371A] hover:bg-[#161412] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm hover:hard-shadow font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
                >
                  Confirm Reservation →
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

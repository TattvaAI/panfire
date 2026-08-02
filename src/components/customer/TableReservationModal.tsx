import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Utensils, CheckCircle2, Sparkles, Phone, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '7:30 PM',
    seating: 'Indoor Dining',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(newId);
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#466B45', '#2D4A2D', '#D97706', '#EAF1E8'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F4] w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-[#2D4A2D]/15 relative">
        
        {/* Header */}
        <div className="bg-[#2D4A2D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Table Reservation</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
            Book Your Table
          </h3>
          <p className="text-white/80 text-xs mt-1">
            Reserve a memorable dining experience at PanFire Artisanal Kitchen
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#EAF1E8] text-[#466B45] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#2D4A2D]">
                Reservation Confirmed!
              </h4>
              <p className="text-sm text-[#5C6B5E]">
                Thank you <span className="font-semibold text-[#2D4A2D]">{formData.name}</span>. We look forward to hosting you!
              </p>

              <div className="bg-white p-5 rounded-2xl border border-[#2D4A2D]/10 text-left max-w-md mx-auto space-y-2 text-xs text-[#2D4A2D]">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-[#5C6B5E]">Booking ID:</span>
                  <span className="font-bold text-[#466B45]">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C6B5E]">Date & Time:</span>
                  <span className="font-semibold">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C6B5E]">Party Size:</span>
                  <span className="font-semibold">{formData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C6B5E]">Seating Area:</span>
                  <span className="font-semibold">{formData.seating}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="btn-flavoria-green text-sm px-6 py-2.5"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#2D4A2D] font-semibold mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Chef Gordon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D4A2D] font-semibold mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#2D4A2D] font-semibold mb-1">Guests</label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D4A2D] font-semibold mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2D4A2D] font-semibold mb-1">Time Slot</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                    >
                      <option>12:30 PM</option>
                      <option>2:00 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:30 PM</option>
                      <option>9:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#2D4A2D] font-semibold mb-1">Seating Area</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Indoor Dining', 'Outdoor Terrace', "Chef's Table"].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFormData({ ...formData, seating: area })}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        formData.seating === area
                          ? 'border-[#466B45] bg-[#EAF1E8] text-[#2D4A2D]'
                          : 'border-gray-200 bg-white text-[#5C6B5E] hover:bg-gray-50'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#2D4A2D] font-semibold mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Anniversary celebration, dietary requirements, high chair needed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-flavoria-green justify-center py-3 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

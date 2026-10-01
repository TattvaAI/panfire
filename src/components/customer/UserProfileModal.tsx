import React, { useState } from 'react';
import { X, Check, User, Phone, MapPin, Mail } from 'lucide-react';
import { useUserStore } from '../../store/useUserStore';

interface UserProfileModalProps {
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ onClose }) => {
  const { user, setUser } = useUserStore();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: user?.address || '',
    landmark: user?.landmark || '',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setUser({ ...user, ...formData });
    } else {
      setUser({
        id: `usr-${Date.now()}`,
        ...formData,
        createdAt: new Date().toISOString(),
      });
    }
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 600);
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
              Contact Details
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900">
              Delivery & Order Info
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Used for delivery dispatch, table orders, and receipt SMS.
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

        {/* Content Form */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-stone-50/30">
          <form onSubmit={handleSave} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Vance"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98100 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Delivery Address
              </label>
              <textarea
                rows={2}
                required
                placeholder="House / Flat No., Building, Street Name, Area..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
              />
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Landmark / Delivery Instructions
              </label>
              <input
                type="text"
                placeholder="e.g. Near Metro Gate 3, Ring doorbell"
                value={formData.landmark}
                onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1E2D24] shadow-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Saved Successfully</span>
                  </>
                ) : (
                  <span>Save Information</span>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default UserProfileModal;

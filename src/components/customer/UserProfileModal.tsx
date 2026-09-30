import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
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
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#161412]/80 backdrop-blur-none animate-fade-in">
      <div 
        className="bg-[#F3ECDD] text-[#161412] w-full max-w-lg border-[1.5px] border-[#161412] hard-shadow-lg flex flex-col max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b-[1.5px] border-[#161412] flex items-start justify-between gap-4 bg-[#F3ECDD]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8371A] font-bold block mb-1">
              [00] // Order Information
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#161412] tracking-tight">
              Contact & Address
            </h3>
            <p className="font-sans text-xs text-[#8A8378] mt-1">
              Used for delivery dispatch, table orders, and receipt SMS.
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

        {/* Content Form */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-[#F3ECDD]">
          <form onSubmit={handleSave} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Vance"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-sans text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98100 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-mono text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-mono text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                Delivery Address
              </label>
              <textarea
                rows={2}
                required
                placeholder="House / Flat No., Building, Street Name, Area..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-sans text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
              />
            </div>

            {/* Landmark */}
            <div>
              <label className="font-mono text-xs font-bold uppercase text-[#161412] block mb-1">
                Landmark / Delivery Instructions
              </label>
              <input
                type="text"
                placeholder="e.g. Near Metro Gate 3, Ring doorbell"
                value={formData.landmark}
                onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                className="w-full p-2.5 bg-transparent border-[1.5px] border-[#161412] font-sans text-sm text-[#161412] placeholder-[#8A8378] focus:outline-none focus:bg-[#161412]/5"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm hover:hard-shadow font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer flex items-center justify-center gap-2"
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4 text-[#F3ECDD]" />
                    <span>Saved Successfully</span>
                  </>
                ) : (
                  <span>Save Information →</span>
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

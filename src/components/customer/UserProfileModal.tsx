import React, { useState } from 'react';
import { X, User, Phone, MapPin, Mail, Save, Heart, ShoppingBag } from 'lucide-react';
import { Order } from '../../types';
import { useUserStore } from '../../store/useUserStore';
import { useOrderStore } from '../../store/useOrderStore';

interface UserProfileModalProps {
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ onClose }) => {
  const { user, setUser } = useUserStore();
  const orders = useOrderStore((state) => state.orders);

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
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FBF9F4] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#2D4A2D]/15 relative">
        
        {/* Header */}
        <div className="bg-[#2D4A2D] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center font-bold text-xl">
              {formData.fullName ? formData.fullName.charAt(0).toUpperCase() : <User className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="font-serif-luxury text-2xl font-bold">Customer Profile</h3>
              <p className="text-xs text-white/80">Manage delivery address & account info</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-[#2D4A2D] font-semibold mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#2D4A2D] font-semibold mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2D4A2D] font-semibold mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="user@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[#2D4A2D] font-semibold mb-1">Delivery Address</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#5C6B5E] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Flat / Building, Street, Area"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#2D4A2D]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#466B45] text-[#2D4A2D]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              {saved ? (
                <span className="text-emerald-700 font-semibold text-xs">✓ Profile saved!</span>
              ) : (
                <span className="text-[#5C6B5E] text-xs">Updated in real-time</span>
              )}

              <button
                type="submit"
                className="btn-flavoria-green text-xs px-5 py-2.5"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile</span>
              </button>
            </div>
          </form>

          {/* Past Order History Section */}
          <div className="pt-4 border-t border-[#2D4A2D]/10">
            <h4 className="font-bold text-[#2D4A2D] text-sm mb-3 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#466B45]" />
              <span>Past Orders History</span>
            </h4>

            {orders.length === 0 ? (
              <p className="text-xs text-[#5C6B5E]">No previous orders recorded.</p>
            ) : (
              <div className="space-y-2 max-h-36 overflow-y-auto">
                {orders.map((ord: Order) => (
                  <div key={ord.id} className="p-3 bg-white rounded-xl border border-gray-200 flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-[#2D4A2D]">#{ord.id}</span>
                      <p className="text-[10px] text-[#5C6B5E]">{ord.placedAt}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-[#466B45]">₹{ord.totalAmount}</span>
                      <span className="block text-[10px] uppercase font-bold text-amber-600">{ord.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

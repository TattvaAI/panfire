import React, { useState } from 'react';
import {
  Flame,
  Volume2,
  VolumeX,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChefHat,
  Bike,
  PackageCheck,
  AlertCircle,
  Search,
  DollarSign,
  TrendingUp,
  SlidersHorizontal,
  UserCheck,
  RotateCcw,
  Lock,
} from 'lucide-react';
import { useOrderStore } from '../../store/useOrderStore';
import { useMenuStore } from '../../store/useMenuStore';
import { usePortalStore } from '../../store/usePortalStore';
import { useReservationStore } from '../../store/useReservationStore';
import { Order, OrderStatus } from '../../types';

export const AdminDashboard: React.FC = () => {
  const { orders, updateOrderStatus, hasNewOrderAlert, clearNewOrderAlert } = useOrderStore();
  const { menuItems, toggleItemAvailability } = useMenuStore();
  const { reservations, updateReservationStatus } = useReservationStore();
  const setView = usePortalStore((state) => state.setView);
  const logoutStaff = usePortalStore((state) => state.logoutStaff);

  const [activeTab, setActiveTab] = useState<'LIVE_ORDERS' | 'RESERVATIONS' | 'INVENTORY' | 'ANALYTICS'>('LIVE_ORDERS');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [inventorySearch, setInventorySearch] = useState('');

  // Audio Chime helper
  const triggerAudioChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      // Audio context fallbacks
    }
  };

  // Group orders by status
  const pendingOrders = orders.filter((o) => o.status === 'PENDING');
  const preparingOrders = orders.filter((o) => o.status === 'PREPARING');
  const outOrders = orders.filter((o) => o.status === 'OUT_FOR_DELIVERY');
  const completedOrders = orders.filter((o) => o.status === 'DELIVERED');

  const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'CANCELLED' ? o.totalAmount : 0), 0);

  const filteredInventory = menuItems.filter((i) =>
    i.name.toLowerCase().includes(inventorySearch.toLowerCase()) ||
    i.category.toLowerCase().includes(inventorySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#161412] text-[#F3ECDD] pt-8 pb-12 p-4 md:p-8 space-y-6 z-10 relative">
      
      {/* Top Admin Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#161412] p-5 sm:p-6 border-[1.5px] border-[#F3ECDD]/20 hard-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#F3ECDD] flex items-center justify-center font-bold font-mono">
            POS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-headline text-2xl font-black text-[#F3ECDD]">PanFire Kitchen POS</h1>
              <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-700">
                LIVE
              </span>
            </div>
            <p className="font-mono text-xs text-[#8A8378]">Kitchen pass & order dispatch terminal</p>
          </div>
        </div>

        {/* Tab Switcher & Exit Button */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex border-[1.5px] border-[#F3ECDD]/20 bg-[#161412] text-xs font-mono font-bold">
            <button
              onClick={() => setActiveTab('LIVE_ORDERS')}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                activeTab === 'LIVE_ORDERS' ? 'bg-[#F3ECDD] text-[#161412]' : 'text-[#8A8378] hover:text-[#F3ECDD]'
              }`}
            >
              Orders ({pendingOrders.length + preparingOrders.length})
            </button>
            <button
              onClick={() => setActiveTab('RESERVATIONS')}
              className={`px-3 py-1.5 transition-colors cursor-pointer border-l-[1.5px] border-[#F3ECDD]/20 ${
                activeTab === 'RESERVATIONS' ? 'bg-[#F3ECDD] text-[#161412]' : 'text-[#8A8378] hover:text-[#F3ECDD]'
              }`}
            >
              Bookings ({reservations.length})
            </button>
            <button
              onClick={() => setActiveTab('INVENTORY')}
              className={`px-3 py-1.5 transition-colors cursor-pointer border-l-[1.5px] border-[#F3ECDD]/20 ${
                activeTab === 'INVENTORY' ? 'bg-[#F3ECDD] text-[#161412]' : 'text-[#8A8378] hover:text-[#F3ECDD]'
              }`}
            >
              Stock ({menuItems.filter(i => !i.isAvailable).length} Out)
            </button>
            <button
              onClick={() => setActiveTab('ANALYTICS')}
              className={`px-3 py-1.5 transition-colors cursor-pointer border-l-[1.5px] border-[#F3ECDD]/20 ${
                activeTab === 'ANALYTICS' ? 'bg-[#F3ECDD] text-[#161412]' : 'text-[#8A8378] hover:text-[#F3ECDD]'
              }`}
            >
              Sales
            </button>
          </div>

          <button
            onClick={() => {
              setIsSoundMuted(!isSoundMuted);
              if (isSoundMuted) triggerAudioChime();
            }}
            className="p-2 border-[1.5px] border-[#F3ECDD]/20 bg-[#161412] text-[#8A8378] hover:text-[#F3ECDD] transition-colors cursor-pointer"
            title="Toggle Order Chime Sound"
          >
            {isSoundMuted ? <VolumeX className="w-4 h-4 text-[#C8371A]" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            onClick={logoutStaff}
            className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 border-[1.5px] border-[#F3ECDD]/20 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
            title="Lock Terminal & Log Out"
          >
            <Lock className="w-3.5 h-3.5 text-stone-400" />
            <span>Lock POS</span>
          </button>

          <button
            onClick={() => setView('CUSTOMER')}
            className="px-3.5 py-1.5 bg-[#C8371A] hover:bg-[#F3ECDD] hover:text-[#161412] text-[#F3ECDD] border-[1.5px] border-[#F3ECDD]/30 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            ← Back to Site
          </button>
        </div>

      </div>

      {/* New Order Alert Banner */}
      {hasNewOrderAlert && (
        <div className="max-w-7xl mx-auto glass-panel p-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <div>
              <h4 className="text-sm font-bold text-amber-300">NEW CUSTOMER ORDER RECEIVED!</h4>
              <p className="text-xs text-slate-300">A new customer order has been dispatched to the kitchen queue.</p>
            </div>
          </div>
          <button
            onClick={() => {
              clearNewOrderAlert();
              triggerAudioChime();
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 text-black font-extrabold text-xs hover:bg-amber-400 transition-colors"
          >
            Acknowledge Order Alert
          </button>
        </div>
      )}

      {/* 1. LIVE ORDERS KANBAN STREAM */}
      {activeTab === 'LIVE_ORDERS' && (
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Column 1: New Pending Orders */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-amber-500/30">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                  New Orders ({pendingOrders.length})
                </h3>
              </div>
              <div className="space-y-4">
                {pendingOrders.map((ord) => (
                  <OrderKanbanCard
                    key={ord.id}
                    order={ord}
                    onSelect={() => setSelectedOrder(ord)}
                    onAdvance={() => updateOrderStatus(ord.id, 'PREPARING')}
                    advanceLabel="Accept & Start Kitchen Prep"
                  />
                ))}
              </div>
            </div>

            {/* Column 2: Kitchen Preparing */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-blue-500/30">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <ChefHat className="w-4 h-4" />
                  Kitchen Prep ({preparingOrders.length})
                </h3>
              </div>
              <div className="space-y-4">
                {preparingOrders.map((ord) => (
                  <OrderKanbanCard
                    key={ord.id}
                    order={ord}
                    onSelect={() => setSelectedOrder(ord)}
                    onAdvance={() => updateOrderStatus(ord.id, 'OUT_FOR_DELIVERY')}
                    advanceLabel="Mark Ready for Delivery"
                  />
                ))}
              </div>
            </div>

            {/* Column 3: Out for Delivery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-purple-500/30">
                <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                  <Bike className="w-4 h-4" />
                  Out for Delivery ({outOrders.length})
                </h3>
              </div>
              <div className="space-y-4">
                {outOrders.map((ord) => (
                  <OrderKanbanCard
                    key={ord.id}
                    order={ord}
                    onSelect={() => setSelectedOrder(ord)}
                    onAdvance={() => updateOrderStatus(ord.id, 'DELIVERED')}
                    advanceLabel="Mark Order Delivered"
                  />
                ))}
              </div>
            </div>

            {/* Column 4: Completed */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-500/30">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <PackageCheck className="w-4 h-4" />
                  Completed Today ({completedOrders.length})
                </h3>
              </div>
              <div className="space-y-4">
                {completedOrders.map((ord) => (
                  <OrderKanbanCard
                    key={ord.id}
                    order={ord}
                    onSelect={() => setSelectedOrder(ord)}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 2. TABLE RESERVATIONS LOG */}
      {activeTab === 'RESERVATIONS' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h2 className="font-headline text-xl font-bold text-white">Table Reservations Log</h2>
              <p className="font-mono text-xs text-stone-400">All hearth table bookings placed via online storefront</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 rounded-lg text-xs font-mono font-bold">
                {reservations.filter((r) => r.status === 'CONFIRMED').length} Active Confirmed
              </span>
            </div>
          </div>

          {reservations.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-2xl bg-white/5 border border-white/10">
              <Clock className="w-10 h-10 text-stone-500 mx-auto mb-3" />
              <p className="text-sm font-bold text-white">No table reservations on record yet</p>
              <p className="text-xs text-stone-400 mt-1">Bookings submitted on the website will instantly appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reservations.map((res) => (
                <div
                  key={res.id}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-emerald-400">{res.id}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono uppercase tracking-wider ${
                        res.status === 'CONFIRMED'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-700'
                          : res.status === 'SEATED'
                          ? 'bg-amber-950 text-amber-400 border border-amber-700'
                          : 'bg-stone-800 text-stone-400 border border-stone-600'
                      }`}
                    >
                      {res.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans text-base font-bold text-white">{res.name}</h4>
                    <a
                      href={`tel:${res.phone}`}
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1.5 mt-0.5"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{res.phone}</span>
                    </a>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-white/5 grid grid-cols-2 gap-2 text-xs font-mono">
                    <div>
                      <span className="text-stone-400 block text-[10px]">TIME:</span>
                      <strong className="text-white">{res.time}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">PARTY:</span>
                      <strong className="text-white">{res.guests}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-400 block text-[10px]">SEATING:</span>
                      <span className="text-stone-300">{res.seating}</span>
                    </div>
                  </div>

                  {/* Status Action Buttons */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    {res.status === 'CONFIRMED' && (
                      <button
                        onClick={() => updateReservationStatus(res.id, 'SEATED')}
                        className="flex-1 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        Seat Table
                      </button>
                    )}
                    {res.status === 'SEATED' && (
                      <button
                        onClick={() => updateReservationStatus(res.id, 'COMPLETED')}
                        className="flex-1 py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        Finish Dining
                      </button>
                    )}
                    {res.status !== 'CANCELLED' && res.status !== 'COMPLETED' && (
                      <button
                        onClick={() => updateReservationStatus(res.id, 'CANCELLED')}
                        className="py-1.5 px-3 bg-white/10 hover:bg-red-950 text-stone-400 hover:text-red-300 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. MENU INVENTORY & STOCK CONTROLLER */}
      {activeTab === 'INVENTORY' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search dish to toggle stock availability..."
                value={inventorySearch}
                onChange={(e) => setInventorySearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs"
              />
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Toggling dish status live updates the customer ordering portal in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredInventory.map((item) => (
              <div
                key={item.id}
                className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.imagePath}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{item.name}</h4>
                    <p className="text-[10px] text-slate-400">{item.category} • ${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleItemAvailability(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    item.isAvailable
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30'
                  }`}
                >
                  {item.isAvailable ? 'In Stock' : 'Sold Out'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. KITCHEN ANALYTICS */}
      {activeTab === 'ANALYTICS' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                <span>TOTAL SALES REVENUE</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-4xl font-extrabold text-emerald-400 font-['Outfit']">${totalRevenue}</p>
              <p className="text-[11px] text-slate-400">Generated from {orders.length} total orders</p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                <span>ACTIVE KITCHEN ORDERS</span>
                <ChefHat className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-4xl font-extrabold text-amber-400 font-['Outfit']">
                {pendingOrders.length + preparingOrders.length}
              </p>
              <p className="text-[11px] text-slate-400">Pending prep or cook stage</p>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
                <span>TOP SELLING VERTICAL</span>
                <TrendingUp className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-3xl font-extrabold text-white font-['Outfit']">Wood-Fired Pizza</p>
              <p className="text-[11px] text-slate-400">Neapolitan & Deep Dish Chicago</p>
            </div>
          </div>
        </div>
      )}

      {/* CUSTOMER DETAILED INSPECTOR MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-extrabold text-amber-400 font-['Outfit']">CUSTOMER INSPECTOR</span>
                <h3 className="text-2xl font-extrabold text-white font-['Outfit'] mt-0.5">Order {selectedOrder.id}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
              >
                ✕
              </button>
            </div>

            {/* Customer Personal Details Box */}
            <div className="glass-card p-4 rounded-2xl border border-amber-500/30 space-y-3 bg-amber-500/5">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <UserCheck className="w-4 h-4" /> Customer Contact & Delivery Info
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-slate-400">Customer Name:</p>
                  <p className="font-bold text-white text-sm">{selectedOrder.user.fullName}</p>
                </div>
                <div>
                  <p className="text-slate-400">Phone Number:</p>
                  <p className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> {selectedOrder.user.phone}
                  </p>
                </div>
              </div>

              <div className="text-xs space-y-1 pt-2 border-t border-white/10">
                <p className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Delivery Address:
                </p>
                <p className="font-medium text-slate-200">{selectedOrder.user.address}</p>
                {selectedOrder.user.landmark && (
                  <p className="text-slate-400 italic">Landmark: {selectedOrder.user.landmark}</p>
                )}
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Order Items & Notes
              </h4>
              <div className="space-y-2 text-xs">
                {selectedOrder.items.map((item) => (
                  <div key={item.cartId} className="glass-card p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{item.quantity}x {item.menuItem.name}</p>
                      {item.selectedVariant && (
                        <p className="text-[10px] text-amber-400">{item.selectedVariant.name}</p>
                      )}
                      {item.selectedAddons.length > 0 && (
                        <p className="text-[10px] text-slate-400">Addons: {item.selectedAddons.map(a => a.name).join(', ')}</p>
                      )}
                      {item.itemNotes && (
                        <p className="text-[10px] text-amber-300 italic">Note: "{item.itemNotes}"</p>
                      )}
                    </div>
                    <span className="font-bold text-amber-400 font-mono-luxury">₹{item.totalItemPrice}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Summary & Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Total Order Payload:</span>
                <p className="text-2xl font-extrabold text-amber-400 font-mono-luxury">₹{selectedOrder.totalAmount}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-6 py-3 rounded-2xl bg-amber-500 text-black font-extrabold text-xs hover:bg-amber-400 transition-colors"
              >
                Done Inspecting
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

// Kanban Card Helper Component
interface OrderKanbanCardProps {
  order: Order;
  onSelect: () => void;
  onAdvance?: () => void;
  advanceLabel?: string;
}

const OrderKanbanCard: React.FC<OrderKanbanCardProps> = ({ order, onSelect, onAdvance, advanceLabel }) => {
  return (
    <div className="glass-card p-4 rounded-2xl border border-white/10 space-y-3 relative group hover:border-amber-500/40 transition-all">
      <div className="flex items-center justify-between text-xs">
        <span className="font-extrabold text-amber-400 font-mono-luxury">{order.id}</span>
        <span className="text-[10px] text-slate-400">
          {new Date(order.placedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      <div className="cursor-pointer" onClick={onSelect}>
        <h4 className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
          {order.user.fullName}
        </h4>
        <p className="text-xs text-amber-300 font-medium">{order.user.phone}</p>
        <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">
          {order.items.map((i) => `${i.quantity}x ${i.menuItem.name}`).join(', ')}
        </p>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-bold text-white font-mono-luxury">₹{order.totalAmount}</span>

        {onAdvance && advanceLabel && (
          <button
            onClick={onAdvance}
            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-extrabold transition-all hover:scale-105"
          >
            {advanceLabel}
          </button>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, Calendar, Sparkles, Flame } from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#FAFAF7] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Copy Left, Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call-to-actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-[#C8371A]" />
              <span>Wood-Fired Hearth & Asian Small Plates</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-clean text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.08]">
              Wood-Fired Pizza. <br />
              <span className="text-[#C8371A] font-serif-clean italic font-medium">Handcrafted</span> Asian Bites.
            </h1>

            {/* Welcoming Description */}
            <p className="font-sans text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              48-hour cold-fermented sourdough pizza baked on 450°C volcanic stone, alongside delicate dim sums, wok noodles, and street-style small plates. Made fresh to order with zero shortcuts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3.5 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-sm sm:text-base font-bold flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Explore Menu & Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 hover:border-stone-500 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-stone-600" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Hearth Quick Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-stone-200/80 max-w-lg">
              <div>
                <span className="block font-serif-clean text-xl sm:text-2xl font-black text-stone-900">450°C</span>
                <span className="text-xs font-medium text-stone-500">Volcanic Stone Oven</span>
              </div>
              <div>
                <span className="block font-serif-clean text-xl sm:text-2xl font-black text-stone-900">48h</span>
                <span className="text-xs font-medium text-stone-500">Slow Cold Ferment</span>
              </div>
              <div>
                <span className="block font-serif-clean text-xl sm:text-2xl font-black text-stone-900">90s</span>
                <span className="text-xs font-medium text-stone-500">Blistered Crust Bake</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100 card-shadow group">
              <div className="aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden">
                <img
                  src="/images/hero-pizza-oven.avif"
                  alt="Freshly baked wood-fired pizza from the stone hearth"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-stone-200/80 shadow-md flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Signature Hearth Margherita</h4>
                  <p className="text-[11px] text-stone-500">San Marzano Sugo & Fresh Fior di Latte</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-lg">
                  ₹445
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;

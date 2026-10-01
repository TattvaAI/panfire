import React from 'react';
import { Clock, MapPin, Phone, Mail, Navigation } from 'lucide-react';

export const HoursLocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-white text-stone-900 border-t border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Service & Location</span>
          </div>
          <h2 className="font-serif-clean text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Hours & Hearth
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 leading-relaxed">
            Join us for lunch, dinner, or drop by our takeaway window in Connaught Market.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Weekly Service Schedule (6 Cols) */}
          <div className="lg:col-span-6 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 card-shadow space-y-6">
            <h3 className="font-serif-clean text-xl font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-800" />
              <span>Kitchen Schedule</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div className="border-b border-stone-200/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Lunch Service
                </span>
                <span className="font-serif-clean text-2xl font-bold text-stone-900 block mt-0.5">
                  12:00 PM — 3:30 PM
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Tuesday through Sunday (Takeaway window opens at 12:00)
                </span>
              </div>

              <div className="border-b border-stone-200/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Dinner Service
                </span>
                <span className="font-serif-clean text-2xl font-bold text-stone-900 block mt-0.5">
                  6:30 PM — 11:00 PM
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Last pizza into the stone hearth at 10:30 PM
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8371A] block">
                  Closed
                </span>
                <span className="font-serif-clean text-2xl font-bold text-stone-900 block mt-0.5">
                  Every Monday
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  48-hour dough fermentation & oven maintenance rest
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Location Card (6 Cols) */}
          <div className="lg:col-span-6 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 card-shadow flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif-clean text-xl font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C8371A]" />
                <span>The Pizzeria & Bar</span>
              </h3>

              <div className="space-y-2">
                <h4 className="font-serif-clean text-2xl font-bold text-stone-900">
                  14 Hearth Lane, Corner Market
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Connaught Outer Circle, New Delhi 110001 <br />
                  <span className="text-stone-400 text-xs">Two blocks east of the Metro station, behind the red brick roastery.</span>
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700 border-t border-stone-200/80 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-stone-400" />
                  <span>Direct Line: <strong>+91 98100 45290</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-stone-400" />
                  <span>Inquiries: <strong>hearth@panfire.in</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#1E2D24] hover:bg-[#152019] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HoursLocationSection;

import React from 'react';
import { Clock, MapPin, Phone, Instagram, Navigation } from 'lucide-react';

export const HoursLocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-white text-stone-900 border-t border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold mb-2.5 border border-stone-200">
            <Clock className="w-3.5 h-3.5 text-[#C8371A]" />
            <span>Service & Location</span>
          </div>
          <h2 className="font-serif-clean text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Hours & Hearth
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 leading-relaxed font-sans">
            Join us for lunch, dinner, or takeaway at Omaxe Clockton Highstreet, New Chandigarh.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Weekly Service Schedule (6 Cols) */}
          <div className="lg:col-span-6 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 card-shadow space-y-6">
            <h3 className="font-serif-clean text-xl font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C8371A]" />
              <span>Kitchen Schedule</span>
            </h3>

            <div className="space-y-4 text-sm font-sans">
              <div className="border-b border-stone-200/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Operating Hours
                </span>
                <span className="font-serif-clean text-2xl font-bold text-stone-900 block mt-0.5">
                  12:00 PM — 11:00 PM
                </span>
                <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                  Open Everyday • Monday through Sunday
                </span>
              </div>

              <div className="border-b border-stone-200/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Dine-In & Takeaway
                </span>
                <span className="font-serif-clean text-xl font-bold text-stone-900 block mt-0.5">
                  Continuous All-Day Service
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Fresh wood-fired pizzas, handcrafted dim sums, wok noodles & small plates
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8371A] block">
                  Kitchen Last Order
                </span>
                <span className="font-serif-clean text-xl font-bold text-stone-900 block mt-0.5">
                  10:30 PM
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Final pizzas into the 450°C stone hearth and last wok tosses
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Location Card (6 Cols) */}
          <div className="lg:col-span-6 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 card-shadow flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif-clean text-xl font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C8371A]" />
                <span>The Pizzeria & Kitchen</span>
              </h3>

              <div className="space-y-2">
                <h4 className="font-serif-clean text-2xl font-bold text-stone-900">
                  SCO 91, Omaxe Clockton Highstreet Market
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  New Chandigarh, Punjab <br />
                  <span className="text-stone-400 text-xs">Highstreet market promenade, ground level.</span>
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 border-t border-stone-200/80 pt-4 font-sans">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C8371A] shrink-0" />
                  <span>
                    Mobile / Orders:{' '}
                    <a
                      href="tel:+917814219191"
                      className="font-bold text-stone-900 hover:text-[#C8371A] transition-colors font-mono"
                    >
                      +91 78142 19191
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#C8371A] shrink-0" />
                  <span>
                    Instagram:{' '}
                    <a
                      href="https://www.instagram.com/panfire_newchandigarh?cplk=Nnpma3cxeHJ5cTZu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-stone-900 hover:text-[#C8371A] transition-colors"
                    >
                      @panfire_newchandigarh
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.app.goo.gl/vEzf4jEKKoFkfGqz8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
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

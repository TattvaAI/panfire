import React from 'react';

export const HoursLocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-28 bg-[#F3ECDD] text-[#161412] border-t-[1.5px] border-[#161412]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b-[1.5px] border-[#161412] pb-6">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C8371A] mb-2">
            [05] // Service & Location
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#161412] leading-[0.95]">
            Hours & Hearth.
          </h2>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Service Hours (Huge Type) - 6 Columns */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A8378] block">
              // Weekly Kitchen Schedule
            </span>

            <div className="space-y-4 font-mono">
              <div className="border-b-[1.5px] border-[#161412] pb-4">
                <span className="text-xs uppercase text-[#8A8378] block">Lunch Service</span>
                <span className="font-headline text-2xl sm:text-4xl font-black text-[#161412] block mt-1">
                  12:00 — 15:30
                </span>
                <span className="text-xs text-[#8A8378] block mt-1">
                  Tuesday through Sunday (Takeaway window opens at 12:00)
                </span>
              </div>

              <div className="border-b-[1.5px] border-[#161412] pb-4">
                <span className="text-xs uppercase text-[#8A8378] block">Dinner Service</span>
                <span className="font-headline text-2xl sm:text-4xl font-black text-[#161412] block mt-1">
                  18:30 — 23:00
                </span>
                <span className="text-xs text-[#8A8378] block mt-1">
                  Last pizza into the flame at 22:30
                </span>
              </div>

              <div className="border-b-[1.5px] border-[#161412] pb-4">
                <span className="text-xs uppercase text-[#C8371A] block font-bold">Closed</span>
                <span className="font-headline text-2xl sm:text-4xl font-black text-[#161412] block mt-1">
                  Every Monday
                </span>
                <span className="text-xs text-[#8A8378] block mt-1">
                  Dough fermentation & oven maintenance rest
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Location & Direct Contact - 6 Columns */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8A8378] block">
              // The Pizzeria Address
            </span>

            <div className="border-[1.5px] border-[#161412] bg-[#F3ECDD] p-6 sm:p-8 hard-shadow space-y-6">
              <div>
                <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#161412] tracking-tight">
                  14 Hearth Lane, Corner Market
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#8A8378] mt-2 leading-relaxed">
                  Connaught Outer Circle, New Delhi 110001 <br />
                  Two blocks east of the Metro station, behind the red brick roastery.
                </p>
              </div>

              <div className="border-t-[1.5px] border-[#161412]/20 pt-4 font-mono text-xs sm:text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#8A8378]">Direct Table Line:</span>
                  <a href="tel:+919810045290" className="font-bold text-[#161412] hover:text-[#C8371A] transition-colors">
                    +91 98100 45290
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8378]">Inquiries:</span>
                  <span className="font-bold text-[#161412]">hearth@panfire.in</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-3 px-5 bg-[#161412] hover:bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <p className="font-sans text-xs text-[#8A8378] leading-relaxed">
              Street parking available along Hearth Lane. Walk-in seating available around the bar on a first-come basis.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HoursLocationSection;

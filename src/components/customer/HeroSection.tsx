import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenReservation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 bg-[#F3ECDD] text-[#161412] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-end">
          
          {/* Main Headline & Statement - 8 Columns */}
          <div ref={headlineRef} className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C8371A]">
              Pizzeria & Asian Small Plates / 450°C
            </div>

            {/* Hero Headline: fluid clamp tuned for all viewports without horizontal overflow */}
            <h1 className="font-headline text-[clamp(1.85rem,6.5vw,7.5rem)] font-black tracking-[-0.035em] leading-[0.95] text-[#161412] break-words">
              Hot Wood Fire. <br />
              <span className="italic font-normal text-[#C8371A]">Blistered</span> Crust. <br />
              Zero Shortcuts.
            </h1>

            {/* Blunt, unpolished editorial copy (17-18px) */}
            <p className="font-sans text-base sm:text-lg text-[#161412] max-w-2xl leading-relaxed font-medium pt-1">
              48-hour cold-fermented sourdough pizza baked on hot volcanic stone in 90 seconds. Handcrafted dim sum, wok noodles, and street-style Mexican plates. Loud, simple, real.
            </p>

            {/* Actions: One Primary CTA + One Text Link */}
            <div className="flex items-center gap-5 sm:gap-8 pt-3 flex-wrap">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3.5 sm:px-8 sm:py-4 bg-[#C8371A] text-[#F3ECDD] border-[1.5px] border-[#161412] hard-shadow hover:hard-shadow-lg active:translate-x-[2px] active:translate-y-[2px] font-sans font-bold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer rounded-[2px]"
              >
                Order now
              </button>

              <button
                onClick={onOpenReservation}
                className="font-sans font-bold text-sm sm:text-base text-[#161412] hover:text-[#C8371A] underline underline-offset-8 decoration-[1.5px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book a table
              </button>
            </div>

          </div>

          {/* Right Column: Concrete Specs Stamp - 4 Columns */}
          <div className="lg:col-span-4 space-y-4">
            <div className="border-[1.5px] border-[#161412] bg-[#F3ECDD] p-4 sm:p-5 hard-shadow rounded-[2px] mr-1 mb-1 sm:mr-0 sm:mb-0">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A8378] block mb-2 font-bold">
                Oven Specifications
              </span>
              <div className="space-y-2 text-xs sm:text-sm font-mono text-[#161412]">
                <div className="flex justify-between border-b border-[#161412]/20 pb-1">
                  <span>Hearth Temp</span>
                  <span className="font-bold">450°C (842°F)</span>
                </div>
                <div className="flex justify-between border-b border-[#161412]/20 pb-1">
                  <span>Bake Time</span>
                  <span className="font-bold">90 Seconds</span>
                </div>
                <div className="flex justify-between border-b border-[#161412]/20 pb-1">
                  <span>Ferment</span>
                  <span className="font-bold">48 Hours Cold</span>
                </div>
                <div className="flex justify-between">
                  <span>Firewood</span>
                  <span className="font-bold">Oak & Beech</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Bleed Pizza Leaving The Oven Image */}
        <div className="mt-10 sm:mt-16 border-[1.5px] border-[#161412] bg-[#161412] overflow-hidden rounded-[2px] relative group">
          <div className="h-[320px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden">
            <img
              ref={imageRef}
              src="/images/hero-pizza-oven.avif"
              alt="Wood-fired pizza leaving the 450°C oven"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-[#161412] text-[#F3ECDD] px-3 py-1 sm:px-3.5 sm:py-1.5 border-[1.5px] border-[#F3ECDD] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            Hearth 01 / Fresh from the fire
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

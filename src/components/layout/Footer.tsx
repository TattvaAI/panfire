import React from 'react';
import { usePortalStore } from '../../store/usePortalStore';

export const Footer: React.FC = () => {
  const setView = usePortalStore((state) => state.setView);

  return (
    <footer className="bg-[#161412] text-[#F3ECDD] pt-16 sm:pt-24 border-t-[1.5px] border-[#161412] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Links and Blunt Philosophy */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b-[1.5px] border-[#F3ECDD]/15">
          
          {/* Brand Philosophy */}
          <div className="max-w-md space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8371A] font-bold block">
              PanFire Pizzeria & Asian Small Plates
            </span>
            <p className="font-sans text-sm sm:text-base text-[#8A8378] leading-relaxed">
              48-hour cold-fermented sourdough pizza baked on volcanic stone at 450°C. Handcrafted dim sum, wok noodles, and street bites with zero shortcuts.
            </p>
          </div>

          {/* 3-4 Direct Text Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href="#menu"
              className="text-[#F3ECDD] hover:text-[#C8371A] transition-colors"
            >
              Menu
            </a>

            <a
              href="#booking"
              className="text-[#F3ECDD] hover:text-[#C8371A] transition-colors"
            >
              Book Table
            </a>

            <a
              href="#location"
              className="text-[#F3ECDD] hover:text-[#C8371A] transition-colors"
            >
              Hours & Location
            </a>

            <button
              onClick={() => setView('ADMIN')}
              className="text-[#8A8378] hover:text-[#F3ECDD] transition-colors cursor-pointer"
            >
              Staff POS
            </button>
          </nav>

        </div>

        {/* Middle Metadata Row */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8A8378] uppercase">
          <span>© 2026 PANFIRE PIZZERIA & SMALL PLATES. ALL RIGHTS RESERVED.</span>
          <span>WOOD-FIRED • SAN MARZANO • 450°C STONE HEARTH</span>
        </div>

      </div>

      {/* Huge Cropped Wordmark Bleeding Off The Bottom Edge */}
      <div className="w-full overflow-hidden leading-none pointer-events-none mt-8 sm:mt-12 select-none -mb-3 sm:-mb-6 md:-mb-10">
        <span className="font-headline text-[clamp(5.5rem,21vw,23rem)] font-black tracking-tighter text-[#F3ECDD]/[0.07] block text-center sm:text-left uppercase whitespace-nowrap">
          PANFIRE
        </span>
      </div>

    </footer>
  );
};

export default Footer;

import React from 'react';
import { Lock } from 'lucide-react';
import { usePortalStore } from '../../store/usePortalStore';

export const Footer: React.FC = () => {
  const setView = usePortalStore((state) => state.setView);

  return (
    <footer className="bg-[#181B18] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Links */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-stone-800/80">
          
          {/* Brand Intro */}
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-serif-clean text-2xl font-black text-white">
                PanFire
              </span>
              <span className="text-xs text-stone-400 font-medium">
                Pizzeria & Asian Small Plates
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-sans">
              48-hour cold-fermented sourdough pizza baked on 450°C volcanic stone. Handcrafted dim sums, wok noodles, and street-style bites with zero shortcuts.
            </p>
            <div className="pt-1 text-xs text-stone-400 font-sans space-y-1">
              <p>SCO 91, Omaxe Clockton Highstreet Market, New Chandigarh</p>
              <p className="flex items-center gap-3">
                <a href="tel:+917814219191" className="text-stone-300 hover:text-white font-mono">
                  +91 78142 19191
                </a>
                <span>•</span>
                <span className="text-emerald-400">Open Everyday 12 PM – 11 PM</span>
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col gap-4">
            <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-semibold text-stone-300 font-sans">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#menu" className="hover:text-white transition-colors">
                Menu
              </a>
              <a href="#story" className="hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#booking" className="hover:text-white transition-colors">
                Book a Table
              </a>
              <a href="#location" className="hover:text-white transition-colors">
                Hours & Location
              </a>
            </nav>
            <div className="flex items-center gap-4 text-xs font-semibold text-stone-400 font-sans">
              <a
                href="https://www.instagram.com/panfire_newchandigarh?cplk=Nnpma3cxeHJ5cTZu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-stone-300"
              >
                Instagram: @panfire_newchandigarh
              </a>
              <span>•</span>
              <a
                href="https://maps.app.goo.gl/vEzf4jEKKoFkfGqz8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-stone-300"
              >
                Directions on Google Maps
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <span>© 2026 PanFire Restaurant & Hospitality. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span>Oak Wood Fired • 450°C Volcanic Hearth • New Chandigarh</span>
            <button
              onClick={() => setView('ADMIN')}
              className="text-stone-600 hover:text-stone-400 transition-colors p-1 rounded cursor-pointer"
              title="Staff Terminal Access"
              aria-label="Staff Terminal Access"
            >
              <Lock className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

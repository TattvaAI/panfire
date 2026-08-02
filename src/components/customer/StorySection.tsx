import React from 'react';
import { Leaf, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#FBF9F4] relative overflow-hidden">
      
      {/* Background soft leaf graphic */}
      <div className="absolute top-10 left-5 w-64 h-64 bg-[#EAF1E8]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase with experience badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl max-w-lg mx-auto lg:mx-0">
              <img
                src='/assets/pizza/classic-margherita-wuth-pesto-drizzle.webp'
                alt="PanFire Artisanal Craft"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#466B45]">
                  Authentic Neapolitan & Asian Craft
                </p>
                <h5 className="font-serif-luxury text-lg font-bold text-[#2D4A2D] mt-0.5">
                  Fresh Handcrafted Every Day
                </h5>
              </div>
            </div>

            {/* Experience Pill Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-5 rounded-3xl shadow-xl border border-[#2D4A2D]/10 flex items-center gap-4 max-w-xs">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF1E8] text-[#466B45] flex items-center justify-center font-serif-luxury font-bold text-2xl shrink-0">
                10+
              </div>
              <div>
                <p className="font-bold text-[#2D4A2D] text-sm">Years of Experience</p>
                <p className="text-xs text-[#5C6B5E]">Mastering Wood-Fired & Asian Wok Art</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1E8] text-[#2D4A2D] text-xs font-semibold">
              <Leaf className="w-4 h-4 text-[#466B45]" />
              <span>OUR STORY</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#2D4A2D] leading-tight">
              Where Taste Meets <span className="text-[#466B45] italic">Tradition</span>
            </h2>

            <p className="text-[#5C6B5E] text-base leading-relaxed">
              At PanFire, we believe good food brings people together. Our dishes are crafted with passion, inspired by time-honored global recipes and made with the freshest local & imported organic ingredients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#466B45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2D4A2D] text-sm">100% Fresh Dough & Produce</h4>
                  <p className="text-xs text-[#5C6B5E]">Fermented for 48 hours for light digestion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#466B45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2D4A2D] text-sm">Artisanal Wood-Fired Oven</h4>
                  <p className="text-xs text-[#5C6B5E]">Baked at 450°C for signature Neapolitan crust.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                className="btn-flavoria-green inline-flex items-center gap-2"
              >
                <span>Discover Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

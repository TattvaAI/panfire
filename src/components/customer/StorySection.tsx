import React from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-white text-stone-900 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Big Detail Photo with Rounded Corners (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-stone-200 card-shadow relative group">
              <div className="h-[340px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/story-oven-fire.avif"
                  alt="Blistered sourdough crust detail from the wood oven"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Gentle Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-stone-200 shadow-sm text-xs font-semibold text-stone-800">
                48-Hour Cold Ferment • Volcanic Stone Bake
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-[#C8371A]" />
              <span>The Dough & The Hearth</span>
            </div>

            <h2 className="font-serif-clean text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-stone-900">
              Naturally Leavened. <br />
              <span className="italic font-medium text-[#C8371A]">Wood</span> Fired.
            </h2>

            <p className="font-sans text-base text-stone-600 leading-relaxed">
              No commercial yeast, no dough conditioners, no rushed proofs. We cold-ferment our sourdough for 48 hours with organic stoneground flour, pure water, and sea salt. 
            </p>

            <p className="font-sans text-base text-stone-600 leading-relaxed">
              Our hearth runs on split oak and beech wood at 450°C. In ninety seconds on volcanic stone, the cornicione blisters into a light, airy crust while caramelising the San Marzano tomato sugo. That is our entire craft.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              <div>
                <span className="block font-serif-clean text-xl font-bold text-stone-900">100% Organic</span>
                <span className="text-xs text-stone-500 font-medium">Stoneground Italian flour</span>
              </div>
              <div>
                <span className="block font-serif-clean text-xl font-bold text-stone-900">Zero Additives</span>
                <span className="text-xs text-stone-500 font-medium">Flour, water, wild leaven, salt</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StorySection;

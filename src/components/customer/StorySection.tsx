import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-28 bg-[#F3ECDD] text-[#161412] border-t-[1.5px] border-[#161412]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Big Detail Photo (Blistered Leopard Char) - 7 Columns */}
          <div className="lg:col-span-7">
            <div className="border-[1.5px] border-[#161412] bg-[#161412] hard-shadow overflow-hidden relative group">
              <div className="h-[360px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden">
                <img
                  src="/images/story-oven-fire.avif"
                  alt="Blistered sourdough crust detail from the wood oven"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  decoding="sync"
                />
              </div>

              {/* Technical Caption Stamp */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#F3ECDD] text-[#161412] px-3 py-1 border-[1.5px] border-[#161412] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                FIG. 03 / LEOPARD CRUST DETAIL (48H FERMENT)
              </div>
            </div>
          </div>

          {/* Right Column: One Blunt Paragraph - 5 Columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C8371A]">
              [03] // The Dough & The Hearth
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-[#161412]">
              Naturally Leavened. <br />
              <span className="italic font-normal text-[#C8371A]">Wood</span> Fired.
            </h2>

            {/* One short blunt paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#161412] leading-relaxed font-medium pt-2">
              No commercial yeast, no dough conditioners, no rushed proofs. We cold-ferment our sourdough for 48 hours with organic stoneground flour, pure water, and sea salt. The oven runs on split oak and beech wood at 450°C. Ninety seconds on volcanic stone blisters the cornicione and caramelises the San Marzano tomato sugo. That is the entire secret.
            </p>

            <div className="pt-2 font-mono text-xs uppercase font-bold tracking-wider text-[#8A8378] border-t-[1.5px] border-[#161412]/20">
              Oak Wood • Natural Ferment • 90 Seconds • Zero Additives
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StorySection;

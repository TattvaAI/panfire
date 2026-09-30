import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const facts = [
    'DOUGH RESTS 48 HOURS',
    'OVEN HEATED TO 450°C',
    '90 SECONDS IN THE FLAME',
    'COLD-FERMENTED SOURDOUGH',
    'WOK-CHARRED ASIAN PLATES',
    'ZERO PRESERVATIVES',
  ];

  return (
    <div className="w-full bg-[#161412] text-[#F3ECDD] border-y-[1.5px] border-[#161412] py-3 sm:py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {/* Render twice for continuous loop */}
        {[...facts, ...facts].map((fact, index) => (
          <div key={index} className="flex items-center">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] px-6 sm:px-8 whitespace-nowrap">
              {fact}
            </span>
            <span className="text-[#C8371A] text-lg font-black select-none">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;

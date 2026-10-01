import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const facts = [
    '48-Hour Cold Fermented Dough',
    'Volcanic Stone Hearth at 450°C',
    '90-Second Wood-Fired Bake',
    'Handcrafted Dim Sum & Baos',
    'Wok-Fired Asian Small Plates',
    'Pure Natural Ingredients',
  ];

  return (
    <div className="w-full bg-[#181B18] text-stone-300 border-y border-stone-800 py-2.5 sm:py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {[...facts, ...facts].map((fact, index) => (
          <div key={index} className="flex items-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider px-6 sm:px-8 whitespace-nowrap text-stone-300">
              {fact}
            </span>
            <span className="text-[#C8371A] text-xs font-bold select-none">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;

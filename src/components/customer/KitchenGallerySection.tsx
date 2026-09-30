import React from 'react';
import { Instagram, ArrowUpRight, Camera } from 'lucide-react';

export const KitchenGallerySection: React.FC = () => {
  const galleryItems = [
    {
      title: 'Neapolitan Wood-Fired Margherita',
      image: '/assets/pizza/classic-margherita-wuth-pesto-drizzle.avif',
      category: 'Stone Oven Pizza',
    },
    {
      title: 'Handmade Steamed Dim Sums',
      image: '/assets/dim-sums/spinach-and-cream-cheese-dim-sum.avif',
      category: 'Cantonese Dim Sum',
    },
    {
      title: 'Sourdough Smash Burger',
      image: '/assets/sourdough-burgers/smash-chicken-cheese-sourdough-burger.avif',
      category: 'Artisanal Burger',
    },
    {
      title: 'Rainbow Sushi Roll',
      image: '/assets/sushi/rainbow-sushi.avif',
      category: 'Hand-Rolled Sushi',
    },
    {
      title: 'Fettuccine Alfredo',
      image: '/assets/pasta/alfredo-pasta.avif',
      category: 'Handmade Pasta',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Kitchen Visuals</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Fresh from the Kitchen
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              A peek inside our kitchen stations, stone hearth, and wok fires.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#F97316]" />
            <span>@PanFireKitchen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-[#16181F] border border-white/[0.08] hover:border-[#F97316]/40 shadow-md transition-all duration-300 aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-3 sm:p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] mb-0.5">
                  {item.category}
                </span>
                <h5 className="text-xs sm:text-sm font-bold leading-tight line-clamp-2">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KitchenGallerySection;

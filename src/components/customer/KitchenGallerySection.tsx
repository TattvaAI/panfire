import React from 'react';
import { Instagram, Heart, Play, Eye } from 'lucide-react';

export const KitchenGallerySection: React.FC = () => {
  const galleryItems = [
    {
      title: 'Neapolitan Wood-Fired Magic',
      image: '/assets/pizza/classic-margherita-wuth-pesto-drizzle.webp',
      likes: '1.4k',
      category: 'Pizza',
    },
    {
      title: 'Handmade Steamed Dim Sums',
      image: '/assets/dim-sums/spinach-and-cream-cheese-dim-sum.webp',
      likes: '980',
      category: 'Dim Sum',
    },
    {
      title: 'Sourdough Smash Burger',
      image: '/assets/sourdough-burgers/smash-chicken-cheese-sourdough-burger.webp',
      likes: '2.1k',
      category: 'Burgers',
    },
    {
      title: 'Fresh Salmon & Avocado Sushi',
      image: '/assets/sushi/rainbow-sushi.webp',
      likes: '3.2k',
      category: 'Sushi',
    },
    {
      title: 'Artisanal Creamy Alfredo Pasta',
      image: '/assets/pasta/alfredo-pasta.webp',
      likes: '1.8k',
      category: 'Pasta',
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-[#F2F7F1]/50 border-t border-[#2D4A2D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1E8] text-[#2D4A2D] text-xs font-semibold mb-2">
              <Instagram className="w-4 h-4 text-[#466B45]" />
              <span>@PanFireKitchen</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2D4A2D]">
              What's In Our Kitchen?
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B5E] mt-1">
              Fresh moments & daily kitchen creations straight from our master chefs
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center gap-3 text-xs font-semibold text-[#466B45]">
            <span>Follow on Instagram</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#2D4A2D]/10 shadow-sm">
              <Instagram className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#2D4A2D]/10 shadow-sm hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#466B45] text-white px-2 py-0.5 rounded-full inline-block mb-1">
                    {item.category}
                  </span>
                  <h5 className="font-semibold text-xs leading-snug line-clamp-1">
                    {item.title}
                  </h5>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/80 mt-1">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{item.likes} likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

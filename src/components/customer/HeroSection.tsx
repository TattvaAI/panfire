import React, { useState } from 'react';
import { Leaf, Calendar, UtensilsCrossed, Star, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  const heroDishes = [
    {
      name: 'Classic Margherita w/ Pesto',
      category: 'Wood-Fired Pizza',
      price: '₹445',
      image: '/assets/pizza/classic-margherita-wuth-pesto-drizzle.avif',
      rating: '4.9',
    },
    {
      name: 'Spinach & Cream Cheese Dim Sum',
      category: 'Handcrafted Dim Sum',
      price: '₹345',
      image: '/assets/dim-sums/spinach-and-cream-cheese-dim-sum.avif',
      rating: '4.8',
    },
    {
      name: 'Smash Chicken Cheese Burger',
      category: 'Wood-Fired Sourdough',
      price: '₹380',
      image: '/assets/sourdough-burgers/smash-chicken-cheese-sourdough-burger.avif',
      rating: '4.9',
    },
    {
      name: 'Creamy Alfredo Pasta',
      category: 'Italian Pasta',
      price: '₹420',
      image: '/assets/pasta/alfredo-pasta.avif',
      rating: '4.8',
    },
    {
      name: 'Peri-Peri Chicken Sushi',
      category: 'Artisan Sushi',
      price: '₹445',
      image: '/assets/sushi/peri-peri-chicken-sushi.avif',
      rating: '4.9',
    },
  ];

  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const activeDish = heroDishes[activeDishIndex];

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#FBF9F4] relative overflow-hidden">
      
      {/* Soft organic green gradient ambient background spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAF1E8]/70 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F2F7F1]/80 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Circular Food Showcase (Promoted Upward) */}
        <div className="flex flex-col items-center justify-center mb-10">
          
          {/* Main Circular Organic Dish Frame */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#EAF1E8] via-[#D4E3D1] to-[#C1D6BD] p-3 shadow-2xl relative border-4 border-white">
            <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center">
              <img
                src={activeDish.image}
                alt={activeDish.name}
                className="w-[90%] h-[90%] object-cover rounded-full hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Leaf Icon Badge */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-white p-2.5 sm:p-3 rounded-full shadow-lg border border-[#2D4A2D]/10 text-[#466B45]">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>

            {/* Floating Badge Rating */}
            <div className="absolute top-6 sm:top-10 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-xl border border-[#2D4A2D]/10 flex items-center gap-1.5 sm:gap-2">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
              <span className="font-bold text-xs text-[#2D4A2D]">{activeDish.rating} Rating</span>
            </div>

            {/* Floating Dish Name & Price Tag */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-[#2D4A2D]/10 text-center whitespace-nowrap max-w-xs">
              <p className="font-serif-luxury font-bold text-sm sm:text-base text-[#2D4A2D]">
                {activeDish.name}
              </p>
              <p className="text-xs font-semibold text-[#466B45]">
                {activeDish.category} • <span className="font-bold text-[#D97706]">{activeDish.price}</span>
              </p>
            </div>
          </div>

          {/* 5 Circular Showcase Thumbnails */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-8">
            {heroDishes.map((dish, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDishIndex(idx)}
                aria-label={`View ${dish.name}`}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full p-1 border-2 transition-all cursor-pointer ${
                  activeDishIndex === idx
                    ? 'border-[#466B45] scale-110 shadow-md bg-white'
                    : 'border-transparent opacity-70 hover:opacity-100 bg-white/50'
                }`}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Text and Actions Content Below */}
        <div className="max-w-2xl mx-auto text-center space-y-5">
          
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1E8] border border-[#466B45]/20 text-[#2D4A2D] text-xs font-semibold shadow-xs">
            <Leaf className="w-4 h-4 text-[#466B45]" />
            <span className="font-serif-luxury text-sm italic">Welcome To PanFire Kitchen</span>
          </div>

          {/* Description */}
          <p className="text-[#5C6B5E] text-base sm:text-lg leading-relaxed">
            Experience the perfect blend of wood-fired Neapolitan craftsmanship, vibrant Mexican flavors, and Asian wok mastery. Every dish is a celebration of authentic flavors.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenReservation}
              className="btn-flavoria-green text-base px-6 py-3.5 shadow-lg cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book A Table</span>
            </button>

            <a
              href="#menu"
              className="btn-flavoria-outline text-base px-6 py-3.5 cursor-pointer"
            >
              <UtensilsCrossed className="w-5 h-5 text-[#466B45]" />
              <span>Explore Menu</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2D4A2D]/10 max-w-md mx-auto">
            <div>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">190+</p>
              <p className="text-xs text-[#5C6B5E] mt-0.5">Artisanal Dishes</p>
            </div>
            <div>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">4.9 ★</p>
              <p className="text-xs text-[#5C6B5E] mt-0.5">User Ratings</p>
            </div>
            <div>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">3</p>
              <p className="text-xs text-[#5C6B5E] mt-0.5">Cuisines</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

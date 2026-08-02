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
      image: '/assets/PIZZA/Classic Margherita wuth Pesto drizzle.png',
      rating: '4.9',
    },
    {
      name: 'Spinach & Cream Cheese Dim Sum',
      category: 'Handcrafted Dim Sum',
      price: '₹345',
      image: '/assets/DIM SUMS/SPINACH AND CREAM CHEESE DIM SUM .png',
      rating: '4.8',
    },
    {
      name: 'Smash Chicken Cheese Burger',
      category: 'Wood-Fired Sourdough',
      price: '₹380',
      image: '/assets/SOURDOUGH BURGERS/Smash Chicken Cheese Sourdough Burger .png',
      rating: '4.9',
    },
    {
      name: 'Creamy Alfredo Pasta',
      category: 'Italian Pasta',
      price: '₹420',
      image: '/assets/PASTA/alfredo pasta.png',
      rating: '4.8',
    },
  ];

  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const activeDish = heroDishes[activeDishIndex];

  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#FBF9F4] relative overflow-hidden">
      
      {/* Soft organic green gradient ambient background spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAF1E8]/70 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#F2F7F1]/80 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Welcome Leaf Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1E8] border border-[#466B45]/20 text-[#2D4A2D] text-xs font-semibold shadow-xs">
              <Leaf className="w-4 h-4 text-[#466B45]" />
              <span className="font-serif-luxury text-sm italic">Welcome To PanFire Kitchen</span>
            </div>

            {/* Main Serif Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2D4A2D] leading-[1.1] tracking-tight">
              Good Food <br />
              <span className="text-[#466B45] italic font-serif-expressive">Good Mood</span> <br />
              Great Time.
            </h1>

            {/* Description */}
            <p className="text-[#5C6B5E] text-base sm:text-lg max-w-xl leading-relaxed">
              Experience the perfect blend of wood-fired Neapolitan craftsmanship and vibrant Asian wok mastery. Every dish is a celebration of authentic flavors.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenReservation}
                className="btn-flavoria-green text-base px-6 py-3.5 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Book A Table</span>
              </button>

              <a
                href="#menu"
                className="btn-flavoria-outline text-base px-6 py-3.5"
              >
                <UtensilsCrossed className="w-5 h-5 text-[#466B45]" />
                <span>Explore Menu</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2D4A2D]/10 max-w-lg">
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">45+</p>
                <p className="text-xs text-[#5C6B5E] mt-0.5">Artisanal Dishes</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">4.9 ★</p>
                <p className="text-xs text-[#5C6B5E] mt-0.5">User Ratings</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D4A2D]">30 Min</p>
                <p className="text-xs text-[#5C6B5E] mt-0.5">Hot Delivery</p>
              </div>
            </div>

          </div>

          {/* Right Hero Frame Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Main Circular Organic Dish Frame */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#EAF1E8] via-[#D4E3D1] to-[#C1D6BD] p-3 shadow-2xl relative border-4 border-white">
              <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center">
                <img
                  src={activeDish.image}
                  alt={activeDish.name}
                  className="w-[90%] h-[90%] object-cover rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Leaf Icon Badge */}
              <div className="absolute -top-3 -left-3 bg-white p-3 rounded-full shadow-lg border border-[#2D4A2D]/10 text-[#466B45]">
                <Leaf className="w-6 h-6 animate-pulse" />
              </div>

              {/* Floating Badge Rating */}
              <div className="absolute top-10 -right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-[#2D4A2D]/10 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-bold text-xs text-[#2D4A2D]">{activeDish.rating} Rating</span>
              </div>

              {/* Floating Dish Name & Price Tag */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-[#2D4A2D]/10 text-center whitespace-nowrap max-w-xs">
                <p className="font-serif-luxury font-bold text-base text-[#2D4A2D]">
                  {activeDish.name}
                </p>
                <p className="text-xs font-semibold text-[#466B45]">
                  {activeDish.category} • <span className="font-bold text-[#D97706]">{activeDish.price}</span>
                </p>
              </div>
            </div>

            {/* Quick Thumbnail Dish Switcher */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {heroDishes.map((dish, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDishIndex(idx)}
                  className={`w-14 h-14 rounded-full p-1 border-2 transition-all ${
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

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Utensils, ChefHat, Sparkles, ShieldCheck } from 'lucide-react';

export const FeaturePillars: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-6 h-6 text-[#466B45]" />,
      bg: 'bg-[#EAF1E8]',
      title: 'Delicious Food',
      desc: 'Fresh ingredients, perfectly cooked wood-fired & wok dishes',
    },
    {
      icon: <ChefHat className="w-6 h-6 text-[#D97706]" />,
      bg: 'bg-[#FEF3C7]',
      title: 'Expert Chefs',
      desc: 'Skilled master culinary artisans with 10+ years experience',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#C05621]" />,
      bg: 'bg-[#FFEDD5]',
      title: 'Cozy Ambience',
      desc: 'A warm, inviting space for family and good memories',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
      bg: 'bg-[#DBEAFE]',
      title: 'Quality Service',
      desc: 'We serve happiness and hygiene with every single dish',
    },
  ];

  return (
    <section className="py-10 bg-[#F2F7F1]/60 border-y border-[#2D4A2D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#2D4A2D]/05 hover:border-[#466B45]/20 hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[#2D4A2D] text-base">{item.title}</h4>
                <p className="text-xs text-[#5C6B5E] mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

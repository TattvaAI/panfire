import React, { useState } from 'react';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#2D4A2D] text-white pt-16 pb-12 overflow-hidden rounded-t-[3rem]">
      
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#466B45]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white text-[#2D4A2D] flex items-center justify-center shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-white block leading-none">
                  PanFire
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-white/70 block mt-0.5">
                  Asian. Italian. Mexican
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed">
              Experience handcrafted Neapolitan wood-fired pizzas, sizzling Mexican burrito bowls & burgers, and authentic Asian dim sums, baos, and craft sushi.
            </p>

            {/* Newsletter Input Form */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-white mb-2">Sign up for secret menu specials & exclusive invites:</p>
              <form onSubmit={handleSubscribe} className="flex items-center max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-l-full bg-white/10 text-white placeholder-white/50 text-xs focus:outline-none focus:bg-white/20 border border-white/20"
                />
                <button
                  type="submit"
                  className="bg-[#D97706] hover:bg-[#B45309] text-white px-5 py-2.5 rounded-r-full text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  {subscribed ? 'Subscribed!' : 'Sign Up'}
                </button>
              </form>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-lg text-white">Navigation</h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Full Food Catalog</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Kitchen Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: 6 Menu Categories */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-lg text-white">Menu Categories</h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li><a href="#menu" className="hover:text-white transition-colors">1. Signature Dishes</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">2. Mexican</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">3. Italian</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">4. Asian</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">5. Beverages</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">6. Desserts</a></li>
            </ul>
          </div>

          {/* Col 4: Opening Hours & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-lg text-white">Contact & Location</h4>
            <div className="space-y-2.5 text-xs text-white/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>PanFire Kitchen, New Chandigarh, Punjab</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href="tel:+917814219191" className="hover:text-white transition-colors font-medium">
                  +91 78142 19191
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href="mailto:panfirenewchandigarh@gmail.com" className="hover:text-white transition-colors break-all">
                  panfirenewchandigarh@gmail.com
                </a>
              </p>
              <div className="pt-2">
                <p className="font-bold text-white">Opening Hours:</p>
                <p>Mon - Sun: 11:30 AM - 11:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} PanFire (Asian • Italian • Mexican). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Contact Us</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

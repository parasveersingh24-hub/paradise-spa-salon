
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Spa Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-3">
            <div className="flex text-pink-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
              5.0 Rated Excellence in Navi Mumbai
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight serif">
            Elegance and <br />
            <span className="italic text-pink-400 font-light">Wellness</span> <br />
            in Perfect Harmony
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed font-light">
            Indulge in a sanctuary of beauty and tranquility. Located steps away from Kharghar Station, we provide world-class unisex grooming and spa treatments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-pink-900/20">
              Book Your Visit
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Aesthetic flourish */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-pulse">
        <div className="w-32 h-32 rounded-full border border-pink-400/30 flex items-center justify-center p-4">
          <span className="text-[10px] text-pink-400 font-bold uppercase tracking-widest text-center leading-tight">
            Est. Excellence <br /> Navi Mumbai
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

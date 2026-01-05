
import React, { useRef } from 'react';
import { Star, Shield, Heart } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: 'Priya Mehta', role: 'Senior Stylist', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400' },
  { name: 'Arjun Das', role: 'Spa Therapist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sana Khan', role: 'Skin Expert', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
];

const About = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://daulatgarhresort.com/wp-content/uploads/2024/11/spa.jpg" 
                alt="Spa treatment" 
                className="rounded-3xl w-full h-80 object-cover shadow-2xl"
                loading="lazy"
              />
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
                alt="Salon styling" 
                className="rounded-3xl w-full h-80 object-cover shadow-2xl mt-12"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-pink-50">
              <div className="text-4xl font-bold text-pink-600 mb-1">5.0</div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Average Review</div>
              <div className="flex text-yellow-400 mt-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-pink-500 uppercase tracking-[0.3em]">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-stone-900 serif leading-tight">
                Crafting Beauty and <br />
                <span className="italic font-light text-purple-400">Harmony in Kharghar</span>
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                Paradise Spa & Salon was born from a vision to create a sanctuary where beauty meets well-being. Nestled conveniently near Kharghar Station, we've become the trusted choice for those who value quality, professionalism, and a personal touch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-pink-100 rounded-2xl">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Safety First</h4>
                  <p className="text-sm text-stone-500 leading-snug">Strict sterilization and premium genuine products only.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Customer Centric</h4>
                  <p className="text-sm text-stone-500 leading-snug">Every service is tailored to your unique style and needs.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={scrollToTeam}
                className="px-10 py-4 border-2 border-stone-200 rounded-full font-bold text-stone-900 hover:border-pink-500 hover:text-pink-600 transition-all focus:outline-none active:scale-95 transform"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="pt-12 scroll-mt-24">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-bold text-stone-900 serif">Our Expert Team</h3>
            <p className="text-stone-500 font-light max-w-xl mx-auto italic">Dedicated professionals committed to your wellness journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="group bg-white p-4 rounded-[2.5rem] border border-stone-100 text-center hover:shadow-xl transition-all duration-500">
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-square">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
                <h4 className="text-xl font-bold text-stone-900">{member.name}</h4>
                <p className="text-pink-500 text-sm font-medium uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

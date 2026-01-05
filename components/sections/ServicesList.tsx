
import React, { useState } from 'react';
import { Service, ServiceCategory } from '../../types';
import { Sparkles, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  services: Service[];
  showAll?: boolean;
}

const ServicesList: React.FC<Props> = ({ services, showAll = false }) => {
  const [filter, setFilter] = useState<ServiceCategory | 'All'>('All');

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category === filter);

  const categories = ['All', ...Object.values(ServiceCategory)];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-pink-500 uppercase tracking-[0.3em]">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-stone-900 serif">Signature Treatments</h3>
          <div className="w-20 h-1 bg-pink-200 mx-auto"></div>
        </div>

        {showAll && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-200' 
                    : 'bg-stone-100 text-stone-500 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-white border border-stone-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    console.error('Image failed to load:', service.imageUrl);
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/f3f4f6/9ca3af?text=Image+Not+Available';
                  }}
                  onLoad={() => console.log('Image loaded successfully:', service.imageUrl)}
                />
                <div className="absolute top-4 right-4 px-4 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-pink-600 shadow-sm uppercase tracking-widest">
                  {service.category}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold text-stone-900 leading-tight">{service.name}</h4>
                  <span className="text-pink-600 font-bold text-xl">{service.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-stone-400 text-xs font-medium border-t border-stone-50 pt-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {service.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Best Experience
                  </span>
                </div>
                <Link to="/contact" className="mt-4 w-full py-3 bg-stone-900 text-white rounded-xl text-sm font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 group-hover:gap-4 duration-300">
                  Book Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-stone-900 font-bold border-b-2 border-pink-300 hover:border-pink-600 pb-1 transition-all">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesList;

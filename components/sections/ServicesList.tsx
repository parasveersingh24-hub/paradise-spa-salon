
import React, { useState } from 'react';
import { Service, ServiceCategory } from '../../types';
import { Sparkles, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  services: Service[];
  showAll?: boolean;
}

const ServiceCard = ({ service }: { service: Service }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-stone-100">
        <div className={`absolute inset-0 bg-stone-200 animate-pulse ${isLoading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} />
        <img
          src={service.imageUrl}
          alt={service.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ${isLoading ? 'scale-110 blur-lg grayscale' : 'scale-100 blur-0 grayscale-0'}`}
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            console.error('Image failed to load:', service.imageUrl);
            e.currentTarget.src = 'https://via.placeholder.com/800x600/f3f4f6/9ca3af?text=Image+Not+Available';
          }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm border border-pink-100">
          {service.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-bold text-stone-900 leading-tight group-hover:text-pink-600 transition-colors">{service.name}</h4>
          <span className="text-lg font-bold text-stone-900 bg-stone-50 px-3 py-1 rounded-lg border border-stone-100">{service.price}</span>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">{service.description}</p>

        <div className="pt-4 border-t border-stone-100 mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-stone-400">
            <Clock className="w-4 h-4" />
            {service.duration}
          </div>
          <Link to="/contact" className="py-2 px-4 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-pink-600 transition-all shadow-md hover:shadow-pink-200 flex items-center gap-2 group/btn">
            Book
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

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
          <div className="mb-12 space-y-6">
            {/* All Filter */}
            <div className="flex justify-center">
              <button
                onClick={() => setFilter('All')}
                className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${filter === 'All'
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-200'
                  : 'bg-stone-100 text-stone-500 hover:bg-pink-50 hover:text-pink-600'
                  }`}
              >
                All
              </button>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {Object.values(ServiceCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${filter === cat
                    ? 'bg-pink-600 text-white border-pink-600 shadow-lg shadow-pink-200'
                    : 'bg-white text-stone-600 border-stone-100 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
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

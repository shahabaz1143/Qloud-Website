import React, { useState, useEffect } from 'react';
import { Film, Lightbulb, Shield, Home, Wifi, Building2, Lock, Video, DoorOpen, Music, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { fetchServices } from '../services/api';

const iconMap = {
  Film: Film,
  Lightbulb: Lightbulb,
  Shield: Shield,
  Home: Home,
  Wifi: Wifi,
  Building2: Building2,
  Lock: Lock,
  Video: Video,
  DoorOpen: DoorOpen,
  Music: Music,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-24 bg-[#0a0e1a] relative">
        <div className="container mx-auto px-6">
          <div className="text-center text-cyan-400">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-[#0a0e1a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Smart Home Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From home theatres to complete automation, we deliver end-to-end smart solutions
            tailored to enhance your lifestyle and comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Film;
            return (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Features - exactly 2 items */}
                  <div className="space-y-1.5 mb-4 min-h-[44px]">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-cyan-400 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 p-0 h-auto text-sm font-semibold group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-full transition-all duration-200"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { Film, Lightbulb, Shield, Home, Wifi, Lock, Video, DoorOpen, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  Film: Film,
  Lightbulb: Lightbulb,
  Shield: Shield,
  Home: Home,
  Wifi: Wifi,
  Lock: Lock,
  Video: Video,
  DoorOpen: DoorOpen,
};

// Static data - no backend required
const services = [
  {
    id: 1,
    title: "Home Theatre",
    description: "Transform your living space into a cinematic experience with immersive sound, stunning visuals, and personalized smart controls. From Dolby Atmos systems to 4K projection.",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif",
    icon: "Film",
    features: ["Dolby Atmos Sound", "4K/8K Projection"]
  },
  {
    id: 2,
    title: "Smart Touch Switches",
    description: "Modern touch-enabled switches that bring elegance and functionality to your home. Control lights with a simple touch, set schedules, and integrate with your smart home ecosystem.",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp",
    icon: "Lightbulb",
    features: ["Touch Control", "Scene Setting"]
  },
  {
    id: 3,
    title: "Security Systems",
    description: "Protect what matters most with cutting-edge security automation—smart cameras, alarms, motion sensors, and 24/7 monitoring designed to keep your home safe.",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif",
    icon: "Shield",
    features: ["Smart Cameras", "Motion Sensors"]
  },
  {
    id: 4,
    title: "Home Automation",
    description: "Control lights, climate, security, and appliances from anywhere. One tap, one voice command, or completely automatic—designed for your lifestyle and budget.",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800",
    icon: "Home",
    features: ["Centralized Control", "Voice Integration"]
  },
  {
    id: 5,
    title: "Networking Solutions",
    description: "Professional mesh networks that eliminate dead zones and keep all your devices connected. Fast, reliable WiFi in every room, every corner.",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/by22ktly_istockphoto-1932001837-612x612.jpg",
    icon: "Wifi",
    features: ["Mesh Network", "No Dead Zones"]
  },
  {
    id: 6,
    title: "Digital Door Locks",
    description: "Keyless entry with fingerprint, PIN, card, or smartphone access. Monitor who enters your home and grant temporary access to guests remotely.",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/emph1fnm_1_d41ba0ee-d7c8-4526-bcb2-c9b3c69a7090%20%284%29.webp",
    icon: "Lock",
    features: ["Fingerprint Access", "PIN & Card Entry"]
  },
  {
    id: 7,
    title: "Video Door Phones",
    description: "See and speak to visitors from anywhere with HD video doorbells. Two-way audio, motion detection, and seamless integration with your smart home.",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png",
    icon: "Video",
    features: ["HD Video", "Two-Way Audio"]
  },
  {
    id: 8,
    title: "Motorised Gates",
    description: "Automated gate systems with remote control, smartphone access, and integration with your home security. Smooth, silent operation with safety sensors.",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/bmlu8vl4_Motorised%20Gates.jpg",
    icon: "DoorOpen",
    features: ["Remote Control", "Smartphone Access"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0e1a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Smart Home Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From home theatres to complete automation, we deliver end-to-end smart solutions
            tailored to enhance your lifestyle and comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  <div className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Features - exactly 2 items */}
                  <div className="space-y-1.5 mb-4 min-h-[44px]">
                    {service.features.map((feature, idx) => (
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

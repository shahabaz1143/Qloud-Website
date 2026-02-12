import React, { useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

// Static data - no backend required
const allProjects = [
  {
    id: 1,
    name: "Adarsh Tranquil",
    category: "Home Theatre",
    description: "Premium home theatre with Dolby Atmos and acoustic treatment",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/g52fv2rb_adarsh%20tranquil.jpg"
  },
  {
    id: 2,
    name: "DSR Elixir",
    category: "Full Automation",
    description: "Complete smart home automation with lighting and security",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/529o4d5j_DSR%20Elixir.avif"
  },
  {
    id: 3,
    name: "Nikoo Homes",
    category: "Security System",
    description: "Advanced security system with 24/7 monitoring",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/vz9t4rbo_Nikoo%20Homes.jpg"
  },
  {
    id: 4,
    name: "NCC Retreat",
    category: "Home Theatre",
    description: "Luxury cinema room with custom seating",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/x8pg0gdw_NCC%20Retreat.jpg"
  },
  {
    id: 5,
    name: "Karle Zenith",
    category: "Smart Lighting",
    description: "Intelligent lighting system throughout the residence",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/rct5wa5v_Karle%20Zenith%20Residence.png"
  },
  {
    id: 6,
    name: "SNN Enternia",
    category: "Full Automation",
    description: "Integrated smart home with voice control",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/ybgjk63j_Snn%20eternia.jpeg"
  },
  {
    id: 7,
    name: "Shobha City",
    category: "Home Theatre",
    description: "State-of-the-art cinema with premium acoustics",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/7c5wola2_Shobha%20city.webp"
  },
  {
    id: 8,
    name: "RR Signature",
    category: "Security System",
    description: "Comprehensive security with AI monitoring",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/gfdgg2zf_RR%20Signature.jpg"
  },
  {
    id: 9,
    name: "Leela Residency",
    category: "Full Automation",
    description: "Complete home automation solution",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/qp4rbl2t_leela%20residency.jpg"
  },
  {
    id: 10,
    name: "Shriram Luxor",
    category: "Smart Lighting",
    description: "Advanced lighting control system",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/bx1r9pe4_shriram%20luxor.png"
  },
  {
    id: 11,
    name: "Orchid Picadilly",
    category: "Home Theatre",
    description: "Premium entertainment setup with Dolby Atmos",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/f82kgy6b_orchid%20picadily.jpg"
  },
  {
    id: 12,
    name: "Prestige Lake side Habitat",
    category: "Full Automation",
    description: "Smart home with integrated automation",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/kjtm3bvq_prestige%20lake%20side%20habitat.webp"
  }
];

const categories = ['All', 'Home Theatre', 'Full Automation', 'Security System', 'Smart Lighting'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#0f1419] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            OUR WORK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Discover our acclaimed projects, celebrated for excellence across diverse installations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-semibold shadow-lg shadow-cyan-400/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full text-xs font-semibold text-black shadow-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* View Details Button */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 z-10">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gradient-to-r hover:from-cyan-400 hover:to-sky-400 transition-all duration-300 group/btn">
                    <ExternalLink className="w-3 h-3 text-gray-900 group-hover/btn:text-black" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-3 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                  {project.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-sky-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button className="bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 px-6 py-3 text-base rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

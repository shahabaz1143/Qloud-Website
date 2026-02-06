import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { fetchProjects } from '../services/api';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedProjects, setDisplayedProjects] = useState([]);

  const categories = ['All', 'Home Theatre', 'Full Automation', 'Security System', 'Smart Lighting'];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects(activeFilter);
        setProjects(data);
        // Animate projects one by one
        setDisplayedProjects([]);
        data.forEach((_, index) => {
          setTimeout(() => {
            setDisplayedProjects(prev => [...prev, index]);
          }, index * 150);
        });
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 bg-[#0f1419] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover our acclaimed projects, celebrated for excellence across diverse installations
          </p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {activeFilter === category && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with staggered animation */}
        {loading ? (
          <div className="text-center text-cyan-400 py-12">
            <div className="inline-block w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4">Loading projects...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 ${
                  displayedProjects.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-900">
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
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* View Details Button - appears on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 z-10">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 group/btn">
                      <ExternalLink className="w-5 h-5 text-gray-900 group-hover/btn:text-white" />
                    </button>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500 rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-cyan-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

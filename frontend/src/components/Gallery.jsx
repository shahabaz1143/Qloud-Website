import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - will be replaced with real photos
  const galleryImages = [
    [
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600',
      'https://images.unsplash.com/photo-1635788798247-92a15f830a3b?w=600',
      'https://images.unsplash.com/photo-1710131459450-7c384b8be18f?w=600',
      'https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?w=600',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600'
    ],
    [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600'
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-[#0a0e1a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            OUR GALLERY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Home Theatre Designs
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Explore our stunning home theatre installations and smart home automation projects
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next images"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages[currentSlide].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Home Theatre Design ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Effect - Cyan Glow */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-all duration-300"></div>
                
                {/* Bottom Border on Hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-cyan-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

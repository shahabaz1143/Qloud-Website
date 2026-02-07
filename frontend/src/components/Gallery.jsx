import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Real home theatre images
  const galleryImages = [
    [
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/rxbr16ev_3f53009e-1b0b-4acf-853c-64bdafa7f505.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/eglex7eg_7c3ac259-d705-4d0f-b6c6-cbba791d580f.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/yzqwcagp_8e20a366-093c-4b22-84af-0e64382c047c.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/u0j3l0gh_060a9a8a-0cf4-4dec-b559-d3fc24928ccc.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mv19fc62_78c7fae8-7a17-4f3e-914e-dc033cef3b34.JPG'
    ],
    [
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/diawcire_98ff289b-206b-4109-bc93-b20ff099aaee.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/170qqqsz_2368418d-b426-4c6e-9ab1-c46d0a54c815%202.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/ed1qzck3_8108210b-8bfc-48f0-9a11-297980d55850.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/kheqwtbv_a9c61c26-9b2d-4534-bc56-0a3a8d82ab3d.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/wm8df44x_c7ed42f0-a87d-405c-8132-2199f4e5c8fe.JPG'
    ],
    [
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/7xd4pp0c_c21c64cc-3f89-4a14-b8e9-97d14d8ec707.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/9d7drlum_d0e7659d-5cf0-4751-8199-9e34fead3f23%202.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/w9fvldqe_fa00cf58-a61a-4907-8be0-7b01ded9ce7c.JPG',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/3v20bxga_IMG_4180.jpg',
      'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/fs2mvcf9_98ff289b-206b-4109-bc93-b20ff099aaee.JPG'
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

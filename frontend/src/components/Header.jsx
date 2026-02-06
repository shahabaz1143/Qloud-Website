import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" 
              alt="Qloud Tech Logo" 
              className="h-8 brightness-0 invert"
            />
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                FAQ
              </button>
            </nav>

            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition-all duration-200"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

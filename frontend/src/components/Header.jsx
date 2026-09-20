import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, ShoppingBag, X } from 'lucide-react';

const QLOUD_AUDIO_URL = 'https://www.qloudaudio.com';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Packages', to: '/packages' },
    { label: 'Process', to: '/process' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group logo-shine" aria-label="Qloud Tech Home" data-testid="header-logo-link">
            <img src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" alt="Qloud Tech Logo" className="h-6 brightness-0 invert" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <nav className="flex items-center space-x-4 xl:space-x-5" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-xs xl:text-sm transition-colors duration-200 ${
                    isActive(item.to)
                      ? 'text-cyan-400 font-medium'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  data-testid={`desktop-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={QLOUD_AUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition-colors duration-200 hover:text-amber-200 xl:text-sm"
                data-testid="desktop-nav-qloud-audio"
              >
                <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                Qloud Audio
              </a>
            </nav>

            <Button
              onClick={() => window.open('https://wa.me/917204746043', '_blank')}
              className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] hover:from-cyan-500 hover:to-sky-500 text-black font-medium px-4 xl:px-5 py-2 rounded-lg transition-all duration-200 text-sm"
              data-testid="header-get-quote-btn"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              onClick={() => window.open('https://wa.me/917204746043', '_blank')}
              className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] hover:from-cyan-500 hover:to-sky-500 text-black font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm"
              data-testid="mobile-header-get-quote-button"
            >
              Get Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4 bg-[#0a0e1a]">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2 text-base transition-colors duration-200 ${
                    isActive(item.to)
                      ? 'text-cyan-400 font-medium'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={QLOUD_AUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-left text-base font-semibold text-amber-300 transition-colors duration-200 hover:text-amber-200"
                data-testid="mobile-nav-qloud-audio"
              >
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                Qloud Audio · Shop Models & Prices
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

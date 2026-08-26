import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-black/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group" aria-label="Qloud Tech Home">
            <img src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" alt="Qloud Tech Logo" className="h-6 brightness-0 transition-opacity group-hover:opacity-70" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-7" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative text-sm tracking-tight transition-colors duration-200 ${
                    isActive(item.to) ? 'text-black font-medium' : 'text-neutral-500 hover:text-black'
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {isActive(item.to) && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#D62828]" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:+917204746043"
                data-testid="header-call-link"
                className="inline-flex items-center gap-2 text-neutral-700 hover:text-black text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 72047 46043
              </a>
              <button
                onClick={() => window.open('https://wa.me/917204746043', '_blank')}
                className="bg-[#D62828] text-white hover:bg-[#B91C1C] font-medium px-5 py-2.5 rounded-md transition-all duration-200 text-sm active:scale-95"
                data-testid="header-get-quote-btn"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => window.open('https://wa.me/917204746043', '_blank')}
              className="bg-[#D62828] text-white hover:bg-[#B91C1C] font-medium px-4 py-2 rounded-md transition-all duration-200 text-sm"
              data-testid="mobile-get-quote-btn"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black p-2"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-black/10 pt-4 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2.5 text-base transition-colors duration-200 ${
                    isActive(item.to) ? 'text-black font-medium' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:+917204746043" className="text-left py-2.5 text-base text-[#D62828] flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 72047 46043
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

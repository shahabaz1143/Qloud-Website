import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, Phone, X } from 'lucide-react';

const QLOUD_AUDIO_URL = 'https://www.qloudaudio.com';

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
        scrolled ? 'bg-[#0B0C0E]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group" aria-label="Qloud Tech Home" data-testid="header-logo-link">
            <img src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" alt="Qloud Tech Logo" className="h-6 brightness-0 invert transition-opacity group-hover:opacity-80" />
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            <nav className="flex items-center gap-5" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative text-sm tracking-tight transition-colors duration-200 ${
                    isActive(item.to) ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  data-testid={`desktop-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {isActive(item.to) && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#E5E7EB]" />}
                </Link>
              ))}
              <a
                href={QLOUD_AUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-70"
                data-testid="desktop-nav-qloud-audio"
              >
                Qloud Audio
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+917204746043" data-testid="header-call-link" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" /> +91 72047 46043
              </a>
              <button
                onClick={() => window.open('https://wa.me/917204746043', '_blank')}
                className="bg-white text-black hover:bg-neutral-200 font-medium px-5 py-2.5 rounded-md transition-all duration-200 text-sm active:scale-95"
                data-testid="header-get-quote-btn"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={() => window.open('https://wa.me/917204746043', '_blank')}
              className="bg-white text-black hover:bg-neutral-200 font-medium px-4 py-2 rounded-md transition-all duration-200 text-sm"
              data-testid="mobile-header-get-quote-button"
            >
              Get Quote
            </button>
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

        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-white/10 pt-4 bg-[#0B0C0E]/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2.5 text-base transition-colors duration-200 ${
                    isActive(item.to) ? 'text-white font-medium' : 'text-neutral-400 hover:text-white'
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
                className="flex items-center gap-2 py-2.5 text-left text-base font-medium text-white"
                data-testid="mobile-nav-qloud-audio"
              >
                Qloud Audio · Models &amp; Prices
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="tel:+917204746043" className="text-left py-2.5 text-base text-[#E5E7EB] flex items-center gap-2" data-testid="mobile-header-call-link">
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
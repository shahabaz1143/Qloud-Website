import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Company Info - Takes 4 columns */}
          <div className="col-span-12 md:col-span-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" 
              alt="Qloud Tech Logo" 
              className="h-6 brightness-0 invert mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Pioneers in Smart Home Automation & Immersive Home Theatre Solutions with best-in-class quality.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/qloudtech-100091642968091/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/qloud.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/917204746043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services - Takes 2 columns */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Home Theatre</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Smart Switches</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Security Systems</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Home Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Networking</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Door Locks</a></li>
            </ul>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Packages</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Process</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#designs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Designs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Contact - Takes 3 columns, pushed right */}
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">+91 72047 46043</div>
                  <div className="text-gray-500 text-xs">Mon-Sat, 9AM-7PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">contact@qloudsmarthomes.com</div>
                  <div className="text-gray-500 text-xs">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Bharatiya City, Bangalore</div>
                  <div className="text-gray-500 text-xs">Karnataka, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-gray-500 text-xs">
              © 2026 Qloud Tech. All rights reserved.
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

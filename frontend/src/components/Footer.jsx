import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:pr-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" 
              alt="Qloud Tech Logo" 
              className="h-6 brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pioneers in Smart Home Automation & Immersive Home Theatre Solutions. We
              revolutionize the industry with aggressive pricing and best-in-class quality.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/qloudtech-100091642968091/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/qloud.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/917204746043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home Theatre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Smart Touch Switches
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Security Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Networking Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Digital Door Locks
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Packages
                </a>
              </li>
              <li>
                <a href="#designs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Designs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-cyan-400 font-semibold text-sm">+91 72047 46043</div>
                <div className="text-gray-500 text-xs">Mon-Sat, 9AM-7PM</div>
              </li>
              <li>
                <div className="text-cyan-400 font-semibold text-sm">contact@qloud.tech</div>
                <div className="text-gray-500 text-xs">24/7 Support</div>
              </li>
              <li>
                <div className="text-cyan-400 font-semibold text-sm">Bharatiya City, Bangalore</div>
                <div className="text-gray-500 text-xs">Karnataka, India</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © 2026 Qloud Tech. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

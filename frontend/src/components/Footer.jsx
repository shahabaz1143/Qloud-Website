import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" 
              alt="Qloud Tech Logo" 
              className="h-6 brightness-0 invert mb-4"
            />
            <p className="text-gray-400 mb-6">
              Pioneers in Smart Home Automation & Immersive Home Theatre Solutions. We
              revolutionize home automation & home theatre industry with aggressive pricing and
              best-in-class quality products.
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
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home Theatre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Smart Lighting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Security Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Networking Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Smart Office
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#designs" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Designs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <div className="text-cyan-400 font-semibold mb-1">+91 72047 46043</div>
                <div className="text-gray-400 text-sm">Mon-Sat, 9AM-7PM</div>
              </li>
              <li>
                <div className="text-cyan-400 font-semibold mb-1">contact@qloud.tech</div>
                <div className="text-gray-400 text-sm">24/7 Support</div>
              </li>
              <li>
                <div className="text-cyan-400 font-semibold mb-1">Bharatiya City, Bangalore</div>
                <div className="text-gray-400 text-sm">Karnataka, India</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Qloud Tech. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

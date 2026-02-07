import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Check, Sparkles } from 'lucide-react';
import { fetchPricing } from '../services/api';

const Pricing = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const data = await fetchPricing();
        setPackages(data);
      } catch (error) {
        console.error('Error loading pricing:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPricing();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="packages" className="py-24 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="text-center text-cyan-400">Loading pricing...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-24 bg-[#0f1419]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            PRICING PACKAGES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Choose Your Cinema Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Competitive pricing with customized solutions tailored to your needs and space. All
            packages can be fully customized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500 shadow-xl shadow-cyan-500/20'
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-900/30 border-gray-800/50 hover:border-cyan-500/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 rounded-full text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                <div className="text-sm text-cyan-400">Customizable package</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-6 rounded-lg transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Solution Card */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-gray-400">
                Every space is unique. Our team can create a completely customized home theatre
                solution tailored to your room dimensions, budget, and preferences.
              </p>
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 rounded-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { fetchProcess } from '../services/api';

const Process = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProcess = async () => {
      try {
        const data = await fetchProcess();
        setSteps(data);
      } catch (error) {
        console.error('Error loading process:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProcess();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="process" className="py-24 bg-[#0a0e1a]">
        <div className="container mx-auto px-6">
          <div className="text-center text-cyan-400">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" className="py-24 bg-[#0a0e1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Journey to a Smart Home
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Simple, transparent, and professional—from consultation to lifetime support
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              )}

              <div className="flex gap-6 mb-12">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/30">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">
            Schedule a free consultation today and let's discuss how we can transform your home.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-full"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;

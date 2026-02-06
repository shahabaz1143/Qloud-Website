import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { fetchProcess } from '../services/api';

const Process = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const loadProcess = async () => {
      try {
        const data = await fetchProcess();
        setSteps(data);
        // Animate steps one by one
        data.forEach((_, index) => {
          setTimeout(() => {
            setVisibleSteps(prev => [...prev, index]);
          }, index * 200);
        });
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
    <section id="process" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 animate-fadeIn">
            OUR PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
            Your Journey to a Smart Home
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fadeIn">
            Simple, transparent, and professional—from consultation to lifetime support
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative transition-all duration-700 transform ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              {/* Animated Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-cyan-500/20 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-flowDown"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  ></div>
                </div>
              )}

              <div className="flex gap-6 mb-12 group">
                {/* Animated Number Circle */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <span className="relative z-10">{step.id}</span>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-2 bg-gradient-to-br from-gray-900/30 to-transparent rounded-2xl p-6 border border-gray-800/50 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with hover effect */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">
            Schedule a free consultation today and let's discuss how we can transform your home.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flowDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-flowDown {
          animation: flowDown 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;

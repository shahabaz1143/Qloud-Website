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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fadeIn">
            Your Journey to a Smart Home
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fadeIn">
            Simple, transparent, and professional—from consultation to lifetime support
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-7xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500 to-cyan-500/20 hidden md:block">
            <div className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-flowRight"></div>
          </div>

          {/* Steps in horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center text-center transition-all duration-700 transform ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Animated Number Circle */}
                <div className="relative mb-6 group">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all duration-300 z-10">
                    <span className="relative z-10">{step.id}</span>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-gray-900/30 to-transparent rounded-2xl p-6 border border-cyan-500/40 hover:border-cyan-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full">
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with hover effect */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/50 hover:border-cyan-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">
            Schedule a free consultation today and let's discuss how we can transform your home.
          </p>
          <Button
            onClick={() => window.open('https://wa.me/917204746043', '_blank')}
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

        @keyframes flowRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-flowRight {
          animation: flowRight 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;

import React from 'react';
import { Button } from './ui/button';

// Static data - no backend required
const steps = [
  {
    id: 1,
    title: "Free Consultation & Assessment",
    description: "Start your smart home journey with a free consultation and expert guidance. We understand your needs, lifestyle, and budget."
  },
  {
    id: 2,
    title: "Custom Design & Proposal",
    description: "We create a custom smart home design with transparent pricing and detailed proposals. What you see is what you pay."
  },
  {
    id: 3,
    title: "Approval & Scheduling",
    description: "After approval, we schedule installation with a dedicated project manager to ensure smooth execution."
  },
  {
    id: 4,
    title: "Professional Installation",
    description: "Certified technicians install your smart home with quality, precision, and complete project manager support."
  },
  {
    id: 5,
    title: "Training & Lifetime Support",
    description: "We provide comprehensive training, documentation, app access, and 24/7 support—your lifetime partner."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Journey to a Smart Home
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
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
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div className="relative mb-6 group">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-cyan-400/30 group-hover:scale-110 transition-all duration-300 z-10">
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

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/50 hover:border-cyan-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">
            Schedule a free consultation today and let's discuss how we can transform your home.
          </p>
          <Button
            onClick={() => window.open('https://wa.me/917204746043', '_blank')}
            className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] hover:from-cyan-500 hover:to-sky-500 text-black font-semibold px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/30"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-flowRight {
          animation: flowRight 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;

import React from 'react';
import { Users, DollarSign, Boxes, Headphones, Wrench, CheckCircle } from 'lucide-react';

const iconMap = {
  Users: Users,
  DollarSign: DollarSign,
  Boxes: Boxes,
  HeadphonesIcon: Headphones,
  Wrench: Wrench,
  CheckCircle: CheckCircle,
};

// Static data - no backend required
const benefits = [
  {
    id: 1,
    title: "Consultation-First Approach",
    description: "We begin every project with a comprehensive consultation to understand your lifestyle and design custom solutions tailored specifically for you.",
    icon: "Users"
  },
  {
    id: 2,
    title: "Transparent Pricing",
    description: "View our clear pricing packages upfront with detailed proposals and no hidden charges. What you see is what you pay.",
    icon: "DollarSign"
  },
  {
    id: 3,
    title: "Multi-Brand Integration",
    description: "We're not locked into any single brand. Our certified technicians work with all leading smart home brands to create the perfect solution.",
    icon: "Boxes"
  },
  {
    id: 4,
    title: "Lifetime Support Guarantee",
    description: "We provide lifetime technical support, regular system health checks, software updates, and training. 24/7 helpline access for your peace of mind.",
    icon: "HeadphonesIcon"
  },
  {
    id: 5,
    title: "Expert Installation",
    description: "Our certified technicians ensure professional installation with quality, precision, and minimal disruption to your daily life.",
    icon: "Wrench"
  },
  {
    id: 6,
    title: "Proven Reliability",
    description: "Your smart home should work every single time. We design systems that are rock-solid reliable with professional-grade equipment.",
    icon: "CheckCircle"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#0f1419]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Qloud Tech Advantage
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Pioneers in Smart Home Automation & Immersive Home Theatre Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="group p-8 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl border border-cyan-500/40 hover:border-cyan-500/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

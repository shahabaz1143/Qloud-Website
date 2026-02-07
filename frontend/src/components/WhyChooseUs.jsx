import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Boxes, Headphones, Wrench, CheckCircle } from 'lucide-react';
import { fetchBenefits } from '../services/api';

const iconMap = {
  Users: Users,
  DollarSign: DollarSign,
  Boxes: Boxes,
  HeadphonesIcon: Headphones,
  Wrench: Wrench,
  CheckCircle: CheckCircle,
};

const WhyChooseUs = () => {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBenefits = async () => {
      try {
        const data = await fetchBenefits();
        setBenefits(data);
      } catch (error) {
        console.error('Error loading benefits:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBenefits();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="text-center text-cyan-400">Loading...</div>
        </div>
      </section>
    );
  }

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

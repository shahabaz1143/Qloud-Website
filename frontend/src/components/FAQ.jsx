import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

// Static FAQ data
const faqs = [
  {
    id: 1,
    question: "How much does a home theatre cost in Bangalore?",
    answer: "Home theatre costs in Bangalore range from ₹2.29 lakhs for an Essential Package (5.1 system with 4K projector) to ₹12.39 lakhs for a premium Gold Package (7.1.2 Dolby Atmos system). We offer customizable packages to fit any budget and room size.",
    category: "Pricing"
  },
  {
    id: 2,
    question: "What is included in home automation?",
    answer: "Home automation includes smart lighting control, climate control (AC/fans), motorized curtains, security system integration, smart switches, voice control integration (Alexa/Google), and centralized control via smartphone app. You can control everything from anywhere in the world.",
    category: "Services"
  },
  {
    id: 3,
    question: "Do you provide installation services?",
    answer: "Yes, we provide complete end-to-end installation services including free consultation, custom design, professional installation, and lifetime support. Our certified technicians ensure professional installation with minimal disruption to your daily routine.",
    category: "Services"
  },
  {
    id: 4,
    question: "What brands do you work with?",
    answer: "We work with premium international and Indian brands including JBL, Denon, Yamaha, Sony, Epson, BenQ, Samsung, LG, Yale, Hikvision, BuildTrack, and many more. We are brand-agnostic and recommend the best products for your specific needs.",
    category: "Products"
  },
  {
    id: 5,
    question: "Do you offer warranty and support?",
    answer: "Yes, we offer comprehensive warranty on all products (up to 5 years on premium speakers) and lifetime technical support. This includes 24/7 helpline access, regular system health checks, firmware updates, and priority service for existing customers.",
    category: "Support"
  },
  {
    id: 6,
    question: "What areas in Bangalore do you serve?",
    answer: "We serve all areas in Bangalore including Whitefield, Koramangala, Indiranagar, HSR Layout, JP Nagar, Jayanagar, Electronic City, Sarjapur Road, Marathahalli, and more. We have experience centers in Bharatiya City and MG Road.",
    category: "Coverage"
  },
  {
    id: 7,
    question: "How long does installation take?",
    answer: "Installation time varies based on project scope. Basic smart switches take a few hours, a home theatre takes 2-5 days, while complete home automation for a large villa can take 1-2 weeks. We provide a detailed timeline during your free consultation.",
    category: "Process"
  },
  {
    id: 8,
    question: "Can I upgrade my existing setup?",
    answer: "Absolutely! We specialize in upgrading existing home theatres and automation systems. Whether you want to add Dolby Atmos to your current system, upgrade to 4K projection, or add smart controls, we can help enhance your current setup.",
    category: "Services"
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Split FAQs into two columns
  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 === 1);

  const FAQItem = ({ faq }) => (
    <div
      className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
        openId === faq.id 
          ? 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/50' 
          : 'bg-gradient-to-br from-gray-900/50 to-gray-900/30 border-gray-800/50 hover:border-gray-700'
      }`}
      data-testid={`faq-item-${faq.id}`}
    >
      <button
        onClick={() => toggleFAQ(faq.id)}
        className="w-full px-6 py-5 flex items-start gap-4 text-left"
        aria-expanded={openId === faq.id}
      >
        {/* Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
          openId === faq.id 
            ? 'bg-gradient-to-r from-cyan-400 to-sky-400' 
            : 'bg-gray-800 group-hover:bg-gray-700'
        }`}>
          <HelpCircle className={`w-5 h-5 ${openId === faq.id ? 'text-black' : 'text-cyan-400'}`} />
        </div>
        
        {/* Question */}
        <div className="flex-1 min-w-0">
          <span className={`block font-semibold transition-colors ${
            openId === faq.id ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
          }`}>
            {faq.question}
          </span>
          <span className="text-xs text-gray-500 mt-1 block">{faq.category}</span>
        </div>
        
        {/* Arrow */}
        <ChevronDown 
          className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-300 ${
            openId === faq.id ? 'rotate-180 text-cyan-400' : 'text-gray-500'
          }`} 
        />
      </button>
      
      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pl-20 text-gray-400 leading-relaxed text-sm">
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <section id="faq" className="py-24 bg-[#0a0e1a]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30 mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our home theatre and smart home solutions
          </p>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-16">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800 p-8 md:p-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Still have questions?
                </h3>
                <p className="text-gray-400">
                  Can't find what you're looking for? Our expert team is here to help with personalized guidance.
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/917204746043" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-90 text-black font-semibold px-6 py-6 rounded-xl whitespace-nowrap">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <a href="tel:+917204746043">
                  <Button variant="outline" className="border-2 border-gray-700 text-white hover:bg-gray-800 px-6 py-6 rounded-xl whitespace-nowrap">
                    <Phone className="w-5 h-5 mr-2" />
                    +91 72047 46043
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

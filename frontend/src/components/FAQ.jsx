import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';

// Static FAQ data
const faqs = [
  {
    id: 1,
    question: "How much does a home theatre cost in Bangalore?",
    answer: "Home theatre costs in Bangalore range from ₹2.29 lakhs for an Essential Package (5.1 system with 4K projector) to ₹12.39 lakhs for a premium Gold Package (7.1.2 Dolby Atmos system). We offer customizable packages to fit any budget and room size."
  },
  {
    id: 2,
    question: "What is included in home automation?",
    answer: "Home automation includes smart lighting control, climate control (AC/fans), motorized curtains, security system integration, smart switches, voice control integration (Alexa/Google), and centralized control via smartphone app. You can control everything from anywhere in the world."
  },
  {
    id: 3,
    question: "Do you provide installation services?",
    answer: "Yes, we provide complete end-to-end installation services including free consultation, custom design, professional installation, and lifetime support. Our certified technicians ensure professional installation with minimal disruption to your daily routine."
  },
  {
    id: 4,
    question: "What brands do you work with?",
    answer: "We work with premium international and Indian brands including JBL, Denon, Yamaha, Sony, Epson, BenQ, Samsung, LG, Yale, Hikvision, BuildTrack, and many more. We are brand-agnostic and recommend the best products for your specific needs."
  },
  {
    id: 5,
    question: "Do you offer warranty and support?",
    answer: "Yes, we offer comprehensive warranty on all products (up to 5 years on premium speakers) and lifetime technical support. This includes 24/7 helpline access, regular system health checks, firmware updates, and priority service for existing customers."
  },
  {
    id: 6,
    question: "What areas in Bangalore do you serve?",
    answer: "We serve all areas in Bangalore including Whitefield, Koramangala, Indiranagar, HSR Layout, JP Nagar, Jayanagar, Electronic City, Sarjapur Road, Marathahalli, and more. We have experience centers in Bharatiya City and MG Road."
  },
  {
    id: 7,
    question: "How long does installation take?",
    answer: "Installation time varies based on project scope. Basic smart switches take a few hours, a home theatre takes 2-5 days, while complete home automation for a large villa can take 1-2 weeks. We provide a detailed timeline during your free consultation."
  },
  {
    id: 8,
    question: "Can I upgrade my existing setup?",
    answer: "Absolutely! We specialize in upgrading existing home theatres and automation systems. Whether you want to add Dolby Atmos to your current system, upgrade to 4K projection, or add smart controls, we can help enhance your current setup."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-[#0f1419]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got Questions? We've Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Answers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to know about our home theatre and automation solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-xl px-6 data-[state=open]:border-cyan-500/50"
                data-testid={`faq-item-${faq.id}`}
              >
                <AccordionTrigger className="text-left text-white hover:text-cyan-400 py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">
                      {faq.id}
                    </span>
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pl-12 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our expert team is here to help you with
            personalized guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/917204746043" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-90 text-black font-semibold px-8 py-6 rounded-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat With Us
              </Button>
            </a>
            <a href="tel:+917204746043">
              <Button
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 72047 46043
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

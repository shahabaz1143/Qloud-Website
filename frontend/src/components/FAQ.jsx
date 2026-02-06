import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { fetchFAQs } from '../services/api';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await fetchFAQs();
        setFaqs(data);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFAQs();
  }, []);

  if (loading) {
    return (
      <section id="faq" className="py-24 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="text-center text-cyan-400">Loading FAQs...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-24 bg-[#0f1419]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got Questions? We've Got Answers
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
              >
                <AccordionTrigger className="text-left text-white hover:text-cyan-400 py-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 font-bold">
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
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 rounded-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat With Us
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 72047 46043
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

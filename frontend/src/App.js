import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { MessageCircle } from 'lucide-react';

function App() {
  const openWhatsApp = () => {
    window.open('https://wa.me/917204746043', '_blank');
  };

  return (
    <div className="App bg-[#0a0e1a]">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Process />
      <Projects />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <Toaster />
      
      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}

export default App;

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
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="bg-gray-900/90 text-white text-sm px-4 py-2 rounded-full shadow-lg border border-green-500/30 animate-bounce">
          We're here to help! 💬
        </div>
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Chat on WhatsApp"
        >
          <svg 
            viewBox="0 0 32 32" 
            className="w-8 h-8 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.744 30.998 12.738 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.59c-.39 1.1-1.932 2.012-3.182 2.278-.856.182-1.974.326-5.738-1.234-4.818-1.996-7.922-6.904-8.162-7.222-.23-.318-1.932-2.57-1.932-4.902 0-2.33 1.222-3.476 1.656-3.952.39-.432 1.028-.626 1.64-.626.198 0 .376.01.536.018.434.018.652.044.938.724.358.85 1.23 2.998 1.336 3.216.11.218.214.504.066.8-.138.306-.26.442-.478.692-.218.25-.424.442-.642.712-.2.238-.424.494-.182.928.24.434 1.07 1.764 2.298 2.858 1.58 1.406 2.912 1.842 3.324 2.048.318.16.694.13.948-.14.32-.344.714-.914 1.116-1.476.286-.402.646-.452.998-.306.358.136 2.264 1.066 2.652 1.26.39.194.65.292.746.452.094.16.094.922-.296 1.872z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;

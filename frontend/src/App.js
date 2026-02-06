import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Projects from './components/Projects';
import BrandPartners from './components/BrandPartners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App bg-[#0a0e1a]">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Process />
      <Projects />
      <BrandPartners />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

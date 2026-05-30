import React, { useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Qloud Tech | Home Theatre & Smart Home Bangalore';

    const ensureMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta(
      'description',
      'Get in touch with Qloud Tech for home theatre and smart home automation in Bangalore. Call +91 7204746043, WhatsApp, or book a free on-site consultation.'
    );

    return () => {
      document.title = 'Qloud Tech | Home Theatre & Smart Home Automation';
    };
  }, []);

  return (
    <div className="App bg-[#0a0e1a]">
      <Header />
      <div className="pt-24 pb-4 container mx-auto px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li>/</li>
            <li className="text-white">Contact</li>
          </ol>
        </nav>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

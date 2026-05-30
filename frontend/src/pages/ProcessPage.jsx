import React, { useEffect } from 'react';
import Header from '../components/Header';
import Process from '../components/Process';
import Footer from '../components/Footer';

const ProcessPage = () => {
  useEffect(() => {
    document.title = 'Our Installation Process | Qloud Tech Bangalore';

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
      'See how Qloud Tech delivers home theatre and smart home installations in Bangalore — from free consultation to handover. Transparent 5-step process.'
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
            <li className="text-white">Process</li>
          </ol>
        </nav>
      </div>
      <Process />
      <Footer />
    </div>
  );
};

export default ProcessPage;

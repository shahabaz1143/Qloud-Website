import React, { useEffect } from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const PackagesPage = () => {
  useEffect(() => {
    document.title = 'Smart Home & Home Theatre Packages | Qloud Tech Bangalore';

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
      'Transparent pricing for home theatre, home automation, security & smart home packages in Bangalore. Starting from ₹2.29 lakhs. Free consultation.'
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
            <li className="text-white">Packages</li>
          </ol>
        </nav>
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default PackagesPage;

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Our Projects & Portfolio | Qloud Tech Bangalore';

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
      'Browse Qloud Tech\'s recent home theatre and smart home automation projects across Bangalore. See real installations in Whitefield, Koramangala, HSR Layout and more.'
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
            <li className="text-white">Projects</li>
          </ol>
        </nav>
      </div>
      <Projects />
      <Gallery />
      <Footer />
    </div>
  );
};

export default ProjectsPage;

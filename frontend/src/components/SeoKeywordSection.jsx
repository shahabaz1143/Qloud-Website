import React from 'react';
import { Link } from 'react-router-dom';

// Readable, keyword-rich SEO content section. Two variants (home / services)
// with distinct phrasing to avoid duplicate content, both covering the full
// keyword set: commercial, local, brand, configuration, comparison & long-tail.

const HomeContent = () => (
  <div className="max-w-4xl mx-auto space-y-10 text-gray-300 leading-relaxed">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Home Theatre Installation in <span className="text-cyan-400">Bangalore</span>
      </h2>
      <p className="mb-4">
        Qloud Tech is a leading <strong>home theatre installation</strong> company and one of the most trusted
        <strong> home theatre dealers and shops in Bangalore</strong>. Whether you want a compact living-room setup or a
        fully <strong>dedicated, luxury home theatre</strong>, our team handles complete <strong>home cinema
        installation</strong> and <strong>home theatre setup in Bangalore</strong> — from design and supply to
        acoustic treatment, calibration and handover. Searching for <em>"home theatre installation near me"</em>?
        We serve all of Bangalore with a free on-site consultation and transparent{' '}
        <Link to="/blog/home-theatre-cost-bangalore" className="text-cyan-400 hover:text-cyan-300">home theatre cost and price</Link>.
      </p>
      <p>
        Our <strong>Dolby Atmos home theatre</strong> systems recreate a true cinema experience at home. Compare
        options and get started with our{' '}
        <Link to="/services/home-theatre" className="text-cyan-400 hover:text-cyan-300">home theatre service</Link>{' '}
        or view transparent <Link to="/packages" className="text-cyan-400 hover:text-cyan-300">home theatre packages</Link> from ₹2.29 Lakhs.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Dolby Atmos &amp; Speaker Configurations</h3>
      <p>
        We design every popular configuration — from <strong>5.1 and 7.1 surround sound</strong> to full
        <strong> Dolby Atmos 5.1.2, 7.1.2 and 7.1.4</strong> setups with height channels. Not sure whether to pick a
        <strong> projector or a TV</strong>, or how much room you need? Read our guides on{' '}
        <Link to="/blog/projector-vs-tv-home-theatre" className="text-cyan-400 hover:text-cyan-300">projector vs TV</Link>,{' '}
        <Link to="/blog/home-theatre-room-size-guide" className="text-cyan-400 hover:text-cyan-300">home theatre room size</Link>,{' '}
        <Link to="/blog/home-theatre-soundproofing-guide" className="text-cyan-400 hover:text-cyan-300">acoustic treatment &amp; soundproofing</Link>, and the{' '}
        <Link to="/blog/best-projector-under-2-lakh" className="text-cyan-400 hover:text-cyan-300">best projector under 2 lakh</Link>.
        Every room gets professional acoustic panels, bass traps and premium recliner seating. New to home cinema?
        Learn <Link to="/blog/home-theatre-setup-bangalore-guide" className="text-cyan-400 hover:text-cyan-300">how to set up a home theatre</Link>{' '}
        and whether a <Link to="/blog/soundbar-vs-home-theatre" className="text-cyan-400 hover:text-cyan-300">soundbar vs a home theatre</Link> is right for you.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Audio Brands We Supply &amp; Install</h3>
      <p>
        As a vendor-neutral <strong>audio and home theatre dealer in Bangalore</strong>, we supply, sell and install
        the world's finest brands. Explore our dealer pages:{' '}
        <Link to="/jbl-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">JBL</Link>,{' '}
        <Link to="/polk-audio-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">Polk Audio</Link>,{' '}
        <Link to="/monitor-audio-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">Monitor Audio</Link>,{' '}
        <Link to="/kef-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">KEF</Link> and{' '}
        <Link to="/klipsch-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">Klipsch</Link>.
        We also supply <strong>Denon, Marantz, Yamaha, Focal, Bowers &amp; Wilkins</strong> AV receivers and speakers,
        plus <strong>Sony, Epson and BenQ</strong> 4K projectors. Wondering <em>where to buy JBL, KEF or Klipsch
        speakers in Bangalore</em>? Talk to us for a demo.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Areas We Serve in Bangalore &amp; Karnataka</h3>
      <p>
        We install home theatres and smart homes across <strong>Whitefield, Koramangala, Indiranagar, HSR Layout,
        JP Nagar, Jayanagar, Sarjapur Road, Electronic City, Marathahalli, Yelahanka, Hebbal, Bannerghatta,
        Malleshwaram and Banashankari</strong>. Beyond the city, we serve all of Karnataka including{' '}
        <strong>Mysuru, Mangalore, Hubballi-Dharwad, Belgavi, Udupi-Manipal and Tumakuru</strong>.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Why We're the Best Home Theatre Company in Bangalore</h3>
      <p>
        With 100+ home theatres delivered, 450+ happy customers and a perfect 5-star rating from 70 verified reviews,
        Qloud Tech is consistently rated among the <strong>best home theatre companies and top installers in
        Bangalore</strong>. From the <strong>best home theatre setup for a living room</strong> to reference-grade
        dedicated cinema rooms, we deliver the right solution for your space and budget. See our{' '}
        <Link to="/blog/best-home-theatre-company-bangalore" className="text-cyan-400 hover:text-cyan-300">best home theatre company comparison</Link>.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Popular Questions</h3>
      <div className="space-y-4">
        <div>
          <p className="text-white font-semibold">How much does a home theatre cost in Bangalore?</p>
          <p>Home theatre installation in Bangalore ranges from ₹2.29 Lakhs (Essential 5.1) to ₹12.39 Lakhs (Gold 7.1.2 Dolby Atmos), with fully custom builds beyond ₹15 Lakhs.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Which is the best home theatre company in Bangalore?</p>
          <p>Qloud Tech is a top-rated home theatre company in Bangalore with 100+ Dolby Atmos installations and a 5-star rating from 70 verified reviews.</p>
        </div>
        <div>
          <p className="text-white font-semibold">What is the minimum room size for a home theatre?</p>
          <p>A minimum of 150 sq ft is recommended for a comfortable dedicated home theatre, though we design solutions for smaller rooms too.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Is a projector or TV better for a home theatre?</p>
          <p>A 4K projector gives the true cinema experience in a light-controlled room; a large TV suits bright living rooms. We help you choose the right display for your space.</p>
        </div>
      </div>
    </div>
  </div>
);

const ServicesContent = () => (
  <div className="max-w-4xl mx-auto space-y-10 text-gray-300 leading-relaxed">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Home Theatre &amp; Smart Home Services in <span className="text-cyan-400">Bangalore</span>
      </h2>
      <p className="mb-4">
        Qloud Tech offers end-to-end <strong>home theatre installation and home cinema setup in Bangalore</strong>,
        alongside smart home automation, CCTV security, digital door locks and networking. As established{' '}
        <strong>home theatre dealers in Bangalore</strong>, we build everything from budget living-room systems to
        <strong> dedicated, luxury Dolby Atmos home theatres</strong>. Looking for <em>"home theatre installation
        near me"</em> with clear pricing? Check our{' '}
        <Link to="/packages" className="text-cyan-400 hover:text-cyan-300">packages</Link> and the{' '}
        <Link to="/blog/home-theatre-cost-bangalore" className="text-cyan-400 hover:text-cyan-300">home theatre cost guide for Bangalore</Link>.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Dolby Atmos Configurations &amp; Acoustics</h3>
      <p>
        Our engineers design <strong>5.1, 7.1 and Dolby Atmos 5.1.2 / 7.1.2 / 7.1.4</strong> systems with
        professional <strong>acoustic treatment and soundproofing</strong>, acoustic panels, bass traps and premium
        recliners. Compare a <Link to="/blog/projector-vs-tv-home-theatre" className="text-cyan-400 hover:text-cyan-300">projector vs a TV</Link>,
        learn the ideal <Link to="/blog/home-theatre-room-size-guide" className="text-cyan-400 hover:text-cyan-300">room size</Link>,
        and see the <Link to="/blog/best-projector-under-2-lakh" className="text-cyan-400 hover:text-cyan-300">best projector under 2 lakh</Link> in our guides.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Brands We Deal In</h3>
      <p>
        We are a multi-brand <strong>audio and home theatre dealer in Bangalore</strong> — supplying and installing{' '}
        <Link to="/jbl-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">JBL</Link>,{' '}
        <Link to="/polk-audio-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">Polk Audio</Link>,{' '}
        <Link to="/monitor-audio-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">Monitor Audio</Link>,{' '}
        <Link to="/kef-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">KEF</Link>,{' '}
        <Link to="/klipsch-dealer-bangalore" className="text-cyan-400 hover:text-cyan-300">Klipsch</Link>, plus
        Denon, Marantz, Yamaha, Focal, Bowers &amp; Wilkins, and Sony, Epson &amp; BenQ projectors. Read about all{' '}
        <Link to="/blog/home-theatre-audio-brand-dealers-bangalore" className="text-cyan-400 hover:text-cyan-300">brands and where to buy them in Bangalore</Link>.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">Serving All of Bangalore &amp; Karnataka</h3>
      <p>
        Installations across <strong>Whitefield, Koramangala, Indiranagar, HSR Layout, JP Nagar, Jayanagar,
        Sarjapur Road, Electronic City, Marathahalli, Yelahanka and Hebbal</strong>, plus <strong>Mysuru, Mangalore,
        Hubballi, Belgavi, Udupi and Tumakuru</strong> across Karnataka.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white mb-3">The Top-Rated Home Theatre Installers in Bangalore</h3>
      <p>
        Rated among the <strong>best home theatre companies and top installers in Bangalore</strong> — 100+ projects,
        450+ happy customers and a 5-star rating from 70 verified reviews. Whether you want the{' '}
        <strong>best home theatre setup for a living room</strong> or a dedicated cinema, start with our{' '}
        <Link to="/blog/best-home-theatre-company-bangalore" className="text-cyan-400 hover:text-cyan-300">best home theatre company guide</Link>{' '}
        and <Link to="/blog/smart-home-automation-guide" className="text-cyan-400 hover:text-cyan-300">smart home automation guide</Link>.
      </p>
    </div>
  </div>
);

const SeoKeywordSection = ({ variant = 'home' }) => {
  return (
    <section className="py-20 bg-[#0a0e1a]" data-testid={`seo-content-${variant}`}>
      <div className="container mx-auto px-6">
        {variant === 'services' ? <ServicesContent /> : <HomeContent />}
      </div>
    </section>
  );
};

export default SeoKeywordSection;

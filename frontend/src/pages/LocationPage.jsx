import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Phone, MessageCircle, MapPin, Star, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';

// Location-specific landing page data
const locationData = {
  'home-theatre-bangalore': {
    service: 'Home Theatre',
    location: 'Bangalore',
    title: 'Home Theatre Installation in Bangalore',
    metaTitle: 'Home Theatre Installation Bangalore | #1 Dolby Atmos Experts | Qloud Tech',
    metaDescription: 'Professional home theatre installation in Bangalore. Dolby Atmos specialists serving Whitefield, Koramangala, Indiranagar, HSR Layout. Starting ₹2.29L. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Looking for the best home theatre installation in Bangalore? Qloud Tech is the #1 rated home theatre company serving all major areas including Whitefield, Koramangala, Indiranagar, HSR Layout, Jayanagar, and JP Nagar. With 8+ years of experience and 100+ home theatres designed, we transform your space into a cinematic paradise.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Dolby Atmos 5.1.2 / 7.1.2 / 9.1.4 configurations',
      '4K & 8K laser projectors from Sony, Epson, BenQ',
      'Premium speakers from JBL, Denon, Focal, KEF',
      'Professional acoustic treatment & soundproofing',
      'Custom seating with recliners',
      'Smart lighting integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 system, 4K projector' },
        { name: 'Silver', price: '₹9.99L', desc: '5.1.2 Dolby Atmos' },
        { name: 'Gold', price: '₹12.39L', desc: '7.1.2 Premium setup' }
      ]
    },
    stats: [
      { value: '100+', label: 'Home Theatres Built' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24hr', label: 'Response Time' }
    ],
    testimonials: [
      { name: 'Rajesh K.', area: 'Whitefield', text: 'Amazing work! The Dolby Atmos setup is incredible. Best investment for our villa.' },
      { name: 'Priya S.', area: 'Koramangala', text: 'Professional team, delivered on time. The acoustic treatment made a huge difference.' },
      { name: 'Arun M.', area: 'HSR Layout', text: 'Exceeded expectations! The 4K projector and sound system are theater-quality.' }
    ],
    relatedService: 'home-theatre'
  },
  'home-automation-bangalore': {
    service: 'Home Automation',
    location: 'Bangalore',
    title: 'Smart Home Automation in Bangalore',
    metaTitle: 'Home Automation Bangalore | Smart Home Solutions | Qloud Tech',
    metaDescription: 'Complete smart home automation in Bangalore. Control lights, AC, security from your phone. Serving Whitefield, Koramangala, Indiranagar. Starting ₹50K. Free demo!',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Transform your Bangalore home into a smart home with Qloud Tech. We provide complete home automation solutions including smart lighting, climate control, security integration, and voice control. Serving all major localities with professional installation and lifetime support.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Smart lighting with scene control',
      'Climate control (AC, fans, curtains)',
      'Voice control with Alexa & Google',
      'Security system integration',
      'Energy monitoring & savings',
      'Remote access from anywhere'
    ],
    pricing: {
      starting: '₹50,000',
      packages: [
        { name: 'Starter', price: '₹50K', desc: '1-2 rooms, basic control' },
        { name: 'Standard', price: '₹1.5L', desc: 'Whole home automation' },
        { name: 'Premium', price: '₹3L+', desc: 'Complete smart home' }
      ]
    },
    stats: [
      { value: '200+', label: 'Homes Automated' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '30%', label: 'Energy Savings' }
    ],
    testimonials: [
      { name: 'Vikram R.', area: 'Indiranagar', text: 'Love controlling everything from my phone. The energy savings are real!' },
      { name: 'Sneha P.', area: 'Whitefield', text: 'The voice control setup is seamless. Kids love saying "Alexa, movie time!"' },
      { name: 'Kumar S.', area: 'JP Nagar', text: 'Professional installation, great after-sales support. Highly recommended!' }
    ],
    relatedService: 'home-automation'
  },
  'security-systems-bangalore': {
    service: 'Security Systems',
    location: 'Bangalore',
    title: 'Home Security Systems in Bangalore',
    metaTitle: 'Home Security Systems Bangalore | CCTV & Smart Locks | Qloud Tech',
    metaDescription: 'Advanced home security in Bangalore. CCTV cameras, smart locks, video doorbells. Professional installation in Whitefield, Koramangala, HSR. Starting ₹25K!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif',
    description: 'Protect your Bangalore home with advanced security systems from Qloud Tech. We install HD/4K CCTV cameras, smart door locks, video door phones, and complete security solutions. 24/7 monitoring options available for complete peace of mind.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'HD/4K CCTV cameras with night vision',
      'Smart door locks with fingerprint access',
      'Video door phones with app access',
      'Motion detection & instant alerts',
      'Cloud & local storage options',
      '24/7 remote monitoring'
    ],
    pricing: {
      starting: '₹25,000',
      packages: [
        { name: 'Basic', price: '₹25K', desc: '4 HD cameras + DVR' },
        { name: 'Advanced', price: '₹75K', desc: '8 4K cameras + smart lock' },
        { name: 'Complete', price: '₹1.5L+', desc: 'Full perimeter security' }
      ]
    },
    stats: [
      { value: '500+', label: 'Homes Secured' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24/7', label: 'Support Available' }
    ],
    testimonials: [
      { name: 'Ramesh G.', area: 'Electronic City', text: 'The 4K cameras are crystal clear. Can monitor my home from office anytime.' },
      { name: 'Meera K.', area: 'Sarjapur Road', text: 'Smart lock is so convenient! No more worrying about keys.' },
      { name: 'Suresh B.', area: 'Whitefield', text: 'Complete security solution. Feel much safer now with 24/7 monitoring.' }
    ],
    relatedService: 'security-systems'
  },
  'smart-switches-bangalore': {
    service: 'Smart Switches',
    location: 'Bangalore',
    title: 'Smart Touch Switches in Bangalore',
    metaTitle: 'Smart Switches Bangalore | Touch Panels | WiFi Switches | Qloud Tech',
    metaDescription: 'Modern smart touch switches in Bangalore. WiFi enabled, app control, voice compatible. Professional installation. Starting ₹2,500/switch. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp',
    description: 'Upgrade your Bangalore home with elegant smart touch switches from Qloud Tech. Our WiFi-enabled switches offer app control, voice compatibility, and scene settings. Easy retrofit installation without rewiring in most cases.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Elegant glass touch panels',
      'WiFi & Bluetooth connectivity',
      'App control from anywhere',
      'Voice control compatible',
      'Scene & schedule settings',
      'No rewiring required'
    ],
    pricing: {
      starting: '₹2,500',
      packages: [
        { name: 'Per Switch', price: '₹2.5-5K', desc: 'Single switch replacement' },
        { name: 'Room Package', price: '₹15-25K', desc: 'Complete room upgrade' },
        { name: 'Whole Home', price: '₹75K+', desc: 'Full home conversion' }
      ]
    },
    stats: [
      { value: '1000+', label: 'Switches Installed' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '1 Day', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Deepak M.', area: 'Koramangala', text: 'The touch switches look so modern! Guests always ask about them.' },
      { name: 'Anita R.', area: 'HSR Layout', text: 'Love the app control. Can turn off lights even after leaving home.' },
      { name: 'Prasad K.', area: 'Indiranagar', text: 'Installation was quick and clean. No mess, no rewiring needed.' }
    ],
    relatedService: 'smart-switches'
  },
  'digital-locks-bangalore': {
    service: 'Digital Door Locks',
    location: 'Bangalore',
    title: 'Digital Door Locks in Bangalore',
    metaTitle: 'Digital Door Locks Bangalore | Smart Locks | Fingerprint | Qloud Tech',
    metaDescription: 'Premium digital door locks in Bangalore. Fingerprint, PIN, app access. Yale, Samsung, Godrej. Professional installation. Starting ₹15K. Free demo!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/emph1fnm_1_d41ba0ee-d7c8-4526-bcb2-c9b3c69a7090%20%284%29.webp',
    description: 'Go keyless with digital door locks from Qloud Tech in Bangalore. We install premium smart locks from Yale, Samsung, and Godrej with fingerprint, PIN, card, and app access. Perfect for homes, apartments, and offices across Bangalore.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'Fingerprint recognition',
      'PIN code access',
      'RFID card entry',
      'Smartphone app control',
      'Temporary guest codes',
      'Entry/exit logs'
    ],
    pricing: {
      starting: '₹15,000',
      packages: [
        { name: 'Basic', price: '₹15-25K', desc: 'PIN + Card access' },
        { name: 'Premium', price: '₹30-50K', desc: 'Fingerprint + App' },
        { name: 'High Security', price: '₹60K+', desc: 'Biometric + Face ID' }
      ]
    },
    stats: [
      { value: '300+', label: 'Locks Installed' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '2 Hr', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Kiran T.', area: 'Whitefield', text: 'No more fumbling for keys! Fingerprint access is super convenient.' },
      { name: 'Lakshmi S.', area: 'JP Nagar', text: 'Love giving temporary codes to guests. So much better than spare keys.' },
      { name: 'Ravi M.', area: 'Marathahalli', text: 'Yale lock quality is excellent. Feels very secure and premium.' }
    ],
    relatedService: 'digital-door-locks'
  },
  'video-doorbell-bangalore': {
    service: 'Video Door Phones',
    location: 'Bangalore',
    title: 'Video Door Phones in Bangalore',
    metaTitle: 'Video Door Phone Bangalore | Smart Doorbell | Intercom | Qloud Tech',
    metaDescription: 'HD video door phones in Bangalore. See visitors on your phone, 2-way audio, motion alerts. Professional installation. Starting ₹8K. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png',
    description: 'See who is at your door from anywhere with video door phones from Qloud Tech. We install smart video doorbells and intercom systems across Bangalore with HD video, 2-way audio, and smartphone integration.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      'HD/Full HD video quality',
      'Two-way audio communication',
      'Motion detection alerts',
      'Night vision',
      'Cloud recording',
      'Smartphone app access'
    ],
    pricing: {
      starting: '₹8,000',
      packages: [
        { name: 'Basic', price: '₹8-15K', desc: 'Wired intercom system' },
        { name: 'Smart', price: '₹20-35K', desc: 'WiFi doorbell + app' },
        { name: 'Premium', price: '₹40K+', desc: 'HD + multiple monitors' }
      ]
    },
    stats: [
      { value: '400+', label: 'Systems Installed' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '3 Hr', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Ashok P.', area: 'Sarjapur Road', text: 'Can see deliveries even from office. Never miss a package now!' },
      { name: 'Divya N.', area: 'Koramangala', text: 'The night vision is amazing. Crystal clear even in complete darkness.' },
      { name: 'Mohan K.', area: 'Electronic City', text: 'Two-way audio is great for talking to visitors when not home.' }
    ],
    relatedService: 'video-door-phones'
  },
  // Neighborhood-specific pages for hyper-local SEO
  'home-theatre-whitefield': {
    service: 'Home Theatre',
    location: 'Whitefield, Bangalore',
    title: 'Home Theatre Installation in Whitefield',
    metaTitle: 'Home Theatre Installation Whitefield | Dolby Atmos | Qloud Tech',
    metaDescription: 'Premium home theatre installation in Whitefield, Bangalore. Dolby Atmos experts for villas & apartments in ITPL, Brookefield, Kadugodi. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Whitefield is home to Bangalore\'s finest villas and luxury apartments - perfect for premium home theatre installations. Qloud Tech has installed 50+ home theatres in Whitefield, including projects in Prestige Lakeside Habitat, Brigade Cornerstone, Sobha Dream Acres, and Adarsh Palm Retreat.',
    areas: ['ITPL', 'Brookefield', 'Kadugodi', 'Varthur', 'Hoodi', 'Kundalahalli', 'Mahadevapura', 'Hope Farm Junction', 'Prestige Shantiniketan', 'Palm Meadows'],
    features: [
      'Dolby Atmos 5.1.2 / 7.1.2 configurations',
      '4K laser projectors from Sony & Epson',
      'Premium JBL & Denon speakers',
      'Full acoustic treatment',
      'Custom theater seating',
      'Smart home integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 system, 4K projector' },
        { name: 'Silver', price: '₹9.99L', desc: '5.1.2 Dolby Atmos' },
        { name: 'Gold', price: '₹12.39L', desc: '7.1.2 Premium setup' }
      ]
    },
    stats: [
      { value: '50+', label: 'Whitefield Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24hr', label: 'Response Time' }
    ],
    testimonials: [
      { name: 'Suresh V.', area: 'Prestige Lakeside', text: 'Best home theatre in our society! Everyone is amazed by the Dolby Atmos experience.' },
      { name: 'Neha R.', area: 'Brigade Cornerstone', text: 'Professional installation, minimal disruption. The acoustic treatment is superb.' },
      { name: 'Amit K.', area: 'Palm Meadows', text: 'Transformed our villa basement into a proper cinema. Worth every rupee!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-koramangala': {
    service: 'Home Theatre',
    location: 'Koramangala, Bangalore',
    title: 'Home Theatre Installation in Koramangala',
    metaTitle: 'Home Theatre Installation Koramangala | Cinema Room Experts | Qloud Tech',
    metaDescription: 'Expert home theatre installation in Koramangala, Bangalore. Serving 1st-8th Block, HSR Layout adjacent areas. Dolby Atmos specialists. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Koramangala\'s premium apartments and independent houses deserve world-class home theatres. Qloud Tech specializes in compact home theatre solutions for Koramangala homes, maximizing space without compromising on audio-visual quality.',
    areas: ['1st Block', '2nd Block', '3rd Block', '4th Block', '5th Block', '6th Block', '7th Block', '8th Block', 'Ejipura', 'Jakkasandra'],
    features: [
      'Space-optimized Dolby Atmos setups',
      'In-ceiling & in-wall speakers',
      '4K short-throw projectors',
      'Acoustic panels for apartments',
      'Sound isolation solutions',
      'Voice control integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Compact', price: '₹2.29L', desc: 'Apartment-friendly 5.1' },
        { name: 'Premium', price: '₹7.99L', desc: '5.1.2 space-optimized' },
        { name: 'Ultra', price: '₹10L+', desc: 'Full Atmos experience' }
      ]
    },
    stats: [
      { value: '40+', label: 'Koramangala Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '2km', label: 'Service Radius' }
    ],
    testimonials: [
      { name: 'Rahul S.', area: '4th Block', text: 'Didn\'t think our 3BHK could have a home theatre. Qloud made it happen!' },
      { name: 'Deepa M.', area: '6th Block', text: 'The in-ceiling speakers are invisible but the sound is incredible.' },
      { name: 'Karthik B.', area: 'Ejipura', text: 'Neighbors can\'t hear a thing thanks to the soundproofing. Perfect!' }
    ],
    relatedService: 'home-theatre'
  },
  'smart-home-whitefield': {
    service: 'Home Automation',
    location: 'Whitefield, Bangalore',
    title: 'Smart Home Automation in Whitefield',
    metaTitle: 'Smart Home Automation Whitefield | Home Automation Experts | Qloud Tech',
    metaDescription: 'Complete smart home automation in Whitefield, Bangalore. Smart lighting, AC control, security integration for villas & apartments. Starting ₹50K.',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Make your Whitefield home smarter with Qloud Tech. We specialize in smart home automation for Whitefield\'s premium villas and apartments, integrating lighting, climate, security, and entertainment into one seamless system.',
    areas: ['ITPL', 'Brookefield', 'Kadugodi', 'Varthur', 'Hoodi', 'Kundalahalli', 'Mahadevapura', 'Hope Farm Junction', 'Prestige Shantiniketan', 'Palm Meadows'],
    features: [
      'Smart lighting scenes',
      'AC & fan automation',
      'Motorized curtains',
      'Security integration',
      'Voice control (Alexa/Google)',
      'Energy monitoring'
    ],
    pricing: {
      starting: '₹50,000',
      packages: [
        { name: 'Starter', price: '₹50K', desc: '1-2 rooms automated' },
        { name: 'Standard', price: '₹1.5L', desc: 'Whole home solution' },
        { name: 'Villa', price: '₹3L+', desc: 'Complete smart villa' }
      ]
    },
    stats: [
      { value: '75+', label: 'Whitefield Homes' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '30%', label: 'Energy Savings' }
    ],
    testimonials: [
      { name: 'Pradeep R.', area: 'Prestige Lakeside', text: 'Our 4BHK is fully automated now. The app control is amazing!' },
      { name: 'Swati K.', area: 'Sobha Dream Acres', text: 'Voice control for lights and AC - feels like living in the future.' },
      { name: 'Venkat M.', area: 'Palm Meadows', text: 'Energy bill reduced by 35% after automation. Great investment!' }
    ],
    relatedService: 'home-automation'
  },
  'cctv-installation-bangalore': {
    service: 'CCTV Installation',
    location: 'Bangalore',
    title: 'CCTV Camera Installation in Bangalore',
    metaTitle: 'CCTV Installation Bangalore | HD Security Cameras | Qloud Tech',
    metaDescription: 'Professional CCTV camera installation in Bangalore. 2MP/4MP/4K cameras, night vision, mobile viewing. Serving all areas. Starting ₹15K. Free site survey!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif',
    description: 'Secure your Bangalore property with professional CCTV installation from Qloud Tech. We install HD, Full HD, and 4K cameras from Hikvision, Dahua, and CP Plus with mobile app viewing, night vision, and cloud storage options.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Jayanagar', 'JP Nagar', 'Marathahalli', 'Sarjapur Road', 'Electronic City', 'Bannerghatta Road'],
    features: [
      '2MP/4MP/4K camera options',
      'Night vision up to 30m',
      'Mobile app live viewing',
      'Motion detection alerts',
      'Cloud & local storage',
      'Weatherproof outdoor cameras'
    ],
    pricing: {
      starting: '₹15,000',
      packages: [
        { name: '4 Camera', price: '₹15-25K', desc: 'HD cameras + DVR' },
        { name: '8 Camera', price: '₹30-50K', desc: '4K cameras + NVR' },
        { name: '16 Camera', price: '₹75K+', desc: 'Full property coverage' }
      ]
    },
    stats: [
      { value: '500+', label: 'CCTV Installations' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '1 Day', label: 'Installation Time' }
    ],
    testimonials: [
      { name: 'Prakash G.', area: 'Electronic City', text: 'The 4K cameras are crystal clear. Can see license plates from 20 meters!' },
      { name: 'Suma R.', area: 'Whitefield', text: 'Mobile viewing is so convenient. Check on home anytime from office.' },
      { name: 'Raj K.', area: 'HSR Layout', text: 'Professional installation, clean wiring. Very happy with the service.' }
    ],
    relatedService: 'security-systems'
  },
  // More Neighborhood Pages for Hyper-Local SEO
  'home-theatre-hsr-layout': {
    service: 'Home Theatre',
    location: 'HSR Layout, Bangalore',
    title: 'Home Theatre Installation in HSR Layout',
    metaTitle: 'Home Theatre Installation HSR Layout | Dolby Atmos | Qloud Tech',
    metaDescription: 'Premium home theatre installation in HSR Layout, Bangalore. Dolby Atmos experts for apartments & villas in Sector 1-7. Starting ₹2.29L. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'HSR Layout is one of Bangalore\'s most sought-after residential areas, home to tech professionals who appreciate premium entertainment. Qloud Tech has installed 35+ home theatres in HSR Layout, from compact apartment setups to dedicated villa cinema rooms.',
    areas: ['HSR Sector 1', 'HSR Sector 2', 'HSR Sector 3', 'HSR Sector 4', 'HSR Sector 5', 'HSR Sector 6', 'HSR Sector 7', 'BTM Layout', 'Bommanahalli', 'Koramangala'],
    features: [
      'Compact Dolby Atmos for apartments',
      'In-wall & in-ceiling speakers',
      '4K short-throw projectors',
      'Acoustic treatment solutions',
      'Sound isolation for flats',
      'Smart home integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Apartment', price: '₹2.29L', desc: 'Space-optimized 5.1' },
        { name: 'Premium', price: '₹7.99L', desc: '5.1.2 Dolby Atmos' },
        { name: 'Villa', price: '₹12L+', desc: 'Full cinema room' }
      ]
    },
    stats: [
      { value: '35+', label: 'HSR Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '3 Days', label: 'Avg Installation' }
    ],
    testimonials: [
      { name: 'Rohit S.', area: 'HSR Sector 2', text: 'Perfect setup for our 3BHK apartment. The sound is incredible!' },
      { name: 'Anjali P.', area: 'HSR Sector 4', text: 'Neighbors don\'t complain thanks to proper acoustic treatment.' },
      { name: 'Vikram T.', area: 'HSR Sector 7', text: 'Best investment for WFH entertainment. Movie nights are amazing!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-indiranagar': {
    service: 'Home Theatre',
    location: 'Indiranagar, Bangalore',
    title: 'Home Theatre Installation in Indiranagar',
    metaTitle: 'Home Theatre Installation Indiranagar | Premium AV | Qloud Tech',
    metaDescription: 'Luxury home theatre installation in Indiranagar, Bangalore. Serving 100 Feet Road, Defence Colony, HAL areas. Dolby Atmos experts. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Indiranagar\'s upscale homes deserve premium home theatre installations. With many independent houses and luxury apartments, Indiranagar is perfect for high-end Dolby Atmos setups. Qloud Tech brings cinema-quality experiences to Indiranagar residents.',
    areas: ['100 Feet Road', 'Defence Colony', 'HAL 2nd Stage', 'HAL 3rd Stage', 'Domlur', 'Cambridge Layout', 'Ulsoor', 'Old Airport Road', 'Jeevanbhima Nagar', 'New BEL Road'],
    features: [
      'Premium Dolby Atmos 7.1.4',
      'Sony/Epson 4K laser projectors',
      'JBL Synthesis speakers',
      'Dedicated cinema rooms',
      'Acoustic design & treatment',
      'Custom seating solutions'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 surround system' },
        { name: 'Premium', price: '₹9.99L', desc: '7.1.2 Dolby Atmos' },
        { name: 'Luxury', price: '₹15L+', desc: 'Reference cinema' }
      ]
    },
    stats: [
      { value: '25+', label: 'Indiranagar Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '₹15L+', label: 'Avg Project Value' }
    ],
    testimonials: [
      { name: 'Aditya M.', area: 'Defence Colony', text: 'The JBL Synthesis setup is phenomenal. Better than any cinema!' },
      { name: 'Priya R.', area: '100 Feet Road', text: 'Transformed our basement into a proper cinema. Guests are amazed!' },
      { name: 'Kiran B.', area: 'HAL 2nd Stage', text: 'Professional team, premium equipment, flawless installation.' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-jp-nagar': {
    service: 'Home Theatre',
    location: 'JP Nagar, Bangalore',
    title: 'Home Theatre Installation in JP Nagar',
    metaTitle: 'Home Theatre Installation JP Nagar | Cinema Rooms | Qloud Tech',
    metaDescription: 'Expert home theatre installation in JP Nagar, Bangalore. Serving all phases 1-9, Sarakki, Bannerghatta Road. Dolby Atmos. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'JP Nagar offers a perfect mix of independent houses and apartments, ideal for home theatre installations. Qloud Tech has extensive experience serving JP Nagar across all phases, delivering cinema experiences tailored to each home.',
    areas: ['JP Nagar Phase 1', 'JP Nagar Phase 2', 'JP Nagar Phase 3', 'JP Nagar Phase 4', 'JP Nagar Phase 5', 'JP Nagar Phase 6', 'JP Nagar Phase 7', 'JP Nagar Phase 8', 'JP Nagar Phase 9', 'Sarakki'],
    features: [
      'Dolby Atmos configurations',
      '4K projection systems',
      'Quality speaker brands',
      'Room acoustic design',
      'Soundproofing solutions',
      'Smart control integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Basic', price: '₹2.29L', desc: '5.1 HD system' },
        { name: 'Standard', price: '₹6.99L', desc: '5.1.2 Atmos' },
        { name: 'Premium', price: '₹10L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '40+', label: 'JP Nagar Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '5 Days', label: 'Avg Installation' }
    ],
    testimonials: [
      { name: 'Suresh N.', area: 'JP Nagar Phase 3', text: 'Excellent work! Our home theatre is the envy of the neighborhood.' },
      { name: 'Lakshmi V.', area: 'JP Nagar Phase 6', text: 'Great value for money. Professional installation and support.' },
      { name: 'Ramesh K.', area: 'Sarakki', text: 'The team understood exactly what we wanted. Perfect execution!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-electronic-city': {
    service: 'Home Theatre',
    location: 'Electronic City, Bangalore',
    title: 'Home Theatre Installation in Electronic City',
    metaTitle: 'Home Theatre Installation Electronic City | Dolby Atmos | Qloud Tech',
    metaDescription: 'Professional home theatre installation in Electronic City, Bangalore. Phase 1 & 2, Neeladri Nagar, Doddathogur. Starting ₹2.29L. Free site visit!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Electronic City is home to IT professionals who appreciate quality entertainment. With many gated communities and apartments, it\'s perfect for home theatre installations. Qloud Tech serves Electronic City Phase 1 & 2 with premium cinema solutions.',
    areas: ['Electronic City Phase 1', 'Electronic City Phase 2', 'Neeladri Nagar', 'Doddathogur', 'Hebbagodi', 'Bommasandra', 'Chandapura', 'Hosa Road', 'Begur', 'Akshayanagar'],
    features: [
      'Apartment-optimized setups',
      'Dolby Atmos 5.1.2/7.1.2',
      'Weekend installation available',
      'Minimal disruption',
      'After-hours support',
      'Remote troubleshooting'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Starter', price: '₹2.29L', desc: 'Apartment 5.1' },
        { name: 'Pro', price: '₹5.99L', desc: '5.1.2 Dolby Atmos' },
        { name: 'Elite', price: '₹9L+', desc: 'Premium 7.1.2' }
      ]
    },
    stats: [
      { value: '45+', label: 'EC Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: 'Weekend', label: 'Installation Available' }
    ],
    testimonials: [
      { name: 'Naveen G.', area: 'Phase 1', text: 'Weekend installation was super convenient. No leave needed!' },
      { name: 'Deepa S.', area: 'Neeladri Nagar', text: 'Perfect for our apartment. The acoustic treatment is excellent.' },
      { name: 'Arjun M.', area: 'Phase 2', text: 'Best after-work relaxation. The Atmos experience is mind-blowing!' }
    ],
    relatedService: 'home-theatre'
  },
  'smart-home-hsr-layout': {
    service: 'Home Automation',
    location: 'HSR Layout, Bangalore',
    title: 'Smart Home Automation in HSR Layout',
    metaTitle: 'Smart Home Automation HSR Layout | Home Automation | Qloud Tech',
    metaDescription: 'Complete smart home automation in HSR Layout, Bangalore. Smart lighting, AC control, security for apartments. Serving all sectors. Starting ₹50K.',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Transform your HSR Layout home into a smart home with Qloud Tech. We specialize in apartment-friendly automation solutions that integrate lighting, climate control, and security into one seamless system.',
    areas: ['HSR Sector 1', 'HSR Sector 2', 'HSR Sector 3', 'HSR Sector 4', 'HSR Sector 5', 'HSR Sector 6', 'HSR Sector 7', 'BTM Layout', 'Bommanahalli', 'Koramangala'],
    features: [
      'Smart lighting scenes',
      'AC & fan automation',
      'Voice control (Alexa/Google)',
      'Smart switches & panels',
      'Security integration',
      'App control anywhere'
    ],
    pricing: {
      starting: '₹50,000',
      packages: [
        { name: '1-2 Rooms', price: '₹50K', desc: 'Basic automation' },
        { name: 'Full Flat', price: '₹1.2L', desc: '2/3BHK complete' },
        { name: 'Premium', price: '₹2L+', desc: 'Advanced features' }
      ]
    },
    stats: [
      { value: '60+', label: 'HSR Homes' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '25%', label: 'Energy Savings' }
    ],
    testimonials: [
      { name: 'Anand K.', area: 'HSR Sector 3', text: 'Alexa controls everything now. So convenient!' },
      { name: 'Meghna R.', area: 'HSR Sector 5', text: 'Energy savings are real. Bill reduced significantly.' },
      { name: 'Sanjay P.', area: 'HSR Sector 1', text: 'The app control is amazing. Can manage home from office.' }
    ],
    relatedService: 'home-automation'
  },
  'dolby-atmos-bangalore': {
    service: 'Dolby Atmos',
    location: 'Bangalore',
    title: 'Dolby Atmos Installation in Bangalore',
    metaTitle: 'Dolby Atmos Installation Bangalore | 5.1.2, 7.1.2, 9.1.4 | Qloud Tech',
    metaDescription: 'Certified Dolby Atmos installation in Bangalore. 5.1.2, 7.1.2, 9.1.4 configurations. Immersive 3D audio experience. Starting ₹4.5L. Free demo!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Experience true immersive audio with Dolby Atmos in Bangalore. Qloud Tech is a certified Dolby Atmos installer, delivering object-based 3D surround sound that puts you inside the action. From 5.1.2 entry-level to 9.1.4 reference systems.',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'JP Nagar', 'Jayanagar', 'Electronic City', 'Sarjapur Road', 'Marathahalli', 'Bannerghatta Road'],
    features: [
      '5.1.2 / 7.1.2 / 9.1.4 configs',
      'Height/ceiling speakers',
      'Dolby Atmos-enabled AVR',
      'Acoustic room calibration',
      'Object-based 3D audio',
      'Atmos music support'
    ],
    pricing: {
      starting: '₹4,50,000',
      packages: [
        { name: '5.1.2 Entry', price: '₹4.5L', desc: '2 height speakers' },
        { name: '7.1.2 Standard', price: '₹8L', desc: '4 height speakers' },
        { name: '9.1.4 Reference', price: '₹15L+', desc: 'Full Atmos experience' }
      ]
    },
    stats: [
      { value: '80+', label: 'Atmos Installs' },
      { value: 'Certified', label: 'Dolby Partner' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '3D Audio', label: 'Immersive Sound' }
    ],
    testimonials: [
      { name: 'Rajiv K.', area: 'Whitefield', text: 'The overhead effects are incredible. Rain actually sounds above you!' },
      { name: 'Suma M.', area: 'Koramangala', text: '7.1.2 setup transformed our movie experience. Cinema quality!' },
      { name: 'Prashanth B.', area: 'JP Nagar', text: 'Dolby Atmos music is a revelation. Didn\'t know stereo could sound this good!' }
    ],
    relatedService: 'home-theatre'
  },
  // More neighborhood pages
  'home-theatre-jayanagar': {
    service: 'Home Theatre',
    location: 'Jayanagar, Bangalore',
    title: 'Home Theatre Installation in Jayanagar',
    metaTitle: 'Home Theatre Installation Jayanagar | Cinema Rooms | Qloud Tech',
    metaDescription: 'Premium home theatre installation in Jayanagar, Bangalore. Serving all blocks 1-9, Basavanagudi. Dolby Atmos experts. Starting ₹2.29L. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Jayanagar is one of Bangalore\'s oldest and most prestigious residential areas. With spacious independent houses and premium apartments, it\'s ideal for home theatre installations. Qloud Tech has served Jayanagar families for over 8 years.',
    areas: ['Jayanagar 1st Block', 'Jayanagar 2nd Block', 'Jayanagar 3rd Block', 'Jayanagar 4th Block', 'Jayanagar 5th Block', 'Jayanagar 9th Block', 'Basavanagudi', 'Hanumanthanagar', 'Banashankari', 'BTM Layout'],
    features: [
      'Dolby Atmos systems',
      '4K laser projectors',
      'Premium speaker brands',
      'Acoustic room treatment',
      'Custom seating options',
      'Smart integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 surround' },
        { name: 'Premium', price: '₹7.99L', desc: '5.1.2 Atmos' },
        { name: 'Luxury', price: '₹12L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '30+', label: 'Jayanagar Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '5 Days', label: 'Avg Installation' }
    ],
    testimonials: [
      { name: 'Ramesh N.', area: '4th Block', text: 'Best decision we made! The home theatre is family\'s favorite spot now.' },
      { name: 'Geetha S.', area: '3rd Block', text: 'Professional service from start to finish. Highly recommend!' },
      { name: 'Suresh K.', area: '9th Block', text: 'The Dolby Atmos experience is unmatched. Better than any cinema!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-sarjapur': {
    service: 'Home Theatre',
    location: 'Sarjapur Road, Bangalore',
    title: 'Home Theatre Installation in Sarjapur Road',
    metaTitle: 'Home Theatre Installation Sarjapur Road | Dolby Atmos | Qloud Tech',
    metaDescription: 'Expert home theatre installation in Sarjapur Road, Bangalore. Serving Wipro Junction, Carmelaram, Bellandur. Starting ₹2.29L. Weekend installation available!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Sarjapur Road has emerged as a premium residential corridor with many gated communities and luxury apartments. Qloud Tech serves the entire Sarjapur stretch with premium home theatre solutions, offering weekend installation for IT professionals.',
    areas: ['Wipro Junction', 'Carmelaram', 'Bellandur', 'Haralur', 'HSR Layout', 'Kasavanahalli', 'Dommasandra', 'Sarjapur', 'Kodathi', 'Harlur Road'],
    features: [
      'Weekend installation option',
      'Dolby Atmos for apartments',
      '4K/8K projection',
      'Acoustic solutions',
      'Smart control systems',
      'Flexible EMI options'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Apartment', price: '₹2.29L', desc: 'Space-efficient 5.1' },
        { name: 'Villa', price: '₹8.99L', desc: '5.1.2 Dolby Atmos' },
        { name: 'Premium', price: '₹12L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '55+', label: 'Sarjapur Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: 'Weekend', label: 'Installation OK' }
    ],
    testimonials: [
      { name: 'Anil P.', area: 'Carmelaram', text: 'Weekend installation was so convenient. No leave needed!' },
      { name: 'Sneha K.', area: 'Bellandur', text: 'Amazing work in our 3BHK. The neighbors are jealous!' },
      { name: 'Vivek R.', area: 'Wipro Junction', text: 'EMI option made it affordable. Great customer service!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-marathahalli': {
    service: 'Home Theatre',
    location: 'Marathahalli, Bangalore',
    title: 'Home Theatre Installation in Marathahalli',
    metaTitle: 'Home Theatre Installation Marathahalli | Cinema Experts | Qloud Tech',
    metaDescription: 'Professional home theatre installation in Marathahalli, Bangalore. Serving Brookefield, AECS Layout, Kundalahalli. Starting ₹2.29L. Free site visit!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Marathahalli is a thriving IT hub with many residential complexes perfect for home theatre installations. Qloud Tech has extensive experience serving Marathahalli and surrounding areas with both apartment and villa home theatre solutions.',
    areas: ['Marathahalli', 'Brookefield', 'AECS Layout', 'Kundalahalli', 'Doddanekkundi', 'Mahadevapura', 'Whitefield', 'Varthur', 'Kadugodi', 'ITPL'],
    features: [
      'Apartment-friendly designs',
      'Dolby Atmos systems',
      '4K projection solutions',
      'Sound isolation',
      'Smart home integration',
      'After-sales support'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Starter', price: '₹2.29L', desc: '5.1 HD system' },
        { name: 'Standard', price: '₹6.99L', desc: '5.1.2 Atmos' },
        { name: 'Premium', price: '₹10L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '45+', label: 'Marathahalli Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24hr', label: 'Support Available' }
    ],
    testimonials: [
      { name: 'Prasad M.', area: 'Brookefield', text: 'Excellent installation in our apartment. Sound is theater-quality!' },
      { name: 'Shweta R.', area: 'AECS Layout', text: 'Very professional team. Clean work, no mess left behind.' },
      { name: 'Harish K.', area: 'Kundalahalli', text: 'Great value for money. The support team is very responsive.' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-bannerghatta': {
    service: 'Home Theatre',
    location: 'Bannerghatta Road, Bangalore',
    title: 'Home Theatre Installation in Bannerghatta Road',
    metaTitle: 'Home Theatre Installation Bannerghatta Road | Qloud Tech',
    metaDescription: 'Premium home theatre installation on Bannerghatta Road, Bangalore. Serving Arekere, Gottigere, Hulimavu. Dolby Atmos. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Bannerghatta Road corridor offers excellent residential options with many premium apartments and villas. Qloud Tech provides complete home theatre solutions for residents along Bannerghatta Road and surrounding areas.',
    areas: ['Arekere', 'Gottigere', 'Hulimavu', 'Dollars Colony', 'Meenakshi Mall Area', 'JP Nagar 7th Phase', 'Bilekahalli', 'Begur', 'Hongasandra', 'Electronic City'],
    features: [
      'Villa cinema rooms',
      'Apartment solutions',
      'Dolby Atmos setups',
      '4K projection',
      'Acoustic treatment',
      'Custom designs'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Basic', price: '₹2.29L', desc: '5.1 system' },
        { name: 'Advanced', price: '₹7.49L', desc: '5.1.2 Atmos' },
        { name: 'Premium', price: '₹11L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '35+', label: 'BG Road Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '4 Days', label: 'Avg Installation' }
    ],
    testimonials: [
      { name: 'Anand S.', area: 'Arekere', text: 'Fantastic installation! Our villa theatre is the talk of the community.' },
      { name: 'Priya G.', area: 'Gottigere', text: 'Great experience from consultation to installation. Highly professional!' },
      { name: 'Mohan R.', area: 'Hulimavu', text: 'The acoustic treatment made a huge difference. Crystal clear sound!' }
    ],
    relatedService: 'home-theatre'
  },
  'smart-home-indiranagar': {
    service: 'Home Automation',
    location: 'Indiranagar, Bangalore',
    title: 'Smart Home Automation in Indiranagar',
    metaTitle: 'Smart Home Automation Indiranagar | Premium Solutions | Qloud Tech',
    metaDescription: 'Luxury smart home automation in Indiranagar, Bangalore. Smart lighting, voice control, security integration. Starting ₹50K. Free consultation!',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Indiranagar\'s upscale homes deserve premium smart home automation. Qloud Tech brings cutting-edge home automation solutions to Indiranagar, integrating lighting, climate, entertainment, and security into one seamless experience.',
    areas: ['100 Feet Road', 'Defence Colony', 'HAL 2nd Stage', 'HAL 3rd Stage', 'Domlur', 'Cambridge Layout', 'Ulsoor', 'Old Airport Road', 'Jeevanbhima Nagar', 'CMH Road'],
    features: [
      'Premium smart lighting',
      'Whole-home audio',
      'Climate automation',
      'Security integration',
      'Voice control',
      'Custom scenes'
    ],
    pricing: {
      starting: '₹75,000',
      packages: [
        { name: 'Essential', price: '₹75K', desc: '2-3 rooms' },
        { name: 'Premium', price: '₹2L', desc: 'Whole home' },
        { name: 'Luxury', price: '₹4L+', desc: 'Full integration' }
      ]
    },
    stats: [
      { value: '40+', label: 'Indiranagar Homes' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '35%', label: 'Energy Savings' }
    ],
    testimonials: [
      { name: 'Aditya K.', area: 'Defence Colony', text: 'Our home is now fully voice controlled. Guests are always impressed!' },
      { name: 'Meera S.', area: '100 Feet Road', text: 'Energy savings are substantial. The automation paid for itself!' },
      { name: 'Raj B.', area: 'HAL 2nd Stage', text: 'Seamless integration of all systems. Truly a smart home now!' }
    ],
    relatedService: 'home-automation'
  },
  'smart-home-jp-nagar': {
    service: 'Home Automation',
    location: 'JP Nagar, Bangalore',
    title: 'Smart Home Automation in JP Nagar',
    metaTitle: 'Smart Home Automation JP Nagar | Home Automation | Qloud Tech',
    metaDescription: 'Complete smart home automation in JP Nagar, Bangalore. Smart switches, voice control, security. All phases covered. Starting ₹50K.',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'JP Nagar residents can now enjoy the convenience of smart home automation with Qloud Tech. We serve all JP Nagar phases with customized automation solutions for apartments and independent houses.',
    areas: ['JP Nagar Phase 1', 'JP Nagar Phase 2', 'JP Nagar Phase 3', 'JP Nagar Phase 4', 'JP Nagar Phase 5', 'JP Nagar Phase 6', 'JP Nagar Phase 7', 'Sarakki', 'Bannerghatta Road', 'BTM Layout'],
    features: [
      'Smart switch upgrades',
      'AC automation',
      'Lighting scenes',
      'Voice control setup',
      'Security cameras',
      'App control'
    ],
    pricing: {
      starting: '₹50,000',
      packages: [
        { name: 'Starter', price: '₹50K', desc: '1-2 rooms' },
        { name: 'Standard', price: '₹1.2L', desc: 'Full apartment' },
        { name: 'Premium', price: '₹2.5L+', desc: 'Villa automation' }
      ]
    },
    stats: [
      { value: '50+', label: 'JP Nagar Homes' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '28%', label: 'Energy Savings' }
    ],
    testimonials: [
      { name: 'Sudha M.', area: 'Phase 3', text: 'Smart switches transformed our old apartment. So convenient!' },
      { name: 'Vijay R.', area: 'Phase 6', text: 'Love the voice control. "Alexa, goodnight" handles everything!' },
      { name: 'Asha K.', area: 'Sarakki', text: 'Energy bills reduced significantly. Great investment!' }
    ],
    relatedService: 'home-automation'
  },
  // More neighborhood pages for comprehensive coverage
  'home-theatre-yelahanka': {
    service: 'Home Theatre',
    location: 'Yelahanka, Bangalore',
    title: 'Home Theatre Installation in Yelahanka',
    metaTitle: 'Home Theatre Installation Yelahanka | Dolby Atmos | Qloud Tech',
    metaDescription: 'Professional home theatre installation in Yelahanka, Bangalore. Serving New Town, Air Force Station area, Kogilu. Starting ₹2.29L. Free consultation!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Yelahanka has grown into a major residential hub with excellent villas and apartments. Qloud Tech serves Yelahanka and surrounding areas with premium home theatre installations, from compact apartment setups to full villa cinema rooms.',
    areas: ['Yelahanka New Town', 'Yelahanka Old Town', 'Kogilu', 'Jakkur', 'Sahakara Nagar', 'Hebbal', 'Kempapura', 'Attur Layout', 'Allalasandra', 'Bagalur'],
    features: [
      'Dolby Atmos systems',
      '4K laser projectors',
      'Acoustic treatment',
      'Custom seating',
      'Smart integration',
      'EMI options available'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 system' },
        { name: 'Premium', price: '₹7.99L', desc: '5.1.2 Atmos' },
        { name: 'Villa', price: '₹12L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '25+', label: 'Yelahanka Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '5 Days', label: 'Avg Installation' }
    ],
    testimonials: [
      { name: 'Naveen S.', area: 'New Town', text: 'Excellent home theatre setup! The Dolby Atmos is incredible.' },
      { name: 'Anitha R.', area: 'Kogilu', text: 'Very professional team. Installation was clean and quick.' },
      { name: 'Suresh K.', area: 'Jakkur', text: 'Best decision for our new villa. Movie nights are amazing now!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-hebbal': {
    service: 'Home Theatre',
    location: 'Hebbal, Bangalore',
    title: 'Home Theatre Installation in Hebbal',
    metaTitle: 'Home Theatre Installation Hebbal | Cinema Rooms | Qloud Tech',
    metaDescription: 'Expert home theatre installation in Hebbal, Bangalore. Serving Manyata Tech Park area, Kempapura, Nagawara. Dolby Atmos. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Hebbal is a prime residential location near Manyata Tech Park with many premium apartments and villas. Qloud Tech has served numerous Hebbal residents with world-class home theatre installations.',
    areas: ['Hebbal', 'Kempapura', 'Nagawara', 'Manyata Tech Park', 'Thanisandra', 'Rachenahalli', 'Byatarayanapura', 'RT Nagar', 'Mathikere', 'Sadashivanagar'],
    features: [
      '4K/8K projection',
      'Dolby Atmos audio',
      'Premium speakers',
      'Acoustic design',
      'Home automation ready',
      'Lifetime support'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Basic', price: '₹2.29L', desc: '5.1 HD system' },
        { name: 'Standard', price: '₹6.99L', desc: '5.1.2 Atmos' },
        { name: 'Premium', price: '₹10L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '30+', label: 'Hebbal Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '24hr', label: 'Response Time' }
    ],
    testimonials: [
      { name: 'Ravi M.', area: 'Manyata area', text: 'Great installation! Perfect for unwinding after work.' },
      { name: 'Priya K.', area: 'Nagawara', text: 'The team was very professional. Highly recommended!' },
      { name: 'Arun S.', area: 'Kempapura', text: 'Excellent sound quality. Better than any cinema!' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-malleshwaram': {
    service: 'Home Theatre',
    location: 'Malleshwaram, Bangalore',
    title: 'Home Theatre Installation in Malleshwaram',
    metaTitle: 'Home Theatre Installation Malleshwaram | Qloud Tech',
    metaDescription: 'Premium home theatre installation in Malleshwaram, Bangalore. Serving Rajajinagar, Vyalikaval, Sadashivanagar. Starting ₹2.29L.',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Malleshwaram is one of Bangalore\'s heritage neighborhoods with beautiful independent houses. Qloud Tech specializes in installing home theatres that blend modern technology with the classic charm of Malleshwaram homes.',
    areas: ['Malleshwaram', 'Rajajinagar', 'Vyalikaval', 'Sadashivanagar', 'Sanjaynagar', 'Mathikere', 'Yeshwanthpur', 'Mahalakshmi Layout', 'Basaveshwaranagar', 'Nandini Layout'],
    features: [
      'Heritage home specialists',
      'Dolby Atmos systems',
      '4K projection',
      'Discreet installation',
      'Period-appropriate design',
      'Smart integration'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Classic', price: '₹2.29L', desc: '5.1 system' },
        { name: 'Premium', price: '₹8.49L', desc: '5.1.2 Atmos' },
        { name: 'Bespoke', price: '₹12L+', desc: 'Custom design' }
      ]
    },
    stats: [
      { value: '20+', label: 'Malleshwaram Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: 'Heritage', label: 'Home Experts' }
    ],
    testimonials: [
      { name: 'Raghav N.', area: '8th Cross', text: 'They understood our heritage home perfectly. Discreet installation!' },
      { name: 'Suma V.', area: 'Vyalikaval', text: 'Beautiful integration with our traditional home. Excellent work!' },
      { name: 'Krishna M.', area: 'Rajajinagar', text: 'Modern technology, classic design. Exactly what we wanted.' }
    ],
    relatedService: 'home-theatre'
  },
  'home-theatre-banashankari': {
    service: 'Home Theatre',
    location: 'Banashankari, Bangalore',
    title: 'Home Theatre Installation in Banashankari',
    metaTitle: 'Home Theatre Installation Banashankari | Dolby Atmos | Qloud Tech',
    metaDescription: 'Expert home theatre installation in Banashankari, Bangalore. All stages covered - 1st to 6th. Starting ₹2.29L. Free site visit!',
    heroImage: 'https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif',
    description: 'Banashankari is a well-established residential area with a mix of apartments and independent houses. Qloud Tech serves all stages of Banashankari with customized home theatre solutions.',
    areas: ['Banashankari 1st Stage', 'Banashankari 2nd Stage', 'Banashankari 3rd Stage', 'Banashankari 6th Stage', 'Kathriguppe', 'Uttarahalli', 'Kengeri', 'RR Nagar', 'ISRO Layout', 'Judicial Layout'],
    features: [
      'All Banashankari stages',
      'Dolby Atmos setups',
      '4K projection',
      'Acoustic treatment',
      'Budget to premium',
      'EMI available'
    ],
    pricing: {
      starting: '₹2,29,000',
      packages: [
        { name: 'Essential', price: '₹2.29L', desc: '5.1 system' },
        { name: 'Plus', price: '₹5.99L', desc: '5.1.2 Atmos' },
        { name: 'Premium', price: '₹9L+', desc: '7.1.2 Reference' }
      ]
    },
    stats: [
      { value: '35+', label: 'BSK Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: '4 Days', label: 'Avg Installation' }
    ],
    testimonials: [
      { name: 'Mahesh P.', area: '2nd Stage', text: 'Great home theatre at reasonable price. Very satisfied!' },
      { name: 'Kavitha R.', area: '3rd Stage', text: 'Professional installation. The team was courteous and skilled.' },
      { name: 'Raghu S.', area: 'Kathriguppe', text: 'EMI option made it affordable. Enjoying movies every weekend!' }
    ],
    relatedService: 'home-theatre'
  },
  'smart-home-electronic-city': {
    service: 'Home Automation',
    location: 'Electronic City, Bangalore',
    title: 'Smart Home Automation in Electronic City',
    metaTitle: 'Smart Home Automation Electronic City | Qloud Tech',
    metaDescription: 'Complete smart home automation in Electronic City, Bangalore. Smart lighting, AC control, security. Phase 1 & 2. Starting ₹50K.',
    heroImage: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800',
    description: 'Electronic City IT professionals deserve smart homes that simplify their busy lives. Qloud Tech provides complete automation solutions for apartments and villas in Electronic City Phase 1, 2, and surrounding areas.',
    areas: ['Electronic City Phase 1', 'Electronic City Phase 2', 'Neeladri Nagar', 'Doddathogur', 'Hebbagodi', 'Bommasandra', 'Chandapura', 'Infosys Area', 'Wipro Campus Area', 'Velankani Area'],
    features: [
      'Smart lighting scenes',
      'AC & fan automation',
      'Security integration',
      'Voice control',
      'App control anywhere',
      'Weekend installation'
    ],
    pricing: {
      starting: '₹50,000',
      packages: [
        { name: 'Starter', price: '₹50K', desc: '1-2 rooms' },
        { name: 'Standard', price: '₹1.2L', desc: 'Full apartment' },
        { name: 'Premium', price: '₹2.5L+', desc: 'Complete solution' }
      ]
    },
    stats: [
      { value: '70+', label: 'EC Homes' },
      { value: '8+', label: 'Years Experience' },
      { value: '4.9/5', label: 'Customer Rating' },
      { value: 'Weekend', label: 'Installation OK' }
    ],
    testimonials: [
      { name: 'Anil K.', area: 'Phase 1', text: 'Weekend installation was perfect. No leave needed!' },
      { name: 'Deepika S.', area: 'Neeladri', text: 'Love controlling home from office. Great convenience!' },
      { name: 'Sunil R.', area: 'Phase 2', text: 'Energy savings are real. Smart investment!' }
    ],
    relatedService: 'home-automation'
  }
};

const LocationPage = () => {
  const { locationSlug } = useParams();
  const pageData = locationData[locationSlug];

  // Update page title, meta, and inject Schema.org structured data
  useEffect(() => {
    if (pageData) {
      // Update title and meta description
      document.title = pageData.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', pageData.metaDescription);

      // Remove any existing location schema
      const existingSchema = document.getElementById('location-schema');
      if (existingSchema) existingSchema.remove();

      // Create LocalBusiness + Service Schema
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Qloud Tech",
        "description": pageData.description,
        "image": pageData.heroImage,
        "telephone": "+91-7204746043",
        "url": `https://qloudsmarthomes.com/${locationSlug}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": pageData.location,
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.9716",
          "longitude": "77.5946"
        },
        "areaServed": pageData.areas.map(area => ({
          "@type": "City",
          "name": `${area}, ${pageData.location}`
        })),
        "priceRange": pageData.pricing.starting + "+",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": pageData.stats[0].value.replace('+', '')
        }
      };

      // Create Service Schema
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${pageData.service} in ${pageData.location}`,
        "description": pageData.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Qloud Tech"
        },
        "areaServed": {
          "@type": "City",
          "name": pageData.location
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": pageData.pricing.starting.replace(/[₹,]/g, ''),
          "priceCurrency": "INR"
        }
      };

      // Inject schema script
      const script = document.createElement('script');
      script.id = 'location-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify([localBusinessSchema, serviceSchema]);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const schemaScript = document.getElementById('location-schema');
        if (schemaScript) schemaScript.remove();
      };
    }
  }, [pageData, locationSlug]);

  const openWhatsApp = () => {
    if (!pageData) return;
    const message = `Hi, I'm interested in ${pageData.service} services in ${pageData.location}. Please provide more details.`;
    window.open(`https://wa.me/917204746043?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" aria-label="Qloud Tech Home" data-testid="header-logo" className="flex-shrink-0 group logo-shine">
            <img src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" alt="Qloud Tech Logo" className="h-6 brightness-0 invert" />
          </Link>
          <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-6 py-2 rounded-lg">
            Get Free Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <img src={pageData.heroImage} alt={pageData.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0a0e1a]/80 to-[#0a0e1a]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <MapPin className="w-4 h-4" />
              {pageData.location} • {pageData.service}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {pageData.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {pageData.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {pageData.stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-8 py-6 rounded-full text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-6 rounded-full text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Areas We Serve in <span className="text-cyan-400">{pageData.location}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {pageData.areas.map((area, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-800 border border-cyan-500/30 rounded-full text-gray-300 text-sm">
                <MapPin className="w-3 h-3 inline mr-1" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We <span className="text-cyan-400">Offer</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pageData.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-cyan-500/20">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Pricing in <span className="text-cyan-400">{pageData.location}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Starting from {pageData.pricing.starting}</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pageData.pricing.packages.map((pkg, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${idx === 1 ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5' : 'border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-900/30'}`}>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-4">{pkg.desc}</p>
                <Button onClick={openWhatsApp} className={`w-full py-3 rounded-lg ${idx === 1 ? 'bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Our <span className="text-cyan-400">{pageData.location} Customers</span> Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pageData.testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl border border-gray-700">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 rounded-3xl border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for {pageData.service} in {pageData.location}?
            </h2>
            <p className="text-gray-400 mb-8">Get a free consultation and quote today</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold px-8 py-6 rounded-full text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button onClick={() => window.open('tel:+917204746043')} variant="outline" className="border-2 border-white/30 text-white px-8 py-6 rounded-full text-lg">
                +91 72047 46043
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Service Link */}
      <section className="py-8">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to={`/services/${pageData.relatedService}`}
            className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
          >
            View detailed {pageData.service} service page →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Qloud Tech. All Rights Reserved. | {pageData.service} in {pageData.location}</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">www.qloudsmarthomes.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default LocationPage;

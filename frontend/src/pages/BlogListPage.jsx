import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

// All blog posts data
const allBlogPosts = [
  {
    id: 1,
    title: "Complete Guide to Home Theatre Setup in Bangalore 2024",
    slug: "home-theatre-setup-bangalore-guide",
    excerpt: "Learn everything about setting up a perfect home theatre in Bangalore. From choosing the right room to selecting Dolby Atmos speakers.",
    category: "Home Theatre",
    author: "Qloud Tech Team",
    date: "2024-12-15",
    readTime: "8 min",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/g52fv2rb_adarsh%20tranquil.jpg"
  },
  {
    id: 2,
    title: "Smart Home Automation: Complete Buyer's Guide",
    slug: "smart-home-automation-guide",
    excerpt: "Discover the ROI of smart home automation. Costs, benefits, and energy savings explained.",
    category: "Home Automation",
    author: "Qloud Tech Team",
    date: "2024-12-10",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800"
  },
  {
    id: 3,
    title: "Top 10 Home Security Systems for Indian Homes 2024",
    slug: "security-systems-guide",
    excerpt: "Compare the best security systems. Smart cameras, digital locks, and more.",
    category: "Security",
    author: "Qloud Tech Team",
    date: "2024-12-05",
    readTime: "7 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif"
  },
  {
    id: 4,
    title: "Dolby Atmos vs Traditional Surround Sound",
    slug: "dolby-atmos-guide",
    excerpt: "Understand the difference between Dolby Atmos and traditional 5.1/7.1 systems.",
    category: "Home Theatre",
    author: "Qloud Tech Team",
    date: "2024-11-28",
    readTime: "5 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  },
  {
    id: 5,
    title: "How to Choose the Right Smart Switches",
    slug: "smart-switches-guide",
    excerpt: "Compare touch switches, WiFi switches, and smart panels for your home.",
    category: "Home Automation",
    author: "Qloud Tech Team",
    date: "2024-11-20",
    readTime: "6 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp"
  },
  {
    id: 6,
    title: "Video Door Phone Installation Guide",
    slug: "video-door-phone-guide",
    excerpt: "Everything about video door phones. Features, brands, and installation tips.",
    category: "Security",
    author: "Qloud Tech Team",
    date: "2024-11-15",
    readTime: "5 min",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png"
  },
  {
    id: 7,
    title: "Best Home Theatre Brands in India 2024",
    slug: "best-home-theatre-brands-india",
    excerpt: "Compare JBL, Denon, Sony, Yamaha, and more. Expert brand recommendations.",
    category: "Buying Guide",
    author: "Qloud Tech Team",
    date: "2024-11-10",
    readTime: "10 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  },
  {
    id: 8,
    title: "Home Automation Cost in Bangalore 2024",
    slug: "home-automation-cost-bangalore",
    excerpt: "Complete cost guide for 2BHK, 3BHK, and villas. Budget planning made easy.",
    category: "Pricing",
    author: "Qloud Tech Team",
    date: "2024-11-05",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800"
  },
  {
    id: 9,
    title: "Projector vs TV: Which is Better for Home Theatre?",
    slug: "projector-vs-tv-home-theatre",
    excerpt: "Detailed comparison of projectors and TVs for home cinema setups.",
    category: "Buying Guide",
    author: "Qloud Tech Team",
    date: "2024-10-28",
    readTime: "9 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  },
  {
    id: 10,
    title: "Yale vs Samsung Smart Lock: Complete Comparison",
    slug: "yale-vs-samsung-smart-lock",
    excerpt: "In-depth comparison of Yale and Samsung smart locks for Indian homes.",
    category: "Comparison",
    author: "Qloud Tech Team",
    date: "2024-10-20",
    readTime: "7 min",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/emph1fnm_1_d41ba0ee-d7c8-4526-bcb2-c9b3c69a7090%20%284%29.webp"
  },
  {
    id: 11,
    title: "Home Theatre Room Size Guide: Minimum Requirements",
    slug: "home-theatre-room-size-guide",
    excerpt: "Learn the minimum room dimensions needed for different home theatre setups.",
    category: "Planning",
    author: "Qloud Tech Team",
    date: "2024-10-15",
    readTime: "6 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  },
  {
    id: 12,
    title: "Alexa vs Google Home: Which is Better for Indian Smart Homes?",
    slug: "alexa-google-home-comparison",
    excerpt: "Comparing Amazon Alexa and Google Home for Indian smart home setups.",
    category: "Comparison",
    author: "Qloud Tech Team",
    date: "2024-10-10",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800"
  },
  {
    id: 13,
    title: "Soundbar vs Home Theatre: Which Should You Buy?",
    slug: "soundbar-vs-home-theatre",
    excerpt: "Detailed comparison between soundbars and traditional home theatre systems.",
    category: "Buying Guide",
    author: "Qloud Tech Team",
    date: "2024-10-05",
    readTime: "7 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  },
  {
    id: 14,
    title: "Smart Home Setup for Rental Apartments: No Damage Guide",
    slug: "smart-home-for-rental-apartment",
    excerpt: "Set up a smart home in your rental apartment without making permanent changes.",
    category: "Tips",
    author: "Qloud Tech Team",
    date: "2024-09-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800"
  },
  {
    id: 15,
    title: "Best Projectors Under 2 Lakhs in India 2024",
    slug: "best-projector-under-2-lakh",
    excerpt: "Our top projector picks under ₹2 lakhs for home theatre in India.",
    category: "Buying Guide",
    author: "Qloud Tech Team",
    date: "2024-09-20",
    readTime: "9 min",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  }
];

const categories = ['All', 'Home Theatre', 'Home Automation', 'Security', 'Buying Guide', 'Pricing', 'Comparison', 'Planning', 'Tips'];

const BlogListPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    document.title = 'Blog | Smart Home & Home Theatre Guides | Qloud Tech';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Expert guides on home theatre, smart home automation, security systems. Tips, buying guides, and comparisons from Bangalore\'s #1 smart home company.');
    }

    // Add Blog schema
    const existingSchema = document.getElementById('blog-list-schema');
    if (existingSchema) existingSchema.remove();

    const blogListSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Qloud Tech Blog",
      "description": "Expert guides on home theatre, smart home automation, and security systems",
      "url": "https://qloudsmarthomes.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Qloud Tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/h7afabwe_cropped-Untitled-design-6.png"
        }
      },
      "blogPost": allBlogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "url": `https://qloudsmarthomes.com/blog/${post.slug}`,
        "datePublished": post.date,
        "author": { "@type": "Organization", "name": post.author }
      }))
    };

    const script = document.createElement('script');
    script.id = 'blog-list-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(blogListSchema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('blog-list-schema');
      if (schemaScript) schemaScript.remove();
    };
  }, []);

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <Link to="/">
            <img 
              src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png" 
              alt="Qloud Tech Logo" 
              className="h-6 brightness-0 invert"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#0a0e1a] to-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Smart Home & Theatre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Expert guides, tips, and comparisons to help you build the perfect smart home
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article
                  key={post.id}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl border border-gray-800/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500/90 rounded-full text-xs font-semibold text-black">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f1419]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Your Dream Home Theatre?
            </h2>
            <p className="text-gray-400 mb-6">
              Get a free consultation from Bangalore's #1 home theatre experts
            </p>
            <a href="https://wa.me/917204746043" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-semibold px-8 py-6 rounded-full text-lg">
                Get Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Qloud Tech. All Rights Reserved.</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">www.qloudsmarthomes.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogListPage;

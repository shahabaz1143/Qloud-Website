import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from './ui/button';

// Static blog data - SEO optimized content
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Home Theatre Setup in Bangalore 2024",
    slug: "home-theatre-setup-bangalore-guide",
    excerpt: "Learn everything about setting up a perfect home theatre in Bangalore. From choosing the right room to selecting Dolby Atmos speakers, projectors, and acoustic treatment.",
    category: "Home Theatre",
    author: "Qloud Tech Team",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/g52fv2rb_adarsh%20tranquil.jpg"
  },
  {
    id: 2,
    title: "Smart Home Automation: Complete Buyer's Guide for Indian Homes",
    slug: "smart-home-automation-guide",
    excerpt: "Discover the ROI of smart home automation. We break down costs, benefits, energy savings, and how automation adds value to your Bangalore home.",
    category: "Home Automation",
    author: "Qloud Tech Team",
    date: "2024-12-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800"
  },
  {
    id: 3,
    title: "Top 10 Home Security Systems for Indian Homes in 2024",
    slug: "security-systems-guide",
    excerpt: "Compare the best home security systems available in India. From smart cameras to digital locks, find the perfect security solution for your family.",
    category: "Security",
    author: "Qloud Tech Team",
    date: "2024-12-05",
    readTime: "7 min read",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif"
  },
  {
    id: 4,
    title: "Dolby Atmos vs Traditional Surround Sound: Which is Better?",
    slug: "dolby-atmos-guide",
    excerpt: "Understand the difference between Dolby Atmos and traditional 5.1/7.1 surround sound. Learn which system is right for your home theatre setup.",
    category: "Home Theatre",
    author: "Qloud Tech Team",
    date: "2024-11-28",
    readTime: "5 min read",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif"
  },
  {
    id: 5,
    title: "How to Choose the Right Smart Switches for Your Home",
    slug: "smart-switches-guide",
    excerpt: "A comprehensive guide to selecting smart switches. Compare touch switches, WiFi switches, and smart panels for your home automation needs.",
    category: "Home Automation",
    author: "Qloud Tech Team",
    date: "2024-11-20",
    readTime: "6 min read",
    image: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp"
  },
  {
    id: 6,
    title: "Video Door Phone Installation: Complete Buyer's Guide",
    slug: "video-door-phone-guide",
    excerpt: "Everything you need to know about video door phones. Features to look for, best brands in India, and professional installation tips.",
    category: "Security",
    author: "Qloud Tech Team",
    date: "2024-11-15",
    readTime: "5 min read",
    image: "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/suio62mb_Video%20Door%20Phone.png"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR BLOG
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Smart Home Insights & Guides
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Expert tips, guides, and insights on home theatre, automation, and smart living
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} - Qloud Tech Blog`}
                  title={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full text-xs font-semibold text-black">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date} itemProp="datePublished">
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2"
                  itemProp="headline"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p 
                  className="text-gray-400 text-sm mb-4 line-clamp-3"
                  itemProp="description"
                >
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span itemProp="author">{post.author}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 p-0 h-auto text-sm font-semibold group/btn inline-flex items-center"
                    data-testid={`blog-link-${post.slug}`}
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/blog/home-theatre-setup-bangalore-guide">
            <Button
              className="bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-full transition-all duration-200"
              data-testid="view-all-articles-btn"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;

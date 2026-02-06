import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0e1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Smart Home Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Schedule a free consultation and discover how we can transform your space
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white font-semibold mb-2 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <Select value={formData.service} onValueChange={handleServiceChange} required>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home-theatre">Home Theatre</SelectItem>
                    <SelectItem value="smart-lighting">Smart Lighting</SelectItem>
                    <SelectItem value="security-systems">Security Systems</SelectItem>
                    <SelectItem value="full-automation">Full Home Automation</SelectItem>
                    <SelectItem value="networking">Networking Solutions</SelectItem>
                    <SelectItem value="smart-office">Smart Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 min-h-32"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl p-8 border border-cyan-500/30">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-cyan-400 text-lg font-semibold mb-1">+91 72047 46043</p>
              <p className="text-gray-400 text-sm">Mon-Sat, 9AM-7PM</p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl p-8 border border-cyan-500/30">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-cyan-400 text-lg font-semibold mb-1">contact@qloud.tech</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>

            {/* Office */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl p-8 border border-cyan-500/30">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Office</h3>
              <p className="text-cyan-400 text-lg font-semibold mb-1">Bharatiya City, Bangalore</p>
              <p className="text-gray-400 text-sm">Karnataka, India</p>
            </div>

            {/* Why Choose */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Qloud Tech?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-sm">Free on-site consultation & assessment</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-sm">Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-sm">Certified technicians & expert installation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-sm">Lifetime support & 24/7 helpline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

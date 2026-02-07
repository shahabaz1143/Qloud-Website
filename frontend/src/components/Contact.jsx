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
import { toast } from 'sonner';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      const response = await submitContact(formData);
      
      toast.success("Message Sent!", {
        description: response.message || "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0e1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Smart Home Journey
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Schedule a free consultation and discover how we can transform your space
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl p-6 border border-gray-800/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white text-sm font-semibold mb-2 block">
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
                <label className="text-white text-sm font-semibold mb-2 block">
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
                <label className="text-white text-sm font-semibold mb-2 block">
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
                <label className="text-white text-sm font-semibold mb-2 block">
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
                <label className="text-white text-sm font-semibold mb-2 block">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 min-h-24"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-base rounded-lg disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl p-6 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <p className="text-cyan-400 text-base font-semibold">+91 72047 46043</p>
                  <p className="text-gray-400 text-sm">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl p-6 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-cyan-400 text-base font-semibold">contact@qloud.tech</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl p-6 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Office</h3>
                  <p className="text-cyan-400 text-base font-semibold">Bharatiya City, Bangalore</p>
                  <p className="text-gray-400 text-sm">Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

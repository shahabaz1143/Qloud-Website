import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Create WhatsApp message with form data
    const message = `Hi, I'm interested in your services.%0A%0AName: ${formData.fullName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/917204746043?text=${message}`, '_blank');
    
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
    
    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0f1419]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Your Smart Home
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Ready to transform your home? Contact us for a free consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl p-8 border border-cyan-500/30">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp Opened!</h3>
                  <p className="text-gray-400">Please send the message on WhatsApp and we'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 h-12"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="flex h-12 w-full rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">Select Service</option>
                      <option value="Home Theatre">Home Theatre</option>
                      <option value="Home Automation">Home Automation</option>
                      <option value="Smart Lighting">Smart Lighting</option>
                      <option value="Security Systems">Security Systems</option>
                      <option value="Networking">Networking Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 resize-none"
                  />

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] hover:from-cyan-500 hover:to-sky-500 text-black font-semibold py-4 h-14 text-base rounded-lg disabled:opacity-50"
                  >
                    {submitting ? 'Opening WhatsApp...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              {/* Phone */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5">Phone</h3>
                    <p className="text-cyan-400 text-sm font-semibold">+91 72047 46043</p>
                    <p className="text-gray-500 text-xs">Mon-Sat, 9AM-7PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5">Email</h3>
                    <p className="text-cyan-400 text-sm font-semibold">contact@qloudsmarthomes.com</p>
                    <p className="text-gray-500 text-xs">24/7 Support</p>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5">Office</h3>
                    <p className="text-cyan-400 text-sm font-semibold">Bharatiya City, Bangalore</p>
                    <p className="text-gray-500 text-xs">Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Experience Centers */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Experience Centers</h3>
                    <div className="flex gap-4">
                      <p className="text-cyan-400 text-sm font-semibold">Bharatiya City</p>
                      <span className="text-gray-600">•</span>
                      <p className="text-cyan-400 text-sm font-semibold">MG Road</p>
                    </div>
                  </div>
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

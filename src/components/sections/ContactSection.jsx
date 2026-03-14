import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Contact Us"
        />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 uppercase">
          {/* Contact Details */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold normal-case mb-8 text-slate-800">Our Offices</h3>
            
            <div className="space-y-8 normal-case">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e6f5f5] text-[var(--color-siemens-primary)] rounded-sm flex items-center justify-center shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Global Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">
                    123 Innovation Drive<br />
                    Tech City, TC 10010<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e6f5f5] text-[var(--color-siemens-primary)] rounded-sm flex items-center justify-center shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600">
                    <a href="tel:+1234567890" className="hover:text-[var(--color-siemens-primary)] transition-colors">+1 (234) 567-890</a>
                  </p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e6f5f5] text-[var(--color-siemens-primary)] rounded-sm flex items-center justify-center shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-600">
                    <a href="mailto:contact@corp.com" className="hover:text-[var(--color-siemens-primary)] transition-colors">contact@corp.com</a>
                  </p>
                  <p className="text-slate-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-[var(--color-siemens-gray-100)] p-8 md:p-12 normal-case border-t-4 border-[var(--color-siemens-primary)] shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-siemens-primary)] focus:ring-1 focus:ring-[var(--color-siemens-primary)] outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-siemens-primary)] focus:ring-1 focus:ring-[var(--color-siemens-primary)] outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-siemens-primary)] focus:ring-1 focus:ring-[var(--color-siemens-primary)] outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-siemens-primary)] focus:ring-1 focus:ring-[var(--color-siemens-primary)] outline-none bg-white transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Sales & Partnerships</option>
                  <option>Technical Support</option>
                  <option>Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--color-siemens-primary)] focus:ring-1 focus:ring-[var(--color-siemens-primary)] outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

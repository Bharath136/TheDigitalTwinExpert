import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { contactData } from '../../config/contactData';

const ContactSection = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Contact Us"
        />

        <div className="max-w-4xl mx-auto uppercase">
          {/* Contact Details */}
          <div className="bg-[var(--color-siemens-gray-100)] p-8 md:p-12 border-t-4 border-[var(--color-siemens-primary)] shadow-sm">
            <h3 className="text-2xl font-bold normal-case mb-12 text-center text-slate-800">Our Offices</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 normal-case">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white text-[var(--color-siemens-primary)] shadow-sm rounded-sm flex items-center justify-center shrink-0">
                  <FiMapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Global Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {contactData.headquarters.address1}<br />
                    {contactData.headquarters.address2}<br />
                    {contactData.headquarters.country}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white text-[var(--color-siemens-primary)] shadow-sm rounded-sm flex items-center justify-center shrink-0">
                  <FiPhone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Phone</h4>
                  <p className="text-slate-900 font-semibold mb-1">{contactData.phone.name}</p>
                  <p className="text-slate-600">
                    <a href={`tel:${contactData.phone.value}`} className="hover:text-[var(--color-siemens-primary)] transition-colors">{contactData.phone.display}</a>
                  </p>
                  <p className="text-slate-500 text-sm mt-2">{contactData.phone.hours}</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white text-[var(--color-siemens-primary)] shadow-sm rounded-sm flex items-center justify-center shrink-0">
                  <FiMail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-3">Email</h4>
                  <p className="text-slate-600">
                    <a href={`mailto:${contactData.email.value}`} className="hover:text-[var(--color-siemens-primary)] transition-colors">{contactData.email.display}</a>
                  </p>
                  <p className="text-slate-500 text-sm mt-2">{contactData.email.supportText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

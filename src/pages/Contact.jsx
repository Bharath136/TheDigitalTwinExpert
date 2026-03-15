import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ContactSection from '../components/sections/ContactSection';
import CTA from '../components/common/CTA';
import contactHeroImg from '../assets/images/contact/contact-hero.jpg';

const Contact = () => {

  return (
    <main>
      <Hero 
        title="Get in Touch"
        subtitle="Whether you are exploring Digital Twin adoption or seeking expert guidance, our team is ready to assist."
        image={contactHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      <ContactSection />
      
      <CTA 
        title="Discover the power of Intelligent Infrastructure"
        subtitle="Learn more about our industry-focused Digital Twin expertise."
        buttonText="View Industries"
        buttonLink="/services"
      />
    </main>
  );
};

export default Contact;

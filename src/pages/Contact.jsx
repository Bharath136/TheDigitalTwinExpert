import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ContactSection from '../components/sections/ContactSection';
import CTA from '../components/common/CTA';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero 
        title="Get in Touch"
        subtitle="Whether you are exploring Digital Twin adoption or seeking expert guidance, our team is ready to assist."
        image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
        height="h-[50vh]"
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

import React from 'react';
import Hero from '@presentation/components/sections/Hero';
// import ContactForm from '@presentation/components/sections/ContactForm';
import ContactSection from '@presentation/components/sections/ContactSection';
// import CTA from '@presentation/components/common/CTA';
import contactHeroImg from '@presentation/assets/images/contact/contact-hero.jpg';

const Contact = () => {

  return (
    <main>
      <Hero 
        title="Get in Touch"
        subtitle="Whether you are exploring Digital Twin adoption or seeking expert guidance, our team is ready to assist."
        image={contactHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      {/* <ContactForm /> */}
      <ContactSection />
      
      {/* <CTA 
        title="Discover the power of Intelligent Infrastructure"
        subtitle="Learn more about our industry-focused Digital Twin expertise or schedule a call."
        buttonText="Book a Consultation"
        buttonLink="#form"
      /> */}
    </main>
  );
};

export default Contact;

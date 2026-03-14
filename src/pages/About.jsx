import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import AboutOverview from '../components/sections/AboutOverview';
import TeamSection from '../components/sections/TeamSection';
import CTA from '../components/common/CTA';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero 
        title="Our Vision & Leadership"
        subtitle="Discover the engineering minds and strategic thinkers driving the future of Digital Twins."
        image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
        height="h-[60vh]"
      />
      
      <AboutOverview />
      <TeamSection />
      
      <CTA 
        title="Join Our Growing Ecosystem"
        subtitle="We collaborate with owners, operators, EPCs, providers, and governments to build a strong Digital Twin ecosystem."
        buttonText="View Capabilities"
        buttonLink="/services"
      />
    </main>
  );
};

export default About;

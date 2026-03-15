import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import AboutOverview from '../components/sections/AboutOverview';
import TeamSection from '../components/sections/TeamSection';
import CTA from '../components/common/CTA';
import aboutHeroImg from '../assets/images/about/hero.jpg';

const About = () => {

  return (
    <main>
      <Hero 
        title="Pioneering Digital Infrastructure"
        subtitle="Driven by innovation, expertise, and a commitment to creating a more connected and sustainable world."
        image={aboutHeroImg}
        height="min-h-[80vh] lg:min-h-[60vh]"
      />
      
      <AboutOverview />
      <div id="leadership">
        <TeamSection />
      </div>
      
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

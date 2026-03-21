import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import CTA from '../components/common/CTA';
import Container from '../components/layout/Container';
import SectionHeader from '../components/common/SectionHeader';
import Grid from '../components/common/Grid';
const servicesHeroImg = '/images/unsplash/industrial.jpg';

const Industries = () => {

  return (
    <main>
      <Hero 
        title="Who We Serve"
        subtitle="Each industry solution combines digital engineering, data analytics, and intelligent monitoring platforms."
        image={servicesHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      {/* Visual Image Grid of 7 Industries */}
      <ServicesOverview />

      <CTA 
        title="Ready to Transform Your Infrastructure?"
        subtitle="Discover how Digital Twins can unlock operational intelligence and long-term value for your organization."
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Industries;

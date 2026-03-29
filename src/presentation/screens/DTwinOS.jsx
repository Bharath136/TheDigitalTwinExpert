import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@presentation/components/sections/Hero';
import platformHeroImg from '@presentation/assets/images/heroes/dtwinos.png';

import CTA from '@presentation/components/common/CTA';
import PlatformSection from '@presentation/components/sections/PlatformSection';
import { dtwinosData } from '@data/dtwinosData';

// Using a placeholder background since image isn't available




const DTwinOS = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero
        title="What is DTwinOS?"
        subtitle={<><strong>DTwinOS</strong> is a unified, AI-powered Digital Twin solution that delivers real-time asset intelligence, operational insights, and data-driven decision-making—enhanced with smart dashboards, automation, and AI-powered workflows.</>}
        image={platformHeroImg}
        height="min-h-[70vh] lg:min-h-[60vh]"
      />



      {/* Zig-Zag Sections mapping through dtwinosData */}
      {dtwinosData.map((data, index) => (
        <PlatformSection
          key={data.id}
          data={data}
          reverse={index % 2 !== 0}
        />
      ))}

      <CTA
        title="Ready to deploy your Digital Twin?"
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default DTwinOS;

import React from 'react';
import Hero from '../components/sections/Hero';
import AboutOverview from '../components/sections/AboutOverview';
import EcosystemSection from '../components/sections/EcosystemSection';
import CTA from '../components/common/CTA';
import Container from '../components/layout/Container';
import SectionHeader from '../components/common/SectionHeader';
import aboutHeroImg from '../assets/images/about/hero.jpg';

const products = [
  "Healthcare Digital Twin (HDT)",
  "Personal Digital Twin (CDT)",
  "Industrial Digital Twin (IDT)",
  "Energy Digital Twin (EDT)",
  "Urban Digital Twin (UDT)",
  "Transport Digital Twin (TDT)",
  "Built Environment Digital Twin (BDT)",
  "Sustainability Digital Twin (SDT)"
];

const AboutProductsSection = () => (
  <section className="section-padding bg-slate-50 border-t border-slate-200">
    <Container>
      <SectionHeader title="Products & Services" subtitle="Our DTwinOS Offerings" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
        {products.map((product, i) => (
          <div key={i} className="bg-white border-l-4 border-[var(--color-siemens-primary)] shadow-sm p-5 rounded-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <span className="text-xl font-bold text-slate-300 w-6 flex-shrink-0">{i + 1}.</span>
            <span className="font-semibold text-slate-800 leading-tight">{product}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

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
      
      <EcosystemSection />
      
      <AboutProductsSection />
      
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

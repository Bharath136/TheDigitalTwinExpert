import React from 'react';
import Hero from '@presentation/components/sections/Hero';
import AboutOverview from '@presentation/components/sections/AboutOverview';
import EcosystemSection from '@presentation/components/sections/EcosystemSection';
import CTA from '@presentation/components/common/CTA';
import Container from '@presentation/components/layout/Container';
import SectionHeader from '@presentation/components/common/SectionHeader';
import aboutHeroImg from '@presentation/assets/images/about/about_hero_bg.png';

const products = [
  "Healthcare Digital Twin (HDT)",
  "Personal Digital Twin (PDT)",
  "Industrial Digital Twin (IDT)",
  "Energy Digital Twin (EDT)",
  "Transportation Digital Twin (TDT)",
  "Urban Digital Twin (UDT)",
  "Built Environment Digital Twin (BDT)",
  "Sustainability Digital Twin (SDT)"
];

const AboutProductsSection = () => (
  <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
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
        title="Transforming the World with Digital Twins"
        subtitle={<>We deliver AI-powered<strong> Digital Twin</strong> solutions that connect the physical and digital worlds transforming design, construction, and operations into <strong>intelligent, data-driven ecosystems</strong></>}
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

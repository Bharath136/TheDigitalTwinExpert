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
  "Citizen Digital Twin (CDT)",
  "Industrial Digital Twin (IDT)",
  "Energy Digital Twin (EDT)",
  "Urban Digital Twin (UDT)",
  "TwinHome360 (TH360)",
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

      <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-lg p-8 text-center shadow-sm">
        <div className="bg-green-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">Dedicated Initiative</div>
        <h3 className="text-3xl font-bold text-green-900 mb-3 block">The Sustainability Life</h3>
        <p className="text-green-800 mb-6 font-medium">(This page is also being developed — link to dedicated site)</p>
        <a href="https://thesustainabilitylife.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-sm">
          Visit TheSustainabilityLife.com
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
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

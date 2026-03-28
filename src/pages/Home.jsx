import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import Container from '../components/layout/Container';
import SectionHeader from '../components/common/SectionHeader';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';
import Button from '../components/common/Button';
import heroImg from '../assets/images/home/hero.jpg';
import { highlightData, advantageData, caseStudiesData } from '../data/homeData';

const Home = () => {

  return (
    <main>
      {/* a) Hero Section */}
      <Hero 
        title="Design. Build. Operate. Powered by TwinOS."
        subtitle="Transforming assets into intelligent, living Digital Twins for a smarter, safer, and more sustainable world."
        image={heroImg}
        alignment="left"
      >
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
          At The Digital Twin Experts, we unify BIM, AI, and Digital Twin technologies into a single intelligent ecosystem — enabling organizations to design smarter, build faster, and operate more efficiently across the entire asset lifecycle.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button to="/industries" variant="primary" size="lg">Explore Industries</Button>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-siemens-secondary)]">Contact Us</Button>
        </div>
      </Hero>
      
      {/* b) Key Industries (Visual Grid) */}
      <ServicesOverview />

      {/* c) DTwinOS Highlights */}
      <DTwinOSHighlights />

      {/* d) Why Partner With Us */}
      <WhyPartnerWithUs />

      {/* e) Case Studies / Use Cases */}
      <CaseStudies />

      {/* f) CTA Section */}
      <CTA 
        title="Start Your Digital Twin Journey"
        subtitle="Discover how Digital Twins can unlock operational intelligence and long-term value for your organization."
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

const DTwinOSHighlights = () => (
  <section className="py-20 bg-[var(--color-siemens-secondary)] text-slate-900 border-t border-[var(--color-siemens-primary)]/20">
    <Container>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-[var(--color-siemens-primary)] font-semibold tracking-wider uppercase text-sm mb-4 block">Core Technology</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">DTwinOS Highlights</h3>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          DTwinOS is our proprietary platform that delivers real-time asset intelligence and operational insights, transforming static assets into intelligent living systems.
        </p>
      </div>
      
      <Grid columns={3} gap={6}>
        {highlightData.map((item, i) => (
          <div key={i} className="p-8 border border-white/40 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-siemens-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-4xl mb-6 relative z-10">{item.icon}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h4>
            <p className="text-slate-600 leading-relaxed relative z-10">{item.text}</p>
          </div>
        ))}
      </Grid>
    </Container>
  </section>
);

const WhyPartnerWithUs = () => (
  <section className="py-24 bg-white">
    <Container>
      <SectionHeader title="Our Advantage" subtitle="Why Partner With Us?" />
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-slate-600 text-lg">
          We combine deep industry expertise with cutting-edge AI to deliver measurable ROI and end-to-end digital transformation.
        </p>
      </div>
      <Grid columns={4} gap={6}>
        {advantageData.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-8 bg-sky-50/50 rounded-2xl border border-sky-100/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-siemens-primary)] text-white font-bold rounded-2xl shadow-md mb-5 text-lg">{i+1}</div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </Grid>
      <div className="mt-12 text-center">
        <Button to="/why-us" variant="outline">Learn More About Our Approach</Button>
      </div>
    </Container>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-[var(--color-siemens-gray-100)] border-t border-gray-200">
    <Container>
      <SectionHeader title="Proven Results" subtitle="Case Studies & Use Cases" />
      <Grid columns={2} gap={8}>
        {caseStudiesData.map((cs, i) => (
          <div key={i} className="bg-white group overflow-hidden rounded-2xl shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="h-72 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src={cs.img} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 flex-grow bg-white relative z-20">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-siemens-primary)] mb-3 block inline-block bg-sky-50 px-3 py-1 rounded-full">{cs.topic}</span>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{cs.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed">{cs.desc}</p>
            </div>
          </div>
        ))}
      </Grid>
      <div className="mt-12 text-center">
        <Button to="/insights" variant="outline">View All Case Studies</Button>
      </div>
    </Container>
  </section>
);

export default Home;
 
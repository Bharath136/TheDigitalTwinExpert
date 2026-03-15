import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/common/CTA';
import Button from '../components/common/Button';
import heroImg from '../assets/images/home/hero.jpg';
import engineersImg from '../assets/images/home/engineers.jpg';

const Home = () => {

  return (
    <main>
      <Hero 
        title="Building the Future with Digital Twins, AI, and Intelligent Infrastructure"
        subtitle="The Digital Twin Experts (TDTE) helps organizations transform physical assets into intelligent digital ecosystems using Digital Twins, AI, and advanced data technologies."
        image={heroImg}
        alignment="left"
      >
        <Button to="/services" variant="primary" size="lg">Explore Industries</Button>
        <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-siemens-secondary)]">Contact Us</Button>
      </Hero>
      
      <DigitalTwinOverview />
      <AboutOverviewPreview />
      <ServicesOverview />
      <Features />
      <Testimonials />
      <CTA 
        title="Ready to Transform Your Infrastructure?"
        subtitle="Discover how Digital Twins can unlock operational intelligence and long-term value for your organization."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </main>
  );
};

// A small preview component for the Home page
const AboutOverviewPreview = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-[var(--color-siemens-primary)] font-semibold tracking-wider uppercase text-sm mb-4 block">About TDTE</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">The Digital Twin Experts</h3>
          <p className="text-slate-600 text-lg mb-4 leading-relaxed">
            We are a global initiative focused on accelerating the adoption of Digital Twin technologies across infrastructure, industry, cities, healthcare, energy, and governance. 
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We bring together strategy, standards, technology, and execution to help organizations move from static assets to intelligent living systems.
          </p>
          <Button to="/about" variant="text" size="lg" className="px-0">Learn more about our vision</Button>
        </div>
        <div className="md:w-1/2 w-full h-80 bg-gray-100 relative overflow-hidden group">
          <img src={engineersImg} alt="Engineers collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </div>
  </section>
);

const DigitalTwinOverview = () => (
  <section className="py-20 bg-[var(--color-siemens-secondary)] text-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-[var(--color-siemens-primary)] font-semibold tracking-wider uppercase text-sm mb-4 block">Core Technology</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">What Is a Digital Twin?</h3>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          A Digital Twin is a dynamic digital representation of a physical asset, system, or environment that continuously integrates data from design models, operational systems, IoT, and AI analytics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {[
          { icon: "👁️", text: "Visualize assets in real time" },
          { icon: "🔬", text: "Simulate scenarios before making decisions" },
          { icon: "⚡", text: "Predict failures and optimize performance" },
          { icon: "📉", text: "Reduce cost, risk, and carbon footprint" },
          { icon: "🤝", text: "Improve collaboration across stakeholders" }
        ].map((item, i) => (
          <div key={i} className="p-6 border border-slate-300 rounded-sm hover:border-[var(--color-siemens-primary)] transition-colors bg-white/50 backdrop-blur-sm">
            <div className="text-4xl mb-4">{item.icon}</div>
            <p className="text-sm font-semibold text-slate-900">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Home;

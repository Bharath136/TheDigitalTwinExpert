import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';
import { FiWind, FiSun, FiActivity, FiGlobe } from 'react-icons/fi';
import sustainabilityHeroImg from '../assets/images/sustainability/hero.jpg';

const initiatives = [
  { title: "Carbon Tracking", desc: "Real-time auditing of carbon emissions across global facilities and supply chains.", icon: FiActivity },
  { title: "Energy Optimization", desc: "AI-driven analytics to minimize energy waste and maximize renewable usage.", icon: FiSun },
  { title: "ESG Reporting", desc: "Automated, standard-compliant reports for environmental, social, and governance goals.", icon: FiGlobe },
  { title: "Climate-Resilient Planning", desc: "Simulating physical infrastructure against extreme weather and climate shifts.", icon: FiWind }
];

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero 
        title="Sustainability & Net-Zero"
        subtitle="Digital Twins play an important role in achieving sustainable infrastructure and climate resilience."
        image={sustainabilityHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeader title="Our Commitment" subtitle="Building a Greener Future" centered={false} />
              <p className="text-body mb-8">
                In a world facing unprecedented climate challenges, infrastructure must adapt. TDTE supports global sustainability initiatives by providing the computational power and analytical capabilities needed to drastically reduce carbon footprints.
              </p>
              <div className="space-y-6 mt-8">
                {initiatives.map((init, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-[var(--color-siemens-primary)] bg-sky-50 p-3 rounded-sm">
                      <init.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{init.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{init.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[600px] rounded-sm overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Earth from space" className="w-full h-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <CTA 
        title="Join the Net-Zero transition."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Sustainability;

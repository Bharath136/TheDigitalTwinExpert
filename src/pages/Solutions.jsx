import React from 'react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';

const solutionsHeroImg = "/images/unsplash/solutions-hero.jpg";

const offerings = [
  { id: "implementation", title: "Digital Implementation", desc: "End-to-end deployment of digital strategies, ensuring seamless integration of new technologies into your existing ecosystem.", icon: "🚀" },
  { id: "development", title: "Digital Twin Development", desc: "Custom creation of high-fidelity digital replicas tailored to your operational needs and asset specifications.", icon: "🧬" },
  { id: "bim-integration", title: "BIM & Data Integration", desc: "Connecting Building Information Modeling with enterprise systems to establish a single source of truth.", icon: "🔗" },
  { id: "ai-analytics", title: "AI & Predictive Analytics", desc: "Unlocking deeper insights and forecasting future states using advanced machine learning models.", icon: "🧠" },
  { id: "command-center", title: "Command Center Solutions", desc: "Centralized hubs providing real-time visibility, automated alerts, and comprehensive situational awareness.", icon: "🎛️" },
  { id: "lifecycle", title: "Asset Lifecycle Management", desc: "Optimizing value from day zero to decommissioning through continuous monitoring and intelligent maintenance.", icon: "⏳" },
  { id: "smart-infrastructure", title: "Smart Infrastructure Solutions", desc: "Integrating IoT and intelligent automation into physical structures to create responsive, sustainable environments.", icon: "🏙️" },
];

const Solutions = () => {

  return (
    <main>
      <Hero 
        title="What We Deliver"
        subtitle="Comprehensive digital twin solutions driving end-to-end transformation across your enterprise."
        image={solutionsHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      <section className="section-padding bg-[var(--color-siemens-gray-100)]">
        <Container>
          <SectionHeader title="Our Offerings" subtitle="End-to-End Solutions" />
          
          <Grid columns={3} gap={8}>
            {offerings.map((sol, i) => (
              <div key={i} id={sol.id} className="bg-white p-8 border-t-4 border-[var(--color-siemens-primary)] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-6">{sol.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{sol.title}</h3>
                <p className="text-slate-600 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      <CTA 
        title="Ready to transform your operations?"
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Solutions;

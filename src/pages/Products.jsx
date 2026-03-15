import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';
import productsHeroImg from '../assets/images/products/hero.jpg';

const products = [
  { id: "healthcare", title: "Healthcare Digital Twin", desc: "Operational intelligence, asset tracking, and patient-centric monitoring.", icon: "🏥" },
  { id: "citizen", title: "Citizen Digital Twin", desc: "Connecting citizens to public infrastructure and smart city administration.", icon: "👥" },
  { id: "urban", title: "Urban Digital Twin", desc: "Smart city planning, traffic optimization, and environmental monitoring.", icon: "🏙️" },
  { id: "home", title: "Home Digital Twin", desc: "Residential energy management, automation, and security tracking.", icon: "🏠" },
  { id: "industrial", title: "Industrial Digital Twin", desc: "Factory optimization, supply chain simulation, and predictive maintenance.", icon: "🏭" },
  { id: "energy", title: "Energy Digital Twin", desc: "Power grid simulation, renewable asset performance, and load balancing.", icon: "⚡" }
];

const Products = () => {

  return (
    <main>
      <Hero 
        title="Our Products"
        subtitle="TDTE provides specialized Digital Twin solutions designed for different environments."
        image={productsHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      <section className="section-padding bg-[var(--color-siemens-gray-100)]">
        <Container>
          <SectionHeader title="Digital Twin Platforms" subtitle="Purpose-Built Solutions" />
          <p className="text-center text-body max-w-3xl mx-auto mb-16">
            These solutions combine real-time data, analytics, and visualization to improve operational performance across diverse ecosystems.
          </p>

          <Grid columns={3} gap={8}>
            {products.map((prod, i) => (
              <div key={i} id={prod.id} className="bg-white p-8 border-t-4 border-[var(--color-siemens-primary)] shadow-sm hover:shadow-xl transition-all duration-300 scroll-mt-24">
                <div className="text-4xl mb-6">{prod.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{prod.title}</h3>
                <p className="text-slate-600 leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      <CTA 
        title="Ready to deploy your Digital Twin?"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Products;

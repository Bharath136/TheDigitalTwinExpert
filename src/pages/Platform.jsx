import React from 'react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';
import TwinCard from '../components/common/TwinCard';

// Using a placeholder background since image isn't available
const platformHeroImg = "/images/unsplash/earth.jpg";

const capabilities = [
  { title: "Architecture: BIM + IoT + AI", desc: "Unified data foundation merging spatial models with real-time telemetry and artificial intelligence.", icon: "🏗️" },
  { title: "Real-Time Data Integration", desc: "Seamless ingestion from SCADA, BMS, ERP, and IoT sensors to maintain a live digital replica.", icon: "🔄" },
  { title: "AI Engine & Predictive Models", desc: "Advanced machine learning algorithms that forecast anomalies and prescribe optimal actions.", icon: "🧠" },
  { title: "Dashboard & Command Center", desc: "Centralized, intuitive interfaces providing 360-degree visibility and holistic operational control.", icon: "🖥️" }
];

const twins = [
  { name: 'DTwinOS Healthcare Twin', acronym: 'HDT', path: '/platform#hdt', desc: 'Hospitals, patient twins, medical equipment, and operational intelligence.', icon: '🏥' },
  { name: 'DTwinOS Industrial Twin', acronym: 'IDT', path: '/platform#idt', desc: 'Factories, production systems, predictive maintenance, and performance optimization.', icon: '🏭' },
  { name: 'DTwinOS Energy Twin', acronym: 'EDT', path: '/platform#edt', desc: 'Power generation, renewables, grid intelligence, and energy optimization.', icon: '⚡' },
  { name: 'DTwinOS Urban Twin', acronym: 'UDT', path: '/platform#udt', desc: 'City-scale operations, citizen services, utilities, and governance.', icon: '🏙️' },
  { name: 'DTwinOS Built Twin', acronym: 'BDT', path: '/platform#bdt', desc: 'Buildings, data centers, and lifecycle management.', icon: '🏗️' },
  { name: 'DTwinOS Transport Twin', acronym: 'TDT', path: '/platform#tdt', desc: 'Rail, airports, metro rail, highways, and logistics network optimization.', icon: '🚆' },
  { name: 'DTwinOS Sustainability Twin', acronym: 'SDT', path: '/platform#sdt', desc: 'Carbon tracking, ESG analytics, and net-zero transformation.', icon: '🌱' },
];

const Platform = () => {

  return (
    <main>
      <Hero
        title="What is TwinOS?"
        subtitle="TwinOS is a unified, AI-powered Digital Twin platform that delivers real-time asset intelligence and operational insights, powered by Autodesk Tandem and enhanced with advanced dashboards, automation, and AI-driven workflows."
        image={platformHeroImg}
        height="min-h-[70vh] lg:min-h-[60vh]"
      />

      {/* Section B - Key Capabilities */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader title="Core Engine" subtitle="Key Capabilities" />
          <Grid columns={4} gap={6}>
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-sky-200 transition-colors text-center">
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Section C - TwinOS Solutions */}
      <section className="section-padding bg-[var(--color-siemens-gray-100)]">
        <Container>
          <SectionHeader title="Digital Twin Portfolio" subtitle="TwinOS Solutions" />
          <p className="text-center text-body max-w-3xl mx-auto mb-16">
            Explore our specialized platform offerings tailored to transform specific asset classes and industries.
          </p>

          <Grid columns={2} gap={6}>
            {twins.map((twin, i) => (
              <TwinCard
                key={i}
                icon={twin.icon}
                name={twin.name}
                acronym={twin.acronym}
                description={twin.desc}
                link={twin.path}
              />
            ))}
          </Grid>
        </Container>
      </section>

      <CTA
        title="Ready to deploy your Digital Twin?"
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Platform;

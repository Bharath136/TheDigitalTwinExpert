import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';
import PlatformSection from '../components/sections/PlatformSection';
import { platformData } from '../data/platformData';

// Using a placeholder background since image isn't available
const platformHeroImg = "/images/unsplash/earth.jpg";

const capabilities = [
  { title: "Architecture: BIM + IoT + AI", desc: "Unified data foundation merging spatial models with real-time telemetry and artificial intelligence.", icon: "🏗️" },
  { title: "Real-Time Data Integration", desc: "Seamless ingestion from SCADA, BMS, ERP, and IoT sensors to maintain a live digital replica.", icon: "🔄" },
  { title: "AI Engine & Predictive Models", desc: "Advanced machine learning algorithms that forecast anomalies and prescribe optimal actions.", icon: "🧠" },
  { title: "Dashboard & Command Center", desc: "Centralized, intuitive interfaces providing 360-degree visibility and holistic operational control.", icon: "🖥️" }
];

const Platform = () => {
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
        subtitle="DTwinOS is a unified, AI-powered Digital Twin platform that delivers real-time asset intelligence and operational insights, powered by Autodesk Tandem and enhanced with advanced dashboards, automation, and AI-driven workflows."
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

      {/* Section C - DTwinOS Solutions (Zig-Zag Layout) */}
      <section className="py-8 bg-[var(--color-siemens-gray-100)]">
        <Container>
          <SectionHeader title="Digital Twin Portfolio" subtitle="DTwinOS Solutions" />
          <p className="text-center text-body max-w-3xl mx-auto mb-8">
            Explore our specialized platform offerings tailored to transform specific asset classes and industries.
          </p>
        </Container>
      </section>

      {/* Zig-Zag Sections mapping through platformData */}
      {platformData.map((data, index) => (
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

export default Platform;

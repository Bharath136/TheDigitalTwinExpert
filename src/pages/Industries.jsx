import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import CTA from '../components/common/CTA';
import Container from '../components/layout/Container';
import SectionHeader from '../components/common/SectionHeader';
import Grid from '../components/common/Grid';
import { 
  FiBox, FiMonitor, FiCpu, FiTrendingUp, FiShare2, 
  FiCommand, FiMap, FiHeart, FiGlobe, FiMapPin 
} from 'react-icons/fi';
const servicesHeroImg = '/images/unsplash/industrial.jpg';

const coreCapabilities = [
  {
    title: 'BIM & Digital Engineering',
    icon: FiBox,
    bullets: [
      'BIM modeling and coordination',
      'Clash detection and design validation',
      'Multi-disciplinary collaboration',
      'Model-based asset information management'
    ]
  },
  {
    title: 'Smart Construction Management',
    icon: FiMapPin,
    bullets: [
      'Real-time construction progress tracking',
      'Quality, safety, and issue management',
      'Field-to-office digital workflows'
    ]
  },
  {
    title: 'Digital Twin Operations',
    icon: FiMonitor,
    bullets: [
      'Live asset monitoring and visualization',
      'Facility performance dashboards',
      'Predictive maintenance and alerts',
      'Asset lifecycle and space utilization tracking'
    ]
  },
  {
    title: 'AI & Data Intelligence',
    icon: FiCpu,
    bullets: [
      'Predictive analytics and forecasting',
      'AI-driven decision support',
      'Anomaly detection and insights',
      'What-if scenario simulation'
    ]
  },
  {
    title: 'Interoperability & Integration',
    icon: FiShare2,
    bullets: [
      'Seamless integration with BIM, IoT, ERP',
      'Open data standards and API-based connectivity',
      'Unified data environment across platforms'
    ]
  },
  {
    title: 'Command & Control Centers',
    icon: FiCommand,
    bullets: [
      'Centralized dashboards for real-time monitoring',
      'Multi-site and multi-project visibility',
      'Incident management and alert systems',
      'KPI tracking and reporting'
    ]
  },
  {
    title: 'Smart Infrastructure & Cities',
    icon: FiMap,
    bullets: [
      'City-scale Digital Twin solutions',
      'Infrastructure monitoring and optimization',
      'Transportation and utility intelligence',
      'Urban planning and simulation'
    ]
  },
  {
    title: 'Healthcare Digital Twins',
    icon: FiHeart,
    bullets: [
      'Hospital operational dashboards',
      'Patient and asset monitoring',
      'Equipment utilization tracking',
      'Healthcare command center solutions'
    ]
  },
  {
    title: 'Sustainability & Net-Zero Solutions',
    icon: FiGlobe,
    bullets: [
      'Carbon tracking and ESG reporting',
      'Energy optimization',
      'Sustainability analytics',
      'Net-zero strategy implementation'
    ]
  },
  {
    title: 'Lifecycle Asset Management',
    icon: FiTrendingUp,
    bullets: [
      'End-to-end asset lifecycle tracking',
      'Design → Build → Operate integration',
      'Maintenance planning and optimization',
      'Digital handover and asset intelligence'
    ]
  }
];

const Industries = () => {

  return (
    <main>
      <Hero 
        title="Who We Serve"
        subtitle="Each industry solution combines digital engineering, data analytics, and intelligent monitoring platforms."
        image={servicesHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />
      
      {/* Visual Image Grid of 7 Industries */}
      <ServicesOverview />

      {/* Core Capabilities Section (Change 4) */}
      <section className="py-24 bg-white border-t border-gray-200">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-[var(--color-siemens-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm leading-tight">
              Empowering the Future with Intelligent Digital Twins
            </h2>
            <div className="w-24 h-1.5 bg-[var(--color-siemens-primary)] mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              At The Digital Twin Experts, powered by TwinOS, we deliver end-to-end
              capabilities that unify data, systems, and assets into a single
              intelligent ecosystem—transforming how organizations design, build,
              and operate their assets across the entire lifecycle.
            </p>
          </div>

          <Grid columns={3} gap={6}>
            {coreCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-siemens-primary)] mb-6">
                  <cap.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-5">{cap.title}</h3>
                <ul className="space-y-3">
                  {cap.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-slate-600 text-sm leading-relaxed">
                      <span className="text-[var(--color-siemens-primary)] mr-2 mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      <CTA 
        title="Ready to Transform Your Infrastructure?"
        subtitle="Discover how Digital Twins can unlock operational intelligence and long-term value for your organization."
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Industries;

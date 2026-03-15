import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import Grid from '../common/Grid';
import { FiCheckCircle } from 'react-icons/fi';
import officeImg from '../../assets/images/shared/office.jpg';
import teamworkImg from '../../assets/images/about/teamwork.jpg';
import strategyImg from '../../assets/images/about/strategy.jpg';
import earthImg from '../../assets/images/shared/earth.jpg';

const useCases = [
  "Smart Buildings & Campuses",
  "Infrastructure Asset Management",
  "Energy Optimization & Carbon Reduction",
  "Predictive Maintenance",
  "Capital Project Performance",
  "Government & Public Asset Digitization"
];

const stats = [
  { value: 'Global', label: 'Platform Initiative' },
  { value: 'IoT & AI', label: 'Core Integration' },
  { value: 'Net-Zero', label: 'Sustainability Goal' },
  { value: 'Lifecycle', label: 'Asset Management' }
];

const AboutOverview = () => {
  return (
    <>
      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="what-is-tdte" className="heading-section text-slate-900 mb-6 scroll-mt-28">Advancing Digital Twin Adoption Globally</h2>
              <div className="h-1 w-24 bg-[var(--color-siemens-primary)] mb-8" />
              <p className="text-body mb-6">
                <strong>The Digital Twin Experts</strong> is a global platform dedicated to advancing Digital Twin adoption across infrastructure, industry, healthcare, and energy sectors. By combining digital engineering, AI analytics, and infrastructure expertise, we help organizations create intelligent digital models of physical assets.
              </p>
              
              <h3 id="vision" className="font-bold text-xl text-slate-800 mb-3 mt-8 scroll-mt-28">Our Vision</h3>
              <p className="text-body mb-6">
                To create a digitally intelligent world where every asset—from villages to megacities, from hospitals to industries—is powered by living Digital Twins, setting a global benchmark in smart, sustainable, and resilient development.
              </p>

              <h3 id="mission" className="font-bold text-xl text-slate-800 mb-3 mt-8 scroll-mt-28">Our Mission</h3>
              <p className="text-body mb-8">
                To upgrade, modernize, and revolutionize industries through digital transformation by deploying AI-powered Digital Twins, BIM, and intelligent data ecosystems across critical sectors, enabling smarter decisions, predictive operations, sustainable assets, and full lifecycle value by integrating design, construction, and operations into a unified digital ecosystem.
              </p>

              <h3 id="objective" className="font-bold text-xl text-slate-800 mb-3 mt-8 scroll-mt-28">Our Objective</h3>
              <p className="text-body mb-8">
                To continuously innovate and deliver best-in-class Digital Twin solutions that directly align with our clients' strategic goals, ensuring measurable ROI, enhanced sustainability, and resilient digital architectures.
              </p>

              <div className="bg-[var(--color-siemens-gray-100)] p-6 border-l-4 border-[var(--color-siemens-primary)]">
                <h4 className="font-bold text-lg mb-3">Ecosystem & Collaboration</h4>
                <p className="text-body text-sm mb-4">We collaborate with owners, operators, EPCs, technology providers, academia, and governments to build a strong Digital Twin ecosystem that promotes:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Interoperability', 'Best practices', 'Knowledge sharing', 'Workforce upskilling'].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <FiCheckCircle className="text-[var(--color-siemens-primary)]" /> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Abstract decorative elements */}
              <div className="absolute -inset-4 bg-[var(--color-siemens-gray-100)] -z-10 rounded-sm" />
              
              <div className="space-y-6">
                <img 
                  src={officeImg} 
                  alt="Office" 
                  className="w-full h-48 object-cover rounded-sm shadow-md"
                />
                <img 
                  src={teamworkImg} 
                  alt="Teamwork" 
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img 
                  src={strategyImg} 
                  alt="Strategy" 
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
                <div className="w-full h-48 bg-[var(--color-siemens-primary)] rounded-sm flex items-center justify-center p-6 shadow-md">
                  <span className="text-white font-bold text-xl text-center leading-tight">
                    Simulate scenarios, predict failures, and improve operational performance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Impact / Stats */}
      <section className="py-20 bg-[var(--color-siemens-secondary)] relative overflow-hidden">
        <div className={`absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay`} style={{ backgroundImage: `url(${earthImg})` }} />
        <Container className="relative z-10">
          <Grid columns={4} gap={8} className="text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 border-l-2 border-slate-700/20">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-700 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Use Cases - Newly Added from Content Doc */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Use Cases</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Digital twins deliver measurable value across a wide spectrum of physical environments and organizational lifecycles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-sky-50 rounded-sm border border-transparent hover:border-[var(--color-siemens-primary)] transition-colors">
                <div className="bg-[var(--color-siemens-primary)] w-3 h-3 rounded-full shrink-0" />
                <span className="font-semibold text-slate-800">{useCase}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutOverview;

import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import CTA from '../components/common/CTA';
import { FiCpu, FiDatabase, FiLock, FiSettings } from 'react-icons/fi';
import servicesHeroImg from '../assets/images/services/hero.jpg';
import securityImg from '../assets/images/services/security.jpg';
import officeImg from '../assets/images/shared/office.jpg';
import serversImg from '../assets/images/services/servers.jpg';
import labImg from '../assets/images/services/lab.jpg';

const Services = () => {

  return (
    <main>
      <Hero 
        title="Industries We Support"
        subtitle="Each industry solution combines digital engineering, data analytics, and intelligent monitoring platforms."
        image={servicesHeroImg}
        height="min-h-[80vh] lg:min-h-[60vh]"
      />
      
      <ServicesOverview />

      {/* Deep Dive Services Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader title="Digital Twins for Infrastructure" subtitle="Deep Dive" />
          
          <div className="space-y-24 mt-16">
            <ServiceRow 
              title="Digital Twin Strategy & Roadmaps"
              description="Develop Digital Twin frameworks and transformation roadmaps tailored to your organizational goals. We assess your Digital Twin readiness, define a clear business case and ROI, and establish an Enterprise Digital Twin architecture."
              icon={FiCpu}
              image={securityImg}
              reverse={false}
              items={['Readiness Assessment', 'ROI Definition', 'Enterprise Architecture']}
            />
            
            <ServiceRow 
              title="BIM & Data Foundation"
              description="Build standardized data environments and asset information models (AIM). Our approach ensures seamless alignment with ISO 19650 and open standards, establishing a single source of truth for all asset information."
              icon={FiDatabase}
              image={officeImg}
              reverse={true}
              items={['BIM Standards', 'ISO 19650 Alignment', 'Asset Information Models']}
            />
            
            <ServiceRow 
              title="Platform Implementation & Integration"
              description="Deploy scalable Digital Twin platforms via Autodesk Tandem, ACC, and custom IoT platforms. We integrate directly with ERP, CMMS, BMS, and SCADA via cloud-based and scalable architectures."
              icon={FiSettings}
              image={serversImg}
              reverse={false}
              items={['IoT Integration', 'ERP & SCADA connectivity', 'Cloud Architectures']}
            />

            <ServiceRow 
              title="AI & Advanced Analytics"
              description="Generate predictive insights and operational intelligence. Leverage AI-driven insights and simulations alongside predictive maintenance models and decision intelligence dashboards to outmaneuver operational risks."
              icon={FiCpu}
              image={labImg}
              reverse={true}
              items={['Predictive Maintenance', 'AI Simulations', 'Intelligence Dashboards']}
            />

            <ServiceRow 
              title="Operations & Lifecycle Enablement"
              description="Empower your facilities and O&M with a continuous improvement framework. Monitor asset performance continuously and build a persistent Digital Twin tailored exactly for long-term facilities management."
              icon={FiLock}
              image={officeImg}
              reverse={false}
              items={['Facilities O&M', 'Performance Monitoring', 'Continuous Improvement']}
            />
          </div>
        </Container>
      </section>

      <CTA 
        title="Explore our Use Cases"
        subtitle="Smart Buildings, Energy Optimization, Preventive Maintenance, and more."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  );
};

const ServiceRow = ({ title, description, icon: Icon, image, reverse, items = ['Scalable Design', '24/7 Monitoring', 'Seamless Integration'] }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
    <div className="lg:w-1/2">
      <div className="text-[var(--color-siemens-primary)] mb-6 flex items-center justify-center w-16 h-16 bg-sky-50 rounded-sm">
        <Icon size={32} />
      </div>
      <h3 className="text-3xl font-bold text-slate-900 mb-6">{title}</h3>
      <p className="text-slate-600 text-lg leading-relaxed mb-8">{description}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm uppercase tracking-wider">
            <div className="w-2 h-2 bg-[var(--color-siemens-accent)] rounded-full" /> {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:w-1/2 w-full h-[400px] shadow-xl overflow-hidden group bg-gray-100">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-125" />
    </div>
  </div>
);

export default Services;

import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import Grid from '../common/Grid';
import Card from '../common/Card';
import { FiMonitor, FiSettings, FiZap, FiHeart, FiGlobe } from 'react-icons/fi';

const services = [
  {
    icon: FiMonitor,
    title: 'Built Environment & Infrastructure',
    description: 'Smart buildings, cities, airports, transportation, and infrastructure systems.',
    linkTo: '/services#infrastructure'
  },
  {
    icon: FiSettings,
    title: 'Industrial & Manufacturing',
    description: 'Factories, production facilities, and industrial operations optimization.',
    linkTo: '/services#industrial'
  },
  {
    icon: FiZap,
    title: 'Energy & Utilities',
    description: 'Power generation, renewable energy, and intelligent distribution systems.',
    linkTo: '/services#energy'
  },
  {
    icon: FiHeart,
    title: 'Healthcare & Patient Twins',
    description: 'Hospitals, healthcare infrastructure, and operational intelligence.',
    linkTo: '/services#healthcare'
  },
  {
    icon: FiGlobe,
    title: 'Sustainability & Net-Zero',
    description: 'Energy optimization, carbon tracking, and sustainable infrastructure.',
    linkTo: '/services#sustainability'
  }
];

const ServicesOverview = () => {
  return (
    <section className="bg-[var(--color-siemens-gray-100)] section-padding">
      <Container>
        <SectionHeader 
          title="Digital Twins for Every Industry" 
          subtitle="Our Industries"
        />

        <p className="text-center text-body max-w-3xl mx-auto mb-12">
          Digital Twins enable organizations to improve operational performance and gain real-time insights across complex systems.
        </p>

        <Grid columns={3} gap={6}>
          {services.map((service, index) => (
            <Card 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              linkTo={service.linkTo}
              className="h-full"
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ServicesOverview;

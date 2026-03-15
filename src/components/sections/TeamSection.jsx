import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import Grid from '../common/Grid';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import leadership1 from '../../assets/images/team/leadership1.jpg';
import leadership2 from '../../assets/images/team/leadership2.jpg';
import leadership3 from '../../assets/images/team/leadership3.jpg';

const teamMembers = [
  {
    name: 'Alexandra Wright',
    role: 'Chief Executive Officer',
    image: leadership2,
    bio: 'Former VP at tech giant, driving our strategic vision for 10 years.'
  },
  {
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: leadership3,
    bio: 'Pioneering our scalable cloud architectures and AI integrations.'
  },
  {
    name: 'Sophia Patel',
    role: 'Head of Operations',
    image: leadership1,
    bio: 'Ensuring global delivery excellence and customer success.'
  },
  {
    name: 'James Harrison',
    role: 'VP of Cybersecurity',
    image: leadership2,
    bio: 'Securing enterprise infrastructure against advanced threats.'
  }
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-[var(--color-siemens-gray-100)]">
      <Container>
        <SectionHeader 
          title="Executive Leadership" 
          subtitle="Our Team"
        />

        <Grid columns={4} gap={6}>
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border-b-4 border-[var(--color-siemens-primary)] shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-[var(--color-siemens-primary)] font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-[var(--color-siemens-primary)] transition-colors"><FiLinkedin size={18} /></a>
                  <a href="#" className="hover:text-[var(--color-siemens-primary)] transition-colors"><FiTwitter size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default TeamSection;

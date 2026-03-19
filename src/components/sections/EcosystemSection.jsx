import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { FiCheckCircle } from 'react-icons/fi';

/**
 * Expanded Ecosystem & Collaboration section with Key Focus Areas.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.introText
 * @param {Array}  props.focusAreas – [{ title, items: string[] }]
 */

const defaultFocusAreas = [
  {
    title: 'Interoperability',
    items: [
      'Seamless integration across BIM, IoT, AI, and enterprise systems',
      'Open standards and data exchange for connected ecosystems',
    ],
  },
  {
    title: 'Innovation Enablement',
    items: [
      'Co-creation of advanced Digital Twin solutions',
      'Adoption of emerging technologies including AI and automation',
    ],
  },
  {
    title: 'Knowledge Sharing',
    items: [
      'Best practices, frameworks, and implementation standards',
      'Industry-wide collaboration and learning',
    ],
  },
  {
    title: 'Workforce Upskilling',
    items: [
      'Training programs for Digital Twin, BIM, and AI technologies',
      'Building future-ready professionals and digital engineers',
    ],
  },
  {
    title: 'Cross-Industry Collaboration',
    items: [
      'Partnerships across infrastructure, healthcare, energy, and manufacturing',
      'Unified approach to Digital Twin deployment',
    ],
  },
  {
    title: 'Ecosystem Integration',
    items: [
      'Connecting stakeholders through a centralized platform (TwinOS)',
      'Enabling data-driven collaboration across the asset lifecycle',
    ],
  },
  {
    title: 'Global Adoption Acceleration',
    items: [
      'Driving Digital Twin transformation at scale',
      'Supporting organizations in transitioning to intelligent, connected systems',
    ],
  },
];

const defaultIntroText =
  'We foster a global Digital Twin ecosystem by collaborating with asset owners, operators, EPCs, technology partners, academia, and governments—enabling interoperability, driving innovation, sharing knowledge, and upskilling the workforce to accelerate the adoption of intelligent, AI-powered Digital Twins through TwinOS.';

const EcosystemSection = ({
  title = 'Ecosystem & Collaboration',
  subtitle = 'Key Focus Areas',
  introText = defaultIntroText,
  focusAreas = defaultFocusAreas,
}) => {
  return (
    <section className="section-padding bg-[#f0f7ff]" id="ecosystem">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <p className="text-center text-body max-w-4xl mx-auto mb-14">
          {introText}
        </p>

        <p className="text-center text-slate-500 text-sm max-w-3xl mx-auto mb-10">
          This collaborative ecosystem ensures that Digital Twin technologies
          are not implemented in isolation but are integrated seamlessly across
          stakeholders, creating a unified, data-driven environment that
          enhances decision-making, operational efficiency, and lifecycle value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-[var(--color-siemens-primary)] hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-lg text-slate-900 mb-4">
                {area.title}
              </h4>
              <ul className="space-y-2">
                {area.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <FiCheckCircle
                      className="text-[var(--color-siemens-primary)] mt-0.5 shrink-0"
                      size={15}
                    />
                    <span className="text-slate-600 text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;

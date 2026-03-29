import React from 'react';
import Container from '@presentation/components/layout/Container';
import SectionHeader from '@presentation/components/common/SectionHeader';
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



const defaultIntroText =
  'We foster a global Digital Twin ecosystem by collaborating with asset owners, operators, EPCs, technology partners, academia, and governments—enabling interoperability, driving innovation, sharing knowledge, and upskilling the workforce to accelerate the adoption of intelligent, AI-powered Digital Twins through DTwinOS.';

const EcosystemSection = ({
  title = 'Ecosystem & Collaboration',
  introText = defaultIntroText,
}) => {
  return (
    <section className="py-20 md:py-24 bg-[#f0f7ff]" id="ecosystem">
      <Container>
        <SectionHeader title={title} subtitle="" />

        <p className="text-center text-body max-w-4xl mx-auto mb-14">
          {introText}
        </p>
      </Container>
    </section>
  );
};

export default EcosystemSection;

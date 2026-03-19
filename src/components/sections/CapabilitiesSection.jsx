import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { FiChevronRight } from 'react-icons/fi';

/**
 * Reusable tabbed capabilities section.
 *
 * @param {Object}   props
 * @param {string}   props.sectionTitle
 * @param {string}   props.sectionSubtitle
 * @param {string}   props.introText
 * @param {Array}    props.groups – [{ icon, title, items: string[] }]
 */
const CapabilitiesSection = ({
  sectionTitle = 'Our Capabilities',
  sectionSubtitle = 'Core Capabilities',
  introText = '',
  groups = [],
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-white" id="capabilities">
      <Container>
        <SectionHeader title={sectionTitle} subtitle={sectionSubtitle} />

        {introText && (
          <p className="text-center text-body max-w-3xl mx-auto mb-14">
            {introText}
          </p>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab list */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {groups.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-3 px-5 py-4 text-left rounded-sm font-semibold text-sm whitespace-nowrap transition-all duration-300 shrink-0
                  ${
                    activeTab === i
                      ? 'bg-[var(--color-siemens-primary)] text-white shadow-lg'
                      : 'bg-[var(--color-siemens-gray-100)] text-slate-700 hover:bg-sky-50'
                  }`}
              >
                <span className="text-lg">{g.icon}</span>
                {g.title}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="lg:w-2/3 bg-[var(--color-siemens-gray-100)] rounded-sm p-8 md:p-10 min-h-[300px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{groups[activeTab]?.icon}</span>
              <h3 className="text-2xl font-bold text-slate-900">
                {groups[activeTab]?.title}
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groups[activeTab]?.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 bg-white p-4 rounded-sm shadow-sm border border-gray-50 hover:border-[var(--color-siemens-primary)] transition-colors"
                >
                  <FiChevronRight
                    className="text-[var(--color-siemens-primary)] mt-0.5 shrink-0"
                    size={16}
                  />
                  <span className="text-slate-700 text-sm font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CapabilitiesSection;

import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { FiChevronDown } from 'react-icons/fi';

/**
 * Reusable grid of expandable value-proposition cards.
 *
 * @param {Object}   props
 * @param {string}   props.sectionTitle    – Section heading
 * @param {string}   props.sectionSubtitle – Small label above heading
 * @param {Array}    props.items           – [{ icon, title, description }]
 * @param {number}   [props.columns=3]     – Grid columns on desktop
 */
const ValuePropositionGrid = ({
  sectionTitle = 'Why Partner With Us?',
  sectionSubtitle = 'Our Value',
  items = [],
  columns = 3,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const colClass =
    columns === 4
      ? 'md:grid-cols-2 lg:grid-cols-4'
      : columns === 2
      ? 'md:grid-cols-2'
      : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="section-padding bg-[var(--color-siemens-gray-100)]">
      <Container>
        <SectionHeader title={sectionTitle} subtitle={sectionSubtitle} />

        <div className={`grid grid-cols-1 ${colClass} gap-5 mt-12`}>
          {items.map((item, i) => {
            const isOpen = expandedIndex === i;
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`text-left w-full rounded-sm border transition-all duration-300 group
                  ${
                    isOpen
                      ? 'bg-[var(--color-siemens-primary)] text-white border-[var(--color-siemens-primary)] shadow-xl scale-[1.02]'
                      : 'bg-white text-slate-800 border-gray-100 hover:border-[var(--color-siemens-primary)] hover:shadow-lg'
                  }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-2xl shrink-0 mt-0.5 transition-colors ${
                          isOpen ? 'opacity-90' : ''
                        }`}
                      >
                        {item.icon}
                      </span>
                      <h4
                        className={`font-bold text-base leading-snug ${
                          isOpen ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <FiChevronDown
                      className={`shrink-0 mt-1 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white/70' : 'text-slate-400'
                      }`}
                      size={18}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p
                      className={`text-sm leading-relaxed ${
                        isOpen ? 'text-white/85' : 'text-slate-600'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ValuePropositionGrid;

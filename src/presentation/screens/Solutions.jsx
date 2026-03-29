import React from 'react';
import Hero from '@presentation/components/sections/Hero';
import SectionHeader from '@presentation/components/common/SectionHeader';
import Container from '@presentation/components/layout/Container';
import PlatformSection from '@presentation/components/sections/PlatformSection';
import CTA from '@presentation/components/common/CTA';
import { solutionsCapabilities } from '@data/solutionsData';
import { motion } from 'framer-motion';

const solutionsHeroImg = "/images/unsplash/solutions-hero.jpg";

const Solutions = () => {

  return (
    <main>
      <Hero
        title="What We Deliver"
        image={solutionsHeroImg}
        height="min-h-[70vh] lg:min-h-[50vh]"
      />

      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <SectionHeader title="Core Capabilities" showDivider={false} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-1.5 bg-[var(--color-siemens-primary)] mx-auto mb-8 rounded-full"
            />
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Empowering the Future with Intelligent Digital Twins — At The Digital Twin Experts, powered by DTwinOS, we deliver end-to-end capabilities that unify data, systems, and assets into a single intelligent ecosystem — transforming how organizations design, build, and operate their assets across the entire lifecycle.
            </p>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {solutionsCapabilities.map((cap, i) => {
              const reverse = i % 2 !== 0;
              return (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Image Side - Proportioned */}
                  <div className="w-full lg:w-5/12">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3] w-full">
                      <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-7/12">
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">
                      {cap.title}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      {cap.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <svg className="w-6 h-6 text-[var(--color-siemens-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-slate-700 font-medium text-[15px] leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to transform your operations?"
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default Solutions;

import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/layout/Container';
import PlatformSection from '../components/sections/PlatformSection';
import CTA from '../components/common/CTA';
import aboutHeroImg from '../assets/images/about/hero.jpg';
import { whyUsPoints } from '../data/whyUsData';

const WhyUs = () => {
  return (
    <main>
      <Hero
        title="The TDTE Advantage"
        subtitle="Why Partner With The Digital Twin Experts?"
        image={aboutHeroImg}
        height="min-h-[60vh] lg:min-h-[40vh]"
      />

      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">Unmatched Value</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              19 Reasons To Choose Us
            </h3>
            <div className="w-16 h-1 mt-6 bg-[var(--color-siemens-primary)] mx-auto rounded-full" />
            <p className="mt-8 text-lg text-slate-600">
              End-to-end Digital Twin expertise, AI-powered platforms, and proven industry experience that delivers measurable results.
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            {whyUsPoints.map((point, i) => {
              const reverse = i % 2 !== 0;
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Image Side - Smaller Proportion */}
                  <div className="w-full md:w-5/12 lg:w-4/12">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
                      <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img 
                        src={point.image} 
                        alt={point.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content Side - Larger Proportion */}
                  <div className="w-full md:w-7/12 lg:w-8/12">
                    <div className="flex items-start md:items-center gap-4 mb-3 md:mb-4">
                      <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-lg md:text-xl shrink-0 shadow-sm">
                        {i + 1}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {point.title}
                      </h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed pl-14 md:pl-16">
                      {point.description}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Transform Your Assets?"
        subtitle="Partner with us to unlock the full potential of Digital Twin technology for your organization."
        buttonText="Book Consultation"
        buttonLink="/contact"
      />
    </main>
  );
};

export default WhyUs;

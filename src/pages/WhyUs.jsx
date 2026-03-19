import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';
import aboutHeroImg from '../assets/images/about/hero.jpg';
import { whyUsCards } from '../data/whyUsData';

const WhyUs = () => {
  return (
    <main>
      <Hero
        title="Why Partner With The Digital Twin Experts?"
        subtitle="End-to-end Digital Twin expertise, AI-powered platforms, and proven industry experience that delivers measurable results."
        image={aboutHeroImg}
        height="min-h-[60vh] lg:min-h-[40vh]"
      />

      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">The TDTE Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Why Partner With The Digital Twin Experts?
            </h3>
            <div className="w-16 h-1 mt-6 bg-[var(--color-siemens-primary)] mx-auto rounded-full" />
          </div>

          <Grid columns={3} gap={6}>
            {whyUsCards.map((card, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[var(--color-siemens-primary)] flex items-center justify-center shrink-0 border border-sky-100 shadow-sm group-hover:scale-110 group-hover:bg-[var(--color-siemens-primary)] group-hover:text-white transition-all duration-300">
                    <card.icon size={26} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {card.title}
                </h4>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-auto group-hover:text-slate-700 transition-colors">
                  {card.desc}
                </p>
              </div>
            ))}
          </Grid>
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

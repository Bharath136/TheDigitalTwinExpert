import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/common/SectionHeader';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import CTA from '../components/common/CTA';

// Using a placeholder image since insights/hero.jpg doesn't exist yet
const insightsHeroImg = "/images/unsplash/insights-hero.jpg";

const categories = ['All', 'Blogs', 'Case Studies', 'Whitepapers', 'Industry Trends'];

const insightsData = [
  { id: 1, type: 'Blogs', title: 'How AI is Reshaping AEC Workflows', date: 'March 15, 2026', readTime: '5 min read' },
  { id: 2, type: 'Case Studies', title: 'Smart Hospital: A 20% Energy Reduction', date: 'February 28, 2026', readTime: '8 min read' },
  { id: 3, type: 'Whitepapers', title: 'The ISO 19650 Guide to Digital Twins', date: 'January 10, 2026', readTime: '15 min read' },
  { id: 4, type: 'Industry Trends', title: 'Why Predictive Maintenance is the New Standard', date: 'April 02, 2026', readTime: '6 min read' },
  { id: 5, type: 'Blogs', title: 'The ROI of Digital Handover', date: 'March 05, 2026', readTime: '4 min read' },
  { id: 6, type: 'Case Studies', title: 'Optimizing Rail Networks with DTwinOS TDT', date: 'November 12, 2025', readTime: '10 min read' },
];

const Insights = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredData = activeTab === 'All' 
    ? insightsData 
    : insightsData.filter((item) => item.type === activeTab);

  return (
    <main>
      <Hero
        title="Insights & Resources"
        subtitle="Stay informed with the latest thinking, research, and success stories in Digital Twin technology."
        image={insightsHeroImg}
        height="min-h-[60vh] lg:min-h-[50vh]"
      />

      {/* Featured Section: Future of Digital Twins */}
      <section className="bg-[var(--color-siemens-primary)] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/unsplash/earth.jpg')] bg-cover bg-center"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sky-300 font-bold tracking-widest uppercase text-sm mb-4 block">Featured Spotlight</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Future of Digital Twins</h2>
            <p className="text-lg md:text-xl text-sky-50 leading-relaxed mb-10">
              Digital Twins are reshaping how we design, build, and operate everything from individual buildings to entire cities. 
              As AI and IoT technologies advance, the potential for intelligent, self-learning infrastructure becomes limitless. 
              Explore our deep-dive into the next decade of spatial intelligence.
            </p>
            <button className="px-8 py-3 bg-white text-[var(--color-siemens-primary)] rounded-full font-bold hover:bg-sky-50 transition-colors shadow-lg shadow-[var(--color-siemens-primary)]/50">
              Read the Full Report
            </button>
          </div>
        </Container>
      </section>

      {/* Hub Categories */}
      <section className="section-padding bg-slate-50">
        <Container>
          <SectionHeader title="Knowledge Base" subtitle="Explore Our Content Hub" align="center" />
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === cat 
                    ? 'bg-[var(--color-siemens-primary)] text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-sky-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <Grid columns={3} gap={6}>
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white border text-left border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="bg-slate-100 h-48 w-full border-b border-gray-100 overflow-hidden relative">
                  {/* Placeholder block until images are linked */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-siemens-secondary)] to-sky-100 opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[var(--color-siemens-primary)] rounded-full">
                    {item.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-siemens-primary)] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-500 mt-6 border-t border-slate-50 pt-4">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
          
          {filteredData.length === 0 && (
            <div className="text-center py-20 text-slate-500 text-lg">
              No content found for "{activeTab}" yet. Check back soon.
            </div>
          )}
        </Container>
      </section>
      
      <CTA title="Subscribe to Insights" subtitle="Get the latest articles delivered straight to your inbox." buttonText="Subscribe Now" buttonLink="/contact"/>
    </main>
  );
};

export default Insights;

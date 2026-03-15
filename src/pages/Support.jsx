import React from 'react';
import Container from '../components/layout/Container';
import SectionHeader from '../components/common/SectionHeader';

const Support = () => {
  return (
    <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <Container>
        <SectionHeader title="News & Updates" subtitle="Support" />
        <div className="bg-white p-8 rounded-sm shadow-sm md:p-12 text-center border-t-4 border-[var(--color-siemens-primary)] mt-8">
          <svg className="w-16 h-16 text-[var(--color-siemens-primary)] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5L18.5 8H20"></path>
          </svg>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Latest Insights & Developments</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Stay tuned for the latest updates, case studies, and insights from The Digital Twin Experts.
          </p>
          <button className="bg-[var(--color-siemens-primary)] hover:bg-sky-600 text-white px-6 py-3 rounded-sm font-semibold transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </Container>
    </main>
  );
};

export default Support;

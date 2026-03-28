import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/layout/Container';
import SectionHeader from '../components/common/SectionHeader';
import { FiTarget, FiBarChart2, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Carbon Tracking & Reporting",
      description: "Real-time monitoring of carbon emissions across entire asset lifecycles, enabling accurate ESG reporting and compliance.",
      icon: <FiBarChart2 className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Net-Zero Pathway Analytics",
      description: "AI-powered simulations to identify the most efficient routes to net-zero, optimizing energy consumption and waste reduction.",
      icon: <FiTarget className="w-8 h-8" />,
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Circular Economy Optimization",
      description: "Digital twins help manage material lifecycles, reducing resource extraction and promoting sustainable reuse strategies.",
      icon: <FiGlobe className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "ESG Performance Monitoring",
      description: "Comprehensive dashboards that integrate Environmental, Social, and Governance metrics into core operational intelligence.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <main>
      <Hero
        title="Sustainability & Net-Zero Transformation"
        subtitle="Leveraging Digital Twin intelligence to accelerate the transition to a sustainable, low-carbon future."
        image="/images/unsplash/forest.jpg"
        height="min-h-[70vh]"
      />

      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            title="Building a Greener Future with DTwinOS"
            subtitle="Our Sustainability Twin (SDT) platform transforms environmental goals into measurable operational outcomes."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 leading-tight">Decarbonizing the <span className="text-[var(--color-siemens-primary)]">Built Environment</span></h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                The built environment accounts for nearly 40% of global carbon emissions. Our Digital Twin solutions provide the visibility needed to optimize HVAC systems, improve building envelope performance, and integrate renewable energy sources.
              </p>
              <ul className="space-y-4">
                {[
                  "Predictive energy optimization",
                  "Real-time resource management",
                  "Embodied carbon analysis",
                  "Automated ESG compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-siemens-primary)]" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/unsplash/solar-panels.jpg"
                  alt="Renewable Energy Management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-siemens-primary)] p-8 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">30%+</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Avg. Energy Savings</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="bg-[var(--color-siemens-primary)] rounded-3xl p-12 lg:p-20 relative text-white text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to accelerate your net-zero journey?</h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Connect with our sustainability experts to discover how DTwinOS can help you achieve your environmental goals while improving operational efficiency.
              </p>
              <button
                className="px-10 py-4 bg-white text-[var(--color-siemens-primary)] font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Strategy Call
              </button>
            </div>
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Sustainability;

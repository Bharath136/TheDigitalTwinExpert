import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import Grid from '../components/common/Grid';
import Button from '../components/common/Button';
import { industryData } from '../data/industryData';

const IndustryDetail = () => {
  const { id } = useParams();
  const industry = industryData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <main>
      {/* SECTION 1 — Full-Width Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={industry.img} alt={industry.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <Container className="relative z-10 w-full">
          <div className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[var(--color-siemens-primary)]">{industry.name}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md leading-tight">
              {industry.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              {industry.desc}
            </p>
            <Button to="/contact" variant="primary" size="lg">Contact Us</Button>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — Overcome Industry Challenges */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display leading-tight">
              Overcome {industry.name} Challenges with Intelligent Digital Twins
            </h2>
            <div className="w-16 h-1 mt-6 bg-[var(--color-siemens-primary)] mx-auto rounded-full" />
          </div>
          
          <Grid columns={3} gap={6}>
            {industry.challenges.map((chal, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 border border-red-100">
                  <chal.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{chal.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{chal.desc}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* SECTION 3 — Core Capabilities for This Industry */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-slate-600 text-lg">
              Empowering {industry.name} with purpose-built Digital Twin operational intelligence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {industry.capabilities.map((cap, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-siemens-primary)]">
                    <cap.icon size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{cap.title}</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cap.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-slate-700 text-sm leading-relaxed font-medium">
                      <span className="text-[var(--color-siemens-primary)] mr-2 mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4 — DTwinOS Solution for This Industry */}
      <section className="py-24 bg-[var(--color-siemens-secondary)] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="bg-white rounded-xl shadow-2xl p-10 md:p-14 max-w-4xl mx-auto border-t-8 border-[var(--color-siemens-primary)] text-center">
            <span className="text-6xl mb-6 block">{industry.twinLogo}</span>
            <span className="text-[var(--color-siemens-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">
              Powered by DTwinOS
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              {industry.twinName} ({industry.twinAcronym})
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {industry.twinDesc}
            </p>
            <Button to={industry.twinLink} variant="primary" size="lg" className="shadow-lg shadow-sky-500/30">
              Explore DTwinOS Solution →
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — CTA Footer Banner */}
      <section className="py-20 bg-[var(--color-siemens-primary)]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Transform {industry.name} with Digital Twins?
              </h2>
              <p className="text-white/80 text-lg">
                Talk to our specialists to design your custom intelligent operational architecture.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact" className="inline-block bg-white text-[var(--color-siemens-primary)] font-bold px-8 py-4 rounded-md shadow-lg hover:bg-sky-50 transition-colors uppercase tracking-widest text-sm">
                Request Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
};

export default IndustryDetail;

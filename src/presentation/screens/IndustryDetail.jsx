import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Container from '@presentation/components/layout/Container';
import Button from '@presentation/components/common/Button';
import { industryData } from '@data/industryData';

/* Helper: split "Industry Name" into up to 3 staggered lines for the hero */
const getStaggeredTitle = (name) => {
  // Map industry keys → staggered lines
  const map = {
    'Healthcare':                       ['Overcome Healthcare Challenges', 'with', 'Intelligent Digital Twins'],
    'Industrial & Manufacturing':       ['Overcome Industrial &', 'Manufacturing Challenges with', 'Intelligent Digital Twins'],
    'Energy & Utilities':               ['Overcome Energy &', 'Utilities Challenges with', 'Intelligent Digital Twins'],
    'Smart Cities':                     ['Overcome Smart Cities', 'Challenges with', 'Intelligent Digital Twins'],
    'Built Environment & Infrastructure': ['Overcome Built Environment', 'Challenges with', 'Intelligent Digital Twins'],
    'Transportation':                   ['Overcome Transportation', 'Challenges with', 'Intelligent Digital Twins'],
    'Sustainability & Net-Zero':        ['Overcome Sustainability', 'Challenges with', 'Intelligent Digital Twins'],
  };
  return map[name] || [name, 'with', 'Intelligent Digital Twins'];
};

const IndustryDetail = () => {
  const { id } = useParams();
  const industry = industryData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const [line1, line2, line3] = getStaggeredTitle(industry.name);

  return (
    <main>
      {/* SECTION 1 — Full-Width Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center pt-32 lg:pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={industry.img} alt={industry.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <Container className="relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="relative z-30 text-white/80 text-sm font-semibold uppercase tracking-wider mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[var(--color-siemens-primary)]">{industry.name}</span>
          </div>

          {/* Title — centered */}
          <div className="text-center w-full max-w-5xl mx-auto mt-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}
            >
              <span className="block mb-2">{line1}</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-2">{line2}</span>
              <span className="block text-[var(--color-siemens-primary)]">{line3}</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — 4 Solutions Cards */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-slate-600 leading-relaxed">{industry.desc}</p>
            <div className="w-16 h-1 mt-8 bg-[var(--color-siemens-primary)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-red-50 text-red-400 rounded-full flex items-center justify-center mb-6 border border-red-100">
                  <sol.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight">{sol.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{sol.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — DTwinOS Solution for This Industry */}
      <section className="py-20 md:py-24 bg-[var(--color-siemens-secondary)] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="bg-white rounded-xl shadow-2xl p-10 md:p-14 max-w-4xl mx-auto border-t-8 border-[var(--color-siemens-primary)] text-center">
            <span className="text-6xl mb-6 block">{industry.twinLogo}</span>
            <span className="text-[var(--color-siemens-primary)] font-bold tracking-widest text-sm mb-4 block">
              <span className="uppercase">Powered by</span> DTwinOS
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

      {/* SECTION 4 — CTA Footer Banner */}
      <section className="py-20 md:py-24 bg-[var(--color-siemens-primary)]">
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
              <Link
                to="/contact"
                className="inline-block bg-white text-[var(--color-siemens-primary)] font-bold px-8 py-4 rounded-md shadow-lg hover:bg-sky-50 transition-colors uppercase tracking-widest text-sm"
              >
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

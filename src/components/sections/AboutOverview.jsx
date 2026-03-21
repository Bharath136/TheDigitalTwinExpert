import React from 'react';
import Container from '../layout/Container';
import { FiEye, FiTarget, FiZap } from 'react-icons/fi';
import officeImg from '../../assets/images/shared/office.jpg';
import teamworkImg from '../../assets/images/about/teamwork.jpg';
import strategyImg from '../../assets/images/about/strategy.jpg';
import earthImg from '../../assets/images/shared/earth.jpg';
import visionImg from '../../assets/images/about/vision.jpg';
import missionImg from '../../assets/images/about/mission.jpg';
import objectiveImg from '../../assets/images/about/objective.jpg';

const useCases = [
  "Smart Buildings & Campuses",
  "Infrastructure Asset Management",
  "Energy Optimization & Carbon Reduction",
  "Predictive Maintenance",
  "Capital Project Performance",
  "Government & Public Asset Digitization"
];

const stats = [
  { value: 'Global', label: 'Platform Initiative' },
  { value: 'IoT & AI', label: 'Core Integration' },
  { value: 'Net-Zero', label: 'Sustainability Goal' },
  { value: 'Lifecycle', label: 'Asset Management' }
];

/* ─────────────────────────────────────────────────────────── */
/* Reusable alternating-split section                          */
/* ─────────────────────────────────────────────────────────── */
const VMOSection = ({
  id,
  tag,
  Icon,
  accent,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  bgClass = 'bg-white',
}) => (
  <section id={id} className={`scroll-mt-28 ${bgClass}`}>
    {/* full-bleed image banner */}
    <div className="w-full h-72 md:h-96 relative overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      {/* gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(2,20,55,0.45) 0%, rgba(2,20,55,0.72) 100%)',
        }}
      />
      {/* pill + headline on the banner */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          style={{ background: accent, color: '#fff' }}
        >
          <Icon size={14} /> {tag}
        </span>
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl drop-shadow-lg">
          {title}
        </h2>
      </div>
    </div>

    {/* text content strip */}
    <div className="py-14 border-b border-slate-100">
      <Container>
        <div
          className={`flex flex-col ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-10 items-start`}
        >
          {/* accent bar */}
          <div
            className="hidden md:block w-1.5 shrink-0 self-stretch rounded-full"
            style={{ background: accent }}
          />
          <div className="flex-1 text-body text-slate-600 leading-relaxed text-lg">
            {children}
          </div>
        </div>
      </Container>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────── */
/* Main component                                              */
/* ─────────────────────────────────────────────────────────── */
const AboutOverview = () => {
  return (
    <>
      {/* ── Intro strip ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                id="what-is-tdte"
                className="heading-section text-slate-900 mb-6 scroll-mt-28 text-3xl font-bold"
              >
                What Is The Digital Twin Experts?
              </h2>
              <div className="h-1 w-24 bg-[var(--color-siemens-primary)] mb-8" />
              <p className="text-body mb-10 text-lg leading-relaxed text-slate-700">
                At The Digital Twin Experts, we unify BIM, AI, and Digital Twin
                technologies into a single intelligent ecosystem—enabling
                organizations to design smarter, build faster, and operate more
                efficiently across the entire asset lifecycle.
              </p>

              <h2
                id="who-we-are"
                className="heading-section text-slate-900 mb-6 scroll-mt-28 text-3xl font-bold"
              >
                Who We Are
              </h2>
              <div className="h-1 w-24 bg-[var(--color-siemens-primary)] mb-8" />
              <p className="text-body mb-6 text-lg leading-relaxed text-slate-700">
                We are a global Digital Twin transformation company specializing
                in AI-powered ecosystems for infrastructure, cities, healthcare,
                energy, and industry. Our platform, DTwinOS, acts as the
                operating system for Digital Twins, connecting data, systems,
                and assets into one intelligent, unified environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute -inset-4 bg-[var(--color-siemens-gray-100)] -z-10 rounded-sm" />
              <div className="space-y-6">
                <img
                  src={officeImg}
                  alt="Office"
                  className="w-full h-48 object-cover rounded-sm shadow-md"
                />
                <img
                  src={teamworkImg}
                  alt="Teamwork"
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src={strategyImg}
                  alt="Strategy"
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
                <div className="w-full h-48 bg-[var(--color-siemens-primary)] rounded-sm flex items-center justify-center p-6 shadow-md">
                  <span className="text-white font-bold text-xl text-center leading-tight">
                    Simulate scenarios, predict failures, and improve operational
                    performance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Our Vision ──────────────────────────────────────── */}
      <VMOSection
        id="vision"
        tag="Our Vision"
        Icon={FiEye}
        accent="#009999"
        title="A Digitally Intelligent World"
        image={visionImg}
        imageAlt="Smart city digital twin vision"
        bgClass="bg-[#f0fafa]"
      >
        We exist to create a digitally intelligent world by unifying data
        across the physical and digital domains into a single intelligent
        Digital Twin ecosystem, enabling smarter decisions, predictive
        operations, and sustainable asset lifecycle management across all
        industries.
      </VMOSection>

      {/* ── Our Mission ─────────────────────────────────────── */}
      <VMOSection
        id="mission"
        tag="Our Mission"
        Icon={FiTarget}
        accent="#0070f3"
        title="Revolutionizing Industries Through Digital Transformation"
        image={missionImg}
        imageAlt="Engineering team collaborating on digital twin mission"
        bgClass="bg-white"
        reverse
      >
        Through AI-powered Digital Twins, BIM, and intelligent data
        integration, we design, build, and operate a connected future —
        transforming assets from villages to megacities into living,
        self-optimizing systems powered by TwinOS.
      </VMOSection>

      {/* ── Our Objective ───────────────────────────────────── */}
      <VMOSection
        id="objective"
        tag="Our Objective"
        Icon={FiZap}
        accent="#16a34a"
        title="Delivering Measurable ROI & Resilient Architectures"
        image={objectiveImg}
        imageAlt="Digital twin dashboard showing objectives and ROI"
        bgClass="bg-[#f0fdf4]"
      >
        To create a unified intelligent ecosystem where all data is connected,
        enabling assets and systems to think, predict, and operate intelligently
        across their entire lifecycle.
      </VMOSection>



      {/* ── Global Impact / Stats ───────────────────────────── */}
      <section className="py-20 bg-[var(--color-siemens-secondary)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${earthImg})` }}
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-slate-800 font-bold uppercase tracking-wider text-[13px] md:text-sm leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Key Use Cases ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Key Use Cases
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Digital twins deliver measurable value across a wide spectrum of
              physical environments and organizational lifecycles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-sky-50 rounded-sm border border-transparent hover:border-[var(--color-siemens-primary)] transition-colors"
              >
                <div className="bg-[var(--color-siemens-primary)] w-3 h-3 rounded-full shrink-0" />
                <span className="font-semibold text-slate-800">{useCase}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutOverview;

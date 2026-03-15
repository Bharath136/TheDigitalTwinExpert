import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { FiCheckCircle, FiLayers, FiDatabase, FiCpu, FiTrendingUp, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

const capabilities = [
  { title: "Digital Twin Strategy", desc: "Develop Digital Twin frameworks and transformation roadmaps.", icon: FiTrendingUp },
  { title: "BIM & Data Foundation", desc: "Build standardized data environments and asset information models.", icon: FiDatabase },
  { title: "Platform Implementation", desc: "Deploy scalable Digital Twin platforms integrated with IoT.", icon: FiLayers },
  { title: "AI & Analytics", desc: "Generate predictive insights and operational intelligence.", icon: FiCpu },
  { title: "Operations & Lifecycle", desc: "Digital Twin for facilities O&M and performance monitoring.", icon: FiSettings }
];

const whyTdte = [
  "Vendor-neutral approach aligned with open standards",
  "Deep BIM + Digital Twin expertise across project lifecycles",
  "Industry-focused solutions, not generic demos",
  "Measurable ROI driven by operational outcomes",
  "Scalable from pilot to enterprise level"
];

const Features = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:w-1/2">
            <SectionHeader 
              title="Our Capabilities" 
              subtitle="Why TDTE"
              centered={false}
            />
            
            <p className="text-body mb-8">
              We bring together strategy, standards, technology, and execution to help organizations move from static assets to intelligent living systems.
            </p>

            <div className="space-y-6 mb-10">
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-sky-50 p-3 rounded-sm text-[var(--color-siemens-primary)]">
                    <cap.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{cap.title}</h4>
                    <p className="text-slate-600 text-sm">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-8 mt-8">
              <h4 className="font-bold text-lg mb-4 text-slate-800">Why Partner With Us?</h4>
              <ul className="space-y-3">
                {whyTdte.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-[var(--color-siemens-primary)] shrink-0" size={18} />
                    <span className="text-slate-700 font-medium text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image side - Abstract / corporate */}
          <div className="lg:w-1/2 relative h-[500px] w-full bg-[#f8f9fa] rounded-tl-[100px] overflow-hidden shadow-2xl">
            {/* Abstract placeholders since images are external */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#009999]/20 to-[#000033]/90 z-10 mix-blend-multiply" />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Corporate architecture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;

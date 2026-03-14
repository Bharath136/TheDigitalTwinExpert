import React from 'react';
import Container from '../layout/Container';
import Button from './Button';
import { motion } from 'framer-motion';

const CTA = ({ 
  title = "Ready to transform your business?", 
  subtitle = "Contact us today to discuss how our solutions can help you achieve your goals and accelerate growth.", 
  buttonText = "Contact Us",
  buttonLink = "/contact",
  className = ""
}) => {
  return (
    <section className={`bg-[var(--color-siemens-secondary)] py-20 relative overflow-hidden ${className}`}>
      {/* Abstract geometric background patterns characteristic of enterprise apps */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10">
        <div className="w-[800px] h-[800px] rounded-full border-[60px] border-[var(--color-siemens-primary)]" />
      </div>
      
      <Container className="relative z-10 text-center text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-section mb-6">{title}</h2>
          <p className="text-slate-700 text-lg md:text-xl mb-10 leading-relaxed">
            {subtitle}
          </p>
          <Button variant="primary" size="lg" to={buttonLink}>
            {buttonText}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;

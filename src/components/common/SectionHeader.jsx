import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, className = '', centered = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--color-siemens-primary)] font-semibold tracking-wider uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="heading-section text-slate-900"
      >
        {title}
      </motion.h2>

      {/* Decorative divider - Siemens style */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 bg-[var(--color-siemens-primary)] mt-6 ${centered ? 'w-24 mx-auto' : 'w-24'}`}
      />
    </div>
  );
};

export default SectionHeader;

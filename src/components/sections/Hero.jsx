import React from 'react';
import Container from '../layout/Container';
import { motion } from 'framer-motion';

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  height = 'min-h-[100vh] lg:min-h-[80vh]', 
  alignment = 'center',
  children,
  overlayOpacity = 'bg-black/40'
}) => {
  const isLeftAligned = alignment === 'left';

  return (
    <section className={`relative ${height} flex items-center pt-32 pb-20 md:py-32 overflow-hidden bg-[var(--color-siemens-secondary)]`}>
      {/* Background Image Output */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-0 ${overlayOpacity}`} />
        </div>
      )}

      {/* Corporate abstract graphic element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-[var(--color-siemens-primary)] to-transparent opacity-20 transform -skew-x-12 z-0" />

      <Container className="relative z-10 w-full">
        <div className={`max-w-4xl ${isLeftAligned ? 'mr-auto text-left' : 'mx-auto text-center'}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-hero text-white mb-6 tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl md:text-2xl text-gray-200 mb-10 ${isLeftAligned ? 'mr-auto' : 'mx-auto'}`}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`flex flex-wrap gap-4 ${isLeftAligned ? 'justify-start' : 'justify-center'}`}
          >
            {children}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

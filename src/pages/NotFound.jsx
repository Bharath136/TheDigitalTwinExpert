import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Container from '../components/layout/Container';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero 
        title="404 - Page Not Found"
        subtitle="The page you are looking for does not exist or has been moved."
        image="/images/unsplash/earth.jpg"
        height="min-h-[80vh]"
      />
      
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lost in the Digital Twin?</h2>
            <p className="text-lg text-slate-600 mb-10">
              We couldn't find the requested URL on our servers. 
            </p>
            <Link 
              to="/" 
              className="inline-block px-8 py-4 bg-[var(--color-siemens-primary)] text-white font-bold rounded-sm hover:bg-sky-600 transition-all shadow-lg"
            >
              Return to Homepage
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default NotFound;

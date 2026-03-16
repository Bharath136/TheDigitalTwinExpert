import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Container from '../components/layout/Container';
import earthImg from '../assets/images/shared/earth.jpg';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero 
        title="Coming Soon"
        subtitle="The page you are looking for is currently under development or does not exist."
        image={earthImg}
        height="min-h-[80vh]"
      />
      
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Discovery in Progress</h2>
            <p className="text-lg text-slate-600 mb-10">
              Our engineers and digital twin experts are working hard to bring this section to life. 
              Please check back soon for updates on our latest innovations and industrial solutions.
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

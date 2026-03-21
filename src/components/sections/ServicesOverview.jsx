import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { servicesData as industries } from '../../data/servicesData';

const ServicesOverview = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle flip state for mobile/touch interaction
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--color-siemens-gray-100)] section-padding">
      <Container>
        <SectionHeader 
          title="Digital Twins for Every Industry" 
          subtitle="Data Centers, Semiconductors, Infrastructure, Building and Life Cycle Management"
        />

        <p className="text-center text-body max-w-3xl mx-auto mb-12">
          Digital Twins enable organizations to improve operational performance and gain real-time insights across complex systems.
        </p>

        {/* CSS 3D Grid: Responsive 4-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => (
            <div 
              key={index} 
              className="group aspect-square sm:aspect-[4/3] md:aspect-[5/4] lg:aspect-square w-full cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(index)}
            >
              <div 
                className={`relative w-full h-full rounded-md transition-transform duration-700 ease-in-out shadow-md ${
                  flippedIndex === index ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* ---------- FRONT ---------- */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden rounded-md"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img src={ind.img} alt={ind.title} className="w-full h-full object-cover" />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    {ind.textOverlay && (
                      <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2 leading-tight">
                        {ind.textOverlay}
                      </p>
                    )}
                    <h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                {/* ---------- BACK ---------- */}
                <div 
                  className="absolute inset-0 w-full h-full bg-[var(--color-siemens-primary)] text-white rounded-md p-5 sm:p-6 flex flex-col overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-lg font-bold mb-3 border-b border-white/20 pb-2 leading-tight">
                    {ind.title}
                  </h3>
                  
                  <ul className="space-y-1.5 sm:space-y-2 mb-auto overflow-y-auto pr-1 pb-2 custom-scrollbar">
                    {ind.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-[13px] sm:text-sm leading-snug text-white/90">
                        <span className="mr-2 mt-0.5 opacity-80 text-xs">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={ind.linkTo} 
                    className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-wider hover:text-sky-200 transition-colors group/link mt-3 pt-2 border-t border-white/10 shrink-0"
                    onClick={(e) => e.stopPropagation()} // Prevent link click from flipping card back
                  >
                    Learn More 
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;

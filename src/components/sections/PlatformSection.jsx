import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

/**
 * Reusable UI Component for Platform Sections.
 * 
 * @param {Object} props - The component props
 * @param {Object} props.data - The data object containing title, subtitle, description, image, features, footerText, and id
 * @param {boolean} props.reverse - Determines the layout order (if true, image is on the right, content on the left)
 * @param {boolean} props.hideLink - If true, the 'Learn More' link is hidden (useful for dedicated detail pages)
 */
const PlatformSection = ({ data, reverse = false, hideLink = false, showFeatures = false }) => {
  const { title, subtitle, description, image, features, footerText, id } = data;

  return (
    <section className={`py-16 md:py-24 ${reverse ? 'bg-slate-50' : 'bg-white'}`} id={id}>
      <Container>
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              {/* Fallback pattern in case image fails to load or is not found */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-sky-400 opacity-20 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-10"></div>
              <img 
                src={image || "/images/unsplash/earth.jpg"} 
                alt={title} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "/images/unsplash/earth.jpg"; // Placeholder fallback
                }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
              {subtitle && <h3 className="text-xl font-semibold text-blue-600 mb-4">{subtitle}</h3>}
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">{description}</p>
            </div>

            {showFeatures && features && features.length > 0 && (
              <div className="mb-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex flex-col p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-bold text-slate-800 mb-1 flex items-start gap-2">
                        <span className="text-blue-500 font-bold">{idx + 1}.</span> 
                        {feature.title}
                      </span>
                      <span className="text-sm text-slate-600 ml-5">{feature.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {footerText && (
              <p className="text-slate-700 font-medium italic mb-6 border-l-4 border-blue-500 pl-4">
                "{footerText}"
              </p>
            )}

            {!hideLink && (
              <Link 
                to={`/platform/${id}`} 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow hover:shadow-lg"
              >
                Learn More About {title}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            )}
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default PlatformSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

const TwinCard = ({ icon, acronym, name, description, link }) => {
  return (
    <Link 
      to={link}
      className="group block p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-siemens-primary)] transition-all duration-300 relative overflow-hidden"
    >
      <div className="flex items-start gap-4">
        {/* Left: Icon/Logo */}
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center text-[var(--color-siemens-primary)] text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Center: Content */}
        <div className="flex-grow pr-8">
          <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[var(--color-siemens-primary)] transition-colors">
            {name} <span className="text-slate-500 font-medium">({acronym})</span>
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Right: Arrow Icon */}
        <div className="absolute top-4 right-4 text-slate-300 group-hover:text-[var(--color-siemens-primary)] transition-colors">
          <FiExternalLink size={20} />
        </div>
      </div>
      
      {/* Hover subtle accent line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-siemens-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Link>
  );
};

export default TwinCard;

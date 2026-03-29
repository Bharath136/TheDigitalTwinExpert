import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({
  title,
  description,
  icon: Icon,
  image,
  linkTo,
  linkText = 'Learn more',
  className = ''
}) => {
  return (
    <div className={`bg-white group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      )}

      <div className="p-8">
        {Icon && (
          <div className="text-[var(--color-siemens-primary)] mb-6 bg-sky-50 w-16 h-16 flex items-center justify-center rounded-sm">
            <Icon size={32} />
          </div>
        )}

        <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[var(--color-siemens-primary)] transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {linkTo && (
          <Link
            to={linkTo}
            className="inline-flex items-center text-[var(--color-siemens-primary)] font-semibold hover:text-[#007a7a] transition-colors"
          >
            {linkText}
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;

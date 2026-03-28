import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  icon: Icon
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out';
  
  const variants = {
    primary: 'bg-[var(--color-siemens-primary)] text-white hover:brightness-110',
    secondary: 'bg-[var(--color-siemens-secondary)] text-slate-900 hover:brightness-95',
    outline: 'border-2 border-[var(--color-siemens-primary)] text-[var(--color-siemens-primary)] hover:bg-[var(--color-siemens-primary)] hover:text-white',
    text: 'text-[var(--color-siemens-primary)] hover:brightness-110 hover:underline underline-offset-4',
    white: 'bg-white text-[var(--color-siemens-primary)] hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const hasVariantPadding = variant !== 'text';
  const appliedClasses = `${baseStyles} ${variants[variant]} ${hasVariantPadding ? sizes[size] : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={appliedClasses}>
        {children}
        {Icon && <Icon className="ml-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={appliedClasses}>
      {children}
      {Icon && <Icon className="ml-2" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
    </button>
  );
};

export default Button;

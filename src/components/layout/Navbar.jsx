import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiGlobe } from 'react-icons/fi';
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Sustainability', path: '/sustainability' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Minimal Logo similar to Siemens */}
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-[var(--color-siemens-primary)]' : 'text-white md:text-[var(--color-siemens-primary)]'}`}>
              TDTE<span className="text-[var(--color-siemens-accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[var(--color-siemens-primary)] ${
                  location.pathname === link.path 
                    ? 'text-[var(--color-siemens-primary)]' 
                    : isScrolled ? 'text-slate-700' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Highlight Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact"
              className={`px-5 py-2.5 rounded-sm font-semibold text-sm transition-all duration-300 ${isScrolled ? 'bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600 shadow-md' : 'bg-white text-[var(--color-siemens-primary)] hover:bg-gray-100'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-slate-800' : 'text-white'} focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} className="text-slate-800" /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-base font-semibold uppercase tracking-wider p-2 border-b border-gray-100 ${
                location.pathname === link.path ? 'text-[var(--color-siemens-primary)]' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="mt-4 text-center block px-5 py-3 rounded-sm font-semibold bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

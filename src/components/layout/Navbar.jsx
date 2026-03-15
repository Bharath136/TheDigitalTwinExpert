import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiGlobe } from 'react-icons/fi';
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = (menuName) => {
    setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
  };

  // Pages that don't have a dark hero image at the top need dark text immediately
  const lightNavbarRoutes = ['/support', '/sustainability'];
  const isLightNavbarRoute = lightNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMobileMenu(null);
  }, [location.pathname]);

  const navLinks = [
    { 
      name: 'About Us', 
      path: '/about',
      children: [
        { name: 'What is TDTE?', path: '/about#what-is-tdte' },
        { name: 'Vision', path: '/about#vision' },
        { name: 'Mission', path: '/about#mission' },
        { name: 'Objective', path: '/about#objective' },
        { name: 'Our Leadership Team', path: '/about#leadership' }
      ]
    },
    { 
      name: 'Industries', 
      path: '/services',
      children: [
        { name: 'Built Environment & Infrastructure', path: '/services#built-environment' },
        { name: 'Industrial & Manufacturing', path: '/services#industrial' },
        { name: 'Energy & Utilities', path: '/services#energy' },
        { name: 'Healthcare & Patient Twins', path: '/services#healthcare' },
        { name: 'Sustainability & Net-Zero', path: '/services#sustainability' }
      ]
    },
    { 
      name: 'Products', 
      path: '/products',
      children: [
        { name: 'Healthcare Digital Twin', path: '/products#healthcare' },
        { name: 'Citizen Digital Twin', path: '/products#citizen' },
        { name: 'Urban Digital Twin', path: '/products#urban' },
        { name: 'Home Digital Twin', path: '/products#home' },
        { name: 'Industrial Digital Twin', path: '/products#industrial' },
        { name: 'Energy Digital Twin', path: '/products#energy' }
      ]
    },
    { 
      name: 'Sustainability', 
      path: '/sustainability',
      children: [
        { name: 'The Sustainability Life', path: 'https://thesustainabilitylife.com/', external: true }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      children: [
        { name: 'News & Updates', path: '/support#news' }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
        : isLightNavbarRoute ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-5' 
        : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Minimal Logo similar to Siemens */}
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || isLightNavbarRoute ? 'text-[var(--color-siemens-primary)]' : 'text-white'}`}>
              TDTE<span className="text-[var(--color-siemens-accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.path.startsWith('http') ? (
                  <a 
                    href={link.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 ${
                      location.pathname === link.path 
                        ? ((isScrolled || isLightNavbarRoute) ? 'text-[var(--color-siemens-primary)]' : 'text-white') 
                        : ((isScrolled || isLightNavbarRoute) ? 'text-slate-700 hover:text-[var(--color-siemens-primary)]' : 'text-white/80 hover:text-white')
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.path}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 py-4 ${
                      location.pathname.startsWith(link.path) && link.path !== '/'
                        ? ((isScrolled || isLightNavbarRoute) ? 'text-[var(--color-siemens-primary)]' : 'text-white') 
                        : ((isScrolled || isLightNavbarRoute) ? 'text-slate-700 hover:text-[var(--color-siemens-primary)]' : 'text-white/80 hover:text-white')
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <svg className="w-4 h-4 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-sm border-t-2 border-[var(--color-siemens-primary)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.children.map((child) => (
                        child.external ? (
                          <a 
                            key={child.name} 
                            href={child.path} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[var(--color-siemens-primary)] transition-colors border-b border-gray-50 last:border-0"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <Link 
                            key={child.name} 
                            to={child.path} 
                            className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[var(--color-siemens-primary)] transition-colors border-b border-gray-50 last:border-0"
                          >
                            {child.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Highlight Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact"
              className={`px-5 py-2.5 rounded-sm font-semibold text-sm transition-all duration-300 ${(isScrolled || isLightNavbarRoute) ? 'bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600 shadow-md' : 'bg-white text-[var(--color-siemens-primary)] hover:bg-gray-100'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${(isScrolled || isLightNavbarRoute) ? 'text-slate-800' : 'text-white'} focus:outline-none`}
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) setActiveMobileMenu(null);
            }}
          >
            {isOpen ? <FiX size={24} className="text-slate-800" /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 origin-top overflow-y-auto max-h-[85vh] ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 last:border-0 pb-2 mb-2">
              {link.path.startsWith('http') ? (
                <a 
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-base font-semibold uppercase tracking-wider p-2 text-slate-700"
                >
                  {link.name}
                </a>
              ) : link.children ? (
                <button 
                  className={`flex justify-between items-center w-full text-left text-base font-semibold uppercase tracking-wider p-2 ${
                    location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-[var(--color-siemens-primary)]' : 'text-slate-700'
                  }`}
                  onClick={() => toggleMobileMenu(link.name)}
                >
                  {link.name}
                  <svg className={`w-4 h-4 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-[var(--color-siemens-primary)]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              ) : (
                <Link 
                  to={link.path}
                  className={`flex justify-between items-center text-base font-semibold uppercase tracking-wider p-2 ${
                    location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-[var(--color-siemens-primary)]' : 'text-slate-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
              
              {/* Mobile Submenu Items */}
              {link.children && (
                <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 mt-1 space-y-1 pb-2">
                    {link.children.map((child) => (
                      child.external ? (
                        <a 
                          key={child.name} 
                          href={child.path} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block py-2 text-sm text-slate-500 hover:text-[var(--color-siemens-primary)]"
                        >
                          - {child.name}
                        </a>
                      ) : (
                        <Link 
                          key={child.name} 
                          to={child.path} 
                          className="block py-2 text-sm text-slate-500 hover:text-[var(--color-siemens-primary)]"
                          onClick={() => setIsOpen(false)}
                        >
                          - {child.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-4 px-2">
            <Link 
              to="/contact"
              className="text-center block w-full px-5 py-3 rounded-sm font-semibold bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

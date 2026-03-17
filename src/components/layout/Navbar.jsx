import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = (menuName) => {
    setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
  };

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className={`transition-all duration-300 ${isScrolled ? 'bg-transparent p-0' : 'bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1'}`}>
              <img
                src="/TDTE_LOGO.png"
                alt="The Digital Twin Experts"
                className="h-14 md:h-16 w-auto transition-all duration-300 rounded"
              />
            </div>
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
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 ${location.pathname === link.path
                      ? (isScrolled ? 'text-[var(--color-siemens-primary)]' : 'text-white')
                      : (isScrolled ? 'text-slate-700 hover:text-[var(--color-siemens-primary)]' : 'text-white/80 hover:text-white')
                      }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 py-4 ${location.pathname.startsWith(link.path) && link.path !== '/'
                      ? (isScrolled ? 'text-[var(--color-siemens-primary)]' : 'text-white')
                      : (isScrolled ? 'text-slate-700 hover:text-[var(--color-siemens-primary)]' : 'text-white/80 hover:text-white')
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

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-sm font-semibold text-sm transition-all duration-300 ${isScrolled ? 'bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600 shadow-md' : 'bg-white text-[var(--color-siemens-primary)] hover:bg-gray-100'}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className={`${isScrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'} focus:outline-none`}
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) setActiveMobileMenu(null);
              }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-transform duration-300 origin-top overflow-y-auto max-h-[85vh] ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 last:border-0">
              {link.path.startsWith('http') ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-bold uppercase tracking-widest py-5 text-slate-800"
                >
                  {link.name}
                </a>
              ) : link.children ? (
                <button
                  className={`flex justify-between items-center w-full text-left text-sm font-bold uppercase tracking-widest py-5 transition-colors duration-300 ${location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-[var(--color-siemens-primary)]' : 'text-slate-800'
                    }`}
                  onClick={() => toggleMobileMenu(link.name)}
                >
                  {link.name}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-[var(--color-siemens-primary)]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`flex justify-between items-center text-sm font-bold uppercase tracking-widest py-5 transition-colors duration-300 ${location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-[var(--color-siemens-primary)]' : 'text-slate-800'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {/* Mobile Submenu Items */}
              {link.children && (
                <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === link.name ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-gray-100 ml-2 mt-1 flex flex-col gap-1">
                    {link.children.map((child) => (
                      child.external ? (
                        <a
                          key={child.name}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-3 pl-4 text-sm font-medium text-slate-600 hover:text-[var(--color-siemens-primary)] hover:bg-sky-50 rounded-r-md transition-all"
                        >
                          {child.name}
                        </a>
                      ) : (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block py-3 pl-4 text-sm font-medium text-slate-600 hover:text-[var(--color-siemens-primary)] hover:bg-sky-50 rounded-r-md transition-all"
                          onClick={() => setIsOpen(false)}
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

          <div className="mt-6">
            <Link
              to="/contact"
              className="text-center block w-full px-5 py-3.5 rounded-sm font-bold tracking-wide uppercase text-sm bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600 shadow-md transition-all"
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

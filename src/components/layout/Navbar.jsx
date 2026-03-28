import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiExternalLink, FiSearch } from 'react-icons/fi';
import Container from './Container';
import TwinCard from '../common/TwinCard';

import { searchIndex } from '../../data/searchData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setActiveMobileMenu(null);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Derived filtered results
  const searchResults = searchQuery.trim()
    ? searchIndex.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
    : [];

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'Company Vision & Mission', path: '/about#vision' },
        { name: 'Objectives', path: '/about#objectives' },
        { name: 'Global Ecosystem Approach', path: '/about#ecosystem' },
        { name: 'Partnerships', path: '/about#partnerships' },
      ] // removed Leadership
    },
    { name: 'Solutions', path: '/solutions' },
    {
      name: 'Industries',
      path: '/industries',
      children: [
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'Industrial & Manufacturing', path: '/industries/industrial' },
        { name: 'Energy & Utilities', path: '/industries/energy' },
        { name: 'Smart Cities', path: '/industries/smart-cities' },
        { name: 'Built Environment & Infrastructure', path: '/industries/built-environment' },
        { name: 'Transportation', path: '/industries/transportation' },
        { name: 'Sustainability & Net-Zero', path: '/industries/sustainability' },
      ]
    },
    {
      name: 'DTwinOS',
      path: '/platform',
      isMegaMenu: true,
      children: [
        { name: 'DTwinOS Healthcare Twin', acronym: 'HDT', path: '/platform/hdt', desc: 'Hospitals, patient twins, medical equipment, and operational intelligence.', icon: '🏥' },
        { name: 'DTwinOS Industrial Twin', acronym: 'IDT', path: '/platform/idt', desc: 'Factories, production systems, predictive maintenance, and performance optimization.', icon: '🏭' },
        { name: 'DTwinOS Energy Twin', acronym: 'EDT', path: '/platform/edt', desc: 'Power generation, renewables, grid intelligence, and energy optimization.', icon: '⚡' },
        { name: 'DTwinOS Urban Twin', acronym: 'UDT', path: '/platform/udt', desc: 'City-scale operations, citizen services, utilities, and governance.', icon: '🏙️' },
        { name: 'DTwinOS Built Twin', acronym: 'BDT', path: '/platform/bdt', desc: 'Data Centers, Semiconductors, Infrastructure, Building and Life Cycle Management.', icon: '🏗️' },
        { name: 'DTwinOS Transport Twin', acronym: 'TDT', path: '/platform/tdt', desc: 'Rail, airports,metro rails, highways, and logistics network optimization.', icon: '🚆' },
        { name: 'DTwinOS Sustainability Twin', acronym: 'SDT', path: '/platform/sdt', desc: 'Carbon tracking, ESG analytics, and net-zero transformation.', icon: '🌱' },
      ]
    },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

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
                className="h-10 md:h-12 w-auto transition-all duration-300 rounded"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 lg:gap-6 ml-auto mr-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 py-4 ${isActive(link.path)
                    ? (isScrolled ? 'text-[var(--color-siemens-primary)]' : 'text-white')
                    : (isScrolled ? 'text-slate-700 hover:text-[var(--color-siemens-primary)]' : 'text-white/80 hover:text-white')
                    }`}
                >
                  {link.name}
                  {link.children && (
                    <svg className="w-4 h-4 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.children && !link.isMegaMenu && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-sm border-t-2 border-[var(--color-siemens-primary)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[var(--color-siemens-primary)] transition-colors border-b border-gray-50 last:border-0"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu for Platform */}
                {link.children && link.isMegaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-gray-50 shadow-2xl rounded-b-lg border-t-4 border-[var(--color-siemens-primary)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 p-8">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
                      <h3 className="text-xl font-bold text-slate-800">DTwinOS Solutions</h3>
                      <Link to="/platform" className="text-sm font-semibold text-[var(--color-siemens-primary)] hover:underline flex items-center gap-1">
                        View All Platform Capabilities <FiExternalLink />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {link.children.map((twin) => (
                        <TwinCard
                          key={twin.name}
                          icon={twin.icon}
                          name={twin.name}
                          acronym={twin.acronym}
                          description={twin.desc}
                          link={twin.path}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle Search"
            >
              <FiSearch size={20} />
            </button>
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-md font-bold tracking-wide text-sm transition-all duration-300 shadow-md ${isScrolled ? 'bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600' : 'bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600'}`}
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center gap-2 ml-auto">
            <button
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} focus:outline-none p-2 rounded-md hover:bg-black/5`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch size={22} />
            </button>
            <button
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} focus:outline-none bg-white/20 p-2 rounded-md`}
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) setActiveMobileMenu(null);
                setIsSearchOpen(false);
              }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Global Search Overlay (Inline Expand) */}
        <div className={`overflow-visible transition-all duration-500 ease-in-out ${isSearchOpen ? 'max-h-[80vh] opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0 m-0 p-0 overflow-hidden'}`}>
          <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="relative w-full">
              <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-siemens-primary)]" size={22} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search industries, solutions, insights..."
                className="w-full bg-white text-slate-800 py-4 pl-14 pr-14 rounded-full border-2 border-[var(--color-siemens-primary)] shadow-lg focus:outline-none transition-shadow text-lg font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1 transition-colors"
                >
                  <FiX size={20} />
                </button>
              )}
            </div>

            {/* Dropdown Results */}
            {searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  <ul className="max-h-96 overflow-y-auto py-2">
                    {searchResults.map((result, i) => (
                      <li key={i}>
                        <Link
                          to={result.path}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center justify-between px-6 py-4 hover:bg-sky-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <span className="text-slate-800 font-semibold text-lg">{result.title}</span>
                          <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                            {result.type}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-8 text-center text-slate-500">
                    No results found for "<span className="font-semibold text-slate-800">{searchQuery}</span>".
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 origin-top overflow-y-auto ${isOpen ? 'max-h-[85vh] opacity-100 border-b-4 border-[var(--color-siemens-primary)]' : 'max-h-0 opacity-0 border-none'
          }`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 last:border-0">
              {link.children ? (
                <button
                  className={`flex justify-between items-center w-full text-left text-sm font-bold uppercase tracking-widest py-5 transition-colors duration-300 ${isActive(link.path) && link.path !== '/' ? 'text-[var(--color-siemens-primary)]' : 'text-slate-800'
                    }`}
                  onClick={() => toggleMobileMenu(link.name)}
                >
                  {link.name}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === link.name ? 'rotate-180 text-[var(--color-siemens-primary)]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`flex justify-between items-center text-sm font-bold uppercase tracking-widest py-5 transition-colors duration-300 ${isActive(link.path) && link.path !== '/' ? 'text-[var(--color-siemens-primary)]' : 'text-slate-800'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {/* Mobile Submenu Items */}
              {link.children && (
                <div className={`overflow-hidden transition-all duration-300 ${activeMobileMenu === link.name ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-slate-200 ml-2 mt-1 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block py-3 pl-4 text-sm font-medium text-slate-600 hover:text-[var(--color-siemens-primary)] hover:bg-sky-50 rounded-r-md transition-all border-b border-slate-50 last:border-0"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-semibold text-slate-800 block mb-1">{child.name} {child.acronym ? `(${child.acronym})` : ''}</span>
                        {child.desc && <span className="text-xs text-slate-500 font-normal line-clamp-1">{child.desc}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/contact"
              className="text-center block w-full px-5 py-3.5 rounded-md font-bold tracking-wide uppercase text-sm bg-[var(--color-siemens-primary)] text-white hover:bg-sky-600 shadow-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

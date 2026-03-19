import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiYoutube, FiFacebook } from 'react-icons/fi';
import Container from './Container';
import { contactData } from '../../config/contactData';

const Footer = () => {
  return (
    <footer className="bg-[#000033] text-[var(--color-siemens-gray-200)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Intro */}
          <div>
            <div className="mb-6 inline-block bg-white rounded-xl p-2">
              <img
                src="/TDTE_LOGO.png"
                alt="The Digital Twin Experts"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Accelerating the adoption of Digital Twin technologies across infrastructure, industry, healthcare, and energy sectors to build an intelligent and sustainable world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><FiLinkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><FiTwitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><FiYoutube size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><FiFacebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/why-us" className="hover:text-white transition-colors">Why Us</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company Brochure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Twin Whitepapers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industry Case Studies</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>Global Communications</li>
              <li className="mt-4"><a href={`mailto:${contactData.email.value}`} className="hover:text-white transition-colors text-[var(--color-siemens-primary)]">{contactData.email.display}</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-[var(--color-siemens-primary)]">Get in Touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Digital Twin Experts. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

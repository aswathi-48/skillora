import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">Skillora</span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Empowering students with knowledge, skills, and values to become global leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-secondary transition-colors duration-300">
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-neutral-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Courses', 'Admissions', 'Student Life', 'News & Events', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-neutral-400 hover:text-secondary transition-colors duration-300 flex items-center">
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-neutral-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">123 Education Lane, Knowledge City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-neutral-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-neutral-400">info@skillora.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-neutral-700 pb-2 inline-block">Newsletter</h4>
            <p className="text-neutral-400 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>&copy; 2024 Skillora Institution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

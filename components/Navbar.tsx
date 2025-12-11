import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import IMAGES from '@/constants/IMAGES';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
              <img style={{ width: '80px' }} src={'/assets/images/logo.svg'} alt='Logo Delix' />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-display font-medium px-3 py-2 rounded-md transition-colors duration-200 ${isActive(link.path)
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-secondary hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/30">
                Télécharger l'App
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'text-primary bg-orange-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full text-center mt-4 bg-secondary text-white px-5 py-3 rounded-lg font-medium">
              Télécharger l'App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
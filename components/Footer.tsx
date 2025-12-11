import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import CONTACT from '@/constants/CONTACT';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">
              Deli<span className="text-primary">x</span>
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              La solution logistique de référence pour vos livraisons. Restaurants, courses, colis : nous connectons la ville en quelques clics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-orange-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-blue-100 hover:text-white hover:underline decoration-primary underline-offset-4">Accueil</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white hover:underline decoration-primary underline-offset-4">À Propos</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white hover:underline decoration-primary underline-offset-4">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-orange-400">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-blue-100 hover:text-white hover:underline decoration-primary underline-offset-4">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="text-blue-100 hover:text-white hover:underline decoration-primary underline-offset-4">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-orange-400">Nous Contacter</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>{CONTACT.tel}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span>{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 mt-6 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Delix. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
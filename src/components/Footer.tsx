
import React from 'react';
import DemoButton from './DemoButton';
import { Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Pickaform</h3>
            <p className="text-gray-300 mb-6">
              Le no-code conçu pour les grands comptes. Automatisez vos processus métier avec une solution puissante et intuitive.
            </p>
            <div className="space-x-4">
              <a href="https://www.linkedin.com/company/pickaform-cloud/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6 inline-block" />
              </a>
              <a href="https://www.youtube.com/@pickaform" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6 inline-block" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pour les grands comptes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pour les PME</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pour les DSI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pour les métiers</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cas clients</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assistance</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contactez-nous</h4>
            <p className="text-gray-300 mb-6">
              Vous souhaitez en savoir plus sur Pickaform ? N'hésitez pas à prendre contact avec notre équipe.
            </p>
            <DemoButton className="w-full justify-center" />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pickaform. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

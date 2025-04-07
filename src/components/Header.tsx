
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DemoButton from './DemoButton';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            Pickaform
          </a>
        </div>

        {/* Menu pour Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#challenges" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            Challenges
          </a>
          <a href="#ai-features" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            IA Intégrée
          </a>
          <a href="#integration" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            Intégrations
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            Nos offres
          </a>
          <a href="#makers" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            Makers
          </a>
          <a href="#security" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            Sécurité
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary-light font-medium transition-colors">
            Témoignages
          </a>
          <DemoButton />
        </nav>

        {/* Bouton burger pour mobile */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#challenges" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Challenges
            </a>
            <a 
              href="#ai-features" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              IA Intégrée
            </a>
            <a 
              href="#integration" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Intégrations
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos offres
            </a>
            <a 
              href="#makers" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Makers
            </a>
            <a 
              href="#security" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sécurité
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Témoignages
            </a>
            <DemoButton fullWidth />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

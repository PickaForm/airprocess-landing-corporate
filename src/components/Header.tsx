
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

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
          <a href="#challenges" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.challenges', language)}
          </a>
          <a href="#ai-features" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.aiFeatures', language)}
          </a>
          <a href="#integration" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.integration', language)}
          </a>
          <a href="#pricing" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.pricing', language)}
          </a>
          <a href="#makers" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.makers', language)}
          </a>
          <a href="#security" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.security', language)}
          </a>
          <a href="#testimonials" className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.testimonials', language)}
          </a>
          <LanguageSelector isScrolled={isScrolled} />
        </nav>

        {/* Bouton burger pour mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector isScrolled={isScrolled} />
          <button 
            className={cn(
              "transition-colors",
              isScrolled ? "text-primary hover:text-primary-light" : "text-white hover:text-gray-200"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              {getTranslation('header.challenges', language)}
            </a>
            <a 
              href="#ai-features" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.aiFeatures', language)}
            </a>
            <a 
              href="#integration" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.integration', language)}
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.pricing', language)}
            </a>
            <a 
              href="#makers" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.makers', language)}
            </a>
            <a 
              href="#security" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.security', language)}
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.testimonials', language)}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();
  
  // Vérifier si nous sommes sur la page d'accueil
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Préfixe pour les liens de navigation
  const linkPrefix = isHomePage ? '' : '/';

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
          <Link to="/" className="text-2xl font-bold text-primary">
            Pickaform
          </Link>
        </div>

        {/* Menu pour Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to={`${linkPrefix}#challenges`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.challenges', language)}
          </Link>
          <Link to={`${linkPrefix}#ai-features`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.aiFeatures', language)}
          </Link>
          <Link to={`${linkPrefix}#integration`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.integration', language)}
          </Link>
          <Link to={`${linkPrefix}#pricing`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.pricing', language)}
          </Link>
          <Link to={`${linkPrefix}#makers`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.makers', language)}
          </Link>
          <Link to={`${linkPrefix}#security`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.security', language)}
          </Link>
          <Link to={`${linkPrefix}#testimonials`} className={cn(
            "font-medium transition-colors",
            isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
          )}>
            {getTranslation('header.testimonials', language)}
          </Link>
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
            <Link 
              to={`${linkPrefix}#challenges`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.challenges', language)}
            </Link>
            <Link 
              to={`${linkPrefix}#ai-features`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.aiFeatures', language)}
            </Link>
            <Link 
              to={`${linkPrefix}#integration`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.integration', language)}
            </Link>
            <Link 
              to={`${linkPrefix}#pricing`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.pricing', language)}
            </Link>
            <Link 
              to={`${linkPrefix}#makers`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.makers', language)}
            </Link>
            <Link 
              to={`${linkPrefix}#security`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.security', language)}
            </Link>
            <Link 
              to={`${linkPrefix}#testimonials`}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {getTranslation('header.testimonials', language)}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

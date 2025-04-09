
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';
import { Menu, X } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Vérifier si nous sommes sur la page d'accueil
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour gérer la navigation vers les sections
  const handleSectionNavigation = (sectionId: string) => {
    // Si nous ne sommes pas sur la page d'accueil, naviguer d'abord vers la page d'accueil
    if (!isHomePage) {
      navigate('/');
      // Attendre que la navigation soit terminée avant de faire défiler
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si déjà sur la page d'accueil, faire défiler directement
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Fermer le menu mobile s'il est ouvert
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

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
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/30d100fd-66c9-4395-abc8-235de7e12e76.png" 
              alt="Pickaform Logo" 
              className="h-10" 
            />
          </Link>
        </div>

        {/* Menu pour Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleSectionNavigation('challenges')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.challenges', language)}
          </button>
          <button 
            onClick={() => handleSectionNavigation('ai-features')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.aiFeatures', language)}
          </button>
          <button 
            onClick={() => handleSectionNavigation('integration')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.integration', language)}
          </button>
          <button 
            onClick={() => handleSectionNavigation('pricing')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.pricing', language)}
          </button>
          <button 
            onClick={() => handleSectionNavigation('makers')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.makers', language)}
          </button>
          <button 
            onClick={() => handleSectionNavigation('security')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.security', language)}
          </button>
          <button 
            onClick={() => handleSectionNavigation('testimonials')}
            className={cn(
              "font-medium transition-colors",
              isScrolled ? "text-gray-700 hover:text-primary-light" : "text-gray-100 hover:text-white"
            )}
          >
            {getTranslation('header.testimonials', language)}
          </button>
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
            <button 
              onClick={() => handleSectionNavigation('challenges')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.challenges', language)}
            </button>
            <button 
              onClick={() => handleSectionNavigation('ai-features')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.aiFeatures', language)}
            </button>
            <button 
              onClick={() => handleSectionNavigation('integration')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.integration', language)}
            </button>
            <button 
              onClick={() => handleSectionNavigation('pricing')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.pricing', language)}
            </button>
            <button 
              onClick={() => handleSectionNavigation('makers')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.makers', language)}
            </button>
            <button 
              onClick={() => handleSectionNavigation('security')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.security', language)}
            </button>
            <button 
              onClick={() => handleSectionNavigation('testimonials')}
              className="text-gray-700 hover:text-primary-light font-medium py-2 transition-colors"
            >
              {getTranslation('header.testimonials', language)}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import DemoButton from './DemoButton';
import { Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Pickaform</h3>
            <p className="text-gray-300 mb-6">
              {getTranslation('footer.description', language)}
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
            <h4 className="text-lg font-semibold mb-4">{getTranslation('footer.solutions', language)}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.forEnterprise', language)}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.forSMB', language)}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.forIT', language)}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.forBusiness', language)}</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{getTranslation('footer.resources', language)}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.documentation', language)}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.blog', language)}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.caseStudies', language)}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{getTranslation('footer.support', language)}</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{getTranslation('footer.contact', language)}</h4>
            <p className="text-gray-300 mb-6">
              {getTranslation('footer.contactText', language)}
            </p>
            <DemoButton className="w-full justify-center" />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pickaform. {getTranslation('footer.copyright', language)}
          </p>
          <div className="flex space-x-6">
            <Link to="/legal-notice" className="text-gray-400 hover:text-white text-sm transition-colors">{getTranslation('footer.legal', language)}</Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">{getTranslation('footer.privacy', language)}</Link>
            <Link to="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors">{getTranslation('footer.terms', language)}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

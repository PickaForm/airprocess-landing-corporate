
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/constants/translations';

const ScreenshotsSection: React.FC = () => {
  const { language } = useLanguage();
  
  const getTranslation = (key: string) => {
    const currentLanguage = language as keyof typeof translations;
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          {getTranslation('screenshots.title')}
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {getTranslation('screenshots.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/lovable-uploads/be25f008-1d86-4631-b236-d3742c074fda.png" 
              alt={getTranslation('screenshots.applicant')} 
              className="w-full h-auto"
            />
            <div className="p-5 bg-white">
              <h3 className="text-xl font-semibold mb-2">{getTranslation('screenshots.applicant')}</h3>
              <p className="text-gray-600">{getTranslation('screenshots.applicantDesc')}</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/lovable-uploads/09342a1c-5290-4c6c-a2e9-d45ab5d72479.png" 
              alt={getTranslation('screenshots.projects')} 
              className="w-full h-auto"
            />
            <div className="p-5 bg-white">
              <h3 className="text-xl font-semibold mb-2">{getTranslation('screenshots.projects')}</h3>
              <p className="text-gray-600">{getTranslation('screenshots.projectsDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;

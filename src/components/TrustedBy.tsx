
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const TrustedBy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="section bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {getTranslation('trustedBy.title', language)}
          </h2>
        </div>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/628deac6-722b-4b6a-b3cd-fcda4f3475af.png" 
            alt={getTranslation('trustedBy.imageAlt', language)}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

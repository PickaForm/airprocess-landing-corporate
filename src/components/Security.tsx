
import React from 'react';
import DemoButton from './DemoButton';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const Security: React.FC = () => {
  const { language } = useLanguage();

  const securityFeatures = [
    {
      title: getTranslation('security.feature1.title', language),
      description: getTranslation('security.feature1.description', language)
    },
    {
      title: getTranslation('security.feature2.title', language),
      description: getTranslation('security.feature2.description', language)
    },
    {
      title: getTranslation('security.feature3.title', language),
      description: getTranslation('security.feature3.description', language)
    },
    {
      title: getTranslation('security.feature4.title', language),
      description: getTranslation('security.feature4.description', language)
    }
  ];

  return (
    <section className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {getTranslation('security.title', language)}
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              {getTranslation('security.subtitle', language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl mb-8">
              {getTranslation('security.conclusion', language)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoButton className="bg-white text-primary hover:bg-gray-100" />
              <p className="font-semibold">{getTranslation('security.callToAction', language)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;


import React from 'react';
import { Briefcase, TrendingUp, Handshake, Rocket } from 'lucide-react';
import DemoButton from './DemoButton';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const MakersSection: React.FC = () => {
  const { language } = useLanguage();

  const makersBenefits = [
    {
      icon: <Briefcase className="w-10 h-10 text-primary-light" />,
      title: getTranslation('makers.benefit1.title', language),
      description: getTranslation('makers.benefit1.description', language)
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary-light" />,
      title: getTranslation('makers.benefit2.title', language),
      description: getTranslation('makers.benefit2.description', language)
    },
    {
      icon: <Handshake className="w-10 h-10 text-primary-light" />,
      title: getTranslation('makers.benefit3.title', language),
      description: getTranslation('makers.benefit3.description', language)
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary-light" />,
      title: getTranslation('makers.benefit4.title', language),
      description: getTranslation('makers.benefit4.description', language)
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{getTranslation('makers.title', language)}</h2>
          <p className="section-subtitle">
            {getTranslation('makers.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {makersBenefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {getTranslation('makers.conclusion', language)}
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mt-10 mb-8">
            <h3 className="text-2xl font-semibold mb-4">{getTranslation('makers.callToActionButton', language)}</h3>
            <p className="text-xl mb-8">
              {getTranslation('makers.callToAction', language)}
            </p>
            <DemoButton className="px-8 py-4 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakersSection;

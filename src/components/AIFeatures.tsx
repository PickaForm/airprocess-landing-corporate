
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const AIFeatures: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="ai-features" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {getTranslation('aiFeatures.title', language)}
          </h2>
          <p className="section-subtitle">
            {getTranslation('aiFeatures.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Première partie - Génération d'app */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {getTranslation('aiFeatures.generateApps.title', language)}
            </h3>
            <p className="text-gray-700 mb-8">
              {getTranslation('aiFeatures.generateApps.subtitle', language)}
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    {getTranslation('aiFeatures.generateApps.step1.title', language)}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aiFeatures.generateApps.step1.description', language)}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    {getTranslation('aiFeatures.generateApps.step2.title', language)}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aiFeatures.generateApps.step2.description', language)}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    {getTranslation('aiFeatures.generateApps.step3.title', language)}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aiFeatures.generateApps.step3.description', language)}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    {getTranslation('aiFeatures.generateApps.step4.title', language)}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aiFeatures.generateApps.step4.description', language)}
                  </p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 font-medium text-center text-xl text-primary">
              {getTranslation('aiFeatures.generateApps.conclusion', language)}
            </p>
          </div>
          
          {/* Deuxième partie - Champs IA */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {getTranslation('aiFeatures.intelligence.title', language)}
            </h3>
            <p className="text-gray-700 mb-8">
              {getTranslation('aiFeatures.intelligence.subtitle', language)}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">
                  {getTranslation('aiFeatures.intelligence.summaries', language)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">
                  {getTranslation('aiFeatures.intelligence.briefs', language)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">
                  {getTranslation('aiFeatures.intelligence.reports', language)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">
                  {getTranslation('aiFeatures.intelligence.textAnalysis', language)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">
                  {getTranslation('aiFeatures.intelligence.emails', language)}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">
                  {getTranslation('aiFeatures.intelligence.visuals', language)}
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              {getTranslation('aiFeatures.intelligence.possibilities', language)}
            </p>
            
            <div className="bg-primary p-5 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-3">
                {getTranslation('aiFeatures.question.title', language)}
              </h4>
              <p className="mb-4">
                {getTranslation('aiFeatures.question.description', language)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;

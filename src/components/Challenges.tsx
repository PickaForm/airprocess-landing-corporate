
import React from 'react';
import { Check, File, Link, Circle, Users } from 'lucide-react';
import DemoButton from './DemoButton';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const Challenges: React.FC = () => {
  const { language } = useLanguage();
  
  const challenges = [
    {
      icon: <File className="w-8 h-8 text-primary-light" />,
      title: getTranslation('challenges.dispersed.title', language),
      description: getTranslation('challenges.dispersed.description', language)
    },
    {
      icon: <Link className="w-8 h-8 text-primary-light" />,
      title: getTranslation('challenges.lost.title', language),
      description: getTranslation('challenges.lost.description', language)
    },
    {
      icon: <Circle className="w-8 h-8 text-primary-light" />,
      title: getTranslation('challenges.lostInfo.title', language),
      description: getTranslation('challenges.lostInfo.description', language)
    },
    {
      icon: <Users className="w-8 h-8 text-primary-light" />,
      title: getTranslation('challenges.inefficient.title', language),
      description: getTranslation('challenges.inefficient.description', language)
    }
  ];

  const solutions = [
    {
      title: getTranslation('challenges.solution1.title', language),
      description: getTranslation('challenges.solution1.description', language)
    },
    {
      title: getTranslation('challenges.solution2.title', language),
      description: getTranslation('challenges.solution2.description', language)
    },
    {
      title: getTranslation('challenges.solution3.title', language),
      description: getTranslation('challenges.solution3.description', language)
    },
    {
      title: getTranslation('challenges.solution4.title', language),
      description: getTranslation('challenges.solution4.description', language)
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{getTranslation('challenges.title', language)}</h2>
          <p className="section-subtitle">
            {getTranslation('challenges.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 text-white my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{getTranslation('challenges.solutionsTitle', language)}</h2>
          <p className="text-xl mb-12 text-center max-w-4xl mx-auto">
            {getTranslation('challenges.solutionsSubtitle', language)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-200">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            {getTranslation('challenges.conclusion', language)}
            <span className="text-primary-light"> </span>
          </h2>
          <div className="mt-10">
            <DemoButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;

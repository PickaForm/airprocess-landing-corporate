
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Cloud, Database } from 'lucide-react';
import DemoButton from './DemoButton';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const PricingPlans: React.FC = () => {
  const { language } = useLanguage();

  const cloudPlans = [
    {
      title: getTranslation('pricing.silver.title', language),
      features: [
        getTranslation('pricing.feature1', language),
        getTranslation('pricing.feature2', language),
        getTranslation('pricing.feature3', language),
        getTranslation('pricing.feature4', language),
        getTranslation('pricing.feature5', language)
      ],
      price: getTranslation('pricing.silver.price', language),
      unit: getTranslation('pricing.perUser', language)
    },
    {
      title: getTranslation('pricing.gold.title', language),
      features: [
        "20 Users",
        "5 Applications",
        "20 GB Storage",
        getTranslation('pricing.feature4', language),
        getTranslation('pricing.feature5', language)
      ],
      price: getTranslation('pricing.gold.price', language),
      unit: getTranslation('pricing.perUser', language)
    },
    {
      title: getTranslation('pricing.platinum.title', language),
      features: [
        "50 Users",
        "10 Applications",
        "50 GB Storage",
        getTranslation('pricing.feature4', language),
        getTranslation('pricing.feature5', language)
      ],
      price: getTranslation('pricing.platinum.price', language),
      unit: getTranslation('pricing.perUser', language)
    },
    {
      title: getTranslation('pricing.enterprise.title', language),
      features: [
        getTranslation('pricing.enterprise.feature1', language),
        getTranslation('pricing.enterprise.feature2', language),
        getTranslation('pricing.enterprise.feature3', language),
        getTranslation('pricing.feature4', language),
        getTranslation('pricing.feature5', language)
      ],
      price: getTranslation('pricing.enterprise.price', language),
      unit: getTranslation('pricing.perUser', language)
    }
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{getTranslation('pricing.title', language)}</h2>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <Cloud className="w-8 h-8 text-primary-light mr-3" />
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">{getTranslation('pricing.cloud.title', language)}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudPlans.map((plan, index) => (
              <Card key={index} className="border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-primary">
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1 text-sm">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2 pb-6 flex justify-center">
                  <DemoButton className="w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <Database className="w-8 h-8 text-primary-light mr-3" />
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">On premise</h3>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border border-primary-light shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">{getTranslation('pricing.onpremise.title', language)}</CardTitle>
                <CardDescription>
                  {getTranslation('pricing.onpremise.subtitle', language)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>{getTranslation('pricing.onpremise.feature1', language)}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>{getTranslation('pricing.onpremise.feature2', language)}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>{getTranslation('pricing.onpremise.feature3', language)}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>{getTranslation('pricing.onpremise.feature4', language)}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-2 pb-6 flex justify-center">
                <DemoButton className="w-full" />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

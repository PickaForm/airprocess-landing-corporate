import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Cloud, Database } from 'lucide-react';
import DemoButton from './DemoButton';

const cloudPlans = [
  {
    title: "Silver",
    features: [
      "10 Users",
      "3 Applications",
      "10 GB Storage",
      "Formulaires illimités",
      "Workflows illimités"
    ],
    price: "15,00€",
    unit: "Utilisateur / mois"
  },
  {
    title: "Gold",
    features: [
      "20 Users",
      "5 Applications",
      "20 GB Storage",
      "Formulaires illimités",
      "Workflows illimités"
    ],
    price: "12,50€",
    unit: "Utilisateur / mois",
    highlight: true
  },
  {
    title: "Platinum",
    features: [
      "50 Users",
      "10 Applications",
      "50 GB Storage",
      "Formulaires illimités",
      "Workflows illimités"
    ],
    price: "11,00€",
    unit: "Utilisateur / mois"
  }
];

const PricingPlans: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos offres</h2>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <Cloud className="w-8 h-8 text-primary-light mr-3" />
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">Cloud</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlans.map((plan, index) => (
              <Card key={index} className={`border shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.highlight ? 'border-primary-light' : ''}`}>
                <CardHeader className="text-center pb-2">
                  <CardTitle className={`text-2xl ${plan.highlight ? 'text-primary-light' : 'text-primary'}`}>
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
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
                <CardTitle className="text-2xl text-primary">Solution Entreprise</CardTitle>
                <CardDescription>
                  Déployez Pickaform dans votre infrastructure pour un contrôle total
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>Sécurité et conformité maximales</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>Intégration avec votre infrastructure existante</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>Support dédié et personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light shrink-0 mr-2 mt-0.5" />
                    <span>Licences adaptées à vos besoins</span>
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

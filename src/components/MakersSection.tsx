
import React from 'react';
import { Briefcase, TrendingUp, Handshake, Rocket } from 'lucide-react';
import DemoButton from './DemoButton';

const makersBenefits = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary-light" />,
    title: "Valorisez votre expertise métier",
    description: "Accédez à un marché en pleine expansion tout en mettant en avant vos compétences spécifiques."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary-light" />,
    title: "Réduisez vos risques d'impayés",
    description: "Offrez des solutions robustes aux grandes entreprises avec des processus de paiement fiables."
  },
  {
    icon: <Handshake className="w-10 h-10 text-primary-light" />,
    title: "Construisez des relations pérennes",
    description: "Développez des partenariats durables avec des clients de confiance, prêts à investir dans l'innovation."
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary-light" />,
    title: "Ayez un impact durable",
    description: "Touchez des milliers de collaborateurs à travers des solutions à fort potentiel de transformation."
  }
];

const MakersSection: React.FC = () => {
  return (
    <section id="makers" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Offre makers / No-coders</h2>
          <p className="section-subtitle">
            Pourquoi les makers/no-coders devraient se tourner vers les grandes entreprises ?
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
            En vous tournant vers les grandes entreprises, vous ne vous contentez pas de créer des applications, vous façonnez l'avenir des process d'entreprise.
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mt-10 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Passez à l'action !</h3>
            <p className="text-xl mb-8">
              Ne vous cantonnez plus aux petites structures. Créez des solutions adaptées aux grands comptes en quelques minutes, faites-les évoluer pendant des décennies !
            </p>
            <DemoButton className="px-8 py-4 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakersSection;

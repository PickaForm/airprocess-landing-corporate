
import React from 'react';
import DemoButton from './DemoButton';

const securityFeatures = [
  {
    title: "Solution On-Premise",
    description: "Tout reste sous contrôle. La sécurité et la gouvernance des données sont garanties."
  },
  {
    title: "Gestion avancée des droits d'accès",
    description: "Une sécurité flexible et optimale pour chaque utilisateur et groupe."
  },
  {
    title: "Capacité d'audit des décisions",
    description: "Suivez et analysez toutes les actions prises par les collaborateurs pour une transparence totale."
  },
  {
    title: "Sécurité conforme aux normes",
    description: "Respectez les exigences réglementaires les plus strictes de votre secteur."
  }
];

const Security: React.FC = () => {
  return (
    <section id="security" className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Le no-code : un cauchemar pour les DSI ?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Le no-code peut être un casse-tête pour les DSI… mais avec Pickaform, les données restent sous contrôle.
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
              Pickaform offre une combinaison parfaite pour répondre aux exigences les plus strictes des DSI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoButton className="bg-white text-primary hover:bg-gray-100" />
              <p className="font-semibold">Sécurisez votre transformation digitale dès maintenant !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;

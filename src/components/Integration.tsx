
import React from 'react';
import { Check } from 'lucide-react';

const Integration: React.FC = () => {
  return (
    <section id="integration" className="section bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Boostez votre stack no-code : <span className="text-primary-light">Pickaform est compatible avec Make !</span>
            </h2>
            <p className="section-subtitle">
              Intégrez Pickaform à votre stack no-code en quelques clics. Créez des solutions sur mesure pour répondre aux défis complexes du monde corporate.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl mb-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80" 
                  alt="Intégration No-Code" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-primary">Connectez vos outils préférés</h3>
                <p className="text-gray-700 mb-6">
                  Grâce à l'intégration avec Make, Pickaform peut communiquer avec plus de 2000 applications et services. Automatisez des flux de travail complexes sans écrire une seule ligne de code.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light mr-2 mt-1" />
                    <span>Connectez Pickaform avec vos outils existants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light mr-2 mt-1" />
                    <span>Automatisez des processus entre plusieurs plateformes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-light mr-2 mt-1" />
                    <span>Créez des scenarios d'automatisation personnalisés</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://www.make.com/en/integrations?community=1&verified=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-light hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Découvrir les intégrations possibles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;

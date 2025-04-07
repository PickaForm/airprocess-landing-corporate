
import React from 'react';
import { Check, File, Link, Circle, Users } from 'lucide-react';
import DemoButton from './DemoButton';

const challenges = [
  {
    icon: <File className="w-8 h-8 text-primary-light" />,
    title: "Process dispersés",
    description: "Les informations critiques sont éparpillées dans différents systèmes."
  },
  {
    icon: <Link className="w-8 h-8 text-primary-light" />,
    title: "Fichiers égarés",
    description: "Les documents importants se perdent dans des dossiers partagés mal organisés."
  },
  {
    icon: <Circle className="w-8 h-8 text-primary-light" />,
    title: "Informations perdues",
    description: "Des notes internes cruciales qui restent non lues et inaccessibles."
  },
  {
    icon: <Users className="w-8 h-8 text-primary-light" />,
    title: "Échanges inefficaces",
    description: "Communication par emails sans traçabilité ni suivi structuré."
  }
];

const solutions = [
  {
    title: "Gestion de process métiers complexes",
    description: "Des process qui évoluent avec les données et favorisent la collaboration fluide entre services."
  },
  {
    title: "Audit et traçabilité",
    description: "Chaque décision prise est suivie et documentée pour garantir une transparence totale."
  },
  {
    title: "Gestion fine des droits d'accès",
    description: "Un contrôle strict des utilisateurs et groupes d'utilisateurs pour garantir la sécurité sans contrainte."
  },
  {
    title: "UI/UX intuitive",
    description: "Une interface simple pour une adoption rapide, même par les collaborateurs non-techniques."
  }
];

const Challenges: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Le défi des grandes entreprises</h2>
          <p className="section-subtitle">
            Le monde corporate fait face à des défis qui sont propres à son échelle. Résultat ? Un temps gaspillé, des erreurs humaines, des décisions retardées et des opportunités perdues.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi les solutions classiques ne suffisent pas ?</h2>
          <p className="text-xl mb-12 text-center max-w-4xl mx-auto">
            Les grandes entreprises ont besoin de solutions qui vont bien au-delà des outils classiques. Elles nécessitent des systèmes sur mesure qui s'adaptent à des exigences de sécurité, de flexibilité et d'efficacité strictes.
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
            Automatiser, systématiser et optimiser la gestion des process métier : 
            <span className="text-primary-light"> la solution gagnante pour les grandes entreprises !</span>
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

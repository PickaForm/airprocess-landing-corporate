
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AIFeatures: React.FC = () => {
  return (
    <section id="ai-features" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Décuplez votre productivité avec notre <span className="text-primary-light">IA intégrée</span> !
          </h2>
          <p className="section-subtitle">
            Créez des applications fonctionnelles en quelques minutes et améliorez le contenu de vos process métiers grâce à l'intelligence artificielle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Première partie - Génération d'app */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">Générez des applications en quelques clics</h3>
            <p className="text-gray-700 mb-8">
              Ne perdez plus de temps à concevoir vos applications ! Avec notre IA intégrée, créez une app fonctionnelle en quelques minutes.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Briefez l'IA en quelques lignes</h4>
                  <p className="text-gray-600">Décrivez simplement votre besoin à notre assistant intelligent.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Cliquez sur "Générer l'application"</h4>
                  <p className="text-gray-600">Notre IA crée la structure, les champs et le workflow adaptés.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Testez et affinez le résultat</h4>
                  <p className="text-gray-600">Avec des données automatiquement générées pour tester votre app.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Validez votre app</h4>
                  <p className="text-gray-600">Déployez rapidement et commencez à l'utiliser immédiatement.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 font-medium text-center text-xl text-primary">
              Difficile de faire plus rapide et intuitif !
            </p>
          </div>
          
          {/* Deuxième partie - Champs IA */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">Ajoutez une touche d'intelligence à vos applications !</h3>
            <p className="text-gray-700 mb-8">
              Grâce aux champs IA, générez automatiquement du contenu pertinent et contextuel directement dans vos applications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">Résumés</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">Briefs</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">Rapports</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">Analyses de texte</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">Emails</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-primary-light font-semibold">Visuels</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Les possibilités sont infinies ! Notre assistant IA est là pour vous aider, en temps réel, à maximiser l'usage de Pickaform !
            </p>
            
            <div className="bg-primary p-5 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-3">Une question sur Pickaform ?</h4>
              <p className="mb-4">
                Ne restez pas bloqué ! Notre assistant IA répond à toutes vos questions et vous guide étape par étape pour exploiter pleinement notre outil.
              </p>
              <a href="#" className="inline-flex items-center text-primary-light font-medium hover:underline">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;

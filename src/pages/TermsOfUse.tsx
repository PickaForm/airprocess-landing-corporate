
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfUse: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">
          {language === 'fr' ? 'Conditions Générales d\'Utilisation' : 'Terms of Use'}
        </h1>
        
        <div className="prose max-w-none">
          {language === 'fr' ? (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptation des conditions</h2>
              <p>En accédant et en utilisant le site web de Pickaform, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Description du service</h2>
              <p>Pickaform propose une plateforme no-code destinée aux entreprises pour la création et la gestion d'applications métier. Le service est fourni "tel quel" sans garantie d'aucune sorte.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Utilisation du site</h2>
              <p>Vous vous engagez à utiliser ce site conformément aux lois et réglementations applicables. Il est interdit d'utiliser ce site à des fins illégales ou non autorisées.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Propriété intellectuelle</h2>
              <p>Tout le contenu présent sur ce site, y compris les textes, graphiques, logos, icônes et images, est la propriété de Pickaform et est protégé par le droit d'auteur et autres lois sur la propriété intellectuelle.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation de responsabilité</h2>
              <p>Pickaform ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation ou de l'impossibilité d'utiliser ce site ou son contenu.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Données personnelles</h2>
              <p>Pickaform ne collecte aucune donnée sur les visiteurs de ce site, pas même des cookies. Nous n'exploitons pas les données des clients, y compris à des fins statistiques.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Modification des conditions</h2>
              <p>Pickaform se réserve le droit de modifier ces Conditions Générales d'Utilisation à tout moment. Les modifications prennent effet dès leur publication sur le site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Loi applicable</h2>
              <p>Les présentes Conditions Générales d'Utilisation sont régies par le droit français. Tout litige relatif à l'interprétation ou à l'exécution des présentes conditions sera soumis aux tribunaux compétents de [Votre juridiction].</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
              <p>By accessing and using the Pickaform website, you agree to be bound by these Terms of Use. If you do not accept these terms, please do not use this site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Service Description</h2>
              <p>Pickaform offers a no-code platform for businesses to create and manage business applications. The service is provided "as is" without warranty of any kind.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Use of the Site</h2>
              <p>You agree to use this site in accordance with applicable laws and regulations. It is forbidden to use this site for illegal or unauthorized purposes.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
              <p>All content on this site, including text, graphics, logos, icons, and images, is the property of Pickaform and is protected by copyright and other intellectual property laws.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
              <p>Pickaform will not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this site or its content.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Data</h2>
              <p>Pickaform does not collect any data on visitors to this site, not even cookies. We do not use customer data for any purpose, including statistical purposes.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Modification of Terms</h2>
              <p>Pickaform reserves the right to modify these Terms of Use at any time. Modifications take effect as soon as they are published on the site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Applicable Law</h2>
              <p>These Terms of Use are governed by French law. Any dispute relating to the interpretation or execution of these terms will be submitted to the competent courts of [Your jurisdiction].</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;

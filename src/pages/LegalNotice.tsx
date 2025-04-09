
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LegalNotice: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">
          {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
        </h1>
        
        <div className="prose max-w-none">
          {language === 'fr' ? (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Éditeur du site</h2>
              <p>Pickaform</p>
              <p>Adresse : [Votre adresse]</p>
              <p>Email : contact@pickaform.com</p>
              <p>Téléphone : [Votre téléphone]</p>
              <p>SIRET : [Votre SIRET]</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Hébergement</h2>
              <p>Ce site est hébergé par [Nom de l'hébergeur]</p>
              <p>Adresse : [Adresse de l'hébergeur]</p>
              <p>Téléphone : [Téléphone de l'hébergeur]</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Pickaform ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, ou exploitation totale ou partielle du site et de son contenu, par quelque procédé que ce soit, sans l'autorisation expresse et préalable de Pickaform, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Collecte de données</h2>
              <p>Pickaform ne collecte aucune donnée sur les visiteurs de ce site, pas même des cookies. Nous n'exploitons pas les données des clients, y compris à des fins statistiques.</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Website Publisher</h2>
              <p>Pickaform</p>
              <p>Address: [Your address]</p>
              <p>Email: contact@pickaform.com</p>
              <p>Phone: [Your phone]</p>
              <p>Company Registration: [Your registration number]</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Hosting</h2>
              <p>This site is hosted by [Hosting provider name]</p>
              <p>Address: [Hosting provider address]</p>
              <p>Phone: [Hosting provider phone]</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
              <p>All content on this site (text, images, videos, etc.) is the exclusive property of Pickaform or its partners. Any reproduction, representation, modification, publication, transmission, or exploitation of all or part of the site and its content, by any means whatsoever, without the express and prior authorization of Pickaform, is strictly prohibited and would constitute an infringement punishable by law.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection</h2>
              <p>Pickaform does not collect any data on visitors to this site, not even cookies. We do not use customer data for any purpose, including statistical purposes.</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;

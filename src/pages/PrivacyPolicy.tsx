
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">
          {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
        </h1>
        
        <div className="prose max-w-none">
          {language === 'fr' ? (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p>Pickaform s'engage à protéger votre vie privée. Notre politique reflète notre engagement envers la protection de vos données personnelles.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Collecte de données</h2>
              <p>Pickaform ne collecte aucune donnée personnelle sur les visiteurs de ce site. Nous n'utilisons pas de cookies ni aucun autre moyen de traçage.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Utilisation des données</h2>
              <p>Puisque nous ne collectons aucune donnée, nous n'en utilisons pas. Nous n'exploitons pas les données des clients, y compris à des fins statistiques ou d'amélioration de nos services.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Partage des données</h2>
              <p>Nous ne partageons aucune donnée avec des tiers, puisque nous n'en collectons pas.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Sécurité des données</h2>
              <p>Bien que nous ne collections pas de données, nous prenons toutes les mesures nécessaires pour assurer la sécurité de notre site web contre les accès non autorisés ou les modifications.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
              <p>Pour toute question concernant notre politique de confidentialité, veuillez nous contacter à l'adresse suivante : [Votre adresse email]</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p>Pickaform is committed to protecting your privacy. Our policy reflects our commitment to the protection of your personal data.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection</h2>
              <p>Pickaform does not collect any personal data on visitors to this site. We do not use cookies or any other tracking methods.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Data</h2>
              <p>Since we do not collect any data, we do not use any. We do not use customer data for any purpose, including statistical purposes or service improvement.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing</h2>
              <p>We do not share any data with third parties, as we do not collect any.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
              <p>Although we do not collect data, we take all necessary measures to ensure the security of our website against unauthorized access or modifications.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
              <p>For any questions regarding our privacy policy, please contact us at the following address: [Your email address]</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

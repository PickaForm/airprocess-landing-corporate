
import React from 'react';
import DemoButton from './DemoButton';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary via-primary to-blue-900 text-white overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/10 rounded-full -ml-16 -mb-16"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Pickaform : le no-code conçu pour les grands comptes
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            25 ans d'expertise en optimisation des process métiers condensée en un outil puissant et intuitif. Automatisez, systématisez et optimisez la gestion de vos processus.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <DemoButton className="text-lg px-8 py-4" />
          </div>
        </div>
      </div>
      
      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

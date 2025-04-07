import React from 'react';

// Données fictives de témoignages clients
const testimonials = [
  {
    name: "Sophie Laurent",
    position: "Directrice des Opérations",
    company: "Finance Plus",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Pickaform nous a permis de digitaliser nos processus d'approbation en un temps record. Ce qui prenait auparavant des semaines ne prend plus que quelques minutes. L'interface est intuitive même pour nos collaborateurs les moins techniques."
  },
  {
    name: "Thomas Moreau",
    position: "Responsable IT",
    company: "GroupeSoft",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    text: "En tant que DSI, la sécurité est ma priorité absolue. Pickaform est la seule solution no-code qui a répondu à toutes nos exigences en matière de contrôle d'accès et de gestion des données. L'option on-premise est un vrai plus."
  },
  {
    name: "Marie Dubois",
    position: "Chef de Projet Digital",
    company: "ConseilCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    text: "J'ai créé plus de 15 applications avec Pickaform en seulement quelques mois. L'outil est incroyablement flexible et la nouvelle fonctionnalité IA nous a fait gagner un temps considérable dans la conception et le développement."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Témoignages clients</h2>
          <p className="section-subtitle">
            Nos clients l'ont adopté… découvrez pourquoi ils font confiance à Pickaform !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-medium text-primary-light">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

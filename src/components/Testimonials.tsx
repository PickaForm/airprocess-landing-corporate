
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  // Données de témoignages clients
  const testimonials = [
    {
      name: getTranslation('testimonials.user1.name', language),
      position: getTranslation('testimonials.user1.position', language),
      company: getTranslation('testimonials.user1.company', language),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      text: getTranslation('testimonials.user1.text', language)
    },
    {
      name: getTranslation('testimonials.user2.name', language),
      position: getTranslation('testimonials.user2.position', language),
      company: getTranslation('testimonials.user2.company', language),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      text: getTranslation('testimonials.user2.text', language)
    },
    {
      name: getTranslation('testimonials.user3.name', language),
      position: getTranslation('testimonials.user3.position', language),
      company: getTranslation('testimonials.user3.company', language),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      text: getTranslation('testimonials.user3.text', language)
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{getTranslation('testimonials.title', language)}</h2>
          <p className="section-subtitle">
            {getTranslation('testimonials.subtitle', language)}
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

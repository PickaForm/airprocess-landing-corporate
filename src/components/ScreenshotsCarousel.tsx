
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

const ScreenshotsCarousel: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {getTranslation('screenshots.title', language)}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {getTranslation('screenshots.subtitle', language)}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="relative">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/0b404032-d4d1-46dc-a93d-9c0df423c35d.png" 
                      alt="Applicant workflow interface" 
                      className="w-full h-auto"
                    />
                    <div className="bg-gray-50 p-4">
                      <h3 className="font-medium text-primary">
                        {getTranslation('screenshots.image1.title', language)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {getTranslation('screenshots.image1.description', language)}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/f9c54aeb-7a5f-4859-8705-2caab005d4fd.png" 
                      alt="Project management dashboard" 
                      className="w-full h-auto"
                    />
                    <div className="bg-gray-50 p-4">
                      <h3 className="font-medium text-primary">
                        {getTranslation('screenshots.image2.title', language)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {getTranslation('screenshots.image2.description', language)}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="lg:-left-12 left-2" />
            <CarouselNext className="lg:-right-12 right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;

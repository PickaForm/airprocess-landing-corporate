
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/bb7227e8-7d75-4068-b20c-0f7b948f7cae.png" 
                alt="Workflow diagram" 
                className="rounded-lg shadow-lg max-h-[600px] w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/dadad5aa-8e82-4468-9d1c-90542a18c188.png" 
                alt="Dashboard overview" 
                className="rounded-lg shadow-lg max-h-[600px] w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a4fd9449-9e2c-4f78-834e-4a5c62393277.png" 
                alt="Application workspace" 
                className="rounded-lg shadow-lg max-h-[600px] w-auto"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/60ec5b24-6923-437a-a279-9806ea943a49.png" 
                alt="Workflow history" 
                className="rounded-lg shadow-lg max-h-[600px] w-auto"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

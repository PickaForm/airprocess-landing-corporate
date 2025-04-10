
import React, { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  delay = 0,
  id
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.05, // Lower threshold to trigger earlier
    rootMargin: '0px 0px -15% 0px', // Increased negative margin to trigger even earlier
    triggerOnce: true
  });
  
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'transition-all duration-500',
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;


import React, { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  id
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.05, // Lower threshold to trigger earlier
    rootMargin: '0px 0px -10% 0px', // Back to -10% as requested
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
    >
      {children}
    </section>
  );
};

export default AnimatedSection;

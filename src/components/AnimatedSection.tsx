
import React, { ReactNode, Children, cloneElement, isValidElement } from 'react';
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
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true
  });
  
  // Apply animation to each direct child with a small stagger effect
  const animatedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        className: cn(
          child.props.className,
          'transition-all duration-500',
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10',
          // Add a small stagger delay based on the index
          `transition-delay-${index * 100}ms`
        ),
        style: {
          ...child.props.style,
          transitionDelay: `${index * 100}ms`,
        }
      });
    }
    return child;
  });
  
  return (
    <section
      ref={ref}
      id={id}
      className={cn(className)}
    >
      {animatedChildren}
    </section>
  );
};

export default AnimatedSection;

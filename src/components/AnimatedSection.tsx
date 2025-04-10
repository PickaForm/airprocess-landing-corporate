
import React, { ReactNode, Children, cloneElement, isValidElement, ReactElement } from 'react';
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
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });
  
  // Apply animation to each direct child with a small stagger effect
  const animatedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Properly type the child element
      const childElement = child as ReactElement;
      
      // Create new props object with all the necessary animation styles
      const newProps: any = {
        style: {
          ...childElement.props.style,
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          transitionDelay: `${index * 200}ms`,
          willChange: 'opacity, transform'
        }
      };
      
      // Only apply className if it makes sense to do so
      if ('className' in childElement.props || typeof childElement.type !== 'string') {
        newProps.className = cn(
          childElement.props.className || '',
          'transition-all'
        );
      }
      
      return cloneElement(childElement, newProps);
    }
    return child;
  });
  
  return (
    <section
      ref={ref}
      id={id}
      className={cn(className, 'overflow-hidden')}
    >
      {animatedChildren}
    </section>
  );
};

export default AnimatedSection;

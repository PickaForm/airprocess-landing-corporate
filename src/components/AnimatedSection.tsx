
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
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true
  });
  
  // Apply animation to each direct child with a small stagger effect
  const animatedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Properly type the child element
      const childElement = child as ReactElement;
      
      // Create new props object
      const newProps: any = {
        style: {
          ...childElement.props.style,
          transitionDelay: `${index * 100}ms`,
          transition: 'all 500ms ease-out',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)'
        }
      };
      
      // Only apply className if the original element had one
      if (childElement.props.className !== undefined) {
        newProps.className = cn(
          childElement.props.className,
          'transition-all duration-500'
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
      className={cn(className)}
    >
      {animatedChildren}
    </section>
  );
};

export default AnimatedSection;

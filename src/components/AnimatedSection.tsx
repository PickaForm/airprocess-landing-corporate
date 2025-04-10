
import React, { ReactNode, Children, cloneElement, isValidElement, CSSProperties, ReactElement } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  childDelay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  delay = 0,
  id,
  childDelay = 0.1, // Delay between child animations
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true
  });
  
  // Apply animation to children with staggered delay
  const animatedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const childStyle: CSSProperties = {
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease, transform 0.5s ease`,
        transitionDelay: `${delay + (index * childDelay)}s`,
      };

      // Only add style to elements that can accept it
      return cloneElement(child as ReactElement<{ style?: CSSProperties }>, {
        style: {
          ...(child.props.style || {}),
          ...childStyle,
        },
      });
    }
    return child;
  });
  
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'transition-all duration-700',
        isInView 
          ? 'opacity-100' 
          : 'opacity-0',
        className
      )}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      {animatedChildren}
    </section>
  );
};

export default AnimatedSection;

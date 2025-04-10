
import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true
}: InViewOptions = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        // If triggerOnce is true, we disconnect the observer once the element is in view
        if (triggerOnce && observer) {
          observer.unobserve(currentRef);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    };
    
    // Create the observer with the provided options
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin
    });
    
    // Start observing
    observer.observe(currentRef);
    
    // Clean up the observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);
  
  return [ref, isInView];
}

import React, { useEffect, useState } from 'react';

type UseIntersection = (divReference: React.RefObject<HTMLDivElement>, threshold?: number) => { isVisible: boolean }

export const useIntersection: UseIntersection = (divReference, threshold = 1) => {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  };
  const load = (e: IntersectionObserverEntry[]): void => {
    if (e[0].isIntersecting) {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(load, options);
    observer.observe(divReference.current as HTMLDivElement);
  }, []);
  return { isVisible };
};

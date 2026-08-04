'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  let transformClass = '';
  switch (direction) {
    case 'up':
      transformClass = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0';
      break;
    case 'down':
      transformClass = isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0';
      break;
    case 'left':
      transformClass = isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0';
      break;
    case 'right':
      transformClass = isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0';
      break;
    case 'none':
      transformClass = isVisible ? 'opacity-100' : 'opacity-0';
      break;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${transformClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

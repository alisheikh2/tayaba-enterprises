'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  /** Numeric value to count up to */
  end: number;
  /** Text placed before the number, e.g. "" */
  prefix?: string;
  /** Text placed after the number, e.g. "+", "%" */
  suffix?: string;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
}

/**
 * Animates a number counting up from 0 to `end` once it scrolls
 * into the viewport. Used for stat/testimonial banner figures
 * across the site to give the numbers a dynamic, alive feel.
 */
export default function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 1600,
  className = '',
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out-quart for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(Math.round(eased * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(end);
            }
          };

          requestAnimationFrame(step);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

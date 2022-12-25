import React, { useEffect, useRef, useState } from 'react';
export const useAnimatedValue = (prev: number, current: number, duration: number): { animatedValue: number } => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const diff = current - prev;
  useEffect(() => {
    const countEffect = (): void => {
      if (diff >= 0) {
        if (prev <= current) {
          setAnimatedValue(prev);
          prev++;
        } else {
          clearInterval(interval);
        }
      } else {
        if (prev >= current) {
          setAnimatedValue(prev);
          prev--;
        } else {
          clearInterval(interval);
        }
      }
    };
    const interval = setInterval(countEffect, duration / Math.abs(diff));
  }, [current]);
  return { animatedValue };
};

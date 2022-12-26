import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useAnimatedValue } from '../../hooks/useAnimatedValue';
import { useIntersection } from '../../hooks/useIntersection';
import { IHeat } from '../../types';

const Heat: React.FC<IHeat> = ({
  progress,
  sx,
  showValue,
  showText,
  text,
  revertColor = false,
  range = { from: 0, to: 100 }

}) => {
  const {
    valueSize = 30,
    textSize = 14,
    textFamily = 'Trebuchet MS',
    valueFamily = 'Trebuchet MS',
    textColor = '#000000',
    valueColor = '#000000',
    textWeight = 'normal',
    valueWeight = 'normal',
    strokeLinecap = 'round',
    loadingTime = 500,
    bgColor = '#ffffff',
    shape = 'threequarters',
    valueAnimation = true,
    intersectionEnabled = true
  } = sx;

  const [afterProgress, setAfterProgress] = useState(0);
  const prevRef = useRef(0);
  const heatRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersection(heatRef);

  const setShape = (): number => {
    switch (shape) {
    case 'threequarters':
      return 75;
    case 'half':
      return 50; ;
    }
  };

  const setRotate = (): string => {
    switch (shape) {
    case 'threequarters':
      return 'rotate(135, 55, 55)';
    case 'half':
      return 'rotate(180, 55, 55)'; ;
    }
  };

  const setRatio = (): number => {
    switch (shape) {
    case 'threequarters':
      return 0.75;
    case 'half':
      return 0.5; ;
    }
  };
  const { animatedValue } = useAnimatedValue(prevRef.current / setRatio(), afterProgress / setRatio(), loadingTime);
  useEffect(() => {
    if ((intersectionEnabled && isVisible) || !intersectionEnabled) {
      setAfterProgress(progress * setRatio());
      prevRef.current = afterProgress;
    }
  }, [progress, shape, isVisible]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - (afterProgress + range.from) / range.to) * dasharray;
  return (
    <div ref={heatRef} className='relative'>
      <svg viewBox='0 0 110 110' className='drop-shadow-lg absolute -z-10'>
        <circle
          r='50'
          cx='55'
          cy='55'
          fill='none'
          strokeDasharray={dasharray}
          strokeDashoffset={(1 - setShape() / 100) * dasharray}
          strokeWidth={sx.barWidth}
          stroke={bgColor}
          strokeLinecap={strokeLinecap}
          transform={setRotate()}
        />
      </svg>
      <svg viewBox='0 0 110 110' className='  '>
        {!revertColor
          ? (shape === 'threequarters'
            ? (

              <linearGradient id="gradient" x1="90.7089" y1="75.1526" x2="33.7868" y2="18.2305" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FF00"/>
                <stop offset="0.34691" stopColor="#C1FF00"/>
                <stop offset="0.775843" stopColor="#FFB800"/>
                <stop offset="1" stopColor="#FF0000"/>
              </linearGradient>
            )
            : (
              <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0000"/>
                <stop offset="0.274348" stopColor="#FFB800"/>
                <stop offset="0.676789" stopColor="#C1FF00"/>
                <stop offset="1" stopColor="#00FF00"/>
              </linearGradient>
            )
          )
          : (shape === 'threequarters'
            ? (
              <linearGradient id="gradient" x1="90.7089" y1="75.1526" x2="33.7868" y2="18.2305" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0000"/>
                <stop offset="0.34691" stopColor="#FFB800"/>
                <stop offset="0.775843" stopColor="#C1FF00"/>
                <stop offset="1" stopColor="#00FF00"/>
              </linearGradient>
            )
            : (
              <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FF00"/>
                <stop offset="0.274348" stopColor="#C1FF00"/>
                <stop offset="0.676789" stopColor="#FFB800"/>
                <stop offset="1" stopColor="#FF0000"/>
              </linearGradient>
            )
          )
        }

        <circle
          r='50'
          cx='55'
          cy='55'
          fill='none'
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: loadingTime.toString().concat('ms')
          }}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
          strokeWidth={sx.barWidth}
          stroke='url(#gradient)'
          strokeLinecap={strokeLinecap}
          transform={setRotate()}
        />
        {showValue &&
        <text
          x="50%"
          y={shape === 'half' ? showText ? '35%' : '40%' : showText ? '45%' : '50%' }
          fontSize={valueSize}
          fontWeight={valueWeight}
          fontFamily={valueFamily}
          textAnchor='middle'
          fill={textColor}
        >
          <tspan dominantBaseline={showText ? 'baseline' : 'central'}>
            {valueAnimation ? animatedValue : progress}%
          </tspan>
        </text>}
        {showText &&
        <text
          x="50%"
          y={shape === 'half' ? '40%' : showValue ? '55%' : '50%' }
          fontSize={textSize}
          fontFamily={textFamily}
          fontWeight={textWeight}
          textAnchor='middle'
          fill={valueColor}
          dominantBaseline={showValue ? 'hanging' : 'start'} >
          <tspan dominantBaseline={showValue ? 'hanging' : (shape === 'half' ? 'hanging' : 'middle')}>
            {text}
          </tspan>
        </text>
        }
      </svg>
    </div>
  );
};

export default Heat;

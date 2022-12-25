import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useAnimatedValue } from '../../hooks/useAnimatedValue';
import { IFlat } from '../../types';

const Flat: React.FC<IFlat> = ({
  progress = 0,
  range = { from: 0, to: 100 },
  showMiniCircle = true,
  text = undefined,
  showValue = true,
  showText = false,
  sx
}) => {
  const {
    valueSize = 30,
    valueColor = '#000000',
    valueWeight = 'lighter',
    textSize = 13,
    valueFamily = 'Trebuchet MS',
    textFamily = 'Trebuchet MS',
    textColor = '#000000',
    textWeight = 'lighter',
    loadingTime = 500,
    bgColor = '#ffffff',
    strokeLinecap = 'butt',
    shape = 'full',
    valueAnimation = true
  } = sx;

  const [afterProgress, setAfterProgress] = useState(0);
  const prevCountRef = useRef(0);

  const setShape = (): number => {
    switch (shape) {
    case 'full':
      return 100;
    case 'threequarters':
      return 75;
    case 'half':
      return 50; ;
    }
  };

  const setRotate = (): string => {
    switch (shape) {
    case 'full':
      return 'rotate(-90, 55, 55)';
    case 'threequarters':
      return 'rotate(135, 55, 55)';
    case 'half':
      return 'rotate(180, 55, 55)'; ;
    }
  };

  const setRatio = (): number => {
    switch (shape) {
    case 'full':
      return 1;
    case 'threequarters':
      return 0.75;
    case 'half':
      return 0.5; ;
    }
  };

  const setAngle = (): number => {
    switch (shape) {
    case 'full':
      return 0;
    case 'threequarters':
      return 135;
    case 'half':
      return 90; ;
    }
  };

  const { animatedValue } = useAnimatedValue(prevCountRef.current / setRatio(), afterProgress / setRatio(), loadingTime);

  useEffect(() => {
    setAfterProgress(progress * setRatio());
    prevCountRef.current = afterProgress;
  }, [progress, shape]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - (afterProgress + range.from) / range.to) * dasharray;

  return (
    <div className='relative'>
      <svg viewBox='0 0 110 110'>
        <circle
          cx="55"
          cy="55"
          r="50"
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: loadingTime.toString().concat('ms')
          }}
          strokeWidth={sx.barWidth}
          transform={setRotate()}
          fill="none"
          stroke={sx.barColor}
          shapeRendering='geometricPrecision'
          strokeLinecap={strokeLinecap}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
        />
        {showValue &&
        <text
          x="50%"
          y={shape === 'half' ? '40%' : '50%' }
          fontSize={valueSize}
          fontWeight={valueWeight}
          textAnchor='middle'
          fontFamily={valueFamily}
          fill={valueColor}
        >
          <tspan dominantBaseline={showText ? 'auto' : 'central'}>
            {valueAnimation ? animatedValue : progress}%
          </tspan>
        </text>
        }
        {showText &&
        <text
          x="50%"
          y={shape === 'half' ? '40%' : '50%' }
          fontSize={textSize}
          fontWeight={textWeight}
          textAnchor='middle'
          fill={textColor}
          fontFamily={textFamily}>
          <tspan dominantBaseline={showValue ? 'hanging' : (shape === 'half' ? 'hanging' : 'middle')}>
            {text}
          </tspan>
        </text>
        }
      </svg>
      <svg viewBox='0 0 110 110' className='absolute drop-shadow-lg top-0 -z-10'>
        <circle
          cx="55"
          cy="55"
          r="50"
          fill="none"
          stroke={bgColor}
          strokeWidth={sx.barWidth - 0.3}
          strokeDasharray={dasharray}
          strokeLinecap={strokeLinecap}
          strokeDashoffset={(1 - setShape() / 100) * dasharray}
          transform={setRotate()}
          shapeRendering='geometricPrecision'
        />
      </svg>
      {showMiniCircle &&
        <svg
          viewBox='0 0 110 110'
          className='absolute top-0 '
          style={{
            transition: 'transform ease-in-out',
            MozTransition: 'transform ease-in-out',
            transitionDuration: loadingTime.toString().concat('ms')
          }}
          transform={`rotate(${afterProgress * 3.6 - setAngle()}, 0, 0)`}>
          <circle
            cx='55'
            cy='5'
            r="5"
            fill={sx.miniCircleColor}
          >
          </circle>
        </svg>
      }
    </div>
  );
};

export default Flat;

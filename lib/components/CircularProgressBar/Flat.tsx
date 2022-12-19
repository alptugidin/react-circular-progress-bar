import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../types';

const Flat: React.FC<IFlat> = ({
  progress = 0,
  text = undefined,
  showValue = true,
  showText = false,
  range = { from: 0, to: 100 },
  sx
}) => {
  const [afterProgress, setAfterProgress] = useState(0);

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
    shape = 'full'
  } = sx;

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

  const setBaseline = (): string => {
    switch (shape) {
    case 'full':
      return 'rotate(-90, 55, 55)';
    case 'threequarters':
      return 'rotate(135, 55, 55)';
    case 'half':
      return 'rotate(180, 55, 55)'; ;
    }
  };

  useEffect(() => {
    setAfterProgress(progress * setRatio());
  }, [progress, shape]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - (afterProgress + range.from) / range.to) * dasharray;
  return (
    <div className='relative' style={{ '--transitionDuration': loadingTime.toString().concat('ms') } as CSSProperties}>
      <svg viewBox='0 0 110 110' className=''>
        <circle
          cx="55"
          cy="55"
          r="50"
          className='transition-effect'
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
          <tspan alignmentBaseline={showText ? 'auto' : 'central'}>
            {progress}%
          </tspan>
        </text>}
        {showText &&
        <text
          x="50%"
          y={shape === 'half' ? '40%' : '50%' }
          fontSize={textSize}
          fontWeight={textWeight}
          textAnchor='middle'
          fill={textColor}
          fontFamily={textFamily}>
          <tspan alignmentBaseline={showValue ? 'hanging' : (shape === 'half' ? 'hanging' : 'middle')}>
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
    </div>
  );
};

export default Flat;

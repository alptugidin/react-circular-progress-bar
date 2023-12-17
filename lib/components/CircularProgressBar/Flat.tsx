import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useAnimatedValue } from '../../hooks/useAnimatedValue';
import { useIntersection } from '../../hooks/useIntersection';
import { IFlat } from '../../types';

const Flat: React.FC<IFlat> = ({
  progress = 0,
  range = { from: 0, to: 100 },
  showMiniCircle = true,
  text = undefined,
  showValue = true,
  sign = { value: '%', position: 'end' },
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
    strokeColor = '#000000',
    barWidth = 5,
    loadingTime = 1000,
    bgStrokeColor = '#ffffff',
    bgColor = { value: '#ffffff', transparency: '00' },
    strokeLinecap = 'round',
    shape = 'full',
    valueAnimation = true,
    intersectionEnabled = false,
    miniCircleSize = 5,
    miniCircleColor = '#ff0000'
  } = sx;

  const [afterProgress, setAfterProgress] = useState(0);
  const flatRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(0);
  const { isVisible } = useIntersection(flatRef);
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
    if ((intersectionEnabled && isVisible) || !intersectionEnabled) {
      setAfterProgress(progress * setRatio());
      prevCountRef.current = afterProgress;
    }
  }, [progress, shape, isVisible]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - (afterProgress + range.from) / range.to) * dasharray;

  return (
    <div ref={flatRef} style={{ position: 'relative' }}>
      <svg viewBox='0 0 110 110' style={{ position: 'relative', zIndex: 50 }}>
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
          stroke={sx.strokeColor}
          shapeRendering='geometricPrecision'
          strokeLinecap={strokeLinecap}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
        />
        {showValue &&
        <text
          x="50%"
          y={shape === 'half' ? (text !== undefined && text !== '') ? '35%' : '40%' : (text !== undefined && text !== '') ? '45%' : '50%' }
          fontSize={valueSize}
          fontWeight={valueWeight}
          textAnchor='middle'
          fontFamily={valueFamily}
          fill={valueColor}
        >
          <tspan dominantBaseline={(text !== undefined && text !== '') ? 'auto' : 'central'}>
            {sign.position === 'start'
              ? sign.value + (valueAnimation ? animatedValue : progress).toString()
              : (valueAnimation ? animatedValue : progress).toString().concat(sign.value)
            }
          </tspan>
        </text>
        }
        {(text !== undefined && text !== '') &&
        <text
          x="50%"
          y={shape === 'half' ? '40%' : showValue ? '55%' : '50%' }
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
      <svg viewBox='0 0 110 110'
        style={{
          position: 'absolute',
          top: 0,
          zIndex: -10,
          '--ds1': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))',
          '--ds2': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
          filter: 'var(--ds1) var(--ds2)'
        } as CSSProperties}
      >
        <circle
          cx="55"
          cy="55"
          r="50"
          fill="none"
          stroke={sx.bgStrokeColor ?? 'white'}
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
          style={{
            position: 'absolute',
            top: 0,
            zIndex: '50',
            transition: 'transform ease-in-out',
            MozTransition: 'transform ease-in-out',
            transitionDuration: loadingTime.toString().concat('ms')
          }}
          transform={`rotate(${(afterProgress) * (3.6 / (range.to / 100)) - setAngle()}, 0, 0)`}>
          <circle
            cx='55'
            cy='5'
            r={miniCircleSize}
            fill={miniCircleColor}
          >
          </circle>
        </svg>
      }
      <svg viewBox='0 0 110 110' style={{ position: 'absolute', top: '0', zIndex: '30' }}>
        <circle
          cx='55'
          cy='55'
          r={50 - (sx.barWidth / 2)}
          fill={`${bgColor.value + bgColor.transparency}`}
        />
      </svg>
    </div>
  );
};

export default Flat;

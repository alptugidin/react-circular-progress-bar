import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../types';

const Flat: React.FC<IFlat> = ({
  progress = 0,
  text = undefined,
  showValue = true,
  showText = false,
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
    strokeLinecap = 'butt'
  } = sx;

  useEffect(() => {
    setAfterProgress(progress);
  }, [progress]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setAfterProgress(Math.floor(Math.random() * 100));
  //   }, 1000);
  // }, []);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - afterProgress / 100) * dasharray;
  return (
    <div className='relative' style={{ '--transitionDuration': loadingTime.toString().concat('ms') } as CSSProperties}>
      <svg viewBox='0 0 110 110' className=''>
        <circle
          cx="55"
          cy="55"
          r="50"
          className='transition-effect'
          strokeWidth={sx.barWidth}
          transform='rotate(-90 55 55)'
          fill="none"
          stroke={sx.barColor}
          strokeLinecap={strokeLinecap}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
        />
        {showValue &&
        <text x="50%" y="50%"
          fontSize={valueSize}
          fontWeight={valueWeight}
          textAnchor='middle'
          fontFamily={valueFamily}
          fill={valueColor}
        >
          <tspan alignmentBaseline={showText ? 'baseline' : 'central'}>
            {progress}%
          </tspan>
        </text>}
        {showText &&
        <text x="50%" y="50%"
          fontSize={textSize}
          fontWeight={textWeight}
          textAnchor='middle'
          fill={textColor}
          fontFamily={textFamily}
          dominantBaseline={showValue ? 'hanging' : 'start'} >
          <tspan alignmentBaseline={showValue ? 'hanging' : 'central'}>
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
          strokeWidth={sx.barWidth - 0.1}
        />
      </svg>
    </div>
  );
};

export default Flat;

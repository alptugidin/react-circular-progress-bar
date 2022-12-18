import React, { CSSProperties, useEffect, useState } from 'react';
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
    bgColor = '#ffffff'

  } = sx;

  const [afterProgress, setAfterProgress] = useState(0);

  useEffect(() => {
    setAfterProgress(progress * 0.75);
  }, [progress]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - (afterProgress + range.from) / range.to) * dasharray;
  return (
    <div className='relative'>
      <svg viewBox='0 0 110 110' className='drop-shadow-lg absolute -z-10'>
        <circle
          r='50'
          cx='55'
          cy='55'
          fill='none'
          strokeDasharray={dasharray}
          strokeDashoffset={(1 - 75 / 100) * dasharray}
          strokeWidth={sx.barWidth}
          stroke={bgColor}
          strokeLinecap={strokeLinecap}
          transform='rotate(135, 55, 55)'
        />
      </svg>
      <svg viewBox='0 0 110 110' className='  '>
        {!revertColor
          ? (
            <linearGradient id="gradient" x1="90.7089" y1="75.1526" x2="33.7868" y2="18.2305" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF00"/>
              <stop offset="0.34691" stopColor="#C1FF00"/>
              <stop offset="0.775843" stopColor="#FFB800"/>
              <stop offset="1" stopColor="#FF0000"/>
            </linearGradient>
          )
          : (
            <linearGradient id="gradient" x1="90.7089" y1="75.1526" x2="33.7868" y2="18.2305" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000"/>
              <stop offset="0.34691" stopColor="#FFB800"/>
              <stop offset="0.775843" stopColor="#C1FF00"/>
              <stop offset="1" stopColor="#00FF00"/>
            </linearGradient>
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
          transform='rotate(135, 55, 55)'
        />
        {showValue &&
        <text x="50%" y="50%"
          fontSize={valueSize}
          fontWeight={valueWeight}
          fontFamily={valueFamily}
          textAnchor='middle'
          fill={textColor}
        >
          <tspan alignmentBaseline={text !== undefined ? 'baseline' : 'central'}>
            {progress}%
          </tspan>
        </text>}
        {showText &&
        <text x="50%" y="50%"
          fontSize={textSize}
          fontFamily={textFamily}
          fontWeight={textWeight}
          textAnchor='middle'
          fill={valueColor}
          dominantBaseline={showValue ? 'hanging' : 'start'} >
          <tspan alignmentBaseline={showValue ? 'hanging' : 'central'}>
            {text}
          </tspan>
        </text>
        }
      </svg>

    </div>
  );
};

export default Heat;

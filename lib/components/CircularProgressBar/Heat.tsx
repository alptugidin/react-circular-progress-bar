import React, { CSSProperties, useEffect, useState } from 'react';
import { IHeat } from '../../types';

const Heat: React.FC<IHeat> = ({ progress, sx, showValue, text, revertColor = false }) => {
  const {
    valueSize = 30,
    textSize = 13,
    textColor = '#000000',
    valueColor = '#000000',
    textWeight = 'normal',
    loadingTime = 500
  } = sx;

  const [afterProgress, setAfterProgress] = useState(0);

  useEffect(() => {
    setAfterProgress(progress * 0.75);
  }, [progress]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - afterProgress / 100) * dasharray;
  return (
    <div>
      <svg viewBox='0 0 110 110' className='drop-shadow-lg'>
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
          className='transition-effect'
          strokeDasharray={dasharray}
          strokeDashoffset={(1 - 75 / 100) * dasharray}
          strokeWidth={sx.barWidth}
          stroke={sx.bgColor}
          strokeLinecap='round'
          transform='rotate(135, 55, 55)'
        />
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
          strokeLinecap='round'
          transform='rotate(135, 55, 55)'
        />
        {showValue &&
        <text x="50%" y="50%"
          fontSize={valueSize}
          fontWeight={textWeight}
          textAnchor='middle'
          fill={textColor}
        >
          <tspan alignmentBaseline={text !== undefined ? 'baseline' : 'central'}>
            {progress}%
          </tspan>
        </text>}
        {text !== undefined &&
        <text x="50%" y="50%"
          fontSize={textSize}
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

import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { IFlat } from '../../types';

const Flat: React.FC<IFlat> = ({
  progress = 0,
  text = undefined,
  showValue = true,
  sx
}) => {
  const [afterProgress, setAfterProgress] = useState(0);

  const {
    valueSize = 30,
    valueColor = 'black',
    valueWeight = 'normal',
    textSize = 13,
    textColor = 'black',
    textWeight = 'normal',
    loadingTime = 500,
    bgColor = 'black',
    bgOpacity = 0.0
  } = sx;

  useEffect(() => {
    setAfterProgress(progress);
  }, [progress]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - afterProgress / 100) * dasharray;
  return (
    <div style={{ '--transitionDuration': loadingTime.toString().concat('ms') } as CSSProperties}>
      <svg viewBox='0 0 110 110' className='drop-shadow-lg'>
        <circle
          id='circle-bg'
          cx="145"
          cy="55"
          r="52"
          fill={bgColor}
          fillOpacity={bgOpacity}
          transform='rotate(-90 100 100)'
        />
        <circle
          cx="145"
          cy="55"
          r="50"
          transform='rotate(-90 100 100)'
          fill="none"
          stroke={sx.barColor}
          strokeWidth={sx.barWidth - 0.1}
          strokeOpacity='0.1'
          strokeDasharray='0'
          strokeDashoffset='0'
        />
        <circle
          cx="145"
          cy="55"
          r="50"
          className='transition-effect'
          strokeWidth={sx.barWidth}
          transform='rotate(-90 100 100)'
          fill="none"
          stroke={sx.barColor}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
        />
        {showValue &&
        <text x="50%" y="50%"
          fontSize={valueSize}
          fontWeight={valueWeight}
          textAnchor='middle'
          fill={valueColor}
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
          fill={textColor}
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

export default Flat;

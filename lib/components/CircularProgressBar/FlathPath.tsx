import React, { CSSProperties, useEffect, useState } from 'react';
import { IFlat } from '../../types';

const FlatPath: React.FC<IFlat> = ({
  progress = 0,
  text = undefined,
  showValue = true,
  sx
}): any => {
  const [afterProgress, setAfterProgress] = useState(0);

  const dasharray = 2 * Math.PI * 44.98;
  const dashoffset = -1 * (1 - afterProgress / 100) * dasharray;

  const {
    valueSize = 30,
    valueColor = 'black',
    valueWeight = 'normal',
    textSize = 13,
    valueFamily = 'Microsoft Sans Serif MS',
    textFamily = 'Microsoft Sans Serif MS',
    textColor = 'black',
    textWeight = 'normal',
    loadingTime = 500,
    bgColor = 'white',
    bgOpacity = 0.0
  } = sx;

  useEffect(() => {
    setAfterProgress(progress);
  }, [progress]);
  return (
    <div className='relative'>
      <input className='absolute left-56' type="range" min={0} max={100} onChange={(e) => setAfterProgress(parseInt(e.target.value))} />
      <svg viewBox="0 0 110 110"
        className="animation"
        style={{ '--transitionDuration': loadingTime.toString().concat('ms') } as CSSProperties}>

        <path
          className="circle"
          fill='none'
          stroke='red'
          strokeWidth={sx.barWidth}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
          d="M 55 10 A 1 1 0 0 0 55 100 A 1 1 0 0 0 55 10"
        />
        {showValue &&
        <text x="50%" y="50%"
          fontSize={valueSize}
          fontWeight={valueWeight}
          textAnchor='middle'
          fontFamily={valueFamily}
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
          fontFamily={textFamily}
          dominantBaseline={showValue ? 'hanging' : 'start'} >
          <tspan alignmentBaseline={showValue ? 'hanging' : 'central'}>
            {text}
          </tspan>
        </text>
        }
      </svg>

      <svg viewBox='0 0 110 110' className='absolute drop-shadow-lg top-0 -z-10'>
        <path
          fill='none'
          strokeWidth={sx.barWidth}
          stroke={bgColor}
          d="M 55 10 A 1 1 0 0 0 55 100 A 1 1 0 0 0 55 10"
        />
      </svg>
    </div>
  );
};

export default FlatPath;

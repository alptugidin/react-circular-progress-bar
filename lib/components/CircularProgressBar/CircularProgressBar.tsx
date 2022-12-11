import React, { useEffect, useRef, useState } from 'react';
import { ICircularProgressBar } from '../../types';

const CircularProgressBar: React.FC<ICircularProgressBar> = ({
  value = 0,
  barColor = 'black',
  additionalText = undefined,
  barWidth = 5,
  showValue = true,
  text = {
    valueSize: 16,
    additionalTextSize: 10,
    weight: 'normal',
    color: 'yellow'
  }
}) => {
  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - value / 100) * dasharray;
  const minH = text.valueSize !== undefined ? text.valueSize + 5 : text.valueSize;

  return (
    <div className='relative'>
      <svg viewBox='0 0 110 110'>
        <circle
          cx="145"
          cy="55"
          r="50"
          strokeWidth={barWidth - 0.1}
          transform='rotate(-90 100 100)'
          fill="none"
          stroke={barColor}
          opacity='0.1'
          strokeDasharray='0'
          strokeDashoffset='0'
        />
        <circle
          cx="145"
          cy="55"
          r="50"
          strokeWidth={barWidth}
          transform='rotate(-90 100 100)'
          fill="none"
          stroke={barColor}
          className='custom-svg'
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
        />
        {showValue &&
        <text x="50%" y="50%"
          fontSize={text.valueSize}
          textAnchor='middle'
          fill={text.color}
          dominantBaseline={additionalText !== undefined ? 'start' : 'middle'}
        >
          {value}%
        </text>}
        {additionalText !== undefined &&
        <text x="50%" y="50%"
          fontSize={text.additionalTextSize}
          textAnchor='middle'
          fill={text.additionalTextColor}
          dominantBaseline={showValue ? 'hanging' : 'start'}
        >
          {additionalText}
        </text>
        }
      </svg>
    </div>
  );
};

export default CircularProgressBar;

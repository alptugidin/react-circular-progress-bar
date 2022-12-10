import React, { useEffect, useRef, useState } from 'react';
import { ICircularProgressBar } from '../../types';

const CircularProgressBar: React.FC<ICircularProgressBar> = ({ value }) => {
  // Calculate the dasharray value for the <circle> element
  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - value / 100) * dasharray;

  return (
    <svg viewBox='0 0 110 110' className='stroke-blue-400'>
      <circle
        cx="145"
        cy="55"
        r="50"
        strokeWidth="5"
        transform='rotate(-90 100 100)'
        fill="none"
        strokeDasharray={dasharray}
        strokeDashoffset={dashoffset}
      />
    </svg>
  );
};

export default CircularProgressBar;

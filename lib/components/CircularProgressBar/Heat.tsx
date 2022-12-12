import React, { CSSProperties, useEffect, useState } from 'react';
import { IHeat } from '../../types';

const Flat: React.FC<IHeat> = ({ progress }) => {
  const [afterProgress, setAfterProgress] = useState(0);

  useEffect(() => {
    setAfterProgress(progress);
  }, [progress]);

  const dasharray = 2 * Math.PI * 55;
  const dashoffset = (1 - afterProgress / 100) * dasharray;
  return (
    <div style={{ '--transitionDuration': '500ms' } as CSSProperties}>
      {/* <svg viewBox='0 0 110 110'>
        <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 60 60">
          <image x="0%" y="0%" width="60" height="60" xlinkHref="/angular.png"></image>
        </pattern>
s        <circle
          cx="145"
          cy="55"
          r="55"
          className='svg-ratio'
          transform='rotate(-90 100 100)'
          fill='none'
          stroke='rgb(222 222 222)'
          // stroke='red'
          strokeWidth={10}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
        />
      </svg> */}
    </div>
  );
};

export default Flat;

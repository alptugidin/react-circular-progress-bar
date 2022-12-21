import React, { useEffect, useState } from 'react';
import { INested } from '../../types';

const Nested: React.FC<INested> = ({
  circles,
  sx
}) => {
  const { strokeLinecap = 'round' } = sx;
  const [afterProgress, setAfterProgress] = useState(
    { circle1: 0, circle2: 0, circle3: 0 }
  );
  const c1p = 50;
  const c2p = 40;
  const c3p = 30;
  const dashoffset1 = (1 - (afterProgress.circle1) / 100) * 2 * Math.PI * c1p;
  const dashoffset2 = (1 - (afterProgress.circle2 ?? 0) / 100) * 2 * Math.PI * c2p;
  const dashoffset3 = (1 - (afterProgress.circle3 ?? 0) / 100) * 2 * Math.PI * c3p;
  const strokeWidth = 4;
  useEffect(() => {
    setAfterProgress({ circle1: circles.circle1, circle2: circles.circle2 ?? 0, circle3: circles.circle3 ?? 0 });
  }, [circles]);

  return (
    <div className='relative'>
      <svg id='circle1' viewBox='0 0 110 110'>
        <circle
          cx='55'
          cy='55'
          r={c1p}
          fill='none'
          stroke='#ECECEC'
          strokeWidth={strokeWidth}
        >
        </circle>
        <circle
          cx='55'
          cy='55'
          r={c1p}
          fill='none'
          transform='rotate(-90, 55, 55)'
          strokeDasharray={2 * Math.PI * c1p}
          strokeDashoffset={dashoffset1}
          stroke={sx?.circle1Color}
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: '1000ms'
          }}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        >
        </circle>
      </svg>
      <svg id='circle2' viewBox='0 0 110 110' className='absolute top-0 hidden'>
        <circle
          cx='55'
          cy='55'
          r={c2p}
          fill='none'
          stroke='#ECECEC'
          strokeWidth={strokeWidth}
        >

        </circle>
        <circle
          cx='55'
          cy='55'
          r={c2p}
          fill='none'
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: '1000ms'
          }}
          transform='rotate(-90, 55, 55)'
          strokeDasharray={2 * Math.PI * c2p}
          strokeDashoffset={dashoffset2}
          stroke={sx?.circle2Color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        >
        </circle>
      </svg>
      {circles.circle3 !== -1 &&
      <svg id='circle3' viewBox='0 0 110 110' className='absolute top-0'>
        <circle
          cx='55'
          cy='55'
          r={c3p}
          fill='none'
          stroke='#ECECEC'
          strokeWidth={strokeWidth}
        >

        </circle>
        <circle
          cx='55'
          cy='55'
          r={c3p}
          fill='none'
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: '1000ms'
          }}
          transform='rotate(-90, 55, 55)'
          strokeDasharray={2 * Math.PI * c3p}
          strokeDashoffset={dashoffset3}
          stroke={sx?.circle3Color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        >
        </circle>
      </svg>
      }
    </div>
  );
};

export default Nested;

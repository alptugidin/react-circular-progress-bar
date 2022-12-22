import React, { useEffect, useState } from 'react';
import { INested } from '../../types';

const Nested: React.FC<INested> = ({
  circles,
  sx
}) => {
  const { strokeLinecap = 'round' } = sx;
  const [afterProgress, setAfterProgress] = useState(
    { circle1: 0, circle2: 0, circle3: 0, circle4: 0, circle5: 0 }
  );
  circles.sort((a: any, b: any) => b.value - a.value);
  const c1p = 50;
  const c2p = 40;
  const c3p = 30;
  const c4p = 20;
  const c5p = 10;
  const cp = [c1p, c2p, c3p, c4p, c5p];
  const textGap = [7, 18, 29, 40, 51];
  const dashoffset1 = (1 - (afterProgress.circle1 * 0.75) / 100) * 2 * Math.PI * c1p;
  const dashoffset2 = (1 - (afterProgress.circle2 * 0.75) / 100) * 2 * Math.PI * c2p;
  const dashoffset3 = (1 - (afterProgress.circle3 * 0.75) / 100) * 2 * Math.PI * c3p;
  const dashoffset4 = (1 - (afterProgress.circle4 * 0.75) / 100) * 2 * Math.PI * c4p;
  const dashoffset5 = (1 - (afterProgress.circle5 * 0.75) / 100) * 2 * Math.PI * c5p;
  const dashoffsets = [dashoffset1, dashoffset2, dashoffset3, dashoffset4, dashoffset5];
  const strokeWidth = 6;
  const fontsize = 6;
  const fonntWeight = 'bold';
  useEffect(() => {
    setAfterProgress({
      circle1: circles[0].value,
      circle2: circles[1].value,
      circle3: circles[2] !== undefined ? circles[2].value : -1,
      circle4: circles[3] !== undefined ? circles[3].value : -1,
      circle5: circles[4] !== undefined ? circles[4].value : -1
    });
  }, [circles]);

  return (
    <div className='relative'>
      <svg id='texts' viewBox='0 0 55 55' width={'46%'} className='absolute'>
        {circles.map((circle, i) => (
          circles[i]?.value !== -1 &&
          <text
            key={i}
            x='55'
            y={textGap[i]}
            fontSize={fontsize}
            fontWeight={fonntWeight}
            textAnchor='end'>
            {circle?.text} {circle?.value}%
          </text>
        ))}
      </svg>
      <svg id='bg' viewBox='0 0 110 110'>
        {circles.map((circle, i) => (
          <g key={i}>
            { circles[i]?.value !== -1 &&
            <>
              {/* background circles */}
              <circle
                cx='55'
                cy='55'
                r={50 - (10 * i)}
                fill='none'
                stroke='#cbd5e1'
                strokeWidth={6}
                strokeDasharray={2 * Math.PI * (50 - 10 * i)}
                strokeDashoffset={(1 - (75) / 100) * 2 * Math.PI * (50 - 10 * i)}
                transform='rotate(-90, 55, 55)'
                strokeLinecap={strokeLinecap}
              />
              <circle
                cx='55'
                cy='55'
                r={cp[i]}
                style={{
                  transition: 'stroke-dashoffset ease-in-out',
                  transitionDuration: '1000ms'
                }}
                fill='none'
                // className='transition-bg'
                transform='rotate(-90, 55, 55)'
                strokeDasharray={2 * Math.PI * cp[i]}
                strokeDashoffset={dashoffsets[i]}
                stroke={circle?.color}
                strokeWidth={strokeWidth}
                strokeLinecap={sx.strokeLinecap}
              />
            </>
            }
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Nested;

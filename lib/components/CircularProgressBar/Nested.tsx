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
  const c1p = 50;
  const c2p = 40;
  const c3p = 30;
  const c4p = 20;
  const c5p = 10;
  const dashoffset1 = (1 - (afterProgress.circle1 * 0.75) / 100) * 2 * Math.PI * c1p;
  const dashoffset2 = (1 - (afterProgress.circle2 * 0.75 ?? 0) / 100) * 2 * Math.PI * c2p;
  const dashoffset3 = (1 - (afterProgress.circle3 * 0.75 ?? 0) / 100) * 2 * Math.PI * c3p;
  const dashoffset4 = (1 - (afterProgress.circle4 * 0.75 ?? 0) / 100) * 2 * Math.PI * c4p;
  const dashoffset5 = (1 - (afterProgress.circle5 * 0.75 ?? 0) / 100) * 2 * Math.PI * c5p;
  const strokeWidth = 6;
  const fontsize = 5.5;
  useEffect(() => {
    setAfterProgress({

      circle1: circles.circle1.value,
      circle2: circles.circle2.value,
      circle3: circles.circle3?.value ?? -1,
      circle4: circles.circle4?.value ?? -1,
      circle5: circles.circle5?.value ?? -1
    });
  }, [circles]);

  return (
    <div className='relative'>
      <svg id='circle1' viewBox='0 0 110 110' className=''>

        {Object.entries(circles).map((c, i) => (
          <svg key={i} id='bg' className=' absolute top-0'>
            <circle
              cx={55}
              cy={55}
              r={50 - (10 * i)}
              fill='none'
              stroke='#cbd5e1'
              strokeWidth={6}
              strokeDasharray={2 * Math.PI * (50 - 10 * i)}
              strokeDashoffset={(1 - (75) / 100) * 2 * Math.PI * (50 - 10 * i)}
              transform='rotate(-90, 55, 55)'
              strokeLinecap='round'
            />
          </svg>
        ))}
        <svg id='circle1' viewBox='0 0 110 110' className='absolute top-0'>
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
          <text
            x='45%'
            y='1.5'
            alignmentBaseline='hanging'
            textAnchor='end'
            fontSize={fontsize}
            fontWeight='bold'
            fill='black'
          >
            {circles.circle1.text} {circles.circle1.value}%
          </text>
        </svg>
      </svg>
      <svg id='circle2' viewBox='0 0 110 110' className='absolute top-0'>
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
        <text
          x='45%'
          y='11.5'
          alignmentBaseline='hanging'
          textAnchor='end'
          fontSize={fontsize}
          fontWeight='bold'
        >
          {circles.circle2.text} {circles.circle2.value}%
        </text>
      </svg>
      {circles.circle3?.value !== -1 &&
      <svg id='circle3' viewBox='0 0 110 110' className='absolute top-0'>
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
        <text
          x='45%'
          y='21.5'
          alignmentBaseline='hanging'
          textAnchor='end'
          fontSize={fontsize}
          fontWeight='bold  '
        >
          {circles.circle3?.text} {circles.circle3?.value}%
        </text>
      </svg>
      }
      {circles.circle4?.value !== -1 &&
      <svg id='circle4' viewBox='0 0 110 110' className='absolute top-0'>
        <circle
          cx='55'
          cy='55'
          r={c4p}
          fill='none'
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: '1000ms'
          }}
          transform='rotate(-90, 55, 55)'
          strokeDasharray={2 * Math.PI * c4p}
          strokeDashoffset={dashoffset4}
          stroke={sx?.circle4Color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        >
        </circle>

        <text
          x='45%'
          y='31.5'
          alignmentBaseline='hanging'
          textAnchor='end'
          fontSize={fontsize}
          fontWeight='bold'
        >
          {circles.circle4?.text} {circles.circle4?.value}%
        </text>
      </svg>
      }
      {circles.circle5?.value !== -1 &&
      <svg id='circle5' viewBox='0 0 110 110' className='absolute top-0'>
        <circle
          cx='55'
          cy='55'
          r={c5p}
          fill='none'
          style={{
            transition: 'stroke-dashoffset ease-in-out',
            transitionDuration: '1000ms'
          }}
          transform='rotate(-90, 55, 55)'
          strokeDasharray={2 * Math.PI * c5p}
          strokeDashoffset={dashoffset5}
          stroke={sx?.circle5Color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        >
        </circle>
        <text
          x='45%'
          y='41.5'
          alignmentBaseline='hanging'
          textAnchor='end'
          fontSize={fontsize}
          fontWeight='bold'
        >
          {circles.circle5?.text} {circles.circle5?.value}%
        </text>
      </svg>
      }
    </div>
  );
};

export default Nested;

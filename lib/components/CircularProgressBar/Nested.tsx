import React, { useEffect, useRef, useState } from 'react';
import { useAnimatedValue } from '../../hooks/useAnimatedValue';
import { useIntersection } from '../../hooks/useIntersection';
import { INested } from '../../types';

const Nested: React.FC<INested> = ({
  circles,
  sx
}) => {
  const {
    strokeLinecap = 'round',
    fontWeight = 'bold',
    fontFamily = 'Trebuchet MS',
    loadingTime = 1000,
    valueAnimation = true,
    intersectionEnabled = true
  } = sx;
  const [afterProgress, setAfterProgress] = useState(
    { circle1: 0, circle2: 0, circle3: 0, circle4: 0, circle5: 0 }
  );

  const prevCountRef1 = useRef(0);
  const prevCountRef2 = useRef(0);
  const prevCountRef3 = useRef(0);
  const prevCountRef4 = useRef(0);
  const prevCountRef5 = useRef(0);

  const nestedRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersection(nestedRef);

  circles.sort((a: any, b: any) => b.value - a.value);
  const c1p = 50;
  const c2p = 40;
  const c3p = 30;
  const c4p = 20;
  const c5p = 10;
  const cp = [c1p, c2p, c3p, c4p, c5p];
  const textGap = [8.5, 19.5, 31.5, 43.5, 54.5];
  const dashoffset1 = (1 - (afterProgress.circle1 * 0.75) / 100) * 2 * Math.PI * c1p;
  const dashoffset2 = (1 - (afterProgress.circle2 * 0.75) / 100) * 2 * Math.PI * c2p;
  const dashoffset3 = (1 - (afterProgress.circle3 * 0.75) / 100) * 2 * Math.PI * c3p;
  const dashoffset4 = (1 - (afterProgress.circle4 * 0.75) / 100) * 2 * Math.PI * c4p;
  const dashoffset5 = (1 - (afterProgress.circle5 * 0.75) / 100) * 2 * Math.PI * c5p;
  const dashoffsets = [dashoffset1, dashoffset2, dashoffset3, dashoffset4, dashoffset5];
  const strokeWidth = 6;
  const fontsize = 7;

  const { animatedValue: animatedValue1 } = useAnimatedValue(prevCountRef1.current, afterProgress.circle1, loadingTime);
  const { animatedValue: animatedValue2 } = useAnimatedValue(prevCountRef2.current, afterProgress.circle2, loadingTime);
  const { animatedValue: animatedValue3 } = useAnimatedValue(prevCountRef3.current, afterProgress.circle3, loadingTime);
  const { animatedValue: animatedValue4 } = useAnimatedValue(prevCountRef4.current, afterProgress.circle4, loadingTime);
  const { animatedValue: animatedValue5 } = useAnimatedValue(prevCountRef5.current, afterProgress.circle5, loadingTime);

  useEffect(() => {
    if ((intersectionEnabled && isVisible) || !intersectionEnabled) {
      setAfterProgress({
        circle1: circles[0].value,
        circle2: circles[1].value,
        circle3: circles[2] !== undefined ? circles[2].value : -1,
        circle4: circles[3] !== undefined ? circles[3].value : -1,
        circle5: circles[4] !== undefined ? circles[4].value : -1
      });

      prevCountRef1.current = afterProgress.circle1;
      prevCountRef2.current = afterProgress.circle2;
      prevCountRef3.current = afterProgress.circle3;
      prevCountRef4.current = afterProgress.circle4;
      prevCountRef5.current = afterProgress.circle5;
    }
  }, [circles, isVisible]);
  const animatedValues = [animatedValue1, animatedValue2, animatedValue3, animatedValue4, animatedValue5].sort((a, b) => b - a);
  return (
    <div ref={nestedRef} className='relative'>
      <svg id='texts' viewBox='0 0 55 60' width={'43%'} className='absolute transition-all'>
        {circles.map((circle, i) => (
          circles[i]?.value !== -1 &&
          <text
            key={i}
            x='55'
            y={textGap[i]}
            fontSize={fontsize}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            textAnchor='end'>
            {circle?.text} {valueAnimation ? Math.round(animatedValues[i]) : circle?.value}%
          </text>
        ))}
      </svg>
      <svg id='bg' viewBox='0 0 110 110'>
        {circles.map((circle, i) => (
          <g key={i}>
            { circles[i]?.value !== -1 &&
            <g>
              {/* background circles */}
              <circle
                cx='55'
                cy='55'
                r={50 - (10 * i)}
                fill='none'
                stroke={sx.bgColor}
                strokeWidth={6}
                strokeDasharray={2 * Math.PI * (50 - 10 * i)}
                strokeDashoffset={(1 - (75) / 100) * 2 * Math.PI * (50 - 10 * i)}
                transform='rotate(-90, 55, 55)'
                strokeLinecap={strokeLinecap}
              />
              {/* progress circles */}
              <circle
                cx='55'
                cy='55'
                r={cp[i]}
                style={{
                  transition: `stroke 100ms, stroke-dashoffset ${loadingTime.toString().concat('ms')} ease-in-out`
                }}
                fill='none'
                transform='rotate(-90, 55, 55)'
                strokeDasharray={2 * Math.PI * cp[i]}
                strokeDashoffset={dashoffsets[i]}
                stroke={circle?.color}
                strokeWidth={strokeWidth}
                strokeLinecap={sx.strokeLinecap}
              />
            </g>
            }
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Nested;

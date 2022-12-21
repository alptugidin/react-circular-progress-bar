import React, { useState } from 'react';
import { Nested } from '../../../lib';
import { INestedOptions } from '../../types';
import Settings from './Settings';

const NestedDemo: React.FC = () => {
  const [nestedOptions, setNestedOptions] = useState<INestedOptions>({
    progress: { circle1: 50, circle2: 50, circle3: 50, circle4: 50, circle5: 50 },
    circle1color: '#ef4444',
    circle2color: '#eab308',
    circle3color: '#65a30d',
    circle4color: '#9333ea',
    circle5color: '#64748b'
  });
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-72'>
        <Nested
          circles={{
            circle1: nestedOptions.progress.circle1,
            circle2: nestedOptions.progress.circle2,
            circle3: nestedOptions.progress.circle3,
            circle4: nestedOptions.progress.circle4,
            circle5: nestedOptions.progress.circle5
          }}
          sx={{
            circle1Color: nestedOptions.circle1color,
            circle2Color: nestedOptions.circle2color,
            circle3Color: nestedOptions.circle3color,
            circle4Color: nestedOptions.circle4color,
            circle5Color: nestedOptions.circle5color
          }}
        />
      </div>
      <div className='w-full'>
        <Settings {...{ nestedOptions, setNestedOptions }} />
      </div>
    </div>
  );
};

export default NestedDemo;

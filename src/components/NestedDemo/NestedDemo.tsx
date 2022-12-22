import React, { useState } from 'react';
import { Nested } from '../../../lib';
import { INestedOptions } from '../../types';
import Settings from './Settings';

const NestedDemo: React.FC = () => {
  const [nestedOptions, setNestedOptions] = useState<INestedOptions>({
    circle1: { text: 'Javascript', value: 20, color: '#fde047' },
    circle2: { text: 'Typescript', value: 100, color: '#0ea5e9' },
    circle3: { text: 'HTML', value: 8, color: '#c2410c' },
    circle4: { text: 'CSS', value: 12, color: '#7c3aed' },
    circle5: { text: 'SASS', value: 10, color: '#c026d3' }
  });
  const a = 5;
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-64'>
        <Nested
          circles={[
            { text: nestedOptions.circle1.text, value: nestedOptions.circle1.value, color: nestedOptions.circle1.color },
            { text: nestedOptions.circle2.text, value: nestedOptions.circle2.value, color: nestedOptions.circle2.color },
            { text: nestedOptions.circle3.text, value: nestedOptions.circle3.value, color: nestedOptions.circle3.color },
            { text: nestedOptions.circle4.text, value: nestedOptions.circle4.value, color: nestedOptions.circle4.color },
            { text: nestedOptions.circle5.text, value: nestedOptions.circle5.value, color: nestedOptions.circle5.color }
          ]}
          sx={{
            strokeLinecap: 'round'
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

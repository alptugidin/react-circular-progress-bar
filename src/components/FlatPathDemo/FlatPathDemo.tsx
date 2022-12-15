import React, { useState } from 'react';
import { FlatPath } from '../../../lib';
import { IFlatOptions } from '../../types';
import Settings from '../FlatDemo/Settings';

const FlatPathDemo: React.FC = () => {
  const [progress, setProgress] = useState(25);
  const [flatOptions, setFlatOptions] = useState<IFlatOptions>(
    {
      strokeColor: '#ff0000',
      strokeWidth: 5,
      valueSize: 30,
      textSize: 13,
      valueWeight: 'lighter',
      textWeight: 'lighter',
      valueFamily: 'Microsoft Sans Serif',
      textFamily: 'Microsoft Sans Serif',
      valueColor: '#000000',
      textColor: '#000000',
      showValue: true,
      showText: true,
      loadingTime: 1000,
      text: 'Lorem, ipsum.'
    }
  );
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48'>
        <FlatPath
          progress={progress}
          showValue={true}
          text={flatOptions.text}
          sx={{
            barColor: flatOptions.strokeColor,
            barWidth: flatOptions.strokeWidth,
            loadingTime: flatOptions.loadingTime,
            valueSize: flatOptions.valueSize,
            textSize: flatOptions.textSize,
            valueFamily: flatOptions.valueFamily,
            valueWeight: flatOptions.valueWeight,
            textWeight: flatOptions.textWeight,
            textFamily: flatOptions.textFamily,
            valueColor: flatOptions.valueColor,
            textColor: flatOptions.textColor,
            bgColor: 'white',
            bgOpacity: 0.0
          }}
        />
      </div>
      <div className='w-fit'>
        {/* <Settings {...{ setFlatOptions, flatOptions, setProgress, progress }}/> */}
      </div>
    </div>
  );
};

export default FlatPathDemo;

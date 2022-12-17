import React, { useState } from 'react';
import { Flat } from '../../../lib';
import { IFlatOptions } from '../../types';
import Settings from './Settings';

const FlatDemo: React.FC = () => {
  const [progress, setProgress] = useState(50);
  const [flatOptions, setFlatOptions] = useState<IFlatOptions>(
    {
      strokeColor: '#ff0000',
      strokeWidth: 5,
      valueSize: 30,
      textSize: 14,
      valueWeight: 'normal',
      textWeight: 'normal',
      valueFamily: 'Trebuchet MS',
      textFamily: 'Trebuchet MS',
      valueColor: '#000000',
      textColor: '#000000',
      showValue: true,
      showText: true,
      loadingTime: 1000,
      text: 'Lorem, ipsum.',
      bgColor: '#ffffff',
      strokeLinecap: 'butt'
    }
  );
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48'>
        <Flat
          progress={progress}
          showValue={flatOptions.showValue}
          showText={flatOptions.showText}
          text={flatOptions.text}
          sx={{
            barColor: flatOptions.strokeColor,
            barWidth: flatOptions.strokeWidth,
            loadingTime: flatOptions.loadingTime,
            valueSize: flatOptions.valueSize,
            textSize: flatOptions.textSize,
            valueWeight: flatOptions.valueWeight,
            textWeight: flatOptions.textWeight,
            valueFamily: flatOptions.valueFamily,
            textFamily: flatOptions.textFamily,
            valueColor: flatOptions.valueColor,
            textColor: flatOptions.textColor,
            bgColor: flatOptions.bgColor,
            strokeLinecap: flatOptions.strokeLinecap
          }}
        />
      </div>
      <div className='w-fit'>
        <Settings {...{ setFlatOptions, flatOptions, setProgress, progress }}/>
      </div>
    </div>
  );
};

export default FlatDemo;

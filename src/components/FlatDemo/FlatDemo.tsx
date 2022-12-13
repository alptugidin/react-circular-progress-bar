import React, { useState } from 'react';
import { Flat } from '../../../lib';
import { IFlatOptions } from '../../types';
import Settings from './Settings';

const FlatDemo: React.FC = () => {
  const [progress, setProgress] = useState(50);
  const [width, setWidth] = useState(192);
  const [flatOptions, setFlatOptions] = useState<IFlatOptions>(
    {
      strokeColor: '#ff0000',
      strokeWidth: 5,
      fontSize: 16,
      textSize: 16,
      fontWeight: 'normal',
      textWeight: 'normal',
      valueColor: '#000000',
      textColor: '#000000',
      showValue: true,
      showText: true,
      loadingTime: 500,
      text: 'Lorem, ipsum.'
    }
  );
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48'>
        <Flat
          progress={progress}
          showValue={true}
          text={flatOptions.text}
          sx={{
            barColor: flatOptions.strokeColor,
            barWidth: flatOptions.strokeWidth,
            loadingTime: flatOptions.loadingTime,
            valueSize: 30,
            textSize: 15,
            valueWeight: 'lighter',
            textWeight: 'lighter',
            valueColor: flatOptions.valueColor,
            textColor: flatOptions.textColor,
            bgColor: 'black',
            bgOpacity: 0.0
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

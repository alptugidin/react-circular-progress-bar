import React, { useState } from 'react';
import { Heat } from '../../../lib';
import { IHeatOptions } from '../../types';
import Settings from './Settings';

const HeatDemo: React.FC = () => {
  const [progress, setProgress] = useState(75);
  const [heatOptions, setHeatOptions] = useState<IHeatOptions>(
    {
      strokeColor: '#ff0000',
      strokeWidth: 5,
      bgColor: '#DCDCDC',
      fontSize: 16,
      textSize: 16,
      fontWeight: 'normal',
      textWeight: 'normal',
      valueColor: '#000000',
      textColor: '#000000',
      showValue: true,
      showText: true,
      revertColor: false,
      loadingTime: 500,
      text: 'Lorem, ipsum.'
    }
  );
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48'>
        <Heat
          progress={progress}
          showValue
          text={heatOptions.text}
          revertColor={heatOptions.revertColor}
          sx={{
            barColor: heatOptions.strokeColor,
            barWidth: heatOptions.strokeWidth,
            bgColor: heatOptions.bgColor,
            valueSize: 30,
            textSize: 15,
            valueWeight: 'lighter',
            textWeight: 'lighter',
            textColor: heatOptions.textColor,
            valueColor: heatOptions.valueColor,
            loadingTime: heatOptions.loadingTime
          }}
        />
      </div>
      <div className='w-fit'>
        <Settings {...{ setHeatOptions, heatOptions, setProgress, progress }}/>
      </div>
    </div>
  );
};

export default HeatDemo;

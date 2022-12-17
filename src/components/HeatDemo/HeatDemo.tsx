import React, { useState } from 'react';
import { Heat } from '../../../lib';
import { IHeatOptions } from '../../types';
import Settings from './Settings';

const HeatDemo: React.FC = () => {
  const [progress, setProgress] = useState(75);
  const [heatOptions, setHeatOptions] = useState<IHeatOptions>(
    {
      strokeWidth: 5,
      valueSize: 30,
      textSize: 14,
      textWeight: 'normal',
      valueWeight: 'normal',
      valueFamily: 'Trebuchet MS',
      textFamily: 'Trebuchet MS',
      valueColor: '#000000',
      textColor: '#000000',
      showValue: true,
      showText: true,
      revertColor: false,
      loadingTime: 1000,
      text: 'Lorem, ipsum.',
      strokeLinecap: 'round',
      bgColor: '#ffffff'
    }
  );
  return (
    <div className='flex flex-col items-center'>
      <div className='w-48'>
        <Heat
          progress={progress}
          showValue={heatOptions.showValue}
          showText={heatOptions.showText}
          text={heatOptions.text}
          revertColor={heatOptions.revertColor}
          sx={{
            barWidth: heatOptions.strokeWidth,
            bgColor: heatOptions.bgColor,
            valueSize: heatOptions.valueSize,
            textSize: heatOptions.textSize,
            valueFamily: heatOptions.valueFamily,
            textFamily: heatOptions.textFamily,
            valueWeight: heatOptions.valueWeight,
            textWeight: heatOptions.textWeight,
            textColor: heatOptions.textColor,
            valueColor: heatOptions.valueColor,
            loadingTime: heatOptions.loadingTime,
            strokeLinecap: heatOptions.strokeLinecap
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

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
      text: 'Lorem ipsum',
      strokeLinecap: 'round',
      bgColor: '#ffffff',
      range: { from: 0, to: 100 },
      shape: 'threequarters',
      valueAnimation: true,
      intersectionEnabled: true
    }
  );
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-56'>
        <Heat
          progress={progress}
          range = { { from: heatOptions.range.from, to: heatOptions.range.to }}
          showValue={heatOptions.showValue}
          showText={heatOptions.showText}
          text={heatOptions.text}
          revertColor={heatOptions.revertColor}
          sx={{
            barWidth: heatOptions.strokeWidth,
            bgColor: heatOptions.bgColor,
            shape: heatOptions.shape,
            valueSize: heatOptions.valueSize,
            textSize: heatOptions.textSize,
            valueFamily: heatOptions.valueFamily,
            textFamily: heatOptions.textFamily,
            valueWeight: heatOptions.valueWeight,
            textWeight: heatOptions.textWeight,
            textColor: heatOptions.textColor,
            valueColor: heatOptions.valueColor,
            loadingTime: heatOptions.loadingTime,
            strokeLinecap: heatOptions.strokeLinecap,
            valueAnimation: heatOptions.valueAnimation,
            intersectionEnabled: heatOptions.intersectionEnabled
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

import React, { useState } from 'react';
import { Flat, Heat } from '../lib';
import Settings from './components/Settings';
const App: React.FC = () => {
  const [progress, setProgress] = useState(75);
  const [width, setWidth] = useState(192);
  const [style, setStyle] = useState(
    {
      strokeColor: '#ff0000',
      strokeWidth: 5,
      fontSize: 16,
      additionalTextSize: 16,
      fontWeight: 'normal',
      additionalTextWeight: 'normal',
      valueColor: '#000000',
      additionalTextColor: '#000000',
      showValue: true,
      showAdditionalText: true
    }
  );

  return (
    <div className='h-screen p-5 relative flex gap-10'>
      <input
        type="range"
        className='absolute top-5 right-5'
        min={100} max={600}
        onChange={(e) => setWidth(parseInt(e.target.value))}/>
      <div className='flex flex-col w-fit items-center'>
        <div style={{ width }} className=''>
          <Flat
            progress={progress}
            showValue={true}
            additionalText={'Lorem, ipsum.'}
            sx={{
              barColor: style.strokeColor,
              barWidth: style.strokeWidth,
              transitionTime: 500,
              valueSize: 30,
              additionalTextSize: 15,
              weight: 'lighter',
              additionalTextWeight: 'lighter',
              color: style.valueColor,
              additionalTextColor: style.additionalTextColor,
              bgColor: 'black',
              bgOpacity: 0.0
            }}
          />
        </div>
        <Settings {...{ setStyle, style, setProgress, progress }}/>
      </div>
      <div className='w-[192px]'>
        <Heat progress={progress}/>
      </div>
    </div>
  );
};

export default App;

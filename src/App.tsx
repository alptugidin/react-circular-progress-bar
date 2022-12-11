import React, { useState } from 'react';
import CircularProgressBar from '../lib';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
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
      showValue: 'on',
      showAdditionalText: 'on'
    }
  );

  return (
    <div className='bg-white h-screen p-5'>
      <input type="range" className='absolute top-5 right-5' min={100} max={600} onChange={(e) => setWidth(parseInt(e.target.value))}/>
      <div className='flex flex-col w-fit items-center'>
        <div style={{ width }} className=''>
          <CircularProgressBar
            value={value}
            additionalText={'Lorem, ipsum.'}
            showValue={true}
            barColor={style.strokeColor}
            barWidth={style.strokeWidth}
            text={{
              valueSize: 30,
              additionalTextSize: 13,
              additionalTextColor: style.additionalTextColor,
              weight: 'lighter',
              color: style.valueColor
            }}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-5 mt-5'>
            <div className='flex flex-col gap-2'>
              <span className='text-center'>Value
                <span className='font-semibold text-sm text-purple-600'>{value}</span>
              </span>
              <input type="range" min='0' max='100' value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className='cursor-grab' />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-center'>Stroke width
                <span className='font-semibold text-sm text-purple-600'>{style.strokeWidth}</span>
              </span>
              <input type="range" min='1' max='10' value={style.strokeWidth}
                onChange={(e) => setStyle({ ...style, strokeWidth: parseInt(e.target.value) })}
                className='cursor-grab' />
            </div>
          </div>
          <div className='flex'>
            <div className='basis-1/2 flex gap-2 items-start'>
              <button
                type='button'
                // onClick={() => setStyle({ ...style, showValue: (!showValue) })}
                className='h-4 w-4 rounded-full border border-purple-500 flex items-center justify-center'>
                <div className='w-2.5 h-2.5 rounded-full bg-purple-500' />
              </button>
              <span>Show value</span>
            </div>
            <div className='basis-1/2 flex gap-2 items-start'>
              <input type="checkbox"
                value={style.showValue}
                className='mt-1.5'/>
              <span>Show additional text</span>
            </div>
          </div>
          <div className='w-full flex'>
            <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
              <span className='text-center'>Stroke color</span>
              <input type="color" onChange={(e) => setStyle({ ...style, strokeColor: e.target.value })} value={style.strokeColor} className='w-12 mx-auto'/>
            </div>
            <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
              <span className='text-center'>Value color</span>
              <input type="color"
                onChange={(e) => setStyle({ ...style, valueColor: e.target.value })}
                value={style.valueColor}
                className=''/>
            </div>
          </div>
          <div >
            <div className='flex flex-col items-center justify-center gap-2'>
              <span className='text-center'>Additional text color</span>
              <input type="color"
                onChange={(e) => setStyle({ ...style, additionalTextColor: e.target.value })}
                value={style.additionalTextColor}
                className=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

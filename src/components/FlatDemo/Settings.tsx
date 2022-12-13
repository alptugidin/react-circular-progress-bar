import React from 'react';
import { IFlatSettings } from '../../types';

const Settings: React.FC<IFlatSettings> = (props) => {
  return (
    <div className='flex flex-col gap-3 bg-white rounded-lg border py-5 px-3 shadow-lg mt-1.5'>
      <div className='flex items-center gap-5'>
        <div className='flex flex-col gap-2'>
          <span className='text-center'>Value
            <span className='font-semibold text-sm text-purple-600'> {`{ ${props.progress} }`}</span>
          </span>
          <input type="range" min='0' max='100' value={props.progress}
            onChange={(e) => props.setProgress(parseInt(e.target.value))}
            className='cursor-grab' />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-center'>Stroke width
            <span className='font-semibold text-sm text-purple-600'> {`{ ${props.flatOptions.strokeWidth} }`}</span>
          </span>
          <input type="range" min='1' max='10' value={props.flatOptions.strokeWidth}
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, strokeWidth: parseInt(e.target.value) })}
            className='cursor-grab' />
        </div>
      </div>
      <hr />
      <div className='flex justify-center items-center gap-2'>
        <span>Text</span>
        <input
          type="text"
          value={props.flatOptions.text}
          onChange={(e) => props.setFlatOptions({ ...props.flatOptions, text: e.target.value })}
          className='border rounded-lg outline-none pl-2 focus:border-gray-400 w-full'/>
      </div>
      <hr />
      <div className='flex'>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Text color</span>
          <input type="color"
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textColor: e.target.value })}
            value={props.flatOptions.textColor}
            className=''/>

        </div>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Value color</span>
          <input type="color"
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, valueColor: e.target.value })}
            value={props.flatOptions.valueColor}
            className=''/>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col items-center justify-center gap-2 basis-1/2'>
          <span className='text-center'>Stroke color</span>
          <input type="color" onChange={(e) => props.setFlatOptions({ ...props.flatOptions, strokeColor: e.target.value })} value={props.flatOptions.strokeColor} className='w-12 mx-auto'/>
        </div>
      </div>
      <hr />
      <div className='flex gap-2 basis-1/2 items-start justify-center'>
        <span className='text-center'>Loading delay {'(ms)'}</span>
        <input
          type="number"
          className='border rounded-lg outline-none pl-2 focus:border-gray-400'
          onChange={(e) => props.setFlatOptions({ ...props.flatOptions, loadingTime: parseInt(e.target.value) })}
          value={props.flatOptions.loadingTime} />
      </div>
    </div>
  );
};

export default Settings;

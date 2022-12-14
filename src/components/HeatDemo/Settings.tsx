import React from 'react';
import { FontWeight, IHeatSettings } from '../../types';

const Settings: React.FC<IHeatSettings> = (props) => {
  return (
    <div className='flex flex-col gap-2 bg-white rounded-lg border py-3 px-3 shadow-lg mt-1.5 '>
      {/* Values */}
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
            <span className='font-semibold text-sm text-purple-600'> {`{ ${props.heatOptions.strokeWidth} }`}</span>
          </span>
          <input type="range" min='1' max='10' value={props.heatOptions.strokeWidth}
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, strokeWidth: parseInt(e.target.value) })}
            className='cursor-grab' />
        </div>
      </div>
      <hr />
      <div className='flex justify-center items-center gap-2'>
        <span>Text</span>
        <input
          type="text"
          value={props.heatOptions.text}
          onChange={(e) => props.setHeatOptions({ ...props.heatOptions, text: e.target.value })}
          className='border rounded-lg outline-none pl-2 focus:bordersetHeatOptions-400 w-full '/>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <span>Value size</span>
          <input
            type="number"
            value={props.heatOptions.valueSize}
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, valueSize: parseInt(e.target.value) })}
            className='w-14 border rounded-lg focus:border-gray-400 outline-none pl-2' />
        </div>
        <div className='flex gap-2'>
          <span>Text size</span>
          <input
            type="number"
            value={props.heatOptions.textSize}
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, textSize: parseInt(e.target.value) })}
            className='w-14 border rounded-lg focus:border-gray-400 outline-none pl-2' />
        </div>
      </div>
      <div className='flex gap-3'>
        <div className='flex gap-3'>
          <span>Weight</span>
          <select
            className='outline-none text-sm text-gray-700 border rounded-lg'
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, valueWeight: e.target.value as FontWeight })}
            value={props.heatOptions.valueWeight}>
            <option value="lighter">Lighter</option>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
        <div className='flex gap-3'>
          <span>Weight</span>
          <select
            className='outline-none text-sm text-gray-700 border rounded-lg'
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, textWeight: e.target.value as FontWeight })}
            value={props.heatOptions.textWeight}>
            <option value="lighter">Lighter</option>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
      </div>
      <hr />

      <div className='flex'>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Value</span>
          <input type="color"
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, valueColor: e.target.value })}
            value={props.heatOptions.valueColor}
          />
        </div>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Text</span>
          <input type="color"
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, textColor: e.target.value })}
            value={props.heatOptions.textColor}
          />
        </div>
      </div>
      {/* Color */}
      <div className='w-full flex flex-row-reverse'>
        <div className='flex flex-row-reverse gap-2 basis-1/2  justify-center'>
          <span className='text-center'>Revert Color</span>
          <button
            type='button'
            onClick={() => props.setHeatOptions({ ...props.heatOptions, revertColor: !props.heatOptions.revertColor })}
            className='self-start mt-1'>
            <div className='w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center'>
              {props.heatOptions.revertColor && <div className='w-2 h-2 bg-purple-500 rounded-full'></div>}
            </div>
          </button>
        </div>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Background</span>
          <input type="color"
            onChange={(e) => props.setHeatOptions({ ...props.heatOptions, bgColor: e.target.value })}
            value={props.heatOptions.bgColor}
            className=''/>
        </div>
      </div>
      {/*  */}
      <hr />
      <div className='flex justify-start items-center gap-2'>
        <span className=''>Loading time {'(ms)'}</span>
        <input
          type="text"
          value={props.heatOptions.loadingTime}
          onChange={(e) => props.setHeatOptions({ ...props.heatOptions, loadingTime: parseInt(e.target.value) })}
          className='border rounded-lg outline-none pl-2 focus:bordersetHeatOptions-400 w-20 '/>
      </div>
    </div>
  );
};

export default Settings;

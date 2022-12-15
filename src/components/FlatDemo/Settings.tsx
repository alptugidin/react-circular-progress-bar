import React from 'react';
import { FontWeight, IFlatSettings } from '../../types';
import { fontFamilies } from '../../features/fontFamilies';
import { FontFamily } from '../../../lib/types';
const Settings: React.FC<IFlatSettings> = (props) => {
  return (
    <div className='flex flex-col gap-3 bg-white rounded-lg border py-3 px-3 shadow-lg mt-1.5'>
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
      <div className='flex justify-center items-center gap-2 relative '>
        <div className='absolute -top-[25px] bg-white rounded-lg px-3 py-0'>
          <span className='text-sm text-purple-500'>Text</span>
        </div>
        <input
          type="text"
          value={props.flatOptions.text}
          onChange={(e) => props.setFlatOptions({ ...props.flatOptions, text: e.target.value })}
          className='border rounded-lg outline-none pl-2 focus:border-gray-400 w-full'/>
      </div>
      <div className='flex justify-between'>
        {/* <div className='flex gap-2'>
          <span>Value size</span>
          <input
            type="number"
            value={props.flatOptions.valueSize}
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, valueSize: parseInt(e.target.value) })}
            className='w-14 border rounded-lg focus:border-gray-400 outline-none pl-2' />
        </div> */}
        <div className='flex gap-2 bg-red-50'>

          <span>Size</span>
          <input
            type="number"
            value={props.flatOptions.textSize}
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textSize: parseInt(e.target.value) })}
            className='w-14 border rounded-lg focus:border-gray-400 outline-none pl-2' />
          <div className='flex gap-3'>
            <span>Weight</span>
            <select
              className='outline-none text-sm text-gray-700 border rounded-lg'
              onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textWeight: e.target.value as FontWeight })}
              value={props.flatOptions.textWeight}>
              <option value="lighter">Lighter</option>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="bolder">Bolder</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex gap-3'>
        <div className='flex gap-3'>
          <span>Weight</span>
          <select
            className='outline-none text-sm text-gray-700 border rounded-lg'
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, valueWeight: e.target.value as FontWeight })}
            value={props.flatOptions.valueWeight}>
            <option value="lighter">Lighter</option>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
        {/* <div className='flex gap-3'>
          <span>Weight</span>
          <select
            className='outline-none text-sm text-gray-700 border rounded-lg'
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textWeight: e.target.value as FontWeight })}
            value={props.flatOptions.textWeight}>
            <option value="lighter">Lighter</option>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div> */}
      </div>
      <div className='flex justify-between'>
        <span>Value font</span>
        <select
          value={props.flatOptions.valueFamily}
          onChange={(e) => props.setFlatOptions({ ...props.flatOptions, valueFamily: e.target.value as FontFamily })}
          className='outline-none text-sm text-gray-700 border rounded-lg'>
          {fontFamilies.map((font) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </div>
      <div className='flex justify-between'>
        <span>Text font</span>
        <select
          value={props.flatOptions.textFamily}
          onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textFamily: e.target.value as FontFamily })}
          className='outline-none text-sm text-gray-700 border rounded-lg'>
          {fontFamilies.map((font, index) => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
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
          <input
            type="color"
            onChange={(e) => props.setFlatOptions({ ...props.flatOptions, strokeColor: e.target.value })}
            value={props.flatOptions.strokeColor} className='w-12 mx-auto'
          />
        </div>
      </div>
      <hr />
      <div className='flex justify-start items-center gap-2'>
        <span className=''>Loading time {'(ms)'}</span>
        <input
          type="text"
          value={props.flatOptions.loadingTime}
          onChange={(e) => props.setFlatOptions({ ...props.flatOptions, loadingTime: parseInt(e.target.value) })}
          className='border rounded-lg outline-none pl-2 focus:bordersetflatOptions-400 w-20 '/>
      </div>
    </div>
  );
};

export default Settings;

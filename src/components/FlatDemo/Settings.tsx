import React, { useRef, useState } from 'react';
import { FontWeight, IFlatSettings } from '../../types';
import { fontFamilies } from '../../features/fontFamilies';
import { FontFamily } from '../../../lib/types';
const Settings: React.FC<IFlatSettings> = (props) => {
  const valueSection = useRef<HTMLDivElement>(null);
  const textSection = useRef<HTMLDivElement>(null);
  const [showValue, setShowValue] = useState(true);
  const [showText, setShowText] = useState(true);
  const handleValueCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShowValue(e.target.checked);
    props.setFlatOptions((prev) => ({ ...prev, showValue: e.target.checked }));
    if (e.target.checked) {
      valueSection.current?.classList.remove('opacity-50', 'pointer-events-none');
    } else {
      valueSection.current?.classList.add('opacity-50', 'pointer-events-none');
    }
  };

  const handleTextCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShowText(e.target.checked);
    props.setFlatOptions((prev) => ({ ...prev, showText: e.target.checked }));
    if (e.target.checked) {
      textSection.current?.classList.remove('opacity-50', 'pointer-events-none');
    } else {
      textSection.current?.classList.add('opacity-50', 'pointer-events-none');
    }
  };
  return (
    <div className='flex flex-col gap-3 bg-white rounded-lg border py-3 px-2 shadow-lg mt-1.5'>
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
      <div className='flex flex-col gap-3 relative'>
        <label className='absolute left-0 -top-[25px] w-full text-center flex justify-center items-center'>
          <div className='bg-white pl-3'>
            <input
              type="checkbox"
              className='cursor-pointer'
              defaultChecked
              onChange={handleValueCheck} />
          </div>
          <span className='text-sm text-purple-500 font-semibold bg-white pr-3 pl-3'>Value</span>
        </label>
        <div ref={valueSection} className='flex flex-col gap-3 transition-all'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <span>Size</span>
              <input
                type="number"
                value={props.flatOptions.valueSize}
                onChange={(e) => props.setFlatOptions({ ...props.flatOptions, valueSize: parseInt(e.target.value) })}
                className='w-14 border text-sm rounded-lg focus:border-gray-400 outline-none pl-2' />
            </div>
            <div className='flex gap-2'>
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
          </div>
          <div className='flex gap-2'>
            <span >Font</span>
            <select
              value={props.flatOptions.valueFamily}
              onChange={(e) => props.setFlatOptions({ ...props.flatOptions, valueFamily: e.target.value as FontFamily })}
              className='outline-none text-sm text-gray-700 border rounded-lg'>
              {fontFamilies.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col gap-3 relative'>
        <label className='absolute left-0 -top-[25px] w-full text-center flex justify-center items-center'>
          <div className='bg-white pl-3'>
            <input
              type="checkbox"
              className='cursor-pointer'
              defaultChecked
              onChange={handleTextCheck} />
          </div>
          <span className='text-sm text-purple-500 font-semibold bg-white pr-3 pl-3'>Text</span>
        </label>
        <div ref={textSection} className='flex flex-col gap-3 transition-all'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <span>Size</span>
              <input
                type="number"
                value={props.flatOptions.textSize}
                onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textSize: parseInt(e.target.value) })}
                className='w-14 border text-sm rounded-lg focus:border-gray-400 outline-none pl-2' />
            </div>
            <div className='flex gap-2'>
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
          <div className='flex gap-2'>
            <span >Font</span>
            <select
              value={props.flatOptions.textFamily}
              onChange={(e) => props.setFlatOptions({ ...props.flatOptions, textFamily: e.target.value as FontFamily })}
              className='outline-none text-sm text-gray-700 border rounded-lg'>
              {fontFamilies.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

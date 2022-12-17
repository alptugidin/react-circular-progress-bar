import React, { useRef } from 'react';
import { fontFamilies } from '../../features/fontFamilies';
import { FontFamily, FontWeight, IHeatSettings, StrokeLineCap } from '../../types';
import CodeHighlighter from '../CodeHighlighter/CodeHighlighter';

const Settings: React.FC<IHeatSettings> = (props) => {
  const valueSection = useRef<HTMLDivElement>(null);
  const textSection = useRef<HTMLDivElement>(null);
  const codeSection = useRef<HTMLDivElement>(null);
  const settingsSection = useRef<HTMLDivElement>(null);
  const copyBg = useRef<HTMLDivElement>(null);
  const code = `<Heat
\tprogress={${props.progress}}
\tshowValue={${props.heatOptions.showValue ? 'true' : 'false'}}
\tshowText={${props.heatOptions.showText ? 'true' : 'false'}}
\ttext={'${props.heatOptions.text}'}
\trevertColor={${props.heatOptions.revertColor ? 'true' : 'false'}}
\tsx={{
\t\tbarWidth: ${props.heatOptions.strokeWidth},
\t\tbgColor: '${props.heatOptions.bgColor}',
\t\tvalueSize: ${props.heatOptions.valueSize},
\t\ttextSize: ${props.heatOptions.textSize},
\t\tvalueFamily: '${props.heatOptions.valueFamily}',
\t\ttextFamily: '${props.heatOptions.textFamily}',
\t\tvalueWeight: '${props.heatOptions.valueWeight}',
\t\ttextWeight: '${props.heatOptions.textWeight}',
\t\tvalueColor: '${props.heatOptions.valueColor}',
\t\ttextColor: '${props.heatOptions.textColor}',
\t\tloadingTime: '${props.heatOptions.loadingTime}',
\t\tstrokeLinecap: '${props.heatOptions.strokeLinecap}'
\t}}
/>`;
  const handleValueCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setHeatOptions((prev) => ({ ...prev, showValue: e.target.checked }));
    if (e.target.checked) {
      valueSection.current?.classList.remove('opacity-50', 'pointer-events-none');
    } else {
      valueSection.current?.classList.add('opacity-50', 'pointer-events-none');
    }
  };

  const handleTextCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setHeatOptions((prev) => ({ ...prev, showText: e.target.checked }));
    if (e.target.checked) {
      textSection.current?.classList.remove('opacity-50', 'pointer-events-none');
    } else {
      textSection.current?.classList.add('opacity-50', 'pointer-events-none');
    }
  };

  const getCode = (): void => {
    settingsSection.current?.classList.toggle('rotate');
    codeSection.current?.classList.toggle('rotate-back');
  };

  const copy = (): void => {
    void navigator.clipboard.writeText('code');
    copyBg.current?.classList.toggle('!bg-white/80');
    setTimeout(() => {
      copyBg.current?.classList.toggle('!bg-white/80');
    }, 75);
  };

  return (
    <div className='main'>
      <div ref={settingsSection} className='settings front flex flex-col overflow-hidden gap-3 bg-white rounded-lg border py-3 px-2 shadow-lg text-sm transition-all duration-[800ms]'>
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
        <div className='flex flex-col gap-3 relative'>
          <label className='absolute left-0 -top-[23px] w-full text-center flex justify-center items-center'>
            <div className='bg-white pl-3 leading-3'>
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
                  value={props.heatOptions.valueSize}
                  onChange={(e) => props.setHeatOptions({ ...props.heatOptions, valueSize: parseInt(e.target.value) })}
                  className='w-14 border text-sm rounded-lg focus:border-gray-400 outline-none pl-2' />
              </div>
              <div className='flex gap-2'>
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
            </div>
            <div className='flex gap-2'>
              <span >Font</span>
              <select
                value={props.heatOptions.valueFamily}
                onChange={(e) => props.setHeatOptions({ ...props.heatOptions, valueFamily: e.target.value as FontFamily })}
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
          <label className='absolute left-0 -top-[23px] w-full text-center flex justify-center items-center'>
            <div className='bg-white pl-3 leading-3'>
              <input
                type="checkbox"
                className='cursor-pointer'
                defaultChecked
                onChange={handleTextCheck} />
            </div>
            <span className='text-purple-500 font-semibold bg-white pr-3 pl-3'>Text</span>
          </label>
          <div ref={textSection} className='flex flex-col gap-3 transition-all'>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <span>Size</span>
                <input
                  type="number"
                  value={props.heatOptions.textSize}
                  onChange={(e) => props.setHeatOptions({ ...props.heatOptions, textSize: parseInt(e.target.value) })}
                  className='w-14 border text-sm rounded-lg focus:border-gray-400 outline-none pl-2' />
              </div>
              <div className='flex gap-2'>
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
            <div className='flex gap-2'>
              <span >Font</span>
              <select
                value={props.heatOptions.textFamily}
                onChange={(e) => props.setHeatOptions({ ...props.heatOptions, textFamily: e.target.value as FontFamily })}
                className='outline-none text-sm text-gray-700 border rounded-lg'>
                {fontFamilies.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className='relative flex flex-col gap-2'>
          <label className='absolute left-0 -top-[23px] w-full text-center flex justify-center items-center'>
            <span className='text-sm text-purple-500 font-semibold bg-white pr-3 pl-3'>Colors</span>
          </label>
          <div className='flex'>
            <div className='flex flex-col w-fit justify-center items-center basis-1/3'>
              <span className=''>Value</span>
              <input type="color"
                onChange={(e) => props.setHeatOptions({ ...props.heatOptions, valueColor: e.target.value })}
                value={props.heatOptions.valueColor}
              />
            </div>
            <div className='flex flex-col w-fit justify-center items-center basis-1/3'>
              <span className=''>Text</span>
              <input type="color"
                onChange={(e) => props.setHeatOptions({ ...props.heatOptions, textColor: e.target.value })}
                value={props.heatOptions.textColor}
              />
            </div>
            <div className='flex flex-col w-fit justify-center items-center basis-1/3'>
              <span className=''>Background</span>
              <input type="color"
                onChange={(e) => props.setHeatOptions({ ...props.heatOptions, bgColor: e.target.value })}
                value={props.heatOptions.bgColor}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className='relative flex flex-col gap-3'>
          <label className='absolute left-0 -top-[23px] w-full text-center flex justify-center items-center'>
            <span className='text-purple-500 font-semibold bg-white pr-3 pl-3'>Options</span>
          </label>
          <div className='flex gap-2'>
            <span className=''>Loading time {'(ms)'}</span>
            <input
              type="text"
              value={props.heatOptions.loadingTime}
              onChange={(e) => props.setHeatOptions({ ...props.heatOptions, loadingTime: parseInt(e.target.value) })}
              className='border rounded-lg outline-none pl-2 focus:bordersetHeatOptions-400 w-20 '/>
          </div>
          <div className='flex gap-2'>
            <span>Stroke Line cap</span>
            <select className='border rounded-lg outline-none'
              value={props.heatOptions.strokeLinecap}
              onChange={(e) => props.setHeatOptions((prev) => ({ ...prev, strokeLinecap: e.target.value as StrokeLineCap }))}
            >
              <option value="butt">Butt</option>
              <option value="round">Round</option>
              <option value="square">Square</option>
            </select>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              className='cursor-pointer'
              // defaultChecked
              onChange={(e) => props.setHeatOptions((prev) => ({ ...prev, revertColor: e.target.checked }))} />
            <span className=''>Revert Background</span>
          </div>
        </div>
        <div className='absolute bottom-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 w-full left-0'>
          <button type='button'
            className='w-full hover:scale-105 transition-all flex items-center justify-center gap-2 h-8 text-white font-semibold'
            onClick={getCode}>
            <span> Get Code </span>
            <img src="/right.svg" alt="right" className='w-[19px]' />
          </button>
        </div>
      </div>
      <div ref={codeSection} className='settings back bg-white border drop-shadow-lg rounded-md transition-all duration-[800ms] overflow-hidden'>
        <div
          ref={copyBg}
          onClick={copy}
          className='absolute flex items-center justify-center opacity-0 hover:opacity-100 left-0 right-0 h-full transition-all bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20'>
          <span className='text-white font-mono font-semibold text-3xl cursor-default'>Copy</span>
        </div>
        <div>
          <CodeHighlighter>
            {code}
          </CodeHighlighter>
        </div>
        <div className='absolute bottom-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 w-full left-0'>
          <button type='button'
            className='w-full hover:scale-105 transition-all flex items-center justify-center gap-2 h-8 text-white font-semibold'
            onClick={getCode}>
            <img src="/left.svg" alt="right" className='w-[19px]' />
            <span> Back </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

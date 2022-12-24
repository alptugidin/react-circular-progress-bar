import React, { useEffect, useRef } from 'react';
import { fontFamilies } from '../../features/fontFamilies';
import { FontFamily, FontWeight, INestedOptions, INestedSettings, StrokeLineCap } from '../../types';
import CodeHighlighter from '../CodeHighlighter/CodeHighlighter';

const Settings: React.FC<INestedSettings> = (props) => {
  type circle = 'circle1' | 'circle2' | 'circle3' | 'circle4' | 'circle5'
  const circles: circle[] = ['circle1', 'circle2', 'circle3', 'circle4', 'circle5'];
  const settingsSection = useRef<HTMLDivElement>(null);
  const codeSection = useRef<HTMLDivElement>(null);
  let arr: string[] = [];

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = Number(e.target.dataset.circle);
    if (!e.target.checked) {
      props.setNestedOptions((prev) => ({ ...prev, [circles[id]]: { ...prev[circles[id]], value: -1 } }));
    } else {
      props.setNestedOptions((prev) => ({ ...prev, [circles[id]]: { ...prev[circles[id]], value: Math.floor(Math.random() * 20) } }));
    }
  };

  const handleBgColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setNestedOptions((prev) => ({ ...prev, background: e.target.checked ? '#cbd5e1' : '#00000000' }));
  };

  const getCode = (): void => {
    // checkValid();
    settingsSection.current?.classList.toggle('rotate');
    codeSection.current?.classList.toggle('rotate-back');
  };

  const checkValid = (): string[] => {
    arr = [];
    circles.forEach((circle) => {
      if (props.nestedOptions[circle].value !== -1) {
        arr.push(`\t\t{ text: '${props.nestedOptions[circle].text}' ,value: ${props.nestedOptions[circle].value}, color: '${props.nestedOptions[circle].color}'},`);
      }
    });
    return arr;
  };
  const code = `<Nested
  circles={[
${checkValid().join('\n')}
  ]}
  sx={{
    bgColor: '${props.nestedOptions.background}',
    fontWeight: '${props.nestedOptions.fontWeight}',
    fontFamily: '${props.nestedOptions.fontFamily}',
    strokeLinecap: '${props.nestedOptions.strokeLinecap}'
  }}
/>`;

  useEffect(() => {
    checkValid();
  }, [props.nestedOptions]);

  return (
    <div className='main-nested'>
      <div ref={settingsSection} className='flex flex-col settings front overflow-hidden gap-3 bg-white rounded-lg border py-3 px-2 shadow-lg text-sm transition-all duration-[800ms] pb-[41px]'>
        {[...Array(5).keys()].map((_, i) => (
          <div key={i} className='flex gap-2'>
            <input
              data-circle={i}
              type="checkbox"
              defaultChecked
              onChange={handleCheckBox}
              className={i < 2 ? 'opacity-0 pointer-events-none' : '' } />
            <input
              type="text"
              value={props.nestedOptions[circles[i]].text}
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, [circles[i]]: { ...prev[circles[i]], text: e.target.value } }))}
              className='pl-2 w-2/6' />
            <input
              type="range"
              min='0'
              max='100'
              value={props.nestedOptions[circles[i]].value}
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, [circles[i]]: { ...prev[circles[i]], value: Number(e.target.value) } }))}
              className='w-48' />
            <div className='w-14 justify-center flex'>
              <span className='text-purple-500 font-semibold'>
                {`{ ${props.nestedOptions[circles[i]].value === -1 ? '~' : props.nestedOptions[circles[i]].value} }`}
              </span>
            </div>
          </div>
        ))}
        <hr />
        <div className='relative flex flex-col gap-2'>
          <label className='absolute left-0 -top-[23px] w-full text-center flex justify-center items-center'>
            <span className='text-sm text-purple-500 font-semibold bg-white pr-3 pl-3'>Colors</span>
          </label>
          <div className='flex flex-wrap justify-start gap-y-2'>
            {[...Array(5).keys()].map((_, i) => (
              <div key={i} className='flex flex-col items-center basis-1/3'>
                <span>Circle {i + 1}</span>
                <input
                  type="color"
                  value={props.nestedOptions[circles[i]].color}
                  onChange={(e) =>
                    props.setNestedOptions((prev) =>
                      ({ ...prev, [circles[i]]: { ...prev[circles[i]], color: e.target.value } })
                    )
                  }
                />
              </div>
            ))}
            <div className='flex flex-col items-center basis-1/3 justify-center'>
              <span>Background</span>
              <input
                type="color"
                value={props.nestedOptions.background}
                onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, background: e.target.value }))}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className='relative flex flex-col gap-2'>
          <label className='absolute left-0 -top-[23px] w-full text-center flex justify-center items-center'>
            <span className='text-sm text-purple-500 font-semibold bg-white pr-3 pl-3'>Options</span>
          </label>
          <div className='flex gap-2'>
            <input
              defaultChecked
              onChange={handleBgColor}
              type="checkbox"
            />
            <span>Show Background</span>
          </div>
          <div className='flex gap-2'>
            <span>Stroke line cap</span>
            <select
              value={props.nestedOptions.strokeLinecap}
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, strokeLinecap: e.target.value as StrokeLineCap }))}
            >
              <option value="butt">Butt</option>
              <option value="round">Round</option>
              <option value="square">Square</option>
            </select>
          </div>
          <div className='flex gap-2'>
            <span>Font weight</span>
            <select
              value={props.nestedOptions.fontWeight}
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, fontWeight: e.target.value as FontWeight }))}
            >
              <option value="lighter">Lighter</option>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="bolder">Bolder</option>
            </select>
          </div>
          <div className='flex gap-2'>
            <span >Font family</span>
            <select
              value={props.nestedOptions.fontFamily}
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, fontFamily: e.target.value as FontFamily }))}
              className='outline-none text-sm text-gray-700 border rounded-lg'>
              {fontFamilies.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
          <div className='flex gap-2'>
            <span>Loading time {'(ms)'}</span>
            <input
              type="number"
              className='pl-2 w-20'
              value={props.nestedOptions.loadingTime}
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, loadingTime: Number(e.target.value) }))}
            />
          </div>
        </div>
        <div className='absolute bottom-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 w-full left-0'>
          <button type='button'
            className='w-full hover:scale-105 transition-all flex items-center justify-center gap-2 h-8 text-white font-semibold'
            onClick={getCode}
          >
            <span> Get Code </span>
            <img src="/right.svg" alt="right" className='w-[19px]' />
          </button>
        </div>

      </div>
      <div ref={codeSection} className='settings back-nested bg-white border drop-shadow-lg rounded-md transition-all duration-[800ms] overflow-hidden'>
        <CodeHighlighter>
          {code}
        </CodeHighlighter>
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

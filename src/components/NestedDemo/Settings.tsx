import React from 'react';
import { INestedOptions, INestedSettings } from '../../types';

const Settings: React.FC<INestedSettings> = (props) => {
  type circle = 'circle1' | 'circle2' | 'circle3' | 'circle4' | 'circle5'
  const circles: circle[] = ['circle1', 'circle2', 'circle3', 'circle4', 'circle5'];

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = Number(e.target.dataset.circle);
    if (!e.target.checked) {
      props.setNestedOptions((prev) => ({ ...prev, [circles[id]]: { ...prev[circles[id]], value: -1 } }));
    } else {
      props.setNestedOptions((prev) => ({ ...prev, [circles[id]]: { ...prev[circles[id]], value: Math.floor(Math.random() * 50) } }));
    }
  };

  return (
    <div className='main-heat'>
      <div className='flex flex-col settings front overflow-hidden gap-3 bg-white rounded-lg border py-3 px-2 shadow-lg text-sm transition-all duration-[800ms]'>
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
              onChange={(e) => props.setNestedOptions((prev) => ({ ...prev, [circles[i]]: { ...prev[circles[i]], value: parseInt(e.target.value) } }))}
              className='w-[110px]' />
            <span className='text-purple-500 font-semibold'>{`{ ${props.nestedOptions[circles[i]].value} }`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;

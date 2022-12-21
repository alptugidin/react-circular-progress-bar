import React from 'react';
import { INestedSettings } from '../../types';

const Settings: React.FC<INestedSettings> = (props) => {
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      props.setNestedOptions((prev) => (
        {
          ...prev,
          progress:
        { ...props.nestedOptions.progress, [`circle${e.target.dataset.id as string}`]: 100 }
        }));
    } else {
      props.setNestedOptions((prev) => (
        { ...prev, progress: { ...props.nestedOptions.progress, [`circle${e.target.dataset.id as string}`]: -1 } }));
    }
  };
  return (
    <div className='main-heat'>
      <div className='flex flex-col settings front overflow-hidden gap-3 bg-white rounded-lg border py-3 px-2 shadow-lg text-sm transition-all duration-[800ms]'>
        {Object.entries(props.nestedOptions.progress).map((circle, index) => (
          <div key={index} className='flex items-center gap-2'>
            <div className='flex basis-3/12 gap-1'>
              <input
                type="checkbox"
                data-id={index + 1}
                className={`cursor-pointer ${index < 2 ? 'opacity-0 pointer-events-none' : ''}`}
                defaultChecked
                onChange={handleCheckBox}
              />
              <span>Circle {index + 1}</span>
            </div>
            <input
              type="range"
              min='0'
              max='100'
              className={`basis-6/12 ${circle[1] === -1 ? 'pointer-events-none opacity-50' : ''}`}
              value={circle[1]}
              onChange={(e) => props.setNestedOptions((prev) =>
                ({ ...prev, progress: { ...props.nestedOptions.progress, [circle[0]]: parseInt(e.target.value) } }
                ))}
            />
            <span className='text-purple-500 font-semibold basis-3/12 text-center'>
              {`{ ${circle[1] !== -1 ? circle[1] as number : ' ~ '} 
            }`}</span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Settings;

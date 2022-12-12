import React from 'react';
interface ISettings {
   setStyle: React.Dispatch<React.SetStateAction<{
      strokeColor: string
      strokeWidth: number
      fontSize: number
      additionalTextSize: number
      fontWeight: string
      additionalTextWeight: string
      valueColor: string
      additionalTextColor: string
      showValue: boolean
      showAdditionalText: boolean
  }>>
   style: {
   strokeColor: string
   strokeWidth: number
   fontSize: number
   additionalTextSize: number
   fontWeight: string
   additionalTextWeight: string
   valueColor: string
   additionalTextColor: string
   showValue: boolean
   showAdditionalText: boolean
   }
  setProgress: React.Dispatch<React.SetStateAction<number>>
  progress: number

}
const Settings: React.FC<ISettings> = (props) => {
  return (
    <div className='flex flex-col gap-5 bg-white rounded-lg border py-5 px-3'>
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
            <span className='font-semibold text-sm text-purple-600'> {`{ ${props.style.strokeWidth} }`}</span>
          </span>
          <input type="range" min='1' max='10' value={props.style.strokeWidth}
            onChange={(e) => props.setStyle({ ...props.style, strokeWidth: parseInt(e.target.value) })}
            className='cursor-grab' />
        </div>
      </div>
      <div className='w-full flex'>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Stroke color</span>
          <input type="color" onChange={(e) => props.setStyle({ ...props.style, strokeColor: e.target.value })} value={props.style.strokeColor} className='w-12 mx-auto'/>
        </div>
        <div className='flex flex-col gap-2 basis-1/2 items-center justify-center'>
          <span className='text-center'>Value color</span>
          <input type="color"
            onChange={(e) => props.setStyle({ ...props.style, valueColor: e.target.value })}
            value={props.style.valueColor}
            className=''/>
        </div>
      </div>
      <div >
        <div className='flex flex-col items-center justify-center gap-2'>
          <span className='text-center'>Additional text color</span>
          <input type="color"
            onChange={(e) => props.setStyle({ ...props.style, additionalTextColor: e.target.value })}
            value={props.style.additionalTextColor}
            className=''/>
        </div>
      </div>
    </div>
  );
};

export default Settings;

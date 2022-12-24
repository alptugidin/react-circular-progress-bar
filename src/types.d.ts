import React from 'react';

export interface IHeatOptions {
   text: string
   strokeWidth: number
   range: { from: number, to: number }
   textSize: number
   valueSize: number
   valueWeight: FontWeight
   textWeight: FontWeight
   valueFamily: FontFamily
   textFamily: FontFamily
   valueColor: string
   textColor: string
   showValue: boolean
   showText: boolean
   revertColor: boolean
   loadingTime: number
   strokeLinecap: StrokeLineCap
   bgColor: string
   shape: HeatShape
 }
export interface IHeatSettings {
   heatOptions: IHeatOptions
   setHeatOptions: React.Dispatch<React.SetStateAction<IHeatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
}
export interface IFlatOptions {
   strokeColor: string
   range: { from: number, to: number }
   strokeWidth: number
   textSize: number
   valueSize: number
   valueWeight: FontWeight
   textWeight: FontWeight
   valueFamily: FontFamily
   textFamily: FontFamily
   valueColor: string
   textColor: string
   showValue: boolean
   showText: boolean
   loadingTime: number
   text: string
   bgColor: string
   strokeLinecap: StrokeLineCap
   shape: FlatShape
   showMiniCircle: boolean
   miniCircleColor: string
}

export interface IFlatSettings {
   flatOptions: IFlatOptions
   setFlatOptions: React.Dispatch<React.SetStateAction<IFlatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
}

interface IProgress {
      circle1: number
      circle2: number
      circle3: number
      circle4: number
      circle5: number
}
export interface INestedOptions {
   circle1: { text: string, value: number, color: string }
   circle2: { text: string, value: number, color: string }
   circle3: { text: string, value: number, color: string }
   circle4: { text: string, value: number, color: string }
   circle5: { text: string, value: number, color: string }
   background: string
   fontWeight: FontWeight
   fontFamily: FontFamily
   strokeLinecap: StrokeLineCap
   loadingTime: number
}

export interface INestedSettings {
   nestedOptions: INestedOptions
   setNestedOptions: React.Dispatch<React.SetStateAction<INestedOptions>>
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'
export type FontFamily =
'Arial' |
'Verdana' |
'Tahoma' |
'Trebuchet MS' |
'Times New Roman' |
'Georgia' |
'Courier New' |
'Brush Script MT' |
'Comic Sans MS' |
'Goudy Bookletter 1911' |
'Monospace'

export type StrokeLineCap = 'butt' | 'round' | 'square'
export type FlatShape = 'full' | 'threequarters' | 'half'
export type HeatShape = 'threequarters' | 'half'

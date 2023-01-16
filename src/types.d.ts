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
   revertBackground: boolean
   loadingTime: number
   strokeLinecap: StrokeLineCap
   bgColor: string
   shape: HeatShape
   valueAnimation: boolean
   intersectionEnabled: boolean
   sign: { value: string, position: SignPosition }
 }

 type SignPosition = 'start' | 'end'
export interface IHeatSettings {
   heatOptions: IHeatOptions
   setHeatOptions: React.Dispatch<React.SetStateAction<IHeatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
}
export interface IFlatOptions {
   strokeColor: string
   bgStrokeColor: string
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
   loadingTime: number
   text: string
   bgColor: string
   strokeLinecap: StrokeLineCap
   shape: FlatShape
   showMiniCircle: boolean
   miniCircleColor: string
   miniCircleSize: number
   valueAnimation: boolean
   intersectionEnabled: boolean
   sign: { value: string, position: SignPosition }
}

export interface IFlatSettings {
   flatOptions: IFlatOptions
   setFlatOptions: React.Dispatch<React.SetStateAction<IFlatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
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
   valueAnimation: boolean
   intersectionEnabled: boolean
}

export interface INestedSettings {
   nestedOptions: INestedOptions
   setNestedOptions: React.Dispatch<React.SetStateAction<INestedOptions>>
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'
export type FontFamily =
'Arial' |
'Arial Black' |
'Arial Narrow' |
'Arial Rounded MT Bold' |
'Arial Unicode MS' |
'Calibri' |
'Candara' |
'Century Gothic' |
'Comic Sans MS' |
'Courier New' |
'Geneva' |
'Georgia' |
'Gill Sans' |
'Helvetica' |
'Impact' |
'Lucida Console' |
'Lucida Grande' |
'Lucida Sans Unicode' |
'Palatino Linotype' |
'Tahoma' |
'Times New Roman' |
'Trebuchet MS' |
'Verdana' |
'Webdings' |
'Wingdings'

export type StrokeLineCap = 'butt' | 'round' | 'square'
export type FlatShape = 'full' | 'threequarters' | 'half'
export type HeatShape = 'threequarters' | 'half'

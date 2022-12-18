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
}

export interface IFlatSettings {
   progress: number
   flatOptions: IFlatOptions
   setFlatOptions: React.Dispatch<React.SetStateAction<IFlatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
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

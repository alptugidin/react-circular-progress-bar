export interface IHeatOptions {
   strokeColor: string
   strokeWidth: number
   bgColor: string
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
   text: string
 }
export interface IHeatSettings {
   heatOptions: IHeatOptions
   setHeatOptions: React.Dispatch<React.SetStateAction<IHeatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
}
export interface IFlatOptions {
   strokeColor: string
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
}

export interface IFlatSettings {
   flatOptions: IFlatOptions
   setFlatOptions: React.Dispatch<React.SetStateAction<IFlatOptions>>
   progress: number
   setProgress: React.Dispatch<React.SetStateAction<number>>
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'
export type FontFamily =
'Microsoft Sans Serif' |
'Arial' |
'Helvetica' |
'Verdana' |
'Calibri' |
'Noto' |
'Lucida Sans' |
'Gill Sans' |
'Century Gothic' |
'Candara' |
'Futara' |
'Franklin Gothic Medium' |
'Trebuchet MS' |
'Geneva' |
'Segoe UI' |
'Optima' |
'Avanta Garde' |
'Times New Roman' |
'Georgia' |
'Consolas' |
'Courier' |
'Courier New' |
'Lucida Console' |
'Lucidatypewriter' |
'Lucida Sans Typewriter' |
'Monaco' |
'Andale Mono' |
'Comic Sans' |
'Comic Sans MS' |
'Impact' |
'Jazz LET' |
'Microsoft Yi Baiti'

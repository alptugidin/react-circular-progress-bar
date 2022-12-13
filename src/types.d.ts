export interface IHeatOptions {
   strokeColor: string
   strokeWidth: number
   bgColor: string
   fontSize: number
   textSize: number
   fontWeight: string
   textWeight: string
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
   fontSize: number
   textSize: number
   fontWeight: string
   textWeight: string
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

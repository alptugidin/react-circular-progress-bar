export interface ICircularProgressBar {
   value: number
   showValue?: boolean
   additionalText?: string
   barColor: string
   barWidth: number
   text?: {
      valueSize?: number
      additionalTextSize?: number
      weight?: FontWeight
      additionalTextWeight?: FontWeight
      color?: string
      additionalTextColor?: string
   }
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'

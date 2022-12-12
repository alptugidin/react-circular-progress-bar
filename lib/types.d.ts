export interface IFlat {
   progress: number
   showValue?: boolean
   additionalText?: string
   sx: {
      barColor: string
      barWidth: number
      transitionTime?: number
      valueSize?: number
      additionalTextSize?: number
      weight?: FontWeight
      additionalTextWeight?: FontWeight
      color?: string
      additionalTextColor?: string
      bgColor?: string
      bgOpacity?: number
   }
}

export interface IHeat {
   progress: number
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'

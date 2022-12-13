export interface IFlat {
   progress: number
   showValue?: boolean
   text?: string
   sx: {
      barColor: string
      barWidth: number
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      bgColor?: string
      bgOpacity?: number
      loadingTime?: number
   }
}

export interface IHeat extends Pick<IFlat, 'progress' | 'sx' | 'showValue' | 'text' > {
   revertColor?: boolean
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'

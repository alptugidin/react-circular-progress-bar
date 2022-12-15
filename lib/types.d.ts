export interface IFlat {
   progress: number
   showValue?: boolean
   showText?: boolean
   text?: string
   sx: {
      barColor: string
      barWidth: number
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: FontFamily
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: FontFamily
      bgColor?: string
      bgOpacity?: number
      loadingTime?: number
   }
}

export interface IHeat extends Pick<IFlat, 'progress' | 'sx' | 'showValue' | 'text' > {
   revertColor?: boolean
}

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'
type FontFamily =
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
/**
 Arial

 */

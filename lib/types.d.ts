export interface IFlat {
   progress: number
   range?: { from: number, to: number }
   showValue?: boolean
   showText?: boolean
   text?: string
   sx: {
      barColor: string
      barWidth: number
      shape?: Shape
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
      strokeLinecap?: StrokeLineCap
   }
}

export interface IHeat {
   progress: number
   range?: { from: number, to: number }
   showValue?: boolean
   showText?: boolean
   text?: string
   revertColor?: boolean
   sx: {
      barWidth: number
      bgColor?: string
      shape?: Shape
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: FontFamily
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: FontFamily
      loadingTime?: number
      strokeLinecap?: StrokeLineCap
   }

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

type StrokeLineCap = 'butt' | 'round' | 'square'
type Shape = 'full' | 'threequarters' | 'half'

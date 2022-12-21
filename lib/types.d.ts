export interface IFlat {
   progress: number
   range?: { from: number, to: number }
   showValue?: boolean
   showText?: boolean
   showMiniCircle?: boolean
   text?: string
   sx: {
      barColor: string
      barWidth: number
      bgColor?: string
      shape?: FlatShape
      strokeLinecap?: StrokeLineCap
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: FontFamily
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: FontFamily
      loadingTime?: number
      miniCircleColor?: string
   }
}

export interface IHeat {
   progress: number
   range?: { from: number, to: number }
   showValue?: boolean
   showText?: boolean
   showMiniCircle?: boolean
   text?: string
   revertColor?: boolean
   sx: {
      barWidth: number
      bgColor?: string
      shape?: HeatShape
      strokeLinecap?: StrokeLineCap
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: FontFamily
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: FontFamily
      loadingTime?: number
      miniCircleColor?: string
   }

}

export interface INested {
   circles: {
      circle1: number
      circle2: number
      circle3?: number
      circle4?: number
      circle5?: number
   }
   sx: {
      circle1Color?: string
      circle2Color?: string
      circle3Color?: string
      circle4Color?: string
      circle5Color?: string
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
type FlatShape = 'full' | 'threequarters' | 'half'
type HeatShape = 'threequarters' | 'half'

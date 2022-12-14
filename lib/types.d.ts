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

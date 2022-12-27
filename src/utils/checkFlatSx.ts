import { IFlatSettings } from '../types';

export const checkFlatSx = (props: IFlatSettings): string[] => {
  const sxArr: string [] = [];
  sxArr.push(`\t\tbarColor: '${props.flatOptions.strokeColor}'`);
  sxArr.push(`\t\tbarWidth: ${props.flatOptions.strokeWidth}`);
  if (props.flatOptions.bgColor !== '#ffffff') {
    sxArr.push(`\t\tbgColor: '${props.flatOptions.bgColor}'`);
  }
  if (props.flatOptions.shape !== 'full') {
    sxArr.push(`\t\tshape: '${props.flatOptions.shape}'`);
  }
  if (props.flatOptions.strokeLinecap !== 'round') {
    sxArr.push(`\t\tstrokeLinecap: '${props.flatOptions.strokeLinecap}'`);
  }
  if (props.flatOptions.valueSize !== 30) {
    sxArr.push(`\t\tvalueSize: ${props.flatOptions.valueSize}`);
  }
  if (props.flatOptions.valueWeight !== 'normal') {
    sxArr.push(`\t\tvalueWeight: '${props.flatOptions.valueWeight}'`);
  }
  if (props.flatOptions.valueColor !== '#000000') {
    sxArr.push(`\t\tvalueColor: '${props.flatOptions.valueColor}'`);
  }
  if (props.flatOptions.valueFamily !== 'Trebuchet MS') {
    sxArr.push(`\t\tvalueFamily: '${props.flatOptions.valueFamily}'`);
  }
  if (props.flatOptions.textSize !== 14) {
    sxArr.push(`\t\ttextSize: ${props.flatOptions.textSize}`);
  }
  if (props.flatOptions.textWeight !== 'normal') {
    sxArr.push(`\t\ttextWeight: '${props.flatOptions.textWeight}'`);
  }
  if (props.flatOptions.textColor !== '#000000') {
    sxArr.push(`\t\ttextColor: '${props.flatOptions.textColor}'`);
  }
  if (props.flatOptions.textFamily !== 'Trebuchet MS') {
    sxArr.push(`\t\ttextFamily: '${props.flatOptions.textFamily}'`);
  }
  if (props.flatOptions.loadingTime !== 1000) {
    sxArr.push(`\t\tloadingTime: ${props.flatOptions.loadingTime}`);
  }
  if (props.flatOptions.miniCircleColor !== '#ff0000') {
    sxArr.push(`\t\tminiCircleColor: '${props.flatOptions.miniCircleColor}'`);
  }
  if (props.flatOptions.miniCircleSize !== 5) {
    sxArr.push(`\t\tminiCircleSize: ${props.flatOptions.miniCircleSize}`);
  }
  if (!props.flatOptions.valueAnimation) {
    sxArr.push(`\t\tvalueAnimation: ${props.flatOptions.valueAnimation ? 'true' : 'false'}`);
  }
  if (!props.flatOptions.intersectionEnabled) {
    sxArr.push(`\t\tintersectionEnabled: ${props.flatOptions.intersectionEnabled ? 'true' : 'false'}`);
  }
  return sxArr;
};

import { IHeatSettings } from '../types';

export const checkHeatSx = (props: IHeatSettings): string[] => {
  const arr: string[] = [];
  arr.push(`\t\tbgColor: '${props.heatOptions.bgColor}'`);
  arr.push(`\t\tbarWidth: ${props.heatOptions.strokeWidth}`);
  if (props.heatOptions.shape !== 'threequarters') {
    arr.push(`\t\tshape: '${props.heatOptions.shape}'`);
  }
  if (props.heatOptions.strokeLinecap !== 'round') {
    arr.push(`\t\tstrokeLinecap: '${props.heatOptions.strokeLinecap}'`);
  }
  if (props.heatOptions.valueSize !== 30) {
    arr.push(`\t\tvalueSize: ${props.heatOptions.valueSize}`);
  }
  if (props.heatOptions.valueWeight !== 'normal') {
    arr.push(`\t\tvalueWeight: '${props.heatOptions.valueWeight}'`);
  }
  if (props.heatOptions.valueColor !== '#000000') {
    arr.push(`\t\tvalueColor: '${props.heatOptions.valueColor}'`);
  }
  if (props.heatOptions.valueFamily !== 'Trebuchet MS') {
    arr.push(`\t\tvalueFamily: '${props.heatOptions.valueFamily}'`);
  }
  if (props.heatOptions.textSize !== 14) {
    arr.push(`\t\ttextSize: ${props.heatOptions.textSize}`);
  }
  if (props.heatOptions.textWeight !== 'normal') {
    arr.push(`\t\ttextWeight: '${props.heatOptions.textWeight}'`);
  }
  if (props.heatOptions.textColor !== '#000000') {
    arr.push(`\t\ttextColor: '${props.heatOptions.textColor}'`);
  }
  if (props.heatOptions.textFamily !== 'Trebuchet MS') {
    arr.push(`\t\ttextFamily: '${props.heatOptions.textFamily}'`);
  }
  if (props.heatOptions.loadingTime !== 1000) {
    arr.push(`\t\tloadingTime: ${props.heatOptions.loadingTime}`);
  }
  if (!props.heatOptions.valueAnimation) {
    arr.push(`\t\tvalueAnimation: ${props.heatOptions.valueAnimation ? 'true' : 'false'}`);
  }
  if (!props.heatOptions.intersectionEnabled) {
    arr.push(`\t\tintersectionEnabled: ${props.heatOptions.intersectionEnabled ? 'true' : 'false'}`);
  }

  return arr;
};

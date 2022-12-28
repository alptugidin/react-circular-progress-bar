import { INestedSettings } from '../types';

export const checkNestedSx = (props: INestedSettings): string[] => {
  const arr: string[] = [];
  arr.push(`\t\tbgColor: '${props.nestedOptions.background}'`);
  if (props.nestedOptions.fontWeight !== 'bold') {
    arr.push(`\t\tfontWeight: '${props.nestedOptions.fontWeight}'`);
  }
  if (props.nestedOptions.fontFamily !== 'Trebuchet MS') {
    arr.push(`\t\tfontFamily: '${props.nestedOptions.fontFamily}'`);
  }
  if (props.nestedOptions.strokeLinecap !== 'round') {
    arr.push(`\t\tstrokeLinecap: '${props.nestedOptions.strokeLinecap}'`);
  }
  if (!props.nestedOptions.valueAnimation) {
    arr.push(`\t\tvalueAnimation: ${props.nestedOptions.valueAnimation ? 'true' : 'false'}`);
  }
  if (!props.nestedOptions.intersectionEnabled) {
    arr.push(`\t\tintersectionEnabled: ${props.nestedOptions.intersectionEnabled ? 'true' : 'false'}`);
  }
  if (props.nestedOptions.loadingTime !== 1000) {
    arr.push(`\t\tloadingTime: ${props.nestedOptions.loadingTime}`);
  }

  return arr;
};

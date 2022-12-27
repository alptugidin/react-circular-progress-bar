import { IFlatSettings } from '../types';

export const checkFlatProps = (props: IFlatSettings): string[] => {
  const propsArr = [];
  if (props.flatOptions.range.to !== 100 && props.flatOptions.range.from !== 0) {
    propsArr.push(`\trange={{ from: ${props.flatOptions.range.from}, to: ${props.flatOptions.range.to} }}`);
  }
  if (props.flatOptions.sign.value !== '%' || props.flatOptions.sign.position !== 'end') {
    propsArr.push(`\tsign={{ value: '${props.flatOptions.sign.value}', position: '${props.flatOptions.sign.position}' }}`);
  }
  if (props.flatOptions.text !== undefined && props.flatOptions.text !== '') {
    propsArr.push(`\ttext={'${props.flatOptions.text}'}`);
  }
  if (!props.flatOptions.showValue) {
    propsArr.push(`\tshowValue={ ${props.flatOptions.showValue ? 'true' : 'false'} }`);
  }
  if (!props.flatOptions.showMiniCircle) {
    propsArr.push(`\tshowMiniCircle={ ${props.flatOptions.showMiniCircle ? 'true' : 'false'} }`);
  }
  propsArr.push(`\tprogress={${props.progress}}`);
  return propsArr;
};

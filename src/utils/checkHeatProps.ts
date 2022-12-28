import { IHeatSettings } from '../types';

export const checkHeatProps = (props: IHeatSettings): string[] => {
  const arr: string[] = [];
  arr.push(`\tprogress={${props.progress}}`);
  if (props.heatOptions.range.to !== 100 && props.heatOptions.range.from !== 0) {
    arr.push(`\trange={{ from: ${props.heatOptions.range.from}, to: ${props.heatOptions.range.to} }}`);
  }
  if (props.heatOptions.sign.value !== '%' || props.heatOptions.sign.position !== 'end') {
    arr.push(`\tsign={{ value: '${props.heatOptions.sign.value}', position: '${props.heatOptions.sign.position}' }}`);
  }

  if (props.heatOptions.text !== undefined && props.heatOptions.text !== '') {
    arr.push(`\ttext={'${props.heatOptions.text}'}`);
  }
  if (!props.heatOptions.showValue) {
    arr.push(`\tshowValue={ ${props.heatOptions.showValue ? 'true' : 'false'} }`);
  }

  if (props.heatOptions.revertBackground) {
    arr.push(`\trevertBackground={${props.heatOptions.revertBackground ? 'true' : 'false'}}`);
  }

  return arr;
};

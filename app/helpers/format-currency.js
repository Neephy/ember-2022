import {helper} from '@ember/component/helper';

export default helper (function formatCurrency(params /*, named*/) {
  let [value, symbol] = params;
  //value = Math.round(value * 100) / 100;
  return `${value}, ${symbol}`;
});

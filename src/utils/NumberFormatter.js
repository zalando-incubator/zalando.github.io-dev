import numeral from 'numeral';

export default {
  format: function (number) {
    return numeral(number).format('0,0').replace(',', '.');
  }
};

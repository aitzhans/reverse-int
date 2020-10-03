module.exports = function reverse (n) {
  let stringNum = n.toString();
  let result = stringNum.split('').reverse().join('');
  return parseInt(result);
}

const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nlist = n.toString().split('').map(Number);
  const min = Math.min(...nlist);
  const index = nlist.indexOf(min);
  nlist.splice(index, 1);
  return +nlist.join('');
}

module.exports = {
  deleteDigit
};

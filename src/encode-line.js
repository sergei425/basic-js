const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let count = 0
  let str2 = ''
  let elem = str[0]
  for (let i = 1; i < str.length; i++) {
    if (elem === str[i]) {
      count++
      str2 
    } else {
      count = 0
      elem =str[i]
    }
  }
  return str2;
}

module.exports = {
  encodeLine
};

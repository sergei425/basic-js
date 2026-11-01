const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  if (s1.length > 0) {
    s1.forEach((char, index) => {
      if (s2[index] === char) {
        count++;
      }
    });
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

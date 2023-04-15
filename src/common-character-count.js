const { NotImplementedError } = require("../extensions/index.js");

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
  let s1Array = [...s1];
  let s2Array = [...s2];
  let count = 0;
  for (let i = 0; i < s1Array.length; i++) {
    if (s2Array.includes(s1Array[i])) {
      count++;
      s2Array.splice(s2Array.indexOf(s1Array[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

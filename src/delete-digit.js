const { NotImplementedError } = require("../extensions/index.js");

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
  let maxValue = 0;
  let myArray = n.toString().split("");
  console.log(myArray);
  for (let i = 0; i < myArray.length; i++) {
    let newArray = [...myArray];
    newArray.splice(i, 1);
    let result = newArray.reduce((a, b) => {
      return a + b;
    });
    if (+result > maxValue) maxValue = +result;
  }
  return maxValue;
}

module.exports = {
  deleteDigit,
};

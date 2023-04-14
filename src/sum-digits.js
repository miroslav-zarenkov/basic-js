const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let secondSum = 0;
  let finalSum = 0;
  let nArray = n.toString().split("");
  for (let i = 0; i < nArray.length; i++) {
    sum += +nArray[i];
  }
  let sumArray = sum.toString().split("");
  if (sumArray.length > 1) {
    for (let i = 0; i < sumArray.length; i++) {
      secondSum += +sumArray[i];
    }
  } else {
    return sum;
  }
  let finalArray = secondSum.toString().split("");
  if (secondSum.length > 1) {
    for (let i = 0; i < finalArray.length; i++) {
      finalSum += +secondSum[i];
    }
  } else {
    return secondSum;
  }

  return finalSum;
}

module.exports = {
  getSumOfDigits,
};

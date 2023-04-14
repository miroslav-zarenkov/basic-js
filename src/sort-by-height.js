const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let finalArray = [];
  let minusOnesArray = arr.filter((element) => element === -1);
  let sortedArray = arr
    .filter((element) => element !== -1)
    .sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      finalArray.push(minusOnesArray.shift());
    } else {
      finalArray.push(sortedArray.shift());
    }
  }

  return finalArray;
}

module.exports = {
  sortByHeight,
};

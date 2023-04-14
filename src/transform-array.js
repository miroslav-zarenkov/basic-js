const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const newArray = [...arr];
  let transformedArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "--discard-next") {
      delete newArray[i + 1];
      i++;
    } else if (newArray[i] === "--discard-prev") {
      if (typeof newArray[i - 1] === "undefined") {
        continue;
      } else {
        transformedArray.pop();
      }
    } else if (newArray[i] === "--double-next") {
      if (typeof newArray[i + 1] === "undefined") {
        continue;
      } else {
        transformedArray.push(newArray[i + 1]);
      }
    } else if (newArray[i] === "--double-prev") {
      if (typeof newArray[i - 1] === "undefined") {
        continue;
      } else {
        transformedArray.push(newArray[i - 1]);
      }
    } else {
      transformedArray.push(newArray[i]);
    }
  }

  return transformedArray;
}

module.exports = {
  transform,
};

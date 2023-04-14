const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let number = 0;
  let backyardLength = backyard.length;
  if (backyardLength === 0) return number;
  let elementLength = backyard[0].length;

  for (let i = 0; i < backyardLength; i++) {
    for (let j = 0; j < elementLength; j++) {
      if (backyard[i][j] === "^^") number++;
    }
  }
  return number;
}

module.exports = {
  countCats,
};

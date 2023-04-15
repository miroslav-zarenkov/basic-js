const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    mineMatrix.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      for (let neighborRow = i - 1; neighborRow <= i + 1; neighborRow++) {
        for (let neighborCol = j - 1; neighborCol <= j + 1; neighborCol++) {
          if (
            (neighborRow === i && neighborCol === j) ||
            neighborRow < 0 ||
            neighborCol < 0 ||
            neighborRow > matrix.length - 1 ||
            neighborCol > matrix[0].length - 1
          ) {
            continue;
          } else {
            if (matrix[neighborRow][neighborCol]) {
              count++;
            }
          }
        }
      }
      mineMatrix[i][j] = count;
    }
  }
  return mineMatrix;
}

// ([i-1][j-1])  ([i-1][j])  ([i-1][j+1])
// ([i][j-1])    ([i][j])    ([i][j+1])
// ([i+1][j-1])  ([i+1][j])  ([i+1])([j+1])

//  [0][0]  [0][1]  [0][2]
//  [1][0]  [1][1]  [1][2]
//  [2][0]  [2][1]  [2][2]

module.exports = {
  minesweeper,
};

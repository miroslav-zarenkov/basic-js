const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let finalArray = [];
  let countObject = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (countObject[name]) {
      let countNumber = `(${countObject[name]})`;
      let newName = `${name}${countNumber}`;
      while (countObject[newName]) {
        newName = `${name}${countNumber}`;
        countNumber = `(${countObject[name]++})`;
      }
      countObject[newName] = 1;
      finalArray.push(newName);
    } else {
      countObject[name] = 1;
      finalArray.push(name);
    }
    console.log(names);
    console.log(countObject);
    console.log(finalArray);
  }
  return finalArray;
}

module.exports = {
  renameFiles,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};
  let newArray = [];

  for (let i = 0; i < domains.length; i++) {
    newArray = domains[i].split(".");
    console.log(newArray);
    newArray.reverse();
    let str = "";
    for (let i = 0; i < newArray.length; i++) {
      str += `.${newArray[i]}`;
      console.log(str);
      if (object[str]) {
        object[str]++;
      } else {
        object[str] = 1;
      }
    }
    console.log(newArray);
  }

  return object;
}

module.exports = {
  getDNSStats,
};

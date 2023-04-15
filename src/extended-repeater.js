const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + "";
  let finalString = "";
  let repeatTimesVar = options["repeatTimes"] || 1;
  let separatorVar = options["separator"] || "+";
  let additionVar = options["addition"];
  let additionRepeatTimes = options["additionRepeatTimes"] || 1;
  let additionSeparator = options["additionSeparator"] || "|";

  if (additionVar !== undefined) {
    if (additionRepeatTimes) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        if (i === additionRepeatTimes - 1) {
          str += `${additionVar}`;
        } else {
          str += `${additionVar}${additionSeparator}`;
        }
      }
    } else {
      str += `${additionVar}`;
    }
  }

  for (let i = 0; i < repeatTimesVar; i++) {
    if (i === repeatTimesVar - 1) {
      finalString += `${str}`;
    } else {
      finalString += `${str}${separatorVar}`;
    }
  }

  return finalString;
}

module.exports = {
  repeater,
};

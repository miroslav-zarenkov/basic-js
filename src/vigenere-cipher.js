const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(forward = true) {
    this.forward = forward;
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.lettersPosition = {};
    const generateLettersPosition = () => {
      for (let i = 0; i < this.letters.length; i++) {
        this.lettersPosition[this.letters[i]] = i;
      }
    };
    generateLettersPosition();
  }
  encrypt(message, key) {
    //console.log(this.lettersPosition["A"]);
    let regexLetters = /^[a-zA-Z]+$/;
    let regexNumbers = /^(0?[0-9]|1[0-9]|2[0-5])$/;
    let keyPosition = "";
    let keyPositionArray = [];
    let string = "";
    let messagePosition = "";
    let encoded = "";

    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    for (let i = 0; i < key.length; i++) {
      if (!regexLetters.test(key[i])) {
        keyPosition += key[i];
      } else {
        // console.log(key);
        //console.log("key i" + key[i]);
        const letter = key[i].toUpperCase();
        keyPosition += `${this.lettersPosition[letter]} `;
        keyPositionArray = keyPosition.trim().split(" ");
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (!regexLetters.test(message[i])) {
        if (message[i] === ",") {
          messagePosition += message[i] + " ";
        } else {
          messagePosition += message[i];
        }
      } else {
        const letter = message[i].toUpperCase();
        // console.log("letter " + letter);
        messagePosition += `${this.lettersPosition[letter]} `;
      }
    }
    let letterCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (!regexLetters.test(message[i])) {
        encoded += message[i];
      } else {
        const letter = message[i].toUpperCase();
        // console.log("letter " + letter);
        encoded += `${
          (this.lettersPosition[letter] +
            parseInt(keyPositionArray[letterCount % keyPositionArray.length])) %
          26
        } `;
        letterCount++;
      }
    }

    const encodedArray = encoded.split(" ");
    const encodedArrayTransformed = encodedArray.map((value) => {
      if (regexNumbers.test(value)) {
        return Object.keys(this.lettersPosition).find(
          (key) => this.lettersPosition[key] === parseInt(value)
        );
      } else {
        return value;
      }
    });

    // console.log("message: " + messagePosition);
    // console.log("key: " + keyPosition);
    // console.log("code:" + encoded);
    // console.log("transformed:" + encodedArrayTransformed);
    // console.log(encodedArray);
    // console.log(encodedArrayTransformed);
    const encodedArrayWithSpaces = encodedArrayTransformed.map((element) =>
      regexLetters.test(element) ? element : element + " "
    );

    string = encodedArrayWithSpaces.join("").trim();
    if (!this.forward) string = string.split("").reverse().join("");
    return string;
  }

  decrypt(encryptedMessage, key) {
    let regexLetters = /^[a-zA-Z]+$/;
    let regexNumbers = /^(0?[0-9]|1[0-9]|2[0-5])$/;
    let keyPosition = "";
    let keyPositionArray = [];
    let string = "";
    let messagePosition = "";
    let decoded = "";
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    for (let i = 0; i < key.length; i++) {
      if (!regexLetters.test(key[i])) {
        keyPosition += key[i];
      } else {
        // console.log(key);
        //console.log("key i" + key[i]);
        const letter = key[i].toUpperCase();
        keyPosition += `${this.lettersPosition[letter]} `;
        keyPositionArray = keyPosition.trim().split(" ");
      }
    }
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!regexNumbers.test(encryptedMessage[i])) {
        if (encryptedMessage[i] === ",") {
          messagePosition += encryptedMessage[i] + " ";
        } else {
          messagePosition += encryptedMessage[i];
        }
      } else {
        const letter = encryptedMessage[i];
        // console.log("letter " + letter);
        messagePosition += `${this.lettersPosition[letter]} `;
      }
    }
    let letterCount = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!regexLetters.test(encryptedMessage[i])) {
        decoded += encryptedMessage[i];
      } else {
        const letter = encryptedMessage[i];
        // console.log("letter " + letter);
        // console.log("w " + this.lettersPosition[letter]);
        // console.log(
        //   "e " +
        //     parseInt(keyPositionArray[letterCount % keyPositionArray.length])
        // );
        decoded += `${
          (this.lettersPosition[letter] -
            parseInt(keyPositionArray[letterCount % keyPositionArray.length]) +
            26) %
          26
        } `;

        letterCount++;
      }
    }
    const decodedArray = decoded.split(" ");
    const decodedArrayTransformed = decodedArray.map((value) => {
      if (regexNumbers.test(value)) {
        return Object.keys(this.lettersPosition).find(
          (key) => this.lettersPosition[key] === parseInt(value)
        );
      } else {
        return value;
      }
    });
    const decodedArrayWithSpaces = decodedArrayTransformed.map((element) =>
      regexLetters.test(element) ? element : element + " "
    );

    string = decodedArrayWithSpaces.join("").trim();
    if (!this.forward) string = string.split("").reverse().join("");
    //console.log("fin: " + string);
    // console.log("encrypted message: " + messagePosition);
    // console.log("key: " + keyPosition);
    // console.log("decode:" + decoded);
    return string;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

// #region Tests
/**
 * Executes tests of functions (1, 2 or 3) with some model words or param's words
 * OBS.: Print results on console
 * @param {number} numberFunction 1, 2, 3
 * @param {string[]} wordsToTest
 */
function testsOfFunction(numberFunction, wordsToTest) {
  const words = wordsToTest
    ? wordsToTest
    : [
        "sapato",
        "abacate",
        "shampoo",
        "estrogonofe",
        "sorvete",
        "anagrama",
        "aaaa",
        "asdhasioudhasioufjioe9dghsio",
        "aabb",
        "aabbccc",
      ];

  words.forEach((word) => {
    const message = `First letter that is not repeated in "${word}": `;
    switch (numberFunction) {
      case 1:
        console.log(`${message}"${findFirstLetterNotRepeated(word)}"`);
        break;
      case 2:
        console.log(`${message}"${findFirstLetterNotRepeated2(word)}"`);
        break;
      case 3:
        console.log(`${message}"${findFirstLetterNotRepeated3(word)}"`);
        break;

      default:
        break;
    }
  });
}
// #endregion Tests

// #region first function
/**
 * Find the first letter that's not repeated in the word
 * @param {string} word
 * @returns {string}
 */
function findFirstLetterNotRepeated(word) {
  const arrayWord = word.split("");
  const uniqueLetter = arrayWord
    .map((letterWord) => {
      return arrayWord.filter((letter) => letter === letterWord);
    })
    .find((array) => array.length === 1);
  return !!uniqueLetter ? uniqueLetter : "All the letters are repeated";
}

// testsOfFunction(1);
// #endregion first function

// #region second function
/**
 * Find the first letter that's not repeated in the word
 * @param {string} word
 * @returns {string}
 */
function findFirstLetterNotRepeated2(word) {
  const arrayWord = word.split("");

  const indexFirstNotRepeatedLetter = arrayWord
    .map((letter) => {
      return [...arrayWord].filter((wordLetter) => wordLetter === letter)
        .length;
    })
    .findIndex((count) => count == 1);

  if (indexFirstNotRepeatedLetter < 0) return "All the letters are repeated";

  return arrayWord[indexFirstNotRepeatedLetter];
}

// testsOfFunction(2);
// #endregion second function

// #region third function
/**
 * Find the first letter that's not repeated in the word
 * @param {string} word
 * @returns {string}
 */
function findFirstLetterNotRepeated3(word) {
  const arrayWord = word.split("");
  const uniqueLetters = [];
  arrayWord.forEach((letter) => {
    if (arrayWord.indexOf(letter) === arrayWord.lastIndexOf(letter)) {
      uniqueLetters.push(letter);
    }
  });

  if (uniqueLetters.length <= 0) return "All the letters are repeated";

  return uniqueLetters[0];
}

testsOfFunction(3);
// #endregion third function

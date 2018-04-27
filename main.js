// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumbers = (number) => {
  const numberToString = number.toString();
  const result = numberToString.split('').reverse().join('');
  return result;
};

reverseNumbers(32243);

// 2. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// const stringCombinations = (str) => {
// };
// stringCombinations('dog');


// 3. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmast er'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// 5. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number,
// string and undefined.

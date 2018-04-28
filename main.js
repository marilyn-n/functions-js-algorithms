// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumbers = (number) => {
  const numberToString = number.toString();
  const result = numberToString.split('').reverse().join('');
  return result;
};

reverseNumbers(32243);

// 2. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number,
// string and undefined.

const typeOfExpression = value => typeof value;

console.log(typeOfExpression({})); // object
console.log(typeOfExpression(false)); // boolean
console.log(typeOfExpression(() => {})); // function
console.log(typeOfExpression(34)); // number
console.log(typeOfExpression('hello world')); // string
console.log(typeOfExpression()); // undefined

// 3. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Expected Output : 'Development'

const longestWord = (str) => {
  const words = str.split(' ');
  const result = words.sort((a, b) => a.length < b.length);
  return result[0];
};

longestWord('Simple Algorithms');

// 4. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// const stringCombinations = (str) => {
// };
// stringCombinations('dog');

// 5. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmast er'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

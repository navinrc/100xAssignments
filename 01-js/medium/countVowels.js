/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str = "") {
//   if (str.length === 0) return 0;
//   // Your code here
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   str
//     .toLowerCase()
//     .split("")
//     .forEach((char) => {
//       if (vowels.includes(char)) count++;
//     });
//   return count;
// }

// optimized approach
/**
 * 
 * 
 * 
 * MDN Web Docs on Sets:

    Sets are implemented using hash tables in JavaScript, which allows for average O(1)O(1) time complexity for operations like add, delete, and has.
    Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  MDN Web Docs on Arrays:

    Arrays in JavaScript do not have constant-time membership checking. The includes method performs a linear search, resulting in O(n)O(n) time complexity.
    Source: MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * 
 */
function countVowels(str = "") {
  if (str.length === 0) return 0;

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }

  return count;
}

module.exports = countVowels;

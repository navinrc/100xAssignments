/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str='') {
//   let revStr = '';
//   for(char of str.toLowerCase()) {
//     revStr = char + revStr;
//   }
//   console.log(revStr)
//   if(str.toLowerCase() === revStr)
//     return true;
//   else
//     return false;
// }


//efficient alternative instead of building string manually

function isPalindrome(str = '') {

  // Use replace(/[^a-z0-9]/gi, '') to remove all non-alphanumeric characters. 
  // The regular expression [^a-z0-9] matches any character that is not a letter or digit, 
  // and the i flag makes the match case-insensitive.
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the normalized string
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  // Compare the normalized string with its reversed version
  return normalizedStr === reversedStr;
}



module.exports = isPalindrome;

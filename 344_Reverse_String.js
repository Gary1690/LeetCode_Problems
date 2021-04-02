// 344. Reverse String
// Easy

// 2226

// 759

// Add to List

// Share
// Write a function that reverses a string. The input string is given as an array of characters s.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

var reverseString = function(s) {
  const result = []
  while(!!s.length){
      result.push(s.pop())
      
  }
  s. push (...result)
};

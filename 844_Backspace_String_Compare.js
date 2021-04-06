// 844. Backspace String Compare
// Easy

// 2379

// 113

// Add to List

// Share
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 var backspaceCompare = function(S, T) {
  S = resolveString(S)
  T = resolveString(T)
  console.log(S,T)
  return S === T
};

const resolveString = (s)=> {
  let result = "" 
  let skips = 0
  for (let i = s.length-1; i >=0 ; i--){
      if(s[i] === '#'){
          skips++
      }else if(skips){
          skips--
          continue
      }else{
          result = s[i]+result
      }
  }
  return result
}
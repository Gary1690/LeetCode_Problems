// 1304. Find N Unique Integers Sum up to Zero
// Easy

// 428

// 255

// Add to List

// Share
// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
 

// Constraints:

// 1 <= n <= 1000

/*
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function(n) {
  const rest = new Array(n).fill(0)
  for(let i = 0; i < Math.floor(rest.length /2);i++){
      console.log(-1-i,i+1)
      rest[i] = -1-i
      rest[rest.length-1-i] = i+1
  }
  return rest
};
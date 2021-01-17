// 461. Hamming Distance
// Easy

// 2064

// 174

// Add to List

// Share
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.


/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
  let counter = 0
  do {
      if(x%2 != y%2) counter++
      x = Math.floor(x/2)
      y = Math.floor(y/2)
  }
  while(x > 0  || y > 0)
  return counter
};
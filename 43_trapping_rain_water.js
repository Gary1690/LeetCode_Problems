// 42. Trapping Rain Water
// Hard

// 9051

// 138

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105

/*
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftRain = [];
  let leftHighest = height[0];
  
  for (let i = 0; i < height.length ; i++){
      leftHighest = Math.max(leftHighest, height[i]);
      leftRain[i] = leftHighest - height[i]
  }
  
  let rightRain = [];
  let rightHighest = height[height.length-1];
  
  for (let i = height.length -1 ; i >= 0 ; i--){
      rightHighest = Math.max(rightHighest, height[i]);
      rightRain[i] = rightHighest - height[i]
  }
  
  let rainTrap = 0
  for (let i = 0; i < height.length ; i++){
      rainTrap += Math.min(leftRain[i], rightRain[i])
  }
  return rainTrap
};
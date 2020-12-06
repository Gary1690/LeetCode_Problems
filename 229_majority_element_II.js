// 229. Majority Element II
// Medium

// 2262

// 205

// Add to List

// Share
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
  const object = {};
  for (let i = 0; i < nums.length; i++ ){
      if(!object[nums[i]]){
          object[nums[i]] = 0
      }
      object[nums[i]]++
  }
  
  const result = []
  const minRepetition = Math.floor(nums.length/3)
  console.log(object)
  for(const property in object){
      if(object[property] > minRepetition){
          result.push(parseInt(property))
      }
  }
  return result
};
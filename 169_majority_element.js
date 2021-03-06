// 169. Majority Element
// Easy

// 4070

// 236

// Add to List

// Share
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/*
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  const object = {}
  for(let i = 0 ; i < nums.length ; i++){
      if(!object[nums[i]]){
          object[nums[i]] = 0
      }
      object[nums[i]]++
  }
  let max = ""
  let repetition = 0
  for (const property in object) {
      if(object[property ] > repetition){
          repetition  = object[property ] 
          max = property
      }
  }
 return parseInt(max)

};
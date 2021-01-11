// 49. Group Anagrams
// Medium

// 4491

// 212

// Add to List

// Share
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

/*
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  //javascript object to group anagrams
  const anagramsByGroup = {}
  //iterating over each word of the input array
  for(const str of strs){
      //create the javascript object  key by sorting the words letters
      //the words "ate", "eat" and "tea"  produce the same key "aet" 
      //this key let us see if their are other words that are its anagrams 
      //to add the current word to it   
      const sortedLetters = sortLetters(str)
      //if the  key produce by sorting the words letters doesnt exist  
      //it is initialize with an empty array 
      if(!anagramsByGroup[sortedLetters]){
          anagramsByGroup[sortedLetters] = []
      }
      //we push the word into the array for the corresponding key 
      anagramsByGroup[sortedLetters].push(str)
  }
  //finally we return an array with all the sorted anagrams 
  return Object.values(anagramsByGroup)
};

//helper function to sort the letters in a word or phrase
const sortLetters = (str) =>{
  return str.split('').sort().join('')
}


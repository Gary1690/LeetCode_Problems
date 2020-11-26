// 173. Binary Search Tree Iterator
// Medium

// 3041

// 286

// Add to List

// Share
// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

 

// Example:



// BSTIterator iterator = new BSTIterator(root);
// iterator.next();    // return 3
// iterator.next();    // return 7
// iterator.hasNext(); // return true
// iterator.next();    // return 9
// iterator.hasNext(); // return true
// iterator.next();    // return 15
// iterator.hasNext(); // return true
// iterator.next();    // return 20
// iterator.hasNext(); // return false
 

// Note:

// next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
// You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.
// Accepted
// 351,757
// Submissions
// 604,182

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.result = []
  function BSTiteratorHelper(root,array){ 
      if(root === null){
          return;
      }
      array.push(root.val)
      BSTiteratorHelper(root.left,array)
      BSTiteratorHelper(root.right,array)
  }
 BSTiteratorHelper(root,this.result);
 this.result.sort(function(a, b){return b - a})
 
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function() {
 return this.result.pop()
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
 return this.result[0] !== undefined
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
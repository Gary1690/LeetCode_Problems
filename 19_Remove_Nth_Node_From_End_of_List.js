// 19. Remove Nth Node From End of List
// Medium

// 5257

// 303

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let nth = getSize(head) - n
  if(nth === 0) {return head.next }
  let current = head
  for(let i = 1; i < nth; i++){
      current = current.next
  }
  current.next = current.next.next
  return head
};

const getSize = (head) =>{
  let size = 0
  if(!head){return size}
  while(head.next){
      size++
      head = head.next
  }
  return ++size
  
}
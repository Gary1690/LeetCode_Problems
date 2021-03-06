// 1252. Cells with Odd Values in a Matrix
// Easy

// 359

// 599

// Add to List

// Share
// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the increment to all indices.

 

// Example 1:


// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
// Example 2:


// Input: n = 2, m = 2, indices = [[1,1],[0,0]]
// Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.
 

// Constraints:

// 1 <= n <= 50
// 1 <= m <= 50
// 1 <= indices.length <= 100
// 0 <= indices[i][0] < n
// 0 <= indices[i][1] < m

/*
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  //initia;izing the matrix N x M
  const matrix = []
  for (let i = 0; i<n ; i++){
      matrix[i] = (new Array(m)).fill(0)
  }

  for(index of indices){
      ri = index[0]
      ci = index[1]
      //increasing row
      for(let i = 0; i < m;i++){
          matrix[ri][i]+=1
      }
      //increasing column
      for(let i = 0; i < n;i++){
          matrix[i][ci]+=1
      }
  }
  
  let oddValueCounter = 0 
  for(let i = 0; i < n;i++){
      for(let j = 0; j < m; j++){
          if(matrix[i][j] % 2 !== 0 ){
              oddValueCounter++
          }        
      }
  }
  return oddValueCounter
  
};
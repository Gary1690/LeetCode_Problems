// 537. Complex Number Multiplication
// Medium

// 267

// 768

// Add to List

// Share
// Given two strings representing two complex numbers.

// You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

// Example 1:
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
// Example 2:
// Input: "1+-1i", "1+-1i"
// Output: "0+-2i"
// Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
// Note:

// The input strings will not have extra blank.
// The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const firstComplex = a.split("+")
  const secondComplex = b.split("+")
  
  firstComplex[1] = parseInt(firstComplex[1].replace("i",""))
  secondComplex[1] = parseInt(secondComplex[1].replace("i",""))
  
  firstComplex[0] = parseInt(firstComplex[0])
  secondComplex[0] = parseInt(secondComplex[0])

  const result =  `${(firstComplex[0] * secondComplex[0]) - (firstComplex[1] * secondComplex[1])}+${(firstComplex[0] * secondComplex[1]) + (firstComplex[1] * secondComplex[0]) }i`
console.log(result)
  return result
  }
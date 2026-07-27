// Problem Statement:
// Write a function reverseNumber that takes a positive whole 
// number and returns it with its digits reversed. (Hint: convert the number to a string first.)


// Input: a number
// Output: the number with digits reversed
// Returns: a number
 
function reverseNumber(num) {
  let str = num.toString();
  // TODO: build the reversed string, then convert back to a number
  reverseStr = str.split("").reverse().join("");
  console.log("Reverse String: ", reverseStr);
  reverseNum = Number(reverseStr);
  return reverseNum;
}
 
console.log("Reverse Number: ", reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7

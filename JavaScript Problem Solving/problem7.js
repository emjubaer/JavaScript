// Problem Statement:
// Write a function removeFirstAndLast that takes a 
// string and returns it with the first and last character removed.


// Input: a string
// Output: the string without its first and last character
// Returns: a string
 
function removeFirstAndLast(str) {
  // TODO: slice out the middle portion of the string
  let splitStr = str.split("");
  let newString = [];
  for (let i = 0; i < splitStr.length; i++){
    if (!(i === 0 || i === splitStr.length-1 )){
        newString.push(splitStr[i]);
    }

  }
  return newString.join("");
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"
console.log(removeFirstAndLast("Jubaer")); // Expected: "ubae"


// Problem Statement:
// Write a function countVowels that takes a string and 
// returns how many vowels it contains. Assume the string only
// contains lowercase letters, no spaces.


// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  // TODO: loop through the string and count vowels
  let splitStr = str.split("");

  for (let char of splitStr){
    if (vowels.includes(char.toLowerCase())){
        count++
    }
  }
  return count;
}
 
console.log(countVowels("javascript")); // Expected: 3
console.log(countVowels("I Love Bangladesh")); // Expected: 3

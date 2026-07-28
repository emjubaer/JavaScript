// Write a function countMultiplesOfThree that takes an array
//  of numbers and returns how many of them are divisible by 3.

// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number
 
function countMultiplesOfThree(numbers) {
  let count = 0;
  // TODO: loop through and count multiples of 3
  for (let number of numbers){
    if (number % 2 === 0){
        count++
    }
  }
  return count;
}
 
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3


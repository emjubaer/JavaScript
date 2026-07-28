// Problem Statement:
// Write a function averageOfArray that takes an array
//  of numbers and returns their average.


// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {
  let total = 0;
  // TODO: loop through, sum the numbers, then divide by the count
  for (let number of numbers){
    total += number;
  }
//   return total;
  let average = total / numbers.length;
  return average;
}


console.log(averageOfArray([2,4]));
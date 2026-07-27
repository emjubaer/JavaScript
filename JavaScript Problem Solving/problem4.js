// Problem Statement:
// Write a function productOfDigits that takes a positive 
// whole number and returns the product of its individual digits.


// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
    let str = num.toString().split("");
    let total = 1;
    // TODO: loop through each character, convert to number, and multiply
    for (const digit of str) {
        total *= Number(digit);
    }

    return total;
}

console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0


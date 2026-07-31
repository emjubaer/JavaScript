// Problem Statement:
// Write two functions:
// getWordsLongerThan — takes an array of words and a length threshold,
//  and returns a new array containing every word whose length is greater than the threshold.
// countArray — takes an array and returns how many elements it contains


// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array

function getWordsLongerThan(words, minLength) {
    let longWords = [];
    for (const word of words) {
        if (word.length > minLength) {
            longWords.push(word);
        }

    }

    return longWords;
}

// Input: an array
// Output: the number of elements in the array
// Returns: a number

function countArray(arr) {
    let count = arr.length;
    return count;
}

let words = ["cat", "elephant", "dog", "hippopotamus", "ox", "Jubaer"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);

console.log(longWords); // Expected: ["elephant", "hippopotamus"]
console.log(total);     // Expected: 2

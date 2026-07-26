// Without Function 
// let word = 'I love Allah';

// console.log('total char=> ' + word.length);

// let reverseWord = [];

// for (let i = word.length - 1; i >= 0; i--) {
//     let char = [word[i]];
//     console.log('index: ' + i + '= ' + word[i]);
//     reverseWord += char;
// }

// console.log(reverseWord);


// With Function 

function reverseString(word) {

    // let word = ;

    console.log('total char=> ' + word.length);

    let reverseWord = [];

    for (let i = word.length - 1; i >= 0; i--) {
        let char = [word[i]];
        console.log('index: ' + i + '= ' + word[i]);
        reverseWord += char;
    }

    console.log(reverseWord);
}

reverseString('Who are you');
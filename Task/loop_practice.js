// Task 1 — Print "Hello" Five Times
for (j = 1; j <= 5; j++) {
    console.log("Hello");
}

// Task 2 — Print Numbers 1 to 10 
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Task 3 — Countdown with While Loop 
// Write a while loop that prints numbers from 10 down to 1.
let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}

// Task 5 — Even Numbers 
// Write a for loop that prints all even numbers between 1 and 30.
let even = 1;
while (even <= 30) {
    if (even % 2 == 0) {
        console.log(even);
    }
    even++;
}

// Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum);

// Task 8 — Count Down from 20 
// Write a for loop that counts down from 20 to 1.
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.
let jogfol = 0;
for (let i = 2; i <= 50; i++) {
    if (i % 2 == 0) {
        jogfol += i;
    }
}
console.log(jogfol);


// Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches
// a number greater than 30
for (let c = 1; c <= 50; c++) {
    if (c > 30) {
        break;
    }
    console.log(c);
}

// Task 11 — Using Continue 
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.
for (let d = 1; d <= 20; d++){
    if (d % 4 ==0){
        continue;
    }
    console.log(d);
}


// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: 
// once using for, once using while, and once using do while. 
// Compare how the code structure differs for each.
for (let com =1; com <= 5; com++){
    console.log(com);
}

let com2 =1;
while (com2 <= 5){
    console.log(com2);
    com2++;
}

let com3 = 1;
do {
    console.log(com3);
    com3++;
}
while(com3 <= 5);


// Task 14 — Mini Challenge 
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.
for (let pass = 1; pass <= 100; pass++){
    if (pass > 40){
        break;
    }
    if (pass % 5 == 0){
        continue;
    }
    console.log(pass);
}
// Task 1 
console.log("5" == 5);
console.log(5 === "5");

// Task 2 Create a variable isRaining (true/false). If it is true, print "Take an umbrella".
let isRanining = true
if (isRanining) {
    console.log("take an umbreall");
}
else console.log("take your all books");

// Task 3 : Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).
let stock = 0;
if (stock === 0) {
    console.log("out of stock");
}


// Task 4 : Take a number variable and check whether it is positive or negative (using if-else).
let num = -6;
if (num >= 0) {
    console.log("Positive number");
}
else console.log("Negative Number");


// Task 5: Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
let year = 2000;
year % 4 === 0 ? console.log("Leap Year") : console.log("Normal Year");


// Task 6: Take a speed variable. If speed is greater than 80, 
// print "Overspeeding", otherwise print "Normal speed".
let speed = 79;
speed > 80 ? console.log("Overspeed") : console.log("Normal Speed");


// Task 7: Using age and hasTicket, print "Entry allowed" 
// if age is above 18 AND the person has a ticket (use &&).
let age = 20;
let hasTicket = true;
age > 18 && hasTicket ? console.log("Entry allowed") : console.log("Not allow");


// Task 8: Build a simple login + role-check system that verifies username/password
// and shows a different message based on admin/user role — 
// combine everything from this module (comparison, logical operators, if-else, ternary).   
let userName = "jubaer";
let password = 123;
let role = "admin";
let inputUserName = "jubaer";
let inputPassword = 123;

if (inputUserName === userName && inputPassword === password) {
    role === "admin" ? console.log("welocome admin!") : console.log("Welcome user!");
}
else console.log("Invalid User/Credentials");


// Task 10: Using isOnline, use the NOT operator to print "User is offline".
let isOnline = false;
if (!isOnline){
    console.log("User is Offine");
}




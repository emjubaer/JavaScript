// Task: Take two variables price1 and price2, and compare them using all comparison 
// operators (==, ===, !=, !==, >, <, >=, <=), 
// printing each result with console.log.

let price1 = 10;
let price2 = 25;

// First Comparison 
if (price1 == price2){
    console.log("mile geche");
}
else console.log("mileni");

// Second Comparision 
if (price2 >= price1){
    console.log("Price 2 is boro");
}
else console.log("Price 1 is chotto");

// Third Comaprison 
if ( price1 != price2){
    console.log("Both are not equal");
}
else console.log("Both are equal");

// Fourth Comparison 
if (price2 <= price1){
    console.log("Price 1 is bigger");
}
else console.log("Price 2 is bigger");

// Fifth Comparison
price1 == price2 ? console.log("Both equal") : console.log("both not equal");
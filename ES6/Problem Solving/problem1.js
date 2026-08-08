
// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array 
// where each price is formatted as a string prefixed with "$".


let getFormattedPrices = (prices)=>{
    // return prices;
    let newNumber = prices.map( price => `$${price}`
    )
    return newNumber;
}

let number = [10, 30, 5, 21,50];
console.log(getFormattedPrices(number));
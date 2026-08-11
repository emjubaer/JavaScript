// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a 
// new array sorted from lowest to highest price using a comparator callback in sort().


function sortByPriceAscending(products){
    const newProduct = [...products];
    let newProductList = newProduct.sort((a ,b)=>a.price - b.price);
    console.log(newProduct);
}

let a = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
  { name: "Book", price: 100 }
];
sortByPriceAscending(a);

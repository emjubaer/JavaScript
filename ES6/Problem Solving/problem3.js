
// Task 3: findProductByName(products, name) — find() 
// Given an array of product objects, return the first 
// product matching the given name, or undefined if not found
// Input: products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 

let findProductByName = (products, name) => {
    let targetProduct = products.find(product => product.name === name);
    return targetProduct;
}

let products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }];
console.log(findProductByName(products, "Bag"));



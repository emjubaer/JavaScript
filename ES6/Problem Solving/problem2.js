
// Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, 
// return only the products where stock is greater than 0.

let getAvailableProducts = (products) => {
    let availableProduct =  products.filter(product =>product.stock > 0);
    return availableProduct;
}

let products = [
    {
        name: "pen",
        stock: 5,
    },
    {
        name: "Mobile",
        stock: 25
    },
    {
        name: "Air Buds",
        stock: 0
    }
]
console.log(getAvailableProducts(products));
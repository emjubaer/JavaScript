// Task 9: Build a simple discount system: if cart total is above 1000 AND the user is a member, 
// apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, 
// no discount — use logical operators combined with if-else if.
let cartAmount = 800;
let userRole = "member";
let discount = 0;
let discountPercentage = 0;
let finalPrice = 0;

if (cartAmount > 1000) {
    // userRole === "member" ? console.log("")
    if (userRole === "member") {
        discountPercentage = 20;
        discount = cartAmount * discountPercentage / 100;
        finalPrice = cartAmount - discount;
        console.log(`Total Amount: ${cartAmount}`);
        console.log(`Total Discount: ${discount}`);
        console.log(`Final Amount: ${finalPrice}`);
    }
    else {
        discountPercentage = 10;
        discount = cartAmount * discountPercentage / 100;
        finalPrice = cartAmount - discount;
        console.log(`Total Amount: ${cartAmount}`);
        console.log(`Total Discount: ${discount}`);
        console.log(`Final Amount: ${finalPrice}`);
    }
}
else {
    discount = cartAmount * discountPercentage / 100;
    finalPrice = cartAmount - discount;
    console.log(`Total Amount: ${cartAmount}`);
    console.log(`Total Discount: ${discount}`);
    console.log(`Final Amount: ${finalPrice}`);
}
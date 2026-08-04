
// Object List 

const employee = {
  id: 101,
  name: "Jubaer",
  department: "IT",
  salary: 40000
};

const product = {
  name: "Laptop",
  price: 80000
};

// Destructuring করে name এবং salary
const {name, salary} = employee;
console.log(`Your name is ${name}, Your Salary is: ${salary}`);

// Show this: Jubaer works in IT department and earns 40000 BDT.
const {department} = employee;
console.log(`${name} works in ${department} department and earns ${salary} BDT.`);

// Object.keys() দিয়ে সব Property Name Print
// Object.values() দিয়ে সব Value Print
const allKeys = Object.keys(employee);
console.log(allKeys);
const allDept = Object.values(employee);
console.log(allDept);



